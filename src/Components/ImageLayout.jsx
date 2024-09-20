import React from "react";

const ImageLayout = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          We are commited to a{" "}
          <span className="text-green-500">Win-Win Partnership</span> with
          Investors
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-4">
          <p className="text-gray-600">
            MoneyWorks4Me since inception 15+ years ago has always been a
            fiduciary research and advisory firm focused on ensuring individual
            investors succeed.
          </p>
          <p className="text-gray-600 mt-4">
            Over the last 7+ years we have honed the Partner-with-Expert way of
            investing and crafted the resources to provide you with the research
            and behavioural edge to make the wealth compounding formula work for
            you at peak levels.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center">
          <div className="w-1/2 p-2">
            <img
              src="partner1.jpg"
              alt="Image 1"
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 p-2">
            <img
              src="partner1.jpg"
              alt="Image 2"
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 p-2">
            <img
              src="partner1.jpg"
              alt="Image 3"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLayout;
