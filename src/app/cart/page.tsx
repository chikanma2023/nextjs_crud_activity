import Button1 from "@/components/Button1";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100%] relative p-auto bg-slatle-600 w-full p-4 sm:p-8 md:p-14">
      <div className="cart-container flex justify-end px-6 py-12 max-sm:justify-center w-full xl:w-[100%]">
        <div className="w-full lg:w-1/3 md:w-2/3 p-7">
          <p className="text-4xl">CLEAN</p>
          <h1 className="font-bold text-3xl">Household items For Sale</h1>
          <button className="text-xs text-default p-3 rounded-3xl px-3 lg:w-1/3 md:w-1/3 w-1/2 max-sm:px-2 border-2 border-gray-900 mt-2">
            Coming Soon!
          </button>
        </div>
      </div>
      <button className="self-start text-xs text-default p-3 rounded-3xl px-3 lg:w-1/4 md:w-1/4 xl:w-[10%] w-1/2 max-sm:px-2 border-2 border-gray-900 my-3">
        Clear All
      </button>
      {/* BODY */}
      <div className="body w-full flex items-center 
      max-sm:flex-col justify-between flex-col flex-wrap sm:flex-row">
        {/* ITEMS */}
        <div className="flex gap-4 max-sm:flex-col">
          <div className="home_item">
            <div className="home_houses_image">
              <Image src="/cart-img.png" alt="home" width={350} height={100} />
            </div>

            <div className="home_houses_description flex justify-between mt-4">
              <div className="houses_description_left text-sm">
                <h6>1 bedroom apartment</h6>
                <div className="location_icon_and_location flex gap-1 mt-4">
                  <Image
                    src="/location.png"
                    alt="location"
                    width={20}
                    height={10}
                  />
                  <p>Ore, Ibadan</p> <p className="fw-8">@agent</p>
                </div>
              </div>

              <div className="houses_description_right text-right text-sm">
                <p className="semibold text-2xl">N350k</p>
                <div className="flex gap-1 items-center mt-1">
                  <Image src="/star.png" alt="rating" width={20} height={1} />
                  <p>Trust 3.5</p>
                </div>
              </div>
            </div>

            <div className="show_more_button mt-3 w-1/3 flex ">
              <Button1 text="Extra" />
            </div>
          </div>

          <div className="home_item">
            <div className="home_houses_image">
              <Image src="/cart-img2.png" alt="home" width={350} height={200} />
            </div>

            <div className="home_houses_description flex justify-between mt-4">
              <div className="houses_description_left text-sm">
                <h6>1 bedroom apartment</h6>
                <div className="location_icon_and_location flex gap-1 mt-4">
                  <Image
                    src="/location.png"
                    alt="location"
                    width={20}
                    height={10}
                  />
                  <p>Ore, Ibadan</p> <p className="fw-8">@agent</p>
                </div>
              </div>

              <div className="houses_description_right text-right text-sm">
                <p className="semibold text-2xl">N350k</p>
                <div className="flex gap-1 items-center mt-1">
                  <Image src="/star.png" alt="rating" width={20} height={1} />
                  <p>Trust 3.5</p>
                </div>
              </div>
            </div>

            <div className="show_more_button mt-3 w-1/3 flex ">
              <Button1 text="Extra" />
            </div>
          </div>
        </div>
        {/* PRICE */}
        <div className="flex flex-col gap-2 p-6 rounded-md w-full sm:flex-2 sm:w-2/3 lg:w-1/4 md:h-1/3 lg:h-1/3 shadow-md text-sm flex-grow-0 sticky top-0 right-0">
          {" "}
          {/* Add shadow-md for box shadow */}
          <div className="flex justify-between mb-4">
            <span className="text-sm font-bold">N350,000/year</span>
            <span className="flex gap-1">
              <Image
                src="/material-symbols_star.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              Trust: 3.5
            </span>
          </div>
          <button className="ring-2 ring-yellow rounded-full text-white bg-deep-green p-2 mt-2 shadow shadow-yellow-500/50">
            Communicate with Agent
          </button>
          <span className="self-center p-2">You Won`t be charged Yet</span>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex justify-between">
              <span>Maximum Extra Fee</span>
              <span>0%</span>
            </div>
            <div className="flex justify-between">
              <span>Minimum Extra Fee</span>
              <span>0%</span>
            </div>
            <div className="flex justify-between">
              <span>Legal Fee</span>
              <span>0%</span>
            </div>
          </div>
          <hr className="mt-2 mb-2 border-blue-900" />
          <div className="flex justify-between">
            <span className="text-sm">Total Amount:</span>
            <span className="font-bold text-sm">N485,000-N500,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
