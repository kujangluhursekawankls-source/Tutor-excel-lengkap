import { FormulaItem } from '../types';

export const formulasData: FormulaItem[] = [
  {
    id: 'f-sum',
    name: 'SUM',
    category: 'Matematika',
    userNeedExamples: [
      'Menghitung total harga',
      'Menjumlahkan pengeluaran harian',
      'Total omzet penjualan',
      'Menghitung jumlah keseluruhan angka'
    ],
    syntaxComma: '=SUM(number1, [number2], ...)',
    syntaxSemicolon: '=SUM(number1; [number2]; ...)',
    description: 'Menjumlahkan semua angka di dalam rentang sel yang dipilih.',
    arguments: [
      { name: 'number1', desc: 'Rentang sel utama yang berisi angka (contoh: C2:C10)' },
      { name: 'number2', desc: 'Rentang sel tambahan kedua (opsional)', isOptional: true }
    ],
    sampleTable: {
      headers: ['Barang', 'Jumlah Beli', 'Subtotal'],
      rows: [
        ['Buku Tulis', 2, 10000],
        ['Pensil 2B', 5, 15000],
        ['Penghapus', 1, 3000]
      ]
    },
    sampleFormula: '=SUM(C2:C4)',
    sampleResult: '28000',
    explanation: 'Rumus menjumlahkan nilai dari sel C2, C3, dan C4 menghasilkan total Rp 28.000.'
  },
  {
    id: 'f-vlookup',
    name: 'VLOOKUP',
    category: 'Pencarian',
    userNeedExamples: [
      'Mencari nama berdasarkan kode',
      'Memunculkan harga otomatis dari kode barang',
      'Mencari data karyawan dari NIK',
      'Mengambil nilai dari tabel master lain'
    ],
    syntaxComma: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
    syntaxSemicolon: '=VLOOKUP(lookup_value; table_array; col_index_num; [range_lookup])',
    description: 'Mencari nilai di kolom paling kiri sebuah tabel, lalu mengambil data dari kolom lain di baris yang sama.',
    arguments: [
      { name: 'lookup_value', desc: 'Nilai atau sel yang dicari (contoh: "B-01" atau sel A2)' },
      { name: 'table_array', desc: 'Seluruh area tabel referensi (wajib tekan F4 untuk mengunci $A$2:$C$10)' },
      { name: 'col_index_num', desc: 'Nomor urut kolom hasil yang ingin diambil (kolom 1, 2, 3...)' },
      { name: 'range_lookup', desc: 'Isi 0 atau FALSE untuk pencarian persis sama (Exact Match)', isOptional: true }
    ],
    sampleTable: {
      headers: ['Kode (Kolom 1)', 'Nama Barang (Kolom 2)', 'Harga (Kolom 3)'],
      rows: [
        ['BRG-01', 'Kopi Susu 250ml', 12000],
        ['BRG-02', 'Teh Manis Dingin', 6000],
        ['BRG-03', 'Roti Bakar Cokelat', 15000]
      ]
    },
    sampleFormula: '=VLOOKUP("BRG-02", A2:C4, 2, FALSE)',
    sampleResult: 'Teh Manis Dingin',
    explanation: 'Excel mencari kode "BRG-02" di kolom 1, lalu mengambil nama produk dari kolom 2.'
  },
  {
    id: 'f-xlookup',
    name: 'XLOOKUP',
    category: 'Pencarian',
    userNeedExamples: [
      'Mencari data ke kiri',
      'Mencari data tanpa nomor indeks kolom',
      'Mencari transaksi terakhir dari bawah',
      'Pengganti VLOOKUP modern anti-rusak'
    ],
    syntaxComma: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])',
    syntaxSemicolon: '=XLOOKUP(lookup_value; lookup_array; return_array; [if_not_found]; [match_mode]; [search_mode])',
    description: 'Fungsi pencarian mutakhir yang dapat mencari ke segala arah (kiri, kanan, atas, bawah) dengan penanganan data tidak ditemukan bawaan.',
    arguments: [
      { name: 'lookup_value', desc: 'Nilai acuan yang dicari' },
      { name: 'lookup_array', desc: 'Kolom tempat mencari nilai acuan' },
      { name: 'return_array', desc: 'Kolom hasil yang ingin diambil' },
      { name: 'if_not_found', desc: 'Teks yang tampil jika data tidak ada (contoh: "Data Kosong")', isOptional: true }
    ],
    sampleTable: {
      headers: ['Departemen (A)', 'Nama (B)', 'NIK (C)'],
      rows: [
        ['Keuangan', 'Dewi Lestari', 'K-001'],
        ['Operasional', 'Agus Budiman', 'K-002']
      ]
    },
    sampleFormula: '=XLOOKUP("K-001", C2:C3, B2:B3, "Tidak Ditemukan")',
    sampleResult: 'Dewi Lestari',
    explanation: 'Mencari NIK di kolom C dan mengambil nama di kolom B sebelah kirinya.',
    compatibility: 'Excel 365 & Excel 2021+'
  },
  {
    id: 'f-if',
    name: 'IF',
    category: 'Logika',
    userNeedExamples: [
      'Memberi status lulus atau tidak lulus',
      'Menghitung bonus jika capai target',
      'Uji syarat diskon belanja',
      'Menentukan status bayar lunas atau belum'
    ],
    syntaxComma: '=IF(logical_test, value_if_true, [value_if_false])',
    syntaxSemicolon: '=IF(logical_test; value_if_true; [value_if_false])',
    description: 'Menghasilkan nilai pertama jika kondisi benar (TRUE), dan menghasilkan nilai kedua jika salah (FALSE).',
    arguments: [
      { name: 'logical_test', desc: 'Kondisi perbandingan (contoh: B2>=75 atau C2="Lunas")' },
      { name: 'value_if_true', desc: 'Hasil yang dimunculkan jika syarat terpenuhi' },
      { name: 'value_if_false', desc: 'Hasil yang dimunculkan jika syarat tidak terpenuhi', isOptional: true }
    ],
    sampleTable: {
      headers: ['Nama Siswa', 'Nilai Ujian', 'Status Kelulusan'],
      rows: [
        ['Ahmad Dani', 82, 'LULUS'],
        ['Bambang Tri', 64, 'REMEDIAL']
      ]
    },
    sampleFormula: '=IF(B2>=75, "LULUS", "REMEDIAL")',
    sampleResult: 'LULUS',
    explanation: 'Karena nilai Ahmad (82) lebih besar atau sama dengan 75, maka hasil rumus bernilai "LULUS".'
  },
  {
    id: 'f-datedif',
    name: 'DATEDIF',
    category: 'Tanggal & Waktu',
    userNeedExamples: [
      'Menghitung umur dalam tahun',
      'Menghitung masa kerja karyawan',
      'Selisih hari atau bulan antara dua tanggal'
    ],
    syntaxComma: '=DATEDIF(start_date, end_date, unit)',
    syntaxSemicolon: '=DATEDIF(start_date; end_date; unit)',
    description: 'Menghitung selisih antara dua tanggal dalam satuan tahun ("Y"), bulan ("M"), atau hari ("D").',
    arguments: [
      { name: 'start_date', desc: 'Tanggal awal / tanggal lahir (harus lebih lampau)' },
      { name: 'end_date', desc: 'Tanggal akhir (contoh: TODAY() untuk tanggal hari ini)' },
      { name: 'unit', desc: '"Y" untuk tahun, "M" untuk bulan, "D" untuk hari' }
    ],
    sampleTable: {
      headers: ['Nama Pegawai', 'Tanggal Masuk', 'Masa Kerja'],
      rows: [
        ['Siti Aminah', '01/01/2020', '6 Tahun']
      ]
    },
    sampleFormula: '=DATEDIF(B2, TODAY(), "Y") & " Tahun"',
    sampleResult: '6 Tahun',
    explanation: 'Menghitung selisih tahun penuh dari 1 Januari 2020 sampai tanggal sekarang.'
  },
  {
    id: 'f-countif',
    name: 'COUNTIF',
    category: 'Statistik',
    userNeedExamples: [
      'Menghitung jumlah data tertentu',
      'Mencari data ganda (duplikat)',
      'Menghitung berapa kali nama muncul',
      'Menghitung berapa siswa yang hadir'
    ],
    syntaxComma: '=COUNTIF(range, criteria)',
    syntaxSemicolon: '=COUNTIF(range; criteria)',
    description: 'Menghitung banyaknya sel yang memenuhi satu kriteria tertentu di dalam rentang.',
    arguments: [
      { name: 'range', desc: 'Rentang sel yang ingin diperiksa' },
      { name: 'criteria', desc: 'Kriteria pencocokan (contoh: "Hadir", ">100", atau A2)' }
    ],
    sampleTable: {
      headers: ['Nama', 'Kehadiran'],
      rows: [
        ['Rian', 'Hadir'],
        ['Dewi', 'Sakit'],
        ['Agus', 'Hadir'],
        ['Siti', 'Hadir']
      ]
    },
    sampleFormula: '=COUNTIF(B2:B5, "Hadir")',
    sampleResult: '3',
    explanation: 'Menghitung sel yang berisi teks "Hadir", menghasilkan angka 3.'
  },
  {
    id: 'f-sumifs',
    name: 'SUMIFS',
    category: 'Matematika',
    userNeedExamples: [
      'Menghitung total penjualan per bulan',
      'Menjumlahkan dengan banyak kriteria',
      'Total omzet cabang Jakarta khusus produk Laptop',
      'Rekap transaksi dengan filter ganda'
    ],
    syntaxComma: '=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
    syntaxSemicolon: '=SUMIFS(sum_range; criteria_range1; criteria1; [criteria_range2; criteria2]; ...)',
    description: 'Menjumlahkan angka pada kolom sum_range berdasarkan dua atau lebih syarat kriteria sekaligus.',
    arguments: [
      { name: 'sum_range', desc: 'Kolom angka yang akan dijumlahkan (posisi di urutan PALING AWAL)' },
      { name: 'criteria_range1', desc: 'Kolom kriteria pertama' },
      { name: 'criteria1', desc: 'Syarat kriteria pertama' },
      { name: 'criteria_range2', desc: 'Kolom kriteria kedua (opsional)', isOptional: true },
      { name: 'criteria2', desc: 'Syarat kriteria kedua (opsional)', isOptional: true }
    ],
    sampleTable: {
      headers: ['Cabang', 'Kategori', 'Omzet'],
      rows: [
        ['Jakarta', 'Laptop', 15000000],
        ['Bandung', 'Laptop', 8000000],
        ['Jakarta', 'Printer', 3000000],
        ['Jakarta', 'Laptop', 12000000]
      ]
    },
    sampleFormula: '=SUMIFS(C2:C5, A2:A5, "Jakarta", B2:B5, "Laptop")',
    sampleResult: '27000000',
    explanation: 'Menjumlahkan omzet hanya jika cabang adalah Jakarta dan kategori adalah Laptop (15 Jt + 12 Jt = 27 Jt).'
  },
  {
    id: 'f-textjoin',
    name: 'TEXTJOIN',
    category: 'Teks',
    userNeedExamples: [
      'Menggabungkan nama depan dan belakang',
      'Menggabungkan banyak sel dipisah koma',
      'Merangkai alamat lengkap dari beberapa kolom',
      'Menggabungkan teks dengan mengabaikan sel kosong'
    ],
    syntaxComma: '=TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)',
    syntaxSemicolon: '=TEXTJOIN(delimiter; ignore_empty; text1; [text2]; ...)',
    description: 'Menggabungkan teks dari beberapa sel dengan karakter pemisah otomatis dan opsi mengabaikan sel kosong.',
    arguments: [
      { name: 'delimiter', desc: 'Karakter pemisah diapit petik (contoh: ", " atau " - " atau " ")' },
      { name: 'ignore_empty', desc: 'TRUE untuk mengabaikan sel yang kosong' },
      { name: 'text1', desc: 'Rentang teks yang akan digabungkan (contoh: A2:D2)' }
    ],
    sampleTable: {
      headers: ['Nama Depan', 'Nama Tengah', 'Nama Belakang'],
      rows: [
        ['Mohammad', 'Hatta', 'Sutrisno'],
        ['Budi', '', 'Santoso']
      ]
    },
    sampleFormula: '=TEXTJOIN(" ", TRUE, A3:C3)',
    sampleResult: 'Budi Santoso',
    explanation: 'Menggabungkan A3 sampai C3 dengan spasi, mengabaikan kolom B3 yang kosong tanpa spasi dobel.',
    compatibility: 'Excel 2019 / 365'
  },
  {
    id: 'f-roundup',
    name: 'ROUNDUP',
    category: 'Matematika',
    userNeedExamples: [
      'Membulatkan nominal ke atas',
      'Membulatkan harga ke ribuan terdekat',
      'Menghilangkan pecahan sen tanpa rugi'
    ],
    syntaxComma: '=ROUNDUP(number, num_digits)',
    syntaxSemicolon: '=ROUNDUP(number; num_digits)',
    description: 'Membulatkan angka ke atas menjauhi nol sesuai jumlah digit desimal yang ditentukan.',
    arguments: [
      { name: 'number', desc: 'Angka asli yang ingin dibulatkan' },
      { name: 'num_digits', desc: '0 untuk bilangan bulat, -2 untuk ratusan, -3 untuk ribuan' }
    ],
    sampleTable: {
      headers: ['Tagihan Asli', 'Rumus', 'Hasil Bulat'],
      rows: [
        [14250, '=ROUNDUP(A2, -3)', 15000]
      ]
    },
    sampleFormula: '=ROUNDUP(A2, -3)',
    sampleResult: '15000',
    explanation: 'Membulatkan tagihan 14.250 ke ribuan terdekat ke atas menjadi 15.000.'
  },
  {
    id: 'f-pmt',
    name: 'PMT',
    category: 'Keuangan',
    userNeedExamples: [
      'Menghitung cicilan pinjaman bulanan',
      'Simulasi angsuran kredit mobil',
      'Menghitung pembayaran KPR rumah per bulan'
    ],
    syntaxComma: '=PMT(rate, nper, pv, [fv], [type])',
    syntaxSemicolon: '=PMT(rate; nper; pv; [fv]; [type])',
    description: 'Menghitung pembayaran angsuran berkala untuk pinjaman berdasarkan suku bunga dan jangka waktu konstan.',
    arguments: [
      { name: 'rate', desc: 'Suku bunga pinjaman per periode (bunga tahunan dibagi 12 untuk bulanan)' },
      { name: 'nper', desc: 'Jumlah total bulan angsuran (misal 3 tahun = 36 bulan)' },
      { name: 'pv', desc: 'Nilai pokok utang pinjaman (beri tanda minus agar hasil cicilan positif)' }
    ],
    sampleTable: {
      headers: ['Pinjaman', 'Bunga / Tahun', 'Tenor (Bulan)'],
      rows: [
        [50000000, '12%', 24]
      ]
    },
    sampleFormula: '=PMT(12%/12, 24, -50000000)',
    sampleResult: '2353674',
    explanation: 'Cicilan per bulan untuk pinjaman 50 juta bunga 12% selama 2 tahun adalah Rp 2.353.674/bulan.'
  },
  {
    id: 'f-unique',
    name: 'UNIQUE',
    category: 'Pencarian',
    userNeedExamples: [
      'Mengekstrak daftar nama unik tanpa duplikat',
      'Melihat daftar kota yang pernah transaksi',
      'Mencari data yang tidak kembar otomatis'
    ],
    syntaxComma: '=UNIQUE(array, [by_col], [exactly_once])',
    syntaxSemicolon: '=UNIQUE(array; [by_col]; [exactly_once])',
    description: 'Mengembalikan daftar nilai unik dari suatu rentang secara dinamis.',
    arguments: [
      { name: 'array', desc: 'Kolom atau rentang yang ingin diekstrak data uniknya' }
    ],
    sampleTable: {
      headers: ['Kota Transaksi'],
      rows: [
        ['Jakarta'],
        ['Surabaya'],
        ['Jakarta'],
        ['Bandung'],
        ['Surabaya']
      ]
    },
    sampleFormula: '=UNIQUE(A2:A6)',
    sampleResult: 'Jakarta, Surabaya, Bandung',
    explanation: 'Secara instan menyaring 5 baris kota menjadi 3 kota unik tanpa duplikat.',
    compatibility: 'Excel 365 & Excel 2021+'
  },
  {
    id: 'f-iferror',
    name: 'IFERROR',
    category: 'Logika',
    userNeedExamples: [
      'Menghilangkan tulisan #N/A atau #VALUE!',
      'Membersihkan tampilan error rumus',
      'Mengganti error dengan angka nol atau strip'
    ],
    syntaxComma: '=IFERROR(value, value_if_error)',
    syntaxSemicolon: '=IFERROR(value; value_if_error)',
    description: 'Menjalankan rumus; jika rumus menghasilkan pesan error, gantikan dengan teks atau nilai pengganti yang Anda inginkan.',
    arguments: [
      { name: 'value', desc: 'Rumus utama yang ingin diamankan' },
      { name: 'value_if_error', desc: 'Nilai pengganti jika rumus error (contoh: 0 atau "-" atau "Data Kosong")' }
    ],
    sampleTable: {
      headers: ['Nilai A', 'Nilai B', 'Rumus Pembagian Aman'],
      rows: [
        [100, 0, '=IFERROR(A2/B2, 0)']
      ]
    },
    sampleFormula: '=IFERROR(A2/B2, 0)',
    sampleResult: '0',
    explanation: 'Pembagian dengan angka nol biasanya memicu error #DIV/0!, namun dengan IFERROR hasil tampil bersih sebagai 0.'
  }
];
