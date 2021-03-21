import Image from "next/image";

export default function Alert() {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
      <div className="flex w-full max-w-md bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <div className="w-12 h-12 rounded-full">
                <Image
                  src="/ulrich_katzer.jpg"
                  alt="Ulrich Katzer"
                  height="350"
                  width="350"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
            <div className="flex-1 w-0 ml-3">
              <p className="text-sm font-medium text-gray-900">Ulrich Katzer</p>
              <p className="mt-1 text-sm text-gray-500">
                <a href="tel:+49 (0) 171 867 13 89">+49 (0) 171 867 13 89</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-4 border-l border-gray-200">
          <a
            href="tel:+49 (0) 171 867 13 89"
            className="flex items-center justify-center w-full p-4 text-sm font-medium text-indigo-600 border border-transparent rounded-none rounded-r-lg hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
