import image from "./binanceLogo.jpg";

function Logo() {
    return (
        <div className="flex justify-center items-center px-5 md:px-20 pt-10">
            <img
                src={image}
                alt="Binance logo"
                className="h-60 md:h-100 w-auto object-contain"
            />
        </div>
    );
}

export default Logo;