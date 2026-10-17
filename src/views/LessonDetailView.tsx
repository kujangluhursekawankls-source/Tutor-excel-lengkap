import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  CheckCircle2, 
  Copy, 
  Check, 
  Youtube, 
  ExternalLink, 
  Lightbulb, 
  AlertOctagon, 
  FileSpreadsheet, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  Search,
  Calculator
} from 'lucide-react';
import { Lesson } from '../types';
import { getLessonById, getCategoryLabel } from '../data/allLessons';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface LessonDetailViewProps {
  lesson: Lesson;
  onBack: () => void;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onSelectLesson: (id: string) => void;
  onOpenSimulator?: () => void;
  onShowToast: (msg: string) => void;
}

export const LessonDetailView: React.FC<LessonDetailViewProps> = ({
  lesson,
  onBack,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onSelectLesson,
  onOpenSimulator,
  onShowToast
}) => {
  const isOnline = useOnlineStatus();
  const [copiedFormula, setCopiedFormula] = useState(false);
  const [showVideoEmbed, setShowVideoEmbed] = useState(false);

  // Extract YouTube ID if possible
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  const videoId = getYouTubeVideoId(lesson.youtubeUrl);

  const handleCopyFormula = (formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormula(true);
    onShowToast('Rumus Excel berhasil disalin!');
    setTimeout(() => setCopiedFormula(false), 2000);
  };

  // Find next lesson
  const nextLessonId = 
    lesson.category === 'dasar' && lesson.number < 19 ? `d-${String(lesson.number + 1).padStart(2, '0')}` :
    lesson.category === 'menengah' && lesson.number < 25 ? `m-${String(lesson.number + 1).padStart(2, '0')}` :
    lesson.category === 'mahir' && lesson.number < 25 ? `a-${String(lesson.number + 1).padStart(2, '0')}` :
    lesson.category === 'vba' && lesson.number < 21 ? `v-${String(lesson.number + 1).padStart(2, '0')}` : null;
  const nextLesson = nextLessonId ? getLessonById(nextLessonId) : null;

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent('tutorial excel ' + lesson.title + ' bahasa indonesia')}`;

  return (
    <div className="pb-32 pt-2 bg-slate-50 min-h-screen">
      {/* 1. Sticky Action Navigation Bar */}
      <div className="sticky top-14 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 py-2.5 flex items-center justify-between shadow-xs">
        <button
          onClick={onBack}
          aria-label="Kembali ke daftar materi"
          className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-800 font-semibold text-xs py-1.5 px-2 -ml-2 rounded-lg hover:bg-slate-100 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <div className="flex items-center gap-1">
          {/* Bookmark Button */}
          <button
            onClick={() => {
              onToggleBookmark(lesson.id);
              onShowToast(isBookmarked ? 'Dihapus dari favorit' : 'Disimpan ke favorit');
            }}
            aria-label="Favorit"
            className="p-2 text-slate-500 hover:text-emerald-700 rounded-xl hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center transition"
          >
            <Bookmark
              className={`w-4 h-4 ${
                isBookmarked ? 'text-emerald-600 fill-emerald-600' : 'text-slate-400'
              }`}
            />
          </button>

          {/* Tandai Selesai Mini Button */}
          <button
            onClick={() => {
              onToggleComplete(lesson.id);
              onShowToast(isCompleted ? 'Status diubah ke belum selesai' : 'Materi ditandai selesai!');
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition min-h-[40px] ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-700' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Selesai' : 'Tandai Selesai'}</span>
          </button>
        </div>
      </div>

      {/* 2. Lesson Title & Overview */}
      <div className="px-4 mt-4">
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          {/* Metadata badges */}
          <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
              {getCategoryLabel(lesson.category)}
            </span>
            <span>·</span>
            <span>Bab {lesson.number}</span>
            <span>·</span>
            <span>{lesson.readTime}</span>
            {lesson.versionRequirement && (
              <>
                <span>·</span>
                <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md font-semibold">
                  {lesson.versionRequirement}
                </span>
              </>
            )}
          </div>

          <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 leading-snug">
            {lesson.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {lesson.summary}
          </p>

          {/* Shortcut to Simulator */}
          {onOpenSimulator && (
            <button
              onClick={onOpenSimulator}
              className="mt-3.5 w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200/70 text-xs font-bold flex items-center justify-center gap-1.5 transition"
            >
              <Calculator className="w-4 h-4 text-emerald-700" />
              <span>Buka Simulator Rumus & Unduh File Latihan .XLSX</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Detailed Explanation Paragraphs */}
      <div className="px-4 mt-4">
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
            Penjelasan Konsep
          </h2>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {lesson.explanation.map((par, idx) => (
              <p key={idx}>{par}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Realistic Spreadsheet Preview (if sampleData exists) */}
      {lesson.sampleData && (
        <div className="px-4 mt-4">
          <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                Contoh Tampilan Spreadsheet Excel
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Format Tabel Realistis</span>
            </div>

            {/* Excel Formula Bar Mockup */}
            {lesson.appliedFormula && (
              <div className="mb-2 p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono flex items-center gap-2 text-slate-700">
                <span className="text-slate-400 font-bold italic select-none">fx</span>
                <span className="text-emerald-800 font-bold truncate">{lesson.appliedFormula}</span>
              </div>
            )}

            {/* Interactive Grid Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-inner">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-emerald-800 text-white font-semibold divide-x divide-emerald-700">
                    {lesson.sampleData.headers.map((h, i) => (
                      <th key={i} className="py-2.5 px-3 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {lesson.sampleData.rows.map((row, rIdx) => (
                    <tr 
                      key={rIdx} 
                      className={rIdx % 2 === 1 ? 'bg-slate-50/70 hover:bg-emerald-50/50' : 'hover:bg-emerald-50/50'}
                    >
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2 px-3 text-slate-800 whitespace-nowrap border-r border-slate-200 last:border-r-0 font-mono text-[11px] sm:text-xs">
                          {String(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {lesson.sampleData.caption && (
              <p className="text-[11px] text-slate-400 mt-2 italic text-center">
                {lesson.sampleData.caption}
              </p>
            )}

            {/* Expected Result */}
            {lesson.expectedResult && (
              <div className="mt-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-emerald-900 block">Hasil Perhitungan yang Diharapkan:</span>
                  <span className="text-xs font-bold text-emerald-800">{lesson.expectedResult}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. Syntax & Arguments (if applicable) */}
      {(lesson.syntax || lesson.syntaxSemicolon) && (
        <div className="px-4 mt-4">
          <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-slate-900">Sintaks Rumus Resmi</span>
              <button
                onClick={() => handleCopyFormula(lesson.syntax || lesson.syntaxSemicolon || '')}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 p-1 rounded-md min-h-[36px]"
              >
                {copiedFormula ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedFormula ? 'Tersalin' : 'Salin Rumus'}</span>
              </button>
            </div>

            <div className="space-y-2">
              {lesson.syntax && (
                <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
                  <span className="text-slate-400 text-[10px] block font-sans mb-1">Pengaturan Komputer US / English (Koma):</span>
                  {lesson.syntax}
                </div>
              )}
              {lesson.syntaxSemicolon && (
                <div className="p-3 rounded-xl bg-slate-800 text-amber-300 font-mono text-xs overflow-x-auto">
                  <span className="text-slate-400 text-[10px] block font-sans mb-1">Pengaturan Regional Indonesia (Titik Koma):</span>
                  {lesson.syntaxSemicolon}
                </div>
              )}
            </div>

            {/* Arguments definition */}
            {lesson.argumentsDesc && lesson.argumentsDesc.length > 0 && (
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-600 block">Arti Setiap Argumen:</span>
                {lesson.argumentsDesc.map((arg, i) => (
                  <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="font-mono font-bold text-emerald-800 shrink-0">{arg.name}:</span>
                    <span>{arg.meaning}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. Key Steps (Langkah-langkah Pengerjaan) */}
      <div className="px-4 mt-4">
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            Langkah-Langkah Pengerjaan
          </h2>

          <div className="space-y-2.5">
            {lesson.keySteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Important Tips & Common Mistakes */}
      <div className="px-4 mt-4 space-y-3">
        {/* Tips */}
        {lesson.importantTips && lesson.importantTips.length > 0 && (
          <div className="p-4 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 shadow-xs">
            <h2 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-emerald-700" />
              Tips Penting
            </h2>
            <ul className="space-y-1.5 text-xs text-emerald-900 leading-relaxed list-disc list-inside">
              {lesson.importantTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Common Mistakes & Fixes */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <div className="p-4 rounded-3xl bg-amber-50/80 border border-amber-200/80 shadow-xs">
            <h2 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-2 mb-2">
              <AlertOctagon className="w-4 h-4 text-amber-700" />
              Kesalahan Umum & Solusinya
            </h2>
            <div className="space-y-2 text-xs text-amber-950">
              {lesson.commonMistakes.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/70 border border-amber-200/60">
                  <p className="font-bold text-rose-700 flex items-center gap-1">
                    <span>❌</span> {item.mistake}
                  </p>
                  <p className="font-semibold text-emerald-800 mt-1 flex items-center gap-1">
                    <span>✅ Solusi:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 8. YouTube Video Section (Requirement: Link video YouTube pada setiap bab materi dengan sumber nyata) */}
      <div className="px-4 mt-4">
        <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Youtube className="w-5 h-5 text-red-600" />
              Video Tutorial Asli & Terverifikasi
            </h2>
            <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Sumber Nyata</span>
          </div>

          <div>
            <p className="text-xs text-slate-800 leading-snug font-semibold">
              {lesson.youtubeTitle}
            </p>
            {lesson.youtubeChannel && (
              <span className="inline-block mt-1 text-[11px] text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-md">
                Kanal: {lesson.youtubeChannel}
              </span>
            )}
          </div>

          {/* Offline Notice if device is offline */}
          {!isOnline && (
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
              <span className="text-sm">📶</span>
              <p className="leading-relaxed">
                <strong>Mode Offline:</strong> Anda sedang tidak terhubung internet. Rangkuman materi, rumus, dan tabel contoh di atas tetap bisa dipelajari sepenuhnya. Video YouTube akan siap diputar kembali saat koneksi internet aktif.
              </p>
            </div>
          )}

          {/* Embedded YouTube preview toggle or direct link */}
          {videoId ? (
            <div className="space-y-2">
              {!showVideoEmbed ? (
                <div 
                  className="relative rounded-2xl overflow-hidden bg-slate-950 h-44 flex flex-col items-center justify-center text-white p-4 text-center group cursor-pointer border border-slate-800"
                  onClick={() => {
                    if (!isOnline) {
                      onShowToast('Perangkat offline. Sambungkan internet untuk memutar video.');
                    } else {
                      setShowVideoEmbed(true);
                    }
                  }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={lesson.youtubeTitle}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition"
                  />
                  <div className="relative z-10 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Youtube className="w-7 h-7 fill-white ml-0.5" />
                  </div>
                  <span className="relative z-10 text-xs font-bold mt-2.5 drop-shadow bg-black/60 px-3 py-1 rounded-full">
                    Putar Video Langsung di Aplikasi
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                      title={lesson.youtubeTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowVideoEmbed(false)}
                      className="text-[11px] text-slate-500 hover:text-slate-800 underline font-medium p-1"
                    >
                      Tutup Pemutar Video
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* Action buttons */}
          <div className="pt-1 flex flex-col sm:flex-row gap-2">
            <a
              href={lesson.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-sm min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Tonton Video di YouTube</span>
            </a>

            <a
              href={youtubeSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition min-h-[44px]"
            >
              <Search className="w-4 h-4 text-slate-600" />
              <span>Cari Video Topik Ini</span>
            </a>
          </div>
        </div>
      </div>

      {/* 9. Practice Task (Latihan Singkat) */}
      <div className="px-4 mt-4">
        <div className="p-4 rounded-3xl bg-blue-50/70 border border-blue-200/80 shadow-xs space-y-2">
          <h2 className="text-xs sm:text-sm font-bold text-blue-950 flex items-center gap-2">
            <span>📝</span> Latihan Praktik Mandiri
          </h2>
          <p className="text-xs text-blue-900 leading-relaxed font-medium">
            {lesson.practiceTask}
          </p>
        </div>
      </div>

      {/* 10. Floating Sticky Bottom Bar for Completion & Next Lesson */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl">
        <div className="max-w-md mx-auto flex items-center gap-2">
          {/* Main Action Toggle Complete */}
          <button
            onClick={() => {
              onToggleComplete(lesson.id);
              onShowToast(isCompleted ? 'Status diubah ke belum selesai' : 'Selamat! Materi ditandai selesai.');
            }}
            className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-[0.98] min-h-[48px] ${
              isCompleted
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20'
            }`}
          >
            {isCompleted ? (
              <>
                <RotateCcw className="w-4 h-4" />
                <span>Batal Selesai</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Tandai Selesai</span>
              </>
            )}
          </button>

          {/* Next Lesson Button */}
          {nextLesson && (
            <button
              onClick={() => onSelectLesson(nextLesson.id)}
              className="py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition active:scale-[0.98] min-h-[48px] shrink-0"
              title={`Materi berikutnya: ${nextLesson.title}`}
            >
              <span>Lanjut</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
