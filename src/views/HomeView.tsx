import React, { useState } from 'react';
import { 
  Play, 
  Search, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  Coffee, 
  Calculator, 
  HelpCircle, 
  AlertTriangle,
  BookMarked,
  ArrowRight,
  FileSpreadsheet
} from 'lucide-react';
import { allLessons, getLessonById } from '../data/allLessons';
import { shortcutsData } from '../data/shortcutsData';
import { LessonCategory, Lesson } from '../types';

interface HomeViewProps {
  onSelectCategory: (cat: LessonCategory) => void;
  onSelectLesson: (lessonId: string) => void;
  onOpenShortcuts: () => void;
  onOpenCalculator: () => void;
  onOpenSimulator: () => void;
  onOpenGlossary: () => void;
  onOpenTroubleshooting: () => void;
  onOpenCoffee: () => void;
  completedLessonIds: string[];
  lastReadLessonId: string | null;
  recentLessonIds: string[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectCategory,
  onSelectLesson,
  onOpenShortcuts,
  onOpenCalculator,
  onOpenSimulator,
  onOpenGlossary,
  onOpenTroubleshooting,
  onOpenCoffee,
  completedLessonIds,
  lastReadLessonId,
  recentLessonIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const totalLessons = allLessons.length;
  const completedCount = completedLessonIds.length;
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);

  // Resume lesson candidate
  const lastLesson = lastReadLessonId ? getLessonById(lastReadLessonId) : null;
  const resumeLesson: Lesson = lastLesson || allLessons[0];

