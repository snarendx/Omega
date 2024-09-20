import React from 'react';

const PartnershipSection = () => {
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-8">
        How we <span className="text-green-500">walk-the-talk</span> of Partnership
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-2">Fiduciary</h3>
          <p className="text-center">We are zero-conflict-of-interest, SEBI-registered Investment Advisers.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-2">Commitment</h3>
          <p className="text-center">Setting Goals and Financial Planning is a sacred act which makes us partners in your journey to achieve your dreams.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-2">Creator & Custodians of Wealth</h3>
          <p className="text-center">Both you and us are accountable to grow and preserve your wealth.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-2">Accessibility & Transparency</h3>
          <p className="text-center">We share our decision-making process, provide you access to our platform and encourage you to talk to us.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-2">Continuous Learning & Improvement</h3>
          <p className="text-center">High quality interactions with clients ensure we learn faster and so do you.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-2">Skin in the game</h3>
          <p className="text-center">Our personal investments closely mirror our recommendations.</p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
