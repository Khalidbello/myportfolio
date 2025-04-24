import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faRefresh,
  faHurricane,
} from "@fortawesome/free-solid-svg-icons";

export default function HowAzulaWorks() {
  return (
    <div className="how-azula-works px-8 pb-12">
      <div className="flex flex-col jusitfy-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="flex items-start justify-center w-4 h-7 rounded-t-full rounded-b-full border-[2px] border-yellow-500">
            <div className="w-[2px] h-3 mt-1 bg-yellow-500"></div>
          </div>
          <div className="flex items-center jusitfy-center flex-col gap-[2px]">
            <span className="w-[2px] h-1 bg-green-700"></span>
            <span className="w-[2px] h-1 bg-green-700"></span>
            <span className="w-[2px] h-1 bg-green-700"></span>
            <span className="w-[2px] h-1 bg-green-700"></span>
            <span className="w-[2px] h-1 bg-green-700"></span>
            <span className="w-[2px] h-1 bg-green-700"></span>
            <span className="w-[2px] h-1 bg-green-700"></span>
            <span className="w-2 h-2 bg-green-700 rounded-full -mt-[1px]"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative mb-8 mt-6">
        <h2 className="relative inline-block text-green-700 sm:text-xl md:text-2xl font-medium md:font-bold text-center border-b-[1px] border-b-green-700">
          <span className="px-4">How Azula Makes You Cook Better!!!</span>
          <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] left-0 bg-green-700"></div>
          <div className="w-[10px] h-[10px] rounded-full absolute -bottom-[5px] right-0 bg-green-700"></div>
        </h2>
      </div>

      <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
        <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
          <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700">
            <span className="bg-blue-100 p-2 pr-0 rounded-md inline-flex items-center justify-center">
              <svg
                className="w-8 h-8 mr-3 text-blue-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            Heat Guide Technology
          </h2>
          <p>
            <span className="font-semibold">**Directs Heat to Your Pot**</span>{" "}
            {`Azula’s`} heat guide channels 70% of the heat generated from
            charcoal to your food, not the surroundings.
          </p>
        </div>
        <div className="col-span-8 md:col-start-5 md:col-span-4 h-[20rem] md:h-[25rem] bg-blue-100 rounded-xl"></div>
      </div>

      <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
        <div className="col-span-8 md:order-2 md:col-start-5 md:col-span-4 flex flex-col items-start justify-center">
          <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700 ">
            <span className="bg-red-100 p-3 rounded-md inline-flex items-center justify-center">
              <FontAwesomeIcon
                icon={faTemperatureHigh}
                className="text-red-400 h-8"
              />
            </span>
            High-Temp Combustion Chamber
          </h2>
          <p className="text-gray-700">
            {`Azula’s`} Mathematically designed combustion chamber sustain
            ultra-high temperatures, eliminating smoke and incomplete
            combustion.
          </p>
        </div>
        <div className="col-span-8 md:order-1 md:col-start-1 md:col-span-4 h-[20rem] md:h-[25rem] bg-red-100 rounded-md"></div>
      </div>

      <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
        <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-center">
          <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700">
            <span className="bg-blue-100 p-3 rounded-md inline-flex items-center justify-center">
              <FontAwesomeIcon
                icon={faHurricane}
                className="text-blue-500 h-8 -rotate-90"
              />
            </span>
            Optimized Air flow System
          </h2>
          <p className="text-gray-700">
            <span className="font-semibold">**Dual air vents**</span>
            Dual air vents for a more fuel efficient burning
          </p>
        </div>
        <div className="col-span-8 md:col-start-5 md:col-span-4 h-[20rem] md:h-[25rem] bg-blue-100 rounded-md"></div>
      </div>
      <div className="grid grid-cols-8 gap-x-6 gap-y-8 mb-12">
        <div className="col-span-8 md:order-2 md:col-start-5 md:col-span-4 flex flex-col items-start justify-center">
          <h2 className="flex items-center justify-start gap-x-3 text-xl md:text-2xl mb-4 text-green-700">
            <span className="bg-purple-100 p-3 rounded-md inline-flex items-center justify-center">
              <FontAwesomeIcon
                icon={faRefresh}
                className="text-purple-500 h-6 -rotate-90"
              />
            </span>
            Easy charcoal Refueling Desing
          </h2>
          <p className="text-gray-700">
            <span className="font-semibold">**Dual air vents**</span>
            Dual air vents for a more fuel efficient burning
          </p>
        </div>
        <div className="col-span-8 md:order-1 md:col-start-1 md:col-span-4 h-[20rem] md:h-[25rem] bg-purple-100 rounded-md"></div>
      </div>
    </div>
  );
}
