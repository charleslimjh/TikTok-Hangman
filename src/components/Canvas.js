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
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <motion.line
        x1="60"
        y1="20"
        x2="140"
        y2="20"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        x1="140"
        y1="20"
        x2="140"
        y2="50"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        x1="60"
        y1="20"
        x2="60"
        y2="230"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        x1="20"
        y1="230"
        x2="100"
        y2="230"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />

      {/* <!-- Head --> */}
      {props.livesLeft < 6 && (
        <motion.circle
          cx="140"
          cy="70"
          r="20"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {/* <!-- Body --> */}
      {props.livesLeft < 5 && (
        <motion.line
          x1="140"
          y1="90"
          x2="140"
          y2="150"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {/* <!-- Arms --> */}
      {props.livesLeft < 4 && (
        <motion.line
          x1="140"
          y1="120"
          x2="120"
          y2="100"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {props.livesLeft < 3 && (
        <motion.line
          x1="140"
          y1="120"
          x2="160"
          y2="100"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {/* <!-- Legs --> */}
      {props.livesLeft < 2 && (
        <motion.line
          x1="140"
          y1="150"
          x2="120"
          y2="180"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
      {props.livesLeft < 1 && (
        <motion.line
          x1="140"
          y1="150"
          x2="160"
          y2="180"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      )}
    </svg>
  );
}

export default Canvas;
