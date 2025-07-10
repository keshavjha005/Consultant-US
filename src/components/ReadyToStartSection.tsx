
import { Button } from '@/components/ui/button';

const ReadyToStartSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/1f0836f1-4694-4f1d-9e84-12ef9034292d.png"
              alt="U.S. Clients Freelance Playbook Product"
              className="w-full max-w-lg mx-auto rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-red-400 font-bold text-sm mb-4 uppercase tracking-wide">
                🎯 READY TO LAND HIGH PAYING U.S. CLIENTS AND STOP GETTING IGNORED? START HERE.
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get the U.S. Clients Freelance Playbook — Just{' '}
                <span className="text-green-400">₹429 ($5)</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                While other freelancers waste time guessing, competing on price, and never hearing back...
              </p>
              <p className="text-lg">
                You'll be sending messages that stand out, building trust, and landing real paying clients from the U.S. — using a system that actually works, even if you've never had a foreign client before.
              </p>
              <p className="text-xl font-semibold text-white">
                You have nothing to lose — and everything to gain.
              </p>
              <p className="text-lg">
                What if just one tip from this guide helped you land your first high-paying U.S. client?
              </p>
              <p className="text-lg">
                That's the goal.
              </p>
              <p className="text-lg">
                I'm sharing everything I wish freelancers from India knew before messaging me — so you can stop being overlooked and start getting hired.
              </p>
            </div>

            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Instant Access For Just ₹429 ($5) →
                <br />
                <span className="text-sm opacity-80">Normally ₹4,175 ($50)</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;
