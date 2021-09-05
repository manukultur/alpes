/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import useSWR from "swr";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
const fetcher = (url) => fetch(url).then((r) => r.json());

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const { data: articles } = useSWR(`/api/articles`, fetcher);
  const { data: navigation } = useSWR(`/api/navigation`, fetcher);

  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow">
            <div className="flex px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <span>Deine Edelstahlküche</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>

          <Popover.Overlay
            className={`${
              open ? "opacity-50 fixed inset-0" : "opacity-0"
            } bg-black`}
          />

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 z-10 transform shadow-lg">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="w-1/2 bg-white" />
                <div className="w-1/2 bg-gray-50" />
              </div>
              <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                <nav
                  className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                  aria-labelledby="solutions-heading"
                >
                  <h2 id="navigation-heading" className="sr-only">
                    Navigations Menu
                  </h2>
                  {navigation &&
                    navigation.data.body.map((section) => (
                      <div>
                        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                          {section.primary.section_title}
                        </h3>
                        <ul role="list" className="mt-5 space-y-6">
                          {section.items.map((item) => (
                            <li key={item.link.slug} className="flow-root">
                              <Link href={`/${item.link.uid}`}>
                                <a>
                                  <Popover.Button
                                    as="span"
                                    className="hover:underline"
                                  >
                                    {item.label}
                                  </Popover.Button>
                                </a>
                              </Link>
                              <div className="text-sm text-gray-400">
                                {item.description}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </nav>
                <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Neues aus der Küche
                    </h3>
                    {articles && (
                      <ul role="list" className="mt-6 space-y-6">
                        {articles.results.map((article) => (
                          <li key={article.id} className="flow-root">
                            <Link href={`/blog/${article.uid}`}>
                              <a>
                                <Popover.Button
                                  as="div"
                                  className="flex p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100"
                                >
                                  <div className="flex-shrink-0 hidden sm:block">
                                    <img
                                      className="object-cover w-32 h-20 rounded-md"
                                      src={article.data.cover_image.url}
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 sm:ml-8">
                                    <h4 className="text-base font-medium text-gray-900 truncate">
                                      {RichText.asText(article.data.title)}
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {article.data.snippet}
                                    </p>
                                  </div>
                                </Popover.Button>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mt-6 text-sm font-medium">
                    <Link href="/blog">
                      <a className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500">
                        <Popover.Button as="div">
                          Alle Beiträge <span aria-hidden="true">&rarr;</span>
                        </Popover.Button>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 text-sm">
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Küche und Welt
                    </h3>
                    <p>Weilerstraße 71, 73312 Geislingen an der Steige</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
