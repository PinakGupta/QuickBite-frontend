import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaStar, FaUtensils, FaMobileAlt, FaHeadset } from "react-icons/fa";
import { MdRestaurant, MdDeliveryDining, MdPayment, MdLocalOffer, MdSecurity, MdLocationOn } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import Hero from "../components/Hero";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const testimonials = [
    {
      name: "Aarav Mehta",
      comment: "QuickBite has changed the way I order food. Deliveries are always on time and the food is piping hot!",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Sneha Reddy",
      comment: "There’s a great variety of restaurants. The app is super easy to navigate and support is always helpful.",
      rating: 5,
      location: "Hyderabad"
    },
    {
      name: "Rajesh Kumar",
      comment: "As someone with a hectic schedule, QuickBite is a lifesaver. The delivery partners are polite and professional!",
      rating: 5,
      location: "Delhi"
    }
  ];
  

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with overlay */}
      <div className="relative">
        <Hero />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-800/50 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                Delicious Food, <span className="text-orange-400">Delivered Fast</span>
              </h1>
              <p className="text-xl text-white mb-8 drop-shadow-md">
                Discover the best food from over 3,000 restaurants and get fast delivery to your doorstep
              </p>
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <SearchBar
                  placeHolder="Enter your location to find restaurants near you"
                  onSubmit={handleSearchSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
            How QuickBite Works
            <div className="absolute w-20 h-1 bg-orange-500 left-1/2 -translate-x-1/2 bottom-0 mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaSearch className="text-orange-500 text-4xl" />,
                title: "Search",
                description: "Find restaurants near you by entering your location"
              },
              {
                icon: <MdRestaurant className="text-orange-500 text-4xl" />,
                title: "Choose",
                description: "Browse menus and select your favorite dishes"
              },
              {
                icon: <MdDeliveryDining className="text-orange-500 text-4xl" />,
                title: "Deliver",
                description: "Get your food delivered to your doorstep quickly"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-orange-500"
              >
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-gray-800 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
            Why Choose QuickBite
            <div className="absolute w-20 h-1 bg-orange-500 left-1/2 -translate-x-1/2 bottom-0 mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MdDeliveryDining className="text-orange-500 text-3xl" />,
                title: "Fast Delivery",
                description: "Delivery in 30 minutes or less"
              },
              {
                icon: <FaShoppingBag className="text-orange-500 text-3xl" />,
                title: "3,000+ Restaurants",
                description: "Wide variety of cuisines to choose from"
              },
              {
                icon: <MdPayment className="text-orange-500 text-3xl" />,
                title: "Secure Payments",
                description: "Multiple secure payment options"
              },
              {
                icon: <MdLocalOffer className="text-orange-500 text-3xl" />,
                title: "Best Offers",
                description: "Discounts and special deals for you"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Restaurants Section */}
      <div className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 relative">
          Featured Restaurants
          <div className="absolute w-20 h-1 bg-orange-500 left-1/2 -translate-x-1/2 bottom-0 mt-4"></div>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Restaurant 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                Popular
              </div>
              <img 
                src="http://res.cloudinary.com/dzduidnoo/image/upload/v1731480016/he6y4ns5u8ss1tjlfc8f.jpg" 
                alt="Food Bazar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  Food Bazar
                </h3>
                <span className="flex items-center bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  <FaStar className="mr-1 text-yellow-400" />
                  4.8
                </span>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MdLocationOn className="mr-1" />
                <span>Amritsar • </span>
                <BiDish className="mx-1" />
                <span>Fast Food, Indian</span>
              </div>
              <button 
                onClick={async () => await loginWithRedirect()} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-300 font-medium"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Restaurant 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                Popular
              </div>
              <img 
                src="http://res.cloudinary.com/dzduidnoo/image/upload/v1731429388/bsp2slmvitezn7u7hagt.jpg" 
                alt="Hunger Point" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  Hunger Point
                </h3>
                <span className="flex items-center bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  <FaStar className="mr-1 text-yellow-400" />
                  4.7
                </span>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MdLocationOn className="mr-1" />
                <span>Jalandhar • </span>
                <BiDish className="mx-1" />
                <span>Burgers, Snacks</span>
              </div>
              <button 
                onClick={async () => await loginWithRedirect()} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-300 font-medium"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Restaurant 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                Popular
              </div>
              <img 
                src="http://res.cloudinary.com/dzduidnoo/image/upload/v1731478633/seef8tizxyunej3qiufr.jpg" 
                alt="Anil Fast Food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                  Anil Fast Food
                </h3>
                <span className="flex items-center bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  <FaStar className="mr-1 text-yellow-400" />
                  4.6
                </span>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MdLocationOn className="mr-1" />
                <span>Jalandhar • </span>
                <BiDish className="mx-1" />
                <span>Street Food, Chinese</span>
              </div>
              <button 
                onClick={async () => await loginWithRedirect()} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-300 font-medium"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 italic">
          ...and many more
        </div>
      </div>
    </div>


      {/* App Features Section */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Discover the QuickBite Experience
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our platform is designed to make food ordering simple, fast, and enjoyable.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <FaUtensils className="text-orange-500 text-2xl" />,
                    title: "Wide Selection",
                    description: "Choose from thousands of restaurants offering diverse cuisines"
                  },
                  {
                    icon: <FaMobileAlt className="text-orange-500 text-2xl" />,
                    title: "Easy Ordering",
                    description: "Simple and intuitive interface for hassle-free ordering"
                  },
                  {
                    icon: <MdSecurity className="text-orange-500 text-2xl" />,
                    title: "Secure Platform",
                    description: "Your data and payments are always protected with us"
                  },
                  {
                    icon: <FaHeadset className="text-orange-500 text-2xl" />,
                    title: "24/7 Support",
                    description: "Our customer service team is always ready to help you"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-orange-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="bg-white shadow-xl rounded-2xl p-8 relative">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Customer Reviews</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <span className="text-gray-500 text-sm">{testimonial.location}</span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm italic">"{testimonial.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;