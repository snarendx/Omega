import React from "react";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-[url('image.png')] bg-cover bg-center text-white flex items-center justify-center p-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center p-4 md:p-8">
            <div className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              <span className="text-green-600">Compounding</span> creates wealth
              when the combined power of good research and productive investing
              behavior works on your net worth
            </div>
            <button className="bg-sky-200 text-black py-2 px-4 md:py-3 md:px-6 rounded-3xl shadow-lg hover:bg-green-600 transition duration-300 text-sm md:text-base">
              Wealth = Networth x (1 + Research edge)<sup>Behavioral edge</sup>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-8 md:space-y-0 md:space-x-8 p-4">
        <div className="md:w-1/2 text-left p-4 md:p-8">
          <p className="mb-4 font-extrabold text-2xl md:text-4xl">
            Investors and Advisers must{" "}
            <span className="text-green-700 font-extrabold text-2xl md:text-4xl">
              partner as equals
            </span>{" "}
            to realize peak compounding benefits.
          </p>
          <p className="mt-4 md:mt-8">
            Do-it-Yourself and Leave-it-to-Experts ways of investing inherently
            unsuited to unleashing the synergy between research and behavioural
            edges and hence ineffective in creating wealth.
          </p>
        </div>
        <div className="md:w-1/2 p-4 md:p-8">
          <img
            src="partner1.jpg"
            alt="Illustrative Image"
            className="w-full rounded-3xl h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col bg-black/5 md:flex-row items-center justify-center mt-8 space-y-8 md:space-y-0 md:space-x-8 p-4">
        <div className="md:w-1/2 p-4 md:p-8 order-2 md:order-1">
          <img
            src="partner2.jpg"
            alt="Illustrative Image"
            className="w-full rounded-3xl h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 text-left p-4 md:p-8 order-1 md:order-2">
          <p className="mb-4 font-extrabold text-2xl md:text-4xl">
            Investors want to{" "}
            <span className="text-green-700 font-extrabold text-2xl md:text-4xl">
              partner with experts
            </span>{" "}
            but experts don't
          </p>
          <p className="mt-4 md:mt-8">
            Do-it-Yourself and Leave-it-to-Experts ways of investing inherently
            unsuited to unleashing the synergy between research and behavioural
            edges and hence ineffective in creating wealth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
