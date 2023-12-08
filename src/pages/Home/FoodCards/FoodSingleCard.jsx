import { FaCartPlus, FaHeartCircleCheck, FaHeartCircleMinus, FaRegCircleCheck, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
const FoodSingleCard = ({ food }) => {
    const [wishList, setWishList] = useState(true);
    const foodReviews = (reviews) => {
        if (reviews < 1000) {
            return reviews;
        } else {
            const result = reviews / 1000;
            return result % 1 === 0 ? result.toFixed(0) + "K" : result.toFixed(1) + "K";
        }
    }
    return (
        <div className="max-w-[424px] md:w-full bg-white rounded-md overflow-hidden group mx-auto">
            <div className="relative overflow-hidden w-full h-[296px] md:h-[202px]">
                <img className="w-full h-full group-hover:scale-110 duration-500 ease-in-out" src={food.image} alt={food.title} />
                <p className="absolute top-[10px] right-[10px] bg-[#302C3A] text-white font-semibold rounded-md p-2">{food.discount}</p>
                <p className="absolute top-[10px] left-[10px] bg-white text-[#f01543] text-xl rounded-full p-2 cursor-pointer">
                    {
                        wishList ? <FaHeartCircleCheck /> : <FaHeartCircleMinus />
                    }
                </p>
            </div>
            <div className="py-6 px-5">
                <div className="flex justify-between items-center border-b-[rgba(229,230,235,0.4)] border-b border-solid pb-2">
                    <p className="Heading3">{food.price}</p>
                    <p className="flex items-center gap-1 text-[#000929] font-bold">
                        <FaStar className="text-xl block mr-1 text-[#FFB23E]" />
                        <span>{food.rating}</span>
                        <span>({foodReviews(food.reviews)})</span>
                    </p>
                </div>
                <h3 className="ProductTitle pt-2">{food.title}</h3>
                <p className="pt-2">{food.description.map(desc => <p key={desc} className="flex items-center gap-2 pb-2">
                    <FaRegCircleCheck className="text-[#FE724C]" />
                    <span>{desc}</span>
                </p>)}</p>
                <div className=" main-btn-three ButtonBorder flex items-center justify-center w-full mt-4 p-2 leading-[54px] h-[54px] text-lg font-[500]">
                    <Link className="w-full h-full flex items-center justify-center gap-2" to={`/`}>
                        <FaCartPlus />
                        <span>Add to Cart</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default FoodSingleCard