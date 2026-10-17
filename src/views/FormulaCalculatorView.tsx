import React, { useState } from 'react';
import { Search, Calculator, Copy, Check, ArrowLeft, Sparkles, HelpCircle } from 'lucide-react';
import { formulasData } from '../data/formulasData';
import { FormulaItem } from '../types';

interface FormulaCalculatorViewProps {
  onBack: () => void;
  onShowToast: (msg: string) => void;
}

export const FormulaCalculatorView: React.FC<FormulaCalculatorViewProps> = ({ onBack, onShowToast }) => {
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<'comma' | 'semicolon'>('semicolon');

  const popularQueries = [
    'Menghitung total harga',
    'Menghitung umur',
    'Mencari data ganda',
    'Mencari nama berdasarkan kode',
    'Memberi status lulus atau tidak lulus',
    'Menggabungkan nama depan dan belakang',
    'Cicilan bulanan'
  ];

  const filteredFormulas = formulasData.filter((f) => {
    const q = query.toLowerCase();
    if (!q) return true;

    const matchesName = f.name.toLowerCase().includes(q);
    const matchesCategory = f.category.toLowerCase().includes(q);
    const matchesDesc = f.description.toLowerCase().includes(q);
    const matchesNeeds = f.userNeedExamples.some(n => n.toLowerCase().includes(q));

    return matchesName || matchesCategory || matchesDesc || matchesNeeds;
  });

  const handleCopy = (formula: string, id: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedId(id);
    onShowToast(`Rumus "${formula}" disalin ke clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pb-28 pt-2">
      {/* Header Bar */}
      <div className="px-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-800 font-semibold text-xs py-1.5 px-2 -ml-2 rounded-lg hover:bg-slate-100 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        {/* Regional Separator Toggle */}
        <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-xl text-xs">
          <button
            onClick={() => setSelectedFormat('semicolon')}
            className={`px-2 py-1 rounded-lg font-bold transition text-[10px] ${
              selectedFormat === 'semicolon' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
            }`}
            title="Excel Bahasa Indonesia / Regional Indonesia"
          >
            Titik Koma (;)
          </button>
          <button
            onClick={() => setSelectedFormat('comma')}
            className={`px-2 py-1 rounded-lg font-bold transition text-[10px] ${
              selectedFormat === 'comma' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
            title="Excel US / English"
          >
            Koma (,)
          </button>
        </div>
      </div>

      <div className="px-4 mt-2">
        <h1 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-emerald-700" />
          Kalkulator & Rekomendasi Rumus
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Ketik apa yang ingin Anda hitung dalam bahasa sehari-hari
        </p>

        {/* Search Input */}
        <div className="relative mt-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Contoh: Menghitung umur, total per bulan, cari nama..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
          />
        </div>

        {/* Quick Recommendation Chips */}
        <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap mr-1">Rekomendasi:</span>
          {popularQueries.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(item)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-[11px] font-medium whitespace-nowrap transition active:scale-95 border border-slate-200/60"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Results List */}
      <div className="px-4 mt-4 space-y-3.5">
        {filteredFormulas.map((formula) => {
          const isCopied = copiedId === formula.id;
          const displaySyntax = selectedFormat === 'semicolon' ? formula.syntaxSemicolon : formula.syntaxComma;

          return (
            <div
              key={formula.id}
              className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 transition space-y-3"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-extrabold text-slate-900 font-mono">
                      ={formula.name}()
                    </h2>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-semibold text-[10px]">
                      {formula.category}
                    </span>
                    {formula.compatibility && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-medium text-[10px]">
                        {formula.compatibility}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{formula.description}</p>
                </div>
              </div>

              {/* Solusi untuk Kebutuhan */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Menjawab Kebutuhan:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {formula.userNeedExamples.map((need, i) => (
                    <span key={i} className="text-[11px] font-medium text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      💡 {need}
                    </span>
                  ))}
                </div>
              </div>

              {/* Syntax Box with Copy */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-slate-600">Sintaks Resmi:</span>
                  <button
                    onClick={() => handleCopy(formula.sampleFormula, formula.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 min-h-[36px]"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Tersalin!' : 'Salin Contoh Rumus'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900 text-emerald-300 font-mono text-xs overflow-x-auto shadow-inner select-all">
                  {displaySyntax}
                </div>
              </div>

              {/* Sample Table */}
              {formula.sampleTable && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-emerald-800 text-white font-semibold">
                        {formula.sampleTable.headers.map((h, idx) => (
                          <th key={idx} className="py-1.5 px-2.5 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-slate-50/50">
                      {formula.sampleTable.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-1.5 px-2.5 font-mono text-[11px] text-slate-700 whitespace-nowrap">
                              {String(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Sample formula and explanation */}
              <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Contoh Penerapan:</span>
                  <code className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold text-emerald-800">
                    {formula.sampleFormula}
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Hasil:</span>
                  <span className="font-mono font-bold text-emerald-900">{formula.sampleResult}</span>
                </div>
                <p className="text-[11px] text-emerald-900/90 leading-relaxed pt-1">
                  {formula.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
