
const CategoriesItem = ({ item }) => {
    return (

        <div className="bg-[#F3F3F5] p-5 rounded-[20px] relative z-[1] hover:text-white CategoriesItem group sm:max-[490px]">
            <div className="flex gap-x-3 items-center">
            <span className="CategoriesIcon">
                {item.image}
            </span>
            <div>
                <h3 className="SubTitle">{item.name}</h3>
                <p className="text-lg CategoriesIconBullet group-hover:after:bg-white">{item.quantity} items</p>
            </div>
            </div>
        </div>

    )
}

export default CategoriesItem