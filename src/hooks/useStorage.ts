import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEYS = {
  COMPLETED: 'tutor_excel_completed_lessons',
  BOOKMARKED: 'tutor_excel_bookmarked_lessons',
  QUIZ_HISTORY: 'tutor_excel_quiz_history',
  LAST_READ: 'tutor_excel_last_read_lesson',
  RECENT_LIST: 'tutor_excel_recent_list'
};

export interface QuizRecord {
  id: string;
  category: string;
  categoryLabel: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

export function useStorage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizHistory, setQuizHistory] = useState<QuizRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lastReadLessonId, setLastReadLessonId] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.LAST_READ) || null;
    } catch {
      return null;
    }
  });

  const [recentLessonIds, setRecentLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECENT_LIST);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completedLessons));
    } catch (e) {
      console.warn('Failed to save completed lessons', e);
    }
  }, [completedLessons]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKED, JSON.stringify(bookmarkedLessons));
    } catch (e) {
      console.warn('Failed to save bookmarks', e);
    }
  }, [bookmarkedLessons]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(quizHistory));
    } catch (e) {
      console.warn('Failed to save quiz history', e);
    }
  }, [quizHistory]);

  const toggleComplete = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  }, []);

  const toggleBookmark = useCallback((lessonId: string) => {
    setBookmarkedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  }, []);

  const markLessonAsRead = useCallback((lessonId: string) => {
    setLastReadLessonId(lessonId);
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_READ, lessonId);
    } catch {}

    setRecentLessonIds(prev => {
      const filtered = prev.filter(id => id !== lessonId);
      const updated = [lessonId, ...filtered].slice(0, 10);
      try {
        localStorage.setItem(STORAGE_KEYS.RECENT_LIST, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const recordQuiz = useCallback((category: string, categoryLabel: string, score: number, total: number) => {
    const record: QuizRecord = {
      id: Date.now().toString(),
      category,
      categoryLabel,
      score,
      total,
      percentage: Math.round((score / total) * 100),
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setQuizHistory(prev => [record, ...prev].slice(0, 30));
  }, []);

  const isCompleted = useCallback((lessonId: string) => completedLessons.includes(lessonId), [completedLessons]);
  const isBookmarked = useCallback((lessonId: string) => bookmarkedLessons.includes(lessonId), [bookmarkedLessons]);

  const resetProgress = useCallback(() => {
    setCompletedLessons([]);
    setBookmarkedLessons([]);
    setQuizHistory([]);
    setLastReadLessonId(null);
    setRecentLessonIds([]);
    try {
      localStorage.removeItem(STORAGE_KEYS.COMPLETED);
      localStorage.removeItem(STORAGE_KEYS.BOOKMARKED);
      localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
      localStorage.removeItem(STORAGE_KEYS.LAST_READ);
      localStorage.removeItem(STORAGE_KEYS.RECENT_LIST);
    } catch {}
  }, []);

  return {
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
    isBookmarked,
    resetProgress
  };
}
