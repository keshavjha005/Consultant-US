import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const benefits = [
    "Get noticed by U.S. clients — even without prior experience",
    "Land paying clients without relying on Upwork, Fiverr, or expensive courses", 
    "Turn one small job into long-term contracts",
    "Stand out despite average portfolios or lack of formal education",
    "Avoid the most common mistakes that kill deals before they even start"
  ];

  return (
    <section className="bg-white text-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Intro */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            I call it the U.S. Clients Freelance Playbook.
          </h2>
          <p className="text-xl text-gray-900 mb-8">
            By Following a Simple Messaging and Positioning Strategy,
          </p>
          <p className="text-lg text-gray-900 mb-8">
            I've Helped Indian Freelancers:
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/yRq4TTHS3XkE25OBPUD6/media/686ae1ee4a0356822407476f.png"
              alt="U.S. Clients Freelance Playbook"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-900 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-900">{benefit}</p>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gray-800 rounded-xl">
              <p className="text-gray-300 mb-4">
                They learned how to write messages that actually get replies (instead of being ignored).
              </p>
              <p className="text-gray-300">
                With just smart outreach and the right structure, they stood out — even in crowded markets.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-xl">
              <p className="text-gray-300">
                By delivering value and communicating clearly, they kept U.S. clients coming back.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials & Deep Value */}
        <div className="text-center mt-12">
          <p className="text-gray-900 mb-4">
            They learned how to highlight their strengths and tell their story the right way.
          </p>
          <p className="text-gray-900 mb-8">
            No more copy-paste proposals. No begging. Just a clean, confident, professional approach.
          </p>
          <p className="text-gray-900 mb-8">
            After helping dozens of freelancers fix these mistakes, I refined this system into a step-by-step method that any serious freelancer in India can use...
          </p>
          <p className="text-xl text-white font-semibold mb-12">
            ...even if nothing else has worked before.
          </p>

          {/* Inserted New Section */}
          <div className="mt-12 border border-yellow-400 rounded-xl p-8 text-center bg-white shadow-lg">
            <p className="text-green-700 font-medium uppercase tracking-wide mb-2">
              ✅ Instant Access – Start Getting Noticed by U.S. Clients Today
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Here’s Everything You Get With the U.S. Clients Freelance Playbook:
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Discover the exact steps to land real clients from the U.S. — with a simple, no-fluff PDF guide written by an actual U.S. client who’s hired dozens of freelancers and knows what <strong>actually</strong> works.
              <br /><br />
              If you’ve ever felt ignored, underpaid, or stuck on crowded platforms — this guide shows you how to finally stand out, get responses, and start winning the jobs you deserve.
            </p>

            <div className="flex flex-col items-center md:flex-row justify-center gap-6 mt-10">
              <img 
                src="https://assets.cdn.filesafe.space/yRq4TTHS3XkE25OBPUD6/media/686ae1fcf7b8398ea02339ca.png" 
                alt="Playbook Overview" 
                className="max-w-md rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
