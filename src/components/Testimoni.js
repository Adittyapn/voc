import React from "react";

export default function TestimonialSection() {

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 mt-16 mb-4 max-w-full font-bold text-pink-200 bg-indigo-200 rounded-3xl w-full max-md:mt-10 overflow-x-auto">
      <h2 className="text-3xl font-bold mb-8">Testimoni</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-md p-6 hover:scale-110 duration-200"
          >
            <p className="text-gray-800 mb-4">{testimonial.text}</p>
            <p className="text-gray-600">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
