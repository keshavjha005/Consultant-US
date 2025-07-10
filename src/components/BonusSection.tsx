
import { Gift, User, DollarSign, CheckSquare } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: User,
      emoji: "✅🎨",
      title: "Bonus #1: Freelance Profile Bio Blueprint",
      description: "A plug-and-play formula to instantly upgrade your bio on Upwork, Fiverr, or LinkedIn — so U.S. clients take you seriously at first glance. No more boring intros or awkward wording."
    },
    {
      icon: DollarSign,
      emoji: "✅💰", 
      title: "Bonus #2: How To Get Your First $100 USD Payment From a U.S. Client",
      description: "The simple mindset and confidence secrets you need to be able to charge what you are worth and get paid more."
    },
    {
      icon: CheckSquare,
      emoji: "✅📋",
      title: "Bonus #3: Client Outreach Checklist", 
      description: "A printable, week-by-week checklist that shows you exactly what to do to start landing your first client — even if you're starting from scratch today."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-yellow-50 to-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-full font-bold text-lg mb-8">
            🎁 Plus These 3 Bonuses 🎁
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
              <div className="flex items-start gap-4">
                <div className="text-2xl">
                  {bonus.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {bonus.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-6">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Normally: <span className="line-through">₹4,175 ($50)</span>
            </p>
            <p className="text-4xl font-bold text-red-500">
              Today: ₹429 ($5)
            </p>
          </div>
          
          <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4">
            Get Instant Access For Just ₹429 ($5) →
            <br />
            <span className="text-sm opacity-80">Normally ₹4,175 ($50)</span>
          </button>
          
          <p className="text-gray-600 text-sm">
            Offer expires July 12th at midnight
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
