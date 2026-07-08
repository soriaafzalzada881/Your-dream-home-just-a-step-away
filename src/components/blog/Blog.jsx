import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "The Power of Natural Light in Architectural Design",
    desc: "Natural light plays a crucial role in shaping architectural spaces, offering both aesthetics and functionality.",
    image:
      "https://framerusercontent.com/images/ok9BYTNJjNChMJySre9YQulqA.jpg?width=5272&height=3948",
  },
  {
    id: 2,
    title: "Photography: Capturing the Essence of Buildings",
    desc: "Architecture photography goes beyond simply documenting structures.",
    image:
      "https://framerusercontent.com/images/QkLgYksFHV39iLbFVjMLYas2xu4.jpg?width=7008&height=4672",
  },
  {
    id: 3,
    title: "The Future of Smart Homes",
    desc: "Discover how smart technology is transforming modern living.",
    image:
      "https://framerusercontent.com/images/NqgIaWEck0F7XeDdygI4L6nun3g.jpg?width=2177&height=3265",
  },
  {
    id: 4,
    title: "The Art of Interior Design",
    desc: "Creating beautiful interiors that inspire everyday living.",
    image:
      "https://framerusercontent.com/images/L5xKw9VZuACLz0eWzBtxpJAgUEY.jpg?width=4545&height=3030",
  },
  {
    id: 5,
    title: "Preservation and Restoration",
    desc: "Protecting architectural heritage for future generations.",
    image:
      "https://framerusercontent.com/images/WBTRtUbJHi1ifQrhFfguR6I10g.jpg?width=5866&height=3911",
  },
  {
    id: 6,
    title: "Journey of Construction",
    desc: "From blueprint to reality—how projects come to life.",
    image:
      "https://framerusercontent.com/images/wUlnqGxrt7F0sRblK3vfxV41Eaw.jpg?width=5304&height=7952",
  },
  {
    id: 7,
    title: "Designing for Well-being",
    desc: "How architecture influences health and happiness.",
    image:
      "https://framerusercontent.com/images/CRPTbrtZ9cvHIqtzWbU9i3nk4E.jpg?width=5886&height=3923",
  },
  {
    id: 8,
    title: "Sculpting Spaces",
    desc: "The role of art in modern architecture.",
    image:
      "https://framerusercontent.com/images/aA3wv3oHryydIS8WybLaoRnE.jpg?width=4160&height=6240",
  },
  {
    id: 9,
    title: "Balancing Tradition and Innovation",
    desc: "Modern architecture inspired by timeless ideas.",
    image:
      "https://framerusercontent.com/images/w2ufvfQ0re93GxgfUcDfCWxH0EY.jpg?width=3992&height=5976",
  },
  {
    id: 10,
    title: "Harmonizing Form and Function",
    desc: "The principles behind iconic buildings.",
    image:
      "https://framerusercontent.com/images/1FLwG7QgYzIIiS2uwF7xwwTd0Dc.jpg?width=6223&height=4672",
  },
  {
    id: 11,
    title: "Architectural Marvels",
    desc: "Iconic buildings from around the world.",
    image:
      "https://framerusercontent.com/images/lVACa5csfc57UKwgqmKVynIqIhk.jpg?width=3984&height=2656",
  },
  {
    id: 12,
    title: "Sustainable Architecture",
    desc: "Building a greener future through smart design.",
    image:
      "https://framerusercontent.com/images/G1fEURjyKH0bbxRB9rc9xr4kM4.jpg?width=5822&height=3874",
  },
];

const Blog = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
            <div>
              <p className="uppercase tracking-[4px] text-xs text-gray-500 mb-3">
                ● Blog
              </p>

              <h2 className="text-4xl font-bold">
                Insights & Real Estate Tips
              </h2>
            </div>

            <p className="max-w-md text-gray-600">
              Our experts combine local knowledge, market expertise and
              practical advice to help you make informed real estate decisions.
            </p>
          </div>

          {/* Blog Grid */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition duration-500"
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}

                <div className="p-5">
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-semibold text-lg leading-snug group-hover:text-blue-600 transition">
                      {blog.title}
                    </h3>

                    <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:rotate-45 transition duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
              </div>
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
    </div>
  );
};

export default Blog;
