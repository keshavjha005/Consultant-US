import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ravi S., Pune",
      content:
        "I've been trying to get U.S. clients for over a year with no luck. After going through this guide, I rewrote my Upwork profile and changed how I messaged clients — and I landed my first U.S. job within 5 days. I wish I had found this earlier!",
      rating: 5,
    },
    {
      name: "Divya M., Hyderabad",
      content:
        "Most of my work came from local clients in India who paid very little. This training showed me exactly how to position myself for U.S. clients, and now I'm getting paid 3x more for the same type of work.",
      rating: 5,
    },
    {
      name: "Amit R., New Delhi",
      content:
        "I didn't realize how off my messages sounded until I read this guide. I stopped writing 'Dear Sir/Madam' and started using the exact scripts inside — and I finally started getting replies from real U.S. clients.",
      rating: 5,
    },
    {
      name: "Neha B., Bangalore",
      content:
        "I bought the course for ₹429 thinking it was just another PDF... but it's honestly better than some $100+ courses I've seen. I applied what it taught, and now I'm working full-time with a client in Texas. Highly recommended.",
      rating: 5,
    },
    {
      name: "Sandeep T., Mumbai",
      content:
        "I always thought maybe I wasn't good enough to work with U.S. companies. This course helped me understand what they actually look for — and gave me the confidence to pitch properly. I've already booked 2 new calls this week.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-lg mb-4">
            👈 HERE'S WHAT OTHER FREELANCERS FROM INDIA ARE SAYING...
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </blockquote>
              <cite className="text-gray-600 font-semibold">
                — {testimonial.name}
              </cite>
            </div>
          ))}
        </div>

        {/* Final Heading */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-8">
            If you're a freelancer in India trying to land U.S. clients... you've probably asked yourself:
            <br />
            “How do I actually stand out and get noticed?”
          </h3>

          {/* Image */}
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/yRq4TTHS3XkE25OBPUD6/media/686978b84ff66d9a34dd7176.png"
            alt="Guide Intro"
            className="mx-auto mb-12 rounded-xl shadow-lg"
          />

          {/* Extracted Image Text Content */}
          <div className="text-left max-w-3xl mx-auto space-y-6 text-[17px] leading-relaxed text-gray-800">
            <p className="font-bold text-2xl">
              🧠 Why I Created This Guide — And What I Wish Every Freelancer in India Knew Sooner
            </p>
            <p>
              When I first started hiring freelancers from India, I genuinely wanted to work with talented people — but I kept running into the same problem.
              <br />
              The messages I received were robotic.
              <br />
              The proposals felt copy-pasted.
              <br />
              The communication was off.
            </p>
            <p>
              <strong>And honestly… I ignored most of them.</strong>
              <br />
              It wasn’t because they weren’t skilled — it’s because no one ever taught them how to actually reach out to U.S. clients the right way.
              <br />
              <strong>I remember one freelancer who clearly had talent — but his message started with:</strong>
              <br />
              “Dear Sir, I am writing with utmost respect to submit my services for your honorable project…”
              <br />
              I didn’t even finish reading it.
            </p>
            <p>
              And I know I’m not the only U.S. client who thinks that way.
              <br />
              <strong>
                That’s why I created this ₹429 ($5) guide — to help Indian freelancers finally understand what U.S. clients actually want to see, read, and respond to.
              </strong>
              <br />
              So you’re not left wondering why no one replies.
              <br />
              So you’re not stuck competing with 50 other low bids and hoping to stand out.
              <br />
              So you’re not undercharging just to land your first client.
            </p>
            <p>
              <strong>This guide gives you the exact roadmap —</strong>
              <br />
              ✅ What to say
              <br />
              ✅ How to structure your message
              <br />
              ✅ <strong>How to position yourself so you actually look hireable</strong>
              <br />
              Whether you’re on Upwork, Fiverr, LinkedIn — or just sending a cold DM — this is the stuff that gets responses.
              <br />
              I wish more freelancers from India had this before reaching out to me. Because I would’ve hired a lot more of them.
            </p>
            <p className="font-bold text-2xl mt-12">💡 But One Day, Everything Changed…</p>
            <p>
              After ignoring dozens of outreach messages, I finally got one that stopped me in my tracks.
              <br />
              It was short. Clear. Confident.
              <br />
              The freelancer didn’t beg.
              <br />
              He didn’t send a long resume.
              <br />
              He just told me what he could do, how he could help my business, and offered proof.
              <br />
              I hired him instantly.
            </p>
            <p>
              That’s when it clicked:
              <br />
              Most freelancers in India have the skills — they just don’t know how to communicate them in a way that works with U.S. clients.
              <br />
              That single experience is what inspired me to break down what works, what doesn’t, and what I actually look for when hiring — and turn it into this <strong>₹429 ($5)</strong> guide.
            </p>
            <p>
              So you don’t have to guess.
              <br />
              So you don’t have to get ignored.
              <br />
              So your talent actually gets seen — and paid for.
            </p>
            <p className="font-bold text-2xl mt-12">
              💻 They Didn’t Get the Job — But They Definitely Could Have
            </p>
            <p>
              I’ve seen so many Indian freelancers with real talent — great designers, writers, editors, marketers — who should’ve landed the...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
