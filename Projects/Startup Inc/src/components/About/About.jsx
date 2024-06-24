import React from "react";
import startup from "../../assets/startup.jpg";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={startup} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Empowering digital transformation through innovative solutions
            </h2>
            <p className="mt-6 text-gray-600">
              At our company, we believe in creating robust and scalable
              applications that meet the diverse needs of users. Our team of
              skilled developers works tirelessly to bring your ideas to life.
            </p>
            <p className="mt-4 text-gray-600">
              Whether it's building dynamic user interfaces or implementing
              complex functionality, we ensure that every solution is efficient,
              user-friendly, and meets the highest standards of quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}