import React from "react";
import TextInfo from "./TextInfo";
import homePagePhoto from "../images/3d-render-abstract-tree-landscape-with-space-sky.jpg";
import OceanApp from "../images/OceanApp.png";
import mePic from "../images/me-pic.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative">
      <img className="max-lg:h-[75rem]" style={{ height: "1250px", width: "100%" }} src={homePagePhoto} />

      <div className="absolute top-7 mt-4 w-full ">
        <div className="flex justify-around align-middle max-lg:flex-col max-lg:justify-center">
          <div className="flex flex-col items-center justify-center text-white">
            <h1 className="font-bold pb-1">Ocean Buddies Charity Page </h1>
            <img style={{ height: "16rem", width: "32rem" }} src={OceanApp} />
            <TextInfo buttonText="See Other Projects" link="/project" />
          </div>

          <div className=" flex flex-col items-center justify-center pr-10 max-lg:pr-0 max-lg:pb-20 ">
            <img style={{ height: "360px", width: "300px" }} src={mePic} />
            <TextInfo text="Evan Elias: A Full Stack Developer" buttonText="More About Me" link="/about" />
          </div>
        </div>
      </div>
      <div className=" absolute bottom-4 text-white">
        <h3>Image by kjpargeter on Freepik</h3>
      </div>
    </div>
  );
};

export default Home;
