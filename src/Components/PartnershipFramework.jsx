import React from "react";

const PartnershipFramework = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-1/2">
          <img
            src={"partnershipframework1.jpg"}
            alt="Finance"
            className="w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
            Our <span className="text-green-500">Partnership Framework</span> is
            designed for success
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-green-500 mr-4">🏆</div>
              <div>
                <h3 className="font-semibold">Goal</h3>
                <p>Clarity of goals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-4">📊</div>
              <div>
                <h3 className="font-semibold">Strategy</h3>
                <p>
                  Agreement on Investing Framework on how to invest to achieve
                  your goals. An implementable Financial Plan.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-4">🔄</div>
              <div>
                <h3 className="font-semibold">Process</h3>
                <p>
                  Agreed Process for building and managing your portfolio and
                  making buy/sell/hold decisions in stocks and mutual funds.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-4">🔧</div>
              <div>
                <h3 className="font-semibold">Capability</h3>
                <p>
                  Access to People & Platform - data, information, knowledge,
                  research and tools required to make informed decisions
                  collaboratively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipFramework;
