
import { MessageCircle, Target, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EssentialSkillsSection = () => {
  const skills = [
    {
      title: "Messaging",
      subtitle: "Knowing how to write client outreach that gets replies",
      description: "Why it's important: Most freelancers lose the job in the first sentence of their message. U.S. clients expect clarity, confidence, and relevance — not long-winded intros or generic pitches.",
      consequence: "Without it: You'll keep getting ignored or ghosted, no matter how good your skills are. You only get one chance to make a first impression — make it count.",
      icon: MessageCircle
    },
    {
      title: "Positioning", 
      subtitle: "Presenting yourself as a valuable solution, not just another cheap freelancer",
      description: "Why it's important: U.S. clients want to hire people who understand their goals — not just someone who 'can do the job.' Positioning helps you stand out as someone they can trust.",
      consequence: "Without it: You'll constantly compete on price, get lowball offers, and miss out on premium-paying clients who are happy to pay more for the right person.",
      icon: Target
    },
    {
      title: "Professionalism",
      subtitle: "Communicating like someone worth hiring", 
      description: "Why it's important: Your tone, grammar, and the way you write messages tells U.S. clients everything about how reliable you are — before they even respond.",
      consequence: "Without it: You might come across as sloppy, inexperienced, or high-risk — even if you're highly skilled. Clients need to feel they can trust you from the very first message.",
      icon: Award
    },
    {
      title: "Follow-Up",
      subtitle: "Staying on a client's radar the right way",
      description: "Why it's important: Most jobs go to the person who follows up politely and persistently — not just the first one who applies. U.S. clients are busy and need reminders.",
      consequence: "Without it: You'll miss out on jobs you were perfect for — simply because you didn't stay top of mind. No follow-up = no second chance.",
      icon: Mail
    }
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-300 text-sm mb-4 uppercase tracking-wide">
            THESE 4 SKILLS DON'T REQUIRE AN AGENCY, PAID PLATFORM, OR INSIDER CONNECTION — JUST THE RIGHT ROADMAP.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            🎯 The 4 Essential Skills Every Freelancer in India Needs to Land U.S. Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-red-500 to-pink-500 p-6 rounded-xl text-center">
              <skill.icon className="w-12 h-12 mx-auto mb-4 text-white" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
              <p className="text-sm opacity-90">{skill.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-bold text-red-400">
                {index + 1}. {skill.title}: {skill.subtitle.split(',')[0]}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-red-400 font-semibold">Without it:</span> {skill.consequence}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
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
    </section>
  );
};

export default EssentialSkillsSection;
