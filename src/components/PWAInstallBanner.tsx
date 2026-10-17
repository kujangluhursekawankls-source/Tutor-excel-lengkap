import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  // If already installed or dismissed, hide
  if (isInstalled || isDismissed) {
    return null;
  }

  // If Android / Chromium beforeinstallprompt is ready
  if (isInstallable) {
    return (
      <div className="mx-4 my-3 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-950 text-white shadow-lg shadow-emerald-900/20 flex items-center justify-between gap-3 border border-emerald-700/50 animate-fade-in">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-white/10 p-2 flex items-center justify-center shrink-0">
            <img src="/icon.svg" alt="Tutor Excel Logo" className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold leading-tight truncate">Pasang Tutor Excel Pro di HP</p>
            <p className="text-[11px] text-emerald-200/90 leading-tight mt-0.5 truncate">Akses offline cepat langsung dari layar utama</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={install}
            className="flex items-center gap-1.5 px-3 py-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow transition min-h-[44px]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Pasang</span>
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Tutup banner instalasi"
            className="p-1.5 text-emerald-300 hover:text-white rounded-lg min-w-[36px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <div className="mx-4 my-3 p-3.5 rounded-2xl bg-emerald-900 text-white shadow-md flex items-center justify-between gap-3 border border-emerald-800">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/10 p-1.5 flex items-center justify-center shrink-0">
              <img src="/icon.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold truncate">Pasang ke Layar Utama</p>
              <p className="text-[11px] text-emerald-200 truncate">Gunakan seperti aplikasi asli di iOS</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setShowIOSModal(true)}
              className="px-3 py-2 bg-white text-emerald-900 font-bold text-xs rounded-xl shadow transition min-h-[44px]"
            >
              Panduan
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 text-emerald-300 hover:text-white min-h-[44px] flex items-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showIOSModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl text-slate-800">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-emerald-600" />
                Pasang di iPhone / iPad
              </h4>
              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                  <p>Ketuk tombol <strong>Share</strong> (ikon kotak dengan panah ke atas) di bilah bawah browser Safari.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                  <p>Gulir menu ke bawah lalu pilih opsi <strong>Add to Home Screen</strong> (<PlusSquare className="w-3.5 h-3.5 inline mx-0.5" /> Tambah ke Layar Utama).</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                  <p>Ketuk <strong>Add</strong> di sudut kanan atas. Tutor Excel siap digunakan kapan saja!</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSModal(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs min-h-[44px]"
              >
                Mengerti
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
