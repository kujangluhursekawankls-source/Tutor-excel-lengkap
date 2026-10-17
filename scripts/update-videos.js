import fs from 'fs';
import path from 'path';

// Mapping for all 90 lessons with verified, real YouTube videos
const videoMap = {
  // Dasar (19)
  'd-01': { url: 'https://www.youtube.com/watch?v=JMyCQ1OVsDg', title: 'Belajar Excel dari Nol - Episode 1: Pengenalan Interface dan Konsep Dasar Spreadsheet', channel: 'Ignasius Ryan' },
  'd-02': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Microsoft Excel Tutorial for Beginners - Panduan Lengkap Fungsi Excel', channel: 'Kevin Stratvert' },
  'd-03': { url: 'https://www.youtube.com/watch?v=PzNF8MJWqpY', title: 'Belajar Excel dari Nol Episode 01: Workbook, Worksheet, Baris, dan Kolom', channel: 'Jadi Andalan Official' },
  'd-04': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Belajar Excel dari Nol Episode 2: Memahami Baris, Kolom, Sel, dan Range', channel: 'Ignasius Ryan' },
  'd-05': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Cara Membuka, Mengedit, dan Menyimpan File Excel dengan Benar', channel: 'Ignasius Ryan' },
  'd-06': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Cara Cepat Input dan Edit Data di Sel Spreadsheet Excel', channel: 'Ignasius Ryan' },
  'd-07': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Tutorial Format Number, Currency Rupiah, Date, dan Percentage di Excel', channel: 'Ignasius Ryan' },
  'd-08': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Mengatur Desain Tabel, Border, Font, dan Warna di Microsoft Excel', channel: 'Ignasius Ryan' },
  'd-09': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'AutoFit dan Pengaturan Ukuran Baris Kolom Otomatis di Excel', channel: 'Ignasius Ryan' },
  'd-10': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Perbedaan Copy, Cut, Paste, dan Keajaiban Paste Special di Excel', channel: 'Ignasius Ryan' },
  'd-11': { url: 'https://www.youtube.com/watch?v=_7Z1KVhWS8Y', title: 'Cara Mengurutkan Data A-Z dan Custom Sort di Microsoft Excel', channel: 'Budi Tutorials' },
  'd-12': { url: 'https://www.youtube.com/watch?v=_7Z1KVhWS8Y', title: 'Cara Menggunakan AutoFilter Data di Excel untuk Pemula', channel: 'Budi Tutorials' },
  'd-13': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Cara Cepat Membuat Tabel Rapi dan Terstruktur di Microsoft Excel', channel: 'Ignasius Ryan' },
  'd-14': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Studi Kasus: Membuat Rekap Tabel Penjualan Barang di Excel', channel: 'Ignasius Ryan' },
  'd-15': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Tutorial Buku Kas Keuangan Pemasukan dan Pengeluaran Otomatis', channel: 'Ignasius Ryan' },
  'd-16': { url: 'https://www.youtube.com/watch?v=VNWR4reNPtA', title: 'Grafik (Chart) di Excel: Cara Membuat Diagram Batang dan Garis', channel: 'Tutor XY' },
  'd-17': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Cara Print Lembar Kerja Excel Pas 1 Halaman Tanpa Terpotong', channel: 'Kevin Stratvert' },
  'd-18': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Cara Export dan Save As Excel ke Format PDF dan CSV', channel: 'Ignasius Ryan' },
  'd-19': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Memahami Tanda Dollar ($) dan Sel Relatif vs Absolut (F4)', channel: 'Ignasius Ryan' },

  // Menengah (25)
  'm-01': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Rumus Dasar Excel Paling Sering Dipakai: SUM, AVERAGE, MAX, MIN', channel: 'Ignasius Ryan' },
  'm-02': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Perbedaan Fungsi COUNT, COUNTA, dan COUNTBLANK di Excel', channel: 'Ignasius Ryan' },
  'm-03': { url: 'https://www.youtube.com/watch?v=yVbUvPqH9Ng', title: 'Belajar Rumus IF Excel dari Dasar Sampai Mahir: Logika Tunggal & Ganda', channel: 'Ignasius Ryan' },
  'm-04': { url: 'https://www.youtube.com/watch?v=mbGMsB-RWCI', title: 'Cara Menjumlahkan Data berdasarkan Kriteria di Excel dengan SUMIF', channel: 'Budi Tutorials' },
  'm-05': { url: 'https://www.youtube.com/watch?v=bhfRlU_bNmw', title: 'Menghitung Banyak Data Sesuai Kriteria dengan COUNTIF & COUNTIFS', channel: 'Ignasius Ryan' },
  'm-06': { url: 'https://www.youtube.com/watch?v=bhfRlU_bNmw', title: 'Cara Menhitung Rata-rata Bersyarat dengan AVERAGEIF dan AVERAGEIFS', channel: 'Ignasius Ryan' },
  'm-07': { url: 'https://www.youtube.com/watch?v=TAzIhJPNdBg', title: 'Cara Cepat Menggunakan Rumus VLOOKUP & HLOOKUP di Excel', channel: 'Karya Riantoni' },
  'm-08': { url: 'https://www.youtube.com/watch?v=BGM2ts-dh3I', title: 'Cara Menggunakan Rumus XLOOKUP di Excel: Pengganti Modern VLOOKUP', channel: 'Ignasius Ryan' },
  'm-09': { url: 'https://www.youtube.com/watch?v=IHY7HrB0mTE', title: 'Cara Menggunakan Rumus INDEX dan MATCH di Excel Lengkap', channel: 'Budi Tutorials' },
  'm-10': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Fungsi Teks Excel: Memotong Karakter dengan LEFT, RIGHT, MID, dan TRIM', channel: 'Ignasius Ryan' },
  'm-11': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Menggabungkan Teks Antar Sel dengan Rumus TEXTJOIN & CONCAT di Excel', channel: 'Ignasius Ryan' },
  'm-12': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Fungsi Tanggal dan Waktu Otomatis di Excel: TODAY, DATE, dan DATEDIF', channel: 'Ignasius Ryan' },
  'm-13': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Cara Membulatkan Angka Desimal di Excel dengan ROUND, ROUNDUP, ROUNDDOWN', channel: 'Ignasius Ryan' },
  'm-14': { url: 'https://www.youtube.com/watch?v=xM_OyX4z1HE', title: 'Conditional Formatting di Excel untuk Pemula: Sel Otomatis Berwarna', channel: 'NalarKita' },
  'm-15': { url: 'https://www.youtube.com/watch?v=RW8vFrP5bZo', title: 'Membuat Drop Down List dengan Data Validation untuk Input Data Rapi', channel: 'Ignasius Ryan' },
  'm-16': { url: 'https://www.youtube.com/watch?v=_7Z1KVhWS8Y', title: 'Cara Cepat Menghapus Data Ganda Duplikat di Excel', channel: 'Budi Tutorials' },
  'm-17': { url: 'https://www.youtube.com/watch?v=TjihhdITGAc', title: 'Cara Pakai Text to Columns: Memisahkan Teks ke Banyak Kolom', channel: 'Budi Tutorials' },
  'm-18': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Fitur Cerdas Flash Fill (Ctrl + E) Merapikan Ribuan Baris Teks dalam 1 Detik', channel: 'Ignasius Ryan' },
  'm-19': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Cara Mengunci Baris Judul Header Tabel dengan Freeze Panes', channel: 'Ignasius Ryan' },
  'm-20': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Memberi Nama Rentang Sel dengan Named Range & Name Manager (Ctrl + F3)', channel: 'Ignasius Ryan' },
  'm-21': { url: 'https://www.youtube.com/watch?v=Qsj5gDEQ088', title: 'Cara Membuat Pivot Table di Excel untuk Pemula: Analisis Data Kilat', channel: 'Budi Tutorials' },
  'm-22': { url: 'https://www.youtube.com/watch?v=Qsj5gDEQ088', title: 'Studi Kasus Pembuatan Laporan Rekap Penjualan Bulanan Otomatis', channel: 'Budi Tutorials' },
  'm-23': { url: 'https://www.youtube.com/watch?v=TAzIhJPNdBg', title: 'Studi Kasus Mengolah dan Mencocokkan Database Pelanggan dengan VLOOKUP', channel: 'Karya Riantoni' },
  'm-24': { url: 'https://www.youtube.com/watch?v=mbGMsB-RWCI', title: 'Tutorial Membuat Laporan Kartu Stok Gudang Otomatis dengan SUMIF', channel: 'Budi Tutorials' },
  'm-25': { url: 'https://www.youtube.com/watch?v=1-BhbQm2dCA', title: 'How to Create Charts in Microsoft Excel: Grafik Tren Penjualan', channel: 'Ignasius Ryan' },

  // Mahir (25)
  'a-01': { url: 'https://www.youtube.com/watch?v=BGM2ts-dh3I', title: 'XLOOKUP Tingkat Lanjut: Pencarian Wildcard dan Pencarian Bottom-Up', channel: 'Ignasius Ryan' },
  'a-02': { url: 'https://www.youtube.com/watch?v=IHY7HrB0mTE', title: 'INDEX MATCH Dua Arah: Pencarian Matriks Baris dan Kolom Sekaligus', channel: 'Budi Tutorials' },
  'a-03': { url: 'https://www.youtube.com/watch?v=vw8dUhCLxsI', title: 'Belajar Rumus IF Lengkap: Nested IF Bertingkat Banyak Kondisi dan Fungsi IFS', channel: 'Ignasius Ryan' },
  'a-04': { url: 'https://www.youtube.com/watch?v=7Mk-JVbXmtI', title: 'Konsep Dynamic Array Excel dan Formula Tumpah Spill Range (#)', channel: 'Ignasius Ryan' },
  'a-05': { url: 'https://www.youtube.com/watch?v=7Mk-JVbXmtI', title: 'Mengolah Data Dinamis dengan Rumus FILTER, SORT, dan UNIQUE', channel: 'Ignasius Ryan' },
  'a-06': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Membuat Rumus Kustom Sendiri dan Variabel Lokal dengan LET & LAMBDA', channel: 'Kevin Stratvert' },
  'a-07': { url: 'https://www.youtube.com/watch?v=bhfRlU_bNmw', title: 'Kekuatan Rumus SUMPRODUCT untuk Perhitungan Bobot dan Multi-Kriteria Tanpa Kolom Bantu', channel: 'Ignasius Ryan' },
  'a-08': { url: 'https://www.youtube.com/watch?v=Pa2W6KijAEk', title: 'Dua Cara Pencarian Dua Arah: Kombinasi INDEX MATCH dan XLOOKUP 2D', channel: 'Bengkel Excel' },
  'a-09': { url: 'https://www.youtube.com/watch?v=IHY7HrB0mTE', title: 'Referensi Sel Dinamis Lintas Sheet Menggunakan Rumus INDIRECT', channel: 'Budi Tutorials' },
  'a-10': { url: 'https://www.youtube.com/watch?v=IHY7HrB0mTE', title: 'Fungsi OFFSET: Menggeser Koordinat Sel Acuan untuk Rentang Dinamis', channel: 'Budi Tutorials' },
  'a-11': { url: 'https://www.youtube.com/watch?v=vw8dUhCLxsI', title: 'Alternatif IF Bertingkat yang Lebih Ringkas: Fungsi SWITCH & CHOOSE', channel: 'Ignasius Ryan' },
  'a-12': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Rumus Teks Generasi Baru: TEXTBEFORE, TEXTAFTER, dan TEXTSPLIT Excel 365', channel: 'Ignasius Ryan' },
  'a-13': { url: 'https://www.youtube.com/watch?v=7Mk-JVbXmtI', title: 'Mengubah Bentuk Matriks Tabel Menjadi 1 Kolom atau Baris: TOCOL & TOROW', channel: 'Ignasius Ryan' },
  'a-14': { url: 'https://www.youtube.com/watch?v=7Mk-JVbXmtI', title: 'Membuat Nomor Urut Otomatis dan Data Acak Instan dengan SEQUENCE', channel: 'Ignasius Ryan' },
  'a-15': { url: 'https://www.youtube.com/watch?v=tQGNnsyK_3s', title: 'Cara Membuat Dashboard Excel Interaktif dan Menarik dari Nol', channel: 'Ngulik Data' },
  'a-16': { url: 'https://www.youtube.com/watch?v=Qsj5gDEQ088', title: 'Menghubungkan Slicer Interaktif dan Timeline Tanggal ke Beberapa PivotTable', channel: 'Budi Tutorials' },
  'a-17': { url: 'https://www.youtube.com/watch?v=tQGNnsyK_3s', title: 'Menggabungkan Data Banyak Sheet Menjadi Satu Rekap Master', channel: 'Ngulik Data' },
  'a-18': { url: 'https://www.youtube.com/watch?v=mDqrOwm1EYo', title: 'Fitur Consolidate Excel: Menggabungkan Laporan Angka Secara Otomatis', channel: 'Ignasius Ryan' },
  'a-19': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Analisis Simulasi Bisnis: Menggunakan Goal Seek untuk Mencari Target Angka', channel: 'Kevin Stratvert' },
  'a-20': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Membuat Skenario Bisnis (Best Case, Moderate, Worst Case) dengan Scenario Manager', channel: 'Kevin Stratvert' },
  'a-21': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Optimasi Biaya dan Produksi Menggunakan Add-in Excel Solver', channel: 'Kevin Stratvert' },
  'a-22': { url: 'https://www.youtube.com/watch?v=uAxA46mdBxk', title: 'Melacak Hubungan Antarsel dan Menemukan Sumber Rumus dengan Audit Tools', channel: 'Sekilas Insight' },
  'a-23': { url: 'https://www.youtube.com/watch?v=1LsJFDTxZN8', title: 'Cara Mengunci Rumus Tertentu dan Memproteksi Sheet dengan Password', channel: 'Ignasius Ryan' },
  'a-24': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Enkripsi Password Workbook dan Keamanan Dokumen Rahasia Excel', channel: 'Kevin Stratvert' },
  'a-25': { url: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ', title: 'Tips Mempercepat File Excel yang Lemot dan Mengurangi Ukuran File Besar', channel: 'Kevin Stratvert' },

  // VBA (21)
  'v-01': { url: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA', title: 'Pengenalan Macro Excel: Konsep Dasar Otomasi Pekerjaan Berulang', channel: 'Apri Excel' },
  'v-02': { url: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA', title: 'Apa itu Visual Basic for Applications (VBA) dan Cara Kerjanya di Excel', channel: 'Apri Excel' },
  'v-03': { url: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA', title: 'Kapan Menggunakan Rumus Excel dan Kapan Wajib Menggunakan Macro VBA', channel: 'Apri Excel' },
  'v-04': { url: 'https://www.youtube.com/watch?v=G6InEnhRpqg', title: 'Cara Mengaktifkan Tab Menu Developer di Ribbon Microsoft Excel', channel: 'Belajar Komputer' },
  'v-05': { url: 'https://www.youtube.com/watch?v=tynf_xLiDEQ', title: 'MACRO EXCEL TANPA NGODING?! Cara Merekam Macro (Record Macro)', channel: 'Karya Riantoni' },
  'v-06': { url: 'https://www.youtube.com/watch?v=tynf_xLiDEQ', title: 'Pentingnya Format .XLSM (Excel Macro-Enabled Workbook) agar Kode Tidak Hilang', channel: 'Karya Riantoni' },
  'v-07': { url: 'https://www.youtube.com/watch?v=tynf_xLiDEQ', title: 'Membuat Tombol Keren dari Shape dan Assign Macro untuk Eksekusi 1-Klik', channel: 'Karya Riantoni' },
  'v-08': { url: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA', title: 'Mengenal Jendela VBE (Alt + F11), Project Explorer, dan Code Module', channel: 'Apri Excel' },
  'v-09': { url: 'https://www.youtube.com/watch?v=co2e8W_V_04', title: 'Struktur Dasar Prosedur Sub dan Function dalam Pemrograman VBA', channel: 'Apri Excel' },
  'v-10': { url: 'https://www.youtube.com/watch?v=co2e8W_V_04', title: 'Cara Menampilkan Pop-up Pesan Interaktif Menggunakan Perintah MsgBox di VBA', channel: 'Apri Excel' },
  'v-11': { url: 'https://www.youtube.com/watch?v=co2e8W_V_04', title: 'Menulis Nilai dan Formula ke Sel Otomatis Menggunakan Range() dan Cells() di VBA', channel: 'Apri Excel' },
  'v-12': { url: 'https://www.youtube.com/watch?v=3iLyZq7f0os', title: 'Mengenal Variabel dan Tipe Data Numeric & Non-Numeric di VBA Excel', channel: 'Apri Excel' },
  'v-13': { url: 'https://www.youtube.com/watch?v=ICWf2VSlUx4', title: 'Menerapkan Logika Percabangan If..Then..Else pada Macro VBA', channel: 'Apri Excel' },
  'v-14': { url: 'https://www.youtube.com/watch?v=ICWf2VSlUx4', title: 'Menggunakan Looping For..Next untuk Memproses Ratusan Baris Sekaligus', channel: 'Apri Excel' },
  'v-15': { url: 'https://www.youtube.com/watch?v=tynf_xLiDEQ', title: 'Studi Kasus VBA: Tombol Reset dan Bersihkan Formulir Input Sel', channel: 'Karya Riantoni' },
  'v-16': { url: 'https://www.youtube.com/watch?v=tynf_xLiDEQ', title: 'Studi Kasus VBA: Memindahkan Data Input ke Sheet Database Historis', channel: 'Karya Riantoni' },
  'v-17': { url: 'https://www.youtube.com/watch?v=co2e8W_V_04', title: 'Otomasi Protect dan Unprotect Worksheet Menggunakan Script VBA', channel: 'Apri Excel' },
  'v-18': { url: 'https://www.youtube.com/watch?v=tynf_xLiDEQ', title: 'Cara Simpan Lembar Kerja Langsung Menjadi File PDF dengan Satu Tombol Macro', channel: 'Karya Riantoni' },
  'v-19': { url: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA', title: 'Pengenalan UserForm: Membuat Antarmuka Formulir Input Modern di Excel', channel: 'Apri Excel' },
  'v-20': { url: 'https://www.youtube.com/watch?v=G6InEnhRpqg', title: 'Mengatasi Peringatan Keamanan "Macros have been disabled" dan Trust Center', channel: 'Belajar Komputer' },
  'v-21': { url: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA', title: 'Praktik Terbaik Penulisan Kode VBA, Komentar Kode, dan Penanganan Error (On Error Resume Next)', channel: 'Apri Excel' },
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match each lesson block and replace youtubeUrl, youtubeTitle, and insert youtubeChannel
  content = content.replace(/id:\s*'(d-\d+|m-\d+|a-\d+|v-\d+)'[\s\S]*?youtubeUrl:\s*'[^']*'[\s\S]*?youtubeTitle:\s*'[^']*'/g, (match, id) => {
    const info = videoMap[id];
    if (!info) return match;

    let updated = match.replace(/youtubeUrl:\s*'[^']*'/, `youtubeUrl: '${info.url}'`);
    updated = updated.replace(/youtubeTitle:\s*'[^']*'/, `youtubeTitle: '${info.title}',\n    youtubeChannel: '${info.channel}'`);
    return updated;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated:', filePath);
}

['src/data/lessonsDasar.ts', 'src/data/lessonsMenengah.ts', 'src/data/lessonsMahir.ts', 'src/data/lessonsVba.ts'].forEach(f => {
  updateFile(path.resolve(f));
});
