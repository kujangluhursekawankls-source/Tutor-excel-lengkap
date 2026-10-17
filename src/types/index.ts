export type LessonCategory = 'dasar' | 'menengah' | 'mahir' | 'vba' | 'shortcut';

export interface Lesson {
  id: string;
  category: LessonCategory;
  number: number;
  title: string;
  shortDesc: string;
  difficulty: 'Dasar' | 'Menengah' | 'Mahir';
  readTime: string;
  versionRequirement?: string;
  summary: string;
  explanation: string[];
  syntax?: string;
  syntaxSemicolon?: string;
  argumentsDesc?: { name: string; meaning: string }[];
  sampleData?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
  appliedFormula?: string;
  expectedResult?: string;
  keySteps: string[];
  importantTips: string[];
  commonMistakes: { mistake: string; solution: string }[];
  practiceTask: string;
  youtubeUrl: string;
  youtubeTitle: string;
  youtubeChannel?: string;
  relatedLessonIds?: string[];
}

export type ShortcutCategory = 'dasar' | 'edit' | 'navigasi' | 'format' | 'rumus' | 'pivottable' | 'vba' | 'audit';

export interface ShortcutItem {
  id: string;
  category: ShortcutCategory;
  keys: string;
  macKeys?: string;
  action: string;
  description: string;
  requiresPhysicalKeyboard?: boolean;
  isPopularForJobTest?: boolean;
}

export interface FormulaItem {
  id: string;
  name: string;
  category: 'Statistik' | 'Pencarian' | 'Logika' | 'Teks' | 'Tanggal & Waktu' | 'Matematika' | 'Keuangan';
  userNeedExamples: string[];
  syntaxComma: string;
  syntaxSemicolon: string;
  description: string;
  arguments: { name: string; desc: string; isOptional?: boolean }[];
  sampleTable?: {
    headers: string[];
    rows: (string | number)[][];
  };
  sampleFormula: string;
  sampleResult: string;
  explanation: string;
  compatibility?: string;
}

export interface QuizQuestion {
  id: string;
  category: 'dasar' | 'menengah' | 'mahir' | 'shortcut' | 'vba';
  categoryLabel: string;
  question: string;
  codeOrTable?: {
    headers?: string[];
    rows?: (string | number)[][];
    code?: string;
  };
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  example: string;
}

export interface TroubleshootingGuide {
  error: string;
  title: string;
  cause: string;
  solutionSteps: string[];
  example: string;
}
