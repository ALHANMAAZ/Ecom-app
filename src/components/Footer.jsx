import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../Context/Context";

function Footer() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <footer className="w-full bg-gray-900 text-white  mt-16">
      <div className="footer-container container mx-auto px-6 pt-16 flex flex-wrap justify-between">
        <div className="content_1 flex flex-col items-start mb-8">
          <img src="/logo.png" alt="logo" className="w-28 h-auto mb-4" />
          <p className="text-gray-300 mb-4">
            Welcome to Walmart Ecommerce, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img
            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
            alt="cards"
            className="w-60 h-auto"
          />
        </div>
        <div className="content_2 mb-8">
          <h4 className="text-white font-medium  mb-6">SHOPPING</h4>
          <p className="block text-gray-400 mb-4 ">Computer Store</p>
          <p className="block text-gray-400 mb-4 ">Laptop Store</p>
          <p className="block text-gray-400 mb-4 ">Accessories</p>
          <p className="block text-gray-400 mb-4 ">Sales & Discount</p>
        </div>
        <div className="content_3 mb-8">
          <h4 className="text-white font-medium  mb-6">Experience</h4>
          <p className="block text-gray-400 mb-4 ">Contact Us</p>
          <p target="_blank" className="block text-gray-400 mb-4 ">
            Payment Method
          </p>
          <p target="_blank" className="block text-gray-400 mb-4 ">
            Delivery
          </p>
          <p target="_blank" className="block text-gray-400 mb-4 ">
            Return and Exchange
          </p>
        </div>
        <div className="content_4 mb-8">
          <h4 className="text-white font-medium  mb-6">NEWSLETTER</h4>
          <p className="text-gray-400 mb-6 ">
            Be the first to know about new arrivals, sales & promos!
          </p>
          <div className="f-mail flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700 text-white border-none outline-none p-3 w-full"
            />
            <i className="bx bx-envelope text-white ml-3"></i>
          </div>
        </div>
      </div>
      <div className="f-design text-center py-4 border-t border-gray-700">
        <p className="text-gray-400">© 2007-2047 WalmartEcommerce.com</p>
      </div>
    </footer>
  );
}

export default Footer;
