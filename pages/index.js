import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
           whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.2],
            transition: {
              duration: .3
            }
          }}>
        <div className="text-center m-16">Marr jaa<br/> Abhi mann nahi</div>
        </motion.div>
    );
}

