import { ShortcutItem } from '../types';

export const shortcutsData: ShortcutItem[] = [
  // ================= A. SHORTCUT DASAR & FILE (15 Shortcut) =================
  {
    id: 'sc-01',
    category: 'dasar',
    keys: 'Ctrl + C',
    macKeys: 'Cmd + C',
    action: 'Salin (Copy)',
    description: 'Menyalin teks, angka, format, atau formula sel terpilih ke clipboard.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-02',
    category: 'dasar',
    keys: 'Ctrl + X',
    macKeys: 'Cmd + X',
    action: 'Potong (Cut)',
    description: 'Memotong data sel terpilih untuk dipindahkan ke sel tujuan baru.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-03',
    category: 'dasar',
    keys: 'Ctrl + V',
    macKeys: 'Cmd + V',
    action: 'Tempel (Paste)',
    description: 'Menempelkan data atau rumus dari clipboard ke sel yang sedang aktif.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-04',
    category: 'dasar',
    keys: 'Ctrl + Z',
    macKeys: 'Cmd + Z',
    action: 'Batalkan (Undo)',
    description: 'Membatalkan tindakan pengeditan terakhir yang baru saja dilakukan.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-05',
    category: 'dasar',
    keys: 'Ctrl + Y',
    macKeys: 'Cmd + Y',
    action: 'Ulangi (Redo)',
    description: 'Mengulang kembali tindakan yang sebelumnya dibatalkan oleh Undo.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-06',
    category: 'dasar',
    keys: 'Ctrl + S',
    macKeys: 'Cmd + S',
    action: 'Simpan (Save)',
    description: 'Menyimpan perubahan workbook aktif ke media penyimpanan komputer/cloud.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-07',
    category: 'dasar',
    keys: 'F12',
    macKeys: 'Fn + F12',
    action: 'Simpan Sebagai (Save As)',
    description: 'Membuka dialog Save As untuk menyimpan file dengan nama atau format baru (.xlsx, .xlsm, .pdf).',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-08',
    category: 'dasar',
    keys: 'Ctrl + N',
    macKeys: 'Cmd + N',
    action: 'Buku Kerja Baru (New Workbook)',
    description: 'Membuka lembar kerja Excel kosong baru dalam jendela terpisah.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-09',
    category: 'dasar',
    keys: 'Ctrl + O',
    macKeys: 'Cmd + O',
    action: 'Buka File (Open)',
    description: 'Membuka jendela penjelajah file untuk membuka dokumen Excel yang sudah ada.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-10',
    category: 'dasar',
    keys: 'Ctrl + W',
    macKeys: 'Cmd + W',
    action: 'Tutup Workbook Aktif',
    description: 'Menutup buku kerja yang sedang dibuka tanpa keluar dari aplikasi Excel.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-11',
    category: 'dasar',
    keys: 'Ctrl + P',
    macKeys: 'Cmd + P',
    action: 'Cetak Dokumen (Print)',
    description: 'Membuka pratinjau cetak (Print Preview) dan konfigurasi printer.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-12',
    category: 'dasar',
    keys: 'Ctrl + F',
    macKeys: 'Cmd + F',
    action: 'Cari Teks / Angka (Find)',
    description: 'Membuka dialog pencarian kata kunci atau angka di lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-13',
    category: 'dasar',
    keys: 'Ctrl + H',
    macKeys: 'Cmd + H',
    action: 'Cari dan Ganti (Replace)',
    description: 'Mencari teks atau angka tertentu dan menggantinya dengan nilai baru secara massal.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-14',
    category: 'dasar',
    keys: 'Ctrl + A',
    macKeys: 'Cmd + A',
    action: 'Pilih Semua Data (Select All)',
    description: 'Memilih seluruh blok tabel data yang terhubung atau seluruh sel di worksheet.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-15',
    category: 'dasar',
    keys: 'Ctrl + F1',
    macKeys: 'Cmd + Option + R',
    action: 'Tampilkan / Sembunyikan Ribbon',
    description: 'Menyembunyikan atau menampilkan bilah pita menu atas (Ribbon) untuk memperluas area layar.',
    requiresPhysicalKeyboard: true
  },

  // ================= B. SHORTCUT PENGEDITAN & ISI DATA (16 Shortcut) =================
  {
    id: 'sc-16',
    category: 'edit',
    keys: 'F2',
    macKeys: 'Ctrl + U',
    action: 'Edit Isi Sel Langsung',
    description: 'Mengaktifkan kursor edit di dalam sel aktif tanpa menghapus ketikan sebelumnya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-17',
    category: 'edit',
    keys: 'Alt + Enter',
    macKeys: 'Option + Return',
    action: 'Baris Baru di Dalam Sel',
    description: 'Menyisipkan jeda baris (line break) baru di dalam satu sel yang sama saat mengetik teks panjang.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-18',
    category: 'edit',
    keys: 'Ctrl + Enter',
    macKeys: 'Cmd + Return',
    action: 'Isi Seluruh Sel Terblok Serentak',
    description: 'Mengisi nilai atau rumus yang sama persis ke seluruh sel yang sedang diblok secara serentak.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-19',
    category: 'edit',
    keys: 'Ctrl + D',
    macKeys: 'Cmd + D',
    action: 'Isi ke Bawah (Fill Down)',
    description: 'Menduplikasi isi dan formula dari sel tepat di atasnya ke sel yang sedang aktif di bawahnya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-20',
    category: 'edit',
    keys: 'Ctrl + R',
    macKeys: 'Cmd + R',
    action: 'Isi ke Kanan (Fill Right)',
    description: 'Menduplikasi isi dan formula dari sel tepat di sebelah kirinya ke sel terpilih di sebelah kanan.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-21',
    category: 'edit',
    keys: 'Ctrl + E',
    macKeys: 'Cmd + E',
    action: 'Flash Fill Cerdas',
    description: 'Mengekstrak, memisahkan nama, atau merapikan pola teks secara otomatis tanpa rumus rumit.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-22',
    category: 'edit',
    keys: 'Ctrl + ; (titik koma)',
    macKeys: 'Cmd + ;',
    action: 'Masukkan Tanggal Hari Ini',
    description: 'Mengetik tanggal statis hari ini secara otomatis ke dalam sel aktif.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-23',
    category: 'edit',
    keys: 'Ctrl + Shift + ;',
    macKeys: 'Cmd + Shift + ;',
    action: 'Masukkan Waktu Saat Ini',
    description: 'Mengetik jam dan menit statis saat ini secara otomatis ke dalam sel aktif.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-24',
    category: 'edit',
    keys: 'Ctrl + 1',
    macKeys: 'Cmd + 1',
    action: 'Buka Dialog Format Cells',
    description: 'Membuka jendela lengkap Format Cells untuk mengatur font, border, warna, perataan, dan proteksi.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-25',
    category: 'edit',
    keys: 'Ctrl + Alt + V',
    macKeys: 'Cmd + Option + V',
    action: 'Buka Menu Paste Special',
    description: 'Membuka dialog opsi tempel lengkap: Paste Values, Formats, Formulas, atau Transpose.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-26',
    category: 'edit',
    keys: 'Delete',
    macKeys: 'Delete',
    action: 'Hapus Isi Sel (Clear Contents)',
    description: 'Menghapus teks atau angka di dalam sel tanpa menghilangkan warna latar atau garis border.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-27',
    category: 'edit',
    keys: 'Esc',
    macKeys: 'Esc',
    action: 'Batalkan Pengeditan Sel',
    description: 'Membatalkan ketikan yang sedang dibuat di sel atau Formula Bar dan mengembalikan ke isi semula.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-28',
    category: 'edit',
    keys: 'Alt + Down Arrow',
    macKeys: 'Option + Panah Bawah',
    action: 'Buka Dropdown List / AutoFilter',
    description: 'Membuka daftar pilihan Dropdown Data Validation atau membuka menu pop-up AutoFilter.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-29',
    category: 'edit',
    keys: 'Ctrl + K',
    macKeys: 'Cmd + K',
    action: 'Sisipkan Hyperlink',
    description: 'Membuka jendela pembuatan tautan link ke halaman web, dokumen lain, atau sheet tertentu.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-30',
    category: 'edit',
    keys: 'Shift + F2',
    macKeys: 'Shift + F2',
    action: 'Tambah / Edit Catatan Komentar (Comment)',
    description: 'Menyisipkan atau mengedit catatan kuning di sel yang sedang aktif.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-31',
    category: 'edit',
    keys: 'Alt + H + O + I',
    macKeys: 'Alt + H + O + I',
    action: 'AutoFit Lebar Kolom Otomatis',
    description: 'Menyesuaikan lebar kolom secara otomatis sesuai teks terpanjang secara sekejap.',
    requiresPhysicalKeyboard: true
  },

  // ================= C. SHORTCUT NAVIGASI & SELEKSI DATA (18 Shortcut) =================
  {
    id: 'sc-32',
    category: 'navigasi',
    keys: 'Shift + Spasi',
    macKeys: 'Shift + Spasi',
    action: 'Blok Satu Baris Penuh (Select Entire Row)',
    description: 'Memilih seluruh baris horizontal dari kolom A hingga XFD sekaligus.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-33',
    category: 'navigasi',
    keys: 'Ctrl + Spasi',
    macKeys: 'Ctrl + Spasi',
    action: 'Blok Satu Kolom Penuh (Select Entire Column)',
    description: 'Memilih seluruh kolom vertikal dari baris 1 hingga baris 1.048.576 sekaligus.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-34',
    category: 'navigasi',
    keys: 'Ctrl + Shift + Tombol Panah',
    macKeys: 'Cmd + Shift + Panah',
    action: 'Blok Data Sampai Tepi Terakhir',
    description: 'Memblok seluruh rentang sel terisi dari posisi saat ini hingga tepi batas data kosong.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-35',
    category: 'navigasi',
    keys: 'Shift + Tombol Panah',
    macKeys: 'Shift + Panah',
    action: 'Perluas Blok Sel demi Sel',
    description: 'Memperluas area seleksi sel aktif satu langkah ke arah panah yang ditekan.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-36',
    category: 'navigasi',
    keys: 'Ctrl + Tombol Panah',
    macKeys: 'Cmd + Panah',
    action: 'Lompat ke Tepi Data Terakhir',
    description: 'Melompat cepat ke sel terisi paling ujung atas, bawah, kiri, atau kanan tanpa memblok.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-37',
    category: 'navigasi',
    keys: 'Ctrl + Home',
    macKeys: 'Cmd + Fn + Panah Kiri',
    action: 'Lompat ke Sel Awal (A1)',
    description: 'Mengembalikan fokus layar langsung ke sel pertama sudut kiri atas lembar kerja (A1).',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-38',
    category: 'navigasi',
    keys: 'Ctrl + End',
    macKeys: 'Cmd + Fn + Panah Kanan',
    action: 'Lompat ke Sel Terakhir Digunakan',
    description: 'Melompat ke sel perpotongan baris dan kolom paling akhir yang pernah terisi atau diformat.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-39',
    category: 'navigasi',
    keys: 'Ctrl + Shift + Home',
    macKeys: 'Cmd + Shift + Fn + Panah Kiri',
    action: 'Blok dari Sel Aktif ke A1',
    description: 'Memilih seluruh area sel mulai dari posisi kursor saat ini ke arah atas sampai sel A1.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-40',
    category: 'navigasi',
    keys: 'Ctrl + Shift + End',
    macKeys: 'Cmd + Shift + Fn + Panah Kanan',
    action: 'Blok dari Sel Aktif ke Sel Terakhir',
    description: 'Memilih seluruh area sel mulai dari posisi kursor saat ini ke arah bawah sampai batas data akhir.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-41',
    category: 'navigasi',
    keys: 'Ctrl + Page Down',
    macKeys: 'Option + Panah Kanan',
    action: 'Pindah ke Worksheet Berikutnya',
    description: 'Berpindah ke tab lembar kerja di sebelah kanannya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-42',
    category: 'navigasi',
    keys: 'Ctrl + Page Up',
    macKeys: 'Option + Panah Kiri',
    action: 'Pindah ke Worksheet Sebelumnya',
    description: 'Berpindah ke tab lembar kerja di sebelah kirinya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-43',
    category: 'navigasi',
    keys: 'F5 atau Ctrl + G',
    macKeys: 'F5 atau Cmd + G',
    action: 'Buka Menu Go To / Special Cells',
    description: 'Melompat ke alamat sel tertentu, Named Range, atau sel khusus (sel kosong, rumus, error).',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-44',
    category: 'navigasi',
    keys: 'Tab',
    macKeys: 'Tab',
    action: 'Pindah Satu Kolom ke Kanan',
    description: 'Memindahkan kursor sel aktif ke sel di sebelah kanan.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-45',
    category: 'navigasi',
    keys: 'Shift + Tab',
    macKeys: 'Shift + Tab',
    action: 'Pindah Satu Kolom ke Kiri',
    description: 'Memindahkan kursor sel aktif ke sel di sebelah kiri.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-46',
    category: 'navigasi',
    keys: 'Enter',
    macKeys: 'Return',
    action: 'Pindah Satu Baris ke Bawah',
    description: 'Memindahkan kursor sel aktif ke sel di baris bawahnya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-47',
    category: 'navigasi',
    keys: 'Shift + Enter',
    macKeys: 'Shift + Return',
    action: 'Pindah Satu Baris ke Atas',
    description: 'Memindahkan kursor sel aktif ke sel di baris atasnya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-48',
    category: 'navigasi',
    keys: 'Ctrl + Backspace',
    macKeys: 'Cmd + Delete',
    action: 'Kembalikan Layar ke Sel Aktif',
    description: 'Menggulir tampilan layar kembali ke posisi sel aktif tanpa menghilangkan blok seleksi area yang luas.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-49',
    category: 'navigasi',
    keys: 'Ctrl + Tab',
    macKeys: 'Ctrl + Tab',
    action: 'Beralih Antar File Workbook',
    description: 'Beralih cepat antar jendela file Excel yang sedang dibuka bersamaan.',
    requiresPhysicalKeyboard: true
  },

  // ================= D. SHORTCUT FORMAT & BARIS/KOLOM (18 Shortcut) =================
  {
    id: 'sc-50',
    category: 'format',
    keys: 'Ctrl + B',
    macKeys: 'Cmd + B',
    action: 'Tebal (Bold)',
    description: 'Mengaktifkan atau menonaktifkan cetak tebal pada teks atau angka sel terpilih.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-51',
    category: 'format',
    keys: 'Ctrl + I',
    macKeys: 'Cmd + I',
    action: 'Miring (Italic)',
    description: 'Mengaktifkan atau menonaktifkan cetak miring pada teks sel.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-52',
    category: 'format',
    keys: 'Ctrl + U',
    macKeys: 'Cmd + U',
    action: 'Garis Bawah (Underline)',
    description: 'Mengaktifkan atau menonaktifkan garis bawah tunggal pada teks sel.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-53',
    category: 'format',
    keys: 'Ctrl + 5',
    macKeys: 'Cmd + Shift + X',
    action: 'Coret Teks (Strikethrough)',
    description: 'Menerapkan garis coret mendatar di tengah teks, cocok untuk menandai tugas selesai.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-54',
    category: 'format',
    keys: 'Ctrl + Shift + ~ (Tilde)',
    macKeys: 'Ctrl + Shift + ~',
    action: 'Format General (Bawaan)',
    description: 'Mengembalikan format angka sel ke format default General tanpa aturan khusus.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-55',
    category: 'format',
    keys: 'Ctrl + Shift + $',
    macKeys: 'Ctrl + Shift + $',
    action: 'Format Mata Uang (Currency)',
    description: 'Menerapkan format mata uang dengan simbol mata uang dan pemisah ribuan titik/koma.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-56',
    category: 'format',
    keys: 'Ctrl + Shift + %',
    macKeys: 'Ctrl + Shift + %',
    action: 'Format Persentase (%)',
    description: 'Mengalikan tampilan dengan 100 dan menerapkan simbol persen (%) tanpa desimal.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-57',
    category: 'format',
    keys: 'Ctrl + Shift + #',
    macKeys: 'Ctrl + Shift + #',
    action: 'Format Tanggal (dd-mmm-yy)',
    description: 'Menerapkan format tanggal lengkap hari, nama bulan ringkas, dan tahun.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-58',
    category: 'format',
    keys: 'Ctrl + Shift + @',
    macKeys: 'Ctrl + Shift + @',
    action: 'Format Jam & Waktu (Time)',
    description: 'Menerapkan format jam dan menit (hh:mm AM/PM).',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-59',
    category: 'format',
    keys: 'Ctrl + Shift + !',
    macKeys: 'Ctrl + Shift + !',
    action: 'Format Angka (Number 2 Desimal)',
    description: 'Menerapkan format angka dengan pemisah ribuan dan 2 digit desimal di belakang koma.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-60',
    category: 'format',
    keys: 'Ctrl + Shift + &',
    macKeys: 'Cmd + Option + 0',
    action: 'Pasang Garis Batas Luar (Outline Border)',
    description: 'Menerapkan garis bingkai border tipis di sekeliling luar sel yang diblok.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-61',
    category: 'format',
    keys: 'Ctrl + Shift + _ (Underscore)',
    macKeys: 'Cmd + Option + _',
    action: 'Hapus Semua Garis Batas (No Border)',
    description: 'Menghilangkan seluruh garis border dari sel atau rentang tabel yang dipilih.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-62',
    category: 'format',
    keys: 'Ctrl + 9',
    macKeys: 'Ctrl + 9',
    action: 'Sembunyikan Baris (Hide Row)',
    description: 'Menyembunyikan baris-baris data terpilih dari pandangan lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-63',
    category: 'format',
    keys: 'Ctrl + Shift + 9',
    macKeys: 'Ctrl + Shift + 9',
    action: 'Tampilkan Baris Tersembunyi (Unhide Row)',
    description: 'Memunculkan kembali baris yang sebelumnya disembunyikan.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-64',
    category: 'format',
    keys: 'Ctrl + 0 (angka nol)',
    macKeys: 'Ctrl + 0',
    action: 'Sembunyikan Kolom (Hide Column)',
    description: 'Menyembunyikan kolom-kolom data terpilih dari pandangan lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-65',
    category: 'format',
    keys: 'Ctrl + Shift + 0',
    macKeys: 'Ctrl + Shift + 0',
    action: 'Tampilkan Kolom Tersembunyi (Unhide Column)',
    description: 'Memunculkan kembali kolom yang sebelumnya disembunyikan.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-66',
    category: 'format',
    keys: 'Alt + Shift + Panah Kanan',
    macKeys: 'Cmd + Shift + K',
    action: 'Kelompokkan Baris / Kolom (Group Outline)',
    description: 'Membuat grup outline dengan tombol expand/collapse [+] [-] di samping lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-67',
    category: 'format',
    keys: 'Alt + Shift + Panah Kiri',
    macKeys: 'Cmd + Shift + J',
    action: 'Lepas Kelompok Baris (Ungroup)',
    description: 'Menghapus pengelompokan outline baris atau kolom yang dipilih.',
    requiresPhysicalKeyboard: true
  },

  // ================= E. SHORTCUT RUMUS, TABEL & DATA (18 Shortcut) =================
  {
    id: 'sc-68',
    category: 'rumus',
    keys: 'Alt + =',
    macKeys: 'Cmd + Shift + T',
    action: 'AutoSum Penjumlahan Kilat',
    description: 'Menyisipkan rumus =SUM() secara otomatis untuk menjumlahkan barisan angka di atas atau di sebelah kiri.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-69',
    category: 'rumus',
    keys: 'F4',
    macKeys: 'Cmd + T',
    action: 'Kunci Sel Absolut ($) / Ulangi Aksi',
    description: 'Mengubah referensi sel menjadi absolut ($A$1) saat edit rumus, atau mengulang aksi terakhir.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-70',
    category: 'rumus',
    keys: 'Shift + F3',
    macKeys: 'Shift + F3',
    action: 'Dialog Sisipkan Fungsi (Insert Function)',
    description: 'Membuka jendela pencarian rumus dan panduan argumen fungsi bawaan Excel.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-71',
    category: 'rumus',
    keys: 'Ctrl + ` (Backtick)',
    macKeys: 'Ctrl + `',
    action: 'Tampilkan / Sembunyikan Semua Rumus',
    description: 'Beralih antara melihat hasil angka dan melihat teks rumus asli di seluruh sel lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-72',
    category: 'rumus',
    keys: 'Ctrl + Shift + L',
    macKeys: 'Cmd + Shift + F',
    action: 'Aktifkan / Nonaktifkan AutoFilter',
    description: 'Memunculkan atau mematikan tombol panah dropdown filter pada baris judul data.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-73',
    category: 'rumus',
    keys: 'Ctrl + T',
    macKeys: 'Cmd + T',
    action: 'Buat Tabel Resmi (Format as Table)',
    description: 'Mengubah rentang data menjadi objek Excel Table interaktif dengan warna selang-seling dan filter.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-74',
    category: 'rumus',
    keys: 'Ctrl + Shift + +',
    macKeys: 'Cmd + Shift + +',
    action: 'Sisipkan Baris / Kolom Baru (Insert)',
    description: 'Membuka dialog untuk menyisipkan sel baru, baris baru, atau kolom baru ke lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-75',
    category: 'rumus',
    keys: 'Ctrl + - (Minus)',
    macKeys: 'Cmd + -',
    action: 'Hapus Baris / Kolom (Delete)',
    description: 'Menghapus sel terpilih, seluruh baris terpilih, atau seluruh kolom terpilih.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-76',
    category: 'rumus',
    keys: 'Alt + F1',
    macKeys: 'Option + F1',
    action: 'Buat Grafik Batang Instan',
    description: 'Membuat diagram grafik batang dari data terpilih langsung di sheet yang sama dalam 1 detik.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-77',
    category: 'rumus',
    keys: 'F11',
    macKeys: 'Fn + F11',
    action: 'Buat Grafik di Sheet Terpisah',
    description: 'Membuat grafik batang dari data terpilih di tab Chart Sheet baru tersendiri.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-78',
    category: 'rumus',
    keys: 'Ctrl + F3',
    macKeys: 'Cmd + F3',
    action: 'Buka Name Manager',
    description: 'Membuka pengelola Named Range untuk membuat, mengedit, atau menghapus nama rentang sel.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-79',
    category: 'rumus',
    keys: 'Ctrl + [ (Bracket Kiri)',
    macKeys: 'Ctrl + [',
    action: 'Lacak Sel Sumber Rumus (Trace Precedents)',
    description: 'Melompat langsung ke sel sumber yang nilainya dirujuk oleh formula aktif saat ini.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-80',
    category: 'rumus',
    keys: 'Ctrl + ] (Bracket Kanan)',
    macKeys: 'Ctrl + ]',
    action: 'Lacak Sel Bergantung (Trace Dependents)',
    description: 'Melompat ke sel lain yang perhitungannya bergantung pada nilai sel aktif saat ini.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-81',
    category: 'rumus',
    keys: 'F9',
    macKeys: 'Fn + F9',
    action: 'Hitung Ulang Semua Rumus / Evaluasi Bagian',
    description: 'Menghitung ulang seluruh workbook, atau mengevaluasi potongan rumus yang sedang disorot di Formula Bar.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-82',
    category: 'rumus',
    keys: 'Shift + F9',
    macKeys: 'Shift + Fn + F9',
    action: 'Hitung Ulang Lembar Kerja Aktif Saja',
    description: 'Memaksa Excel menghitung ulang rumus-rumus di worksheet yang sedang dibuka saja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-83',
    category: 'rumus',
    keys: 'Alt + N + V',
    macKeys: 'Option + N + V',
    action: 'Buat PivotTable Cepat',
    description: 'Membuka wizard pembuatan PivotTable dari tabel yang sedang dipilih.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-84',
    category: 'rumus',
    keys: 'Alt + A + M',
    macKeys: 'Option + A + M',
    action: 'Hapus Duplikat (Remove Duplicates)',
    description: 'Membuka jendela pembersihan data duplikat secara instan.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-85',
    category: 'rumus',
    keys: 'Alt + F11',
    macKeys: 'Option + Fn + F11',
    action: 'Buka Visual Basic Editor (VBE)',
    description: 'Membuka jendela editor kode Macro dan script bahasa pemrograman VBA.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },

  // ================= F. SHORTCUT PIVOTTABLE & SLICER (8 Shortcut) =================
  {
    id: 'sc-86',
    category: 'pivottable',
    keys: 'Alt + N + V + T',
    macKeys: 'Option + N + V',
    action: 'Buat PivotTable dari Tabel Aktif',
    description: 'Membuka kotak dialog Create PivotTable dari sumber tabel yang sedang aktif.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-87',
    category: 'pivottable',
    keys: 'Alt + F5',
    macKeys: 'Option + F5',
    action: 'Refresh PivotTable Aktif',
    description: 'Memperbarui data dan rekap perhitungan PivotTable yang sedang dipilih.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-88',
    category: 'pivottable',
    keys: 'Ctrl + Alt + F5',
    macKeys: 'Cmd + Option + F5',
    action: 'Refresh All (Semua PivotTable & Koneksi)',
    description: 'Memperbarui seluruh PivotTable, tabel query data, dan koneksi eksternal di buku kerja.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-89',
    category: 'pivottable',
    keys: 'Alt + Shift + Panah Kanan',
    macKeys: 'Option + Shift + Panah Kanan',
    action: 'Kelompokkan Data Pivot (Grouping Tanggal/Angka)',
    description: 'Mengelompokkan data tanggal menjadi Bulan, Kuartal, atau Tahun secara otomatis di PivotTable.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-90',
    category: 'pivottable',
    keys: 'Alt + Shift + Panah Kiri',
    macKeys: 'Option + Shift + Panah Kiri',
    action: 'Lepas Kelompok Data (Ungroup Pivot)',
    description: 'Mengembalikan data tanggal atau angka yang dikelompokkan ke format semula.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-91',
    category: 'pivottable',
    keys: 'Alt + N + S + F',
    macKeys: 'Option + N + S',
    action: 'Sisipkan Slicer Interaktif',
    description: 'Membuka jendela pemilihan Slicer untuk membuat tombol filter visual pada dashboard.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-92',
    category: 'pivottable',
    keys: 'Alt + J + T + L',
    macKeys: 'Option + J + T + L',
    action: 'Tampilkan / Tutup Panel Field List Pivot',
    description: 'Memunculkan kembali panel daftar kolom Fields di sebelah kanan jika tidak sengaja tertutup.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-93',
    category: 'pivottable',
    keys: 'F10, lalu J, T, D',
    macKeys: 'Fn + F10, J, T, D',
    action: 'Buka Opsi PivotTable (PivotTable Options)',
    description: 'Membuka pengaturan tata letak, format sel kosong, dan opsi pembaruan data PivotTable.',
    requiresPhysicalKeyboard: true
  },

  // ================= G. SHORTCUT MACRO & VBA DEVELOPER (10 Shortcut) =================
  {
    id: 'sc-94',
    category: 'vba',
    keys: 'Alt + F8',
    macKeys: 'Option + F8',
    action: 'Buka Dialog Daftar Macro (Macro Run)',
    description: 'Membuka dialog Macro untuk memilih nama Sub dan menjalankannya atau mengedit kodenya.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-95',
    category: 'vba',
    keys: 'F5 (di Editor VBE)',
    macKeys: 'Fn + F5',
    action: 'Jalankan Prosedur Sub (Run Sub)',
    description: 'Mengeksekusi langsung prosedur Sub atau UserForm yang sedang aktif di jendela kode VBE.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-96',
    category: 'vba',
    keys: 'F8 (di Editor VBE)',
    macKeys: 'Fn + F8',
    action: 'Step Into (Jalankan Baris per Baris)',
    description: 'Menjalankan kode satu per satu baris dengan sorotan kuning untuk melacak alur eksekusi (debugging).',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-97',
    category: 'vba',
    keys: 'Shift + F8',
    macKeys: 'Shift + Fn + F8',
    action: 'Step Over Prosedur',
    description: 'Menjalankan prosedur Sub yang dipanggil sekaligus tanpa harus masuk menelusuri tiap baris di dalamnya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-98',
    category: 'vba',
    keys: 'Ctrl + Break / Pause',
    macKeys: 'Cmd + . (Period)',
    action: 'Hentikan Paksa Eksekusi Macro (Interrupt)',
    description: 'Menghentikan seketika loop Macro tak terbatas (infinite loop) yang membuat Excel macet.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-99',
    category: 'vba',
    keys: 'F9 (di Editor VBE)',
    macKeys: 'Fn + F9',
    action: 'Pasang / Lepas Titik Henti (Toggle Breakpoint)',
    description: 'Menandai baris kode dengan titik merah agar eksekusi Macro berhenti sejenak di baris tersebut.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-100',
    category: 'vba',
    keys: 'Ctrl + G (di Editor VBE)',
    macKeys: 'Cmd + G',
    action: 'Buka Jendela Immediate Window',
    description: 'Membuka konsol langsung untuk menguji perintah VBA atau mencetak nilai Debug.Print.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-101',
    category: 'vba',
    keys: 'F2 (di Editor VBE)',
    macKeys: 'Fn + F2',
    action: 'Buka Object Browser',
    description: 'Melihat pustaka lengkap semua class, properti, dan metode objek Excel bawaan VBA.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-102',
    category: 'vba',
    keys: 'F7',
    macKeys: 'Fn + F7',
    action: 'Lihat Jendela Kode (View Code)',
    description: 'Langsung melompat dari objek lembar kerja ke modul kode VBA di belakangnya.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-103',
    category: 'vba',
    keys: 'Alt + Q',
    macKeys: 'Cmd + Q (VBE)',
    action: 'Tutup VBE dan Kembali ke Excel',
    description: 'Menutup jendela Visual Basic Editor dan kembali fokus ke lembar kerja spreadsheet Excel.',
    requiresPhysicalKeyboard: true
  },

  // ================= H. SHORTCUT AUDIT RUMUS & TROUBLESHOOTING (7 Shortcut) =================
  {
    id: 'sc-104',
    category: 'audit',
    keys: 'Alt + M + V',
    macKeys: 'Option + M + V',
    action: 'Evaluasi Rumus Langkah demi Langkah',
    description: 'Membuka jendela Evaluate Formula untuk melihat cara Excel menghitung setiap bagian rumus secara bertahap.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-105',
    category: 'audit',
    keys: 'Alt + M + A + A',
    macKeys: 'Option + M + A + A',
    action: 'Hapus Semua Panah Audit (Remove Arrows)',
    description: 'Menghilangkan semua garis panah biru/merah hasil pelacakan Trace Precedents dan Trace Dependents.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-106',
    category: 'audit',
    keys: 'Alt + M + W',
    macKeys: 'Option + M + W',
    action: 'Buka Jendela Watch Window',
    description: 'Membuka panel pemantau untuk memantau nilai dan formula sel kritis di sheet mana pun secara terus-menerus.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-107',
    category: 'audit',
    keys: 'Alt + M + E',
    macKeys: 'Option + M + E',
    action: 'Jalankan Pengecekan Error (Error Checking)',
    description: 'Memulai penelusuran otomatis untuk menemukan sel-sel yang mengalami error perhitungan di lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-108',
    category: 'audit',
    keys: 'Ctrl + \\',
    macKeys: 'Ctrl + \\',
    action: 'Sorot Sel Berbeda pada Baris (Row Differences)',
    description: 'Memilih semua sel dalam baris terpilih yang isinya tidak cocok dengan sel pembanding di baris tersebut.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-109',
    category: 'audit',
    keys: 'Ctrl + Shift + |',
    macKeys: 'Ctrl + Shift + |',
    action: 'Sorot Sel Berbeda pada Kolom (Column Differences)',
    description: 'Memilih semua sel dalam kolom terpilih yang isinya berbeda dari sel acuan di kolom tersebut.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-110',
    category: 'audit',
    keys: 'F9 pada Formula Bar',
    macKeys: 'Fn + F9',
    action: 'Hitung Hasil Potongan Rumus Terpilih',
    description: 'Sorot salah satu argumen di Formula Bar lalu tekan F9 untuk mengintip hasil sementaranya (tekan Esc untuk membatalkan).',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-111',
    category: 'edit',
    keys: 'Alt + H + V + V',
    macKeys: 'Cmd + Option + V lalu V',
    action: 'Paste Values (Tempel Nilai Saja)',
    description: 'Menempel hanya angka atau teks hasil kalkulasi tanpa membawa rumus atau warna sel.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-112',
    category: 'edit',
    keys: 'Alt + H + V + T',
    macKeys: 'Cmd + Option + V lalu T',
    action: 'Paste Transpose (Tukar Baris Jadi Kolom)',
    description: 'Menempel data horizontal menjadi vertikal atau sebaliknya secara otomatis.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-113',
    category: 'format',
    keys: 'Alt + H + B + A',
    macKeys: 'Option + H + B + A',
    action: 'Beri Semua Garis Batas (All Borders)',
    description: 'Menerapkan garis batas tabel penuh pada seluruh sel yang dipilih secara instan.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-114',
    category: 'format',
    keys: 'Alt + H + B + N',
    macKeys: 'Option + H + B + N',
    action: 'Hapus Semua Garis Batas (No Border)',
    description: 'Membersihkan seluruh garis tepi pada tabel yang disorot tanpa mengubah isi data.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-115',
    category: 'dasar',
    keys: 'Alt + A + M',
    macKeys: 'Option + A + M',
    action: 'Hapus Duplikat Cepat (Remove Duplicates Accelerator)',
    description: 'Membuka jendela pembersihan baris duplikat seketika lewat tombol akselerator Alt ribbon.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-116',
    category: 'edit',
    keys: 'Alt + A + V + V',
    macKeys: 'Option + A + V + V',
    action: 'Buka Validasi Data (Data Validation Dropdown)',
    description: 'Membuka dialog pengaturan validasi input dan pembuatan daftar drop-down.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-117',
    category: 'rumus',
    keys: 'Shift + F3',
    macKeys: 'Shift + Fn + F3',
    action: 'Buka Dialog Sisipkan Fungsi (Insert Function)',
    description: 'Membuka jendela pencarian rumus bawaan Excel lengkap dengan bantuan setiap argumen.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-118',
    category: 'navigasi',
    keys: 'Alt + Page Down',
    macKeys: 'Option + Page Down',
    action: 'Geser Tampilan 1 Layar ke Kanan',
    description: 'Menggulir lembar kerja secara horizontal sejauh satu lebar monitor tanpa menyentuh mouse.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-119',
    category: 'navigasi',
    keys: 'Alt + Page Up',
    macKeys: 'Option + Page Up',
    action: 'Geser Tampilan 1 Layar ke Kiri',
    description: 'Menggulir kembali lembar kerja ke arah kiri dengan cepat.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-120',
    category: 'audit',
    keys: 'Ctrl + Shift + {',
    macKeys: 'Ctrl + Shift + {',
    action: 'Pilih Semua Sel Precedent Lengkap (Direct & Indirect)',
    description: 'Menyeleksi seluruh sel pendukung kalkulasi rumus secara menyeluruh bertingkat.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-121',
    category: 'audit',
    keys: 'Ctrl + Shift + }',
    macKeys: 'Ctrl + Shift + }',
    action: 'Pilih Semua Sel Dependent Lengkap (Direct & Indirect)',
    description: 'Menyeleksi seluruh sel yang bergantung pada sel aktif di seluruh lembar kerja.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-122',
    category: 'vba',
    keys: 'Ctrl + Spasi (di Editor VBE)',
    macKeys: 'Ctrl + Space',
    action: 'IntelliSense / Lengkapi Kode Otomatis',
    description: 'Menampilkan daftar saran otomatis kata kunci objek, properti, dan metode saat mengetik kode VBA.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-123',
    category: 'vba',
    keys: 'Ctrl + I (di Editor VBE)',
    macKeys: 'Cmd + I',
    action: 'Quick Info Argumen Prosedur',
    description: 'Menampilkan pop-up petunjuk urutan parameter fungsi atau Sub yang sedang diketik di VBE.',
    requiresPhysicalKeyboard: true
  },
  {
    id: 'sc-124',
    category: 'format',
    keys: 'Alt + H + O + I',
    macKeys: 'Option + H + O + I',
    action: 'AutoFit Column Width (Lebar Kolom Pas Otomatis)',
    description: 'Menyesuaikan lebar kolom secara otomatis mengikuti isi teks terpanjang dalam kolom.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  },
  {
    id: 'sc-125',
    category: 'format',
    keys: 'Alt + H + O + A',
    macKeys: 'Option + H + O + A',
    action: 'AutoFit Row Height (Tinggi Baris Pas Otomatis)',
    description: 'Menyesuaikan tinggi baris secara pas agar teks multi-baris tidak terpotong rapi.',
    requiresPhysicalKeyboard: true,
    isPopularForJobTest: true
  }
];

export function getShortcutCategoryLabel(cat: string): string {
  switch (cat) {
    case 'dasar':
      return 'Dasar & File';
    case 'edit':
      return 'Pengeditan & Isi';
    case 'navigasi':
      return 'Navigasi & Seleksi';
    case 'format':
      return 'Format & Baris/Kolom';
    case 'rumus':
      return 'Rumus & Tabel';
    case 'pivottable':
      return 'PivotTable & Slicer';
    case 'vba':
      return 'Macro & VBA Developer';
    case 'audit':
      return 'Audit & Evaluasi Rumus';
    default:
      return 'Shortcut';
  }
}
