import { Star } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
const historyData = [
  {
    year: "2005",
    title: "FOUNDED",
    description:
      "Started with a simple mission: to make real estate transparent, accessible, and client-focused.",
  },
  {
    year: "2010",
    title: "BUILDING REPUTATION",
    description:
      "Earned trust through successful transactions and expanded services in residential and commercial real estate.",
  },
  {
    year: "2015",
    title: "EXPANDING HORIZONS",
    description:
      "Reached 250+ closed deals and introduced specialized support for investors and luxury buyers.",
  },
  {
    year: "2025",
    title: "LEADING TODAY",
    description:
      "With $150M+ in sales and 500+ clients served, we stand as a trusted partner in every real estate journey.",
  },
];
const steps = [
  {
    id: "01.",
    title: "Discover",
    description:
      "We start by understanding your goals and lifestyle, then curate properties that match.",
  },
  {
    id: "02.",
    title: "Experience",
    description:
      "Guided viewings and expert insights help you explore the best options with confidence.",
  },
  {
    id: "03.",
    title: "Secure",
    description:
      "From negotiation to closing, we ensure a seamless, stress-free transaction.",
  },
];
const teamMembers = [
  {
    id: 1,
    name: "Michael Carter",
    role: "Founder & Lead Consultant",
    image:
      "https://framerusercontent.com/images/ySy6aS5uM73dYJiJehkEpy1uCow.png?width=1000&height=1429",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Senior Property Advisor",
    image:
      "https://framerusercontent.com/images/zOCbjSytGmllYcdF16P4fiPofLo.png?width=1000&height=1429",
  },
  {
    id: 3,
    name: "Daniel Wong",
    role: "Investment Specialist",
    image:
      "https://framerusercontent.com/images/J7QuU662Ob4KjcgcSCaIFzDg8.jpg?width=2330&height=3500",
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Client Relations Manager",
    image:
      "https://framerusercontent.com/images/x4NWwLLxPjhKvtvhrqTOLTPnH2s.png?width=1000&height=1429",
  },
];
const faqs = [
  {
    question: "How do I start the process of buying a home?",
    answer:
      "Simply reach out to us for a consultation. We'll discuss your goals, budget, and preferences, then guide you step by step.",
  },
  {
    question: "Do I need to get pre-approved for a mortgage first?",
    answer:
      "Getting pre-approved is recommended because it helps determine your budget and strengthens your offer.",
  },
  {
    question: "What types of properties do you specialize in?",
    answer:
      "We specialize in residential homes, luxury properties, investment opportunities, and commercial real estate.",
  },
  {
    question: "How long does the buying process usually take?",
    answer:
      "The buying process generally takes between 30 and 60 days depending on financing and negotiations.",
  },
  {
    question: "Do you assist with selling properties as well?",
    answer:
      "Yes! We provide complete selling services including pricing, marketing, negotiations, and closing support.",
  },
  {
    question: "What makes your agency different from others?",
    answer:
      "Our personalized approach, market expertise, and commitment to client success set us apart.",
  },
];

const testimonials = [
  {
    name: "Mike F",
    title: "Support You Can Rely On",
    text: "They guided us throughout the process and made everything stress free.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Daniel S",
    title: "Exceptional Service",
    text: "Professional team with excellent communication and support.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Olivia C",
    title: "Stress-Free Experience",
    text: "Buying our home was smooth thanks to their amazing team.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "James P",
    title: "Professional Guidance",
    text: "Everything was handled perfectly from start to finish.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Emily T",
    title: "Highly Recommended",
    text: "Very knowledgeable and always available when we needed help.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "John D",
    title: "Amazing Experience",
    text: "Couldn't have asked for a better real estate experience.",
    image: "https://i.pravatar.cc/100?img=6",
  },
];
const Card = ({ item }) => (
  <div className="w-[320px]  bg-white rounded-2xl shadow-md p-6 mx-3">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="#FBBF24"
          stroke="#FBBF24"
          className="mr-1"
        />
      ))}
    </div>

    <h3 className="font-semibold text-lg">{item.title}</h3>

    <p className="text-gray-500 text-sm mt-3 leading-6">{item.text}</p>

    <div className="flex items-center mt-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-3">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-xs text-gray-400">Verified Client</p>
      </div>
    </div>
  </div>
);

