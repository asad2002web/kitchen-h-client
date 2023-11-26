import React from 'react'
import { Experience1, ExperienceBg } from '../../../assets';
import { Heading } from '../../../components';

const CraftingExperience = () => {


  const userExperience = [
    {
      "id": 1,
      "title": "Set your location",
      "description": "A high quality solution beautifully food for customers",
      "iconImg": "Experience1"
    },
    {
      "id": 2,
      "title": "Select Food",
      "description": "A high quality solution beautifully food for customers",
      "iconImg": "Experience1"
    },
    {
      "id": 3,
      "title": "Pay Cash or Online",
      "description": "Providing an upscale and elegant ambiance for",
      "iconImg": "Experience1"
    },
    {
      "id": 4,
      "title": "Delivery or Pickup",
      "description": "Allowing customers to easily book tables through",
      "iconImg": "Experience1"
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
      <div className="Container text-white flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 p-10"> 
          <img src={Experience1} alt="image" />
        </div>
        <div>
          <Heading textAlign={"text-start md:text-end"}>
            <p className="text-white">The Process of Crafting</p>
            <p className="pt-3 text-white">your Dining Experience</p>
          </Heading>
          <div className='mt-8'>
            {
              userExperience.map((item) => (
                <div className='bg-[rgba(0,0,0,0.3)] px-6 py-4 m-2 rounded-lg' key={item.id}>
                  <p className="text-white SubTitle">{item.title}</p>
                  <p className="text-white">{item.description}</p>
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