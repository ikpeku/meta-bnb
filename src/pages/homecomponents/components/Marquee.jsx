import React from 'react'
import images from '../../../constant'

export const Marquee = () => {
    const {mbtoken, metamask, opensea} = images

    const items = [
        {
            title: "mb_token",
            photo: mbtoken
        },
        {
            title: "metamask",
            photo: metamask
        },
        {
            title: "opensea",
            photo: opensea
        },
    ]
  return (
    <div className='w-full bg-[#A02279] p-3 flex justify-evenly '>{items.map(({title, photo}) => (
        <img src={photo} alt={title} key={title} className="h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12" />
    ))}
    
    </div>
  )
}
