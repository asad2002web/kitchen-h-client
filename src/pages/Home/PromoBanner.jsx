import { promoBanner1, promoBanner2 } from "../../assets"

const PromoBanner = () => {
    return (
        <div className="Container">
            <div className="flex gap-5 justify-between flex-col md:flex-row">
                <div className="w-full md:w-[40%]">
                    <img className="w-full h-full" src={promoBanner2} alt="promo2" />
                </div>
                <div className="w-full md:w-[60%]">
                    <img className="w-full h-full" src={promoBanner1} alt="promo1" />
                </div>

            </div>
        </div>
    )
}

export default PromoBanner