import image1 from "./img1.png";
import image2 from "./img2.png";
import image3 from "./img3.png";
import image4 from "./img4.png";

function Focus() {
    return (
        <div>
            <h1 className="font-heading px-20 pt-10 text-white text-[32px] font-bold">
                Areas of <span className="text-blue-500">Focus</span>:
                
            </h1>

            <div className="grid grid-cols-2 gap-10 px-8">

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image1}
                        alt="Focus area 1"
                        className="h-80 w-auto object-contain"
                    />
                    <p className="text-white mt-5 font-heading">
                        Create a descriptive Home Page
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image2}
                        alt="Focus area 2"
                        className="h-80 w-auto object-contain"
                    />
                    <p className="text-white mt-4 font-heading">
                        Include Charts for better understanding
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image3}
                        alt="Focus area 2"
                        className="h-80 w-auto object-contain"
                    />
                    <p className="text-white mt-4 font-heading">
                        Avoid Including too much buying options on the intro page itself, add beginner level buying options.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        src={image4}
                        alt="Focus area 2"
                        className="h-80 w-auto object-contain"
                    />
                    <p className="text-white mt-4 font-heading">
                        Simplify header by removing not so important options.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Focus;
