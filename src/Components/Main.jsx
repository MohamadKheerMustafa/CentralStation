import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Main = () => {
  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.3 } },
    closed: { opacity: 0 },
  };

  return (
    <motion.div id="Main" className="hero_area">
      {/* <div className="bg-box">
        <img src={header} alt="" />
      </div> */}
      {/* <!-- slider section --> */}
      <motion.section className="slider_section">
        <motion.div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <motion.div className="carousel-inner">
            <motion.div className="carousel-item active">
              <motion.div className="container ">
                <motion.div className="row">
                  <motion.div className="col-md-7 col-lg-6 ">
                    <motion.div
                      initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        y: 3 % 2 === 0 ? 0 : '60%',
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0, // Slide in to its original position
                        transition: {
                          duration: 2, // Animation duration
                        },
                      }}
                      viewport={{ once: true }}
                      className="detail-box"
                    >
                      <motion.h1>CENTRAL STATION</motion.h1>
                      <motion.p>
                        For fans of flavor, fun, and sports. Make central
                        station your home base for fantastic food and beverages,
                        because we're more than just a restaurant.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* end slider section */}
    </motion.div>
  );
};

export default Main;
