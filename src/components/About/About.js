import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import video from "../../images/My Video3.mp4";

const About = () => {
  return (
    <div className="relative ">
      <div className="absolute -top-72 opacity-20">
        <video loop autoPlay muted className="blur-sm">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <div className="max-w-[940px] mx-auto z-50 ">
        <div className="mt-20 lg:mx-0 md:mx-0 mx-12">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
            <div className="flex flex-column justify-center items-center lg:justify-start md:justify-start lg:items-start md:items-start mb-10">
              <h1 className="font-black text-sm tracking-wider text-sky-600 mb-4">
                ABOUT ME
              </h1>
              <h1 className="text-white text-5xl font-black">
                Designing with passion for Problem Solving
              </h1>
              <button className="transition-all ease-in-out delay-150 duration-300 mt-2 border-b-2 border-indigo-600 text-xs pr-4 pb-2 pt-2 hover:bg-slate-900">
                <span className="hover:ml-2 transition-all ease-in-out delay-150 duration-300 text-white tracking-wider flex">
                  FOLLOW ME ON INSTAGRAM{" "}
                  <AiOutlineInstagram className="text-lg ml-8" />
                </span>
              </button>
            </div>
            <div className="">
              <p className=" text-neutral-400 text-lg font-extralight">
                {" "}
                I’ve always been passionate about pixels and design projects and
                haven’t stopped working and learning about new technologies .
                Other than sitting in from of my display I enjoy myself in
                casual sports, such as bowling or playing football with friends.{" "}
              </p>

              <p className="text-neutral-400 text-lg font-extralight mt-2">
                {" "}
                I'm grateful that my job allows me to work from anywhere. I’m
                active on Instagram where I share most of the and all info about
                my upcoming projects.{" "}
              </p>

              <p className="text-neutral-400 text-lg font-extralight mt-2">
                I also like sharing my experiences on instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
