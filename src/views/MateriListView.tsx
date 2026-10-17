import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Bookmark, 
  ChevronRight, 
  Sparkles,
  Command,
  Calculator,
  HelpCircle,
  AlertTriangle,
  Play
} from 'lucide-react';
import { allLessons, lessonsByCategory } from '../data/allLessons';
import { LessonCategory, Lesson } from '../types';

interface MateriListViewProps {
  initialCategory?: LessonCategory;
  onSelectLesson: (lessonId: string) => void;
  onOpenShortcuts: () => void;
  onOpenCalculator: () => void;
  onOpenSimulator: () => void;
  onOpenGlossary: () => void;
  onOpenTroubleshooting: () => void;
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  onToggleBookmark: (lessonId: string) => void;
}

export const MateriListView: React.FC<MateriListViewProps> = ({
  initialCategory = 'dasar',
  onSelectLesson,
  onOpenShortcuts,
  onOpenCalculator,
  onOpenSimulator,
  onOpenGlossary,
  onOpenTroubleshooting,
  completedLessonIds,
  bookmarkedLessonIds,
  onToggleBookmark
}) => {
  const [activeTab, setActiveTab] = useState<LessonCategory>(initialCategory);
  const [searchFilter, setSearchFilter] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'incomplete' | 'completed'>('all');

  const mainCategories: { id: LessonCategory; label: string; count: number }[] = [
    { id: 'dasar', label: 'Dasar', count: lessonsByCategory.dasar.length },
    { id: 'menengah', label: 'Menengah', count: lessonsByCategory.menengah.length },
    { id: 'mahir', label: 'Mahir', count: lessonsByCategory.mahir.length },
    { id: 'vba', label: 'Macro & VBA', count: lessonsByCategory.vba.length },
  ];

  const currentLessons: Lesson[] = lessonsByCategory[activeTab] || [];

  const filteredLessons = currentLessons.filter((lesson) => {
    const matchesSearch = 
      lesson.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      lesson.shortDesc.toLowerCase().includes(searchFilter.toLowerCase()) ||
      lesson.summary.toLowerCase().includes(searchFilter.toLowerCase());

    const isDone = completedLessonIds.includes(lesson.id);
    if (filterMode === 'incomplete' && isDone) return false;
    if (filterMode === 'completed' && !isDone) return false;

    return matchesSearch;
  });

  return (
    <div className="pb-28 pt-2">
      {/* 1. Header Navigation Tabs (Dasar, Menengah, Mahir, Macro VBA) */}
      <div className="px-4">
        <h1 className="text-lg font-extrabold text-slate-900 tracking-tight">
          Daftar Materi Belajar
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Pilih kurikulum pembelajaran bertahap dari nol
        </p>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-2xl mt-3 overflow-x-auto scrollbar-none">
          {mainCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSearchFilter('');
                }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[40px] flex items-center justify-center gap-1 ${
                  isActive
                    ? 'bg-white text-emerald-800 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-300/60 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Utilities Inside Materi Page */}
        <div className="mt-3.5 space-y-2">
          {/* Prominent Simulator & XLSX Download Banner */}
          <button
            onClick={onOpenSimulator}
            className="w-full py-2.5 px-3.5 rounded-2xl bg-linear-to-r from-emerald-800 to-teal-800 text-white flex items-center justify-between text-xs font-bold shadow-xs hover:shadow-md transition active:scale-[0.98] min-h-[44px]"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-white" />
              </div>
              <span>Simulator Rumus Interaktif & Unduh File .XLSX</span>
            </div>
            <ChevronRight className="w-4 h-4 text-emerald-300" />
          </button>

          <div className="grid grid-cols-4 gap-1.5 text-center">
            <button
              onClick={onOpenShortcuts}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-[11px] font-semibold flex flex-col items-center gap-1 transition min-h-[56px]"
            >
              <Command className="w-4 h-4 text-slate-800" />
              <span className="truncate w-full">Shortcut</span>
            </button>
            <button
              onClick={onOpenCalculator}
              className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-[11px] font-semibold flex flex-col items-center gap-1 transition min-h-[56px]"
            >
              <Calculator className="w-4 h-4 text-emerald-700" />
              <span className="truncate w-full">Rumus</span>
            </button>
            <button
              onClick={onOpenGlossary}
              className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 text-[11px] font-semibold flex flex-col items-center gap-1 transition min-h-[56px]"
            >
              <HelpCircle className="w-4 h-4 text-blue-700" />
              <span className="truncate w-full">Glosarium</span>
            </button>
            <button
              onClick={onOpenTroubleshooting}
              className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-[11px] font-semibold flex flex-col items-center gap-1 transition min-h-[56px]"
            >
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span className="truncate w-full">Error Fix</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Filter & Search Controls */}
      <div className="px-4 mt-4 space-y-2">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder={`Cari di kategori ${mainCategories.find(c => c.id === activeTab)?.label}...`}
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
          />
        </div>

        {/* Filter Chip buttons */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
          <span className="text-[11px] mr-1">Status:</span>
          <button
            onClick={() => setFilterMode('all')}
            className={`px-2.5 py-1 rounded-lg font-medium text-[11px] transition ${
              filterMode === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua ({currentLessons.length})
          </button>
          <button
            onClick={() => setFilterMode('incomplete')}
            className={`px-2.5 py-1 rounded-lg font-medium text-[11px] transition ${
              filterMode === 'incomplete'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Belum Selesai
          </button>
          <button
            onClick={() => setFilterMode('completed')}
            className={`px-2.5 py-1 rounded-lg font-medium text-[11px] transition ${
              filterMode === 'completed'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Selesai
          </button>
        </div>
      </div>

      {/* 3. Lesson Cards List */}
      <div className="px-4 mt-4 space-y-2.5">
        {filteredLessons.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200/80">
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Tidak ada materi yang sesuai dengan pencarian atau filter Anda.
            </p>
            <button
              onClick={() => {
                setSearchFilter('');
                setFilterMode('all');
              }}
              className="mt-3 text-xs font-bold text-emerald-700 hover:underline"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          filteredLessons.map((lesson) => {
            const isDone = completedLessonIds.includes(lesson.id);
            const isBookmarked = bookmarkedLessonIds.includes(lesson.id);

            return (
              <div
                key={lesson.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 shadow-sm transition group flex items-start justify-between gap-3"
              >
                {/* Main Clickable Area */}
                <button
                  onClick={() => onSelectLesson(lesson.id)}
                  className="flex items-start gap-3 flex-1 text-left min-w-0 min-h-[44px]"
                >
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                      isDone
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-5 h-5 text-emerald-700" /> : lesson.number}
                  </span>

                  <div className="min-w-0 pr-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h2 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 leading-snug">
                        {lesson.title}
                      </h2>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {lesson.shortDesc}
                    </p>

                    <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400">
                      <span>{lesson.readTime}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-medium">Tersedia Video</span>
                      {lesson.versionRequirement && (
                        <>
                          <span>·</span>
                          <span className="text-amber-700 font-medium">{lesson.versionRequirement}</span>
                        </>
                      )}
                    </div>
                  </div>
                </button>

                {/* Bookmark Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(lesson.id);
                  }}
                  aria-label={isBookmarked ? 'Hapus bookmark' : 'Simpan ke favorit'}
                  className="p-2 text-slate-400 hover:text-emerald-700 active:scale-90 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      isBookmarked
                        ? 'text-emerald-600 fill-emerald-600'
                        : 'text-slate-300 hover:text-slate-600'
                    }`}
                  />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
