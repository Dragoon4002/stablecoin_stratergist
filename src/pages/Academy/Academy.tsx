import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Academy.css';

interface Module {
  id: number;
  title: string;
  description: string;
}

interface Quiz {
  id: number;
  moduleId: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const fetchModules = async (): Promise<Module[]> => {
    const response = await fetch('https://api.yourservice.com/modules');
    if (!response.ok) {
      throw new Error('Failed to fetch modules');
    }
    return await response.json();
  };
  
  const fetchQuizzes = async (): Promise<Quiz[]> => {
    const response = await fetch('https://api.yourservice.com/quizzes');
    if (!response.ok) {
      throw new Error('Failed to fetch quizzes');
    }
    return await response.json();
  };

const Academy: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchModules(), fetchQuizzes()])
      .then(([modulesData, quizzesData]) => {
        setModules(modulesData);
        setQuizzes(quizzesData);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const [selectedAnswers, setSelectedAnswers] = useState<{ [quizId: number]: string }>({});

  const handleAnswerSelect = (quizId: number, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [quizId]: answer }));
  };

  const handleSubmitQuiz = (quizId: number) => {
    const selectedAnswer = selectedAnswers[quizId];
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz && selectedAnswer === quiz.correctAnswer) {
      alert('Correct!');
    } else {
      alert('Incorrect, try again.');
    }
  };

  return (
    <div className="academy">
      <Header />
      <section className="academy-content">
        <h2>Stablecoin Academy</h2>
        <p>Learn everything you need to know about stablecoins.</p>

        {loading && <p>Loading content...</p>}
        {error && <p>Error loading content: {error}</p>}

        <div className="modules-section">
          <h3>Educational Modules</h3>
          <ul className="modules-list">
            {modules.map(module => (
              <li key={module.id} className="module-item">
                <h4>{module.title}</h4>
                <p>{module.description}</p>
                {/* Link to a detailed view */}
              </li>
            ))}
          </ul>
        </div>

        <div className="quizzes-section">
          <h3>Interactive Quizzes</h3>
          <ul className="quizzes-list">
            {quizzes.map(quiz => (
              <li key={quiz.id} className="quiz-item">
                <h4>{quiz.question}</h4>
                <ul>
                  {quiz.options.map((option, index) => (
                    <li key={index} onClick={() => handleAnswerSelect(quiz.id, option)}>
                      {option}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleSubmitQuiz(quiz.id)}>Submit</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Academy;
