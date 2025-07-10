
import { Play } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const targetDate = '2025-07-12T23:59:59';

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Author Profile */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/yRq4TTHS3XkE25OBPUD6/media/686975d54ff66d5915dd6f3a.png"
              alt="Dylan Bowles"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">Dylan Bowles </h3>
              <p className="text-sm text-gray-300">Freelance Business Coach</p>
            </div>
          </div>
        </div>

        <CountdownTimer targetDate={targetDate} />

        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg mb-4 max-w-4xl mx-auto">
            I'M AN ONLINE BUSINESS OWNER FROM THE U.S. WHO HIRES FREELANCERS IN INDIA — AND MOST ARE DOING IT ALL WRONG.
          </p>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Get the Step-by-Step{' '}
            <span className="text-green-400">₹429 ($5)</span>{' '}
            Training That's Helping Indian Freelancers Get{' '}
            <span className="text-green-400">$100+</span>{' '}
            Payments From U.S. Clients
          </h1>
        </div>

        {/* Video Section */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <img 
                src="/lovable-uploads/34ee3e05-d7cf-46d9-acdc-0e1814e7fae5.png"
                alt="Video preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-8 h-8 text-white" fill="white" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
              CLICK THE BUTTON BELOW TO GRAB
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-red-400 mb-8">
              BELOW TO GRAB
            </h3>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Instant Access For Just ₹429 ($5) →
            <br />
            <span className="text-sm opacity-80">Normally ₹4,175 ($50)</span>
          </Button>
          
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Follow the same A-Z system I give to the freelancers I hire — so you can go from getting ignored to landing real U.S. clients... without paying for expensive courses, agencies, or platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
