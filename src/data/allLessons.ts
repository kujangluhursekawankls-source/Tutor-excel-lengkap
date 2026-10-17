import { Lesson, LessonCategory } from '../types';
import { lessonsDasar } from './lessonsDasar';
import { lessonsMenengah } from './lessonsMenengah';
import { lessonsMahir } from './lessonsMahir';
import { lessonsVba } from './lessonsVba';

export const allLessons: Lesson[] = [
  ...lessonsDasar,
  ...lessonsMenengah,
  ...lessonsMahir,
  ...lessonsVba,
];

export const lessonsByCategory: Record<LessonCategory, Lesson[]> = {
  dasar: lessonsDasar,
  menengah: lessonsMenengah,
  mahir: lessonsMahir,
  vba: lessonsVba,
  shortcut: [], // Shortcuts has its own dedicated dataset
};

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find(l => l.id === id);
}

export function getCategoryLabel(category: LessonCategory): string {
  switch (category) {
    case 'dasar':
      return 'Excel Dasar';
    case 'menengah':
      return 'Excel Menengah';
    case 'mahir':
      return 'Excel Mahir';
    case 'vba':
      return 'Macro & VBA';
    case 'shortcut':
      return 'Shortcut Excel';
    default:
      return 'Materi';
  }
}
