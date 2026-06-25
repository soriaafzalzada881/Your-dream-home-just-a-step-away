import React from "react";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Marble House",
    address: "161-03 84th Ave, Queens, NY 11432, USA Queens New York",
    image:
      "https://framerusercontent.com/images/tRZfzBydgDWngJXcMe6rIohrW4w.jpg?width=1400&height=785",
    type: "Houses",
    status: "Rent",
    featured: true,
  },
  {
    id: 2,
    title: "Family Mansion",
    address: "654 Water St, New York, NY 10002, USA Manhattan",
    image:
      "https://framerusercontent.com/images/TpOlK8PJWmrVAp7lYOI63ckh1fQ.jpg?width=1400&height=800",
    type: "Apartments",
    status: "Rent",
  },
  {
    id: 3,
    title: "South Side Garden",
    address: "161-03 84th Ave, Queens, NY 11432, USA Queens New York",
    image:
      "https://framerusercontent.com/images/K1cAdts1F9uFubPR2QMKH0UzK5s.jpg?width=1400&height=785",
    type: "Houses",
    status: "Sell",
  },
  {
    id: 4,
    title: "Modern Family Home",
    address: "654 Water St, New York, NY 10002, USA Manhattan",
    image:
      "https://framerusercontent.com/images/ESBHeCBUOjwbcy4XSYGlllANrM.jpg?width=1300&height=817",
    type: "Apartments",
    status: "Rent",
  },
  {
    id: 5,
    title: "Rustic Forest Cabin",
    address: "1845 Tenbroeck Ave, The Bronx, NY 10461, USA",
    image:
      "https://framerusercontent.com/images/jEo4jPXWzEmu0zclMrEwpeXUWk4.jpg?width=1024&height=744",
    type: "Condos",
    status: "Rent",
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
const locations = [
  {
    name: "Brooklyn",
    properties: 3,
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
  },
  {
    name: "Manhattan",
    properties: 4,
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
  },
  {
    name: "Queens",
    properties: 6,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800",
  },
  {
    name: "Staten Island",
    properties: 4,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    name: "The Bronx",
    properties: 4,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
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
const testimonials = [
  {
    id: 1,
    name: "Mike F.",
    text: "Support You Can Rely On. They guided us through every step.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Daniel S.",
    text: "Exceptional service and clear communication.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Olivia C.",
    text: "Stress-free experience from beginning to end.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "James P.",
    text: "Professional guidance throughout the process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emily T.",
    text: "The communication was excellent and timely.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "John D.",
    text: "Highly recommended. Great experience overall.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];
const Card = ({ item }) => (
  <div className="min-w-280px md:min-w-[320px] bg-white rounded-2xl shadow-md p-5">
    <div className="text-yellow-400 text-lg mb-3">★★★★★</div>

    <p className="text-gray-600 text-sm mb-6">{item.text}</p>

    <div className="flex items-center gap-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <h4 className="font-medium">{item.name}</h4>
    </div>
  </div>
);
const stats = [
  {
    number: "$150M+",
    title: "Properties sold",
    description:
      "Over $150M in sales, helping clients find homes and investments with ease and confidence.",
  },
  {
    number: "500+",
    title: "Happy clients",
    description:
      "More than 500 satisfied clients trust us to make their real estate journey smooth and successful.",
  },
  {
    number: "20+",
    title: "Years of expertise",
    description:
      "Over 20 years of experience guiding clients with market insight and professional advice.",
  },
];
const insights = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/ok9BYTNJjNChMJySre9YQulqA.jpg?width=5272&height=3948",
    title: "The Power of Natural Light in Architectural Design",
    description:
      "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and functional benefits.",
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/QkLgYksFHV39iLbFVjMLYas2xu4.jpg?width=7008&height=4672",
    title: "Photography: Capturing the Essence of Buildings",
    description:
      "Architectural photography goes beyond simply documenting structures; it captures the soul of a building.",
  },
  {
    id: 3,
    image:
      "https://framerusercontent.com/images/NqgIaWEck0F7XeDdygI4L6nun3g.jpg?width=2177&height=3265",
    title: "The Future of Smart Homes: Innovative Interior Design",
    description:
      "The rise of smart homes is transforming the way we live, blending cutting-edge technology with innovative design.",
  },
];
const PropertyCard = ({ property }) => {
  return (
    <div className="h-full overflow-hidden rounded-xl bg-gray-100">
      <div className="relative h-300px">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-medium">{property.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{property.address}</p>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <section className="min-h-screen bg-gray-100 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {/* Hero Content */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs sm:text-sm">
              <img
                className="h-5 w-5 rounded-full bg-black"
                src="http://localhost:5173/svg-image-2.png"
                alt="star"
              />
              Your trusted partner in real estate
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Your dream home,
              <br />
              just a step away
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm text-gray-600 sm:text-base">
              Discover handpicked properties that match your lifestyle, whether
              you're buying, selling, or investing.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-black px-6 py-3 text-white  hover:bg-gray-800 transition-transform duration-300 hover:scale-110 ">
                Explore properties
              </button>

              <button className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white">
                Book a visit
              </button>
            </div>
          </div>

          {/* Property Video */}
          <div className="relative mx-auto mt-12 max-w-5xl">
            <video
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/RKRfBg4NDpw33ha8GkP2aF67W0.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden   mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
              <span className="h-2 w-2 rounded-full border border-black"></span>
              Featured Properties
            </p>

            <h2 className="text-4xl font-semibold text-black md:text-5xl">
              Explore our featured listings
            </h2>
          </div>

          <p className="max-w-sm text-gray-500">
            From modern city apartments to spacious family homes, find the one
            that feels just right.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Large Left Card */}
          <div className="lg:col-span-8 h-full">
            <PropertyCard property={properties[0]} />
          </div>

          <div className="lg:col-span-4 h-full">
            <PropertyCard property={properties[1]} />
          </div>

          {/* Bottom Cards */}
          <div className="lg:col-span-4">
            <PropertyCard property={properties[2]} />
          </div>

          <div className="lg:col-span-4">
            <PropertyCard property={properties[3]} />
          </div>

          <div className="lg:col-span-4">
            <PropertyCard property={properties[4]} />
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Explore Cities
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our location for you
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-sm md:text-base">
              Each neighborhood has its own story. Discover the areas that match
              your lifestyle — whether you seek vibrant city energy, peaceful
              family communities, or exclusive luxury living.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, 3).map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.properties} Property
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {locations.slice(3).map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.properties} Property
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/zXIXkuZZJUSwdBhaihJHq7JZjw.jpg?width=4000&height=3126')",
        }}
      >
        {/* Card */}
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 max-w-lg w-full">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
            Our Process
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Simple steps to your dream home
          </h2>

          <p className="text-gray-600 text-sm mb-8">
            We make buying, selling, or investing in property effortless. Here's
            how we guide you every step of the way.
          </p>

          {/* Steps */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <h3 className="text-3xl font-medium">01.</h3>
              <div>
                <h4 className="text-xl font-medium">Discover</h4>
                <p className="text-gray-600 text-sm">
                  We start by understanding your goals and lifestyle, then
                  curate properties that match.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <h3 className="text-3xl font-medium">02.</h3>
              <div>
                <h4 className="text-xl font-medium">Experience</h4>
                <p className="text-gray-600 text-sm">
                  Guided viewings and expert insights help you explore the best
                  options with confidence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <h3 className="text-3xl font-medium">03.</h3>
              <div>
                <h4 className="text-xl font-medium">Secure</h4>
                <p className="text-gray-600 text-sm">
                  From negotiation to closing, we ensure a seamless, stress-free
                  transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
            Start your journey
          </button>
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
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`py-8 md:px-8 ${
                  index !== stats.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-800"
                    : ""
                }`}
              >
                <h2 className="text-5xl md:text-6xl font-light mb-6">
                  {item.number}
                </h2>

                <h3 className="text-xl font-medium mb-4">{item.title}</h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-600 mb-3">
                <span className="w-3 h-3 rounded-full border border-gray-500"></span>
                Latest New
              </div>

              <h2 className="text-4xl md:text-5xl font-medium text-black">
                Insights & Updates
              </h2>
            </div>

            <p className="max-w-md text-gray-600 text-base md:text-lg">
              Stay informed with expert tips, market trends, and property advice
              to guide your real estate journey.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {insights.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
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
    </>
  );
}

export default Home;
