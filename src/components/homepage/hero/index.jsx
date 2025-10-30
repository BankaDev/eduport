import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Button from "../../shared/button";

const Hero = () => {
  return (
    <section className="hero-section bg-white px-10 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-24 lg:py-32 gap-10">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Limitless learning at your fingertips
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Online learning and teaching marketplace with <b>5K+ courses</b> and
            <b> 10M+ students</b>. Taught by experts to help you acquire new
            skills and achieve your career goals.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <i className="fa fa-check-circle text-green-500 text-xl"></i>
              <span>Learn with experts</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa fa-check-circle text-green-500 text-xl"></i>
              <span>Get certified</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa fa-check-circle text-green-500 text-xl"></i>
              <span>Access membership</span>
            </div>
          </div>

          <div className="mt-10">
            <Button varient='solid' color='rose'>Get Started</Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://eduport.webestica.com/assets/images/element/07.png"
            alt="Learning Illustration"
            className="w-3/4  object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
