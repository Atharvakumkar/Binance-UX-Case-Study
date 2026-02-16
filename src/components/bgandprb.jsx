import image5 from "./img5.jpg";

function Problem() {
    return(
    <div>
        <div className="bg-zinc-900">
            <h1 className="px-20 pt-10 font-heading text-white text-[32px] font-bold">Background and <span className="text-red-500">Problem</span>:</h1>
            <p className="px-20  font-heading text-white text-[18px]">With a strong focus on international trading options, Binance has emerged as a preferred platform for many users worldwide. Established in 2017, the platform has gained significant popularity among traders and investors by enabling the purchase, sale, and exchange of a wide range of digital assets within a unified ecosystem.<br></br>
            <br></br>
However, despite its extensive functionality, several usability concerns persist. The application interface may appear overwhelming to beginner users due to limited onboarding guidance and insufficient direction on initiating asset purchases or trading activities. Furthermore, the availability of multiple navigation pathways and feature entry points can create confusion, making it challenging for new users to identify appropriate actions or workflows within the platform.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 px-10 pt-10 items">
        
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={image5}
                                alt="Focus area 1"
                                className="h-80 w-auto object-contain"
                            />
                        </div>
                        <p className="text-white mt-15 font-heading text-[36px]">
                                Beginners Prefer Simplified And Clean UI.<br></br>
                                better called<span className = "font-sans font-bold"> Minimalism!</span>
                            </p>
        </div>
    </div>
    );
}

export default Problem;