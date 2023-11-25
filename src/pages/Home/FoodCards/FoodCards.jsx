import { product1, product2, product3, product4 } from "../../../assets";

const FoodCards = () => {

    const allFoods = [
        {
            "id": 1,
            "title": "Baked Chicken Wings and Legs",
            "image": product1,
            "discount": "20% Off",
            "price": "$30.00",
            "rating": 4.7,
            "reviews": 2500,
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
            "reviews": 2000,
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
            "reviews": 3000,
            "sellCategory": "Regular",
            "description": ["Assorted Desserts", "Sweet Delights"],
            "category": "Junk Food"
        }
    ];

    return (
        <div className="Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            {
                allFoods.map(food => (
                    <div key={food.id} className="max-w-[424px] bg-white rounded-md overflow-hidden group mx-auto">
                        <div className="relative overflow-hidden w-full h-[296px] md:h-[202px] lg:h-[190px]">
                            <img className="w-full h-full group-hover:scale-110 duration-500 ease-in-out" src={food.image} alt={food.title} />
                            <p className="absolute top-[10px] right-[10px] bg-[#302C3A] text-white rounded-md p-2">{food.discount}</p>
                        </div>
                        <div className="py-6 px-5">
                            <div className="flex justify-between items-center">
                                <p className="Heading3">{food.price}</p>
                                <p className="flex items-center gap-1">
                                    <span>{food.rating}</span>
                                    <span>({food.reviews})</span>
                                </p>
                            </div>
                            <p className="ProductTitle">{food.title}</p>
                            <p>{food.description.map(desc => <li>{desc}</li>)}</p>
                            <button className="bg-white  text-[#000232] w-full mt-4 p-2 rounded-md">Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodCards