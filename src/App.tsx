/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, NavTab } from './components/BottomNav';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { CoffeeModal } from './components/CoffeeModal';
import { Toast } from './components/Toast';
import { HomeView } from './views/HomeView';
import { MateriListView } from './views/MateriListView';
import { LessonDetailView } from './views/LessonDetailView';
import { ShortcutsView } from './views/ShortcutsView';
import { FormulaCalculatorView } from './views/FormulaCalculatorView';
import { QuizView } from './views/QuizView';
import { FavoritesView } from './views/FavoritesView';
import { GlossaryView } from './views/GlossaryView';
import { TroubleshootingView } from './views/TroubleshootingView';
import { SimulatorView } from './views/SimulatorView';
import { useStorage } from './hooks/useStorage';
import { getLessonById } from './data/allLessons';
import { LessonCategory } from './types';

export default function App() {
  const {
    completedLessons,
    bookmarkedLessons,
    quizHistory,
    lastReadLessonId,
    recentLessonIds,
    toggleComplete,
    toggleBookmark,
    markLessonAsRead,
    recordQuiz,
    isCompleted,
    isBookmarked
  } = useStorage();

  const [activeTab, setActiveTab] = useState<NavTab>('beranda');
  const [activeSubView, setActiveSubView] = useState<
    'shortcuts' | 'calculator' | 'glossary' | 'troubleshooting' | 'lessonDetail' | 'simulator' | null
  >(null);

  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [materiCategory, setMateriCategory] = useState<LessonCategory>('dasar');
  const [isCoffeeOpen, setIsCoffeeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleSelectCategoryFromHome = (category: LessonCategory) => {
    setMateriCategory(category);
    setActiveSubView(null);
    setActiveTab('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    markLessonAsRead(lessonId);
    setActiveSubView('lessonDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setActiveSubView(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    setActiveSubView(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLesson = selectedLessonId ? getLessonById(selectedLessonId) : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Header */}
      <Header
        onOpenCoffee={() => setIsCoffeeOpen(true)}
        onNavigateHome={() => handleSelectTab('beranda')}
      />

      {/* PWA Install Banner for Android / iOS */}
      <div className="max-w-xl mx-auto w-full">
        <PWAInstallBanner />
      </div>

      {/* Main View Router */}
      <main className="flex-1 max-w-xl mx-auto w-full">
        {activeSubView === 'lessonDetail' && currentLesson ? (
          <LessonDetailView
            lesson={currentLesson}
            onBack={handleBackToMain}
            isCompleted={isCompleted(currentLesson.id)}
            isBookmarked={isBookmarked(currentLesson.id)}
            onToggleComplete={toggleComplete}
            onToggleBookmark={toggleBookmark}
            onSelectLesson={handleSelectLesson}
            onOpenSimulator={() => setActiveSubView('simulator')}
            onShowToast={showToast}
          />
        ) : activeSubView === 'simulator' ? (
          <SimulatorView
            onBack={handleBackToMain}
            onShowToast={showToast}
          />
        ) : activeSubView === 'shortcuts' ? (
          <ShortcutsView
            onBack={handleBackToMain}
            onShowToast={showToast}
          />
        ) : activeSubView === 'calculator' ? (
          <FormulaCalculatorView
            onBack={handleBackToMain}
            onShowToast={showToast}
          />
        ) : activeSubView === 'glossary' ? (
          <GlossaryView
            onBack={handleBackToMain}
          />
        ) : activeSubView === 'troubleshooting' ? (
          <TroubleshootingView
            onBack={handleBackToMain}
          />
        ) : activeTab === 'beranda' ? (
          <HomeView
            onSelectCategory={handleSelectCategoryFromHome}
            onSelectLesson={handleSelectLesson}
            onOpenShortcuts={() => setActiveSubView('shortcuts')}
            onOpenCalculator={() => setActiveSubView('calculator')}
            onOpenSimulator={() => setActiveSubView('simulator')}
            onOpenGlossary={() => setActiveSubView('glossary')}
            onOpenTroubleshooting={() => setActiveSubView('troubleshooting')}
            onOpenCoffee={() => setIsCoffeeOpen(true)}
            completedLessonIds={completedLessons}
            lastReadLessonId={lastReadLessonId}
            recentLessonIds={recentLessonIds}
          />
        ) : activeTab === 'materi' ? (
          <MateriListView
            initialCategory={materiCategory}
            onSelectLesson={handleSelectLesson}
            onOpenShortcuts={() => setActiveSubView('shortcuts')}
            onOpenCalculator={() => setActiveSubView('calculator')}
            onOpenSimulator={() => setActiveSubView('simulator')}
            onOpenGlossary={() => setActiveSubView('glossary')}
            onOpenTroubleshooting={() => setActiveSubView('troubleshooting')}
            completedLessonIds={completedLessons}
            bookmarkedLessonIds={bookmarkedLessons}
            onToggleBookmark={toggleBookmark}
          />
        ) : activeTab === 'latihan' ? (
          <QuizView
            quizHistory={quizHistory}
            onRecordQuiz={recordQuiz}
            onShowToast={showToast}
          />
        ) : activeTab === 'favorit' ? (
          <FavoritesView
            bookmarkedLessonIds={bookmarkedLessons}
            completedLessonIds={completedLessons}
            onSelectLesson={handleSelectLesson}
            onToggleBookmark={toggleBookmark}
            onNavigateMateri={() => handleSelectTab('materi')}
            onShowToast={showToast}
          />
        ) : null}
      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        favoriteCount={bookmarkedLessons.length}
      />

      {/* Bagi Kopi GoPay Modal */}
      <CoffeeModal
        isOpen={isCoffeeOpen}
        onClose={() => setIsCoffeeOpen(false)}
        onShowToast={showToast}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
