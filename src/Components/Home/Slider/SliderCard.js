import React from 'react'
import {name,year} from "../../../../styles/Components/Trending/Trending.module.scss"

const SliderCard = () => {
    return (
        <div className={`pr-4 py-2`}>
        
            <div className="bg-cardBg rounded-md cursor-pointer">
                <img className="w-full rounded-md" src={"/img/Temp/sliderimg.png"}/>
                <p className={`${name} text-textPrimary font-bold pt-2 pl-3`}>
                    Bliss
                </p>
                <p className={`${year} text-textSecondary font-semibold pb-2 pl-3`}>
                    2021
                </p>
            </div>
        </div>
    )
}

export default SliderCard
