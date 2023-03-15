import React, { useState, useEffect } from "react";
import SpaceItem from "./SpaceItem";
import image from "./Nav/image";
import { Link } from "react-router-dom";
import "./spinner.css";
const Home = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});
  const [filter, setFilter] = useState({
    launch_year: "",
    launch_success: "",
    land_success: "",
  });
  function getUpdatedURL() {
    return `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${filter.launch_year}&launch_success=${filter.launch_success}&land_success=${filter.land_success}`;
  }
  const updateFilter = (e) => {
    setLoading(true);
    let url = getUpdatedURL();
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setQuote(data);
      });
    let name = e.target.name;
    let val = e.target.value;
    if (filter[name] === val) {
      val = "";
    }
    setFilter({ ...filter, [name]: val });
    getData();
  };
  const getData = async () => {
    const api = getUpdatedURL();
    const response = await fetch(api);
    const resData = await response.json();
    console.log(resData);
    setData(resData);
  };
  useEffect(() => {
    getData();
  }, [filter]);
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
    <div className="bg-gray-200">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
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
          </div>
          <div className="flex">
            <div>
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
                      {console.log(filter)}
                      <hr class="h-px w-44 ml-6 my-1 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>

                    <div className="mt-6 ml-8 grid grid-rows-6 grid-cols-2">
                      {fields.map(({ year, path }) => (
                        <Link>
                          <button
                            type="button"
                            value={year}
                            onClick={updateFilter}
                            name="launch_year"
                            className={`focus:outline-none  text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:${
                              filter.launch_year === year.toString()
                                ? "focus:ring-green-800"
                                : ""
                            }`}
                          >
                            {year}
                          </button>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4">
                      <div>
                        <p className="mt-2 text-lg text-center ">
                          Successful Launch
                        </p>
                        <hr class="h-px w-40 ml-7 my-1 bg-gray-200 border-0 dark:bg-gray-700" />
                      </div>
                      <div className="mt-4 ml-4">
                        <button
                          variant={
                            filter.launch_success === "true"
                              ? "success"
                              : "outline-success"
                          }
                          type="button"
                          name="launch_success"
                          value={true}
                          onClick={updateFilter}
                          class="focus:outline-none mr-4 text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                        >
                          True
                        </button>
                        <button
                          variant={
                            filter.launch_success === "false"
                              ? "success"
                              : "outline-success"
                          }
                          type="button"
                          name="launch_success"
                          value={false}
                          onClick={updateFilter}
                          class="focus:outline-none ml-6 text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                        >
                          False
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div>
                        <p className="mt-2 text-lg text-center ">
                          Successful Landing
                        </p>
                        <hr class="h-px w-40 ml-7 my-1 bg-gray-200 border-0 dark:bg-gray-700" />
                      </div>
                      <div className="mt-4 ml-4">
                        <button
                          variant={
                            filter.launch_success === "true"
                              ? "success"
                              : "outline-success"
                          }
                          type="button"
                          name="land_success"
                          value={true}
                          onClick={updateFilter}
                          class="focus:outline-none mr-4 text-white w-16 bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                        >
                          True
                        </button>
                        <button
                          variant={
                            filter.launch_success === "false"
                              ? "success"
                              : "outline-success"
                          }
                          type="button"
                          name="land_success"
                          value={false}
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
            <div>
              <div className="flex-1  bg-gray-200  ">
                <div className="grid grid-cols-4 grid-rows-6 ml-72 mt-28 ">
                  {data &&
                    data.map((element) => {
                      return (
                        <div className="mb-12">
                          <SpaceItem
                            imgUrl={element.links.mission_patch_small}
                            mission_name={element.mission_name}
                            flight_number={element.flight_number}
                            ids={
                              element.mission_id
                                ? element.mission_id
                                : "no mission"
                            }
                            launch_year={element.launch_year}
                            launch_success={element.launch_success}
                            successful_landing={
                              element.rocket.first_stage.cores[0].land_success
                            }
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
