import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click me!
      </motion.button>
    </div>
  );
};

export default MyComponent;