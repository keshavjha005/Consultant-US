
import { X, Check } from 'lucide-react';

const VisualBeforeAfterSection = () => {
  const beforePoints = [
    "You're unsure where to even start or what U.S. clients are actually looking for.",
    "You feel like you're behind other freelancers who seem to get all the responses and inside info.",
    "You've spent time on Upwork, Fiverr, and other platforms — but still haven't seen real results.",
    "You've worked hard to learn your skill, but you're getting zero replies from serious clients."
  ];

  const afterPoints = [
    "You'll have a clear roadmap of what to say and do to get noticed by U.S. clients — even if you're starting from scratch.",
    "You'll know exactly how to write messages that make clients want to respond — and work with you.",
    "You'll understand how to use free platforms like Upwork, LinkedIn, and email the right way to stand out.",
    "You'll avoid the common"
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before Column with Image */}
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/yRq4TTHS3XkE25OBPUD6/media/68697d59c89afcd63db88e18.png"
                alt="Frustrated freelancer"
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-center mb-8">
              😔 Before the U.S. Clients Freelance Playbook:
            </h3>
            <div className="space-y-4">
              {beforePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After Column with Image */}
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/yRq4TTHS3XkE25OBPUD6/media/68697d59c89afcd63db88e18.png"
                alt="Successful freelancer"
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-center mb-8">
              💪 After the U.S. Clients Freelance Playbook:
            </h3>
            <div className="space-y-4">
              {afterPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualBeforeAfterSection;