const About = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide mb-4">
              <span className="w-3 h-3 border rounded-full"></span>
              <span>About Us</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Building dreams,
              <br />
              one home at a time
            </h1>
          </div>

          {/* Right */}
          <div className="lg:pl-24">
            <p className="text-gray-600 leading-7 max-w-sm">
              We're more than real estate agents — we're your trusted partners,
              helping you find the right property with confidence and ease.
            </p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800  transition-transform duration-300 hover:scale-110">
              Contact us
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="md:col-span-1">
            <img
              src="https://framerusercontent.com/images/NF52iQ1h9pFkfBs6EWMTTUTBoU.jpg?"
              alt="Interior"
              className="w-full h-400px object-cover rounded-2xl"
            />
          </div>

          <div className="md:col-span-2">
            <img
              src="https://framerusercontent.com/images/hfhQ9zuTHLTOsYEuVgV8nrmdAQ.jpg?"
              alt="House"
              className="w-full h-400px object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 mt-12 border-t border-gray-200">
          <div className="py-8 md:pr-8 border-b md:border-b-0 md:border-r border-gray-200">
            <h2 className="text-6xl font-bold">$150M+</h2>
            <h3 className="mt-4 font-medium">Properties sold</h3>
            <p className="mt-2 text-gray-600 text-sm leading-6">
              Over $150M in sales, helping clients find homes and investments
              with ease and confidence.
            </p>
          </div>

          <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
            <h2 className="text-6xl font-bold">500+</h2>
            <h3 className="mt-4 font-medium">Happy clients</h3>
            <p className="mt-2 text-gray-600 text-sm leading-6">
              More than 500 satisfied clients trust us to make their real estate
              journey smooth and successful.
            </p>
          </div>

          <div className="py-8 md:pl-8">
            <h2 className="text-6xl font-bold">20+</h2>
            <h3 className="mt-4 font-medium">Years of expertise</h3>
            <p className="mt-2 text-gray-600 text-sm leading-6">
              Over 20 years of experience guiding clients with market insight
              and professional advice.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3 flex items-center justify-center gap-2">
              <span className="w-3 h-3 border-2 border-gray-500 rounded-full"></span>
              Our History
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              A legacy of trust and growth
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              From a small vision to a trusted real estate partner, our journey
              has been defined by dedication, growth, and client success.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block mt-20 relative">
            {/* Horizontal Line */}
            <div className="absolute top-93px left-0 w-full h-2px bg-gray-300"></div>

            <div className="grid grid-cols-4 gap-10">
              {historyData.map((item, index) => (
                <div key={index} className="relative">
                  {/* Year */}
                  <h3 className="text-5xl font-medium text-gray-900">
                    {item.year}
                  </h3>

                  {/* Subtitle */}
                  <p className="uppercase text-sm mt-3 text-gray-600">
                    {item.title}
                  </p>

                  {/* Description */}
                  <p className="mt-20 text-gray-600 leading-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-10 mt-16">
            {historyData.map((item, index) => (
              <div
                key={index}
                className="border-l-2 border-orange-400 pl-6 relative"
              >
                <div className="absolute -left-9px top-2 w-4 h-4 bg-orange-400 rounded-full border-4 border-white"></div>

                <h3 className="text-4xl font-semibold">{item.year}</h3>

                <p className="uppercase text-sm text-gray-500 mt-2">
                  {item.title}
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden mt-14 relative">
            <div className="absolute left-3 top-0 h-full w-2px] bg-gray-300"></div>

            <div className="space-y-10">
              {historyData.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-orange-400 border-4 border-white shadow"></div>

                  <h3 className="text-3xl font-semibold">{item.year}</h3>

                  <p className="uppercase text-sm text-gray-500 mt-2">
                    {item.title}
                  </p>

                  <p className="mt-3 text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Side */}
            <div>
              {/* Small Heading */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 border border-black rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
                <p className="uppercase tracking-wide text-sm font-medium">
                  Our Process
                </p>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
                Simple steps to your <br className="hidden md:block" />
                dream home
              </h2>

              {/* Description */}
              <p className="text-gray-500 mt-6 max-w-lg leading-7">
                We make buying, selling, or investing in property effortless.
                Here's how we guide you every step of the way.
              </p>

              {/* Steps */}
              <div className="mt-10 space-y-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex gap-6">
                    {/* Number & Line */}
                    <div className="flex flex-col items-center">
                      <span
                        className={`text-4xl font-light ${
                          index === 2 ? "text-black" : "text-gray-400"
                        }`}
                      >
                        {step.id}
                      </span>

                      {index !== steps.length - 1 && (
                        <div className="w-px flex-1 bg-gray-300 mt-3"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className={`text-2xl font-medium ${
                          index === 2 ? "text-black" : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-gray-400 mt-2 leading-7 max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="mt-10 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 duration-300">
                Start your journey
              </button>
            </div>

            {/* Right Side */}
            <div>
              <img
                src="https://framerusercontent.com/images/py0QAvqxLnHGBd5SX4zTyrvKzcU.jpg?width=3990&height=3990"
                alt="Family"
                className="w-full h-350px] md:h-500px] lg:h-560px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>

                <span className="uppercase text-sm tracking-wide font-medium">
                  Our Team
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Dedicated experts,
                <br />
                working for you
              </h2>
            </div>

            {/* Right */}
            <div className="flex lg:justify-end">
              <p className="text-gray-600 text-lg leading-8 max-w-md">
                Behind every successful property journey is a team of
                professionals committed to guiding you with trust, expertise,
                and care.
              </p>
            </div>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-420px object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>

                  <p className="text-gray-500 mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <p className="uppercase text-xs text-gray-500">Testimonials</p>

          <h2 className="text-3xl md:text-5xl font-semibold mt-2">
            What our clients say
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Real stories from homeowners and investors who trusted us to guide
            their real estate journey.
          </p>
        </div>

        {/* Top Row */}
        <motion.div
          className="flex gap-6 mb-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </motion.div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-14">
            <div className="flex items-center gap-2 text-sm uppercase tracking-widest">
              <span className="w-3 h-3 border border-black rounded-full"></span>
              FAQ
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold mt-5">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-500 mt-5 max-w-xl leading-7">
              Got questions? We've answered some of the most common ones to
              guide you through your real estate journey.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left Image */}
            <div>
              <img
                src="https://framerusercontent.com/images/z6NBWZUsPAsgLl1NimRCyO9L53g.png?width=1000&height=1429"
                alt="Agent"
                className="w-full h-650px object-cover rounded-2xl"
              />
            </div>

            {/* FAQ */}
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-6">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start gap-5 text-left"
                  >
                    <div className="mt-1">
                      {active === index ? (
                        <Minus size={22} />
                      ) : (
                        <Plus size={22} />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-medium">{faq.question}</h3>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          active === index ? "max-h-40 mt-4" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-500 leading-7">{faq.answer}</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="relative mt-40 bg-black text-white">
        {/* CTA Card */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-24 relative z-10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://framerusercontent.com/images/HIELsXr0BOmPa7SpH4bxmKsyIg.jpg?width=5184&height=3456"
                alt="Dream Home"
                className="h-300px md:h-350px lg:h-400px w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                <div className="max-w-3xl text-center px-6">
                  <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                    Ready to find your dream home?
                  </h2>

                  <p className="text-sm md:text-lg text-gray-200 mb-8">
                    Whether you're buying, selling, or investing, our team is
                    here to guide you every step of the way. Let's make your
                    next move simple and successful.
                  </p>

                  <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                    Schedule a consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    123 Main Street, Suite 456,
                    <br />
                    Cityville, ST 78901
                  </p>

                  <p>
                    (123) 456-7890
                    <br />
                    (987) 654-3210
                  </p>

                  <p>info@findit.com</p>
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Our Company</h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>
                    <a href="#">All Properties</a>
                  </li>
                  <li>
                    <a href="#">Property for Buy</a>
                  </li>
                  <li>
                    <a href="#">Property for Rent</a>
                  </li>
                  <li>
                    <a href="#">Our Agents</a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                  <li>
                    <a href="#">404</a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Join Our Newsletter
                </h3>

                <p className="text-gray-300 text-sm mb-5">
                  Sign up for updates on our latest news.
                </p>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    className="w-full rounded-full bg-white text-black px-5 py-3 pr-14 outline-none"
                  />

                  <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                  By clicking subscribe, you agree to the Terms of Service and
                  Privacy Policy.
                </p>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400">
              <p>© 2025 Findit. All rights reserved.</p>

              <div className="flex gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
