
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="border-4 border-yellow-400 rounded-2xl p-8 bg-white shadow-2xl">
          <div className="mb-8">
            <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="text-green-600 font-semibold text-lg mb-2">
              INSTANT ACCESS - START GETTING NOTICED BY U.S. CLIENTS TODAY
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Here's Everything You Get With the U.S. Clients Freelance Playbook:
          </h2>

          <div className="text-left max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              DISCOVER THE EXACT STEPS TO LAND REAL CLIENTS FROM THE U.S. — WITH A SIMPLE, NO-FLUFF PDF GUIDE WRITTEN BY AN ACTUAL U.S. CLIENT WHO'S HIRED DOZENS OF FREELANCERS AND KNOWS WHAT <em>ACTUALLY</em> WORKS.
            </p>
            
            <p className="text-gray-700 mb-6">
              IF YOU'VE EVER FELT IGNORED, UNDERPAID, OR STUCK ON CROWDED PLATFORMS — THIS GUIDE SHOWS YOU HOW TO FINALLY STAND OUT, GET RESPONSES, AND START WINNING THE JOBS YOU DESERVE.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                INCLUDED FOR FREE: 3 GIFTS
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="bg-red-500 text-white px-3 py-1 rounded text-sm mb-2">✕</div>
                <p className="text-sm font-semibold">From Zero Replies And No Hope</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/lovable-uploads/5fa88c05-6393-48bf-aa24-6cc36dd83255.png"
                  alt="Product mockup"
                  className="w-32 h-32 object-contain mx-auto mb-2"
                />
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 text-white px-3 py-1 rounded text-sm mb-2">✓</div>
                <p className="text-sm font-semibold">To Getting Hired By High Paying US Clients</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What's included:</h3>
            <p className="text-lg text-gray-700 mb-6">
              You'll Learn the 6 Proven Components That Help You Finally Land U.S. Clients — Without Guessing or Getting Ignored
            </p>
            <p className="text-gray-700">
              Inside this guide, you'll get everything you need to confidently reach out to U.S. businesses and start getting real responses — even if you've never had a foreign client before.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              You can get instant access to the full guide now for just ₹429 ($5).
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
          >
            Get Instant Access For Just ₹429 ($5) →
            <br />
            <span className="text-sm opacity-80">Normally ₹4,175 ($50)</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
