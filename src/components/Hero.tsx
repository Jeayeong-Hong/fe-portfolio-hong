import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          프론트엔드 개발자
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            홍재영
          </span>
        </motion.h1>
        //
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          저의 포트폴리오에 방문해주셔서 진심으로 감사드립니다.
        </motion.p>
      </div>
    </section>
  );
}
