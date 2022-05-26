import { motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Canvas(props) {
  return (
    <svg height="200" width="250" className="figure-container">
      {/* <!-- Bottom Rod --> */}
      <motion.line
        x1="0"
        y1="150"
        x2="50"
        y2="150"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />

      {/* <!-- Vertical Rod --> */}
      <motion.line
        x1="25"
        y1="150"
        x2="25"
        y2="5"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />

      {/* <!-- Top Rod --> */}
      <motion.line
        x1="25"
        y1="5"
        x2="75"
        y2="5"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        x1="75"
        y1="5"
        x2="75"
        y2="15"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />

      {/* <!-- Head --> */}
      {props.livesLeft < 6 && (
        <motion.circle
          cx="75"
          cy="25"
          r="10"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {/* <!-- Body --> */}
      {props.livesLeft < 5 && (
        <motion.line
          x1="75"
          y1="35"
          x2="75"
          y2="90"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {/* <!-- Arms --> */}
      {props.livesLeft < 4 && (
        <motion.line
          x1="75"
          y1="50"
          x2="55"
          y2="80"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {props.livesLeft < 3 && (
        <motion.line
          x1="75"
          y1="50"
          x2="95"
          y2="80"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {/* <!-- Legs --> */}
      {props.livesLeft < 2 && (
        <motion.line
          x1="75"
          y1="90"
          x2="55"
          y2="125"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {props.livesLeft < 1 && (
        <motion.line
          x1="75"
          y1="90"
          x2="95"
          y2="125"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
    </svg>
  );
}

export default Canvas;
