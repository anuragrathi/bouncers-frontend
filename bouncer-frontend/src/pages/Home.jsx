import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function Home() {
  return (
    <main className="min-h-screen font-open-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-crimson-pro font-semibold mb-8 leading-tight">
          Welcome to Our Platform
        </h1>
        <p className="text-lightGray text-lg sm:text-xl max-w-3xl mb-12">
          Discover the best services and experiences curated just for you.
        </p>
        <Button text="Get Started" className="bg-royalBlue text-white px-8 py-4 rounded-full font-semibold hover:bg-darkBlue transition">
        
        </Button>
      </section>

         {/* Newsletter Section */}
      <section className="relative text-white py-16 px-4 text-center mb-16">
        <div className="absolute inset-0 bg-black clip-shape"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Stay Updated!</h2>
          <p className="mb-6">
            Subscribe to our newsletter to receive security tips and event updates.
          </p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-full text-black bg-white outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:text-gray transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <style jsx>{`
          .clip-shape {
            clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
          }
        `}</style>
      </section>

    {/* Featured Bouncers Section */}
      <section className="bg-lightGray py-16 px-4 text-center mb-16">
        <h2 className="text-3xl font-semibold text-darkBlue mb-12">Featured Bouncers</h2>
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: "Mike",
              role: "Head Bouncer",
              icon: <FaUser className="w-16 h-16 text-darkBlue" />,
            },
            {
              name: "Liam",
              role: "Security Expert",
              icon: <FaUser className="w-16 h-16 text-darkBlue" />,
            },
            {
              name: "Sophia",
              role: "VIP Protection",
              icon: <FaUser className="w-16 h-16 text-darkBlue" />,
            },
          ].map((bouncer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                {bouncer.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{bouncer.name}</h3>
              <p className="text-sm text-royalBlue">{bouncer.role}</p>
            </div>
          ))}
        </div>
      </section>

    
    </main>
  );
}

export default Home;
