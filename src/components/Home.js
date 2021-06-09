import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
// import Loader from "./loader";
import Pizza from "../pizza";

const buttonVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: .3
    }
  }
}

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      // delay: 1.5,
      // duration: 1.5
      duration: 0.5
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: 'easeInOut' }
  }
};

// const pizzaExitVariant = {
//   initial: {
//     opacity: 0
//   },
//   exit: {
//     opacity: 1,
//     scale: 2
//   }
// }

const Home = () => {
  return (
      <motion.div className="home container"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
      >
        <h2>
          {/*<Pizza pizzaExitVariant={pizzaExitVariant}/>*/}
          Welcome to Pizza Hub
        </h2>
        <Link to="/base">
          <motion.button
              variants={buttonVariants}
              whileHover="whileHover"
          >
            Create Your Pizza
          </motion.button>
        </Link>
      </motion.div>
  )
}

export default Home;