import { traditionalFood } from "../../assets"
import { Heading } from "../../components"
import { useState } from "react";
import {FoodCards} from "../../pages";

const TraditionalFood = () => {

    const [activeTab, setActiveTab] = useState(1);

    const categories = [
        { id: 1, name: 'All Category' },
        { id: 2, name: 'Thai Cuisine' },
        { id: 3, name: 'Mexican' },
        { id: 4, name: 'Italian' },
        { id: 5, name: 'Vegetarian' },
        { id: 6, name: 'Junk Food' },
    ];

    const styleBg = {
        backgroundImage: `url(${traditionalFood})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    const handleTabClick = (id) => {
        setActiveTab(id);
    }

    return (
        <div style={styleBg}>
            <div className="Container pt-[80px] pb-[100px]">
                <Heading textAlign="text-center">
                    <p>Some Traditional Food</p>
                    <p className="pt-3">Based on Location</p>
                </Heading>
                <div>
                    <ul className="CategoriesTab">
                        {
                            categories.map(category => (
                                <li key={category.id} onClick={() => handleTabClick(category.id)} className={`py-2 px-[10px] rounded-lg font-[500] cursor-pointer ${activeTab === category.id ? 'Active' : ''}`}>
                                    {category.name}
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        {activeTab === 1 && <FoodCards />}
                        {activeTab === 2 && <FoodCards />}
                        {activeTab === 3 && <FoodCards />}
                        {activeTab === 4 && <p>Tab 4 Content</p>}
                        {activeTab === 5 && <p>Tab 5 Content</p>}
                        {activeTab === 6 && <p>Tab 6 Content</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TraditionalFood;