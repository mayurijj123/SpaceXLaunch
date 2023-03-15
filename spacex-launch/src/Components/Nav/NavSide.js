import React from "react";
import image from "./image";
const NavSide = () => {
  // const Years = [
  //   2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
  //   2018, 2019, 2020,
  // ];
  const fields = [
    {
      year: 2006,
      path: "/2006",
    },
    {
      year: 2007,
      path: "/2007",
    },
    {
      year: 2008,
      path: "/2008",
    },
    {
      year: 2009,
      path: "/2009",
    },
    {
      year: 2010,
      path: "/2010",
    },
    {
      year: 2011,
      path: "/2011",
    },
    {
      year: 2012,
      path: "/2012",
    },
    {
      year: 2013,
      path: "/2013",
    },
    {
      year: 2014,
      path: "/2014",
    },
    {
      year: 2015,
      path: "/2015",
    },
    {
      year: 2016,
      path: "/2016",
    },
    {
      year: 2017,
      path: "/2017",
    },
    {
      year: 2018,
      path: "/2018",
    },
    {
      year: 2019,
      path: "/2019",
    },
    {
      year: 2020,
      path: "/2020",
    },
  ];
  return (
    <div>
      <nav class="fixed top-0 z-50 w-full bg-white border-b  dark:bg-gray-200 ">
        <div class="px-3 py-2 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" class="flex ml-2 md:mr-24">
                <img
                  src={image}
                  class="h-12 mr-3 font-bold"
                  alt="SpaceX Logo"
                />
              </a>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ml-3">
                <div
                  class="hidden w-full md:block md:w-auto"
                  id="navbar-default"
                >
                  <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transperent dark:bg-gray-300 md:dark:bg-gray-300 dark:border-gray-100">
                    <li>
                      <a
                        href="/home"
                        class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-200 "
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-200 mb-8">
          <div>
            <p className="font-bold text-lg bg-white p-2 text-black text-center">
              SPaceX Launch Programs{" "}
            </p>
          </div>
          <div className="mt-4 bg-white">
            <div>
              <h1 className="font-bold text-xl ml-2">Filters</h1>
              <p className="mt-2 text-lg text-center ">Launch Year</p>
              <hr class="h-px w-44 ml-6 my-1 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>

            <div className="mt-6 ml-8 grid grid-rows-6 grid-cols-2">
              {fields.map(({ year, path }) => (
                <a href={path}>
                  <button
                    type="button"
                    value={year}
                    name="launch_year"
                    class="focus:outline-none  text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                  >
                    {year}
                  </button>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <div>
                <p className="mt-2 text-lg text-center ">Successful Launch</p>
                <hr class="h-px w-40 ml-7 my-1 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
              <div className="mt-4 ml-4">
                <button
                  type="button"
                  class="focus:outline-none mr-4 text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                >
                  True
                </button>
                <button
                  type="button"
                  class="focus:outline-none ml-6 text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                >
                  False
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <p className="mt-2 text-lg text-center ">Successful Landing</p>
                <hr class="h-px w-40 ml-7 my-1 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
              <div className="mt-4 ml-4">
                <button
                  type="button"
                  class="focus:outline-none mr-4 text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                >
                  True
                </button>
                <button
                  type="button"
                  class="focus:outline-none ml-6 text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                >
                  False
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavSide;
