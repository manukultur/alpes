import { ChevronDownIcon } from "@heroicons/react/solid";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
import Link from "next/link";

const navs = {
  legal: [
    { name: "Impressum", slug: "impressum" },
    { name: "Datenschutz", slug: "datenschutz" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/limone.blue/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Section = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
        {title}
      </h3>
      <ul role="list" className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={`/${item.link.uid ? item.link.uid : item.slug}`}
              className="text-base text-gray-500 hover:text-gray-900"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  const { data: navigation } = useSWR(`/api/navigation`, fetcher);
  return (
    <footer className="pt-1" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {navigation && navigation.data?.body[0] && (
                <Section
                  title={navigation.data.body[0].primary.section_title}
                  items={navigation.data.body[0].items}
                />
              )}
              {navigation && navigation?.data?.body[1] && (
                <Section
                  title={navigation.data.body[1].primary.section_title}
                  items={navigation.data.body[1].items}
                />
              )}
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              {navigation && navigation?.data?.body[2] && (
                <Section
                  title={navigation.data.body[2].primary.section_title}
                  items={navigation.data.body[2].items}
                />
              )}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navs.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={`/${item.slug}`}>
                        <a className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Sprache
            </h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Sprache
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    className="block w-full py-2 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md appearance-none bg-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue="Deutsch"
                  >
                    <option>Deutsch</option>
                    <option>English</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDownIcon
                      className="w-4 h-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="border-t border-yellow-500/[0.5] pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Newsletter
            </h3>
            <p className="mt-2 text-base text-gray-500 max-w-prose">
              Die neuesten Infos zu den Alpes Küchen und aus dem Showroom mit
              Einladungen zu Präsentationen und Events gibt es im Newsletter.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email Adresse
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:placeholder-gray-400 sm:max-w-xs"
              placeholder="Email eintragen"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Abonnieren
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-yellow-500/[0.5] pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navs.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Küche und Welt
            <br />
            Weilerstraße 71, 73312 Geislingen an der Steige
          </p>
        </div>
      </div>
    </footer>
  );
}
