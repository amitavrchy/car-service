import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const serviceData = [
    {
      "service_id": 1,
      "service_name": "Standard Oil Change",
      "price": 29.99,
      "duration": "30 minutes",
      "location": "Downtown Auto Center",
      "rating": 4.8,
      "contact": "555-1234",
      "description": "Our Standard Oil Change service is designed to keep your vehicle running smoothly by replacing old engine oil with high-quality conventional motor oil. We also inspect the oil filter and replace it as needed. This service includes a general check of your vehicle’s fluid levels, ensuring your engine is properly lubricated for optimal performance. Ideal for drivers looking for routine maintenance at an affordable price."
    },
    {
      "service_id": 2,
      "service_name": "Full Synthetic Oil Change",
      "price": 49.99,
      "duration": "45 minutes",
      "location": "Quick Service Garage",
      "rating": 4.9,
      "contact": "555-5678",
      "description": "Our Full Synthetic Oil Change service uses the latest in synthetic oil technology to provide superior engine protection and performance. This service includes a thorough inspection of your engine's vital components, along with a high-performance synthetic oil that resists breakdown longer than conventional oils. Recommended for high-mileage vehicles or drivers who demand more from their engines, this service helps extend the life of your engine and improve fuel efficiency."
    },
    {
      "service_id": 3,
      "service_name": "Brake Pad Replacement",
      "price": 89.99,
      "duration": "1 hour",
      "location": "Reliable Auto Repairs",
      "rating": 4.7,
      "contact": "555-2345",
      "description": "Our Brake Pad Replacement service ensures that your vehicle's braking system remains reliable and responsive. Worn brake pads are replaced with high-quality parts that meet or exceed OEM specifications. This service includes a complete inspection of your brake system, including rotors, calipers, and brake fluid. Whether you're hearing squeaks or just want to be proactive, this service will give you peace of mind and improve your vehicle's braking efficiency."
    },
    {
      "service_id": 4,
      "service_name": "Tire Rotation",
      "price": 19.99,
      "duration": "30 minutes",
      "location": "Tire Experts Center",
      "rating": 4.5,
      "contact": "555-3456",
      "description": "Our Tire Rotation service helps to extend the life of your tires by promoting even tread wear. Regular tire rotations are essential for maintaining a smooth ride and ensuring that your vehicle's handling and performance are optimal. During this service, our technicians will reposition your tires according to the manufacturer’s recommendations, inspect the tire tread depth, and check for any signs of uneven wear or damage."
    },
    {
      "service_id": 5,
      "service_name": "Wheel Alignment",
      "price": 59.99,
      "duration": "1 hour",
      "location": "Precision Wheels Auto",
      "rating": 4.6,
      "contact": "555-4567",
      "description": "Our Wheel Alignment service is designed to correct the angles of your vehicle's wheels, ensuring they are set to the manufacturer's specifications. Proper alignment is crucial for tire longevity, fuel efficiency, and a comfortable driving experience. This service includes a detailed inspection of your suspension and steering systems, followed by precision adjustments to your vehicle's alignment. Recommended for vehicles showing signs of uneven tire wear or pulling to one side."
    },
    {
      "service_id": 6,
      "service_name": "Battery Replacement",
      "price": 79.99,
      "duration": "30 minutes",
      "location": "PowerPro Auto Services",
      "rating": 4.8,
      "contact": "555-5678",
      "description": "Our Battery Replacement service ensures your vehicle is equipped with a reliable power source. We offer high-quality batteries that are designed to withstand extreme temperatures and heavy usage. Our technicians will test your current battery’s voltage and charging system before replacing it with a new battery. We also clean the terminals and connections to prevent corrosion. This service is perfect for drivers who are experiencing slow engine starts or frequent electrical issues."
    },
    {
      "service_id": 7,
      "service_name": "Air Filter Replacement",
      "price": 24.99,
      "duration": "20 minutes",
      "location": "FreshAir Auto Shop",
      "rating": 4.6,
      "contact": "555-6789",
      "description": "Our Air Filter Replacement service improves your engine's air intake system, allowing it to breathe more easily. A clean air filter helps your engine run more efficiently, increases fuel economy, and reduces harmful emissions. Our technicians will remove the old, clogged air filter and replace it with a high-quality new filter. This simple yet important service is essential for maintaining your vehicle’s performance, especially in dusty or high-pollution environments."
    },
    {
      "service_id": 8,
      "service_name": "Coolant Flush",
      "price": 89.99,
      "duration": "1 hour",
      "location": "Cooling Systems Specialists",
      "rating": 4.7,
      "contact": "555-7890",
      "description": "Our Coolant Flush service involves draining your vehicle's old, contaminated coolant and replacing it with fresh, new coolant. This service is essential for maintaining your engine’s temperature and preventing overheating. During the flush, we will also inspect your radiator, hoses, and coolant reservoir for any leaks or potential issues. A regular coolant flush ensures that your engine remains cool, even under extreme conditions, and helps prevent costly repairs."
    },
    {
      "service_id": 9,
      "service_name": "Transmission Fluid Change",
      "price": 99.99,
      "duration": "1.5 hours",
      "location": "Transmission Experts",
      "rating": 4.8,
      "contact": "555-8901",
      "description": "Our Transmission Fluid Change service helps to keep your vehicle’s transmission operating smoothly. Over time, transmission fluid breaks down and can cause shifting issues or even transmission failure. This service involves draining the old fluid, cleaning the transmission pan, and refilling with new, high-quality transmission fluid. We also inspect the transmission system for leaks and wear. This service is ideal for high-mileage vehicles or those experiencing rough or delayed shifting."
    },
    {
      "service_id": 10,
      "service_name": "Full Vehicle Inspection",
      "price": 69.99,
      "duration": "1.5 hours",
      "location": "Complete Auto Care",
      "rating": 4.9,
      "contact": "555-9012",
      "description": "Our Full Vehicle Inspection service is a comprehensive assessment of your vehicle's condition, aimed at identifying potential problems before they escalate into costly repairs. This service includes a thorough check of your engine, transmission, brakes, suspension, tires, and more. We provide you with a detailed report of our findings, along with recommendations for any necessary repairs or maintenance. Ideal for anyone planning a long trip or purchasing a used vehicle."
    }
  ]  
const Services = () => {
    return (
        <div className='my-10'>
            <div className="sectionHeader text-center my-10">
                <p className='text-primary font-bold'>Service</p>
                <h2 className='text-3xl font-bold mt-2'>Our Service Area</h2>
                <p className='text-secondary w-1/2 text-center mx-auto mt-2'>Our auto repair service offers expert solutions for all makes and models, ensuring your vehicle gets the care it deserves.</p>
            </div>
            <div className='services grid grid-cols-1 md:grid-cols-3 gap-5'>
                {serviceData.map(service => <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {service.service_name}
                        </h2>
                        <p>{service.description.substring(0,120)}...</p>
                        <div className="card-actions justify-end">
                            <div>
                                <FaArrowRight className='cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Services