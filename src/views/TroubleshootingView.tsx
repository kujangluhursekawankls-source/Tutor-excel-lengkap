import React, { useState } from 'react';
import { AlertTriangle, Search, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { troubleshootingData } from '../data/troubleshootingData';

interface TroubleshootingViewProps {
  onBack: () => void;
}

export const TroubleshootingView: React.FC<TroubleshootingViewProps> = ({ onBack }) => {
  const [query, setQuery] = useState('');

  const filtered = troubleshootingData.filter(t => 
    t.error.toLowerCase().includes(query.toLowerCase()) ||
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.cause.toLowerCase().includes(query.toLowerCase())
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
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          Solusi Masalah & Error Umum
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Panduan mengatasi pesan error Excel (#N/A, #VALUE!, nol hilang)
        </p>

        <div className="relative mt-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari error (#N/A, #REF!, angka teks, dll)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
          />
        </div>
      </div>

      <div className="px-4 mt-4 space-y-3.5">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2.5"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="font-mono font-extrabold text-xs text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                {item.error}
              </span>
              <span className="text-xs font-bold text-slate-800">{item.title}</span>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <strong className="text-slate-800 block mb-0.5">Penyebab Masalah:</strong>
              {item.cause}
            </div>

            <div className="space-y-1.5 pt-1">
              <strong className="text-xs text-emerald-900 flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Langkah Solusi:
              </strong>
              <ul className="space-y-1 text-xs text-slate-700 leading-relaxed list-disc list-inside pl-1">
                {item.solutionSteps.map((step, sIdx) => (
                  <li key={sIdx}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-950">
              <strong>Contoh Kasus:</strong> {item.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