  // Filtered search results
  const searchResults = searchQuery.trim()
    ? allLessons.filter(l => 
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.summary.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Popular lessons (e.g. VLOOKUP, XLOOKUP, PivotTable, Saldo Kas, Dasar Rumus)
  const popularLessonIds = ['d-14', 'm-03', 'm-07', 'm-08', 'm-21', 'a-05'];
  const popularLessons = popularLessonIds.map(id => getLessonById(id)).filter(Boolean) as Lesson[];

  return (
    <div className="pb-24 pt-2">
      {/* 1. Hero Card with Genuine Visual Asset */}
      <div className="px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-emerald-950/20 text-white">
          <img
            src="/src/assets/images/hero_excel_dashboard_1792210494637.jpg"
            alt="Microsoft Excel Spreadsheet Dashboard"
            referrerPolicy="no-referrer"
            className="w-full h-48 sm:h-56 object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-emerald-950/50 p-5 flex flex-col justify-end">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Panduan Lengkap Tanpa Biaya</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight text-balance">
              Selamat Datang di Tutor Excel Pro
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2 max-w-lg">
              Belajar Excel dari nol sampai mahir, kapan saja dan di mana saja.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Fast Search Bar */}
      <div className="px-4 mt-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari materi, rumus (VLOOKUP, SUMIFS...), atau topik..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1 py-0.5"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Live Search Quick Results */}
        {searchResults.length > 0 && (
          <div className="mt-2 bg-white rounded-2xl p-2 border border-slate-200 shadow-lg space-y-1 animate-fade-in z-20 relative">
            <p className="text-[11px] font-semibold text-slate-400 px-3 py-1">Hasil Pencarian Cepat:</p>
            {searchResults.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition"
              >
                <div className="min-w-0 pr-2">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                    {lesson.number}. {lesson.title}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">{lesson.shortDesc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Progress Belajar Pengguna */}
      <div className="px-4 mt-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-bold text-slate-900">Progres Belajar Anda</span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {completedCount} dari {totalLessons} materi diselesaikan
              </p>
            </div>
            <span className="text-sm font-extrabold text-emerald-700 tabular-nums">
              {completionPercentage}%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(completionPercentage, 2)}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4. Tombol "Lanjutkan Belajar" */}
      <div className="px-4 mt-3">
        <button
          onClick={() => onSelectLesson(resumeLesson.id)}
          className="w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 text-white shadow-md shadow-emerald-800/15 flex items-center justify-between group hover:opacity-95 transition min-h-[48px]"
        >
          <div className="flex items-center gap-3 min-w-0 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-emerald-200 font-semibold tracking-wider uppercase">Lanjutkan Belajar</span>
              <h2 className="text-xs sm:text-sm font-bold truncate text-white">
                {resumeLesson.number}. {resumeLesson.title}
              </h2>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform shrink-0" />
        </button>
      </div>

      {/* 5. Kartu Kategori Utama */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-slate-900">Kategori Materi</h2>
          <span className="text-[11px] text-slate-500">Pilih tingkat keahlian</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Dasar */}
          <button
            onClick={() => onSelectCategory('dasar')}
            className="flex flex-col text-left rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition active:scale-[0.98] group"
          >
            <div className="h-24 w-full relative overflow-hidden bg-slate-100">
              <img
                src="/src/assets/images/excel_dasar_banner_1792210496047.jpg"
                alt="Excel Dasar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-800/80 backdrop-blur-sm text-white text-[10px] font-bold">
                19 Materi
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">Excel Dasar</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Mulai dari nol, sel, format & tabel</p>
            </div>
          </button>

          {/* Menengah */}
          <button
            onClick={() => onSelectCategory('menengah')}
            className="flex flex-col text-left rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition active:scale-[0.98] group"
          >
            <div className="h-24 w-full relative overflow-hidden bg-slate-100">
              <img
                src="/src/assets/images/excel_menengah_banner_1792210495482.jpg"
                alt="Excel Menengah"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-800/80 backdrop-blur-sm text-white text-[10px] font-bold">
                25 Materi
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">Excel Menengah</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">VLOOKUP, SUMIFS, PivotTable</p>
            </div>
          </button>

          {/* Mahir */}
          <button
            onClick={() => onSelectCategory('mahir')}
            className="flex flex-col text-left rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition active:scale-[0.98] group"
          >
            <div className="h-24 w-full relative overflow-hidden bg-slate-100">
              <img
                src="/src/assets/images/excel_mahir_banner_1792210496564.jpg"
                alt="Excel Mahir"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-800/80 backdrop-blur-sm text-white text-[10px] font-bold">
                25 Materi
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">Excel Mahir</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Power Query, Dashboard & LET</p>
            </div>
          </button>

          {/* Macro & VBA */}
          <button
            onClick={() => onSelectCategory('vba')}
            className="flex flex-col text-left rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition active:scale-[0.98] group"
          >
            <div className="h-24 w-full relative overflow-hidden bg-slate-100">
              <img
                src="/src/assets/images/excel_vba_banner_1792210496203.jpg"
                alt="Macro dan VBA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-800/80 backdrop-blur-sm text-white text-[10px] font-bold">
                21 Materi
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">Macro & VBA</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">Otomasi kode & form otomatis</p>
            </div>
          </button>
        </div>

        {/* Shortcut Full Width Card */}
        <button
          onClick={onOpenShortcuts}
          className="w-full mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between group shadow-sm hover:shadow-md transition min-h-[48px]"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
              Ctrl
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold">Shortcut Excel Wajib Tahu</h3>
              <p className="text-[11px] text-slate-300">{shortcutsData.length} kombinasi tombol sakti penunjang kerja cepat</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors shrink-0" />
        </button>
      </div>

      {/* 6. Quick Tools Bar */}
      <div className="px-4 mt-6">
        <h2 className="text-sm font-bold text-slate-900 mb-3">Fitur Bantu Cepat</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={onOpenSimulator}
            className="p-3 rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center text-center hover:bg-emerald-50/50 hover:border-emerald-300 transition active:scale-95 shadow-sm min-h-[76px]"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1.5 shadow-xs">
              <Play className="w-4 h-4 fill-emerald-800" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">Simulator Rumus</span>
            <span className="text-[10px] text-emerald-700 font-medium mt-0.5">& Unduh XLSX</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="p-3 rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center text-center hover:bg-slate-50 transition active:scale-95 shadow-sm min-h-[76px]"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
              <Calculator className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">Pencari Rumus</span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">Sintaks & Contoh</span>
          </button>

          <button
            onClick={onOpenGlossary}
            className="p-3 rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center text-center hover:bg-slate-50 transition active:scale-95 shadow-sm min-h-[76px]"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">Glosarium</span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">Istilah Excel</span>
          </button>

          <button
            onClick={onOpenTroubleshooting}
            className="p-3 rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center text-center hover:bg-slate-50 transition active:scale-95 shadow-sm min-h-[76px]"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-1.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">Solusi Masalah</span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">Error #N/A #REF!</span>
          </button>
        </div>
      </div>

      {/* 7. Materi Populer */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-slate-900">Materi Paling Sering Dicari</h2>
          <span className="text-[11px] text-slate-500">Favorit praktisi</span>
        </div>

        <div className="space-y-2">
          {popularLessons.map((lesson) => {
            const isDone = completedLessonIds.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 flex items-center justify-between text-left transition shadow-sm group min-h-[52px]"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-700" /> : lesson.number}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                      {lesson.title}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">{lesson.shortDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0 text-slate-400 group-hover:text-emerald-600">
                  <span className="text-[11px] font-medium hidden sm:inline">{lesson.readTime}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 8. Terakhir Dipelajari (if any) */}
      {recentLessonIds.length > 0 && (
        <div className="px-4 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <BookMarked className="w-4 h-4 text-emerald-600" />
              Riwayat Terakhir Dipelajari
            </h2>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {recentLessonIds.slice(0, 5).map((id) => {
              const lesson = getLessonById(id);
              if (!lesson) return null;
              return (
                <button
                  key={lesson.id}
                  onClick={() => onSelectLesson(lesson.id)}
                  className="w-56 shrink-0 p-3 rounded-2xl bg-white border border-slate-200/80 text-left hover:border-emerald-300 transition shadow-sm"
                >
                  <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">
                    {lesson.category} · Bab {lesson.number}
                  </span>
                  <p className="text-xs font-bold text-slate-900 mt-1 truncate">
                    {lesson.title}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {lesson.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 9. Bagi Kopi Banner Support */}
      <div className="px-4 mt-6 mb-2">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-amber-50 to-amber-100/70 border border-amber-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-950">Bagi Kopi untuk Pembuat Aplikasi</p>
              <p className="text-[11px] text-amber-800/90 leading-snug">Dukungan sukarela agar materi Excel terus berkembang.</p>
            </div>
          </div>
          <button
            onClick={onOpenCoffee}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-bold text-xs shadow-sm transition shrink-0 min-h-[44px] flex items-center gap-1"
          >
            Traktir Kopi
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
