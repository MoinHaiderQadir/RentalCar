import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonial = ()=>{
    const [tooltip, setTooltip] = React.useState({ visible: false, x: 0, y: 0, text: '' });
    const cardRefs = React.useRef([]);

    const handleMouseMove = (e, index) => {
        const bounds = cardRefs.current[index].getBoundingClientRect();
        setTooltip({
            visible: true,
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
            text: testimonials[index].name,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, visible: false });
    };

    const testimonials = [
        {
            name: 'Seth Suleman',
            Location: 'Sanghar',
            image: assets.testimonial_image_1,
            testimonial:
                'The Sportage made my trip unforgettable. Luxurious feel, powerful drive, and very comfortable for long journeys. Excellent service with quick delivery and pickup. Truly worth it!',
           
        },
        {
            name: 'G. Shabbir',
            Location: 'Hyderabad',
            image: assets.testimonial_image_2,
            testimonial:
                'I rented a Cultus for a family visit. Spacious, reliable, and economical on fuel. The entire process was hassle-free, and the car felt like my own.',
           
        },
        {
            name: 'G. Shabbir',
            Location: 'Karachi',
            image: assets.testimonial_image_2,
            testimonial:
                'The Alto was perfect for my city trip—compact, fuel-efficient, and easy to drive. Booking was smooth, and I felt comfortable throughout my journey. Highly recommended!',
           
        }
    ];


    return(
        <>
            <div className="py-28 px-6 md:px-16 lg:px-24 xl-44">
                <Title title={"What Our Customer Say"} subTitle={"Discover why discerning tavelers choose stayVenture for their luxury accommadation around the world"} /> 
            </div>


            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
            mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index}  ref={(el) => (cardRefs.current[index] = el)}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                        className="relative border border-gray-200  overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300 bg-white p-6 rounded-xl shadow-lg "
                    >
                        {tooltip.visible && tooltip.text === testimonial.name && (
                            <span className="absolute px-2.5 py-1 text-sm rounded text-nowrap bg-indigo-500 text-white pointer-events-none transition-all duration-300"
                                style={{ top: tooltip.y + 8, left: tooltip.x + 8, transition: 'all 0.3s ease-out', animationDelay: '0.2s', }} >
                                {tooltip.text}
                            </span>
                        )}

                        <div className="flex flex-col items-center justify-center p-8 text-center">
                            <div className="mb-4 text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900">Testimonials</h3>
                                <p className="my-4 text-sm line-clamp-3">{testimonial.testimonial}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img className="rounded-full w-9 h-9"
                                    src={testimonial.image}
                                    alt={`${testimonial.name} profile`}
                                />
                                <div className="space-y-0.5 font-medium text-left ml-3">
                                    <p>{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.Location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Testimonial