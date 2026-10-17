import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ChevronRight, History, Sparkles, BookOpen } from 'lucide-react';
import { quizzesData, getQuizzesByCategory } from '../data/quizzesData';
import { QuizQuestion } from '../types';
import { QuizRecord } from '../hooks/useStorage';

interface QuizViewProps {
  quizHistory: QuizRecord[];
  onRecordQuiz: (category: string, categoryLabel: string, score: number, total: number) => void;
  onShowToast: (msg: string) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ quizHistory, onRecordQuiz, onShowToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<'dasar' | 'menengah' | 'mahir' | 'shortcut' | 'vba'>('dasar');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const categories = [
    { id: 'dasar' as const, label: 'Dasar' },
    { id: 'menengah' as const, label: 'Menengah' },
    { id: 'mahir' as const, label: 'Mahir' },
    { id: 'shortcut' as const, label: 'Shortcut' },
    { id: 'vba' as const, label: 'Macro VBA' },
  ];

  const currentQuestions: QuizQuestion[] = getQuizzesByCategory(selectedCategory);
  const currentQ: QuizQuestion | undefined = currentQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const newAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newAnswers);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);

    if (currentIndex + 1 < currentQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Completed quiz! Calculate score
      let score = 0;
      currentQuestions.forEach((q, i) => {
        if (newAnswers[i] === q.correctIndex) {
          score += 1;
        }
      });
      setIsQuizCompleted(true);
      onRecordQuiz(selectedCategory, currentQ.categoryLabel, score, currentQuestions.length);
      onShowToast(`Latihan selesai! Nilai Anda: ${score}/${currentQuestions.length}`);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsQuizCompleted(false);
  };

  const handleSwitchCategory = (cat: 'dasar' | 'menengah' | 'mahir' | 'shortcut' | 'vba') => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsQuizCompleted(false);
  };

  // Final Score Calculation
  let finalScore = 0;
  if (isQuizCompleted) {
    currentQuestions.forEach((q, i) => {
      if (userAnswers[i] === q.correctIndex) {
        finalScore += 1;
      }
    });
  }
  const scorePercentage = Math.round((finalScore / currentQuestions.length) * 100);

  return (
    <div className="pb-28 pt-2">
      {/* 1. Header with History Switcher */}
      <div className="px-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            Latihan & Kuis Excel
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">Uji pemahaman dengan 50 soal interaktif</p>
        </div>

        <button
          onClick={() => setShowHistory(!showHistory)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition min-h-[44px] ${
            showHistory ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Riwayat Nilai</span>
        </button>
      </div>

      {/* 2. Riwayat Nilai Modal / Section */}
      {showHistory ? (
        <div className="px-4 mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Riwayat Hasil Latihan</h2>
            <button
              onClick={() => setShowHistory(false)}
              className="text-xs text-emerald-700 font-bold hover:underline"
            >
              Kembali ke Kuis
            </button>
          </div>

          {quizHistory.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
              <p className="text-xs text-slate-500">Belum ada riwayat pengerjaan latihan.</p>
              <p className="text-[11px] text-slate-400 mt-1">Selesaikan kuis pertama Anda untuk mencatat skor!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {quizHistory.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between shadow-xs"
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {item.categoryLabel}
                    </span>
                    <p className="text-xs text-slate-400 mt-1 font-mono">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-base font-extrabold ${item.percentage >= 70 ? 'text-emerald-700' : 'text-amber-600'}`}>
                      {item.score} / {item.total}
                    </span>
                    <span className="text-xs text-slate-500 block font-bold">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* 3. Category Selector Tabs */}
          <div className="px-4 mt-3">
            <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-2xl overflow-x-auto scrollbar-none">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSwitchCategory(c.id)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition whitespace-nowrap min-h-[40px] ${
                    selectedCategory === c.id
                      ? 'bg-white text-emerald-800 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c.label} (10)
                </button>
              ))}
            </div>
          </div>

          {/* 4. Active Question Card or Completed Score Screen */}
          <div className="px-4 mt-4">
            {isQuizCompleted ? (
              /* Quiz Finished Summary */
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                  <Award className="w-9 h-9" />
                </div>

                <div>
                  <h2 className="text-lg font-extrabold text-slate-900">
                    Latihan {currentQ.categoryLabel} Selesai!
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Berikut adalah hasil evaluasi latihan Anda:
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-around">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Benar</span>
                    <span className="text-xl font-extrabold text-emerald-700">{finalScore}</span>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Salah</span>
                    <span className="text-xl font-extrabold text-rose-600">
                      {currentQuestions.length - finalScore}
                    </span>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Nilai Akhir</span>
                    <span className="text-xl font-extrabold text-slate-900">{scorePercentage}%</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 px-2 leading-relaxed">
                  {scorePercentage >= 80
                    ? '🎉 Luar biasa! Pemahaman Anda pada materi ini sudah sangat solid.'
                    : scorePercentage >= 60
                    ? '👍 Bagus! Anda sudah memahami sebagian besar materi, tingkatkan lagi latihannya.'
                    : '💪 Tetap semangat! Silakan ulangi materi pelajaran dan coba latihan sekali lagi.'}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="flex-1 py-3 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Ulangi Latihan</span>
                  </button>
                  <button
                    onClick={() => {
                      const nextCat = 
                        selectedCategory === 'dasar' ? 'menengah' :
                        selectedCategory === 'menengah' ? 'mahir' :
                        selectedCategory === 'mahir' ? 'shortcut' : 'dasar';
                      handleSwitchCategory(nextCat);
                    }}
                    className="flex-1 py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs min-h-[44px]"
                  >
                    Tingkat Selanjutnya
                  </button>
                </div>
              </div>
            ) : currentQ ? (
              /* Question in Progress */
              <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-emerald-800">
                    Soal {currentIndex + 1} dari {currentQuestions.length}
                  </span>
                  <span className="text-[11px] font-mono">
                    {Math.round(((currentIndex + 1) / currentQuestions.length) * 100)}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
                  />
                </div>

                {/* Question Text */}
                <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h2>

                {/* Options */}
                <div className="space-y-2 pt-1">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = currentQ.correctIndex === idx;

                    let btnStyle = 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50';
                    if (isSelected && !isAnswerSubmitted) {
                      btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30';
                    } else if (isAnswerSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'border-emerald-500 bg-emerald-100/80 text-emerald-950 font-semibold';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'border-rose-300 bg-rose-50 text-rose-950 font-medium';
                      } else {
                        btnStyle = 'border-slate-100 bg-slate-50/50 text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition flex items-center justify-between gap-3 min-h-[48px] ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-snug">{option}</span>
                        </div>

                        {isAnswerSubmitted && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback & Explanation Box */}
                {isAnswerSubmitted && (
                  <div className={`p-4 rounded-2xl text-xs space-y-1.5 animate-fade-in ${
                    selectedOption === currentQ.correctIndex 
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                      : 'bg-rose-50 border border-rose-200 text-rose-950'
                  }`}>
                    <p className="font-bold flex items-center gap-1.5 text-xs">
                      {selectedOption === currentQ.correctIndex ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Jawaban Anda Benar!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600" />
                          <span>Jawaban Belum Tepat</span>
                        </>
                      )}
                    </p>
                    <p className="leading-relaxed text-slate-700 text-[11px] pt-1 border-t border-slate-200/60">
                      <strong>Pembahasan:</strong> {currentQ.explanation}
                    </p>
                  </div>
                )}

                {/* Bottom Trigger Action */}
                <div className="pt-2">
                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleCheckAnswer}
                      disabled={selectedOption === null}
                      className={`w-full py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm transition min-h-[48px] ${
                        selectedOption !== null
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Periksa Jawaban
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md min-h-[48px]"
                    >
                      <span>
                        {currentIndex + 1 < currentQuestions.length ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}
                      </span>
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};
