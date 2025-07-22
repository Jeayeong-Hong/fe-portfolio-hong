import { personalInfo } from "../data/personalInfo";
import { motion } from "framer-motion";
import { Mail, Calendar, User, BookText, Github } from "lucide-react";

const iconMap = {
  이름: <User className="w-5 h-5 text-gray-600" />,
  생년월일: <Calendar className="w-5 h-5 text-gray-600" />,
  이메일: <Mail className="w-5 h-5 text-gray-600" />,
  학력: <BookText className="w-5 h-5 text-gray-600" />,
  GitHub: <Github className="w-5 h-5 text-gray-600" />,
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">

        {/* 제목 */}
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          💬 자기소개
        </motion.h2>
        <br />
        {/* 소개 문단 */}
        <motion.p
          className="mt-6 mb-12 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          사용자에게 즐거움과 편안함을 주는 경험을 중요하게 생각하며,
          피드백을 겸허히 수용하고 꾸준히 성장하는 신입 프론트엔드 개발자입니다.
        </motion.p>

        {/* 개인 정보 리스트 */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {personalInfo.map((item, index) => (
            <div className="flex items-start gap-3" key={index}>
              {iconMap[item.label] || <span className="w-5" />}
              <p>
                <span className="font-semibold">{item.label}:</span>{" "}
                {item.isLink ? (
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 기술 스택 아이콘 or 텍스트 */}
        <motion.div
          className="flex justify-center gap-6 mt-10 text-blue-600 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Vite</span>
        </motion.div>
      </div>
    </section>
  );
}
