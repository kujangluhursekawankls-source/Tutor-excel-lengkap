import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  Keyboard, 
  ArrowLeft, 
  Info, 
  Sparkles, 
  Flame, 
  HelpCircle, 
  RotateCcw, 
  ChevronRight, 
  ExternalLink,
  Laptop
} from 'lucide-react';
import { shortcutsData, getShortcutCategoryLabel } from '../data/shortcutsData';
import { ShortcutItem } from '../types';

interface ShortcutsViewProps {
  onBack: () => void;
  onShowToast: (msg: string) => void;
}

export const ShortcutsView: React.FC<ShortcutsViewProps> = ({ onBack, onShowToast }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isMacMode, setIsMacMode] = useState(false);
  const [onlyJobTest, setOnlyJobTest] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Flashcard mode state
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardScore, setFlashcardScore] = useState({ correct: 0, total: 0 });

  const categories = useMemo(() => [
    { id: 'all', label: 'Semua', count: shortcutsData.length },
    { id: 'dasar', label: 'Dasar & File', count: shortcutsData.filter(s => s.category === 'dasar').length },
    { id: 'edit', label: 'Pengeditan & Isi', count: shortcutsData.filter(s => s.category === 'edit').length },
    { id: 'navigasi', label: 'Navigasi & Seleksi', count: shortcutsData.filter(s => s.category === 'navigasi').length },
    { id: 'format', label: 'Format Angka & Sel', count: shortcutsData.filter(s => s.category === 'format').length },
    { id: 'rumus', label: 'Rumus & Tabel', count: shortcutsData.filter(s => s.category === 'rumus').length },
    { id: 'pivottable', label: 'PivotTable & Slicer', count: shortcutsData.filter(s => s.category === 'pivottable').length },
    { id: 'vba', label: 'Macro & VBA', count: shortcutsData.filter(s => s.category === 'vba').length },
    { id: 'audit', label: 'Audit Rumus', count: shortcutsData.filter(s => s.category === 'audit').length },
  ], []);

  const filteredShortcuts = useMemo(() => {
    return shortcutsData.filter((sc) => {
      const matchesCategory = selectedCategory === 'all' || sc.category === selectedCategory;
      const matchesJobTest = onlyJobTest ? sc.isPopularForJobTest === true : true;
      const matchesSearch = 
        sc.keys.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sc.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (sc.macKeys && sc.macKeys.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesJobTest && matchesSearch;
    });
  }, [selectedCategory, onlyJobTest, searchQuery]);

  const handleCopy = (keys: string, action: string, id: string) => {
    const textToCopy = `${keys} : ${action}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(id);
    onShowToast(`Shortcut "${keys}" berhasil disalin!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Flashcards list based on current filter or popular items
  const flashcardDeck = useMemo(() => {
    return filteredShortcuts.length > 0 ? filteredShortcuts : shortcutsData;
  }, [filteredShortcuts]);

  const currentFlashcard: ShortcutItem | undefined = flashcardDeck[flashcardIndex % flashcardDeck.length];

  const handleNextFlashcard = (knewIt: boolean) => {
    setFlashcardScore(prev => ({
      correct: prev.correct + (knewIt ? 1 : 0),
      total: prev.total + 1
    }));
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev + 1) % flashcardDeck.length);
  };

  return (
    <div className="pb-32 pt-2 bg-slate-50 min-h-screen">
      {/* 1. Header Navigation Bar */}
      <div className="sticky top-14 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 py-2.5 flex items-center justify-between shadow-xs">
        <button
          onClick={onBack}
          aria-label="Kembali ke menu sebelumnya"
          className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-800 font-semibold text-xs py-1.5 px-2 -ml-2 rounded-lg hover:bg-slate-100 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        {/* Mac / Windows Switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs border border-slate-200/70">
          <button
            onClick={() => setIsMacMode(false)}
            className={`px-3 py-1 rounded-lg font-bold transition text-[11px] min-h-[32px] ${
              !isMacMode ? 'bg-white text-emerald-950 shadow-xs border border-slate-200/50' : 'text-slate-600'
            }`}
          >
            Windows / PC
          </button>
          <button
            onClick={() => setIsMacMode(true)}
            className={`px-3 py-1 rounded-lg font-bold transition text-[11px] min-h-[32px] ${
              isMacMode ? 'bg-white text-emerald-950 shadow-xs border border-slate-200/50' : 'text-slate-600'
            }`}
          >
            macOS
          </button>
        </div>
      </div>

      <div className="px-4 mt-3">
        {/* Title & Flashcard Toggle */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Keyboard className="w-5 h-5 text-emerald-700" />
              Kamus Shortcut Excel Lengkap
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Koleksi {shortcutsData.length} kombinasi tombol sakti untuk efisiensi kerja kilat
            </p>
          </div>

          <button
            onClick={() => {
              setIsFlashcardMode(!isFlashcardMode);
              setIsFlipped(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 min-h-[40px] shadow-xs ${
              isFlashcardMode
                ? 'bg-emerald-800 text-white'
                : 'bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isFlashcardMode ? 'Tutup Hafalan' : 'Latihan Hafal'}</span>
          </button>
        </div>

        {/* FLASHCARD INTERACTIVE PRACTICE MODE */}
        {isFlashcardMode && currentFlashcard && (
          <div className="mt-3.5 p-4 rounded-3xl bg-linear-to-br from-emerald-900 to-slate-900 text-white shadow-lg space-y-3">
            <div className="flex items-center justify-between text-xs text-emerald-200">
              <span className="font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Mode Latihan Hafal Shortcut
              </span>
              <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded-full">
                Skor: {flashcardScore.correct} / {flashcardScore.total}
              </span>
            </div>

            {/* Flashcard Card Body */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 min-h-[140px] flex flex-col items-center justify-center text-center cursor-pointer transition hover:bg-white/15 select-none"
            >
              {!isFlipped ? (
                <>
                  <span className="text-[10px] tracking-wider uppercase text-emerald-300 font-bold mb-1">
                    Tebak Kombinasi Tombol Untuk:
                  </span>
                  <h2 className="text-base sm:text-lg font-black text-white px-2">
                    {currentFlashcard.action}
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 max-w-xs">
                    {currentFlashcard.description}
                  </p>
                  <span className="text-[11px] text-emerald-300 mt-3 font-semibold underline">
                    Ketuk untuk melihat jawaban tombol 👆
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[10px] tracking-wider uppercase text-emerald-300 font-bold mb-1">
                    Kombinasi Tombol ({isMacMode ? 'macOS' : 'Windows'}):
                  </span>
                  <div className="px-4 py-2 rounded-xl bg-black/60 border border-emerald-400/50 shadow-inner mt-1">
                    <span className="font-mono font-black text-lg sm:text-xl text-emerald-400">
                      {isMacMode && currentFlashcard.macKeys ? currentFlashcard.macKeys : currentFlashcard.keys}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-300 mt-2">
                    Kategori: {getShortcutCategoryLabel(currentFlashcard.category)}
                  </span>
                </>
              )}
            </div>

            {/* Flashcard Controls */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => handleNextFlashcard(false)}
                className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition min-h-[44px]"
              >
                Belum Hafal ❌
              </button>
              <button
                onClick={() => handleNextFlashcard(true)}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-sm transition min-h-[44px]"
              >
                Sudah Hafal! ✅
              </button>
            </div>
          </div>
        )}

        {/* Android Keyboard / OTG Guide Accordion */}
        <div className="mt-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <Laptop className="w-4 h-4 text-amber-700" />
            <span>Cara Pakai Shortcut di HP / Tablet Android:</span>
          </div>
          <p className="leading-relaxed text-[11px] sm:text-xs text-amber-900/90">
            Kombinasi tombol modifikator (Ctrl, Alt, Shift, F1-F12) dapat digunakan secara penuh di HP Android dengan menyambungkan <strong>Keyboard Bluetooth</strong> nirkabel atau kabel USB via adapter <strong>OTG (On-The-Go)</strong>. Shortcut di bawah akan berjalan otomatis persis seperti di laptop.
          </p>
        </div>

        {/* Search & Job Test Filter */}
        <div className="mt-3 space-y-2">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari tombol atau fungsi (AutoSum, Filter, VBE, Bold...)"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
            />
          </div>

          <div className="flex items-center justify-between pt-0.5">
            {/* Filter Job Test Toggle */}
            <button
              onClick={() => setOnlyJobTest(!onlyJobTest)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 min-h-[36px] ${
                onlyJobTest
                  ? 'bg-rose-100 text-rose-800 border border-rose-300 shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${onlyJobTest ? 'text-rose-600 fill-rose-600' : 'text-slate-400'}`} />
              <span>Sering Ditanyakan di Tes Admin ({shortcutsData.filter(s => s.isPopularForJobTest).length})</span>
            </button>

            <span className="text-[11px] text-slate-400 font-mono">
              {filteredShortcuts.length} shortcut ditemukan
            </span>
          </div>
        </div>

        {/* Categories Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition min-h-[38px] flex items-center gap-1.5 ${
                selectedCategory === c.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{c.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedCategory === c.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Shortcuts List Cards */}
      <div className="px-4 mt-2 space-y-2.5">
        {filteredShortcuts.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <p className="text-sm font-bold text-slate-700">Tidak ada shortcut yang cocok</p>
            <p className="text-xs text-slate-400">Coba ubah kata kunci pencarian atau matikan filter kategori.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setOnlyJobTest(false); }}
              className="mt-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          filteredShortcuts.map((sc) => {
            const displayKeys = isMacMode && sc.macKeys ? sc.macKeys : sc.keys;
            const isCopied = copiedId === sc.id;

            return (
              <div
                key={sc.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 shadow-xs flex items-center justify-between gap-3 group transition"
              >
                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Keyboard Badge */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-900 text-emerald-400 font-mono font-bold text-xs tracking-wide shadow-xs border border-slate-700">
                      {displayKeys}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-md">
                      {getShortcutCategoryLabel(sc.category)}
                    </span>
                    {sc.isPopularForJobTest && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                        <Flame className="w-3 h-3 fill-rose-600 text-rose-600" />
                        <span>Wajib Tes</span>
                      </span>
                    )}
                  </div>

                  <h2 className="text-xs sm:text-sm font-bold text-slate-900 mt-1.5">
                    {sc.action}
                  </h2>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    {sc.description}
                  </p>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(displayKeys, sc.action, sc.id)}
                  aria-label={`Salin shortcut ${displayKeys}`}
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-700 active:scale-95 transition shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center border border-slate-200/60"
                  title="Salin shortcut ke clipboard"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-emerald-700" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
