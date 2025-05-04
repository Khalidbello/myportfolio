import Image from "next/image";
import Link from "next/link";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Buy() {
  return (
    <div className="w-ful h-[100vh] fixed md:relative text-gray-800 pt-4 pb-10 md:pt-10 px-4 md:px-10 overflow-y-auto bg-cyan-50">
      <div className="flex items-center md:gap-x-24 gap-x-4 mb-12 max-w-6xl mx-auto">
        <Link
          href="/azula"
          className="bg-green-100 p-2 rounded-xl flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-5 text-green-600" />
        </Link>
        <h1 className="font-semibold text-lg font-mono">Azula Purchase page</h1>
      </div>

      <div className="grid grid-cols-8 gap-x-4 gap-y-6 max-w-6xl mx-auto">
        <div className="col-span-8 md:col-span-4  md:items-stretch rounded-xl bg-gray-300">
          <Image
            alt="azula image"
            src="/azula-img.png"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="col-span-8 md:col-start-5 md:col-span-4 space-y-8 bg-cyan-100 px-8 md:px-16 py-8 md:py-20 rounded-xl ">
          <div className="grid grid-cols-6">
            <div className="col-span-2 text-lg">Quantity</div>
            <div className="col-start-4 cols-span-3 inline-flex gap-x-3">
              <button className="bg-green-500 px-3 py-1 rounded-xl text-green-50">
                -
              </button>
              <span className="bg-white text-gray-600 px-4 py-2 rounded-xl">
                2
              </span>
              <button className="bg-green-500 px-3 py-1 rounded-xl text-green-50">
                +
              </button>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-2 text-lg ">Price</div>
            <div className="col-start-4 col-span-3 bg-white text-gray-600 px-4 py-2 rounded-xl">
              $300
            </div>
          </div>
          <form className="block">
            <div>
              <label htmlFor="phoneNumber">Enter whatsapp phone number</label>
              <input
                type="text"
                className="w-full rounded-xl border-gray-400 outline-green-200 px-3 py-2"
              />
            </div>
          </form>
          <div className="mb-4">
            <button className="px-4 py-2 rounded-xl text-white font-mono bg-green-600">
              Make Payment
            </button>
          </div>
          <div>
            <p className="text-mono mb-2">
              Want to purchase in large quantity...?
            </p>
            <div>
              <button className="px-4 py-2 rounded-xl  font-mono text-green-600 bg-green-50">
                Become a distributor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
