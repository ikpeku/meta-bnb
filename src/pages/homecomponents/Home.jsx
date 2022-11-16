import React from 'react'
import { Footerbaner, Marquee, Nftlisting, Rentcard } from './components'
import images from '../../constant'

export const Home = () => {
  const { nft0, nft1, nft2, nft3, nft4, nft5, nft6, nft7 , star} = images;
  

  const items = [
    // nft0 ,nft1 ,nft2 ,nft3 ,nft4 ,nft5,nft6 ,nft7

    {
      photo: nft0,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    {
      photo: nft1,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    {
      photo: nft2,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    {
      photo: nft3,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    {
      photo: nft4,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    {
      photo: nft5,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    {
      photo: nft6,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    {
      photo: nft7,
      title: "Desert king",
      text: "1MBT per night",
      dist: "2345km away",
      addr: "available for 2weeks stay",
      star: [star, star, star, star, star]
    },
    
  ];
  return (
    <div>
      <Rentcard />
      <Marquee />
      <Nftlisting items={items} show={true} />
      <Footerbaner />
    </div>
  )
}
