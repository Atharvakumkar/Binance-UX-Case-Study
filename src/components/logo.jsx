import image from "./binanceLogo.jpg";

function Logo() {
    return (
        <div className="flex justify-center items-center px-20 pt-10">
            <img
                src={image}
                alt="Binance logo"
                className="h-100 w-auto object-contain"
            />
        </div>
    );
}

export default Logo;
