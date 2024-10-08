import React, { useContext, useEffect } from "react";
import Search from "../components/Search";
import Container from "../components/Container";
import myContext from "../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Allproducts() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);
  const navigate = useNavigate();

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Add to Cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Search />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Our Latest Collection
            </h1>
            <div className="h-1 w-20 bg-customBlue rounded"></div>
          </div>
          {product?.length > 0 ? (
            <>
              <div className="flex flex-wrap -m-4">
                {product
                  .filter((obj) => obj.title.includes(searchkey))
                  .filter((obj) => obj.category.includes(filterType))
                  .filter((obj) => obj.price.includes(filterPrice))
                  .slice(0, 8).length > 0 ? (
                  product
                    .filter((obj) => obj.title.includes(searchkey))
                    .filter((obj) => obj.category.includes(filterType))
                    .filter((obj) => obj.price.includes(filterPrice))
                    .slice(0, 8)
                    .map((item, index) => {
                      const {
                        title,
                        price,
                        description,
                        category,
                        imageUrl,
                        id,
                      } = item;
                      return (
                        <div
                          key={index}
                          className="p-4 md:w-1/4 drop-shadow-lg"
                        >
                          <div
                            className="h-full flex flex-col justify-between border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                            style={{
                              backgroundColor:
                                mode === "dark" ? "rgb(46 49 55)" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <div
                              className="flex justify-center cursor-pointer"
                              onClick={() => navigate(`/productinfo/${id}`)}
                            >
                              <img
                                className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out"
                                src={imageUrl}
                                alt="product"
                              />
                            </div>
                            <div className="p-5 flex-grow">
                              <h2
                                className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {category}
                              </h2>
                              <h1
                                className="title-font text-lg font-medium text-gray-900 mb-3"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {title}
                              </h1>
                              <p className="leading-relaxed mb-3">
                                {description}
                              </p>
                              <p
                                className="leading-relaxed mb-3"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                ₹{price}
                              </p>
                            </div>
                            <div className="p-5">
                              <button
                                type="button"
                                onClick={() => addCart(item)}
                                className="w-full text-white bg-customBlue hover:bg-blue-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm py-2"
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div className="w-full text-center py-10">
                    <h2
                      className="text-lg font-semibold"
                      style={{ color: mode === "dark" ? "white" : "black" }}
                    >
                      Product not found
                    </h2>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="w-full text-center py-10">
                <h2
                  className="text-lg font-semibold"
                  style={{ color: mode === "dark" ? "white" : "black" }}
                >
                  Product not found
                </h2>
              </div>
            </>
          )}
          {/* <div className="flex flex-wrap -m-4">
          {product

            .filter((obj) => obj.title.includes(searchkey))
            .filter((obj) => obj.category.includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .slice(0, 8)
            .map((item, index) => {
              const { title, price, description, category, imageUrl, id } =
                item;
              return (
                <div key={index} className="p-4 md:w-1/4 drop-shadow-lg">
                  <div
                    className="h-full flex flex-col justify-between border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <div
                      className="flex justify-center cursor-pointer"
                      onClick={() => naviagte(`/productinfo/${id}`)}
                    >
                      <img
                        className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out"
                        src={imageUrl}
                        alt="product"
                      />
                    </div>
                    <div className="p-5 flex-grow">
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {category}
                      </h2>
                      <h1
                        className="title-font text-lg font-medium text-gray-900 mb-3"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {title}
                      </h1>
                      <p className="leading-relaxed mb-3">{description}</p>
                      <p
                        className="leading-relaxed mb-3"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        ₹{price}
                      </p>
                    </div>
                    <div className="p-5">
                      <button
                        type="button"
                        onClick={() => addCart(item)}
                        className="w-full text-white bg-customBlue hover:bg-blue-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm py-2"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div> */}
        </div>
      </section>
    </Container>
  );
}

export default Allproducts;
