import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100">
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        안녕하세요, 프론트엔드 개발자 <span className="text-blue-500">홍재영</span>입니다.
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        사용자에게 즐거움을 주는 UI를 만드는 데 관심이 많습니다.  
        TypeScript, React, Tailwind 등을 사용한 프로젝트를 소개합니다.
      </motion.p>
    </section>
  );
}
