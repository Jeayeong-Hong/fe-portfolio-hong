import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          프론트엔드 개발자{" "}<br />
        </motion.h1>
        <motion.h1>
          <span className="text-blue-500">홍재영</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <br />
          저의 포트폴리오를 방문해주셔서 감사합니다.{" "}
        </motion.p>
      </div>
    </section>
  );
}
