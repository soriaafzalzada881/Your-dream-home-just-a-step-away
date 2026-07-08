import React from "react";
import { ArrowUpRight } from "lucide-react";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Steve Parker",
    email: "steveparker@example.com",
    image:
      "https://framerusercontent.com/images/5x1fT5ziyBiBDdp5DW7yYQ2FaBQ.jpg?width=608&height=766",
  },
  {
    id: 2,
    name: "Ingrid Vulk",
    email: "ingridvulk@example.com",
    image:
      "https://framerusercontent.com/images/zsqV2u2Pq3YLJwsqXEyQL62N5c4.jpg?width=608&height=766",
  },
  {
    id: 3,
    name: "Rachel Gray",
    email: "rachelgray@example.com",
    image:
      "https://framerusercontent.com/images/xm1NND3cu7D3f8HHKpnN3vpNBV4.jpg?width=608&height=766",
  },
];
const benefits = [
  {
    id: "01",
    title: "Buy a new home",
    desc: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
  },
  {
    id: "02",
    title: "Rent a home",
    desc: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
  },
  {
    id: "03",
    title: "Sell a home",
    desc: "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
  },
];
const data = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/nkHXOxaw98cgDRMvoBOeLmnRe58.jpg?width=1024&height=644",
    title: "South Sunlight Apartment",
    location: "Staten Island",
    beds: 4,
    baths: 2,
    sqft: 160,
    price: "$1,200",
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/tRZfzBydgDWngJXcMe6rIohrW4w.jpg?width=1400&height=785",
    title: "Marble House",
    location: "Queens",
    beds: 4,
    baths: 3,
    sqft: 250,
    price: "$550,000",
  },
  {
    id: 3,
    image:
      "https://framerusercontent.com/images/TpOlK8PJWmrVAp7lYOI63ckh1fQ.jpg?width=1400&height=785",
    title: "Family Mansion",
    location: "Manhattan",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: "$2,200",
  },
  {
    id: 4,
    image:
      "https://framerusercontent.com/images/4VHDP9BI8AReYFtLLl86Beomhs.jpg?width=1024&height=644",
    title: "East Sunlight Apartment",
    location: "Staten Island",
    beds: 4,
    baths: 2,
    sqft: 160,
    price: "$1,200",
  },
  {
    id: 5,
    image:
      "https://framerusercontent.com/images/K1cAdts1F9uFubPR2QMKH0UzK5s.jpg?width=1400&height=785",
    title: "South Side Garden",
    location: "Queens",
    beds: 4,
    baths: 3,
    sqft: 250,
    price: "$550,000",
  },
  {
    id: 6,
    image:
      "https://framerusercontent.com/images/ESBHeCBUOjwbcy4XSYGlllANrM.jpg?width=1300&height=817",
    title: "Modern Family Home",
    location: "Manhattan",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: "$2,200",
  },
];

function Agents() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}

          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                Our Agents
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Meet the experts behind
                <br />
                your real estate journey
              </h2>
            </div>

            <div className="flex items-center lg:justify-end">
              <p className="text-gray-600 max-w-md text-lg">
                Our agents combine local knowledge, market expertise, and a
                passion for helping clients find the right property.
              </p>
            </div>
          </div>

          {/* Cards */}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="group bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-[420px object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}

                <div className="flex justify-between items-end p-5">
                  <div>
                    <h3 className="text-xl font-semibold">{agent.name}</h3>

                    <p className="text-gray-500 text-sm mt-1">{agent.email}</p>
                  </div>

                  <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side */}
            <div className="relative flex justify-center">
              {/* Main Image */}
              <img
                src="https://framerusercontent.com/images/XXg8QrmCUY5PgWmNqLkowpEAc.jpg?scale-down-to=4096&width=3376&height=6000"
                alt=""
                className="w-340px h-600px object-cover rounded-xl"
              />

              {/* Top Floating Card */}
              <div className="absolute -top-12 right-8">
                <img
                  src="https://framerusercontent.com/images/4LNT35jK5LrTtRveozZqCOzc1s.jpg?width=6000&height=4000"
                  alt=""
                  className="w-40 h-40 rounded-xl object-cover shadow-xl"
                />
              </div>

              {/* Bottom Floating Card */}
              <div className="absolute -bottom-12 left-0">
                <img
                  src="https://framerusercontent.com/images/AvzyVNCd4TdEaYRLz3JpLs0hzAc.jpg?width=4096&height=4096"
                  alt=""
                  className="w-44 h-40 rounded-xl object-cover shadow-xl"
                />
              </div>

              {/* Floating Tags */}
              <div className="absolute top-6 right-20 bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                ✓ Trusted Expertise
              </div>

              <div className="absolute top-32 -left-6 bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                ✓ Tailored to You
              </div>

              <div className="absolute top-60 right-0 bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                ✓ Seamless Process
              </div>

              <div className="absolute top-96 -left-8 bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                ✓ Strong Market Insights
              </div>

              <div className="absolute bottom-0 left-28 bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                ✓ After-Sales Support
              </div>
            </div>

            {/* Right Side */}
            <div>
              <p className="uppercase text-xs tracking-widest mb-4">
                Our Benefits
              </p>

              <h2 className="text-5xl font-semibold leading-tight mb-6">
                Building dreams, one home at a time
              </h2>

              <p className="text-gray-600 mb-10">
                Our mission goes beyond real estate — it's about guiding you
                through one of life's biggest milestones with heart, expertise,
                and unwavering commitment.
              </p>

              <div className="space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 flex gap-6"
                  >
                    <span className="text-3xl font-medium">{item.id}.</span>

                    <div>
                      <h3 className="text-2xl font-medium mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800  transition-transform duration-300 hover:-translate-y-1">
                More about us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">
              Latest Properties
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold">
              Fresh on the market
            </h2>
          </div>

          <p className="text-gray-500 max-w-sm">
            Stay ahead of the curve with our newest listings — handpicked homes
            and investments recently added to the market.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            View All
          </button>

          {["Apartments", "Condos", "Houses", "Villas"].map((item) => (
            <button
              key={item}
              className="border px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <MapPin size={14} />
                  {property.location}
                </div>

                <h3 className="font-semibold text-lg mb-4">{property.title}</h3>

                <div className="flex flex-wrap gap-3 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <BedDouble size={14} />
                    Beds: {property.beds}
                  </span>

                  <span className="flex items-center gap-1">
                    <Bath size={14} />
                    Baths: {property.baths}
                  </span>

                  <span className="flex items-center gap-1">
                    <Square size={14} />
                    Sqft: {property.sqft}
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://framerusercontent.com/images/xm1NND3cu7D3f8HHKpnN3vpNBV4.jpg?width=608&height=766ps://framerusercontent.com/images/5x1fT5ziyBiBDdp5DW7yYQ2FaBQ.jpg?width=608&height=766"
                      alt="agent"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm">Rachel Gray</span>
                  </div>

                  <span className="font-semibold">{property.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            View all properties
          </button>
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

export default Agents;
