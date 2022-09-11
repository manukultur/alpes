import { useState } from "react";
import { Transition } from "@tailwindui/react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const Category = ({ text }) => {
    return (
      <h3 className="text-sm tracking-wider text-gray-500 uppercase">{text}</h3>
    );
  };

  const LinkList = ({ children }) => {
    return <ul className="mt-5 space-y-4">{children}</ul>;
  };

  const PageLink = ({ text, uid, description }) => {
    return (
      <li className="flow-root">
        <Link href={`/${uid}`}>
          <a className="hover:underline" onClick={() => setIsOpen(!isOpen)}>
            {text}
          </a>
        </Link>
        <div className="text-sm text-gray-400">{description}</div>
      </li>
    );
  };

  return (
    <div className="sticky top-0 z-50 ">
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
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link href="/">
            <a
              className="font-bold tracking-wider uppercase"
              onClick={() => setIsOpen(!isOpen)}
            >
              Logo
            </a>
          </Link>
          <div className="text-sm text-gray-600">+49 (0)151 1490 0880</div>
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
        <div className="absolute inset-x-0 z-10 transform shadow-lg">
          <div className="absolute inset-0 flex" aria-hidden="true">
            <div className="w-1/2 bg-white"></div>
            <div className="w-1/2 bg-gray-50"></div>
          </div>
          <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-3">
            <nav
              className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12 lg:col-span-2"
              aria-labelledby="solutionsHeading"
            >
              <h2 id="solutionsHeading" className="sr-only">
                Solutions menu
              </h2>
              <div>
                <Category text="Küchen" />
                <LinkList>
                  <PageLink
                    text="Katalog"
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
                <Category text="Design" />
                <LinkList>
                  <PageLink
                    text="Deine Regeln"
                    uid="edelstahlkueche-nach-deinen-regeln"
                    description="Küchen die dir folgen"
                  />
                  <PageLink
                    text="Deine Mischung"
                    uid="edelstahlkueche-deine-mischung"
                    description="Du mischst die Karten"
                  />
                  <PageLink
                    text="Ganz oben"
                    uid="edelstahlkueche-ganz-oben"
                    description="Du entscheidest, wie hoch"
                  />
                  <PageLink
                    text="Ohne Zwang"
                    uid="edelstahlkueche-ohne-zwang"
                    description="Mal eben nach draussen rollen."
                  />
                  <PageLink
                    text="Am Pool"
                    uid="edelstahlkueche-am-pool"
                    description="Perfektes poolside Kochen"
                  />
                </LinkList>
              </div>
              <div>
                <Category text="Showroom" />
                <LinkList>
                  <PageLink
                    text="Events"
                    uid="design"
                    description="Live im Showroom"
                  />
                  <PageLink
                    text="Beratung"
                    uid="beratung"
                    description="Persönlich und schnell"
                  />

                  <PageLink
                    text="Anfahrt"
                    uid="design"
                    description="Salon Alpes"
                  />
                </LinkList>
              </div>
            </nav>
            <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
              <div>
                <Category text="Blog" />
                <LinkList>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="flex p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100"
                    >
                      <div className="flex-shrink-0 hidden sm:block">
                        <img
                          className="object-cover w-32 h-20 rounded-md"
                          src="/limone.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 sm:ml-8">
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
                  className="text-blue-600 transition duration-150 ease-in-out hover:text-indigo-500"
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
