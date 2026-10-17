import React from 'react';
import { Coffee, Copy, Check, ExternalLink, X, Heart } from 'lucide-react';

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CoffeeModal: React.FC<CoffeeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copiedNumber, setCopiedNumber] = React.useState(false);
  const [copiedName, setCopiedName] = React.useState(false);

  if (!isOpen) return null;

  const gopayNumber = '08179015181';
  const gopayName = 'Jamhur';

  const copyToClipboard = async (text: string, type: 'number' | 'name') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'number') {
        setCopiedNumber(true);
        setTimeout(() => setCopiedNumber(false), 2000);
        onShowToast('Nomor GoPay 08179015181 berhasil disalin!');
      } else {
        setCopiedName(true);
        setTimeout(() => setCopiedName(false), 2000);
        onShowToast('Nama penerima "Jamhur" berhasil disalin!');
      }
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      if (type === 'number') {
        setCopiedNumber(true);
        setTimeout(() => setCopiedNumber(false), 2000);
        onShowToast('Nomor GoPay disalin!');
      } else {
        setCopiedName(true);
        setTimeout(() => setCopiedName(false), 2000);
        onShowToast('Nama penerima disalin!');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Decoration */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-emerald-600 to-emerald-700" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Coffee Icon */}
        <div className="flex flex-col items-center text-center mt-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 mb-3">
            <Coffee className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Dukung Tutor Excel Pro</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed px-2">
            Jika aplikasi ini membantu pekerjaan dan pembelajaran Anda, silakan traktir pembuat aplikasi secangkir kopi agar pengembangan materi Excel terus berlanjut.
          </p>
        </div>

        {/* Payment Details Card */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Metode Donasi</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              GoPay
            </span>
          </div>

          {/* Nomor GoPay */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[11px] text-slate-500 font-medium">Nomor GoPay</p>
              <p className="text-base font-mono font-bold text-slate-900 tracking-wide select-all">{gopayNumber}</p>
            </div>
            <button
              onClick={() => copyToClipboard(gopayNumber, 'number')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-100/70 hover:bg-emerald-200 rounded-xl transition active:scale-95 min-h-[44px]"
            >
              {copiedNumber ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
              {copiedNumber ? 'Tersalin' : 'Salin Nomor'}
            </button>
          </div>

          {/* Nama Penerima */}
          <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200/60">
            <div>
              <p className="text-[11px] text-slate-500 font-medium">Nama Penerima</p>
              <p className="text-sm font-semibold text-slate-900">{gopayName}</p>
            </div>
            <button
              onClick={() => copyToClipboard(gopayName, 'name')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-200/80 hover:bg-slate-300/80 rounded-xl transition active:scale-95 min-h-[44px]"
            >
              {copiedName ? <Check className="w-4 h-4 text-slate-800" /> : <Copy className="w-4 h-4" />}
              {copiedName ? 'Tersalin' : 'Salin Nama'}
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 space-y-2">
          <a
            href={`https://gopay.co.id/`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition min-h-[44px]"
          >
            <ExternalLink className="w-4 h-4" />
            Buka GoPay
          </a>
          
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 text-xs font-medium text-slate-500 hover:text-slate-800 transition min-h-[44px]"
          >
            Nanti Saja
          </button>
        </div>

        {/* Assurance Footer */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Dukungan bersifat sukarela. Semua materi belajar tetap 100% gratis.</span>
        </div>
      </div>
    </div>
  );
};
