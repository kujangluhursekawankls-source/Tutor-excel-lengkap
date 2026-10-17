import { Lesson } from '../types';

export const lessonsMenengah: Lesson[] = [
  {
    id: 'm-01',
    category: 'menengah',
    number: 1,
    title: 'Fungsi SUM, AVERAGE, MIN, dan MAX',
    shortDesc: 'Empat rumus statistik dasar paling sering digunakan untuk menjumlahkan, merata-rata, mencari nilai terkecil dan terbesar.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'SUM, AVERAGE, MIN, dan MAX adalah fungsi agregasi wajib dalam mengolah sekumpulan angka secara cepat dan tepat.',
    explanation: [
      'SUM: Menjumlahkan seluruh angka di dalam rentang yang dipilih. Sintaks: =SUM(number1, [number2], ...).',
      'AVERAGE: Menghitung nilai rata-rata aritmatika dari rentang angka. Sel kosong tidak akan dihitung dalam pembagian, tetapi sel angka 0 tetap dihitung.',
      'MIN: Menemukan nilai angka paling kecil di dalam rentang.',
      'MAX: Menemukan nilai angka paling besar di dalam rentang.'
    ],
    syntax: '=SUM(number1, [number2], ...)',
    syntaxSemicolon: '=SUM(number1; [number2]; ...)',
    argumentsDesc: [
      { name: 'number1', meaning: 'Rentang sel pertama yang wajib diisi (contoh: C2:C10).' },
      { name: 'number2', meaning: 'Rentang sel tambahan kedua (opsional).' }
    ],
    sampleData: {
      headers: ['Nama Siswa', 'Matematika', 'Bahasa Inggris', 'Informatika'],
      rows: [
        ['Andi', 85, 90, 88],
        ['Bunga', 92, 78, 95],
        ['Citra', 70, 85, 80],
        ['Doni', 65, 70, 75]
      ]
    },
    appliedFormula: '=SUM(B2:D2) untuk total nilai Andi, =AVERAGE(B2:B5) untuk rata-rata Matematika kelas.',
    expectedResult: 'Total Andi = 263, Rata-rata Matematika = 78',
    keySteps: [
      'Klik sel tempat Anda ingin menampilkan hasil.',
      'Ketik =SUM( lalu blok rentang angka menggunakan mouse atau jari di HP.',
      'Tutup dengan kurung tutup ) lalu tekan ENTER.',
      'Di komputer, gunakan shortcut Alt + = untuk AutoSum instan.'
    ],
    importantTips: [
      'Perhatikan pemisah rumus di Excel Anda: gunakan koma (,) untuk regional English US, atau titik koma (;) untuk regional Indonesia.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengetik =SUM(A1+A2+A3) yang dobel fungsi.',
        solution: 'Cukup gunakan titik dua =SUM(A1:A3) atau tanda plus saja =A1+A2+A3.'
      }
    ],
    practiceTask: 'Hitung total, nilai rata-rata, nilai tertinggi, dan nilai terendah dari sekumpulan nilai ujian 5 siswa.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Rumus Dasar Excel Paling Sering Dipakai: SUM, AVERAGE, MAX, MIN',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-02',
    category: 'menengah',
    number: 2,
    title: 'COUNT, COUNTA, dan COUNTBLANK',
    shortDesc: 'Menghitung banyaknya sel yang berisi angka, sel berisi teks apa saja, serta sel yang kosong.',
    difficulty: 'Menengah',
    readTime: '4 menit',
    summary: 'Seringkali kita perlu menghitung banyaknya transaksi atau peserta hadir, bukan menjumlahkan nominalnya. Inilah peran keluarga fungsi COUNT.',
    explanation: [
      'COUNT: Hanya menghitung sel yang berisi angka (numbers). Sel teks, simbol, atau sel kosong akan diabaikan.',
      'COUNTA (Count All): Menghitung seluruh sel yang TIDAK KOSONG. Baik berisi teks, angka, maupun simbol error.',
      'COUNTBLANK: Hanya menghitung banyaknya sel yang kosong (blank), sangat berguna untuk mendeteksi data yang belum diinput atau siswa yang tidak mengumpulkan tugas.'
    ],
    syntax: '=COUNT(value1, [value2], ...)',
    syntaxSemicolon: '=COUNT(value1; [value2]; ...)',
    sampleData: {
      headers: ['No', 'Nama Karyawan', 'Nomor Absensi', 'Status Hadir'],
      rows: [
        [1, 'Joko', 101, 'Hadir'],
        [2, 'Rina', 102, 'Hadir'],
        [3, 'Agus', '', 'Izin'],
        [4, 'Sari', 104, 'Hadir'],
        [5, 'Wawan', '', '']
      ]
    },
    appliedFormula: '=COUNT(C2:C6) menghasilkan 3 (sel berisi nomor). =COUNTA(B2:B6) menghasilkan 5 (semua nama). =COUNTBLANK(D2:D6) menghasilkan 1.',
    expectedResult: 'COUNT = 3, COUNTA = 5, COUNTBLANK = 1',
    keySteps: [
      'Gunakan =COUNTA(B2:B100) untuk menghitung total nama yang terdaftar di daftar absensi.',
      'Gunakan =COUNTBLANK(C2:C100) untuk mencari tahu ada berapa orang yang belum menyetor nomor rekening.'
    ],
    importantTips: [
      'Spasi kosong tunggal di dalam sel dianggap sebagai teks oleh COUNTA dan TIDAK dianggap kosong oleh COUNTBLANK.'
    ],
    commonMistakes: [
      {
        mistake: 'Menggunakan =COUNT(A2:A10) untuk menghitung daftar nama teks sehingga hasilnya selalu 0.',
        solution: 'Gunakan =COUNTA() untuk data teks.'
      }
    ],
    practiceTask: 'Buat tabel daftar hadir dengan 5 karyawan, hitung berapa karyawan yang namanya terisi dan berapa sel absensi yang masih kosong.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Perbedaan Fungsi COUNT, COUNTA, dan COUNTBLANK di Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-03',
    category: 'menengah',
    number: 3,
    title: 'Fungsi IF, AND, OR, dan IFERROR',
    shortDesc: 'Membuat keputusan logika otomatis: kelulusan, bonus penjualan, dan membersihkan tampilan error.',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'Fungsi logika memungkinkan Excel mengambil keputusan otomatis berdasarkan syarat kondisi yang ditentukan.',
    explanation: [
      'IF: Menguji suatu kondisi. Jika benar (TRUE) berikan hasil A, jika salah (FALSE) berikan hasil B. Sintaks: =IF(logical_test, value_if_true, value_if_false).',
      'AND: Menguji beberapa syarat sekaligus. Menghasilkan TRUE hanya jika SEMUA syarat terpenuhi.',
      'OR: Menguji beberapa syarat. Menghasilkan TRUE jika SALAH SATU syarat saja terpenuhi.',
      'IFERROR: Mengganti pesan error jelek seperti #N/A, #VALUE!, atau #DIV/0! dengan teks ramah seperti "Data Tidak Ditemukan" atau tanda strip (-).'
    ],
    syntax: '=IF(logical_test, value_if_true, [value_if_false])',
    syntaxSemicolon: '=IF(logical_test; value_if_true; [value_if_false])',
    argumentsDesc: [
      { name: 'logical_test', meaning: 'Kondisi perbandingan (misal: B2>=75 atau AND(B2>=75, C2>=80)).' },
      { name: 'value_if_true', meaning: 'Hasil jika kondisi terpenuhi (misal: "LULUS").' },
      { name: 'value_if_false', meaning: 'Hasil jika kondisi tidak terpenuhi (misal: "REMEDIAL").' }
    ],
    sampleData: {
      headers: ['Nama', 'Nilai Teori', 'Nilai Praktik', 'Rumus Status', 'Hasil'],
      rows: [
        ['Ahmad', 80, 85, '=IF(AND(B2>=75, C2>=75), "LULUS", "REMEDIAL")', 'LULUS'],
        ['Budi', 90, 60, '=IF(AND(B3>=75, C3>=75), "LULUS", "REMEDIAL")', 'REMEDIAL'],
        ['Cahyo', 70, 95, '=IF(OR(B4>=75, C4>=75), "LOLOS", "GAGAL")', 'LOLOS']
      ]
    },
    keySteps: [
      'Di sel status E2, ketik: =IF(B2>=75, "Lulus", "Tidak Lulus").',
      'Ingat: Teks teks hasil WAJIB diapit tanda petik dua ganda ("..."). Angka tidak perlu tanda petik.',
      'Untuk membungkus rumus pembagian agar tidak error saat dibagi 0: =IFERROR(A2/B2, 0).'
    ],
    importantTips: [
      'Operator pembanding: > (lebih besar), < (lebih kecil), >= (lebih besar atau sama dengan), <= (lebih kecil atau sama dengan), = (sama dengan), <> (tidak sama dengan).'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa memberi tanda petik dua pada teks sehingga muncul error #NAME?.',
        solution: 'Selalu gunakan tanda petik dua lurus ganda ("Lulus"), bukan tanda petik satu ganda atau petik miring.'
      }
    ],
    practiceTask: 'Buat tabel nama sales dan total penjualan. Jika penjualan >= Rp 10.000.000 beri bonus "Dapat Bonus Rp 1 Juta", jika kurang beri "Tidak Ada Bonus".',
    youtubeUrl: 'https://www.youtube.com/watch?v=yVbUvPqH9Ng',
    youtubeTitle: 'Belajar Rumus IF Excel dari Dasar Sampai Mahir: Logika Tunggal & Ganda',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-04',
    category: 'menengah',
    number: 4,
    title: 'Fungsi SUMIF dan SUMIFS',
    shortDesc: 'Menjumlahkan angka berdasarkan satu kriteria (SUMIF) atau banyak kriteria sekaligus (SUMIFS).',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'SUMIF dan SUMIFS sangat esensial untuk rekapitulasi data penjualan berdasarkan nama cabang, kategori barang, atau bulan tertentu.',
    explanation: [
      'SUMIF (1 kriteria): Sintaks =SUMIF(range, criteria, [sum_range]). Rentang kriteria di depan, rentang angka yang dijumlahkan di belakang.',
      'SUMIFS (Banyak kriteria): Sintaks =SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...). PENTING: Pada SUMIFS, rentang angka yang dijumlahkan diletakkan di URUTAN PALING DEPAN!',
      'Kriteria teks diapit petik ("Bandung"), kriteria pembanding juga diapit petik (">=500000").'
    ],
    syntax: '=SUMIF(range, criteria, [sum_range]) | =SUMIFS(sum_range, criteria_range1, criteria1, ...)',
    syntaxSemicolon: '=SUMIF(range; criteria; [sum_range]) | =SUMIFS(sum_range; criteria_range1; criteria1; ...)',
    sampleData: {
      headers: ['Cabang', 'Kategori', 'Sales', 'Total Omzet'],
      rows: [
        ['Jakarta', 'Laptop', 'Rian', 'Rp 15.000.000'],
        ['Bandung', 'Printer', 'Dewi', 'Rp 4.000.000'],
        ['Jakarta', 'Laptop', 'Agus', 'Rp 12.000.000'],
        ['Bandung', 'Laptop', 'Siti', 'Rp 8.000.000']
      ]
    },
    appliedFormula: 'Total Laptop di Jakarta: =SUMIFS(D2:D5, A2:A5, "Jakarta", B2:B5, "Laptop")',
    expectedResult: 'Rp 27.000.000',
    keySteps: [
      'Tentukan kolom angka yang akan dijumlahkan (misal kolom D).',
      'Tentukan kolom kriteria (misal kolom A untuk Cabang, kolom B untuk Kategori).',
      'Tulis rumus: =SUMIFS(D2:D5, A2:A5, "Jakarta", B2:B5, "Laptop").'
    ],
    importantTips: [
      'Ingat perbedaan urutan: SUMIF meletakkan sum_range di akhir, sedangkan SUMIFS meletakkan sum_range di paling awal!'
    ],
    commonMistakes: [
      {
        mistake: 'Ukuran rentang baris antara kriteria dan sum_range tidak sama (misal A2:A10 vs D2:D20).',
        solution: 'Pastikan jumlah baris range kriteria dan sum_range selalu berukuran sama persis.'
      }
    ],
    practiceTask: 'Dari tabel transaksi toko, hitung total omzet khusus untuk kategori "Elektronik" yang terjual di cabang "Surabaya".',
    youtubeUrl: 'https://www.youtube.com/watch?v=mbGMsB-RWCI',
    youtubeTitle: 'Cara Menjumlahkan Data berdasarkan Kriteria di Excel dengan SUMIF',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'm-05',
    category: 'menengah',
    number: 5,
    title: 'Fungsi COUNTIF dan COUNTIFS',
    shortDesc: 'Menghitung frekuensi kemunculan data atau transaksi berdasarkan kriteria tertentu.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Gunakan COUNTIF untuk menghitung berapa kali sebuah nama muncul, berapa siswa yang mendapat nilai A, atau berapa transaksi di atas target.',
    explanation: [
      'COUNTIF: Menghitung sel dengan 1 kriteria. Sintaks: =COUNTIF(range, criteria).',
      'COUNTIFS: Menghitung sel dengan 2 atau lebih kriteria sekaligus. Sintaks: =COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2, ...).'
    ],
    syntax: '=COUNTIF(range, criteria) | =COUNTIFS(criteria_range1, criteria1, ...)',
    syntaxSemicolon: '=COUNTIF(range; criteria) | =COUNTIFS(criteria_range1; criteria1; ...)',
    sampleData: {
      headers: ['Nama Pelanggan', 'Kota', 'Total Belanja', 'Metode Bayar'],
      rows: [
        ['PT Maju', 'Surabaya', 'Rp 5.000.000', 'Transfer'],
        ['CV Berkah', 'Jakarta', 'Rp 2.000.000', 'Tunai'],
        ['Toko Sejahtera', 'Surabaya', 'Rp 7.500.000', 'Transfer'],
        ['PT Sentosa', 'Bandung', 'Rp 1.500.000', 'Transfer']
      ]
    },
    appliedFormula: 'Hitung transaksi pelanggan Surabaya yang bayar Transfer: =COUNTIFS(B2:B5, "Surabaya", D2:D5, "Transfer")',
    expectedResult: '2 transaksi',
    keySteps: [
      'Ketik =COUNTIF(B2:B5, "Surabaya") untuk menghitung berapa pelanggan dari Surabaya.',
      'Gunakan karakter wildcard bintang (*) jika ingin mencari teks sebagian, contoh: =COUNTIF(A2:A5, "PT*") menghitung nama yang diawali PT.'
    ],
    importantTips: [
      'Kriteria angka lebih besar dari 5000000 ditulis dengan tanda petik: ">5000000".'
    ],
    commonMistakes: [
      {
        mistake: 'Menulis =COUNTIF(A2:A10, >=80) tanpa tanda petik.',
        solution: 'Operator logika pembanding wajib diapit tanda petik: ">=80".'
      }
    ],
    practiceTask: 'Hitung berapa transaksi di daftar Anda yang nilainya di atas Rp 3.000.000.',
    youtubeUrl: 'https://www.youtube.com/watch?v=bhfRlU_bNmw',
    youtubeTitle: 'Menghitung Banyak Data Sesuai Kriteria dengan COUNTIF & COUNTIFS',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-06',
    category: 'menengah',
    number: 6,
    title: 'Fungsi AVERAGEIF dan AVERAGEIFS',
    shortDesc: 'Menghitung nilai rata-rata dari data yang memenuhi syarat tertentu secara spesifik.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Membantu Anda mengetahui rata-rata penjualan per divisi, rata-rata pengeluaran bensin, atau rata-rata nilai siswa per jenis kelamin.',
    explanation: [
      'AVERAGEIF: Menghitung rata-rata dari sel yang memenuhi 1 kriteria tunggal.',
      'AVERAGEIFS: Menghitung rata-rata berdasarkan multi-kriteria.',
      'Sama seperti SUMIFS, pada AVERAGEIFS urutan argumen average_range (rentang angka yang dirata-ratakan) berada di paling awal.'
    ],
    syntax: '=AVERAGEIF(range, criteria, [average_range]) | =AVERAGEIFS(average_range, criteria_range1, criteria1, ...)',
    syntaxSemicolon: '=AVERAGEIF(range; criteria; [average_range]) | =AVERAGEIFS(average_range; criteria_range1; criteria1; ...)',
    sampleData: {
      headers: ['Divisi', 'Golongan', 'Gaji Pokok'],
      rows: [
        ['Marketing', 'Staff', 'Rp 4.500.000'],
        ['IT', 'Staff', 'Rp 6.000.000'],
        ['Marketing', 'Manager', 'Rp 9.500.000'],
        ['Marketing', 'Staff', 'Rp 4.800.000']
      ]
    },
    appliedFormula: 'Rata-rata gaji staff Marketing: =AVERAGEIFS(C2:C5, A2:A5, "Marketing", B2:B5, "Staff")',
    expectedResult: 'Rp 4.650.000',
    keySteps: [
      'Tulis: =AVERAGEIFS(C2:C5, A2:A5, "Marketing", B2:B5, "Staff").',
      'Tekan ENTER, Excel otomatis memfilter baris yang cocok lalu membaginya dengan jumlah baris yang sesuai.'
    ],
    importantTips: [
      'Jika tidak ada data yang memenuhi kriteria sama sekali, AVERAGEIF akan menghasilkan error #DIV/0!. Bungkus dengan IFERROR untuk mengamankannya.'
    ],
    commonMistakes: [
      {
        mistake: 'Tertukar urutan argumen antara AVERAGEIF dan AVERAGEIFS.',
        solution: 'Di AVERAGEIF, range kriteria di depan. Di AVERAGEIFS, average_range (kolom angka) di depan.'
      }
    ],
    practiceTask: 'Hitung rata-rata nilai matematika khusus untuk siswa yang berstatus "Laki-laki".',
    youtubeUrl: 'https://www.youtube.com/watch?v=bhfRlU_bNmw',
    youtubeTitle: 'Cara Menhitung Rata-rata Bersyarat dengan AVERAGEIF dan AVERAGEIFS',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-07',
    category: 'menengah',
    number: 7,
    title: 'Fungsi VLOOKUP dan HLOOKUP',
    shortDesc: 'Rumus legendaris dunia kerja untuk mencari data dari tabel referensi lain secara otomatis.',
    difficulty: 'Menengah',
    readTime: '7 menit',
    summary: 'VLOOKUP (Vertical Lookup) mencari nilai kunci di kolom paling kiri sebuah tabel referensi, lalu mengambil nilai dari kolom di kanannya.',
    explanation: [
      'Sintaks: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]).',
      'lookup_value: Kode barang, NIK, atau ID yang dijadikan acuan pencarian.',
      'table_array: Seluruh area tabel referensi (wajib dikunci dengan F4 agar tidak bergeser saat ditarik).',
      'col_index_num: Nomor urut kolom dari tabel referensi yang ingin diambil hasilnya (kolom 1, 2, 3, dst).',
      'range_lookup: WAJIB diisi 0 atau FALSE untuk pencarian nilai yang persis sama (Exact Match).'
    ],
    syntax: '=VLOOKUP(lookup_value, table_array, col_index_num, FALSE)',
    syntaxSemicolon: '=VLOOKUP(lookup_value; table_array; col_index_num; FALSE)',
    sampleData: {
      headers: ['Kode', 'Nama Barang (Master)', 'Harga Satuan (Master)'],
      rows: [
        ['B-01', 'Kertas HVS A4 70gr', 'Rp 45.000'],
        ['B-02', 'Tinta Printer Hitam', 'Rp 85.000'],
        ['B-03', 'Map Folio Karton', 'Rp 3.500']
      ]
    },
    appliedFormula: 'Di tabel kasir, ketik kode di A2, di B2 masukkan rumus: =VLOOKUP(A2, $A$2:$C$4, 2, FALSE)',
    expectedResult: 'Jika A2 diisi "B-02", sel B2 otomatis menampilkan "Tinta Printer Hitam".',
    keySteps: [
      'Ketik =VLOOKUP( lalu klik sel kode acuan (A2).',
      'Ketik koma/titik koma, lalu blok tabel master dari kolom kode sampai kolom harga ($A$2:$C$4). Tekan F4.',
      'Ketik angka nomor kolom yang ingin diambil (misal angka 2 untuk Nama Barang).',
      'Ketik 0 atau FALSE, lalu tutup kurung dan ENTER.'
    ],
    importantTips: [
      'VLOOKUP HANYA bisa mencari data ke arah KANAN. Kolom kode acuan WAJIB berada di kolom nomor 1 (paling kiri) pada tabel master.'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa memberi angka 0 atau FALSE di argumen terakhir sehingga VLOOKUP mengambil data acak saat kode tidak ditemukan.',
        solution: 'Selalu akhiri VLOOKUP dengan angka 0 atau FALSE untuk Exact Match.'
      },
      {
        mistake: 'Lupa mengunci tabel master dengan F4 ($A$2:$C$4) sehingga saat rumus ditarik ke bawah menghasilkan #N/A.',
        solution: 'Tekan F4 pada table_array.'
      }
    ],
    practiceTask: 'Buat tabel master produk 4 baris, lalu gunakan VLOOKUP di lembar transaksi untuk memunculkan nama barang dan harga otomatis berdasarkan kode.',
    youtubeUrl: 'https://www.youtube.com/watch?v=TAzIhJPNdBg',
    youtubeTitle: 'Cara Cepat Menggunakan Rumus VLOOKUP & HLOOKUP di Excel',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'm-08',
    category: 'menengah',
    number: 8,
    title: 'Fungsi XLOOKUP (Excel 365 / Excel 2021+)',
    shortDesc: 'Penerus modern VLOOKUP yang jauh lebih cepat, fleksibel, bisa mencari ke kiri, dan tanpa nomor indeks kolom.',
    difficulty: 'Menengah',
    readTime: '6 menit',
    versionRequirement: 'Microsoft 365 & Excel 2021 ke atas',
    summary: 'XLOOKUP adalah fungsi pencarian generasi terbaru yang menggantikan VLOOKUP, HLOOKUP, dan LOOKUP sekaligus dengan sintaks yang sangat intuitif.',
    explanation: [
      'Keunggulan XLOOKUP dibanding VLOOKUP: Bisa mencari ke kiri maupun ke kanan tanpa batas.',
      'Tidak memerlukan nomor urut indeks kolom (cukup blok kolom hasil langsung).',
      'Secara default sudah Exact Match (tidak wajib mengetik angka 0 lagi).',
      'Memiliki argumen bawaan [if_not_found] sehingga tidak perlu dibungkus IFERROR jika data tidak ada.',
      'Sintaks: =XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode]).'
    ],
    syntax: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])',
    syntaxSemicolon: '=XLOOKUP(lookup_value; lookup_array; return_array; [if_not_found])',
    sampleData: {
      headers: ['Gaji Pokok (Kolom A)', 'Nama Karyawan (Kolom B)', 'NIK (Kolom C)'],
      rows: [
        ['Rp 6.000.000', 'Budi Santoso', 'EMP-001'],
        ['Rp 8.500.000', 'Siti Rahma', 'EMP-002'],
        ['Rp 5.200.000', 'Doni Pratama', 'EMP-003']
      ]
    },
    appliedFormula: 'Cari nama dari NIK: =XLOOKUP("EMP-002", C2:C4, B2:B4, "Tidak Ditemukan")',
    expectedResult: 'Siti Rahma (Bisa mengambil data ke kiri secara sempurna)',
    keySteps: [
      'Pilih sel hasil.',
      'Ketik =XLOOKUP( sel_kunci, kolom_pencarian, kolom_hasil, "Pesan jika tidak ada" ).',
      'Tekan ENTER. Rumus bekerja sangat cepat.'
    ],
    importantTips: [
      'Jika file Anda akan dibuka oleh orang yang masih menggunakan Excel 2013 atau 2016 lama, XLOOKUP akan menghasilkan error #NAME? di komputer mereka. Gunakan INDEX/MATCH untuk kompatibilitas versi lawas.'
    ],
    commonMistakes: [
      {
        mistake: 'Panjang rentang lookup_array dan return_array tidak sama.',
        solution: 'Pastikan tinggi baris kolom pencarian dan kolom hasil sama (misal C2:C100 dan B2:B100).'
      }
    ],
    practiceTask: 'Terapkan rumus XLOOKUP untuk mencari data ke kiri dan atur pesan "Data Tidak Ada" jika kode salah ketik.',
    youtubeUrl: 'https://www.youtube.com/watch?v=BGM2ts-dh3I',
    youtubeTitle: 'Cara Menggunakan Rumus XLOOKUP di Excel: Pengganti Modern VLOOKUP',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-09',
    category: 'menengah',
    number: 9,
    title: 'Kombinasi INDEX dan MATCH',
    shortDesc: 'Alternatif tingkat tinggi VLOOKUP untuk pencarian data ke kiri pada Excel semua versi lawas.',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'Sebelum ada XLOOKUP, kombinasi INDEX dan MATCH adalah solusi standar profesional untuk pencarian data fleksibel tanpa batasan arah kolom.',
    explanation: [
      'MATCH: Berfungsi mencari nomor urut baris dari sebuah kata kunci di dalam satu baris/kolom. Sintaks: =MATCH(lookup_value, lookup_array, 0).',
      'INDEX: Mengambil isi sel pada koordinat baris dan kolom tertentu. Sintaks: =INDEX(array, row_num, [col_num]).',
      'Kombinasi Keduanya: =INDEX(kolom_yang_mau_diambil, MATCH(kunci_cari, kolom_acuan, 0)).'
    ],
    syntax: '=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))',
    syntaxSemicolon: '=INDEX(return_range; MATCH(lookup_value; lookup_range; 0))',
    sampleData: {
      headers: ['Nama Lengkap (A)', 'Jabatan (B)', 'Nomor Induk (C)'],
      rows: [
        ['Ratna Sari', 'Supervisor', 'NIP-101'],
        ['Hendra Wijaya', 'Manager', 'NIP-102'],
        ['Maya Putri', 'Staff Akuntansi', 'NIP-103']
      ]
    },
    appliedFormula: 'Mencari Nama Lengkap berdasarkan NIP: =INDEX(A2:A4, MATCH("NIP-102", C2:C4, 0))',
    expectedResult: 'Hendra Wijaya',
    keySteps: [
      'Gunakan MATCH("NIP-102", C2:C4, 0) -> menghasilkan angka 2 (baris ke-2).',
      'Bungkus dengan INDEX(A2:A4, 2) -> mengambil isi baris ke-2 dari kolom A, yaitu Hendra Wijaya.',
      'Formula ini tidak terpengaruh jika Anda menyisipkan kolom baru di tengah-tengah tabel!'
    ],
    importantTips: [
      'Tidak seperti VLOOKUP yang rusak jika ada kolom baru disisipkan, kombinasi INDEX MATCH tetap stabil dan tidak geser.'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa angka 0 di dalam fungsi MATCH sehingga pencarian menjadi tidak akurat.',
        solution: 'Selalu tulis =MATCH(kunci, range, 0).'
      }
    ],
    practiceTask: 'Terapkan rumus INDEX dan MATCH untuk mencari nama karyawan berdasarkan NIK yang posisinya di sebelah kanan nama.',
    youtubeUrl: 'https://www.youtube.com/watch?v=IHY7HrB0mTE',
    youtubeTitle: 'Cara Menggunakan Rumus INDEX dan MATCH di Excel Lengkap',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'm-10',
    category: 'menengah',
    number: 10,
    title: 'Fungsi Teks: LEFT, RIGHT, MID, LEN, dan TRIM',
    shortDesc: 'Memotong kode, mengambil karakter dari kiri, kanan, tengah, menghitung panjang huruf, dan membuang spasi ganda.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Fungsi teks sangat vital untuk merapikan data kotor, membedah nomor resi, nomor seri barang, atau kode barcode.',
    explanation: [
      'LEFT(text, num_chars): Mengambil sejumlah karakter dari sisi paling kiri teks.',
      'RIGHT(text, num_chars): Mengambil sejumlah karakter dari sisi paling kanan teks.',
      'MID(text, start_num, num_chars): Mengambil karakter dari tengah teks mulai urutan keberapa sebanyak berapa karakter.',
      'LEN(text): Menghitung jumlah total karakter teks (termasuk spasi).',
      'TRIM(text): Membuang spasi berlebih di awal, di akhir, dan spasi dobel di tengah kata.'
    ],
    sampleData: {
      headers: ['Kode Transaksi', 'LEFT(A2,3)', 'MID(A2,5,4)', 'RIGHT(A2,3)', 'LEN(A2)'],
      rows: [
        ['INV-2026-JKT', 'INV', '2026', 'JKT', 12],
        ['ORD-2025-SBY', 'ORD', '2025', 'SBY', 12]
      ]
    },
    keySteps: [
      'Jika sel A2 berisi "INV-2026-JKT":',
      '=LEFT(A2, 3) -> "INV"',
      '=MID(A2, 5, 4) -> "2026"',
      '=RIGHT(A2, 3) -> "JKT"',
      'Gunakan =TRIM(sel) sebelum rumus VLOOKUP jika data sering gagal karena spasi tak terlihat.'
    ],
    importantTips: [
      'Angka hasil potongan rumus LEFT/RIGHT/MID akan berstatus sebagai TEKS. Untuk mengubahnya menjadi angka matematika kembali, kalikan dengan 1 atau gunakan fungsi VALUE(RIGHT(A2,3)).'
    ],
    commonMistakes: [
      {
        mistake: 'Salah menentukan start_num pada rumus MID (ingat tanda strip (-) juga dihitung sebagai 1 karakter).',
        solution: 'Hitung urutan karakter dengan teliti dari huruf pertama.'
      }
    ],
    practiceTask: 'Potong nomor telepon 0812-3456-7890 menjadi tiga bagian terpisah menggunakan LEFT, MID, dan RIGHT.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Fungsi Teks Excel: Memotong Karakter dengan LEFT, RIGHT, MID, dan TRIM',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-11',
    category: 'menengah',
    number: 11,
    title: 'CONCAT, CONCATENATE, Simbol (&), dan TEXTJOIN',
    shortDesc: 'Menggabungkan teks dari beberapa sel menjadi satu kalimat utuh dengan pembatas pemisah rapi.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Pelajari cara menggabungkan nama depan dan belakang, merangkai alamat lengkap, atau menyusun kalimat invoice otomatis.',
    explanation: [
      'Simbol Ampersand (&): Cara paling cepat menggabungkan teks tanpa mengetik nama fungsi. Contoh: =A2 & " " & B2.',
      'CONCAT: Fungsi modern penggabung rentang teks tanpa pemisah.',
      'TEXTJOIN (Excel 2019 / 365): Fungsi paling canggih karena memungkinkan menyisipkan pemisah otomatis (koma, strip, spasi) sekaligus mengabaikan sel yang kosong!',
      'Sintaks TEXTJOIN: =TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...).'
    ],
    sampleData: {
      headers: ['Nama Depan', 'Nama Belakang', 'Kota', 'Hasil Gabungan'],
      rows: [
        ['Rian', 'Hidayat', 'Surabaya', 'Rian Hidayat (Surabaya)'],
        ['Siti', 'Aisyah', 'Bandung', 'Siti Aisyah (Bandung)']
      ]
    },
    appliedFormula: '=A2 & " " & B2 & " (" & C2 & ")"',
    keySteps: [
      'Untuk menggabungkan teks dengan spasi: =A2 & " " & B2.',
      'Untuk merangkai daftar hobi yang ada di rentang A2:E2 dipisah tanda koma: =TEXTJOIN(", ", TRUE, A2:E2).'
    ],
    importantTips: [
      'Spasi pemisah wajib diletakkan di antara tanda petik dua (" "). Jika tidak, nama depan dan belakang akan menempel: RianHidayat.'
    ],
    commonMistakes: [
      {
        mistake: 'Menggabungkan teks dengan tanggal secara biasa (=A2 & B2) sehingga tanggal berubah menjadi angka serial 45000.',
        solution: 'Gunakan fungsi TEXT untuk mengunci format tanggal: =A2 & " " & TEXT(B2, "dd mmmm yyyy").'
      }
    ],
    practiceTask: 'Gabungkan kolom Nama Depan, Nama Belakang, dan Gelar (S.Kom) menjadi nama lengkap bergelar rapi.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Menggabungkan Teks Antar Sel dengan Rumus TEXTJOIN & CONCAT di Excel',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-12',
    category: 'menengah',
    number: 12,
    title: 'Fungsi Tanggal: DATE, TODAY, NOW, DAY, MONTH, YEAR, DATEDIF',
    shortDesc: 'Menghitung umur, masa kerja karyawan, jatuh tempo tagihan, dan mengekstrak komponen tanggal.',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'Excel menyimpan tanggal sebagai nomor seri berurutan (angka 1 = 1 Januari 1900), sehingga tanggal bisa ditambah, dikurang, dan dihitung selisih harinya.',
    explanation: [
      'TODAY(): Menghasilkan tanggal hari ini secara dinamis (otomatis berubah setiap hari).',
      'NOW(): Menghasilkan tanggal dan jam saat ini.',
      'YEAR(date), MONTH(date), DAY(date): Mengambil angka tahun, bulan, atau hari dari sebuah tanggal.',
      'DATEDIF: Rumus rahasia Excel untuk menghitung selisih umur atau masa kerja dalam tahun ("Y"), bulan ("M"), atau hari ("D"). Sintaks: =DATEDIF(start_date, end_date, "Y").'
    ],
    sampleData: {
      headers: ['Nama', 'Tanggal Lahir', 'Rumus Umur', 'Hasil Umur'],
      rows: [
        ['Budi', '15/05/1995', '=DATEDIF(B2, TODAY(), "Y") & " Tahun"', '31 Tahun'],
        ['Rina', '20/11/2000', '=DATEDIF(B3, TODAY(), "Y") & " Tahun"', '25 Tahun']
      ]
    },
    keySteps: [
      'Menghitung Jatuh Tempo 30 Hari: =Tanggal_Faktur + 30.',
      'Menghitung Umur dalam Tahun: =DATEDIF(B2, TODAY(), "Y").',
      'Menghitung Umur Lengkap (Tahun dan Bulan): =DATEDIF(B2, TODAY(), "Y") & " Thn " & DATEDIF(B2, TODAY(), "YM") & " Bln".'
    ],
    importantTips: [
      'Fungsi DATEDIF tidak muncul di saran autocomplete Excel, namun tetap resmi didukung dan berfungsi sempurna.'
    ],
    commonMistakes: [
      {
        mistake: 'Menaruh tanggal hari ini di argumen pertama DATEDIF sehingga menghasilkan error #NUM!.',
        solution: 'Argumen pertama DATEDIF WAJIB tanggal yang lebih lampau (tanggal lahir), baru diikuti tanggal sekarang.'
      }
    ],
    practiceTask: 'Buat tabel daftar karyawan dengan kolom Tanggal Masuk, lalu hitung masa kerja masing-masing dalam satuan Tahun.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Fungsi Tanggal dan Waktu Otomatis di Excel: TODAY, DATE, dan DATEDIF',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-13',
    category: 'menengah',
    number: 13,
    title: 'Fungsi Pembulatan: ROUND, ROUNDUP, dan ROUNDDOWN',
    shortDesc: 'Membulatkan angka desimal ke digit tertentu, membulatkan ke atas, ke bawah, atau ke ribuan terdekat.',
    difficulty: 'Menengah',
    readTime: '4 menit',
    summary: 'Format desimal di layar sering mengecoh; gunakan fungsi ROUND agar hasil kalkulasi matematika bulat sebenarnya.',
    explanation: [
      'ROUND: Pembulatan matematika standar (angka 5 ke atas dibulatkan naik, di bawah 5 dibulatkan turun).',
      'ROUNDUP: Selalu membulatkan ke atas menjauhi nol.',
      'ROUNDDOWN: Selalu membulatkan ke bawah mendekati nol.',
      'Argumen num_digits: 2 (2 desimal), 0 (bilangan bulat utuh), -2 (ke ratusan terdekat), -3 (ke ribuan terdekat).'
    ],
    sampleData: {
      headers: ['Angka Awal', 'ROUND(A2, 0)', 'ROUNDUP(A2, 0)', 'ROUNDDOWN(A2, 0)', 'ROUND(A2, -3)'],
      rows: [
        [125480.75, 125481, 125481, 125480, 125000],
        [14350.20, 14350, 14351, 14350, 14000]
      ]
    },
    keySteps: [
      'Ketik =ROUND(A2, 0) untuk membulatkan harga menjadi tanpa desimal.',
      'Ketik =ROUNDUP(A2, -3) untuk membulatkan tagihan ke kelipatan seribu ke atas.'
    ],
    importantTips: [
      'Mengurangi angka desimal lewat tombol Ribbon "Decrease Decimal" hanya menyamarkan tampilan layar, bukan membulatkan nilai aslinya.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengira format sel sama dengan pembulatan rumus ROUND sehingga saat dijumlahkan totalnya selisih 1 angka.',
        solution: 'Gunakan fungsi ROUND murni di rumus jika total akhir harus benar-benar akurat.'
      }
    ],
    practiceTask: 'Terapkan ROUNDUP pada perhitungan harga belanjaan agar selalu dibulatkan ke kelipatan seratus rupiah ke atas.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Cara Membulatkan Angka Desimal di Excel dengan ROUND, ROUNDUP, ROUNDDOWN',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-14',
    category: 'menengah',
    number: 14,
    title: 'Conditional Formatting (Format Bersyarat)',
    shortDesc: 'Memberi warna otomatis pada sel jika mencapai target, sel merah jika di bawah standar, atau data bars.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Ubah tabel Anda menjadi dashboard interaktif yang otomatis menyorot nilai penting tanpa perlu diwarnai manual.',
    explanation: [
      'Highlight Cells Rules: Mewarnai sel jika Greater Than, Less Than, Between, atau Text that Contains.',
      'Top/Bottom Rules: Otomatis menyorot 10 nilai tertinggi atau nilai di atas rata-rata.',
      'Data Bars: Menampilkan grafik batang mini langsung di dalam sel sesuai besaran angka.',
      'Color Scales (Heatmap): Gradasi warna hijau-kuning-merah untuk melihat performa.',
      'Icon Sets: Menampilkan ikon panah hijau naik, panah kuning datar, atau silang merah.'
    ],
    keySteps: [
      'Blok kolom angka yang ingin diberi format.',
      'Klik tab Home > Conditional Formatting.',
      'Pilih "Highlight Cells Rules" > "Greater Than...".',
      'Ketik angka 80, lalu pilih format "Green Fill with Dark Green Text".',
      'Klik OK. Seluruh nilai di atas 80 otomatis berwarna hijau.'
    ],
    importantTips: [
      'Gunakan menu "Manage Rules" di bagian bawah untuk mengedit atau menghapus aturan warna yang sudah tidak terpakai.'
    ],
    commonMistakes: [
      {
        mistake: 'Mewarnai sel manual satu per satu sehingga saat angka berubah warnanya tidak ikut berubah.',
        solution: 'Selalu gunakan Conditional Formatting agar warna dinamis mengikuti nilai sel.'
      }
    ],
    practiceTask: 'Buat kolom status nilai siswa, lalu atur Conditional Formatting agar sel otomatis berwarna merah muda jika nilai di bawah 70.',
    youtubeUrl: 'https://www.youtube.com/watch?v=xM_OyX4z1HE',
    youtubeTitle: 'Conditional Formatting di Excel untuk Pemula: Sel Otomatis Berwarna',
    youtubeChannel: 'NalarKita'
  },
  {
    id: 'm-15',
    category: 'menengah',
    number: 15,
    title: 'Data Validation dan Dropdown List',
    shortDesc: 'Mengunci pilihan input agar seragam, anti-salah ketik (typo), dan membatasi rentang angka/tanggal.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Data Validation mencegah pengguna salah ketik nama kota, memilih tanggal yang salah, atau memasukkan angka di luar rentang.',
    explanation: [
      'List (Dropdown): Pengguna hanya bisa memilih dari daftar opsi yang disediakan (misal: "Lunas", "Belum Bayar", "Cicilan").',
      'Whole Number: Membatasi input hanya angka bulat (misal umur antara 17 sampai 65 tahun).',
      'Date: Membatasi input tanggal hanya di tahun berjalan.',
      'Input Message & Error Alert: Menampilkan pesan panduan saat sel diklik dan pesan peringatan jika salah input.'
    ],
    keySteps: [
      'Pilih sel atau kolom yang ingin dipasangi dropdown.',
      'Buka tab Data > klik ikon "Data Validation".',
      'Pada tab Settings di bagian "Allow", pilih opsi "List".',
      'Pada kotak "Source", ketik opsi dipisah koma (misal: Lunas, Belum Lunas) atau blok referensi rentang sel master opsi.',
      'Klik OK. Panah dropdown akan muncul di sel tersebut.'
    ],
    importantTips: [
      'Jika di komputer regional Indonesia daftar tidak terpisah, ganti pemisah koma menjadi titik koma (Lunas; Belum Lunas).'
    ],
    commonMistakes: [
      {
        mistake: 'Mengetik opsi langsung tanpa pemisah yang sesuai pengaturan regional.',
        solution: 'Pastikan pemisah opsi (koma atau titik koma) sesuai pengaturan regional Excel Anda.'
      }
    ],
    practiceTask: 'Buat dropdown pilihan status pesanan: "Diproses, Dikirim, Selesai, Dibatalkan".',
    youtubeUrl: 'https://www.youtube.com/watch?v=RW8vFrP5bZo',
    youtubeTitle: 'Membuat Drop Down List dengan Data Validation untuk Input Data Rapi',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-16',
    category: 'menengah',
    number: 16,
    title: 'Menghapus Data Ganda (Remove Duplicates)',
    shortDesc: 'Membersihkan duplikat data pelanggan, nomor telepon ganda, atau transaksi kembar dalam 1 klik.',
    difficulty: 'Menengah',
    readTime: '3 menit',
    summary: 'Data duplikat merusak akurasi laporan dan menyebabkan salah hitung stok atau penagihan ganda.',
    explanation: [
      'Fitur Remove Duplicates memindai baris-baris data dan menghapus baris yang identik, hanya menyisakan satu data unik pertama.',
      'Bisa memilih duplikat berdasarkan 1 kolom acuan unik (misal NIK / Nomor HP) atau seluruh kolom sekaligus.'
    ],
    keySteps: [
      'Klik salah satu sel di dalam tabel Anda.',
      'Buka tab Data > klik ikon "Remove Duplicates".',
      'Pilih kolom yang menjadi acuan keunikan (misal centang kolom "Nomor Telepon").',
      'Klik OK. Excel akan menampilkan jendela ringkasan berapa data duplikat yang dihapus dan berapa data unik tersisa.'
    ],
    importantTips: [
      'Remove Duplicates menghapus data secara permanen. Sangat disarankan membuat salinan cadangan (backup) sheet sebelum menjalankannya.'
    ],
    commonMistakes: [
      {
        mistake: 'Menghapus duplikat tanpa menyadari ada perbedaan spasi kecil di akhir nama sehingga data dianggap berbeda.',
        solution: 'Jalankan rumus TRIM() terlebih dahulu sebelum mengeksekusi Remove Duplicates.'
      }
    ],
    practiceTask: 'Buat daftar 10 nama dengan 3 nama yang sengaja dibuat kembar, lalu bersihkan dengan Remove Duplicates.',
    youtubeUrl: 'https://www.youtube.com/watch?v=_7Z1KVhWS8Y',
    youtubeTitle: 'Cara Cepat Menghapus Data Ganda Duplikat di Excel',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'm-17',
    category: 'menengah',
    number: 17,
    title: 'Text to Columns (Memecah Teks Jadi Kolom)',
    shortDesc: 'Memisahkan nama depan dan nama belakang, kode gabungan, atau data CSV yang menumpuk di satu kolom.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Seringkali data download dari bank atau sistem berkumpul di satu sel dipisah tanda koma. Text to Columns memecahnya dengan instan.',
    explanation: [
      'Delimited: Memecah teks berdasarkan karakter pemisah tertentu (koma, titik koma, spasi, tab, atau strip).',
      'Fixed Width: Memecah teks berdasarkan panjang jumlah karakter tetap dengan garis batas vertikal.'
    ],
    keySteps: [
      'Blok kolom teks yang ingin dipecah (misal kolom Nama Lengkap).',
      'Buka tab Data > klik "Text to Columns".',
      'Pilih "Delimited" lalu klik Next.',
      'Centang tanda pemisah yang sesuai (misal: "Space" untuk spasi).',
      'Tentukan kolom tujuan (Destination) lalu klik Finish.'
    ],
    importantTips: [
      'Pastikan kolom di sebelah kanan dalam keadaan kosong agar data yang terpecah tidak menimpa data yang sudah ada.'
    ],
    commonMistakes: [
      {
        mistake: 'Tidak mengubah Destination sel sehingga kolom asli tertimpa hilang.',
        solution: 'Isi Destination dengan sel kolom kosong di sebelahnya (misal $B$2).'
      }
    ],
    practiceTask: 'Pecah data teks "Kota - Kode Pos" seperti "Jakarta - 10110" menjadi dua kolom terpisah.',
    youtubeUrl: 'https://www.youtube.com/watch?v=TjihhdITGAc',
    youtubeTitle: 'Cara Pakai Text to Columns: Memisahkan Teks ke Banyak Kolom',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'm-18',
    category: 'menengah',
    number: 18,
    title: 'Flash Fill (Ctrl + E): Fitur Ajaib Excel',
    shortDesc: 'Otomatisasi pengisian pola teks cerdas hanya dengan menekan Ctrl + E tanpa menulis rumus rumit.',
    difficulty: 'Menengah',
    readTime: '4 menit',
    summary: 'Flash Fill mendeteksi pola yang Anda ketik secara otomatis dan langsung melengkapi seluruh baris ke bawah.',
    explanation: [
      'Bisa digunakan untuk: Memisahkan nama depan/belakang, menyisipkan tanda titik pada NIK/NPWP, mengubah huruf besar/kecil (UPPER/LOWER), merapikan format nomor telepon.',
      'Shortcut sakti: Cukup ketik 1 contoh hasil di baris pertama, tekan ENTER, lalu tekan Ctrl + E.'
    ],
    sampleData: {
      headers: ['Nama Lengkap (A)', 'Ketik Contoh di B2', 'Tekan Ctrl + E di B3'],
      rows: [
        ['andi setiawan', 'Andi Setiawan', '(Hasil otomatis rapi Proper Case)'],
        ['bunga lestari', '', 'Bunga Lestari'],
        ['citra kirana', '', 'Citra Kirana']
      ]
    },
    keySteps: [
      'Ketik hasil yang diinginkan di kolom sebelah data sumber pada baris pertama.',
      'Pindah ke baris kedua di bawahnya.',
      'Tekan shortcut Ctrl + E (atau klik tab Data > Flash Fill).',
      'Seluruh baris ke bawah akan terisi otomatis mengikuti pola Anda.'
    ],
    importantTips: [
      'Jika Flash Fill menghasilkan tebakan yang keliru, ketik contoh manual kedua di baris 2 agar Excel mengenali polanya lebih akurat.'
    ],
    commonMistakes: [
      {
        mistake: 'Flash Fill statis; jika data di kolom sumber diedit, kolom hasil Flash Fill tidak otomatis berubah.',
        solution: 'Jika membutuhkan hasil yang dinamis mengikuti perubahan sumber, gunakan rumus fungsi teks.'
      }
    ],
    practiceTask: 'Ketik 5 alamat email (contoh: budi@gmail.com) lalu gunakan Flash Fill (Ctrl + E) untuk mengambil nama depannya saja.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Fitur Cerdas Flash Fill (Ctrl + E) Merapikan Ribuan Baris Teks dalam 1 Detik',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-19',
    category: 'menengah',
    number: 19,
    title: 'Freeze Panes (Membekukan Baris Judul)',
    shortDesc: 'Menjaga agar judul tabel baris atas atau kolom nomor urut tetap terlihat saat digulir ke bawah.',
    difficulty: 'Menengah',
    readTime: '3 menit',
    summary: 'Saat membaca tabel dengan ratusan baris, judul kolom sering hilang ke atas sehingga membingungkan. Freeze Panes solusinya.',
    explanation: [
      'Freeze Top Row: Membekukan hanya baris nomor 1 paling atas.',
      'Freeze First Column: Membekukan hanya kolom A paling kiri.',
      'Freeze Panes Kustom: Membekukan baris dan kolom sekaligus berdasarkan posisi sel aktif.'
    ],
    keySteps: [
      'Untuk membekukan baris header: Buka tab View > klik Freeze Panes > pilih "Freeze Top Row".',
      'Untuk membekukan baris 1 dan kolom A sekaligus: Klik pada sel B2, buka tab View > Freeze Panes > pilih opsi pertama "Freeze Panes".'
    ],
    importantTips: [
      'Garis tipis abu-abu gelap menandakan batas area lembar kerja yang terkunci.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengklik Freeze Panes saat posisi scroll sedang di tengah-tengah tabel sehingga baris awal tersembunyi permanen di atas.',
        solution: 'Scroll lembar kerja ke paling atas (Ctrl + Home) sebelum mengaktifkan Freeze Panes.'
      }
    ],
    practiceTask: 'Buka tabel data panjang, bekukan baris judul atas, lalu gulir layar ke bawah untuk membuktikan judul tetap tampil.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Cara Mengunci Baris Judul Header Tabel dengan Freeze Panes',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-20',
    category: 'menengah',
    number: 20,
    title: 'Named Range (Memberi Nama Rentang Sel)',
    shortDesc: 'Mengganti koordinat sel rumit seperti Sheet1!$A$2:$A$100 dengan nama ramah seperti "Daftar_Harga".',
    difficulty: 'Menengah',
    readTime: '4 menit',
    summary: 'Named Range membuat rumus Anda terbaca seperti bahasa manusia: =SUM(Penjualan_Maret) alih-alih =SUM(C2:C50).',
    explanation: [
      'Memudahkan penulisan rumus di sheet lain tanpa perlu klik bolak-balik antar sheet.',
      'Rumus menjadi jauh lebih mudah diaudit dan dipahami oleh orang lain.',
      'Rentang yang sudah dinamai otomatis bersifat Absolut ($).'
    ],
    keySteps: [
      'Blok rentang sel yang ingin diberi nama (misal B2:B20).',
      'Klik kotak Name Box di sebelah kiri Formula Bar (sudut kiri atas).',
      'Ketik nama tanpa spasi (misal: Tarif_PPN atau Total_Omzet) lalu tekan ENTER.',
      'Sekarang Anda bisa menulis rumus: =Daftar_Harga * Tarif_PPN.'
    ],
    importantTips: [
      'Nama Named Range tidak boleh menggunakan spasi (gunakan underscore _) dan tidak boleh menyerupai koordinat sel (seperti B10).'
    ],
    commonMistakes: [
      {
        mistake: 'Ketik nama di Name Box lalu langsung klik sel lain tanpa menekan ENTER sehingga namanya batal tersimpan.',
        solution: 'Wajib tekan tombol ENTER setelah mengetik nama di Name Box.'
      }
    ],
    practiceTask: 'Beri nama rentang harga barang Anda dengan nama "Harga_Modal", lalu gunakan di rumus perkalian di sheet lain.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Memberi Nama Rentang Sel dengan Named Range & Name Manager (Ctrl + F3)',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'm-21',
    category: 'menengah',
    number: 21,
    title: 'PivotTable dan PivotChart',
    shortDesc: 'Fitur paling sakti di Excel untuk meringkas puluhan ribu data transaksi menjadi laporan eksekutif dalam hitungan detik.',
    difficulty: 'Menengah',
    readTime: '7 menit',
    summary: 'PivotTable memungkinkan Anda memutar, mengelompokkan, dan menjumlahkan data besar hanya dengan teknik drag and drop tanpa menulis satu rumus pun.',
    explanation: [
      'Empat Bidang PivotTable:',
      'Rows: Kategori yang ditampilkan menurun ke bawah (misal: Nama Sales atau Kota).',
      'Columns: Kategori yang ditampilkan mendatar ke samping (misal: Tahun atau Kuartal).',
      'Values: Kolom angka yang dihitung atau dijumlahkan (misal: Sum of Omzet).',
      'Filters: Penyaring keseluruhan laporan di bagian atas.'
    ],
    keySteps: [
      'Klik salah satu sel di dalam tabel transaksi Anda.',
      'Buka tab Insert > klik "PivotTable" > klik OK.',
      'Tarik field "Kategori" ke area Rows.',
      'Tarik field "Total Penjualan" ke area Values.',
      'Laporan rekap penjualan per kategori langsung tersaji rapi!'
    ],
    importantTips: [
      'Jika data sumber mengalami perubahan atau penambahan, klik kanan pada tabel Pivot lalu pilih "Refresh" agar angka ter-update.'
    ],
    commonMistakes: [
      {
        mistake: 'Membuat PivotTable dari data yang memiliki kolom tanpa judul (header kosong) sehingga muncul pesan error.',
        solution: 'Pastikan setiap kolom di tabel sumber memiliki judul header yang unik.'
      }
    ],
    practiceTask: 'Buat PivotTable dari riwayat transaksi penjualan toko untuk melihat total omzet per kota cabang.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Qsj5gDEQ088',
    youtubeTitle: 'Cara Membuat Pivot Table di Excel untuk Pemula: Analisis Data Kilat',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'm-22',
    category: 'menengah',
    number: 22,
    title: 'Membuat Laporan Penjualan Bulanan',
    shortDesc: 'Studi kasus nyata menyusun rekap omzet bulanan, target vs realisasi, dan persentase pencapaian.',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'Gabungkan fungsi SUM, SUMIFS, format persentase, dan Conditional Formatting untuk menghasilkan laporan penjualan bulanan standar kantor.',
    explanation: [
      'Kolom Utama: Target Penjualan, Realisasi Penjualan, Selisih (Varian), dan % Pencapaian.',
      'Rumus % Pencapaian: =Realisasi / Target (format dengan persen %).',
      'Rumus Selisih: =Realisasi - Target.'
    ],
    sampleData: {
      headers: ['Bulan', 'Target', 'Realisasi', 'Selisih', '% Capai'],
      rows: [
        ['Januari', 'Rp 50.000.000', 'Rp 55.000.000', 'Rp 5.000.000', '110%'],
        ['Februari', 'Rp 50.000.000', 'Rp 48.000.000', '-Rp 2.000.000', '96%'],
        ['Maret', 'Rp 60.000.000', 'Rp 66.000.000', 'Rp 6.000.000', '110%']
      ]
    },
    keySteps: [
      'Di kolom % Capai sel E2, masukkan: =C2/B2, lalu ubah formatnya ke persentase.',
      'Di kolom Selisih sel D2, masukkan: =C2-B2.',
      'Tambahkan Conditional Formatting Icon Set (lampu hijau jika >=100%, merah jika <100%).'
    ],
    importantTips: [
      'Gunakan format angka mata uang Accounting pada kolom uang agar laporan terlihat rapi dan seragam.'
    ],
    commonMistakes: [
      {
        mistake: 'Membagi Target dengan Realisasi (=B2/C2) sehingga persentase capaian terbalik.',
        solution: 'Rumus pencapaian selalu Hasil Nyata dibagi Rencana (=Realisasi/Target).'
      }
    ],
    practiceTask: 'Susun laporan bulanan untuk 4 kuartal bisnis dan hitung rata-rata persentase pencapaian selama satu tahun.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Qsj5gDEQ088',
    youtubeTitle: 'Studi Kasus Pembuatan Laporan Rekap Penjualan Bulanan Otomatis',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'm-23',
    category: 'menengah',
    number: 23,
    title: 'Rekap Data Pelanggan dan Segmentasi',
    shortDesc: 'Mengelompokkan pelanggan setia berdasarkan total nilai transaksi (Tier Gold, Silver, Bronze).',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Segmentasi pelanggan membantu tim bisnis memfokuskan promosi dan perlakuan khusus pada pelanggan dengan nilai belanja tertinggi.',
    explanation: [
      'Menggunakan Rumus Nested IF (IF Bertingkat):',
      '=IF(Total>=10000000, "Platinum", IF(Total>=5000000, "Gold", IF(Total>=1000000, "Silver", "Bronze"))).'
    ],
    sampleData: {
      headers: ['Nama Pelanggan', 'Total Belanja', 'Tier Segmentasi'],
      rows: [
        ['PT Mega Surya', 'Rp 14.500.000', 'Platinum'],
        ['Toko Barokah', 'Rp 6.200.000', 'Gold'],
        ['UD Sumber Rejeki', 'Rp 2.800.000', 'Silver'],
        ['Pak Handoko', 'Rp 600.000', 'Bronze']
      ]
    },
    keySteps: [
      'Susun tabel pelanggan dengan total belanja akumulasi.',
      'Terapkan rumus IF bertingkat di kolom Tier.',
      'Tambahkan filter atau PivotTable untuk melihat total omzet yang disumbang oleh masing-masing tier.'
    ],
    importantTips: [
      'Pada rumus IF bertingkat, selalu uji dari kriteria angka tertinggi ke angka terendah agar logika evaluasi berjalan tepat.'
    ],
    commonMistakes: [
      {
        mistake: 'Menguji angka kecil terlebih dahulu (>=1000000) sehingga pelanggan bernilai 14 juta langsung terhenti di tier Silver.',
        solution: 'Urutkan kondisi dari yang paling besar ke kecil.'
      }
    ],
    practiceTask: 'Terapkan klasifikasi loyalitas pada data 5 pelanggan toko Anda.',
    youtubeUrl: 'https://www.youtube.com/watch?v=TAzIhJPNdBg',
    youtubeTitle: 'Studi Kasus Mengolah dan Mencocokkan Database Pelanggan dengan VLOOKUP',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'm-24',
    category: 'menengah',
    number: 24,
    title: 'Membuat Laporan Stok Barang (Inventory Control)',
    shortDesc: 'Melacak stok awal, barang masuk, barang keluar, stok akhir, dan status peringatan "Restock".',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'Laporan kontrol stok mencegah kehabisan persediaan barang dagangan di gudang dan mendeteksi selisih barang.',
    explanation: [
      'Struktur Kolom: Kode, Nama Barang, Stok Awal, Masuk, Keluar, Stok Akhir, Minimum Stok, Status.',
      'Rumus Stok Akhir: =Stok Awal + Masuk - Keluar.',
      'Rumus Status Restock: =IF(Stok_Akhir <= Minimum_Stok, "SEGERA RESTOCK", "AMAN").'
    ],
    sampleData: {
      headers: ['Kode', 'Barang', 'Awal', 'Masuk', 'Keluar', 'Akhir', 'Min', 'Status'],
      rows: [
        ['SKU-01', 'Beras Ramos 5kg', 20, 30, 42, 8, 10, 'SEGERA RESTOCK'],
        ['SKU-02', 'Minyak Goreng 2L', 15, 25, 20, 20, 10, 'AMAN']
      ]
    },
    keySteps: [
      'Di kolom Stok Akhir F2, ketik: =C2+D2-E2.',
      'Di kolom Status H2, ketik: =IF(F2<=G2, "PERLU RESTOCK", "AMAN").',
      'Pasang Conditional Formatting merah pada status "PERLU RESTOCK".'
    ],
    importantTips: [
      'Gunakan fungsi SUMIF dari sheet mutasi harian gudang untuk mengisi kolom Masuk dan Keluar secara otomatis.'
    ],
    commonMistakes: [
      {
        mistake: 'Salah menginput angka stok keluar menjadi minus sehingga saat dikurang malah bertambah.',
        solution: 'Input angka pengeluaran sebagai bilangan positif karena rumusnya sudah menggunakan tanda kurang (-).'
      }
    ],
    practiceTask: 'Rancang tabel stok 5 produk dan buat peringatan otomatis jika stok akhir mencapai batas minimum 5 unit.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mbGMsB-RWCI',
    youtubeTitle: 'Tutorial Membuat Laporan Kartu Stok Gudang Otomatis dengan SUMIF',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'm-25',
    category: 'menengah',
    number: 25,
    title: 'Membuat Grafik Perkembangan Penjualan (Trend Chart)',
    shortDesc: 'Membuat grafik garis interaktif dengan secondary axis untuk menampilkan omzet sekaligus unit terjual.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Saat Anda memiliki dua data berbeda skala (misal: omzet ratusan juta vs jumlah unit puluhan), grafik kombinasi adalah jawabannya.',
    explanation: [
      'Combo Chart (Grafik Kombinasi): Menggabungkan grafik batang untuk omzet dan grafik garis untuk persentase margin keuntungan atau unit.',
      'Secondary Axis: Menambahkan sumbu tegak di sebelah kanan grafik agar data berskala kecil tetap terbaca jelas.'
    ],
    keySteps: [
      'Blok tabel data (Bulan, Omzet Rupiah, Jumlah Unit).',
      'Buka tab Insert > Combo Chart > Create Custom Combo Chart.',
      'Atur Omzet menjadi Clustered Column.',
      'Atur Jumlah Unit menjadi Line Chart dan centang kotak "Secondary Axis".',
      'Klik OK. Grafik perkembangan multi-metrik langsung tampil profesional.'
    ],
    importantTips: [
      'Gunakan warna kontras yang serasi antara batang dan garis agar audiens tidak bingung membedakan sumbu kiri dan kanan.'
    ],
    commonMistakes: [
      {
        mistake: 'Tidak mengaktifkan Secondary Axis sehingga garis jumlah unit terlihat gepeng mendatar di lantai nol grafik.',
        solution: 'Wajib aktifkan centang Secondary Axis untuk skala metrik yang berbeda.'
      }
    ],
    practiceTask: 'Buat grafik combo omzet bulanan (batang) dan tingkat kepuasan pelanggan (garis) dengan secondary axis.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1-BhbQm2dCA',
    youtubeTitle: 'How to Create Charts in Microsoft Excel: Grafik Tren Penjualan',
    youtubeChannel: 'Ignasius Ryan'
  }
];
