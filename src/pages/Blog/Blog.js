import React from "react";
import "./Blog.css";
import { Parallax } from "react-parallax";
import img1 from '../Blog/images/4.JPG';
import img2 from '../Blog/images/1.JPG';
import img3 from '../Blog/images/wait-img.jpg';
import img4 from '../Blog/images/6.JPG';


function Blog() {
  return (
    
    <div className="App jus ">
      <Parallax strength={300} bgImage={img1}>
        <div className="content">
          <div className="text-content">Coding</div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={img2} >
        <div className="content">
          <div className="text-content">projects support</div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={img3}>
        <div className="content">
          <div className="text-content">Inspiration</div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={img4}>
        <div className="content">
          <div className="text-content">Inspiration</div>
        </div>
      </Parallax>
      
    </div>
  );
}


export default Blog;
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import Typical from 'react-typical'
// function Blog() {
  //   const carousel = useRef();
//   useEffect(() => {}, []);
//   return (
//     <>
//       <div>
//         <motion.div
//           className="carousel position position-relative "
//           ref={carousel}
//         >
//           <button className="border-0 bg-white rounded position-absolute left-posi">
//             {" "}
//             <BsChevronLeft style={{ fontSize: 150 }} />
//           </button>
//           <motion.div
//             className=" inner-carousel "
//             drag="x"
//             dragConstraints={{ right: 0 }}
            
//           >
//             <motion.div className=" item d-flex ">
//               <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
//               <img src="images/2.JPG" alt="" className="rounded-5 mx-3" />
//               <img src="images/4.JPG" alt="" className="rounded-5 mx-3" />
//               <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
//               <img src="images/blog.png" alt="" className="rounded-5 mx-3" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//       <button className="border-0 bg-white rounded ">
//         {" "}
//         <BsChevronRight style={{ fontSize: 150 }} m-4 />
//       </button>
//     </>
//   );
// }


