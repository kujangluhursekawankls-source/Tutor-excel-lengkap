import { QuizQuestion } from '../types';

export const quizzesData: QuizQuestion[] = [
  // ================= 1. KATEGORI PEMULA / DASAR (10 Soal) =================
  {
    id: 'q-d01',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Karakter apakah yang WAJIB ditulis di awal setiap penulisan rumus/formula di Microsoft Excel agar dapat dihitung?',
    options: ['Tanda sama dengan (=)', 'Tanda tambah (+)', 'Tanda petik (" ")', 'Tanda seru (!)'],
    correctIndex: 0,
    explanation: 'Setiap formula atau perhitungan matematika di Excel wajib diawali dengan tanda sama dengan (=). Jika tidak, Excel hanya menganggap ketikan tersebut sebagai teks biasa.'
  },
  {
    id: 'q-d02',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Jika sel A1 berisi angka 10 dan sel B1 berisi angka 5, bagaimanakah penulisan rumus perkalian yang benar di sel C1?',
    options: ['=A1 x B1', '=A1 * B1', '=A1 . B1', '=KALI(A1:B1)'],
    correctIndex: 1,
    explanation: 'Di Microsoft Excel, operator perkalian menggunakan simbol tanda bintang (*), bukan huruf x.'
  },
  {
    id: 'q-d03',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Apa arti dari notasi rentang sel B2:D6?',
    options: [
      'Hanya sel B2 dan sel D6 saja yang dipilih',
      'Seluruh sel dari kotak B2 sampai D6 (mencakup baris 2-6 dan kolom B-D)',
      'Nilai sel B2 dibagi dengan sel D6',
      'Sel B2 dikurangi D6'
    ],
    correctIndex: 1,
    explanation: 'Tanda titik dua (:) adalah operator rentang (range) di Excel yang menunjukkan sekumpulan blok sel persegi dari sel awal hingga sel akhir.'
  },
  {
    id: 'q-d04',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Ketika sebuah sel menampilkan deretan tanda pagar (######), apakah penyebab dan solusi yang tepat?',
    options: [
      'Rumus salah total dan file rusak',
      'Format angka terlalu panjang melebihi lebar kolom; solusinya cukup perlebar kolom tersebut',
      'Komputer kehabisan memori RAM',
      'Teks mengandung virus berbahaya'
    ],
    correctIndex: 1,
    explanation: 'Tanda pagar (###) bukanlah error kalkulasi rumus, melainkan tanda visual bahwa lebar kolom terlalu sempit untuk menampilkan digit angka atau tanggal secara utuh. Cukup seret garis batas kolom ke kanan atau double click untuk AutoFit.'
  },
  {
    id: 'q-d05',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Bagaimana cara mengetik nomor HP 08179015181 atau NIK agar angka nol (0) di depan tidak hilang otomatis?',
    options: [
      'Ketik dengan huruf kapital',
      'Awali dengan tanda petik satu (\'08179015181)',
      'Tekan spasi 5 kali',
      'Ketik dengan tanda kurung'
    ],
    correctIndex: 1,
    explanation: 'Secara default Excel mendeteksi input sebagai angka dan membuang leading zero. Memberi tanda petik satu (\') memaksa Excel memperlakukan nomor tersebut sebagai format teks sehingga angka nol tetap utuh.'
  },
  {
    id: 'q-d06',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Tombol keyboard apakah yang digunakan untuk mengunci sel menjadi referensi absolut ($A$1) saat sedang mengedit rumus?',
    options: ['F2', 'F4', 'F9', 'F12'],
    correctIndex: 1,
    explanation: 'Tombol F4 adalah shortcut resmi untuk menyisipkan tanda dolar ($) pada alamat sel (bergantian antara Relatif, Absolut Penuh $A$1, Kunci Baris A$1, dan Kunci Kolom $A1).'
  },
  {
    id: 'q-d07',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Manakah opsi Paste Special yang digunakan untuk menempelkan hasil kalkulasi angka murni tanpa membawa rumusnya?',
    options: ['Paste All', 'Paste Formats', 'Paste Values (Nilai)', 'Paste Transpose'],
    correctIndex: 2,
    explanation: 'Paste Values menempelkan nilai angka akhir yang dihasilkan rumus, sehingga jika tabel sumber rumus dihapus, nilai di sel tujuan tidak akan rusak menjadi #REF!.'
  },
  {
    id: 'q-d08',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Trik keyboard apakah yang dapat membuat baris baru (line break) di dalam sel yang sama saat mengetik teks panjang di komputer?',
    options: ['Ctrl + Enter', 'Alt + Enter', 'Shift + Spasi', 'Tab + Enter'],
    correctIndex: 1,
    explanation: 'Menekan Alt + Enter saat kursor berada di dalam sel akan menyisipkan baris baru (wrap baris manual) tanpa berpindah ke sel baris di bawahnya.'
  },
  {
    id: 'q-d09',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Apakah garis-garis kisi tipis abu-abu (gridlines) bawaan Excel akan otomatis tercetak di kertas saat di-print?',
    options: [
      'Ya, otomatis tercetak tebal',
      'Tidak, garis bawaan hanya panduan layar; Anda harus memberi Border (All Borders) agar tercetak',
      'Tercetak hanya jika printer berwarna',
      'Tergantung versi Windows'
    ],
    correctIndex: 1,
    explanation: 'Garis gridlines bawaan Excel tidak tercetak pada pengaturan default. Anda harus memilih area tabel dan menerapkan All Borders dari tab Home agar garis pembatas tercetak di atas kertas.'
  },
  {
    id: 'q-d10',
    category: 'dasar',
    categoryLabel: 'Excel Dasar',
    question: 'Format penyimpanan file apakah yang paling aman dan tidak dapat diubah-ubah sembarangan saat mengirimkan laporan ke pihak luar?',
    options: ['.xlsx', '.csv', '.pdf', '.txt'],
    correctIndex: 2,
    explanation: 'Format PDF (Portable Document Format) mengunci tampilan dokumen agar persis sama di semua perangkat dan tidak bisa diedit rumusnya dengan mudah oleh penerima.'
  },

  // ================= 2. KATEGORI MENENGAH (10 Soal) =================
  {
    id: 'q-m01',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Perhatikan fungsi COUNT dan COUNTA. Jika di rentang A1:A5 terdapat data: ["Budi", 100, "", "Siti", 250], berapakah hasil dari =COUNTA(A1:A5)?',
    options: ['2', '3', '4', '5'],
    correctIndex: 2,
    explanation: 'COUNTA menghitung semua sel yang tidak kosong. Dari 5 sel tersebut, ada 4 sel yang terisi ("Budi", 100, "Siti", 250) dan 1 sel kosong. Maka hasilnya adalah 4. (Jika menggunakan COUNT biasa, hasilnya 2 karena hanya menghitung angka).'
  },
  {
    id: 'q-m02',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Pada rumus VLOOKUP: =VLOOKUP(A2, $D$2:$F$20, 3, FALSE), apakah fungsi dari argumen FALSE di paling belakang?',
    options: [
      'Mengaktifkan pencarian nilai perkiraan mendekati',
      'Memastikan pencarian nilai yang persis sama (Exact Match)',
      'Mengabaikan huruf besar dan kecil',
      'Mematikan pesan error'
    ],
    correctIndex: 1,
    explanation: 'Argumen range_lookup bernilai FALSE (atau angka 0) memerintahkan VLOOKUP untuk hanya mengembalikan hasil jika nilai kunci yang dicari ditemukan persis sama (Exact Match).'
  },
  {
    id: 'q-m03',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Di manakah posisi rentang kolom angka yang akan dijumlahkan (sum_range) pada fungsi SUMIFS?',
    options: [
      'Di urutan argumen paling akhir',
      'Di urutan argumen PALING AWAL sebelum kriteria',
      'Di tengah-tengah antara kriteria 1 dan kriteria 2',
      'Tidak perlu ditentukan'
    ],
    correctIndex: 1,
    explanation: 'Berbeda dengan SUMIF (yang meletakkan sum_range di belakang), rumus SUMIFS selalu meletakkan sum_range (kolom angka yang dijumlahkan) di posisi urutan pertama: =SUMIFS(sum_range, criteria_range1, criteria1, ...).'
  },
  {
    id: 'q-m04',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Rumus manakah yang benar untuk memeriksa apakah siswa Lulus jika Nilai Teori (B2) >= 75 DAN Nilai Praktik (C2) >= 75?',
    options: [
      '=IF(B2>=75 AND C2>=75, "LULUS", "GAGAL")',
      '=IF(AND(B2>=75, C2>=75), "LULUS", "GAGAL")',
      '=IF(OR(B2>=75, C2>=75), "LULUS", "GAGAL")',
      '=AND(IF(B2>=75), IF(C2>=75))'
    ],
    correctIndex: 1,
    explanation: 'Di Excel, fungsi logika AND ditulis membungkus kondisi-kondisi di dalamnya: AND(kondisi1, kondisi2), lalu dijadikan argumen pertama untuk fungsi IF: =IF(AND(B2>=75, C2>=75), "LULUS", "GAGAL").'
  },
  {
    id: 'q-m05',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Jika sel A1 berisi teks "INV-2026-JKT", rumus apakah yang akan menghasilkan angka tahun "2026"?',
    options: ['=LEFT(A1, 4)', '=RIGHT(A1, 4)', '=MID(A1, 5, 4)', '=LEN(A1, 4)'],
    correctIndex: 2,
    explanation: 'Karakter "2" berada di urutan ke-5 (I=1, N=2, V=3, -=4, 2=5), dan kita ingin mengambil 4 karakter ("2026"). Maka rumusnya adalah =MID(A1, 5, 4).'
  },
  {
    id: 'q-m06',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Apa keunggulan utama fungsi TEXTJOIN dibanding CONCATENATE biasa?',
    options: [
      'Dapat menyisipkan karakter pemisah otomatis (delimiter) dan mampu mengabaikan sel yang kosong',
      'Dapat mengubah warna huruf otomatis',
      'Hanya bisa dipakai untuk angka',
      'Tidak memerlukan tanda sama dengan'
    ],
    correctIndex: 0,
    explanation: 'Fungsi TEXTJOIN memungkinkan Anda menetapkan pemisah seperti koma atau spasi sekaligus memiliki argumen ignore_empty=TRUE untuk melewatkan sel yang kosong.'
  },
  {
    id: 'q-m07',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Fungsi apakah yang digunakan untuk menghitung umur seseorang dalam satuan tahun penuh dari tanggal lahir di sel B2?',
    options: [
      '=YEAR(TODAY()) - YEAR(B2)',
      '=DATEDIF(B2, TODAY(), "Y")',
      '=AGE(B2)',
      '=COUNT(B2, TODAY())'
    ],
    correctIndex: 1,
    explanation: '=DATEDIF(B2, TODAY(), "Y") menghitung umur tahun penuh yang sudah benar-benar terlewati, berbeda dengan sekadar pengurangan YEAR yang bisa meleset jika belum berulang tahun di tahun berjalan.'
  },
  {
    id: 'q-m08',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Shortcut apakah yang dapat menjalankan fitur cerdas Flash Fill untuk merapikan teks mengikuti pola contoh baris pertama?',
    options: ['Ctrl + E', 'Ctrl + F', 'Ctrl + T', 'Ctrl + R'],
    correctIndex: 0,
    explanation: 'Ctrl + E adalah shortcut ajaib Flash Fill di Excel untuk mengisi pola pemisahan nama, format nomor, atau penggabungan teks otomatis.'
  },
  {
    id: 'q-m09',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Mengapa kombinasi INDEX dan MATCH dianggap lebih fleksibel daripada VLOOKUP konvensional?',
    options: [
      'Karena INDEX MATCH dapat mencari data ke arah kiri maupun kanan dan tidak rusak saat kolom baru disisipkan',
      'Karena INDEX MATCH membuat ukuran file lebih kecil',
      'Karena tidak bisa menghasilkan error',
      'Karena hanya ada di Excel versi terbaru'
    ],
    correctIndex: 0,
    explanation: 'VLOOKUP terkunci hanya bisa membaca data ke arah kanan dari kolom kunci. Sebaliknya, INDEX MATCH bebas mencari data ke arah kiri maupun kanan serta tahan banting terhadap penambahan kolom baru.'
  },
  {
    id: 'q-m10',
    category: 'menengah',
    categoryLabel: 'Excel Menengah',
    question: 'Jika data di tabel sumber PivotTable mengalami perubahan atau penambahan baris, apa yang harus dilakukan agar PivotTable ikut diperbarui?',
    options: [
      'Menghapus PivotTable dan membuatnya dari awal lagi',
      'Klik kanan pada PivotTable lalu pilih "Refresh"',
      'Menutup aplikasi Excel dan menyalakan ulang komputer',
      'Mengubah font tabel'
    ],
    correctIndex: 1,
    explanation: 'PivotTable menyimpan snapshot cache data di memori. Begitu data sumber diedit, Anda cukup klik kanan pada area PivotTable dan pilih "Refresh" (atau Alt + F5) agar perhitungannya sinkron kembali.'
  },

  // ================= 3. KATEGORI MAHIR (10 Soal) =================
  {
    id: 'q-a01',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Pesan error apakah yang muncul pada Excel modern jika hasil rumus Dynamic Array terhalang oleh sel yang sudah berisi teks?',
    options: ['#N/A', '#SPILL!', '#REF!', '#CALC!'],
    correctIndex: 1,
    explanation: 'Error #SPILL! terjadi saat rumus array yang ingin menumpahkan hasilnya ke sel-sel di bawah atau sampingnya terhalang oleh sel yang tidak kosong atau merged cell.'
  },
  {
    id: 'q-a02',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Pada fungsi modern XLOOKUP, bagaimana cara mencari nilai transaksi paling akhir dari bawah ke atas (bottom-up)?',
    options: [
      'Mengisi parameter search_mode dengan angka -1',
      'Mengisi parameter match_mode dengan angka 0',
      'Membalik tabel sumber secara manual',
      'Menggunakan fungsi REVERSE'
    ],
    correctIndex: 0,
    explanation: 'Argumen search_mode pada XLOOKUP jika diisi angka -1 akan memerintahkan Excel melakukan pencarian mulai dari baris paling bawah ke atas (Search last-to-first).'
  },
  {
    id: 'q-a03',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Fungsi Dynamic Array manakah yang digunakan untuk mengekstrak daftar nilai tanpa duplikat dari sebuah rentang secara otomatis?',
    options: ['=DISTINCT()', '=UNIQUE()', '=FILTER()', '=SINGLE()'],
    correctIndex: 1,
    explanation: '=UNIQUE(array) secara otomatis mengekstrak elemen-elemen unik dari suatu kolom dan menumpahkannya ke baris-baris kosong di bawahnya.'
  },
  {
    id: 'q-a04',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Apakah fungsi utama dari fungsi LET di Excel 365 / Excel 2021?',
    options: [
      'Mendefinisikan nama variabel lokal di dalam rumus untuk menghindari kalkulasi ganda dan mempercepat performa',
      'Membuat file PDF otomatis',
      'Mengunci sheet dengan password',
      'Menghubungkan database SQL'
    ],
    correctIndex: 0,
    explanation: 'Fungsi LET memungkinkan Anda menetapkan nama variabel untuk bagian rumus perantara (contoh: LET(omzet, A2*B2, omzet*0.1)) sehingga rumus tidak perlu menghitung hal yang sama berulang-ulang.'
  },
  {
    id: 'q-a05',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Alat apakah di Excel yang berfungsi melakukan ETL (Extract, Transform, Load) untuk membersihkan data mentah dan menggabungkan banyak file dari folder secara otomatis?',
    options: ['Power Query', 'Data Validation', 'Goal Seek', 'Solver'],
    correctIndex: 0,
    explanation: 'Power Query (Get & Transform Data) adalah alat visual bawaan Excel untuk mengekstrak, mentransformasi, membalik (unpivot), dan membersihkan data dari berbagai sumber secara terotomatisasi.'
  },
  {
    id: 'q-a06',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Pada Power Query, langkah apakah yang digunakan untuk mengubah tabel yang kolom bulannya memanjang ke samping (cross-tab) menjadi baris database vertikal?',
    options: ['Transpose Sheet', 'Unpivot Columns', 'Split Column', 'Group By'],
    correctIndex: 1,
    explanation: 'Fitur "Unpivot Columns" di Power Query mengubah atribut kolom horizontal menjadi pasangan baris vertikal (Atribut dan Nilai), format standar yang ideal untuk diolah ke PivotTable.'
  },
  {
    id: 'q-a07',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Untuk menghubungkan 1 kotak Slicer agar mengendalikan 3 PivotTable sekaligus di dashboard, menu apakah yang harus dikonfigurasi?',
    options: ['Slicer Settings', 'Report Connections', 'PivotChart Options', 'Data Model Links'],
    correctIndex: 1,
    explanation: 'Klik kanan pada Slicer > pilih "Report Connections", lalu centang semua PivotTable yang ingin dikendalikan oleh Slicer tersebut.'
  },
  {
    id: 'q-a08',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Pada rumus PMT untuk menghitung cicilan KPR bulanan: =PMT(rate, nper, pv), bagaimana penulisan suku bunga tahunan 12% dan pinjaman 100 juta?',
    options: [
      '=PMT(12%, 36, 100000000)',
      '=PMT(12%/12, 36, -100000000)',
      '=PMT(12*12, 3, 100000000)',
      '=PMT(12, 36, 100000000)'
    ],
    correctIndex: 1,
    explanation: 'Suku bunga tahunan wajib dibagi 12 (12%/12) agar sesuai periode bulanan, dan nilai pinjaman pokok (pv) diberi tanda minus (-100000000) agar hasil kalkulasi angsuran bernilai positif.'
  },
  {
    id: 'q-a09',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Apa langkah pertama yang WAJIB dilakukan sebelum mengaktifkan fitur Protect Sheet jika Anda ingin pengguna tetap bisa mengisi data di kolom tertentu?',
    options: [
      'Memberi warna kuning pada sel',
      'Membuka kunci sel input (hilangkan centang "Locked" di Format Cells > Protection)',
      'Menyimpan file ke format PDF',
      'Menghapus rumus di sekitarnya'
    ],
    correctIndex: 1,
    explanation: 'Secara bawaan semua sel berstatus Locked. Sebelum mengunci sheet (Protect Sheet), Anda harus memblok sel-sel input yang boleh diisi, buka Format Cells (Ctrl+1) > tab Protection > hilangkan centang "Locked".'
  },
  {
    id: 'q-a10',
    category: 'mahir',
    categoryLabel: 'Excel Mahir',
    question: 'Bagaimanakah rumus menghitung persentase pertumbuhan penjualan Year-over-Year (YoY) antara Realisasi Tahun Ini (C2) dan Tahun Lalu (B2)?',
    options: [
      '=C2 / B2',
      '=(C2 - B2) / B2',
      '=(B2 - C2) / C2',
      '=C2 - B2'
    ],
    correctIndex: 1,
    explanation: 'Rumus persentase perubahan/pertumbuhan adalah selisih nilai baru dikurang nilai lama dibagi nilai lama: =(C2 - B2) / B2, lalu diformat sebagai persentase (%).'
  },

  // ================= 4. KATEGORI SHORTCUT (10 Soal) =================
  {
    id: 'q-s01',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut apakah yang digunakan untuk mengaktifkan atau menonaktifkan fitur AutoFilter pada baris judul secara instan?',
    options: ['Ctrl + F', 'Ctrl + Shift + L', 'Alt + F4', 'Ctrl + Alt + D'],
    correctIndex: 1,
    explanation: 'Ctrl + Shift + L adalah shortcut kilat untuk memunculkan atau menghilangkan tanda panah AutoFilter di baris header tabel.'
  },
  {
    id: 'q-s02',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut apakah yang digunakan untuk AutoSum (penjumlahan cepat) tanpa mengetik rumus =SUM() secara manual?',
    options: ['Alt + =', 'Ctrl + +', 'Shift + =', 'Ctrl + S'],
    correctIndex: 0,
    explanation: 'Menekan Alt + = (Alt bersamaan dengan tombol sama dengan) akan langsung menyisipkan fungsi =SUM() menjumlahkan deretan angka di atas atau di sebelah kirinya.'
  },
  {
    id: 'q-s03',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut apakah yang digunakan untuk mengubah rentang data biasa menjadi format tabel resmi (Format as Table)?',
    options: ['Ctrl + T', 'Ctrl + Tab', 'Alt + T', 'Ctrl + Shift + T'],
    correctIndex: 0,
    explanation: 'Ctrl + T (atau Ctrl + L) adalah shortcut standar Excel untuk membuat objek Table resmi lengkap dengan filter dan zebra striping.'
  },
  {
    id: 'q-s04',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut apakah yang digunakan untuk memasukkan TANGGAL hari ini secara statis ke dalam sel?',
    options: ['Ctrl + ; (titik koma)', 'Ctrl + Shift + ;', 'Alt + D', 'F7'],
    correctIndex: 0,
    explanation: 'Ctrl + ; (titik koma) langsung mengetik tanggal hari ini. Sedangkan Ctrl + Shift + ; digunakan untuk memasukkan waktu/jam saat ini.'
  },
  {
    id: 'q-s05',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut keyboard apakah yang langsung menampilkan seluruh formula asli di lembar kerja alih-alih hasil perhitungannya?',
    options: ['Ctrl + ` (tanda petik miring)', 'Ctrl + F2', 'Alt + F9', 'Ctrl + Shift + R'],
    correctIndex: 0,
    explanation: 'Ctrl + ` (tombol backtick di sebelah angka 1) adalah toggle cepat untuk menampilkan seluruh teks formula di semua sel lembar kerja.'
  },
  {
    id: 'q-s06',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Untuk menduplikasi rumus atau teks dari sel tepat di atasnya ke sel yang sedang aktif, shortcut apakah yang paling cepat?',
    options: ['Ctrl + D', 'Ctrl + R', 'Ctrl + U', 'Ctrl + Shift + D'],
    correctIndex: 0,
    explanation: 'Ctrl + D (Fill Down) menyalin isi dan format sel di atasnya ke bawah. Sedangkan Ctrl + R (Fill Right) menyalin sel dari sebelah kiri.'
  },
  {
    id: 'q-s07',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut apakah yang langsung membuka jendela dialog lengkap "Format Cells"?',
    options: ['Ctrl + 1', 'F1', 'Alt + 1', 'Ctrl + Shift + F'],
    correctIndex: 0,
    explanation: 'Ctrl + 1 membuka jendela Format Cells untuk mengatur Number Format, Alignment, Font, Border, Fill, dan Protection.'
  },
  {
    id: 'q-s08',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut apakah untuk melompat langsung ke sel awal lembar kerja (sel A1)?',
    options: ['Ctrl + Home', 'Ctrl + Page Up', 'Alt + Home', 'Shift + Home'],
    correctIndex: 0,
    explanation: 'Ctrl + Home selalu mengembalikan pandangan layar langsung ke sel awal A1.'
  },
  {
    id: 'q-s09',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Shortcut apakah yang digunakan untuk membuat grafik batang (Column Chart) langsung di sheet yang sama dalam 1 detik?',
    options: ['Alt + F1', 'F11', 'Ctrl + G', 'Shift + F1'],
    correctIndex: 0,
    explanation: 'Alt + F1 membuat grafik default langsung di worksheet yang sama. Jika menekan tombol F11 saja, Excel akan membuat grafik di tab Chart Sheet terpisah.'
  },
  {
    id: 'q-s10',
    category: 'shortcut',
    categoryLabel: 'Shortcut Excel',
    question: 'Apakah shortcut keyboard Excel desktop (seperti Ctrl+Shift+L atau Alt+=) dapat bekerja di aplikasi Excel Android biasa tanpa keyboard fisik tambahan?',
    options: [
      'Bisa langsung ditekan di layar sentuh',
      'Tidak bisa; sebagian besar shortcut kombinasi tombol membutuhkan keyboard fisik eksternal (Bluetooth / OTG)',
      'Hanya bisa di HP bermerek tertentu',
      'Bisa jika di-screenshot'
    ],
    correctIndex: 1,
    explanation: 'Keyboard sentuh virtual di Android umumnya tidak memiliki tombol Ctrl atau Alt. Shortcut keyboard fisik dirancang untuk penggunaan di desktop PC atau tablet dengan keyboard eksternal.'
  },

  // ================= 5. KATEGORI MACRO & VBA (10 Soal) =================
  {
    id: 'q-v01',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Shortcut keyboard apakah yang digunakan untuk membuka jendela Visual Basic Editor (VBE) di Microsoft Excel desktop?',
    options: ['Alt + F11', 'Ctrl + F11', 'F12', 'Shift + F11'],
    correctIndex: 0,
    explanation: 'Alt + F11 adalah kombinasi tombol resmi untuk membuka dan menutup jendela Visual Basic Editor (VBE).'
  },
  {
    id: 'q-v02',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Format ekstensi file apakah yang WAJIB dipilih saat menyimpan workbook yang berisi kode Macro VBA agar script tidak terhapus?',
    options: ['.xlsx', '.xlsm', '.csv', '.docx'],
    correctIndex: 1,
    explanation: 'File Excel yang memuat kode VBA wajib disimpan dalam format Excel Macro-Enabled Workbook (*.xlsm). Jika disimpan ke format biasa .xlsx, Excel akan otomatis membuang seluruh script VBA.'
  },
  {
    id: 'q-v03',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Karakter apakah yang digunakan di awal baris kode VBA untuk menandai baris komentar catatan (yang tidak akan dieksekusi)?',
    options: ['Tanda petik satu (\')', 'Tanda garis miring ganda (//)', 'Tanda pagar (#)', 'Tanda seru (!)'],
    correctIndex: 0,
    explanation: 'Di bahasa VBA, komentar ditulis dengan tanda petik tunggal (\'). Teks komentar akan berwarna hijau di editor dan diabaikan saat script dijalankan.'
  },
  {
    id: 'q-v04',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Perintah VBA manakah yang digunakan untuk memunculkan kotak pesan pop-up sederhana kepada pengguna?',
    options: ['MsgBox "Pesan"', 'Print "Pesan"', 'Alert("Pesan")', 'Echo "Pesan"'],
    correctIndex: 0,
    explanation: 'MsgBox adalah fungsi internal VBA untuk menampilkan kotak dialog pesan dengan tombol konfirmasi.'
  },
  {
    id: 'q-v05',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Tipe data apakah di VBA yang paling direkomendasikan untuk menampung nomor baris lembar kerja Excel?',
    options: ['Integer', 'Long', 'Byte', 'Boolean'],
    correctIndex: 1,
    explanation: 'Tipe data Long mampu menampung angka bulat hingga 2 miliar, aman untuk baris Excel yang mencapai 1.048.576 baris. Tipe Integer hanya mampu sampai 32.767 sehingga rentan error Overflow.'
  },
  {
    id: 'q-v06',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Baris kode VBA manakah yang digunakan untuk mencari nomor baris terakhir yang terisi data di kolom A secara dinamis?',
    options: [
      'Cells(Rows.Count, "A").End(xlUp).Row',
      'Range("A1").LastRow',
      'ActiveSheet.CountRows',
      'Row.Maximum("A")'
    ],
    correctIndex: 0,
    explanation: 'Cells(Rows.Count, "A").End(xlUp).Row mensimulasikan lompatan Ctrl+Panah Atas dari baris paling bawah kolom A untuk menemukan baris terisi paling akhir secara akurat.'
  },
  {
    id: 'q-v07',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Apakah tindakan yang dilakukan oleh Macro VBA dapat dibatalkan dengan menekan tombol Undo (Ctrl + Z)?',
    options: [
      'Ya, selalu bisa di-undo',
      'Tidak bisa! Perubahan oleh Macro langsung tertulis permanen di memori lembar kerja',
      'Bisa jika menggunakan mouse',
      'Hanya bisa di Windows 11'
    ],
    correctIndex: 1,
    explanation: 'Eksekusi script VBA secara otomatis membersihkan riwayat Undo stack Excel. Begitu Macro dijalankan, perubahan lembar kerja tidak bisa dikembalikan dengan Ctrl+Z. Buat backup file sebelum menjalankan macro!'
  },
  {
    id: 'q-v08',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Perintah apakah yang diletakkan di awal kode untuk mematikan kedipan layar selama Macro berjalan agar proses 10x lebih cepat?',
    options: [
      'Application.ScreenUpdating = False',
      'Application.DisplayAlerts = False',
      'Screen.Freeze()',
      'FastMode = True'
    ],
    correctIndex: 0,
    explanation: 'Application.ScreenUpdating = False mematikan penggambaran grafis layar Excel sementara selama kode memproses ribuan data, membuat eksekusi berjalan sangat cepat dan mulus.'
  },
  {
    id: 'q-v09',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Struktur kode apakah yang digunakan untuk menangkap error dan mengalihkan program ke blok penanganan kesalahan khusus?',
    options: [
      'On Error GoTo NamaLabel',
      'Try ... Catch',
      'If Error Then Exit',
      'ErrorHandling = True'
    ],
    correctIndex: 0,
    explanation: 'VBA menggunakan On Error GoTo <Label> untuk melompat ke blok kode penanganan error dan mencegah munculnya jendela Debug kuning bagi pengguna.'
  },
  {
    id: 'q-v10',
    category: 'vba',
    categoryLabel: 'Macro & VBA',
    question: 'Mengapa Anda tidak boleh sembarangan menekan tombol "Enable Content" saat membuka file Excel berekstensi .xlsm dari email orang tak dikenal?',
    options: [
      'Karena akan menghapus font Excel',
      'Karena kode Macro VBA memiliki akses ke sistem operasi komputer dan berpotensi disisipi virus/malware berbahaya',
      'Karena akan mengubah format tanggal menjadi bahasa Inggris',
      'Karena kuota internet akan habis'
    ],
    correctIndex: 1,
    explanation: 'Script VBA memiliki hak akses ke sistem file dan eksekusi perintah Windows. File makro dari sumber yang tidak dipercaya dapat menjalankan kode berbahaya yang merusak komputer atau mencuri data.'
  }
];

export function getQuizzesByCategory(category: string): QuizQuestion[] {
  return quizzesData.filter(q => q.category === category);
}
