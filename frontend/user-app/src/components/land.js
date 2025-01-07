import React, { useState } from 'react';
import Main from './Main';
const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleReportClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      {showForm ? (
        <Main />
      ) : (
        <>
          {/* Hero Section */}
          <header className="bg-green-600 text-white">
            <div className="container mx-auto px-6 py-16">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Help Stray Animals in Need</h1>
                  <p className="text-xl mb-8">Report stray animals that need assistance. Your action can save a life!</p>
                  <button onClick={handleReportClick} className="bg-white text-green-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300">
                    Report a Stray Animal
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img src="https://www.humanesociety.org/sites/default/files/2022-09/stray-cat-579765.jpg" alt="Stray Animal" className="rounded-lg shadow-xl w-full h-auto" />
                </div>
              </div>
            </div>
          </header>

          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Report a Stray Animal", description: "Fill out our easy-to-use form with details about the animal in need." },
                  { title: "We Alert Authorities", description: "Your report is immediately sent to the responsible local authorities." },
                  { title: "Animal Gets Help", description: "Authorities respond to provide necessary care and assistance to the animal." }
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4 text-green-600">{index + 1}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="bg-green-600 text-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { number: "10,000+", description: "Animals Reported" },
                  { number: "8,500+", description: "Animals Assisted" },
                  { number: "500+", description: "Partnered Authorities" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <p className="text-xl">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-lg mb-4">"I found an injured stray dog and didn't know what to do. This platform connected me with the right authorities, and the dog received immediate medical attention. It's heartwarming to see such quick action!"</p>
                <div className="font-semibold">- Alex Thompson, Concerned Citizen</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-green-100 py-16">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">See a Stray Animal in Need?</h2>
              <p className="text-xl mb-8">Your report can make a difference in an animal's life. Act now!</p>
              <button onClick={handleReportClick} className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
                Report a Stray Animal Now
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-green-800 text-white py-8">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold">StrayAid</h3>
                  <p>Connecting stray animals with the help they need.</p>
                </div>
                <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                  <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                  <ul>
                    {/* <li><a href="#" className="hover:text-green-300">About Us</a></li>
                    <li><a href="#" className="hover:text-green-300">FAQs</a></li>
                    <li><a href="#" className="hover:text-green-300">Contact</a></li> */}
                    <li><button onClick={handleReportClick} className="hover:text-green-300">Report Animal</button></li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-right">
                  <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                  <div className="flex justify-center md:justify-end space-x-4">
                    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">Instagram</a> */}
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default LandingPage;

