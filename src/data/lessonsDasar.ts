import { Lesson } from '../types';

export const lessonsDasar: Lesson[] = [
  {
    id: 'd-01',
    category: 'dasar',
    number: 1,
    title: 'Mengenal Microsoft Excel',
    shortDesc: 'Pengantar antarmuka, ribbon, formula bar, dan konsep dasar spreadsheet.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Microsoft Excel adalah aplikasi pengolah lembar kerja (spreadsheet) terpopuler di dunia yang digunakan untuk mencatat, menghitung, menganalisis, dan memvisualisasikan data angka maupun teks.',
    explanation: [
      'Microsoft Excel tersusun atas kotak-kotak kecil yang disebut sel (cell), yang tersusun dalam baris (row) dan kolom (column).',
      'Antarmuka utama Excel terdiri dari Ribbon (menu perintah di bagian atas), Formula Bar (tempat mengetik dan melihat isi rumus), Worksheet (area kerja utama), dan Status Bar di bagian bawah.',
      'Di Android maupun komputer, konsep sel tetap sama: setiap sel memiliki alamat unik berdasarkan pertemuan kolom (huruf A, B, C...) dan baris (angka 1, 2, 3...).'
    ],
    sampleData: {
      headers: ['A', 'B', 'C'],
      rows: [
        ['Nama Barang', 'Jumlah', 'Harga Satuan'],
        ['Buku Tulis', 10, 'Rp 5.000'],
        ['Pulpen Gel', 25, 'Rp 3.500']
      ],
      caption: 'Contoh tampilan kisi sel sederhana di Excel'
    },
    keySteps: [
      'Buka aplikasi Microsoft Excel di perangkat Anda.',
      'Pilih "Blank Workbook" (Buku Kerja Kosong).',
      'Perhatikan pita Ribbon di bagian atas (Home, Insert, Page Layout, Formulas, Data).',
      'Ketuk atau klik salah satu kotak sel untuk mulai mengetik data.'
    ],
    importantTips: [
      'Gunakan tombol TAB pada keyboard untuk berpindah ke kolom kanan berikutnya, atau tombol ENTER untuk turun ke baris berikutnya.',
      'Gunakan fitur zoom di sudut kanan bawah jika teks terasa terlalu kecil di layar HP.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengira rumus langsung berfungsi tanpa tanda sama dengan (=).',
        solution: 'Setiap rumus atau formula di Excel selalu WAJIB diawali dengan karakter sama dengan (=).'
      }
    ],
    practiceTask: 'Buka lembar kerja baru, ketuk sel A1, ketik "Daftar Belanja", lalu ketik nama 3 barang di bawahnya (A2, A3, A4).',
    youtubeUrl: 'https://www.youtube.com/watch?v=JMyCQ1OVsDg',
    youtubeTitle: 'Belajar Excel dari Nol - Episode 1: Pengenalan Interface dan Konsep Dasar Spreadsheet',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-02',
    category: 'dasar',
    number: 2,
    title: 'Fungsi Excel dalam Pekerjaan Sehari-hari',
    shortDesc: 'Aplikasi nyata Excel untuk keuangan rumah tangga, toko, administrasi, dan kantor.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Excel bukan hanya untuk akuntan, tetapi alat produktivitas serbaguna bagi pemilik warung, staf administrasi, guru, mahasiswa, hingga manajer proyek.',
    explanation: [
      'Pencatatan Keuangan: Membuat buku kas masuk & keluar, rekap tagihan, dan anggaran bulanan otomatis.',
      'Manajemen Stok & Inventaris: Melacak persediaan barang dagang, stok minimum, dan mutasi barang.',
      'Pengelolaan Nilai & Absensi: Menghitung rata-rata nilai siswa, ranking, dan rekap kehadiran.',
      'Perencanaan & Penjadwalan: Membuat jadwal piket, timeline pekerjaan, dan daftar prioritas harian.'
    ],
    sampleData: {
      headers: ['Kebutuhan', 'Fitur Excel yang Digunakan', 'Hasil'],
      rows: [
        ['Hitung Total Belanja', 'Fungsi SUM', 'Total akurat tanpa kalkulator'],
        ['Laporan Untung Rugi', 'Tabel & Rumus Kurang (=B2-C2)', 'Profit langsung terlihat'],
        ['Data Kontak Pelanggan', 'Filter & Sort', 'Mudah mencari nomor HP']
      ]
    },
    keySteps: [
      'Tentukan tujuan pencatatan Anda terlebih dahulu (misal: pengeluaran harian).',
      'Buat baris judul kolom yang jelas di baris 1 (misal: Tanggal, Keterangan, Jumlah).',
      'Gunakan format angka mata uang untuk mempermudah pembacaan rupiah.'
    ],
    importantTips: [
      'Hindari menggabungkan teks dan angka di satu sel yang akan dihitung (contoh: tulis 50000, jangan ketik "50 ribu" di sel tersebut).'
    ],
    commonMistakes: [
      {
        mistake: 'Mengetik "Rp 50.000" secara manual satu per satu sebagai teks.',
        solution: 'Cukup ketik angkanya saja (50000), lalu ubah Number Format menjadi Currency / Accounting Rupiah.'
      }
    ],
    practiceTask: 'Rancang tabel sederhana dengan 3 kolom: Tanggal, Nama Pengeluaran, dan Nominal.',
    youtubeUrl: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ',
    youtubeTitle: 'Microsoft Excel Tutorial for Beginners - Panduan Lengkap Fungsi Excel',
    youtubeChannel: 'Kevin Stratvert'
  },
  {
    id: 'd-03',
    category: 'dasar',
    number: 3,
    title: 'Mengenal Workbook dan Worksheet',
    shortDesc: 'Perbedaan buku kerja (file .xlsx) dan lembar kerja (tab Sheet), cara menambah dan menamai.',
    difficulty: 'Dasar',
    readTime: '3 menit',
    summary: 'Workbook adalah keseluruhan file dokumen Excel Anda (seperti satu buku), sedangkan Worksheet atau Sheet adalah halaman-halaman lembaran di dalam buku tersebut.',
    explanation: [
      'Satu file Workbook dapat menampung puluhan bahkan ratusan Worksheet.',
      'Di bagian bawah lembar kerja terdapat tab sheet bernama default "Sheet1". Anda dapat menekan tanda (+) untuk menambah sheet baru.',
      'Anda bisa mengubah nama sheet, memberi warna tab, memindahkan urutan sheet, atau menyalin seluruh isi sheet ke tab lain.'
    ],
    keySteps: [
      'Klik kanan pada tab Sheet1 di bawah (atau ketuk lama di layar Android).',
      'Pilih "Rename", lalu beri nama yang bermakna (misal: "Januari 2026").',
      'Tekan tombol ikon plus (+) di samping nama tab untuk menambah "Februari 2026".',
      'Untuk memberi warna pembeda, pilih "Tab Color" lalu tentukan warna hijau atau biru.'
    ],
    importantTips: [
      'Nama sheet tidak boleh melebihi 31 karakter dan tidak boleh mengandung karakter khusus seperti: \\ / ? * : [ ].'
    ],
    commonMistakes: [
      {
        mistake: 'Membuat file baru untuk setiap bulan sehingga file berserakan.',
        solution: 'Cukup gunakan satu Workbook per tahun, dan bagi setiap bulan ke dalam tab Worksheet yang berbeda.'
      }
    ],
    practiceTask: 'Buat satu workbook dengan 3 tab sheet: "Kas Masuk", "Kas Keluar", dan "Rekapitulasi". Beri warna tab yang berbeda.',
    youtubeUrl: 'https://www.youtube.com/watch?v=PzNF8MJWqpY',
    youtubeTitle: 'Belajar Excel dari Nol Episode 01: Workbook, Worksheet, Baris, dan Kolom',
    youtubeChannel: 'Jadi Andalan Official'
  },
  {
    id: 'd-04',
    category: 'dasar',
    number: 4,
    title: 'Mengenal Row, Column, Cell, dan Range',
    shortDesc: 'Fondasi navigasi koordinat sel: baris angka horizontal, kolom huruf vertikal, dan rentang area.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Koordinat adalah jantung Excel. Tanpa memahami konsep baris, kolom, sel, dan range, Anda akan kesulitan menyusun rumus yang benar.',
    explanation: [
      'Column (Kolom): Lajur tegak vertikal yang ditandai dengan huruf alfabet (A, B, C, ... Z, AA, AB, hingga XFD).',
      'Row (Baris): Lajur mendatar horizontal yang ditandai dengan angka urut (1, 2, 3, hingga 1.048.576).',
      'Cell (Sel): Titik pertemuan antara satu kolom dan satu baris. Contoh: Sel B3 adalah pertemuan kolom B dengan baris 3.',
      'Range (Rentang): Kumpulan dua atau lebih sel yang dipilih sekaligus. Ditulis dengan tanda titik dua (:). Contoh: A1:C5 berarti seluruh sel dari kotak A1 sampai C5.'
    ],
    sampleData: {
      headers: ['Notasi', 'Arti', 'Contoh Nilai'],
      rows: [
        ['B2', 'Satu sel pada kolom B, baris 2', 'Nama Produk'],
        ['A1:A10', 'Rentang 10 sel vertikal kolom A', 'Daftar No 1-10'],
        ['A1:D1', 'Rentang 4 sel horizontal baris 1', 'Judul Header Tabel'],
        ['B2:E6', 'Rentang blok persegi 20 sel', 'Tabel Penjualan']
      ]
    },
    keySteps: [
      'Lihat Name Box di sudut kiri atas Formula Bar untuk melihat alamat sel aktif saat ini.',
      'Ketuk dan tahan sel A1, lalu seret jari Anda hingga sel C3 untuk memilih range A1:C3.',
      'Ketik rentang =SUM(B2:B10) untuk menghitung seluruh angka di dalam rentang tersebut.'
    ],
    importantTips: [
      'Huruf besar atau kecil pada notasi sel tidak dibedakan oleh Excel; Anda bisa mengetik b2 atau B2 sama saja.'
    ],
    commonMistakes: [
      {
        mistake: 'Menulis rentang menggunakan tanda minus seperti A1-A10.',
        solution: 'Di Excel, tanda pemisah rentang adalah titik dua (:), contoh: A1:A10.'
      }
    ],
    practiceTask: 'Pilih rentang B2:D5 pada lembar kerja Anda, perhatikan area yang terarsir biru/hijau, lalu isi angka 10 di semua sel tersebut.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Belajar Excel dari Nol Episode 2: Memahami Baris, Kolom, Sel, dan Range',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-05',
    category: 'dasar',
    number: 5,
    title: 'Cara Membuat, Membuka, dan Menyimpan File Excel',
    shortDesc: 'Panduan lengkap membuat dokumen baru, membuka file, auto-save, dan format penyimpanan.',
    difficulty: 'Dasar',
    readTime: '3 menit',
    summary: 'Pelajari alur kerja dasar file Excel agar hasil ketikan Anda tidak hilang dan mudah ditemukan kembali.',
    explanation: [
      'Untuk membuat file baru: Pilih menu File > New > Blank Workbook.',
      'Untuk menyimpan pertama kali: Pilih menu File > Save As, tentukan lokasi folder perangkat (Storage / OneDrive), lalu beri nama file.',
      'Shortcut simpan cepat di komputer adalah Ctrl + S. Di HP Android, aktifkan fitur AutoSave agar perubahan otomatis tersimpan setiap beberapa detik.'
    ],
    keySteps: [
      'Ketik beberapa data di lembar kerja Anda.',
      'Tekan ikon Disket atau buka menu File > Save As.',
      'Beri nama file yang spesifik, misalnya: Laporan_Keuangan_Maret_2026.xlsx.',
      'Pastikan format file default adalah (.xlsx).'
    ],
    importantTips: [
      'Gunakan tanggal atau versi pada nama file jika Anda sering memperbarui dokumen (misal: Stok_Barang_2026_v1.xlsx).'
    ],
    commonMistakes: [
      {
        mistake: 'Menutup aplikasi tanpa menyimpan atau mengira tombol Back di HP otomatis menyimpan seluruh pekerjaan.',
        solution: 'Selalu biasakan menekan tombol centang (simpan) atau Ctrl+S sebelum keluar.'
      }
    ],
    practiceTask: 'Simpan file latihan Anda dengan nama "Latihan_Tutor_Excel_01.xlsx" di folder dokumen perangkat.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Cara Membuka, Mengedit, dan Menyimpan File Excel dengan Benar',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-06',
    category: 'dasar',
    number: 6,
    title: 'Cara Memasukkan dan Mengedit Data',
    shortDesc: 'Membedakan tipe data teks, angka, tanggal, dan teknik pengeditan sel tanpa menghapus isi.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Excel secara cerdas mengenali jenis data yang Anda masukkan. Memahami perilakunya mencegah kesalahan kalkulasi.',
    explanation: [
      'Data Teks: Rata kiri secara default. Contoh: nama, kota, keterangan barang.',
      'Data Angka (Number): Rata kanan secara default. Contoh: 1500, 25.5, 90000. Hanya angka yang rata kanan yang bisa dihitung rumus aritmatika.',
      'Data Tanggal (Date): Rata kanan, diinput dengan pemisah garis miring atau strip (15/03/2026 atau 2026-03-15).',
      'Trik Mengedit: Jika Anda mengklik satu kali pada sel yang sudah terisi dan langsung mengetik, isi lama akan terhapus. Untuk mengedit sebagian saja, klik dua kali pada sel atau tekan tombol F2.'
    ],
    sampleData: {
      headers: ['Data Diinput', 'Tipe Data Terdeteksi', 'Posisi Default'],
      rows: [
        ['Budi Santoso', 'Teks', 'Rata Kiri'],
        ['150000', 'Angka (Number)', 'Rata Kanan'],
        ['12/04/2026', 'Tanggal (Date)', 'Rata Kanan'],
        ['\'0812345678', 'Teks (diawali petik satu)', 'Rata Kiri (0 di depan aman)']
      ]
    },
    keySteps: [
      'Pilih sel yang ingin diisi.',
      'Ketik isi data, lalu tekan ENTER untuk ke baris bawah atau TAB untuk ke kanan.',
      'Untuk mengedit isi sel yang salah, ketuk dua kali (double-tap) pada sel tersebut atau edit melalui Formula Bar di atas.'
    ],
    importantTips: [
      'Nomor HP dan NIK KTP yang berawalan angka 0 sering hilang nolnya. Solusi: ketik tanda petik satu (\') sebelum angka nol, contoh: \'08179015181.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengetik angka dengan pemisah ribuan manual menggunakan titik padahal format regional komputer menggunakan koma.',
        solution: 'Ketik angka murni tanpa titik ribuan (misal: 1000000), lalu klik ikon tanda koma (Comma Style) di tab Home.'
      }
    ],
    practiceTask: 'Ketik 5 nomor HP di kolom A dengan awalan tanda petik satu agar angka nol di awal tidak terhapus.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Cara Cepat Input dan Edit Data di Sel Spreadsheet Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-07',
    category: 'dasar',
    number: 7,
    title: 'Mengatur Format Angka, Tanggal, Mata Uang, dan Persentase',
    shortDesc: 'Menggunakan Number Formatting di tab Home agar data rapi, profesional, dan mudah dibaca.',
    difficulty: 'Dasar',
    readTime: '5 menit',
    summary: 'Number format mengubah cara angka ditampilkan di layar tanpa mengubah nilai matematika aslinya.',
    explanation: [
      'General: Format bawaan tanpa aturan khusus.',
      'Currency & Accounting: Menambahkan simbol mata uang (Rp) dan pemisah ribuan titik/koma.',
      'Percentage: Mengalikan tampilan dengan 100 dan menambahkan simbol % (angka 0.25 tampil sebagai 25%).',
      'Short Date & Long Date: Menampilkan tanggal dalam format ringkas (15/03/2026) atau lengkap (15 Maret 2026).',
      'Decimal Places: Menambah atau mengurangi jumlah digit angka di belakang koma (ikon .00 -> .0).'
    ],
    sampleData: {
      headers: ['Angka Asli', 'Format Dipilih', 'Tampilan di Layar'],
      rows: [
        ['5000000', 'Currency (IDR)', 'Rp 5.000.000'],
        ['0.125', 'Percentage (0 desimal)', '13%'],
        ['0.125', 'Percentage (1 desimal)', '12.5%'],
        ['46100', 'Short Date', '04/04/2026']
      ]
    },
    keySteps: [
      'Blok sel atau kolom angka yang ingin diformat.',
      'Di tab Home, cari grup menu "Number".',
      'Klik dropdown yang tertulis "General", lalu pilih "Currency" atau "Accounting".',
      'Gunakan tombol "Increase Decimal" atau "Decrease Decimal" untuk mengatur desimal.'
    ],
    importantTips: [
      'Format Accounting menyejajarkan simbol Rp di sisi paling kiri sel dan angka di sisi kanan, sangat rapi untuk laporan keuangan resmi.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengetik kata "persen" di dalam sel sehingga nilainya berubah menjadi teks.',
        solution: 'Cukup ketik angkanya lalu terapkan format Percentage dari menu Number.'
      }
    ],
    practiceTask: 'Tuliskan angka 750000 di sel B2, ubah formatnya menjadi format Akuntansi Rupiah dengan 2 angka di belakang koma.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Tutorial Format Number, Currency Rupiah, Date, dan Percentage di Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-08',
    category: 'dasar',
    number: 8,
    title: 'Mengatur Font, Warna, Border, dan Perataan',
    shortDesc: 'Menata tipografi, warna sel (fill color), garis pembatas tabel, dan posisi perataan teks.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Tampilan tabel yang rapi memudahkan pembacaan data, menonjolkan bagian total, dan memberi kesan profesional.',
    explanation: [
      'Font & Size: Mengubah jenis huruf (Aptos, Calibri, Arial) dan ukuran teks.',
      'Bold, Italic, Underline: Menegaskan judul kolom atau baris ringkasan total.',
      'Fill Color: Memberi warna latar belakang sel, sering digunakan warna hijau tua atau abu-abu lembut pada header.',
      'Borders: Excel memiliki gridlines default yang tidak tercetak di kertas; untuk mencetak garis tabel, Anda wajib memberikan border (All Borders).',
      'Alignment: Mengatur rata kiri, tengah (center), atau rata kanan, serta vertical alignment (atas, tengah, bawah).'
    ],
    keySteps: [
      'Pilih baris judul tabel (header).',
      'Buka tab Home > grup Font > pilih Fill Color hijau Excel (#107c41) dan warna teks putih.',
      'Aktifkan Bold (Ctrl + B) dan Center Alignment.',
      'Pilih seluruh area data tabel, klik menu Border > pilih "All Borders".'
    ],
    importantTips: [
      'Jangan gunakan terlalu banyak warna pelangi; pilih palet maksimal 2 warna lembut agar tabel tetap elegan dan mudah dibaca.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengira garis abu-abu tipis bawaan Excel otomatis tercetak saat diprint.',
        solution: 'Garis bawaan tersebut hanya panduan layar. Wajib pasang Border melalui menu All Borders sebelum mencetak.'
      }
    ],
    practiceTask: 'Buat tabel 4 baris, beri warna hijau pada baris pertama, teks tebal putih, dan pasang All Borders pada seluruh tabel.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Mengatur Desain Tabel, Border, Font, dan Warna di Microsoft Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-09',
    category: 'dasar',
    number: 9,
    title: 'Mengatur Lebar Kolom dan Tinggi Baris',
    shortDesc: 'Mengatasi tanda pagar (###), teks terpotong, fitur AutoFit, dan Wrap Text.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Data angka yang terlalu panjang akan menampilkan tanda pagar (###), sedangkan teks panjang bisa terpotong jika kolom terlalu sempit.',
    explanation: [
      'Tanda Pagar (###): Bukan error rumus! Ini hanya tanda bahwa lebar kolom tidak muat menampilkan digit angka tersebut.',
      'AutoFit Column Width: Menyesuaikan lebar kolom secara otomatis sesuai isi terpanjang dengan cara klik dua kali (double click) pada garis batas antar header kolom.',
      'Wrap Text: Melipat teks panjang ke baris kedua di dalam satu sel yang sama sehingga kolom tidak perlu terlalu lebar.',
      'Merge & Center: Menggabungkan beberapa sel menjadi satu sel besar di tengah, biasa digunakan untuk judul utama laporan.'
    ],
    keySteps: [
      'Arahkan kursor atau sentuh garis pemisah antara huruf kolom A dan B di bagian atas.',
      'Seret ke kanan untuk memperlebar, atau klik ganda garis tersebut untuk AutoFit instan.',
      'Untuk teks panjang di sel, pilih sel tersebut lalu klik tombol "Wrap Text" di tab Home.'
    ],
    importantTips: [
      'Gunakan tombol Alt + Enter di komputer jika ingin membuat baris baru secara manual di dalam sel yang sama saat sedang mengetik.'
    ],
    commonMistakes: [
      {
        mistake: 'Panik saat melihat sel berisi tanda pagar (######) dan mengira datanya rusak.',
        solution: 'Cukup perlebar kolom tersebut dengan menyeret pembatas kolom ke kanan.'
      }
    ],
    practiceTask: 'Ketik nama panjang di sel A1, lalu aktifkan Wrap Text dan perhatikan tinggi baris yang otomatis bertambah.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'AutoFit dan Pengaturan Ukuran Baris Kolom Otomatis di Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-10',
    category: 'dasar',
    number: 10,
    title: 'Copy, Cut, Paste, dan Paste Special',
    shortDesc: 'Menyalin rumus, nilai saja (Values Only), format saja, atau menukar baris jadi kolom (Transpose).',
    difficulty: 'Dasar',
    readTime: '5 menit',
    summary: 'Paste Special adalah salah satu fitur paling sering digunakan di dunia kerja untuk memisahkan hasil hitungan dari rumus aslinya.',
    explanation: [
      'Copy (Ctrl+C): Menduplikasi data atau rumus.',
      'Cut (Ctrl+X): Memindahkan data ke lokasi baru.',
      'Paste Biasa (Ctrl+V): Menempelkan semuanya (isi, rumus, format sel).',
      'Paste Values (Nilai Saja): Menempelkan angka hasil tanpa membawa rumusnya. Sangat penting jika rumus mengacu pada sel lain yang akan dihapus.',
      'Paste Formats: Menempelkan warna dan format angka tanpa mengubah tulisan di sel tujuan.',
      'Transpose: Memutar posisi data, dari yang semula mendatar (horizontal) menjadi tegak (vertikal), atau sebaliknya.'
    ],
    keySteps: [
      'Pilih sel yang berisi hasil rumus.',
      'Tekan Ctrl + C (atau ikon Salin).',
      'Pilih sel tujuan baru, klik kanan > pilih Paste Special > Values (ikon angka 123).',
      'Sekarang sel tersebut berisi angka mati yang aman dari error #REF!.'
    ],
    importantTips: [
      'Jika Anda menyalin rumus yang ada referensi selnya, Paste biasa akan menggeser referensi tersebut secara relatif.'
    ],
    commonMistakes: [
      {
        mistake: 'Menyalin sel berisi rumus lalu menghapus tabel sumber sehingga menghasilkan error #REF!.',
        solution: 'Gunakan opsi Paste Special > Values agar yang tersimpan adalah angka murni hasil perhitungan.'
      }
    ],
    practiceTask: 'Buat rumus =A1+B1, lalu salin hasilnya ke sel D1 hanya nilainya saja (Paste Values).',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Perbedaan Copy, Cut, Paste, dan Keajaiban Paste Special di Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-11',
    category: 'dasar',
    number: 11,
    title: 'Mengurutkan Data atau Sort',
    shortDesc: 'Menyusun data dari A ke Z, Z ke A, angka terkecil ke terbesar, atau berdasarkan tanggal.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Sortir data membantu Anda menemukan nilai tertinggi, nama pelanggan berdasarkan abjad, atau transaksi terbaru dengan cepat.',
    explanation: [
      'Sort A to Z: Mengurutkan abjad dari awal ke akhir, atau angka dari paling kecil ke paling besar (Ascending).',
      'Sort Z to A: Mengurutkan sebaliknya, angka paling besar ke paling kecil (Descending).',
      'Custom Sort: Mengurutkan data berdasarkan lebih dari satu kolom sekaligus, misalnya: urutkan berdasarkan "Kota", lalu berdasarkan "Total Belanja".'
    ],
    keySteps: [
      'Klik salah satu sel di dalam tabel data Anda (jangan blok hanya satu kolom agar baris tidak teracak).',
      'Buka tab Data > klik ikon "Sort A to Z" atau "Sort Z to A".',
      'Untuk multi-level sorting, klik tombol "Sort" besar, klik "Add Level", lalu tentukan kolom kedua.'
    ],
    importantTips: [
      'Pastikan tabel Anda memiliki baris header yang jelas dan centang opsi "My data has headers" di jendela Custom Sort.'
    ],
    commonMistakes: [
      {
        mistake: 'Memblok hanya kolom nama tanpa mengikutsertakan kolom gaji, lalu menekan sort sehingga gaji tertukar ke orang lain.',
        solution: 'Selalu klik satu sel saja di dalam tabel, atau blok seluruh tabel termasuk semua kolom terkait.'
      }
    ],
    practiceTask: 'Buat daftar 5 nama acak beserta nilai ujiannya, lalu urutkan dari nilai yang paling tinggi ke paling rendah.',
    youtubeUrl: 'https://www.youtube.com/watch?v=_7Z1KVhWS8Y',
    youtubeTitle: 'Cara Mengurutkan Data A-Z dan Custom Sort di Microsoft Excel',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'd-12',
    category: 'dasar',
    number: 12,
    title: 'Filter Data',
    shortDesc: 'Menyaring dan menampilkan data tertentu saja berdasarkan kriteria teks, angka, atau warna.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Filter menyembunyikan sementara baris data yang tidak memenuhi kriteria tanpa menghapusnya dari lembar kerja.',
    explanation: [
      'Saat fitur Filter diaktifkan, akan muncul tombol panah kecil di samping setiap judul kolom.',
      'Text Filters: Menyaring teks yang mengandung kata tertentu (Equals, Contains, Begins with).',
      'Number Filters: Menyaring angka (Greater Than, Less Than, Between, Top 10).',
      'Shortcut cepat untuk mengaktifkan atau mematikan filter di komputer adalah Ctrl + Shift + L.'
    ],
    sampleData: {
      headers: ['Nama Sales', 'Kota', 'Penjualan'],
      rows: [
        ['Rian', 'Jakarta', 'Rp 4.500.000'],
        ['Dewi', 'Surabaya', 'Rp 6.200.000'],
        ['Agus', 'Jakarta', 'Rp 3.800.000'],
        ['Siti', 'Bandung', 'Rp 5.100.000']
      ]
    },
    keySteps: [
      'Klik salah satu sel di judul tabel Anda.',
      'Tekan shortcut Ctrl + Shift + L atau klik tab Data > Filter.',
      'Klik ikon panah pada kolom "Kota", hilangkan centang (Select All), lalu centang hanya "Jakarta".',
      'Tabel sekarang hanya menampilkan data baris sales dari kota Jakarta.'
    ],
    importantTips: [
      'Nomor baris yang berwarna biru di sebelah kiri menandakan bahwa lembar kerja Anda sedang dalam kondisi terfilter.'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa mematikan filter sehingga mengira sebagian data hilang permanen.',
        solution: 'Klik tombol "Clear Filter" di tab Data atau klik panah kolom lalu centang kembali (Select All).'
      }
    ],
    practiceTask: 'Terapkan filter pada tabel penjualan, lalu filter data yang nominal penjualannya di atas Rp 4.000.000.',
    youtubeUrl: 'https://www.youtube.com/watch?v=_7Z1KVhWS8Y',
    youtubeTitle: 'Cara Menggunakan AutoFilter Data di Excel untuk Pemula',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'd-13',
    category: 'dasar',
    number: 13,
    title: 'Membuat Tabel Sederhana',
    shortDesc: 'Membuat format tabel resmi (Format as Table) dengan zebra striping dan baris total otomatis.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Fitur "Format as Table" mengubah range data biasa menjadi objek tabel dinamis yang memiliki banyak keunggulan otomatis.',
    explanation: [
      'Rentang data biasa vs Tabel Resmi: Tabel resmi memiliki nama khusus (Table1), warna selang-seling (zebra striping) otomatis, dan filter bawaan.',
      'Rumus Otomatis Turun: Jika Anda mengetik rumus di kolom baru pada tabel resmi, rumus akan otomatis diterapkan ke seluruh baris ke bawah tanpa perlu ditarik.',
      'Total Row Otomatis: Cukup centang kotak "Total Row" di tab Table Design untuk mendapatkan penjumlahan instan di bagian paling bawah tabel.'
    ],
    keySteps: [
      'Pilih area data Anda (misal A1:D10).',
      'Tekan shortcut Ctrl + T atau klik tab Home > "Format as Table".',
      'Pilih gaya warna yang Anda sukai.',
      'Centang opsi "My table has headers", lalu klik OK.'
    ],
    importantTips: [
      'Saat Anda menambah baris data baru tepat di bawah tabel, format tabel dan rumus akan otomatis meluas ke baris baru tersebut.'
    ],
    commonMistakes: [
      {
        mistake: 'Membuat tabel resmi padahal ada baris header yang kosong atau sel yang di-merge.',
        solution: 'Pastikan baris header tabel tidak memiliki sel gabungan (merged cells) dan setiap kolom memiliki judul unik.'
      }
    ],
    practiceTask: 'Ubah range data biasa menjadi Excel Table menggunakan shortcut Ctrl + T, lalu aktifkan Total Row.',
    youtubeUrl: 'https://www.youtube.com/watch?v=sykORBMkwOk',
    youtubeTitle: 'Tutorial Cara Membuat Tabel di Microsoft Excel',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'd-14',
    category: 'dasar',
    number: 14,
    title: 'Membuat Tabel Penjualan Toko',
    shortDesc: 'Studi kasus nyata membuat tabel kasir penjualan produk dengan perhitungan subtotal otomatis.',
    difficulty: 'Dasar',
    readTime: '5 menit',
    summary: 'Terapkan rumus perkalian dasar (=Jumlah * Harga) untuk menghitung omzet penjualan barang harian toko Anda.',
    explanation: [
      'Di Excel, operasi perkalian menggunakan simbol bintang (*), bukan huruf x.',
      'Operasi pembagian menggunakan simbol garis miring (/), bukan titik dua (:).',
      'Operasi penjumlahan menggunakan tanda plus (+), dan pengurangan tanda minus (-).',
      'Rumus Subtotal: =Jumlah * Harga Satuan (contoh: =C2*D2).'
    ],
    sampleData: {
      headers: ['Kode', 'Nama Produk', 'Qty', 'Harga Satuan', 'Subtotal'],
      rows: [
        ['P01', 'Kopi Arabika 250g', 3, 'Rp 45.000', '=C2*D2 (Rp 135.000)'],
        ['P02', 'Susu UHT 1 Liter', 5, 'Rp 18.000', '=C3*D3 (Rp 90.000)'],
        ['P03', 'Gula Pasir 1kg', 2, 'Rp 16.500', '=C4*D4 (Rp 33.000)']
      ],
      caption: 'Tabel Penjualan Harian Toko Sembako'
    },
    keySteps: [
      'Ketik judul kolom: Kode, Nama Produk, Qty, Harga Satuan, Subtotal.',
      'Di sel E2 (Subtotal), ketik rumus: =C2*D2 lalu tekan ENTER.',
      'Arahkan kursor ke sudut kanan bawah sel E2 sampai muncul tanda plus hitam kecil (Fill Handle), lalu klik ganda atau seret ke bawah.',
      'Di bawah kolom Subtotal, gunakan rumus =SUM(E2:E4) untuk mendapatkan omzet total.'
    ],
    importantTips: [
      'Klik ganda (double click) pada titik Fill Handle di sudut sel akan otomatis mengisi rumus ke bawah sepanjang kolom sebelahnya ada data.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengetik rumus =C2xD2 menggunakan huruf x.',
        solution: 'Excel tidak mengenali huruf x sebagai operator perkalian; gunakan simbol bintang (*).'
      }
    ],
    practiceTask: 'Buat tabel penjualan 5 produk dengan kolom Qty dan Harga Satuan, lalu hitung Subtotal dan Total Akhir.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Studi Kasus: Membuat Rekap Tabel Penjualan Barang di Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-15',
    category: 'dasar',
    number: 15,
    title: 'Membuat Laporan Pemasukan dan Pengeluaran Sederhana',
    shortDesc: 'Menghitung saldo kas berjalan (running balance) otomatis dari uang masuk dan keluar.',
    difficulty: 'Dasar',
    readTime: '5 menit',
    summary: 'Buku kas sederhana adalah keterampilan wajib untuk mengontrol keuangan pribadi, organisasi, maupun kas operasional kantor.',
    explanation: [
      'Struktur Buku Kas standar terdiri dari 6 kolom: Tanggal, Keterangan, Kas Masuk (Debit), Kas Keluar (Kredit), dan Saldo.',
      'Rumus Saldo Baris Pertama: =Saldo Awal + Masuk - Keluar.',
      'Rumus Saldo Baris Kedua dan seterusnya: =Saldo Baris Sebelumnya + Masuk - Keluar (contoh: =E2+C3-D3).'
    ],
    sampleData: {
      headers: ['Tanggal', 'Keterangan', 'Kas Masuk', 'Kas Keluar', 'Saldo Akhir'],
      rows: [
        ['01/03/2026', 'Modal Kas Awal', 'Rp 1.000.000', 'Rp 0', 'Rp 1.000.000'],
        ['02/03/2026', 'Beli Kertas & Tinta', 'Rp 0', 'Rp 150.000', 'Rp 850.000'],
        ['03/03/2026', 'Jasa Desain Spanduk', 'Rp 500.000', 'Rp 0', 'Rp 1.350.000']
      ]
    },
    keySteps: [
      'Di baris 2 sel E2, masukkan saldo awal: =C2-D2.',
      'Di baris 3 sel E3, ketik rumus saldo berjalan: =E2+C3-D3.',
      'Tarik rumus di sel E3 ke baris-baris bawahnya.',
      'Setiap Anda mencatat pemasukan atau pengeluaran baru, saldo akan langsung ter-update otomatis.'
    ],
    importantTips: [
      'Gunakan format angka Accounting agar angka nol tampil rapi sebagai tanda strip (-).'
    ],
    commonMistakes: [
      {
        mistake: 'Menghubungkan rumus saldo baris ketiga ke saldo awal E2 bukan ke saldo sebelumnya E2.',
        solution: 'Pastikan rumus baris berjalan selalu mengambil saldo baris tepat di atasnya (E(n-1) + C(n) - D(n)).'
      }
    ],
    practiceTask: 'Susun laporan kas kecil 5 transaksi dan pastikan saldo berjalan selalu otomatis bertambah atau berkurang.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Tutorial Buku Kas Keuangan Pemasukan dan Pengeluaran Otomatis',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-16',
    category: 'dasar',
    number: 16,
    title: 'Membuat Grafik Dasar (Column & Pie Chart)',
    shortDesc: 'Mengubah barisan data angka menjadi grafik batang dan diagram lingkaran yang menarik.',
    difficulty: 'Dasar',
    readTime: '5 menit',
    summary: 'Visualisasi grafik membantu audiens atau atasan memahami tren perkembangan bisnis dalam hitungan detik.',
    explanation: [
      'Column / Bar Chart (Grafik Batang): Paling cocok untuk membandingkan nominal antar kategori (misal: omzet penjualan per produk).',
      'Line Chart (Grafik Garis): Paling ideal untuk melihat perkembangan tren dari waktu ke waktu (misal: grafik omzet bulan ke bulan).',
      'Pie Chart (Diagram Lingkaran): Terbaik untuk melihat persentase kontribusi bagian terhadap keseluruhan (misal: porsi kategori pengeluaran total 100%).'
    ],
    sampleData: {
      headers: ['Kategori Produk', 'Total Penjualan'],
      rows: [
        ['Makanan Ringan', 'Rp 12.000.000'],
        ['Minuman Dingin', 'Rp 8.500.000'],
        ['Alat Tulis Kantor', 'Rp 4.200.000'],
        ['Sembako', 'Rp 15.800.000']
      ]
    },
    keySteps: [
      'Blok data kategori dan angka penjualannya (termasuk judul kolom).',
      'Buka tab Insert > grup Charts.',
      'Pilih "2-D Clustered Column" atau "2-D Pie Chart".',
      'Grafik akan langsung muncul. Anda bisa mengedit Judul Grafik dengan mengklik dua kali pada teks judul.'
    ],
    importantTips: [
      'Shortcut kilat di komputer: Blok data lalu tekan tombol Alt + F1 untuk membuat grafik batang langsung di sheet yang sama.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengikutsertakan baris "Total Akhir" saat membuat Pie Chart sehingga potongan pie menjadi ganda 200%.',
        solution: 'Hanya blok data detail itemnya saja, jangan sertakan baris Total.'
      }
    ],
    practiceTask: 'Buat grafik batang dari data perolehan suara 3 kandidat ketua kelas.',
    youtubeUrl: 'https://www.youtube.com/watch?v=VNWR4reNPtA',
    youtubeTitle: 'Grafik (Chart) di Excel: Cara Membuat Diagram Batang dan Garis',
    youtubeChannel: 'Tutor XY'
  },
  {
    id: 'd-17',
    category: 'dasar',
    number: 17,
    title: 'Mencetak Lembar Kerja dan Mengatur Halaman (Page Setup)',
    shortDesc: 'Menghindari tabel terpotong saat diprint, mengatur Page Break, Margins, dan Orientation.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Seringkali lembar kerja Excel terpotong menjadi dua halaman saat dicetak. Pelajari trik agar dokumen pas di 1 halaman.',
    explanation: [
      'Orientation: Pilih "Portrait" untuk tabel vertikal banyak baris, atau "Landscape" untuk tabel yang banyak kolomnya ke samping.',
      'Margins: Mengatur batas tepi kertas (Normal, Narrow, Wide). Opsi Narrow memaksimalkan area cetak tabel lebar.',
      'Fit Sheet on One Page: Memperkecil skala otomatis agar seluruh kolom dan baris muat pas dalam 1 lembar kertas A4.',
      'Print Titles (Repeat Rows at top): Mengulang baris judul tabel di setiap halaman jika dokumen Anda mencapai puluhan halaman.'
    ],
    keySteps: [
      'Buka menu File > Print (atau tekan Ctrl + P).',
      'Lihat Print Preview di sebelah kanan.',
      'Jika kolom paling kanan terlempar ke halaman 2, ubah opsi Scaling di bagian bawah menjadi "Fit All Columns on One Page".',
      'Pilih ukuran kertas A4 atau F4 (Legal / Custom 215x330mm).'
    ],
    importantTips: [
      'Gunakan mode tampilan "Page Break Preview" di tab View untuk melihat garis batas halaman berwarna biru dan menyeretnya secara manual.'
    ],
    commonMistakes: [
      {
        mistake: 'Langsung klik print tanpa mengecek Print Preview terlebih dahulu sehingga kertas banyak terbuang percuma.',
        solution: 'Selalu cek Print Preview (Ctrl+P) untuk memastikan tidak ada kolom terpisah.'
      }
    ],
    practiceTask: 'Buka dokumen laporan Anda, masuk ke Print Preview, lalu atur agar seluruh kolom muat dalam 1 halaman lebar kertas A4 Landscape.',
    youtubeUrl: 'https://www.youtube.com/watch?v=-GH3ZQ17UdE',
    youtubeTitle: 'Cara Print Excel Full Kertas A4 dan Tidak Terpotong',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'd-18',
    category: 'dasar',
    number: 18,
    title: 'Menyimpan ke Format XLSX, PDF, dan CSV',
    shortDesc: 'Perbedaan format dokumen Excel, kapan harus menyimpan ke PDF untuk disetor ke bos atau CSV untuk sistem.',
    difficulty: 'Dasar',
    readTime: '3 menit',
    summary: 'Mengetahui perbedaan format file memastikan dokumen Anda dapat dibuka oleh rekan kerja tanpa berantakan.',
    explanation: [
      'XLSX: Format standar buku kerja Excel modern. Mendukung semua rumus, format warna, banyak sheet, dan grafik.',
      'PDF: Dokumen siap cetak yang tidak bisa diedit sembarangan. Sempurna untuk mengirim invoice, laporan akhir, atau slip gaji ke WhatsApp klien.',
      'CSV (Comma Separated Values): Format teks polos ringan tanpa warna atau rumus, khusus untuk upload data ke sistem database atau website bank.',
      'XLSM: Format khusus jika workbook Anda menggunakan Macro atau script VBA.'
    ],
    keySteps: [
      'Untuk ekspor ke PDF: Buka File > Export > Create PDF/XPS (atau File > Save As > pilih PDF di dropdown tipe file).',
      'Untuk ekspor ke CSV: Buka File > Save As > pilih CSV (Comma delimited) (*.csv).',
      'Beri nama file lalu klik Save.'
    ],
    importantTips: [
      'Jika menyimpan file yang ada Macro-nya ke format XLSX biasa, script VBA Anda akan otomatis terhapus! Wajib pilih format Excel Macro-Enabled Workbook (*.xlsm).'
    ],
    commonMistakes: [
      {
        mistake: 'Mengirim file XLSX mentah ke klien sehingga rumus berpotensi diubah atau dibuka berantakan di HP orang lain.',
        solution: 'Simpan dan kirim versi PDF untuk pembaca eksternal.'
      }
    ],
    practiceTask: 'Simpan lembar kerja Anda ke dalam format PDF dan buka file hasil ekspor tersebut di aplikasi PDF viewer.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Cara Export dan Save As Excel ke Format PDF dan CSV',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'd-19',
    category: 'dasar',
    number: 19,
    title: 'Memahami Referensi Sel Relatif, Absolut, dan Campuran ($A$1)',
    shortDesc: 'Kunci mutlak rumus Excel: fungsi simbol dolar ($) dan tombol F4 agar referensi tidak bergeser.',
    difficulty: 'Dasar',
    readTime: '6 menit',
    summary: 'Jika Anda sering mengalami rumus yang menghasilkan angka nol atau ngawur saat ditarik ke bawah, penyebabnya adalah Anda belum mengunci sel dengan tanda dolar ($).',
    explanation: [
      'Referensi Relatif (A1): Alamat sel akan ikut bergeser secara dinamis saat rumus disalin ke bawah atau ke samping. Jika rumus =A1 ditarik ke bawah, sel berikutnya menjadi =A2, =A3.',
      'Referensi Absolut ($A$1): Alamat sel dikunci mati dengan dua tanda dolar. Saat rumus ditarik kemana saja, sel target tetap mengunci pada sel A1. Sangat penting untuk sel PPN pajak, persentase diskon, atau kurs dolar tetap.',
      'Referensi Campuran ($A1 atau A$1): Mengunci kolomnya saja ($A1) atau mengunci barisnya saja (A$1). Biasa dipakai pada tabel perkalian silang matriks.',
      'Tombol F4: Tekan tombol F4 pada keyboard saat sedang menyorot notasi sel di rumus untuk mengubah jenis referensi secara bergantian.'
    ],
    sampleData: {
      headers: ['Produk', 'Harga Kotor', 'Tarif PPN (Sel E1 = 11%)', 'Rumus yang Benar'],
      rows: [
        ['Laptop Core i5', 'Rp 8.000.000', '11%', '=B2*$E$1 (Rp 880.000)'],
        ['Monitor 24"', 'Rp 1.500.000', '11%', '=B3*$E$1 (Rp 165.000)'],
        ['Keyboard RGB', 'Rp 400.000', '11%', '=B4*$E$1 (Rp 44.000)']
      ],
      caption: 'Contoh Penggunaan Referensi Absolut $E$1 untuk Menghitung Pajak PPN'
    },
    keySteps: [
      'Tuliskan angka persentase diskon di sel E1 (misal: 10%).',
      'Di sel C2, ketik rumus: =B2*E1.',
      'Sorot teks E1 di dalam rumus tersebut, lalu tekan tombol F4 sekali hingga berubah menjadi $E$1.',
      'Tekan ENTER, lalu tarik Fill Handle rumus ke bawah. Sekarang semua baris mengalikan dengan sel E1.'
    ],
    importantTips: [
      'Urutan perubahan tombol F4: A1 -> $A$1 (Kunci Kolom & Baris) -> A$1 (Kunci Baris) -> $A1 (Kunci Kolom) -> A1 (Relatif kembali).'
    ],
    commonMistakes: [
      {
        mistake: 'Tidak mengunci sel tarif diskon (=B2*E1), sehingga saat ditarik ke bawah menjadi =B3*E2 yang kosong dan menghasilkan nilai 0.',
        solution: 'Kunci sel referensi statis dengan tombol F4 menjadi $E$1.'
      }
    ],
    practiceTask: 'Buat tabel daftar harga barang, letakkan persentase diskon 15% di sel D1, lalu hitung nominal diskon untuk 5 barang dengan rumus =B2*$D$1.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Memahami Tanda Dollar ($) dan Sel Relatif vs Absolut (F4)',
    youtubeChannel: 'Ignasius Ryan'
  }
];
