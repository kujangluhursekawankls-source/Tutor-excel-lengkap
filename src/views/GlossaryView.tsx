import React, { useState } from 'react';
import { HelpCircle, Search, ArrowLeft, BookOpen } from 'lucide-react';
import { glossaryData } from '../data/glossaryData';

interface GlossaryViewProps {
  onBack: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onBack }) => {
  const [query, setQuery] = useState('');

  const filtered = glossaryData.filter(g => 
    g.term.toLowerCase().includes(query.toLowerCase()) ||
    g.definition.toLowerCase().includes(query.toLowerCase()) ||
    g.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pb-28 pt-2">
      <div className="px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-800 font-semibold text-xs py-1.5 px-2 -ml-2 rounded-lg hover:bg-slate-100 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        <h1 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 mt-1">
          <BookOpen className="w-5 h-5 text-blue-700" />
          Glosarium Istilah Excel
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Kamus istilah penting spreadsheet yang wajib dipahami pengguna
        </p>

        <div className="relative mt-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari istilah (Cell, Range, Spill, VBA, Volatile...)"
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900">{item.term}</h2>
              <span className="text-[10px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md">
                {item.category}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{item.definition}</p>
            <div className="p-2 rounded-xl bg-slate-50 text-[11px] text-slate-700 border border-slate-100 mt-1">
              <strong className="text-slate-900">Contoh:</strong> {item.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
