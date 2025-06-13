import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-8">개발자 유형 테스트</h1>
      <Link to="/dev-test/question" className="btn btn-primary">
        시작하기
      </Link>
    </div>
  );
}

export default StartPage;
