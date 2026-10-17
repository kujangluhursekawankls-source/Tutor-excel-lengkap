import React from 'react';
import { Coffee, WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface HeaderProps {
  onOpenCoffee: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCoffee, onNavigateHome }) => {
  const isOnline = useOnlineStatus();

  return (
    <header className="sticky top-0 z-30 bg-emerald-800 text-white shadow-md border-b border-emerald-900/40">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Zone 1: Brand title wordmark with Excel icon */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 text-left group min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 rounded-lg pr-2"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-700/80 p-1 flex items-center justify-center border border-emerald-500/30 group-hover:scale-105 transition-transform shrink-0">
            <img src="/icon.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white leading-tight">
              Tutor Excel Pro
            </span>
            <span className="text-[10px] text-emerald-200/90 font-medium tracking-wide">
              Belajar Excel Nol sampai Mahir
            </span>
          </div>
        </button>

        {/* Zone 2 / 3: Offline warning + Bagi Kopi Button */}
        <div className="flex items-center gap-2 shrink-0">
          {!isOnline && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 text-[11px] font-medium" title="Mode Offline - Menggunakan data tersimpan">
              <WifiOff className="w-3 h-3 text-amber-300" />
              <span className="hidden sm:inline">Offline</span>
            </div>
          )}

          {/* Bagi Kopi Button */}
          <button
            onClick={onOpenCoffee}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition transform active:scale-95 min-h-[40px]"
            title="Traktir Kopi Pembuat Aplikasi"
          >
            <Coffee className="w-3.5 h-3.5 text-slate-900" />
            <span>Bagi Kopi</span>
          </button>
        </div>
      </div>
    </header>
  );
};
