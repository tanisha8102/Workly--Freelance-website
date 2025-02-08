export default function PricingPlan() {
    const plans = [
      { name: "FREE", price: 0 },
      { name: "PREMIUM", price: 175 },
      { name: "PLATINUM", price: 500 },
    ];
    const checkp = new URL("../assets/checkp.png", import.meta.url).href;
  
    return (
      <section className="py-12 px-10 sm:px-20 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Pricing Plan</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Enjoy flexibility and premium features.
          </p>
        </div>
  
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-400 hover:text-white"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-gray-900 mt-4 group-hover:text-white">
                ${plan.price}
              </p>
              <p className="text-gray-500 group-hover:text-white">per month</p>
  
              {/* List - Left-aligned on small screens */}
              <ul className="mt-6 space-y-3 text-gray-600 group-hover:text-white text-left sm:text-center">
                <li className="flex items-center space-x-2">
                  <img src={checkp} alt="Check" className="w-5 h-5" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={checkp} alt="Check" className="w-5 h-5" />
                  <span>Consectetur adipiscing elit, sed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={checkp} alt="Check" className="w-5 h-5" />
                  <span>Eiusmod tempor incididunt</span>
                </li>
              </ul>
  
              <button className="mt-6 w-full py-3 rounded-full bg-[#f6eeff] text-[#7C3AED] font-semibold hover:bg-purple-200 transition group-hover:bg-white group-hover:text-purple-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  