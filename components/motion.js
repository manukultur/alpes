import { motion, useViewportScroll } from "framer-motion";
const CircleIndicator = () => {
  const { scrollYProgress } = useViewportScroll();

  console.log(scrollYProgress);
  return (
    <div className="w-full h-56 bg-red-600">
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
    </div>
  );
};

export default CircleIndicator;
