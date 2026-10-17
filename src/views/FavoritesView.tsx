import React, { useState } from 'react';
import { Bookmark, Search, Trash2, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { getLessonById } from '../data/allLessons';
import { Lesson } from '../types';

interface FavoritesViewProps {
  bookmarkedLessonIds: string[];
  completedLessonIds: string[];
  onSelectLesson: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onNavigateMateri: () => void;
  onShowToast: (msg: string) => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  bookmarkedLessonIds,
  completedLessonIds,
  onSelectLesson,
  onToggleBookmark,
  onNavigateMateri,
  onShowToast
}) => {
  const [search, setSearch] = useState('');

  const bookmarkedLessons: Lesson[] = bookmarkedLessonIds
    .map(id => getLessonById(id))
    .filter(Boolean) as Lesson[];

  const filtered = bookmarkedLessons.filter(l => 
    l.title.toLowerCase().includes(search.toLowerCase()) ||
    l.shortDesc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-28 pt-2">
      <div className="px-4">
        <h1 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-emerald-700 fill-emerald-700" />
          Materi Favorit Anda
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Kumpulan materi yang telah Anda simpan untuk referensi cepat
        </p>

        {bookmarkedLessons.length > 0 && (
          <div className="relative mt-3">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari dalam materi favorit..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>
        )}
      </div>

      <div className="px-4 mt-4 space-y-2.5">
        {bookmarkedLessons.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Bookmark className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800">Belum Ada Materi Tersimpan</h2>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
                Tandai materi yang sering Anda butuhkan dengan mengetuk ikon bookmark pada setiap bab pelajaran.
              </p>
            </div>
            <button
              onClick={onNavigateMateri}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition shadow-sm min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Jelajahi Materi Belajar</span>
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-6 text-center bg-white rounded-2xl border border-slate-200">
            <p className="text-xs text-slate-500">Tidak ada materi favorit yang cocok dengan pencarian.</p>
          </div>
        ) : (
          filtered.map((lesson) => {
            const isDone = completedLessonIds.includes(lesson.id);

            return (
              <div
                key={lesson.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 shadow-sm flex items-start justify-between gap-3 group transition"
              >
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
                    {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-700" /> : lesson.number}
                  </span>

                  <div className="min-w-0 pr-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
                      {lesson.category} · Bab {lesson.number}
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 mt-0.5 truncate">
                      {lesson.title}
                    </h2>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {lesson.shortDesc}
                    </p>
                  </div>
                </button>

                {/* Remove bookmark */}
                <button
                  onClick={() => {
                    onToggleBookmark(lesson.id);
                    onShowToast('Dihapus dari favorit');
                  }}
                  aria-label="Hapus dari favorit"
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Bookmark className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
