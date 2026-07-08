import { Bed, Bath, MapPin, Heart, Search, Home } from "lucide-react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
const properties = [
  {
    id: 1,
    title: "South Sunlight Apartment",
    location: "New York",
    image:
      "https://framerusercontent.com/images/nkHXOxaw98cgDRMvoBOeLmnRe58.jpg?width=1024&height=644",
    beds: 4,
    baths: 2,
    area: "950 sqft",
    price: "$1,200",
    type: "Apartment",
  },
  {
    id: 2,
    title: "Marble House",
    location: "Texas",
    image:
      "https://framerusercontent.com/images/tRZfzBydgDWngJXcMe6rIohrW4w.jpg?width=1400&height=785",
    beds: 5,
    baths: 3,
    area: "1450 sqft",
    price: "$550,000",
    type: "Villa",
  },
  {
    id: 3,
    title: "Family Mansion",
    location: "California",
    image:
      "https://framerusercontent.com/images/ESBHeCBUOjwbcy4XSYGlllANrM.jpg?width=1300&height=817",
    beds: 6,
    baths: 4,
    area: "2500 sqft",
    price: "$2,300",
    type: "Villa",
  },
  {
    id: 4,
    title: "East Sunlight Apartment",
    location: "Florida",
    image:
      "https://framerusercontent.com/images/Q7VSzAhTwrwKXpeI1uJRYGkdjl4.jpg?width=1024&height=644",
    beds: 3,
    baths: 2,
    area: "1000 sqft",
    price: "$1,200",
    type: "Apartment",
  },
  {
    id: 5,
    title: "South Side Garden",
    location: "Chicago",
    image:
      "https://framerusercontent.com/images/WjaMrA5KsIOrk9S6LbjJz04V6Mk.jpg?width=841&height=533",
    beds: 4,
    baths: 2,
    area: "1200 sqft",
    price: "$350,000",
    type: "House",
  },
  {
    id: 6,
    title: "Modern Family Home",
    location: "Miami",
    image:
      "https://framerusercontent.com/images/5WuCKQgbG4SXKjuV4DqyOYD2FY8.jpg?width=1400&height=887",
    beds: 5,
    baths: 3,
    area: "1600 sqft",
    price: "$2,200",
    type: "Villa",
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



export default function FreshMarket() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}

          <div className="mb-10">
            <h2 className="text-4xl font-bold">
              Fresh on the <span className="text-gray-600">Market</span>
            </h2>

            <p className="text-gray-500 mt-2 max-w-xl">
              Stay ahead with the newest listings available now.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}

            <aside className="bg-white rounded-2xl shadow-md p-6 h-fit">
              <h3 className="font-semibold text-lg mb-6">Explore All</h3>

              <div className="relative mb-6">
                <Search
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  placeholder="Search..."
                  className="w-full border rounded-lg pl-10 py-2 outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Type</h4>

                  <div className="flex flex-wrap gap-2">
                    {["Apartment", "Villa", "House"].map((item) => (
                      <button
                        key={item}
                        className="px-3 py-1 rounded-full border text-sm hover:bg-gray-600 hover:text-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Category</h4>

                  <div className="flex flex-wrap gap-2">
                    {["Luxury", "Modern", "Family"].map((item) => (
                      <button
                        key={item}
                        className="px-3 py-1 rounded-full border text-sm hover:bg-gray-600 hover:text-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Location</h4>

                  <div className="flex flex-wrap gap-2">
                    {["New York", "Miami", "Texas"].map((item) => (
                      <button
                        key={item}
                        className="px-3 py-1 rounded-full border text-sm hover:bg-gray-600 hover:text-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Property Cards */}

            <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl duration-300"
                >
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-56 object-cover  transition-all duration-500 hover:scale-110"
                    />

                    <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                      {property.type}
                    </span>

                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                      <Heart size={18} />
                    </button>
                  </div>

                  <div className="p-5">
                    <p className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin size={15} />
                      {property.location}
                    </p>

                    <h3 className="font-semibold text-lg mt-2">
                      {property.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                      <span className="flex items-center gap-1">
                        <Bed size={16} />
                        {property.beds}
                      </span>

                      <span className="flex items-center gap-1">
                        <Bath size={16} />
                        {property.baths}
                      </span>

                      <span className="flex items-center gap-1">
                        <Home size={16} />
                        {property.area}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-xl font-bold text-gray-600">
                        {property.price}
                      </p>

                      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
}
