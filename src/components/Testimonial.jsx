import React, { useContext } from "react";
import Context from "../Context/Context";

function Testimonial() {
  const context = useContext(Context);
  const { mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-6 text-gray-900 "
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            About
            <span className=" text-customBlue ml-2">Our Customers</span>
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="">
                <div className="flex justify-center mb-4 mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512  512 "
                    className="w-14 h-14"
                  >
                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                  </svg>
                </div>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed "
                >
                  Website is intuitive design, noting how easy it was to search
                  for products and complete the checkout process, which made
                  their shopping experience enjoyable.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="">
                <div
                  className="flex justify-center mb-4 mt-8 "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512  512 "
                    className="w-14 h-14"
                  >
                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                  </svg>
                </div>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed "
                >
                  Variety of products available, but expressed frustration with
                  delayed shipping times, suggesting that faster delivery would
                  greatly improve the service.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="">
                <div className="flex justify-center mb-4 mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512  512 "
                    className="w-14 h-14"
                  >
                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                  </svg>
                </div>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed "
                >
                  Responsive customer support team, who quickly resolved an
                  issue with a returned item. Overall, their feedback reflects
                  both strengths in user experience and areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
