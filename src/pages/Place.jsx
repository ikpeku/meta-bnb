import { useState } from "react";
import { Nftlisting } from "./homecomponents/components/Nftlisting";
import images from "../constant";

export const Place = () => {
  const items = [
    {
      id: 1,
      title: "Resturant",
    },
    {
      id: 2,
      title: "Cottage",
    },
    {
      id: 3,
      title: "Castle",
    },
    {
      id: 4,
      title: "fantast city",
    },
    {
      id: 5,
      title: "beach",
    },
    {
      id: 6,
      title: "Carbins",
    },
    {
      id: 7,
      title: "Off-grid",
    },
    {
      id: 8,
      title: "Farm",
    },
  ];

  const { nft0 ,nft1 ,nft2 ,nft3 ,nft4 ,nft5,nft6 ,nft7, nft8, nft9, nft10, nft11, nft12, nft13, nft14, nft15, star } = images;

  const itemcol = [

    {
      photo: nft4,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category : "Castle"
    },
    {
      photo: nft5,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "fantast city"
    },
    {
      photo: nft6,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "fantast city"
    },
    {
      photo: nft7,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Off-grid"
    },
    {
      photo: nft0,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Off-grid"
    },
    {
      photo: nft1,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Farm"
    },
    {
      photo: nft2,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Carbins"
    },
    {
      photo: nft3,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "fantast city"
    },
    {
      photo: nft8,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "beach"
    },
    {
      photo: nft9,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Resturant"
    },
    {
      photo: nft10,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "fantast city"
    },
    {
      photo: nft11,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Resturant"
    },
    {
      photo: nft12,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "fantast city"
    },
    {
      photo: nft13,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Cottage"
    },
    {
      photo: nft14,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "Cottage"
    },
    {
      photo: nft15,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star],
      category: "fantast city"
    },
  ];

  const [colID, SetColID] = useState("All");

  // console.log(colID);

  const handleCol = (item) => {
    // console.log("items", item)
    SetColID(item)

  }



  const itemsFilter = itemcol.filter((item) => {
      switch (colID) {
        case "All":
          return true

        case "Resturant":
        case "Cottage" :
        case "Castle" :
        case "fantast city" :
        case "beach" :
        case "Carbins" :
        case "Off-grid" :
        case "Farm" :
          return item.category === colID;
          
      
        default:
          return true;
      }
  })
  return (
    <>
      <div className="flex items-center md:justify-center gap-2 md:space-x-10 text-[#B4B4B4] text-lg mt-10 md:mt-20">
        <ul className="hidden md:flex space-x-10">
          {items.map((item) => (
            <li onClick={() => handleCol(item.title)} key={item.id} className="text-xl  cursor-pointer">
              {item.title}
            </li>
          ))}
        </ul>
        <select defaultValue={colID} className="block border-4 outline-none p-2 w-full  md:hidden"  onClick={(e) => handleCol(e.currentTarget.value)}>
          <option value={colID}>All</option>
          {items.map((item) => (
            <option
             
              key={item.id}
              value={item.title}
            >
              {item.title}
            </option>
          ))}
        </select>
        <div className="relative">
          <input
            onChange={(e) => SetColID(e.target.value)}
            type="text"
            placeholder="Location"
            className="border-4 outline-none p-2 w-full md:w-40 rounded-lg"
          />
          <span className="material-symbols-outlined absolute inset-y-3 right-2">
            tune
          </span>
        </div>
      </div>
      <Nftlisting items={itemsFilter} />
    </>
  );
};
