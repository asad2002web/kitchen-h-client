import { CategoriesBg } from "../../assets"
import { Heading } from "../../components"
import {CategoriesItem} from "../../pages"
import { FaBowlRice, FaBurger, FaPizzaSlice, FaUtensils } from 'react-icons/fa6';
const Categories = () => {

    const categoriesList = [
        {
            id: 1,
            name: "Mexcan Cuisine",
            image:<FaBowlRice />,
            quantity: 25
        },
        {
            id: 2,
            name: "Italian Cuisine",
            image: <FaUtensils />,
            quantity: 25
        },
        {
            id: 3,
            name: "Delish Burger",
            image: <FaBurger />,
            quantity: 25
        },
        {
            id: 4,
            name: "Sandwiches",
            image: <FaPizzaSlice/>,
            quantity: 25
        }
    ]

    const styleBg = {
        backgroundImage: `url(${CategoriesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div className="" style={styleBg}>
            <div className="Container pt-[80px] pb-[100px] md:hidden lg:block">
                <div className="flex lg:justify-between items-start lg:items-center flex-col lg:flex-row">
                <Heading textAlign="text-start">
                    Our Categories
                </Heading>
                <button className="py-2 px-4 rounded-lg font-[500] bg-slate-400">View All</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[42px]">
                    {
                        categoriesList.map((item) => <CategoriesItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories