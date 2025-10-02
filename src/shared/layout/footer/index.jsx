 import React from 'react';
 const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8 w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-10 overflow-hidden">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Exclusive */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-inter">Exclusive</h3>
            <h4 className="text-xl font-poppins ">Subscribe</h4>
            <p className="text-sm font-poppins ">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-white bg-transparent text-[#FAFAFA] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2  hover:bg-white hover:text-black transition-colors">
               <img src="/src/assets/home assets/arrow.svg" alt="send"  className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="space-y-4">
            <h3 className="text-2xl  font-poppins">Support</h3>
            <p className="text-sm font-poppins">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-sm font-poppins">exclusive@gmail.com</p>
            <p className="text-sm font-poppins">+88015-88888-9999</p>
          </div>

          {/* Column 3: Account */}
          <div className="space-y-4">
            <h3 className="text-2xl  font-poppins">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">My Account</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">Login / Register</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">Cart</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Wishlist</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">Shop</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">Terms Of Use</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">FAQ</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors font-poppins">Contact</a></li>
            </ul>
          </div>
{/* Column 5: Download App */}
          <div className="space-y-4 ">
            <h3 className="text-2xl font-poppins">Download App</h3>
            <p className="text-[12px]  text-[#FAFAFA] font-poppins">Save $3 with App New User Only</p>
            <div className="flex items-start space-x-4">
              {/* QR Code Placeholder */}
              <div className="w-25 h-25 bg-white flex items-center justify-center">
                <div className="bg-black h-full w-full">
                <img src="/src/assets/home assets/qr.png" alt="google-play" className="w-full h-full" />
                </div>
              </div>
              
              {/* App Store Badges */}
              <div className="space-y-2">
              <img src="/src/assets/home assets/google play.png" alt="google-play" className="w-full h-full" />
               
                <img src="/src/assets/home assets/appstore.png" alt="google-play" className="w-full h-full" />
                
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <img src="/src/assets/home assets/facebook.svg" alt="google-play" className="w-full h-full" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <img src="/src/assets/home assets/tiwtter.svg" alt="google-play" className="w-full h-full" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <img src="/src/assets/home assets/instagram.svg" alt="google-play" className="w-full h-full" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <img src="/src/assets/home assets/linkedin.svg" alt="google-play" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-600 mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm font-poppins">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;