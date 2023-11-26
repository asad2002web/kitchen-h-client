import { product1, product2, product3, product4 } from "../../../assets";
import {FoodSingleCard} from "../../../pages";

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
        },
        {
            "id": 5,
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
            "id": 6,
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
    return (
        <div className="Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            {
                allFoods.map(food => (<FoodSingleCard key={food.id} food={food} />))
            }
        </div>
    )
}

export default FoodCards