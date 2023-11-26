import { useState } from "react";

const FaqSection = () => {

    const [accordion, setAccordion] = useState(0);
    const handleAccordion = (id) => {
        accordion === id ? setAccordion(0) : setAccordion(id);
    }


    const accordionData = [
        {
            id: 1,
            title: "What is the best thing about Switzerland?",
            content: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
        },
        {
            id: 2,
            title: "What is the best thing about Switzerland?",
            content: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
        },
        {
            id: 3,
            title: "What is the best thing about Switzerland?",
            content: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
        }
    ]

    return (
        <div className="Container">
            <h1 className="Heading1 text-center mb-10">Frequently Asked Questions</h1>
        </div>
    )
}

export default FaqSection