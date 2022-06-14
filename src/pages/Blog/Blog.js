import React from "react";
import "./Blog.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
function Blog() {
  const carousel = useRef();
  useEffect(() => {}, []);
  return (
    <>
      <div>
        <motion.div
          className="carousel position position-relative "
          ref={carousel}
        >
          <button className="border-0 bg-white rounded position-absolute left-posi">
            {" "}
            <BsChevronLeft style={{ fontSize: 150 }} />
          </button>
          <motion.div
            className=" inner-carousel "
            drag="x"
            dragConstraints={{ right: 0 }}
          >
            <motion.div className=" item d-flex ">
              <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
              <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
              <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
              <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
              <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <button className="border-0 bg-white rounded ">
        {" "}
        <BsChevronRight style={{ fontSize: 150 }} m-4 />
      </button>
    </>
  );
}
export default Blog;
