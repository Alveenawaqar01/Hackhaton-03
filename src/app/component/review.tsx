import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-20 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-yellow-500 text-base sm:text-lg font-light italic">Testimonials</p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          What our client are saying
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="relative bg-white text-black rounded-lg shadow-lg px-6 sm:px-8 py-10 sm:py-12 max-w-lg sm:max-w-3xl mx-auto">
        {/* Client Image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white overflow-hidden">
            <Image
              src="/client.png" // Replace with actual client image
              alt="Client Image"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-center text-gray-700 text-sm sm:text-base leading-relaxed mt-10 sm:mt-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum Urna elit augue urna vitae feugiat pretium donec id elementum Ultrices mattis sed
          vitae mus risus Lacus nisi et ac dapibus sit eu velit in consequat
        </p>

        {/* Client Details */}
        <div className="text-center mt-6 space-y-1">
          <h3 className="text-lg sm:text-xl font-bold">Alamin Hasan</h3>
          <p className="text-sm text-gray-500">Food Specialist</p>
          {/* Star Rating */}
          <div className="flex justify-center items-center mt-2 space-x-1">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-400 text-sm sm:text-lg">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === 0 ? "bg-yellow-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
