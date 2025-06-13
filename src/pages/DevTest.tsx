import { Routes, Route } from 'react-router-dom';
import StartPage from '../components/devtest/StartPage';
import QuestionPage from '../components/devtest/QuestionPage';
import ResultPage from '../components/devtest/ResultPage';

export default function DevTest() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="question" element={<QuestionPage />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}
