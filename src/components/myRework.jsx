import image from "./Dashboard.png";
import image2 from "./markets.png";
import image3 from "./homePage.png";

function Rework() {
    return(
        <div>
            <div>
                <h1 className="font-heading px-5 md:px-20 pt-10 text-white text-[24px] md:text-[32px] font-bold">My <span className="text-green-500">Rework</span>:</h1>
                <h2 className="font-heading px-5 md:px-20 pt-5 text-white text-[20px] md:text-[25px] font-semibold">Simplified Dashboard</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-8 pt-5">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image}
                        alt="Binance logo"
                        className="h-60 md:h-80 w-auto object-contain"
                    />
                </div>
                <div>
                    <p className="font-heading pt-5 text-white text-[16px] md:text-[20px]">• Kept necessary elements in the header removing the cluster</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Added a search bar</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Removed social profile section only keeping greeting the user</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Added beginner C.T.A. options on R.H.S.</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• In the balance section, added a graph showcasing user's investments and growth of his assets (graph can be modified)</p>
                </div>
            </div>

            <h2 className="font-heading px-5 md:px-20 pt-10 text-white text-[20px] md:text-[25px] font-semibold">Enhanced Markets Page</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-8 pt-5">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image2}
                        alt="Binance logo"
                        className="h-60 md:h-80 w-auto object-contain"
                    />
                </div>
                <div className="items-center">
                    <p className="font-heading pt-5 text-white text-[16px] md:text-[20px]">• Simplified the excess buying information</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Segregated buying options into categories, showing details only when expanded</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Added a graph showing trends of the selected category</p>
                </div>
            </div>

            <h2 className="font-heading px-5 md:px-20 pt-10 text-white text-[20px] md:text-[25px] font-semibold">Clean Home Page</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-8 pt-5">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image3}
                        alt="Binance logo"
                        className="h-60 md:h-80 w-auto object-contain"
                    />
                </div>
                <div className="items-center">
                    <p className="font-heading pt-5 text-white text-[16px] md:text-[20px]">• Removed overwhelming information</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Enlarged the signup options for better redirection</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Arranged the elements of the header as required</p>
                    <p className="font-heading pt-3 text-white text-[16px] md:text-[20px]">• Added a slideshow of divs showing U.S.P.s of Binance</p>
                </div>
            </div>
        </div>
    );
}

export default Rework;