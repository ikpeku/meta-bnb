import React from "react";
import { Link } from "react-router-dom";

export const Card = ({item}) => {
  const {photo, title, text, dist, addr, star} = item
 
  
  return (
    // block h-56
    <div>
      <Link className="group text-[#434343]" to="#" >
        <div className="p-4 md:p-6 rounded-3xl border-2 border-[#D7D7D7] bg-white transition group-hover:md:translate-x-1 group-hover:md:translate-y-1 group-hover:shadow-[2px_2px_0_0_#D7D7D7]">
     
          <img src={photo} alt="nft" className="w-full" />
   
          <div className="flex justify-between py-3">
            <p className="text-md">{title}</p>
            <h5 className="font-bold">{text}</h5>
          </div>
        
          <div className="flex justify-between">
            <p className="text-sm">{dist}</p>
            <em className="text-sm">{addr}</em>
          </div>
          <div className="flex space-x-3 py-2">
            {
              star.map((stars, index) => (
                <img src={stars} alt="star" className="h-3 sm:h-5" key={index} />
              ))
            }
          </div>


        </div>
      </Link>
    </div>
  );
};
