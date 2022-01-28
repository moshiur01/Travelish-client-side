import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <div className="p-8 text-center font-medium">
        <h1 className="text-5xl mb-3">Our Latest Blogs</h1>
        <p className="text-3xl">
          Travel is the only thing you buy that makes you richer
        </p>
      </div>
      <div className="md:grid grid-cols-5">
        <div className="col-span-4">
          <Posts></Posts>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
      <Pagination></Pagination>
      <Footer></Footer>
    </>
  );
};

export default Home;
