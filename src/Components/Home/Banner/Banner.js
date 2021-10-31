import React from 'react'
import Image from "next/image"
import { banner, fadeBottom, wrapper, description, textSection } from "../../../../styles/Components/Banner/Banner.module.scss"
import { AiFillStar } from "react-icons/ai"
const Banner = () => {
    return (
        <div className={banner}>
            <div className={wrapper}>
                <Image src={"/img/banner.jpg"} layout={"responsive"} width={1920} height={1080} />
                <div className={`${fadeBottom}`}>
                    <div className={`${textSection} px-3 lg:px-20 lg:mb-32 `}>
                        <h1 className={"text-3xl lg:text-6xl font-bold"}>
                            Merlin
                        </h1>

                        <p className={"flex items-center mr-3 mb-3 lg:my-3  text-xl"}>
                            <AiFillStar className="mr-3" />
                            <span className="font-bold shadow-md">7.0</span>
                        </p>

                        <p className={`${description} hidden lg:block text-2xl`}>
                            In the year 2092, space is full of dangerous floating garbage like discarded satellites and deserted spaceships. The crew of a space junk collector ship called The Victory discovers a humanoid robot that’s known to be a weapon of mass destruction. They get involved in a risky business deal and travel through space looking for garbage they can make money off of while also competing with rival junk collectors.
                        </p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Banner
