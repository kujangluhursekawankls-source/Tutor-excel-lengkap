import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Download, 
  FileSpreadsheet, 
  Check, 
  ArrowLeft, 
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { EXERCISE_TEMPLATES, downloadExerciseWorkbook } from '../utils/excelGenerator';

interface SimulatorViewProps {
  onBack: () => void;
  onShowToast: (msg: string) => void;
}

interface CellData {
  [coord: string]: string | number;
}

const PRESETS = [
  {
    id: 'toko',
    name: 'Toko Penjualan',
    description: 'Latihan rumus perkalian (=B2*C2) dan penjumlahan =SUM(D2:D4)',
    headers: ['A (Produk)', 'B (Qty)', 'C (Harga Satuan)', 'D (Subtotal)'],
    initialData: {
      'A2': 'Kopi Arabika', 'B2': 4, 'C2': 45000, 'D2': 180000,
      'A3': 'Susu UHT 1L', 'B3': 6, 'C3': 18500, 'D3': 111000,
      'A4': 'Gula Pasir 1kg', 'B4': 2, 'C4': 16000, 'D4': 32000,
      'A5': 'TOTAL BELANJA', 'B5': '', 'C5': '', 'D5': 323000,
    },
    suggestedFormulas: [
      { label: '=SUM(D2:D4)', formula: '=SUM(D2:D4)', target: 'D5' },
      { label: '=B2*C2', formula: '=B2*C2', target: 'D2' },
      { label: '=AVERAGE(C2:C4)', formula: '=AVERAGE(C2:C4)', target: 'C5' },
      { label: '=MAX(D2:D4)', formula: '=MAX(D2:D4)', target: 'D5' }
    ]
  },
  {
    id: 'nilai',
    name: 'Nilai & Status Siswa',
    description: 'Latihan rumus kelulusan IF (=IF(B2>=75, "LULUS", "REMEDIAL"))',
    headers: ['A (Nama Siswa)', 'B (Nilai Teori)', 'C (Nilai Praktik)', 'D (Status)'],
    initialData: {
      'A2': 'Ahmad Dahlan', 'B2': 85, 'C2': 90, 'D2': 'LULUS',
      'A3': 'Bunga Citra', 'B3': 65, 'C3': 70, 'D3': 'REMEDIAL',
      'A4': 'Citra Kirana', 'B4': 78, 'C4': 80, 'D4': 'LULUS',
      'A5': 'Doni Pratama', 'B5': 92, 'C5': 88, 'D5': 'LULUS',
    },
    suggestedFormulas: [
      { label: '=IF(B2>=75, "LULUS", "REMEDIAL")', formula: '=IF(B2>=75, "LULUS", "REMEDIAL")', target: 'D2' },
      { label: '=AVERAGE(B2:B5)', formula: '=AVERAGE(B2:B5)', target: 'B6' },
      { label: '=MIN(B2:B5)', formula: '=MIN(B2:B5)', target: 'B6' },
      { label: '=COUNT(B2:B5)', formula: '=COUNT(B2:B5)', target: 'B6' }
    ]
  }
];

