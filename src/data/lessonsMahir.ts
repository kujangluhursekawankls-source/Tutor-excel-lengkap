import { Lesson } from '../types';

export const lessonsMahir: Lesson[] = [
  {
    id: 'a-01',
    category: 'mahir',
    number: 1,
    title: 'XLOOKUP Tingkat Lanjut',
    shortDesc: 'Pencarian dari bawah ke atas (bottom-up), pencarian wildcard (* ?), dan pencarian bertingkat 2 dimensi.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    versionRequirement: 'Microsoft 365 & Excel 2021+',
    summary: 'XLOOKUP memiliki parameter rahasia search_mode dan match_mode untuk pencarian transaksi terakhir dan pencarian dua arah dinamis.',
    explanation: [
      'Pencarian Terakhir (Bottom-up): Gunakan search_mode = -1 untuk mencari dari baris paling bawah. Sangat berguna mencari harga pembelian terakhir produk.',
      'Wildcard Match: Gunakan match_mode = 2 untuk mencari nama yang mengandung kata parsial (misal: "*Laptop*").',
      'Two-Way XLOOKUP: Menyarangkan XLOOKUP di dalam XLOOKUP lain untuk mencari perpotongan baris dan kolom sekaligus tanpa INDEX/MATCH.'
    ],
    syntax: '=XLOOKUP(kunci_baris, array_baris, XLOOKUP(kunci_kolom, array_kolom, tabel_data))',
    syntaxSemicolon: '=XLOOKUP(kunci_baris; array_baris; XLOOKUP(kunci_kolom; array_kolom; tabel_data))',
    sampleData: {
      headers: ['Tanggal', 'Produk', 'Harga Beli Terakhir'],
      rows: [
        ['01/01/2026', 'SSD 512GB', 'Rp 450.000'],
        ['15/02/2026', 'SSD 512GB', 'Rp 480.000'],
        ['10/03/2026', 'SSD 512GB', 'Rp 520.000']
      ]
    },
    appliedFormula: 'Cari harga SSD paling baru: =XLOOKUP("SSD 512GB", B2:B4, C2:C4, "N/A", 0, -1)',
    expectedResult: 'Rp 520.000 (Otomatis mengambil data transaksi terbaru dari bawah)',
    keySteps: [
      'Ketik =XLOOKUP("SSD 512GB", B2:B4, C2:C4, "N/A", 0, -1).',
      'Argumen 0 adalah exact match, dan -1 memberitahu Excel untuk scan dari bawah ke atas.'
    ],
    importantTips: [
      'Gunakan parameter -1 ini untuk melacak status approval terakhir atau riwayat log revisi terbaru.'
    ],
    commonMistakes: [
      {
        mistake: 'Salah urutan tanda minus pada search_mode.',
        solution: 'Gunakan 1 untuk pencarian dari atas, dan -1 untuk pencarian dari bawah.'
      }
    ],
    practiceTask: 'Gunakan XLOOKUP dengan parameter -1 untuk mengambil saldo kas terakhir dari buku kas 50 baris.',
    youtubeUrl: 'https://www.youtube.com/watch?v=BGM2ts-dh3I',
    youtubeTitle: 'XLOOKUP Tingkat Lanjut: Pencarian Wildcard dan Pencarian Bottom-Up',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-02',
    category: 'mahir',
    number: 2,
    title: 'Kombinasi INDEX dan MATCH 2 Arah (Two-Way Lookup)',
    shortDesc: 'Pencarian matriks perpotongan baris produk dan kolom bulan secara fleksibel di semua versi Excel.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Mencari nilai perpotongan antara baris vertikal dan kolom horizontal menggunakan dua fungsi MATCH sekaligus di dalam INDEX.',
    explanation: [
      'Sintaks: =INDEX(tabel_data_angka, MATCH(kunci_baris, kolom_kategori, 0), MATCH(kunci_kolom, baris_header, 0)).',
      'MATCH pertama mencari nomor baris.',
      'MATCH kedua mencari nomor kolom.',
      'INDEX mengambil angka tepat di titik temu koordinat tersebut.'
    ],
    sampleData: {
      headers: ['Wilayah', 'Januari', 'Februari', 'Maret'],
      rows: [
        ['Sumatera', 'Rp 20 Jt', 'Rp 25 Jt', 'Rp 22 Jt'],
        ['Jawa', 'Rp 50 Jt', 'Rp 65 Jt', 'Rp 58 Jt'],
        ['Bali', 'Rp 15 Jt', 'Rp 18 Jt', 'Rp 24 Jt']
      ]
    },
    appliedFormula: '=INDEX(B2:D4, MATCH("Jawa", A2:A4, 0), MATCH("Maret", B1:D1, 0))',
    expectedResult: 'Rp 58 Jt',
    keySteps: [
      'Tentukan area nilai angka matriks (B2:D4).',
      'Tulis MATCH untuk baris: MATCH("Jawa", A2:A4, 0) -> Baris 2.',
      'Tulis MATCH untuk kolom: MATCH("Maret", B1:D1, 0) -> Kolom 3.',
      'Gabungkan dalam INDEX: =INDEX(B2:D4, 2, 3).'
    ],
    importantTips: [
      'Rentang tabel INDEX harus pas dengan area yang diapit oleh kolom kriteria dan baris header.'
    ],
    commonMistakes: [
      {
        mistake: 'Memasukkan kolom header A1 ke dalam array angka INDEX sehingga nomor kolom selisih 1.',
        solution: 'Array angka INDEX cukup dari B2:D4.'
      }
    ],
    practiceTask: 'Buat tabel tarif ongkir antar kota berdasarkan berat barang, lalu cari tarifnya dengan formula 2-Way Lookup.',
    youtubeUrl: 'https://www.youtube.com/watch?v=IHY7HrB0mTE',
    youtubeTitle: 'INDEX MATCH Dua Arah: Pencarian Matriks Baris dan Kolom Sekaligus',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-03',
    category: 'mahir',
    number: 3,
    title: 'Nested IF dan Fungsi IFS Modern',
    shortDesc: 'Menyusun banyak kondisi percabangan tanpa kurung bertumpuk yang memusingkan.',
    difficulty: 'Mahir',
    readTime: '5 menit',
    versionRequirement: 'IFS tersedia di Excel 2019 / 365',
    summary: 'Fungsi IFS mengeliminasi kerepotan menutup kurung puluhan kali pada rumus IF bertingkat tradisional.',
    explanation: [
      'Sintaks IFS: =IFS(kondisi1, hasil1, kondisi2, hasil2, kondisi3, hasil3, ..., TRUE, hasil_default).',
      'Argumen terakhir ditulis TRUE sebagai nilai default jika tidak ada kondisi sebelumnya yang terpenuhi.',
      'Sangat bersih untuk grading nilai huruf A, B, C, D, E atau perhitungan komisi berjenjang.'
    ],
    syntax: '=IFS(B2>=85, "A", B2>=75, "B", B2>=65, "C", B2>=50, "D", TRUE, "E")',
    syntaxSemicolon: '=IFS(B2>=85; "A"; B2>=75; "B"; B2>=65; "C"; B2>=50; "D"; TRUE; "E")',
    sampleData: {
      headers: ['Nilai Angka', 'Formula IFS', 'Grade Huruf'],
      rows: [
        [88, '=IFS(A2>=85, "A", ...)', 'A'],
        [78, '=IFS(A3>=85, "A", A3>=75, "B", ...)', 'B'],
        [45, '=IFS(..., TRUE, "E")', 'E']
      ]
    },
    keySteps: [
      'Tulis =IFS( nilai>=85, "A", nilai>=75, "B", nilai>=65, "C", TRUE, "E" ).',
      'Tekan ENTER. Rumus akan berhenti membaca begitu kondisi pertama yang bernilai TRUE tercapai.'
    ],
    importantTips: [
      'Gunakan parameter TRUE di akhir formula IFS sebagai pengganti argumen value_if_false pada IF biasa.'
    ],
    commonMistakes: [
      {
        mistake: 'Tidak memberikan kondisi penutup TRUE sehingga saat ada nilai di luar rentang muncul error #N/A.',
        solution: 'Selalu akhiri IFS dengan pasangan TRUE, "Hasil Default".'
      }
    ],
    practiceTask: 'Ubah rumus penentuan komisi penjualan bertingkat menjadi rumus IFS yang rapi dan ringkas.',
    youtubeUrl: 'https://www.youtube.com/watch?v=vw8dUhCLxsI',
    youtubeTitle: 'Belajar Rumus IF Lengkap: Nested IF Bertingkat Banyak Kondisi dan Fungsi IFS',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-04',
    category: 'mahir',
    number: 4,
    title: 'Dynamic Array dan Konsep Tumpahan (Spill Range)',
    shortDesc: 'Revolusi perhitungan Excel modern: 1 rumus di 1 sel dapat otomatis mengisi puluhan sel di bawahnya.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    versionRequirement: 'Microsoft 365 & Excel 2021+',
    summary: 'Dynamic Array mengubah total cara kerja formula Excel. Tidak perlu lagi menarik Fill Handle ke bawah atau menekan Ctrl+Shift+Enter.',
    explanation: [
      'Konsep Spill: Ketika sebuah rumus menghasilkan banyak nilai sekaligus, Excel akan otomatis "menumpahkan" hasilnya ke sel-sel kosong di sekitarnya.',
      'Garis Batas Biru Tipis: Menandakan batas area tumpahan (Spill Range).',
      'Error #SPILL!: Terjadi jika jalur tumpahan terhalang oleh sel yang sudah ada isinya atau sel yang digabung (merged cells).',
      'Operator Tumpahan (#): Menambahkan tanda pagar di belakang sel sumber (contoh: =SUM(A2#)) untuk merujuk seluruh rentang tumpahan secara otomatis.'
    ],
    keySteps: [
      'Ketik rumus array di sel D2: =A2:A10 * B2:B10.',
      'Tekan ENTER biasa.',
      'Perhatikan bagaimana hasil perkalian otomatis mengisi 9 sel ke bawah tanpa ditarik manual.'
    ],
    importantTips: [
      'Pastikan area di bawah dan di kanan rumus dalam keadaan kosong bersih agar tidak memicu error #SPILL!.'
    ],
    commonMistakes: [
      {
        mistake: 'Ada 1 sel berisi spasi atau teks yang menghalangi jalur tumpahan sehingga memicu error #SPILL!.',
        solution: 'Hapus isi sel yang menghalangi agar tumpahan rumus bisa keluar sempurna.'
      }
    ],
    practiceTask: 'Tuliskan formula =SEQUENCE(10, 1, 100, 10) di sel A1 dan amati bagaimana 10 angka berderet tumpah otomatis.',
    youtubeUrl: 'https://www.youtube.com/watch?v=7Mk-JVbXmtI',
    youtubeTitle: 'Konsep Dynamic Array Excel dan Formula Tumpah Spill Range (#)',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-05',
    category: 'mahir',
    number: 5,
    title: 'Fungsi FILTER, SORT, SORTBY, dan UNIQUE',
    shortDesc: 'Keluarga fungsi Dynamic Array paling populer untuk membuat tabel filter dan ekstrak data unik otomatis.',
    difficulty: 'Mahir',
    readTime: '7 menit',
    versionRequirement: 'Microsoft 365 & Excel 2021+',
    summary: 'Ekstrak daftar unik, filter tabel dinamis, dan urutkan hasil langsung menggunakan rumus hidup tanpa fitur ribbon manual.',
    explanation: [
      'UNIQUE(array): Mengambil daftar nilai unik tanpa duplikat dari sebuah kolom secara otomatis.',
      'FILTER(array, include, [if_empty]): Memfilter seluruh baris tabel yang memenuhi kriteria ke area baru. Rumus: =FILTER(A2:C100, B2:B100="Jakarta", "Kosong").',
      'SORT(array, [sort_index], [sort_order]): Mengurutkan rentang data berdasarkan nomor kolom tertentu.',
      'SORTBY(array, by_array1, [order1]): Mengurutkan data berdasarkan kolom lain tanpa mengubah posisi kolom.'
    ],
    syntax: '=FILTER(array, include, [if_empty]) | =UNIQUE(array) | =SORT(array, [index], [order])',
    sampleData: {
      headers: ['Pelanggan', 'Kota', 'Omzet'],
      rows: [
        ['Andi', 'Bandung', 'Rp 10 Jt'],
        ['Budi', 'Jakarta', 'Rp 15 Jt'],
        ['Andi', 'Bandung', 'Rp 5 Jt'],
        ['Citra', 'Jakarta', 'Rp 20 Jt']
      ]
    },
    appliedFormula: 'Daftar nama pelanggan unik: =UNIQUE(A2:A5) -> Hasil: Andi, Budi, Citra.',
    keySteps: [
      'Di sel kosong E2, ketik: =SORT(UNIQUE(A2:A100)).',
      'Hasilnya adalah daftar pelanggan unik yang sudah langsung terurut rapi dari A sampai Z secara otomatis.',
      'Jika ada pelanggan baru dimasukkan di tabel sumber, daftar unik otomatis bertambah.'
    ],
    importantTips: [
      'Gabungkan fungsi: =SORT(FILTER(A2:C10, B2:B10="Jakarta"), 3, -1) untuk memfilter cabang Jakarta dan mengurutkan dari omzet terbesar.'
    ],
    commonMistakes: [
      {
        mistake: 'Tinggi baris array dan include pada fungsi FILTER berbeda ukuran.',
        solution: 'Pastikan jumlah baris range data dan kriteria include sama persis.'
      }
    ],
    practiceTask: 'Gunakan fungsi UNIQUE dan FILTER untuk membuat rekap penjualan per cabang yang otomatis berubah saat filter diketik.',
    youtubeUrl: 'https://www.youtube.com/watch?v=7Mk-JVbXmtI',
    youtubeTitle: 'Mengolah Data Dinamis dengan Rumus FILTER, SORT, dan UNIQUE',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-06',
    category: 'mahir',
    number: 6,
    title: 'Fungsi LET dan LAMBDA',
    shortDesc: 'Mendefinisikan variabel lokal di dalam rumus (LET) dan membuat fungsi buatan sendiri tanpa VBA (LAMBDA).',
    difficulty: 'Mahir',
    readTime: '7 menit',
    versionRequirement: 'Microsoft 365 & Excel 2021+',
    summary: 'Fungsi LET mempercepat perhitungan formula hingga 10x dengan menyimpan hasil kalkulasi perantara ke dalam nama variabel, sedangkan LAMBDA memungkinkan pembuatan fungsi kustom.',
    explanation: [
      'LET: Menyimpan variabel di dalam rumus agar tidak perlu menghitung rumus yang sama berulang kali. Sintaks: =LET(nama1, nilai1, perhitungan_akhir).',
      'LAMBDA: Membuat fungsi baru dengan nama sendiri yang bisa disimpan di Name Manager. Sintaks: =LAMBDA(param1, param2, perhitungan).'
    ],
    syntax: '=LET(omzet, B2*C2, diskon, omzet*0.1, omzet - diskon)',
    sampleData: {
      headers: ['Harga', 'Qty', 'Rumus LET', 'Hasil Bersih'],
      rows: [
        [50000, 10, '=LET(total, A2*B2, diskon, IF(total>300000, total*0.1, 0), total-diskon)', 450000]
      ]
    },
    keySteps: [
      'Tulis nama variabel: LET(total, A2*B2, ...).',
      'Gunakan variabel "total" dalam pengujian logika diskon berikutnya tanpa perlu mengetik ulang A2*B2.',
      'Ketik formula akhir yang ingin dihasilkan.'
    ],
    importantTips: [
      'Fungsi LET sangat drastis mengurangi waktu loading file Excel yang memiliki formula VLOOKUP atau XLOOKUP bertingkat.'
    ],
    commonMistakes: [
      {
        mistake: 'Nama variabel pada LET menggunakan spasi atau karakter operator.',
        solution: 'Gunakan nama variabel sederhana seperti p, q, harga_bersih, diskon.'
      }
    ],
    practiceTask: 'Tulis rumus kalkulasi PPh 21 menggunakan fungsi LET untuk menyederhanakan perhitungan penghasilan kena pajak.',
    youtubeUrl: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ',
    youtubeTitle: 'Membuat Rumus Kustom Sendiri dan Variabel Lokal dengan LET & LAMBDA',
    youtubeChannel: 'Kevin Stratvert'
  },
  {
    id: 'a-07',
    category: 'mahir',
    number: 7,
    title: 'Fungsi SUMPRODUCT Tingkat Lanjut',
    shortDesc: 'Menghitung perkalian matriks sekaligus menjumlahkannya, serta menangani multi-kriteria tanpa array formula Ctrl+Shift+Enter.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'SUMPRODUCT mengalikan elemen sel yang bersesuaian pada beberapa array lalu mengembalikan jumlah hasil kali tersebut.',
    explanation: [
      'Penggunaan Dasar: Menghitung total omzet langsung dari kolom Qty dan Harga tanpa perlu membuat kolom bantuan Subtotal: =SUMPRODUCT(B2:B10, C2:C10).',
      'Penggunaan Multi-Kriteria dengan Double Minus (--): Trik sakti mengubah kondisi TRUE/FALSE menjadi angka 1/0: =SUMPRODUCT(--(A2:A10="Jakarta"), --(B2:B10="Laptop"), C2:C10).'
    ],
    syntax: '=SUMPRODUCT(array1, [array2], ...)',
    sampleData: {
      headers: ['Produk', 'Jumlah Terjual (Unit)', 'Harga per Unit'],
      rows: [
        ['Mouse Wireless', 20, 150000],
        ['Keyboard Mechanical', 10, 450000],
        ['Headset Gaming', 5, 300000]
      ]
    },
    appliedFormula: 'Total Pendapatan Langsung: =SUMPRODUCT(B2:B4, C2:C4)',
    expectedResult: 'Rp 9.000.000 (3 Jt + 4.5 Jt + 1.5 Jt)',
    keySteps: [
      'Ketik =SUMPRODUCT( range_qty, range_harga ).',
      'Tekan ENTER. Anda menghemat 1 kolom tabel dan meminimalisir ukuran file.'
    ],
    importantTips: [
      'Seluruh rentang array di dalam SUMPRODUCT WAJIB memiliki dimensi baris dan kolom yang sama persis.'
    ],
    commonMistakes: [
      {
        mistake: 'Menggabungkan array dengan panjang baris tidak sama (misal B2:B10 dan C2:C12) sehingga menghasilkan error #VALUE!.',
        solution: 'Pastikan tinggi array persis sama.'
      }
    ],
    practiceTask: 'Hitung nilai rata-rata tertimbang (weighted average) nilai mahasiswa dengan rumus SUMPRODUCT.',
    youtubeUrl: 'https://www.youtube.com/watch?v=bhfRlU_bNmw',
    youtubeTitle: 'Kekuatan Rumus SUMPRODUCT untuk Perhitungan Bobot dan Multi-Kriteria Tanpa Kolom Bantu',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-08',
    category: 'mahir',
    number: 8,
    title: 'Rumus Pencarian Dua Arah (Two-Way Matrix Search)',
    shortDesc: 'Mencari tarif pajak progresif, tabel komisi bertingkat, atau biaya pengiriman logistik berdasarkan berat dan zona.',
    difficulty: 'Mahir',
    readTime: '5 menit',
    summary: 'Mengombinasikan logika baris dan kolom untuk membaca tabel referensi berformat matriks dua dimensi.',
    explanation: [
      'Dua pendekatan populer: Menggunakan INDEX + MATCH + MATCH untuk semua versi Excel, atau XLOOKUP bertingkat pada Excel 365.',
      'Sangat sering dipakai di industri ekspedisi logistik untuk menghitung ongkos kirim berdasarkan Kota Tujuan (baris) dan Berat Paket (kolom).'
    ],
    keySteps: [
      'Susun tabel matriks dengan baris nama kota dan kolom berat (1kg, 2kg, 5kg).',
      'Gunakan =INDEX(tabel_biaya, MATCH(kota_input, kolom_kota, 0), MATCH(berat_input, baris_berat, 1)).',
      'Parameter 1 pada MATCH kedua memungkinkan pencarian nilai mendekati (Approximate Match) untuk rentang berat.'
    ],
    importantTips: [
      'Gunakan Approximate Match (1) jika angka header kolom berupa interval bertingkat berurutan.'
    ],
    commonMistakes: [
      {
        mistake: 'Salah membedakan parameter 0 (Exact) dan 1 (Approximate) pada fungsi MATCH.',
        solution: 'Gunakan 0 untuk nama teks pasti dan 1 untuk interval angka berurutan.'
      }
    ],
    practiceTask: 'Buat tabel matriks diskon kuantitas pembelian grosir dan cari diskonnya secara otomatis.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Pa2W6KijAEk',
    youtubeTitle: 'Dua Cara Pencarian Dua Arah: Kombinasi INDEX MATCH dan XLOOKUP 2D',
    youtubeChannel: 'Bengkel Excel'
  },
  {
    id: 'a-09',
    category: 'mahir',
    number: 9,
    title: 'Pengolahan Data Berukuran Besar di Excel',
    shortDesc: 'Strategi mengelola ratusan ribu baris data agar lembar kerja tidak lemot (freeze/lag) atau crash.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Excel mampu menampung hingga 1.048.576 baris, tetapi teknik pengolahan yang salah dapat membuat komputer hang.',
    explanation: [
      'Ubah Calculation Options menjadi "Manual" saat sedang mengedit data masif, lalu tekan F9 saat ingin menghitung ulang.',
      'Hindari penggunaan fungsi volatile seperti INDIRECT, OFFSET, TODAY, NOW di ribuan baris sekaligus.',
      'Manfaatkan Data Model (Power Pivot) untuk mengolah jutaan baris tanpa membebani memori RAM worksheet.'
    ],
    keySteps: [
      'Buka tab Formulas > Calculation Options > ubah ke "Manual".',
      'Lakukan pengeditan dan paste data massal.',
      'Tekan tombol F9 pada keyboard untuk memicu kalkulasi ulang secara terkontrol.'
    ],
    importantTips: [
      'Konversi data range menjadi format Excel Binary Workbook (*.xlsb) untuk memangkas ukuran file hingga 50-70% dan mempercepat proses save/load.'
    ],
    commonMistakes: [
      {
        mistake: 'Menulis rumus mengacu pada seluruh kolom tanpa batas seperti =VLOOKUP(A2, C:D, 2, FALSE) di puluhan ribu baris.',
        solution: 'Batasi rentang spesifik (misal C2:D50000) agar Excel tidak memindai 1 juta baris kosong.'
      }
    ],
    practiceTask: 'Ubah format file latihan Anda menjadi .xlsb dan amati perbedaan kecepatan saat membuka dokumen.',
    youtubeUrl: 'https://www.youtube.com/watch?v=IHY7HrB0mTE',
    youtubeTitle: 'Referensi Sel Dinamis Lintas Sheet Menggunakan Rumus INDIRECT',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-10',
    category: 'mahir',
    number: 10,
    title: 'Advanced Filter (Filter Tingkat Lanjut)',
    shortDesc: 'Menyaring data kompleks dengan banyak kriteria logika AND/OR dan menyalin hasilnya ke lokasi baru.',
    difficulty: 'Mahir',
    readTime: '5 menit',
    summary: 'Advanced Filter mampu menyaring kriteria yang tidak bisa dilakukan oleh AutoFilter standar, seperti menyaring kombinasi rumus.',
    explanation: [
      'Membuat Range Kriteria: Menuliskan judul kolom kriteria di area kosong lembar kerja.',
      'Kriteria dalam Satu Baris: Diartikan sebagai logika AND (misal Kota Jakarta DAN Omzet > 50 Jt).',
      'Kriteria di Baris Berbeda: Diartikan sebagai logika OR (misal Kota Jakarta ATAU Kota Surabaya).',
      'Copy to another location: Otomatis menaruh hasil filter ke tabel baru tanpa mengotori tabel asli.'
    ],
    keySteps: [
      'Ketik judul kriteria di baris terpisah (misal E1:F2).',
      'Buka tab Data > Advanced.',
      'Pilih "Copy to another location", tentukan List range, Criteria range, dan Copy to sel tujuan.',
      'Klik OK. Tabel hasil filter langsung tersaji terpisah.'
    ],
    importantTips: [
      'Judul kolom pada tabel kriteria WAJIB sama persis (huruf dan spasi) dengan judul pada tabel data sumber.'
    ],
    commonMistakes: [
      {
        mistake: 'Ada spasi ekstra di judul kriteria sehingga filter tidak menemukan data yang cocok.',
        solution: 'Copy-paste judul header dari tabel sumber ke range kriteria.'
      }
    ],
    practiceTask: 'Gunakan Advanced Filter untuk mengekstrak transaksi penjualan di atas 10 juta atau yang terjadi di bulan Desember ke tabel baru.',
    youtubeUrl: 'https://www.youtube.com/watch?v=IHY7HrB0mTE',
    youtubeTitle: 'Fungsi OFFSET: Menggeser Koordinat Sel Acuan untuk Rentang Dinamis',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-11',
    category: 'mahir',
    number: 11,
    title: 'PivotTable Tingkat Lanjut',
    shortDesc: 'Calculated Field, Grouping tanggal per bulan/kuartal/tahun, dan Show Values As (% of Total).',
    difficulty: 'Mahir',
    readTime: '7 menit',
    summary: 'Maksimalkan kekuatan PivotTable dengan menambahkan rumus kustom di dalam pivot serta mengelompokkan tanggal.',
    explanation: [
      'Grouping Tanggal: Klik kanan pada salah satu sel tanggal di Pivot > pilih Group > centang Months dan Years.',
      'Calculated Field: Membuat rumus hitungan baru di dalam Pivot (misal: PPN = Omzet * 11%) tanpa mengubah data sumber.',
      'Show Values As: Menampilkan angka sebagai persentase dari grand total, perbandingan dengan bulan lalu (% Difference From), atau running total.'
    ],
    keySteps: [
      'Klik di area PivotTable > buka tab PivotTable Analyze.',
      'Pilih "Fields, Items, & Sets" > "Calculated Field...".',
      'Beri nama "Bonus_Sales", masukkan formula: =Penjualan * 0.05, klik Add lalu OK.',
      'Kolom bonus baru otomatis terhitung di setiap baris laporan.'
    ],
    importantTips: [
      'Gunakan fitur Show Values As > % of Column Total untuk melihat kontribusi persentase setiap cabang terhadap total omzet nasional.'
    ],
    commonMistakes: [
      {
        mistake: 'Gagal melakukan Grouping tanggal karena di data sumber ada sel yang berisi teks atau tanggal kosong.',
        solution: 'Pastikan kolom tanggal di data sumber bersih 100% dari teks atau sel kosong.'
      }
    ],
    practiceTask: 'Kelompokkan data transaksi harian selama 2 tahun menjadi rekap Kuartal dan Tahun di PivotTable.',
    youtubeUrl: 'https://www.youtube.com/watch?v=vw8dUhCLxsI',
    youtubeTitle: 'Alternatif IF Bertingkat yang Lebih Ringkas: Fungsi SWITCH & CHOOSE',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-12',
    category: 'mahir',
    number: 12,
    title: 'Power Query (Get & Transform Data)',
    shortDesc: 'Alat otomatisasi ETL (Extract, Transform, Load) paling penting untuk membersihkan data dalam hitungan detik.',
    difficulty: 'Mahir',
    readTime: '8 menit',
    versionRequirement: 'Excel 2016 ke atas (Power Query bawaan)',
    summary: 'Lupakan pekerjaan membersihkan data manual berjam-jam setiap minggu. Cukup rekam langkah pembersihan di Power Query sekali, lalu tekan tombol Refresh.',
    explanation: [
      'Extract: Mengambil data dari file Excel lain, CSV, database SQL, PDF, atau folder.',
      'Transform: Membuang kolom yang tidak perlu, menghapus baris kosong, memisahkan teks, unpivot kolom, dan mengubah tipe data.',
      'Load: Menaruh hasil olahan yang sudah bersih kembali ke lembar kerja Excel sebagai tabel rapi.',
      'Tombol Refresh: Saat data bulan depan datang, masukkan file baru lalu klik Refresh. Semua proses pembersihan otomatis terulang dalam 2 detik!'
    ],
    keySteps: [
      'Buka tab Data > Get Data > From File > From Workbook.',
      'Pilih file sumber > klik tombol "Transform Data" untuk membuka jendela Power Query Editor.',
      'Lakukan langkah pembersihan pada Ribbon Power Query.',
      'Klik tombol "Close & Load" di sudut kiri atas.'
    ],
    importantTips: [
      'Setiap langkah yang Anda lakukan terekam di panel "Applied Steps" di sisi kanan, bisa dihapus atau diubah urutannya kapan saja.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengedit data langsung di dalam jendela Power Query seperti mengetik di spreadsheet.',
        solution: 'Power Query adalah mesin transformasi langkah otomatis, bukan lembar ketik manual. Gunakan tombol perintah yang tersedia.'
      }
    ],
    practiceTask: 'Impor file CSV mentah ke Excel menggunakan Power Query dan bersihkan baris kosong pertamanya.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1LsJFDTxZN8',
    youtubeTitle: 'Rumus Teks Generasi Baru: TEXTBEFORE, TEXTAFTER, dan TEXTSPLIT Excel 365',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-13',
    category: 'mahir',
    number: 13,
    title: 'Penggabungan Banyak File Excel Otomatis (Append & Merge)',
    shortDesc: 'Menggabungkan 12 file laporan bulanan cabang dari satu folder menjadi 1 tabel master dalam 1 klik.',
    difficulty: 'Mahir',
    readTime: '7 menit',
    summary: 'Jangan pernah lagi copy-paste 50 file Excel cabang secara manual. Gunakan fitur Get Data From Folder di Power Query.',
    explanation: [
      'Append Queries (Menggabungkan ke Bawah): Menggabungkan tabel-tabel dengan struktur kolom yang sama secara vertikal (seperti menyatukan laporan Januari + Februari + Maret).',
      'Merge Queries (Menggabungkan ke Samping): Mirip VLOOKUP super cepat untuk menggabungkan dua tabel berdasarkan kolom kunci yang sama.',
      'From Folder: Cukup simpan semua file cabang ke dalam 1 folder, Power Query otomatis menggabungkan seluruh isinya sekaligus.'
    ],
    keySteps: [
      'Kumpulkan file laporan ke folder "Data_Penjualan".',
      'Di Excel baru, buka tab Data > Get Data > From File > From Folder.',
      'Pilih folder tersebut, klik "Combine & Transform Data".',
      'Power Query otomatis mengekstrak seluruh baris dari semua file menjadi 1 tabel konsolidasi raksasa.'
    ],
    importantTips: [
      'Pastikan nama kolom header di setiap file cabang menggunakan ejaan dan huruf yang sama persis agar kolom sejajar rapi.'
    ],
    commonMistakes: [
      {
        mistake: 'Ada file yang strukturnya berbeda di dalam folder sehingga memicu error saat digabungkan.',
        solution: 'Pastikan template file cabang seragam sebelum dieksekusi.'
      }
    ],
    practiceTask: 'Gabungkan 3 file Excel latihan dari satu folder menjadi 1 laporan tunggal dengan Power Query.',
    youtubeUrl: 'https://www.youtube.com/watch?v=O8gK8fCHrIY',
    youtubeTitle: 'Cara Menggabungkan Banyak File/Sheet Otomatis dengan Power Query',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-14',
    category: 'mahir',
    number: 14,
    title: 'Membersihkan dan Mengubah Format Data (Unpivot Columns)',
    shortDesc: 'Mengubah format tabel silang (cross-tab laporan) menjadi format tabular database yang siap diolah PivotTable.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Tabel yang kolomnya memanjang ke samping (Januari, Februari, Maret...) sangat sulit dianalisis. Fitur Unpivot di Power Query mengubahnya menjadi 2 kolom vertikal: Bulan dan Nilai.',
    explanation: [
      'Data Tabular: Setiap baris adalah satu record transaksi, setiap kolom adalah satu atribut unik.',
      'Unpivot Columns: Fitur sakti Power Query untuk membalik baris judul bulan menjadi baris data vertikal.',
      'Fill Down: Mengisi sel kosong yang muncul akibat merged cells di laporan akuntansi lama.'
    ],
    keySteps: [
      'Buka data tabel di Power Query Editor.',
      'Pilih kolom yang tidak ingin diubah (misal kolom Nama Produk).',
      'Klik kanan pada header kolom tersebut > pilih "Unpivot Other Columns".',
      'Kolom bulan mendatar kini otomatis menjadi baris vertikal rapi!'
    ],
    importantTips: [
      'Fitur Unpivot adalah salah satu trik paling dicari di tes masuk kerja analisis data perusahaan multinasional.'
    ],
    commonMistakes: [
      {
        mistake: 'Mencoba membuat PivotTable dari tabel yang sudah dalam format Pivot tanpa di-unpivot terlebih dahulu.',
        solution: 'Selalu unpivot data terlebih dahulu agar data kembali ke bentuk database murni.'
      }
    ],
    practiceTask: 'Terapkan fitur Unpivot Columns pada tabel anggaran tahunan yang kolomnya memanjang ke kanan.',
    youtubeUrl: 'https://www.youtube.com/watch?v=7Mk-JVbXmtI',
    youtubeTitle: 'Membuat Nomor Urut Otomatis dan Data Acak Instan dengan SEQUENCE',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-15',
    category: 'mahir',
    number: 15,
    title: 'Data Model dan Pengenalan Power Pivot',
    shortDesc: 'Menghubungkan banyak tabel relasional (Primary Key & Foreign Key) tanpa perlu rumus VLOOKUP jutaan baris.',
    difficulty: 'Mahir',
    readTime: '7 menit',
    summary: 'Power Pivot menghadirkan kapabilitas relational database (seperti SQL) langsung di dalam Excel, mendukung jutaan baris data secara instan.',
    explanation: [
      'Relational Database: Menghubungkan Tabel Penjualan (fakta) dengan Tabel Master Pelanggan dan Master Produk (dimensi).',
      'Diagram View: Menghubungkan relasi tabel cukup dengan menyeret garis dari kolom Kode_Barang ke Kode_Barang di tabel lain.',
      'DAX (Data Analysis Expressions): Bahasa formula modern Power Pivot untuk kalkulasi metrik cerdas.'
    ],
    keySteps: [
      'Centang opsi "Add this data to the Data Model" saat membuat PivotTable.',
      'Buka tab Power Pivot > klik "Manage".',
      'Buka "Diagram View", lalu tarik garis penghubung antar kolom ID.',
      'Buat PivotTable dari banyak tabel sekaligus tanpa satu pun rumus VLOOKUP!'
    ],
    importantTips: [
      'Menghubungkan tabel lewat Data Model menghemat memori komputer hingga 90% dibanding menggunakan rumus VLOOKUP di ratusan ribu baris.'
    ],
    commonMistakes: [
      {
        mistake: 'Mencoba membuat relasi pada kolom yang kedua-duanya memiliki data duplikat (Many-to-Many tanpa tabel jembatan).',
        solution: 'Pastikan salah satu tabel adalah tabel master dengan nilai kode unik (One-to-Many).'
      }
    ],
    practiceTask: 'Hubungkan tabel transaksi penjualan dengan tabel master kategori produk di Power Pivot Data Model.',
    youtubeUrl: 'https://www.youtube.com/watch?v=tQGNnsyK_3s',
    youtubeTitle: 'Cara Membuat Dashboard Excel Interaktif dan Menarik dari Nol',
    youtubeChannel: 'Ngulik Data'
  },
  {
    id: 'a-16',
    category: 'mahir',
    number: 16,
    title: 'Membuat Dashboard Interaktif Profesional',
    shortDesc: 'Merancang dasbor visual satu layar eksekutif dengan KPI Card, grafik dinamis, dan navigasi modern.',
    difficulty: 'Mahir',
    readTime: '8 menit',
    summary: 'Dashboard eksekutif merangkum performa bisnis dalam satu pandangan visual tanpa perlu scroll panjang.',
    explanation: [
      'Prinsip Desain Dashboard: Gunakan palet warna terkoordinasi (hijau Excel/navy elegan), hilangkan gridlines, gunakan kartu ringkasan KPI (Total Omzet, Profit, Margin, Transaksi).',
      'Arsitektur 3 Sheet: Sheet 1 (Raw Data), Sheet 2 (Calculation & Pivot Table), Sheet 3 (Tampilan Dashboard Bersih).'
    ],
    keySteps: [
      'Hilangkan Gridlines pada sheet dashboard (Tab View > uncheck Gridlines).',
      'Buat bentuk Shape persegi membulat (Rounded Rectangle) warna putih bersih di atas latar abu-abu muda (#F8FAFC).',
      'Tautkan teks KPI di dalam Shape ke sel total di sheet perhitungan dengan mengetik =SheetKalkulasi!$C$2 pada Formula Bar.',
      'Susun grafik dan hubungkan dengan Slicer tombol penyaring interaktif.'
    ],
    importantTips: [
      'Batasi jumlah grafik maksimal 4 buah pada satu layar dashboard agar informasi fokus dan tidak membingungkan pimpinan.'
    ],
    commonMistakes: [
      {
        mistake: 'Membuat dashboard terlalu ramai dengan warna pelangi dan teks terlalu kecil.',
        solution: 'Terapkan aturan 60-30-10: 60% latar bersih netral, 30% kartu, 10% aksen warna hijau KPI.'
      }
    ],
    practiceTask: 'Rancang 1 halaman dashboard penjualan dengan 3 KPI Card di atas dan 2 grafik batang/garis di bawahnya.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nsE7eTvWvyw',
    youtubeTitle: 'Cara Membuat Progress Bar Otomatis di Excel | Tutorial Dashboard Profesional',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-17',
    category: 'mahir',
    number: 17,
    title: 'Slicer dan Timeline Interaktif',
    shortDesc: 'Membuat tombol filter sentuh modern yang mengendalikan banyak grafik dan PivotTable sekaligus.',
    difficulty: 'Mahir',
    readTime: '5 menit',
    summary: 'Slicer menggantikan filter dropdown kuno dengan tombol-tombol klik sentuh visual yang langsung memperbarui seluruh grafik dasbor.',
    explanation: [
      'Slicer: Tombol penyaring untuk kategori teks seperti Cabang, Nama Sales, atau Kategori Produk.',
      'Timeline: Slider garis waktu khusus untuk menyaring rentang tanggal, bulan, kuartal, atau tahun dengan menyeret slider.',
      'Report Connections: Kunci rahasia untuk menghubungkan 1 Slicer ke 5 PivotTable sekaligus.'
    ],
    keySteps: [
      'Klik pada PivotTable > tab Insert > klik "Slicer" atau "Timeline".',
      'Pilih field yang ingin dijadikan tombol filter (misal: "Wilayah").',
      'Klik kanan pada kotak Slicer > pilih "Report Connections...".',
      'Centang semua PivotTable yang ada di workbook Anda.',
      'Kini saat Anda menekan tombol "Surabaya" di Slicer, seluruh grafik di dashboard akan berubah serentak!'
    ],
    importantTips: [
      'Ubah jumlah kolom Slicer di tab Ribbon Slicer menjadi 3 atau 4 kolom horizontal agar posisinya memanjang rapi di bagian atas dasbor.'
    ],
    commonMistakes: [
      {
        mistake: 'Slicer hanya mengubah satu grafik saja dan grafik lainnya tidak bereaksi.',
        solution: 'Buka Report Connections pada Slicer dan centang seluruh PivotTable terkait.'
      }
    ],
    practiceTask: 'Tambahkan Slicer kategori produk dan Timeline tanggal ke dashboard Anda lalu hubungkan ke 2 grafik berbeda.',
    youtubeUrl: 'https://www.youtube.com/watch?v=tQGNnsyK_3s',
    youtubeTitle: 'Menggabungkan Data Banyak Sheet Menjadi Satu Rekap Master',
    youtubeChannel: 'Ngulik Data'
  },
  {
    id: 'a-18',
    category: 'mahir',
    number: 18,
    title: 'Analisis Penjualan dan Tren Pertumbuhan (MoM / YoY)',
    shortDesc: 'Menghitung pertumbuhan penjualan bulan-ke-bulan (Month-over-Month) dan tahun-ke-tahun (Year-over-Year).',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Mengetahui apakah bisnis sedang bertumbuh atau menurun dengan rumus persentase pertumbuhan komparatif.',
    explanation: [
      'Rumus Pertumbuhan: =(Nilai_Bulan_Ini - Nilai_Bulan_Lalu) / Nilai_Bulan_Lalu.',
      'MoM (Month over Month): Membandingkan performa bulan ini dengan bulan sebelumnya.',
      'YoY (Year over Year): Membandingkan performa bulan yang sama di tahun ini dengan tahun lalu (misal Maret 2026 vs Maret 2025) untuk mengeliminasi faktor musiman.'
    ],
    sampleData: {
      headers: ['Bulan', 'Omzet 2025', 'Omzet 2026', 'Pertumbuhan YoY'],
      rows: [
        ['Januari', 'Rp 100 Jt', 'Rp 120 Jt', '+20.0%'],
        ['Februari', 'Rp 110 Jt', 'Rp 115 Jt', '+4.5%'],
        ['Maret', 'Rp 130 Jt', 'Rp 145 Jt', '+11.5%']
      ]
    },
    keySteps: [
      'Di kolom D2, ketik: =(C2-B2)/B2.',
      'Ubah format sel menjadi Percentage dengan 1 angka desimal.',
      'Gunakan format custom: +0.0%;-0.0%;0.0% agar angka positif otomatis memiliki tanda tambah (+).'
    ],
    importantTips: [
      'Gunakan PivotTable > Show Values As > "% Difference From" untuk menghitung MoM tanpa mengetik rumus manual.'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa tanda kurung pada pembilang: =C2-B2/B2 (perkalian/pembagian dihitung duluan sehingga hasilnya salah total).',
        solution: 'Wajib beri tanda kurung: =(C2-B2)/B2.'
      }
    ],
    practiceTask: 'Hitung pertumbuhan penjualan kuartalan perusahaan Anda dan buat grafik garis tren pertumbuhannya.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mDqrOwm1EYo',
    youtubeTitle: 'Fitur Consolidate Excel: Menggabungkan Laporan Angka Secara Otomatis',
    youtubeChannel: 'Ignasius Ryan'
  },
  {
    id: 'a-19',
    category: 'mahir',
    number: 19,
    title: 'Analisis Laba Rugi Sederhana (Income Statement)',
    shortDesc: 'Menyusun laporan laba kotor, beban operasional, EBITDA, dan laba bersih usaha.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Struktur standar laporan keuangan laba rugi untuk mengetahui kesehatan margin profitabilitas bisnis Anda.',
    explanation: [
      'Pendapatan Bersih (Revenue) dikurangi Harga Pokok Penjualan (HPP / COGS) = Laba Kotor (Gross Profit).',
      'Laba Kotor dikurangi Beban Operasional (Sewa, Gaji, Listrik, Marketing) = Laba Operasional (Operating Income / EBIT).',
      'Laba Operasional dikurangi Pajak dan Bunga = Laba Bersih (Net Profit).',
      'Gross Profit Margin: =(Gross Profit / Revenue) * 100%.'
    ],
    sampleData: {
      headers: ['Pos Keuangan', 'Nominal', '% Terhadap Omzet'],
      rows: [
        ['Pendapatan Usaha', 'Rp 200.000.000', '100%'],
        ['HPP (Modal Barang)', 'Rp 120.000.000', '60%'],
        ['Laba Kotor', 'Rp 80.000.000', '40%'],
        ['Beban Operasional', 'Rp 35.000.000', '17.5%'],
        ['Laba Bersih Sebelum Pajak', 'Rp 45.000.000', '22.5%']
      ]
    },
    keySteps: [
      'Buat baris-baris komponen laporan keuangan.',
      'Gunakan format angka mata uang rapi.',
      'Tambahkan garis ganda (Bottom Double Border) pada baris Laba Bersih sesuai standar akuntansi internasional.'
    ],
    importantTips: [
      'Tampilkan kolom persentase common-size (% terhadap omzet) untuk memantau apakah beban operasional membengkak dari bulan ke bulan.'
    ],
    commonMistakes: [
      {
        mistake: 'Menginput angka beban operasional dengan tanda minus sehingga saat dirumus laba kotor dikurangi beban malah dijumlahkan bertambah.',
        solution: 'Tentukan konvensi: jika beban ditulis positif gunakan pengurangan (=Kotor - Beban).'
      }
    ],
    practiceTask: 'Susun laporan laba rugi sederhana untuk usaha kafe dengan omzet 50 juta per bulan.',
    youtubeUrl: 'https://www.youtube.com/watch?v=LQ5ut1BPPHU',
    youtubeTitle: 'Grafik Laporan Keuangan Realisasi Anggaran di Excel',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-20',
    category: 'mahir',
    number: 20,
    title: 'Membuat Laporan Otomatis dengan Template Dinamis',
    shortDesc: 'Membuat template faktur (invoice) atau slip gaji otomatis yang terisi data lengkap hanya dengan memilih nomor ID.',
    difficulty: 'Mahir',
    readTime: '7 menit',
    summary: 'Gabungkan Data Validation dropdown, VLOOKUP/XLOOKUP, dan rumus tanggal untuk menghasilkan faktur otomatis siap kirim.',
    explanation: [
      'Saat kasir memilih Nomor Invoice "INV-005" di dropdown, nama pembeli, tanggal, alamat, daftar barang, harga, dan total PPN langsung terisi otomatis.',
      'Template siap cetak atau langsung disimpan ke PDF dengan satu kali klik.'
    ],
    keySteps: [
      'Desain lembar cetak Invoice di sheet "Invoice".',
      'Simpan database transaksi di sheet "Database_Penjualan".',
      'Pasang rumus XLOOKUP pada kolom Nama Pelanggan dan Alamat yang mengacu pada Nomor Invoice terpilih.',
      'Gunakan IFERROR agar baris barang yang kosong tidak menampilkan tulisan error jelek.'
    ],
    importantTips: [
      'Kunci seluruh sel rumus menggunakan Protection agar tidak sengaja tertindih saat operator sedang mengoperasikan invoice.'
    ],
    commonMistakes: [
      {
        mistake: 'Baris kosong di tabel faktur menampilkan #N/A saat nomor invoice baru dibuat.',
        solution: 'Bungkus semua rumus dengan =IFERROR(rumus, "") agar baris kosong tetap bersih.'
      }
    ],
    practiceTask: 'Buat template slip gaji otomatis yang memunculkan rincian tunjangan dan potongan saat NIK karyawan dipilih.',
    youtubeUrl: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ',
    youtubeTitle: 'Membuat Skenario Bisnis (Best Case, Moderate, Worst Case) dengan Scenario Manager',
    youtubeChannel: 'Kevin Stratvert'
  },
  {
    id: 'a-21',
    category: 'mahir',
    number: 21,
    title: 'Formula Audit dan Troubleshooting Rumus',
    shortDesc: 'Melacak asal-usul angka rumus menggunakan Trace Precedents, Trace Dependents, dan Evaluate Formula.',
    difficulty: 'Mahir',
    readTime: '5 menit',
    summary: 'Audit formula membantu Anda membedah rumus rumit warisan rekan kerja dan melacak mengapa sebuah angka bernilai aneh.',
    explanation: [
      'Trace Precedents: Memunculkan panah biru yang menunjuk sel-sel mana saja yang menyumbang data ke dalam rumus saat ini.',
      'Trace Dependents: Memunculkan panah yang menunjukkan sel mana saja yang bergantung pada sel saat ini.',
      'Evaluate Formula: Menjalankan rumus langkah demi langkah (step-by-step) untuk melihat bagian mana yang menghasilkan error.',
      'Error Checking: Menemukan sel-sel yang tidak konsisten dengan rumus di baris atasnya.'
    ],
    keySteps: [
      'Klik sel yang rumusnya ingin Anda selidiki.',
      'Buka tab Formulas > grup Formula Auditing.',
      'Klik "Trace Precedents" untuk melihat panah aliran data.',
      'Klik "Evaluate Formula", lalu klik tombol "Evaluate" berkali-kali untuk melihat bagaimana Excel menghitung rumus langkah demi langkah.'
    ],
    importantTips: [
      'Tekan shortcut Ctrl + ` (tanda petik miring di sebelah angka 1) untuk menampilkan semua rumus sekaligus di lembar kerja.'
    ],
    commonMistakes: [
      {
        mistake: 'Menebak-nebak penyebab error pada rumus bersarang yang panjang.',
        solution: 'Gunakan fitur Evaluate Formula untuk melihat bagian potongan mana yang salah lebih dulu.'
      }
    ],
    practiceTask: 'Gunakan tombol Evaluate Formula untuk menelusuri rumus IF bersarang 4 tingkat.',
    youtubeUrl: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ',
    youtubeTitle: 'Optimasi Biaya dan Produksi Menggunakan Add-in Excel Solver',
    youtubeChannel: 'Kevin Stratvert'
  },
  {
    id: 'a-22',
    category: 'mahir',
    number: 22,
    title: 'Optimasi Ukuran Workbook agar Tidak Lambat',
    shortDesc: 'Membersihkan sel kosong hantu (ghost cells), menghapus named range rusak, dan kompresi file.',
    difficulty: 'Mahir',
    readTime: '5 menit',
    summary: 'Seringkali file Excel yang hanya berisi 100 baris membengkak ukurannya menjadi 50 MB dan sangat lambat dibuka. Pelajari cara mengompresnya.',
    explanation: [
      'Ghost Cells (Sel Hantu): Excel mengingat sel yang pernah diformat hingga baris ke-1.000.000 meskipun isinya sudah dihapus.',
      'Cara Reset Batas Lembar Kerja: Tekan Ctrl + End. Jika kursor melompat ke baris 500.000 padahal data hanya sampai baris 100, berarti ada sel hantu.',
      'Hapus Baris Kosong: Blok baris kosong dari bawah data sampai baris terakhir, klik kanan > Delete, lalu simpan file (Ctrl+S).'
    ],
    keySteps: [
      'Tekan Ctrl + End untuk mencari sel terakhir yang dikenali Excel.',
      'Jika posisi jauh di bawah tabel asli, blok seluruh baris kosong tersebut.',
      'Tekan Ctrl + - (Delete Rows), lalu tekan Ctrl + S.',
      'Tutup dan buka kembali workbook. Ukuran file akan langsung susut drastis.'
    ],
    importantTips: [
      'Buka Name Manager (Ctrl + F3) dan hapus seluruh nama rentang yang memiliki referensi #REF! rusak.'
    ],
    commonMistakes: [
      {
        mistake: 'Hanya menekan tombol Delete di keyboard (itu hanya menghapus teks, bukan menghapus sel hantu).',
        solution: 'Wajib klik kanan > Delete Baris Penuh (Entire Row).'
      }
    ],
    practiceTask: 'Cek batas Ctrl+End di workbook Anda dan bersihkan baris hantu yang berlebihan.',
    youtubeUrl: 'https://www.youtube.com/watch?v=uAxA46mdBxk',
    youtubeTitle: 'Melacak Hubungan Antarsel dan Menemukan Sumber Rumus dengan Audit Tools',
    youtubeChannel: 'Sekilas Insight'
  },
  {
    id: 'a-23',
    category: 'mahir',
    number: 23,
    title: 'Proteksi Worksheet dan Workbook (Locking & Password)',
    shortDesc: 'Mengunci rumus agar tidak bisa diedit atau dihapus orang lain, serta memberi password buka file.',
    difficulty: 'Mahir',
    readTime: '5 menit',
    summary: 'Amankan template Anda agar operator hanya bisa mengisi sel input tertentu dan tidak bisa mengubah rumus inti.',
    explanation: [
      'Secara default di Excel, SEMUA sel berstatus "Locked". Namun status locked ini baru aktif jika lembar kerja di-Protect.',
      'Strategi Membuka Kunci Sel Input: Pilih sel yang BOLEH diisi pengguna > Format Cells (Ctrl+1) > tab Protection > hilangkan centang "Locked".',
      'Protect Sheet: Mengaktifkan penguncian lembar kerja dengan password opsional.'
    ],
    keySteps: [
      'Blok kolom input yang boleh diedit operator (misal kolom Qty).',
      'Tekan Ctrl + 1 > tab Protection > hilangkan centang "Locked" > klik OK.',
      'Buka tab Review > Protect Sheet > masukkan password > klik OK.',
      'Sekarang pengguna hanya bisa mengetik di kolom Qty dan tidak bisa menyentuh rumus atau judul tabel!'
    ],
    importantTips: [
      'Catat password Anda di tempat aman; Excel tidak menyediakan fitur lupa kata sandi untuk worksheet terproteksi.'
    ],
    commonMistakes: [
      {
        mistake: 'Langsung klik Protect Sheet sebelum membuka kunci sel input sehingga seluruh lembar kerja terkunci total dan tidak bisa diketik apa pun.',
        solution: 'Buka centang Locked pada sel input terlebih dahulu.'
      }
    ],
    practiceTask: 'Kunci lembar kerja laporan Anda sehingga hanya kolom nominal penjualan yang dapat diubah.',
    youtubeUrl: 'https://www.youtube.com/watch?v=y0wVmoaMrqw',
    youtubeTitle: 'Cara Membuat Password di Excel | Proteksi File & Sheet',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-24',
    category: 'mahir',
    number: 24,
    title: 'Fungsi Keuangan: PMT, IPMT, PPMT, dan Tabel Amortisasi',
    shortDesc: 'Menghitung angsuran cicilan bulanan KPR/Kredit Kendaraan, porsi bunga, dan porsi pokok pinjaman.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Fungsi keuangan standar industri perbankan untuk menghitung besaran cicilan pinjaman secara akurat.',
    explanation: [
      'PMT(rate, nper, pv): Menghitung total angsuran per periode dengan bunga tetap.',
      'rate: Suku bunga per periode (jika bunga tahunan 12%, bagi 12 menjadi 12%/12 per bulan).',
      'nper: Total periode pembayaran (misal kredit 5 tahun = 5*12 = 60 bulan).',
      'pv (Present Value): Jumlah total pokok pinjaman uang (masukkan nilai minus agar hasil PMT positif).'
    ],
    sampleData: {
      headers: ['Pinjaman (P)', 'Bunga Tahunan', 'Tenor (Bulan)', 'Angsuran / Bulan (PMT)'],
      rows: [
        ['Rp 100.000.000', '12% / thn', 36, '=PMT(12%/12, 36, -100000000) -> Rp 3.321.431'],
        ['Rp 50.000.000', '10% / thn', 24, '=PMT(10%/12, 24, -50000000) -> Rp 2.307.246']
      ]
    },
    keySteps: [
      'Ketik formula: =PMT( bunga_tahunan/12, tenor_bulan, -pokok_pinjaman ).',
      'Gunakan fungsi IPMT untuk melihat berapa porsi rupiah yang menjadi bunga di bulan ke-1.',
      'Gunakan fungsi PPMT untuk melihat berapa porsi rupiah yang melunasi pokok utang.'
    ],
    importantTips: [
      'Selalu bagi bunga tahunan dengan 12 jika periode angsuran Anda dihitung bulanan.'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa membagi bunga tahunan dengan 12 sehingga cicilan per bulan menjadi sangat besar tidak masuk akal.',
        solution: 'Bagi bunga tahunan dengan 12: (rate/12).'
      }
    ],
    practiceTask: 'Hitung simulasi cicilan kredit mobil seharga 150 juta dengan DP 20% dan bunga 8% per tahun selama 48 bulan.',
    youtubeUrl: 'https://www.youtube.com/watch?v=QV70zn_7m8g',
    youtubeTitle: 'Contoh Tabel Pembayaran Angsuran Pinjaman (Amortisasi) di Excel',
    youtubeChannel: 'Budi Tutorials'
  },
  {
    id: 'a-25',
    category: 'mahir',
    number: 25,
    title: 'Studi Kasus Lengkap: Integrasi Data Pelanggan, Penjualan, dan Stok',
    shortDesc: 'Menggabungkan seluruh ilmu Excel tingkat tinggi menjadi satu sistem aplikasi kasir dan inventory terpadu.',
    difficulty: 'Mahir',
    readTime: '8 menit',
    summary: 'Proyek akhir mahir: merakit ekosistem spreadsheet yang menghubungkan master barang, kasir transaksi, mutasi stok otomatis, dan dashboard eksekutif.',
    explanation: [
      'Komponen Sistem:',
      '1. Sheet Master Barang (Kode, Nama, Harga Beli, Harga Jual, Stok Minimum).',
      '2. Sheet Kasir Penjualan (Dropdown Kode, XLOOKUP Nama & Harga, Hitung Subtotal, PPN, dan Diskon).',
      '3. Sheet Gudang (SUMIFS dari sheet kasir untuk mengurangi stok akhir otomatis).',
      '4. Sheet Dashboard (PivotChart & Slicer interaktif yang siap dipresentasikan).'
    ],
    keySteps: [
      'Gunakan format official Excel Table (Ctrl+T) pada semua tabel master agar data bersifat dinamis.',
      'Tautkan kolom kasir menggunakan XLOOKUP atau INDEX MATCH.',
      'Terapkan rumus stok akhir: =Stok_Awal - SUMIF(TabelKasir[Kode], [@Kode], TabelKasir[Qty]).',
      'Amankan lembar kerja dengan Protect Sheet.'
    ],
    importantTips: [
      'Simpan file ini sebagai template master (.xltx) agar file asli tidak tertimpa saat membuat pencatatan transaksi baru.'
    ],
    commonMistakes: [
      {
        mistake: 'Mencampur data mentah transaksi dengan laporan ringkasan dalam sheet yang sama.',
        solution: 'Pisahkan database transaksi mentah di sheet terpisah dari lembar tampilan laporan.'
      }
    ],
    practiceTask: 'Rakit sistem mini kasir 3 sheet ini dan uji transaksi baru untuk membuktikan stok otomatis berkurang.',
    youtubeUrl: 'https://www.youtube.com/watch?v=xEq3SzOVYKQ',
    youtubeTitle: 'Tips Mempercepat File Excel yang Lemot dan Mengurangi Ukuran File Besar',
    youtubeChannel: 'Kevin Stratvert'
  }
];
