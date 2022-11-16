import React from "react";
import images from "../../../constant";
export const Rentcard = () => {
  return (
   
        <div className="mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 gap-10 p-4 md:p-7">
         
          <div className=" container">
            <div className="container">

            {/* className="text-center md:text-left text-4xl sm:font-semibold md:font-bold  lg:font-extrabold lg:text-5xl xl:6xl" */}
              <h1
                id="banner"
               className="text-center md:text-left text-4xl sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl sm:font-semibold md:font-bold lg:font-extrabold "
              >
                Rent a <span className="text-[#A02279]">Place</span> away from{" "}
                <span className="text-[#A02279]">Home</span> in the{" "}
                <span className="text-[#A02279]">Metaverse</span>
              </h1>
            </div>

            <p className="mt-4 text-xl text-justify text-[#434343]">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone.
            </p>
            <br />
            <div className="flex w-full">
              <input type="text" placeholder="Search for location" className="w-3/5 px-3 py-3 md:py-5 border outline-none border-[#A3A3A3] rounded-l-xl active:border-[#A3A3A3] focus:border-[#A3A3A3] " />
              <button className="bg-[#A02279] text-white w-2/5 px-3 py-3 md:py-5 rounded-r-xl">Search</button>
            </div>
          </div>
          <div className="flex-1 max-h-min">
            <img src={images.rentbanner} alt="banner" className="w-full max-h-min h-96" />
          </div>
        </div>
     
  );
};