export const SimulatorView: React.FC<SimulatorViewProps> = ({ onBack, onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'download'>('simulator');
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);

  const preset = PRESETS[selectedPresetIndex];
  const [gridData, setGridData] = useState<CellData>(preset.initialData);
  const [selectedCell, setSelectedCell] = useState<string>('D5');
  const [formulaInput, setFormulaInput] = useState<string>('=SUM(D2:D4)');
  const [evaluationFeedback, setEvaluationFeedback] = useState<string | null>(null);

  // Switch preset
  const handleSelectPreset = (idx: number) => {
    setSelectedPresetIndex(idx);
    const newPreset = PRESETS[idx];
    setGridData(newPreset.initialData);
    if (idx === 0) {
      setSelectedCell('D5');
      setFormulaInput('=SUM(D2:D4)');
    } else {
      setSelectedCell('D2');
      setFormulaInput('=IF(B2>=75, "LULUS", "REMEDIAL")');
    }
    setEvaluationFeedback(null);
  };

  // Simple, safe formula evaluator for common Excel math & logic
  const evaluateExcelFormula = (rawFormula: string): string | number => {
    const f = rawFormula.trim();
    if (!f.startsWith('=')) {
      return isNaN(Number(f)) ? f : Number(f);
    }

    const upper = f.toUpperCase();

    // 1. SUM(range)
    const sumMatch = upper.match(/=SUM\(([A-Z][0-9]):([A-Z][0-9])\)/i);
    if (sumMatch) {
      const start = sumMatch[1];
      const end = sumMatch[2];
      const col = start.charAt(0);
      const startRow = parseInt(start.slice(1), 10);
      const endRow = parseInt(end.slice(1), 10);

      let sum = 0;
      for (let r = startRow; r <= endRow; r++) {
        const val = Number(gridData[`${col}${r}`]) || 0;
        sum += val;
      }
      return sum;
    }

    // 2. AVERAGE(range)
    const avgMatch = upper.match(/=AVERAGE\(([A-Z][0-9]):([A-Z][0-9])\)/i);
    if (avgMatch) {
      const start = avgMatch[1];
      const end = avgMatch[2];
      const col = start.charAt(0);
      const startRow = parseInt(start.slice(1), 10);
      const endRow = parseInt(end.slice(1), 10);

      let sum = 0;
      let count = 0;
      for (let r = startRow; r <= endRow; r++) {
        const val = gridData[`${col}${r}`];
        if (val !== undefined && val !== '' && !isNaN(Number(val))) {
          sum += Number(val);
          count++;
        }
      }
      return count > 0 ? Math.round((sum / count) * 10) / 10 : 0;
    }

    // 3. MAX(range) & MIN(range)
    const maxMatch = upper.match(/=MAX\(([A-Z][0-9]):([A-Z][0-9])\)/i);
    if (maxMatch) {
      const col = maxMatch[1].charAt(0);
      const startRow = parseInt(maxMatch[1].slice(1), 10);
      const endRow = parseInt(maxMatch[2].slice(1), 10);
      let vals: number[] = [];
      for (let r = startRow; r <= endRow; r++) {
        const v = Number(gridData[`${col}${r}`]);
        if (!isNaN(v)) vals.push(v);
      }
      return vals.length > 0 ? Math.max(...vals) : 0;
    }

    const minMatch = upper.match(/=MIN\(([A-Z][0-9]):([A-Z][0-9])\)/i);
    if (minMatch) {
      const col = minMatch[1].charAt(0);
      const startRow = parseInt(minMatch[1].slice(1), 10);
      const endRow = parseInt(minMatch[2].slice(1), 10);
      let vals: number[] = [];
      for (let r = startRow; r <= endRow; r++) {
        const v = Number(gridData[`${col}${r}`]);
        if (!isNaN(v)) vals.push(v);
      }
      return vals.length > 0 ? Math.min(...vals) : 0;
    }

    // 4. COUNT(range)
    const countMatch = upper.match(/=COUNT\(([A-Z][0-9]):([A-Z][0-9])\)/i);
    if (countMatch) {
      const col = countMatch[1].charAt(0);
      const startRow = parseInt(countMatch[1].slice(1), 10);
      const endRow = parseInt(countMatch[2].slice(1), 10);
      let count = 0;
      for (let r = startRow; r <= endRow; r++) {
        const v = gridData[`${col}${r}`];
        if (v !== '' && !isNaN(Number(v))) count++;
      }
      return count;
    }

    // 5. IF condition: =IF(B2>=75, "LULUS", "REMEDIAL")
    const ifMatch = f.match(/=IF\(\s*([A-Z][0-9])\s*(>=|<=|>|<|=|<>)\s*([0-9]+)\s*,\s*"?([^",]+)"?\s*,\s*"?([^",\)]+)"?\s*\)/i);
    if (ifMatch) {
      const cellRef = ifMatch[1].toUpperCase();
      const op = ifMatch[2];
      const targetVal = Number(ifMatch[3]);
      const trueVal = ifMatch[4].trim();
      const falseVal = ifMatch[5].trim();

      const cellVal = Number(gridData[cellRef]) || 0;
      let isTrue = false;
      if (op === '>=') isTrue = cellVal >= targetVal;
      else if (op === '<=') isTrue = cellVal <= targetVal;
      else if (op === '>') isTrue = cellVal > targetVal;
      else if (op === '<') isTrue = cellVal < targetVal;
      else if (op === '=') isTrue = cellVal === targetVal;
      else if (op === '<>') isTrue = cellVal !== targetVal;

      return isTrue ? trueVal : falseVal;
    }

    // 6. Simple Arithmetic: =B2*C2 or =B2+C2 or =C2-D2
    const arithMatch = f.match(/=([A-Z][0-9])\s*([\+\-\*\/])\s*([A-Z][0-9]|[0-9]+)/i);
    if (arithMatch) {
      const leftRef = arithMatch[1].toUpperCase();
      const op = arithMatch[2];
      const rightRefOrNum = arithMatch[3].toUpperCase();

      const leftVal = Number(gridData[leftRef]) || 0;
      const rightVal = isNaN(Number(rightRefOrNum)) ? (Number(gridData[rightRefOrNum]) || 0) : Number(rightRefOrNum);

      if (op === '*') return leftVal * rightVal;
      if (op === '+') return leftVal + rightVal;
      if (op === '-') return leftVal - rightVal;
      if (op === '/') return rightVal !== 0 ? Math.round((leftVal / rightVal) * 100) / 100 : '#DIV/0!';
    }

    return '#VALUE!';
  };

  const handleRunFormula = () => {
    if (!formulaInput.trim()) return;

    const result = evaluateExcelFormula(formulaInput);
    setGridData(prev => ({
      ...prev,
      [selectedCell]: result
    }));

    setEvaluationFeedback(`Hasil di sel ${selectedCell}: ${result}`);
    onShowToast(`Rumus berhasil diterapkan ke sel ${selectedCell}!`);
  };

  const handleApplySuggested = (item: { formula: string; target: string }) => {
    setSelectedCell(item.target);
    setFormulaInput(item.formula);
    const result = evaluateExcelFormula(item.formula);
    setGridData(prev => ({
      ...prev,
      [item.target]: result
    }));
    setEvaluationFeedback(`Hasil rumus di sel ${item.target} = ${result}`);
    onShowToast(`Menerapkan ${item.formula}`);
  };

  const handleDownloadFile = (templateId: string) => {
    const ok = downloadExerciseWorkbook(templateId);
    if (ok) {
      onShowToast('File latihan Excel (.xlsx) berhasil diunduh!');
    } else {
      onShowToast('Gagal mengunduh file latihan.');
    }
  };

  return (
    <div className="pb-28 pt-2">
      {/* Header */}
      <div className="px-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-800 font-semibold text-xs py-1.5 px-2 -ml-2 rounded-lg hover:bg-slate-100 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-xl text-xs">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 rounded-lg font-bold transition text-[11px] ${
              activeTab === 'simulator' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Simulator Rumus
          </button>
          <button
            onClick={() => setActiveTab('download')}
            className={`px-3 py-1.5 rounded-lg font-bold transition text-[11px] flex items-center gap-1 ${
              activeTab === 'download' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh XLSX</span>
          </button>
        </div>
      </div>

      {activeTab === 'simulator' ? (
        <div className="px-4 mt-3 space-y-3.5">
          <div>
            <h1 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              Simulator Rumus Excel Interaktif
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Coba langsung rumus Excel secara live di HP tanpa harus membuka laptop
            </p>
          </div>

          {/* Preset Selector */}
          <div className="flex items-center gap-2 p-1 bg-slate-200/80 rounded-2xl">
            {PRESETS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(i)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition min-h-[36px] ${
                  selectedPresetIndex === i ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Formula Bar Mockup */}
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-10 px-2 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-mono font-bold text-xs text-center border border-slate-200">
                {selectedCell}
              </span>
              <div className="flex-1 relative flex items-center">
                <span className="absolute left-2.5 font-bold italic text-slate-400 select-none text-xs">
                  fx
                </span>
                <input
                  type="text"
                  value={formulaInput}
                  onChange={(e) => setFormulaInput(e.target.value)}
                  placeholder="Ketik rumus, misal: =SUM(D2:D4)"
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button
                onClick={handleRunFormula}
                className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-bold text-xs shadow-sm transition min-h-[40px] flex items-center gap-1"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Hitung</span>
              </button>
            </div>

            {/* Quick suggested chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
              <span className="text-[10px] text-slate-400 font-semibold mr-1">Rekomendasi Rumus:</span>
              {preset.suggestedFormulas.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleApplySuggested(s)}
                  className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold border border-emerald-200 whitespace-nowrap active:scale-95 transition"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {evaluationFeedback && (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium animate-fade-in flex items-center justify-between">
                <span>{evaluationFeedback}</span>
                <button
                  onClick={() => handleSelectPreset(selectedPresetIndex)}
                  className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 underline ml-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>
            )}
          </div>

          {/* Interactive Spreadsheet Grid */}
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-emerald-800 text-white font-semibold divide-x divide-emerald-700">
                    <th className="py-2 px-2.5 w-8 text-center bg-emerald-900/60 font-mono text-[11px]">#</th>
                    {preset.headers.map((h, i) => (
                      <th key={i} className="py-2 px-3 whitespace-nowrap text-left text-xs">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  {[2, 3, 4, 5].map((rowNum) => (
                    <tr key={rowNum} className="hover:bg-slate-50">
                      {/* Row Header */}
                      <td className="py-2 px-2 text-center text-slate-400 bg-slate-50 font-bold border-r border-slate-200 select-none text-[11px]">
                        {rowNum}
                      </td>

                      {/* Cells A, B, C, D */}
                      {['A', 'B', 'C', 'D'].map((col) => {
                        const coord = `${col}${rowNum}`;
                        const isCurrent = selectedCell === coord;
                        const cellVal = gridData[coord] !== undefined ? gridData[coord] : '';

                        return (
                          <td
                            key={coord}
                            onClick={() => {
                              setSelectedCell(coord);
                              if (col === 'D' && rowNum === 5) {
                                setFormulaInput('=SUM(D2:D4)');
                              } else if (col === 'D' && rowNum === 2) {
                                setFormulaInput('=B2*C2');
                              }
                            }}
                            className={`py-2 px-3 border-r border-slate-200 last:border-r-0 cursor-pointer transition select-none ${
                              isCurrent 
                                ? 'bg-emerald-100/90 ring-2 ring-emerald-600 font-bold text-slate-900' 
                                : 'text-slate-800 hover:bg-emerald-50/50'
                            }`}
                          >
                            <span className="truncate block max-w-[140px]">
                              {typeof cellVal === 'number' ? cellVal.toLocaleString('id-ID') : String(cellVal)}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-400 mt-2.5 text-center italic">
              Ketuk salah satu kotak sel di tabel untuk melihat atau menguji rumus pada sel tersebut.
            </p>
          </div>
        </div>
      ) : (
        /* Template Download Section */
        <div className="px-4 mt-3 space-y-3.5">
          <div>
            <h1 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Download className="w-5 h-5 text-emerald-700" />
              Unduh File Latihan Excel Asli (.XLSX)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              File spreadsheet resmi siap dibuka di aplikasi Microsoft Excel Android maupun laptop
            </p>
          </div>

          <div className="space-y-3">
            {EXERCISE_TEMPLATES.map((tpl) => (
              <div
                key={tpl.id}
                className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-slate-900">{tpl.title}</h2>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{tpl.filename}</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {tpl.description}
                </p>

                <button
                  onClick={() => handleDownloadFile(tpl.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh File .XLSX Sekarang</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
