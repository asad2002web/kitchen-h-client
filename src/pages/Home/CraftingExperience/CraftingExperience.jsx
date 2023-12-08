import React from 'react'
import { Experience1, ExperienceBg } from '../../../assets';
import { Heading } from '../../../components';
import { FaMapMarkerAlt, FaUtensils, FaMoneyBill, FaTruck } from 'react-icons/fa';

const CraftingExperience = () => {


  const userExperience = [
    {
      "id": 1,
      "title": "Set your location",
      "description": "A high quality solution beautifully food for customers",
      "iconImg": <FaMapMarkerAlt />
    },
    {
      "id": 2,
      "title": "Select Food",
      "description": "A high quality solution beautifully food for customers",
      "iconImg": <FaUtensils />
    },
    {
      "id": 3,
      "title": "Pay Cash or Online",
      "description": "Providing an upscale and elegant ambiance for",
      "iconImg": <FaMoneyBill />
    },
    {
      "id": 4,
      "title": "Delivery or Pickup",
      "description": "Allowing customers to easily book tables through",
      "iconImg": <FaTruck />
    }
  ];

  const styleBg = {
    backgroundImage: `url(${ExperienceBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={styleBg}>
      <div className="Container text-white flex flex-col lg:flex-row justify-between items-center py-20">
        <div className="lg:w-1/2">
          <img src={Experience1} alt="image" />
        </div>
        <div>
          <Heading textAlign={"text-start md:text-end"}>
            <p className="text-white">The Process of Crafting</p>
            <p className="pt-3 text-white">your Dining Experience</p>
          </Heading>
          <div className='mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1'>
            {
              userExperience.map((item) => (
                <div className='bg-[#0d1634] flex gap-5 items-center px-5 py-5 mb-5 rounded-[20px] ProcessItem relative z-[1]' key={item.id}>
                  <span className='text-4xl bg-white bg-opacity-10 p-4 rounded-lg'>
                    {item.iconImg}
                  </span>
                  <div>
                    <h3 className="text-white SubTitle">{item.title}</h3>
                    <p className="text-white pt-2">{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default CraftingExperience