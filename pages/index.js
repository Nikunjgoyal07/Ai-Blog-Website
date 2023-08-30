import { motion } from 'framer-motion';
import Head from 'next/head';
export default function Home() {
    return (
<>
        <Head>
          <title>Technitós</title>
        <meta description="A guide into AI"/>
        </Head>
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
        
        </>
    );
}

