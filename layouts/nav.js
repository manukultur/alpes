import { useState } from "react";
import { Transition } from "@tailwindui/react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const Category = ({ text }) => {
    return (
      <h3 className="uppercase tracking-wider text-gray-500 text-sm">{text}</h3>
    );
  };

  const LinkList = ({ children }) => {
    return <ul className="mt-5 space-y-4">{children}</ul>;
  };

  const PageLink = ({ text, uid, description }) => {
    return (
      <li className="flow-root">
        <Link href={`/${uid}`}>
          <a className="hover:underline">{text}</a>
        </Link>
        <div className="text-sm text-gray-400">{description}</div>
      </li>
    );
  };

  return (
    <div className="z-50 sticky top-0 ">
      <div className="relative z-10 bg-white shadow">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isOpen ? "text-gray-900" : "text-gray-500"
            } hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="text-sm text-gray-600">+49 (0) 171 867 13 89</div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <div className="absolute z-10 inset-x-0 transform shadow-lg">
          <div className="absolute inset-0 flex" aria-hidden="true">
            <div className="bg-white w-1/2"></div>
            <div className="bg-gray-50 w-1/2"></div>
          </div>
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <nav
              className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
              aria-labelledby="solutionsHeading"
            >
              <h2 id="solutionsHeading" className="sr-only">
                Solutions menu
              </h2>
              <div>
                <Category text="Küchen" />
                <LinkList>
                  <PageLink
                    text="Explore"
                    uid="design"
                    description="Küchen Beispiele"
                  />
                  <PageLink
                    text="Designs"
                    uid="design"
                    description="Küchen Beispiele"
                  />
                  <PageLink
                    text="Fakten"
                    uid="design"
                    description="Downloads, Broschüren"
                  />
                </LinkList>
              </div>
              <div>
                <Category text="Showroom" />
                <LinkList>
                  <PageLink
                    text="Events, Kurse"
                    uid="design"
                    description="Live im Showroom"
                  />
                  <PageLink
                    text="Videos"
                    uid="design"
                    description="Kochen mit Musik"
                  />
                  <PageLink
                    text="Anfahrt"
                    uid="design"
                    description="Salon Alpes"
                  />
                </LinkList>
              </div>
            </nav>
            <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
              <div>
                <Category text="Blog" />
                <LinkList>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <div className="hidden sm:block flex-shrink-0">
                        <img
                          className="w-32 h-20 object-cover rounded-md"
                          src="/limone.jpg"
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1 sm:ml-8">
                        <h4 className="text-base font-medium text-gray-900 truncate">
                          Playliste am Start
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Eget ullamcorper ac ut vulputate fames nec mattis
                          pellentesque elementum. Viverra tempor id mus.
                        </p>
                      </div>
                    </a>
                  </li>
                </LinkList>
              </div>
              <div className="mt-6 text-sm font-medium">
                <a
                  href="#"
                  className="text-blue-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  Alle Beiträge <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="mt-6 text-sm">
                <Category text="Küche und Welt" />
                <p>Weilerstraße 71, 73312 Geislingen an der Steige</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
