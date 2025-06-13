import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">홈</Link></li>
        <li><Link to="/dev-test" className="hover:underline">개발자 테스트</Link></li>
        <li><Link to="/ai-search" className="hover:underline">AI 이미지 검색</Link></li>
      </ul>
    </nav>
  );
}
