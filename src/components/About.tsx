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
        <motion.h2
          className="text-3xl font-bold mb-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          저는 이런 사람입니다
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          {personalInfo.map((item, index) => (
            <div className="flex items-start gap-3" key={index}>
              {iconMap[item.label] || <span className="w-5" />} {/* fallback */}
              <p>
                <span className="font-semibold">{item.label}:</span>{" "}
                {item.isLink ? (
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:underline transition-colors duration-200"
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

        <motion.div
          className="flex justify-center gap-6 mt-9 text-blue-600 font-semibold"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
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
