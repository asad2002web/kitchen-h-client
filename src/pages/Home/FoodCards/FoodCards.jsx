import { FaCartPlus, FaRegCircleCheck, FaStar } from "react-icons/fa6";
import { product1, product2, product3, product4 } from "../../../assets";
import { Link } from "react-router-dom";
const FoodCards = () => {

    const allFoods = [
        {
            "id": 1,
            "title": "Baked Chicken Legs",
            "image": product1,
            "discount": "20% Off",
            "price": "$30.00",
            "rating": 4.7,
            "reviews": 2000,
            "sellCategory": "Popular",
            "description": ["4 Piece Chicken", "Spicy Sauce"],
            "category": "Thai Cuisine"
        },
        {
            "id": 2,
            "title": "Grilled Salmon",
            "image": product2,
            "discount": "15% Off",
            "price": "$25.00",
            "rating": 4.5,
            "reviews": 2200,
            "sellCategory": "Popular",
            "description": ["Fresh Salmon", "Lemon Herb Marinade"],
            "category": "Mexican"
        },
        {
            "id": 3,
            "title": "Vegetarian Pizza",
            "image": product3,
            "discount": "10% Off",
            "price": "$20.00",
            "rating": 4.2,
            "reviews": 1800,
            "sellCategory": "Regular",
            "description": ["Tomatoes", "Bell Peppers"],
            "category": "Vegetarian"
        },
        {
            "id": 4,
            "title": "Dessert Sampler",
            "image": product4,
            "discount": "25% Off",
            "price": "$15.00",
            "rating": 4.8,
            "reviews": 320,
            "sellCategory": "Regular",
            "description": ["Assorted Desserts", "Sweet Delights"],
            "category": "Junk Food"
        }
    ];


    const foodReviews = (reviews) => {
        if (reviews < 1000) {
            return reviews;
        } else {
            const result = reviews / 1000;
            return result % 1 === 0 ? result.toFixed(0) + "K" : result.toFixed(1) + "K";
        }
    }

    return (
        <div className="Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            {
                allFoods.map(food => (
                    <div key={food.id} className="max-w-[424px] md:w-full bg-white rounded-md overflow-hidden group mx-auto">
                        <div className="relative overflow-hidden w-full h-[296px] md:h-[202px]">
                            <img className="w-full h-full group-hover:scale-110 duration-500 ease-in-out" src={food.image} alt={food.title} />
                            <p className="absolute top-[10px] right-[10px] bg-[#302C3A] text-white font-semibold rounded-md p-2">{food.discount}</p>
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
                            <p className="pt-2">{food.description.map(desc => <p className="flex items-center gap-2 pb-2">
                                <FaRegCircleCheck className="text-[#FE724C]" />
                                <span>{desc}</span>
                            </p>)}</p>
                            <div className="ButtonBorder flex items-center justify-center w-full mt-4 p-2 leading-[54px] h-[54px] text-lg font-[500]">
                                <Link className="w-full h-full flex items-center justify-center gap-2" to={`/`}>
                                    <FaCartPlus />
                                    <span>Add to Cart</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodCards