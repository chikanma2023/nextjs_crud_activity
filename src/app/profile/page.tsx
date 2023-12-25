import Image from "next/image";
import React from "react";
import { detailsArray, reviewsData } from "../../dummyData/index";
import ReviewItem from "@/components/ReviewItem";


const EditButton = () => (
  <button className="edit_button">
    <Image src="/edit.png" alt="" width={12} height={12} />
    Edit
  </button>
);

const ProfilePage = () => {
  return (
    <div className="emmy flex justify-center items-center w-full relative">
      <div className="p-4 flex flex-col text-sm lg:px-20 xl:px-40 2xl:px-60 justify-center lg:w-full xl:w-[100vw] 2xl:w-[100vw] self-center h-full">
        {/* TOP */}
        <div className="profile flex flex-col flex-wrap sm:flex-row md:flex-wrap gap-1 justify-center">
          {/* LEFT-SIDE */}
          <div className="left flex-2 bg-afmber-700 sm:w-1/3 flex flex-col items-center">
            <h1  className="mb-6">My Profile Details</h1>
            <Image
              src="/page2-Ellipse 1 (2).png"
              alt="profile img"
              width={100}
              height={100}
            />
            <h2>GodsFavour Joel</h2>
            <hr className=" border-blue-900" />
            <div className=" p-4 border-t-2">
              <h2>Extra Details</h2>
              {detailsArray.map((details, index) => (
                <div className="flex justify-between p-2 my-3 gap-12" key={index}>
                  <span className="flex items-center gap-1">
                    <Image
                      src={details.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="edit_img"
                    />
                    <p>
                      <span className="font-bold text-sm">
                        {details.label}: <br />
                      </span>
                      {Array.isArray(details.value)
                        ? details.value.map((link, linkIndex) => (
                            <button key={linkIndex} className="edit_button my-2 bg-slate-300">
                              {link}
                            </button>
                          ))
                        : details.value}
                    </p>
                  </span>
                  <EditButton />
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT-SIDE */}
          <div className="right bg-late-500 flex-1 w-2/3 sm:w-full">
            <div className="agent-container md:w-full lg:w-full flex flex-col mb-10 ">
              {/* PROFILE CARD */}
              <div className="box p-12 bg-light-green border-deep-green border-2 flex-wrap sm:w-[100%]">
                <div className="bio">
                  <h1 className="font-bold">My Biograph</h1>
                  <h3 className="font-bold my-2">
                    I am a Creative Realtor with proper negotiation skills
                  </h3>
                  <p className=" leading-7">
                    The male property agent avatar is designed to be
                    knowledgeable and professional. It is programmed with a
                    foundational understanding of real estate principles, laws,
                    and ethics. Its virtual training includes completing a
                    simulated real estate pre-licensing course, passing a
                    virtual licensing exam, and staying updated through virtual
                    continuing education
                  </p>
                </div>
                <div className="details bg-red-1 flex flex-wrap justify-between pt-8 pb-2 gap-2">
                  <div className="about_details">
                    <span className="font-bold mr-1">1k</span>likes
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">32</span>reviews
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">14</span>publishes
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">3.5</span>rating
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">12</span>sales
                  </div>

                  <div className="about_details">
                    <span className="font-bold mr-1">2</span>years
                  </div>

                  <div className="about_details">
                    <span className="font-bold mr-1">5</span>negatives
                  </div>
                </div>
                {/* ABOUT */}
                <div className="about flex flex-col sm:flex-row justify-between pt-4 gap-2">
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/education.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain self-start mt-0 fill-red-900"
                      />
                      <p className="font-bold">Educational Background:</p>
                    </span>
                    <p className="leading-loose">
                      The male property agent avatar is designed to be
                      knowledgeable and professional. It is programmed with a
                      foundational understanding of real estate principles,
                      laws, and ethics. Its virtual training includes completing
                      a simulated real estate pre-licensing course, passing a
                      virtual licensing exam, and staying updated through
                      virtual continuing education.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/breifcase (1).png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain  self-start mt-0"
                      />
                      <p className="font-bold">Professional Achievements:</p>
                    </span>
                    <p className="leading-loose">
                      In its virtual world, the male property agent avatar may
                      acquire virtual certifications to specialize in various
                      aspects of real estate, depending on the needs of the
                      simulated clients or scenarios it encounters.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/thumbs-like.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain  self-start mt-0"
                      />
                      <p className="font-bold">Likes $ Dislikes:</p>
                    </span>
                    <p className="leading-loose">
                      This avatar is equipped with strong virtual communication
                      skills, including verbal and written capabilities. It
                      possesses a virtual database of local real estate market
                      information, marketing techniques, negotiation strategies,
                      and problem-solving algorithms. It operates with the
                      highest ethical standards in virtual transactions.
                    </p>
                  </div>
                </div>
                <hr className="mt-4 mb-4 border-blue-900" />
                <div className="experiences flex flex-col p-6">
                  <h1 className="font-bold mb-6">My Experiences</h1>
                  <div className="flex gap-3 flex-col sm:flex-row">
                    <div className="flex-1 flex flex-col gap-3">
                      <Image
                        src="/roomate-img1.png"
                        alt=""
                        width={300}
                        height={300}
                      />
                      <h2 className="font-bold">
                        Was a speaker at the international buisness sumit
                      </h2>
                      <p className="flex gap-2">
                        {" "}
                        <Image
                          src="/carbon_location (1).png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        Ore,Ibadan
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <Image
                        src="/roomate-img2.png"
                        alt=""
                        width={300}
                        height={300}
                      />
                      <h2 className="font-bold">
                        Was a speaker at the international buisness sumit
                      </h2>
                      <p className="flex gap-2">
                        {" "}
                        <Image
                          src="/carbon_location (1).png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        Ore,Ibadan
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <Image
                        src="/roomate-img1.png"
                        alt=""
                        width={300}
                        height={300}
                      />
                      <h2 className="font-bold">
                        Was a speaker at the international buisness sumit
                      </h2>
                      <p className="flex gap-2">
                        {" "}
                        <Image
                          src="/carbon_location (1).png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        Ore,Ibadan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" border-blue-900 my-6" />
        {/* BOTTOM */}
        {/* REVIEWS */}
        <div className="flex flex-col p-14">
            <h1 className=" font-bold mt-4">Reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2 mt-6">
              {reviewsData.map((review, index) => (
                <ReviewItem key={index} review={review} />
              ))}
            </div>
            <button className="show_all_button">
              Show all reviews
              <span>
                <Image
                  src="/ep_arrow-up-bold.png"
                  alt=""
                  width={20}
                  height={20}
                  className="mb-2 object-contain"
                />
              </span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;
