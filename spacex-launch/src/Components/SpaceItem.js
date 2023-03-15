import React from "react";

const SpaceItem = (props) => {
  let {
    imgUrl,
    mission_name,
    flight_number,
    ids,
    launch_year,
    launch_success,
    successful_landing,
  } = props;
  return (
    <div>
      <div className="w-56 bg-white p-2 rounded-lg shadow m-2 dark:bg-white ">
        <a href="/launchDetail">
          <img className="w-48 ml-2 mt-6 bg-gray-200" src={imgUrl} alt="" />
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-purple-700">
              {mission_name + "#" + flight_number}
            </h5>
          </a>
          <div className="flex ">
            <div className="font-bold text-md flex-auto  text-black">
              Mission Ids:
            </div>
            <span className="flex-auto text-black">{ids}</span>
          </div>
          <div className="flex ">
            <p className="font-bold text-md flex-auto text-black">
              Launch Year:
            </p>
            <span className="flex-auto text-black">{launch_year}</span>
          </div>
          <div className="grid grid-cols-4 ">
            <p className="font-bold text-md col-span-3 col-start-1 text-black">
              Successful Launch :
            </p>
            <span className="col-span-1 col-start-4 text-black">
              {launch_success ? "true" : "false"}
            </span>
          </div>
          <div className="grid grid-cols-4 ">
            <p className="font-bold text-md col-span-3 col-start-1 flex-auto text-black">
              Successful Landing:
            </p>
            <span className="col-span-1 col-start-4 justify-items-center text-black">
              {successful_landing ? "true" : "false"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceItem;
