import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-blue-600">홍재영</span>
        <ul className="flex space-x-6 text-gray-700 font-normal">
          <li><a href="#hero" className="hover:text-blue-500">홈</a></li>
          <li><a href="#about" className="hover:text-blue-500">소개</a></li>
          <li><a href="#projects" className="hover:text-blue-500">프로젝트</a></li>
        </ul>
      </div>
    </nav>
  );
}
