import React from 'react';
import { motion } from "framer-motion"
import Chef from "../Chef"
import Pizza from "../pizza";

const svgVariants = {
  initial: { rotate: -180 },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    },
  },
}


const Header = () => {
  return (
      <header>
        <div className="logo">
          <Chef variants={svgVariants}
                initial="initial"
                animate="animate"
          />
        </div>
        <motion.div className="title"
                    initial={{ y: "-250px" }}
                    animate={{ y: "-10px" }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <h1>Pizza Hub</h1>
        </motion.div>
      </header>
  )
}

export default Header;