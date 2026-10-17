import { Lesson } from '../types';

export const lessonsVba: Lesson[] = [
  {
    id: 'v-01',
    category: 'vba',
    number: 1,
    title: 'Pengertian Macro Excel',
    shortDesc: 'Memahami konsep dasar otomasi tindakan berulang untuk menghemat waktu kerja berjam-jam.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Macro adalah serangkaian instruksi atau tindakan yang direkam dan disimpan di Excel untuk dijalankan kembali secara otomatis kapan saja dibutuhkan.',
    explanation: [
      'Jika setiap hari Anda harus membuka file, mewarnai header hijau, menghapus kolom tertentu, dan memasang rumus SUM, Macro dapat melakukan semua itu dalam 1 detik.',
      'Macro bekerja seperti tape recorder: Anda merekam gerakan klik dan ketikan Anda sekali, lalu memutarnya kembali dengan menekan satu tombol jalan (Run).'
    ],
    keySteps: [
      'Identifikasi proses kerja harian yang berulang dan memakan waktu membosankan.',
      'Siapkan data latihan di lembar kerja.',
      'Pahami bahwa Macro desktop dijalankan melalui mesin VBA (Visual Basic for Applications).'
    ],
    importantTips: [
      'Macro tidak bisa di-Undo (Ctrl+Z)! Begitu Macro dijalankan, perubahan lembar kerja tidak bisa dikembalikan dengan tombol undo standar.'
    ],
    commonMistakes: [
      {
        mistake: 'Menjalankan Macro pada file asli tanpa membuat cadangan (backup) terlebih dahulu.',
        solution: 'Selalu simpan salinan cadangan sebelum menjalankan script Macro baru.'
      }
    ],
    practiceTask: 'Tuliskan daftar 3 tugas harian Anda di kantor yang berpotensi diotomatisasi menggunakan Macro.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA',
    youtubeTitle: 'Pengenalan Macro Excel: Konsep Dasar Otomasi Pekerjaan Berulang',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-02',
    category: 'vba',
    number: 2,
    title: 'Pengertian VBA (Visual Basic for Applications)',
    shortDesc: 'Bahasa pemrograman internal di balik Microsoft Office untuk menciptakan aplikasi spreadsheet canggih.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'VBA adalah bahasa pemrograman berbasis event yang dikembangkan oleh Microsoft untuk mengontrol objek-objek di Excel seperti Range, Sheet, dan Workbook.',
    explanation: [
      'Macro adalah rekaman aksi, sedangkan VBA adalah kode bahasa yang menggerakkan rekaman tersebut.',
      'Dengan menulis kode VBA secara manual, Anda bisa membuat logika yang tidak bisa direkam oleh Macro Recorder, seperti perulangan (loops), interaksi pop-up, dan validasi data rumit.'
    ],
    keySteps: [
      'Pahami hirarki objek Excel: Application -> Workbook -> Worksheet -> Range/Cells.',
      'Ketahui bahwa kode VBA berjalan di lingkungan editor khusus bernama VBE (Visual Basic Editor).'
    ],
    importantTips: [
      'Belajar VBA tidak memerlukan latar belakang programmer; sintaks VBA sangat mirip dengan kalimat bahasa Inggris sehari-hari.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengira VBA sama dengan VB.NET mandiri.',
        solution: 'VBA hidup di dalam aplikasi host (Excel) dan tidak membutuhkan instalasi compiler eksternal.'
      }
    ],
    practiceTask: 'Baca dan pahami konsep hirarki objek Excel: Application, Workbooks, Worksheets, dan Range.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA',
    youtubeTitle: 'Apa itu Visual Basic for Applications (VBA) dan Cara Kerjanya di Excel',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-03',
    category: 'vba',
    number: 3,
    title: 'Perbedaan Macro Recorder dan Formula Rumus',
    shortDesc: 'Kapan harus menggunakan rumus sel biasa dan kapan saatnya beralih ke Macro VBA.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Rumus hanya bisa menghasilkan nilai di dalam sel tempat rumus berada, sedangkan Macro VBA bisa melakukan tindakan manipulasi struktural lembar kerja.',
    explanation: [
      'Formula Excel: Menghitung angka dan menampilkan hasil di sel. Tidak bisa mewarnai sheet lain, tidak bisa membuat file baru otomatis, tidak bisa menghapus baris.',
      'Macro VBA: Mampu memanipulasi seluruh Excel: membuat sheet baru, mengekspor 100 invoice ke PDF, mengirim email otomatis ke Outlook, dan membersihkan folder.'
    ],
    sampleData: {
      headers: ['Kebutuhan', 'Alat Terbaik', 'Alasan'],
      rows: [
        ['Hitung Total Omzet', 'Formula =SUM()', 'Cepat, real-time, dan ringan'],
        ['Cari Data Karyawan', 'Formula XLOOKUP', 'Responsif dan mudah dibaca'],
        ['Kirim Laporan PDF Tiap Jam 5 Sore', 'Script Macro VBA', 'Otomatisasi sistem di luar sel']
      ]
    },
    keySteps: [
      'Gunakan formula biasa jika tugas hanya sekadar kalkulasi nilai matematika antar sel.',
      'Gunakan Macro VBA jika tugas melibatkan langkah berulang antar sheet atau ekspor file.'
    ],
    importantTips: [
      'Kombinasi terbaik: Gunakan formula biasa untuk perhitungan dan gunakan VBA untuk memicu eksekusi alur kerja.'
    ],
    commonMistakes: [
      {
        mistake: 'Menggunakan VBA rumit hanya untuk menjumlahkan dua angka.',
        solution: 'Gunakan fungsi bawaan Excel biasa untuk hal-hal kalkulasi sederhana.'
      }
    ],
    practiceTask: 'Kelompokkan 5 pekerjaan spreadsheet Anda: mana yang cukup dengan rumus dan mana yang butuh Macro.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA',
    youtubeTitle: 'Kapan Menggunakan Rumus Excel dan Kapan Wajib Menggunakan Macro VBA',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-04',
    category: 'vba',
    number: 4,
    title: 'Cara Mengaktifkan Tab Developer di Excel',
    shortDesc: 'Membuka menu rahasia Developer di Ribbon Excel untuk mengakses Visual Basic dan Form Controls.',
    difficulty: 'Dasar',
    readTime: '3 menit',
    summary: 'Secara default, tab Developer disembunyikan oleh Microsoft. Anda perlu mengaktifkannya sekali agar muncul selamanya.',
    explanation: [
      'Tab Developer berisi tombol Visual Basic, Macros, Record Macro, Use Relative References, Macro Security, dan Insert Button (Form Controls).'
    ],
    keySteps: [
      'Buka Microsoft Excel di komputer Windows Anda.',
      'Klik menu File > pilih "Options" di sudut kiri bawah.',
      'Pada jendela Excel Options, klik menu "Customize Ribbon" di sisi kiri.',
      'Di kolom sebelah kanan (Main Tabs), cari kotak "Developer" lalu centang kotak tersebut.',
      'Klik tombol OK di bawah. Tab Developer kini telah muncul di Ribbon Anda.'
    ],
    importantTips: [
      'Di Mac OS: Buka menu Excel di pojok kiri atas > Preferences > Ribbon & Toolbar > centang Developer.'
    ],
    commonMistakes: [
      {
        mistake: 'Mencari tab Developer di aplikasi Excel Android atau web gratis.',
        solution: 'Tab Developer dan VBE secara penuh hanya tersedia di Microsoft Excel desktop (Windows dan Mac).'
      }
    ],
    practiceTask: 'Buka Excel desktop Anda dan aktifkan tab Developer sampai ikon Visual Basic terlihat.',
    youtubeUrl: 'https://www.youtube.com/watch?v=G6InEnhRpqg',
    youtubeTitle: 'Cara Mengaktifkan Tab Menu Developer di Ribbon Microsoft Excel',
    youtubeChannel: 'Belajar Komputer'
  },
  {
    id: 'v-05',
    category: 'vba',
    number: 5,
    title: 'Merekam Tindakan Menggunakan Macro Recorder',
    shortDesc: 'Membuat Macro otomatis tanpa menulis satu baris kode pun dengan tombol rekam.',
    difficulty: 'Dasar',
    readTime: '5 menit',
    summary: 'Macro Recorder menerjemahkan setiap klik mouse dan tombol keyboard Anda menjadi baris kode VBA di balik layar.',
    explanation: [
      'Record Macro: Memulai proses perekaman.',
      'Stop Recording: Menghentikan perekaman.',
      'Shortcut Key: Anda bisa menetapkan kombinasi tombol keyboard (misal Ctrl + Shift + K) untuk memutar rekaman.'
    ],
    keySteps: [
      'Buka tab Developer > klik "Record Macro".',
      'Beri nama Macro tanpa spasi (misal: FormatHeaderTabel).',
      'Tetapkan shortcut (opsional, misal Ctrl + Shift + H) lalu klik OK.',
      'Lakukan aksi: pilih baris 1, beri warna hijau, tebalkan font, pasang garis border.',
      'Buka kembali tab Developer > klik "Stop Recording".'
    ],
    importantTips: [
      'Rencanakan gerakan Anda sebelum menekan tombol Record agar tidak ada klik salah yang ikut terekam.'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa menekan tombol Stop Recording sehingga aktivitas browsing atau klik sembarangan ikut terekam ratusan baris.',
        solution: 'Selalu langsung klik Stop Recording begitu tugas formatting selesai.'
      }
    ],
    practiceTask: 'Rekam satu macro sederhana untuk mewarnai sel terpilih menjadi warna kuning muda dan font miring.',
    youtubeUrl: 'https://www.youtube.com/watch?v=tynf_xLiDEQ',
    youtubeTitle: 'MACRO EXCEL TANPA NGODING?! Cara Merekam Macro (Record Macro)',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'v-06',
    category: 'vba',
    number: 6,
    title: 'Membuka Visual Basic Editor (VBE)',
    shortDesc: 'Menjelajahi jendela VBE menggunakan shortcut Alt + F11, Project Explorer, dan Code Window.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Visual Basic Editor adalah dapur utama tempat Anda melihat, mengedit, dan menulis kode VBA.',
    explanation: [
      'Shortcut Sakti: Tekan tombol Alt + F11 pada keyboard untuk membuka dan menutup VBE secara instan.',
      'Project Explorer (Ctrl + R): Menampilkan daftar workbook dan sheet yang sedang aktif.',
      'Code Window: Lembar putih tempat menulis kode script.',
      'Immediate Window (Ctrl + G): Jendela konsol untuk menguji satu baris perintah secara langsung.'
    ],
    keySteps: [
      'Buka Excel lalu tekan Alt + F11 pada keyboard.',
      'Jika jendela Project Explorer belum terlihat, tekan Ctrl + R.',
      'Untuk memasukkan modul baru tempat menaruh script: Klik menu Insert > Module.'
    ],
    importantTips: [
      'Pada sebagian laptop modern, tombol fungsi F11 memerlukan kombinasi tombol Fn (Fn + Alt + F11).'
    ],
    commonMistakes: [
      {
        mistake: 'Menulis kode di dalam jendela ThisWorkbook atau Sheet1 padahal kodenya adalah macro umum.',
        solution: 'Selalu buat Standard Module melalui menu Insert > Module untuk macro umum.'
      }
    ],
    practiceTask: 'Buka VBE dengan Alt + F11, buat modul baru (Module1), lalu tulis pesan tes sederhana.',
    youtubeUrl: 'https://www.youtube.com/watch?v=jFzxQlgpah8',
    youtubeTitle: 'Tutorial Excel VBA: Pengenalan Jendela VBE Editor dan Modul Kode',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'v-07',
    category: 'vba',
    number: 7,
    title: 'Mengenal Module, Sub Procedure, Function, dan Variable',
    shortDesc: 'Struktur anatomi dasar penulisan kode VBA dari Sub awal hingga End Sub.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Setiap program VBA tersusun atas prosedur Sub (menjalankan perintah) atau Function (mengembalikan nilai hitungan).',
    explanation: [
      'Sub (Subroutine): Dimulai dengan Sub NamaMacro() dan diakhiri dengan End Sub.',
      'Function: Dimulai dengan Function NamaFungsi() dan diakhiri dengan End Function, biasa dipakai membuat rumus kustom di lembar kerja.',
      'Tanda Petik Satu (\'): Digunakan untuk menulis komentar catatan yang tidak akan dieksekusi oleh komputer.'
    ],
    syntax: 'Sub SapaPengguna()\n    MsgBox "Selamat Datang di Tutor Excel Pro!"\nEnd Sub',
    keySteps: [
      'Buka VBE (Alt + F11) > Insert > Module.',
      'Ketik: Sub HaloDunia() lalu tekan ENTER.',
      'VBE akan otomatis menambahkan baris End Sub di bawahnya.',
      'Tulis instruksi di antara kedua baris tersebut.'
    ],
    importantTips: [
      'Gunakan tombol TAB (indentasi) untuk menjorokkan kode ke dalam agar script mudah dibaca.'
    ],
    commonMistakes: [
      {
        mistake: 'Nama Sub menggunakan spasi seperti Sub Halo Dunia().',
        solution: 'Nama prosedur tidak boleh ada spasi; gunakan PascalCase seperti Sub HaloDunia() atau Sub Halo_Dunia().'
      }
    ],
    practiceTask: 'Buat Sub sederhana yang menampilkan kotak pesan sapaan selamat belajar.',
    youtubeUrl: 'https://www.youtube.com/watch?v=tynf_xLiDEQ',
    youtubeTitle: 'Membuat Tombol Keren dari Shape dan Assign Macro untuk Eksekusi 1-Klik',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'v-08',
    category: 'vba',
    number: 8,
    title: 'Mengenal MsgBox dan InputBox Interaktif',
    shortDesc: 'Menampilkan kotak dialog pesan pop-up dan meminta input teks dari pengguna.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Kotak dialog membuat aplikasi Excel Anda terasa seperti software profesional yang bisa berinteraksi dengan pengguna.',
    explanation: [
      'MsgBox: Menampilkan pesan pemberitahuan dengan tombol OK atau Yes/No. Sintaks: MsgBox "Teks Pesan", vbInformation, "Judul Jendela".',
      'InputBox: Meminta pengguna mengetik sesuatu (misal memasukkan persentase diskon atau nama cabang).'
    ],
    syntax: 'Sub TanyaNama()\n    Dim namaUser As String\n    namaUser = InputBox("Masukkan nama Anda:", "Konfirmasi Pengguna")\n    If namaUser <> "" Then\n        MsgBox "Halo " & namaUser & ", selamat belajar VBA!", vbInformation, "Tutor Excel Pro"\n    End If\nEnd Sub',
    keySteps: [
      'Salin kode di atas ke Module1 di VBE.',
      'Tekan tombol F5 pada keyboard untuk menjalankan (Run).',
      'Jendela InputBox akan muncul di layar Excel menanyakan nama Anda.'
    ],
    importantTips: [
      'Konstanta ikon MsgBox: vbInformation (ikon i biru), vbExclamation (ikon segitiga kuning peringatan), vbCritical (ikon silang merah bahaya).'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa menangani kondisi saat pengguna menekan tombol Cancel pada InputBox.',
        solution: 'Gunakan pengujian If namaUser <> "" Then untuk memastikan pengguna tidak membatalkan input.'
      }
    ],
    practiceTask: 'Buat MsgBox konfirmasi dengan tombol vbYesNo yang menanyakan apakah pengguna ingin melanjutkan proses cetak.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA',
    youtubeTitle: 'Tutorial VBA Excel: Membuat Pesan Interaktif MsgBox dan InputBox',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-09',
    category: 'vba',
    number: 9,
    title: 'Variabel dan Tipe Data VBA',
    shortDesc: 'Mendeklarasikan variabel menggunakan Dim dan memilih tipe data hemat memori (String, Long, Double, Date).',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'Variabel adalah wadah penyimpanan sementara di memori komputer untuk menampung nilai angka, teks, atau objek lembar kerja.',
    explanation: [
      'Dim (Dimension): Kata kunci untuk mendeklarasikan variabel. Contoh: Dim totalOmzet As Double.',
      'String: Tipe data teks.',
      'Long: Tipe data angka bulat besar (hingga 2 miliar), wajib untuk nomor baris Excel.',
      'Double: Tipe data angka desimal atau nominal uang rupiah.',
      'Date: Tipe data tanggal dan waktu.',
      'Boolean: Bernilai TRUE atau FALSE saja.',
      'Option Explicit: Perintah di baris paling atas modul untuk mewajibkan deklarasi semua variabel agar terhindar dari typo nama.'
    ],
    syntax: 'Option Explicit\n\nSub HitungDiskon()\n    Dim harga As Double\n    Dim qty As Long\n    Dim total As Double\n    \n    harga = 50000\n    qty = 5\n    total = harga * qty\n    \n    MsgBox "Total Belanja: Rp " & Format(total, "#,##0"), vbInformation\nEnd Sub',
    keySteps: [
      'Selalu tulis Option Explicit di baris nomor 1 modul VBE.',
      'Deklarasikan variabel dengan Dim namaVariabel As TipeData.',
      'Isi nilai ke variabel lalu gunakan dalam operasi kalkulasi.'
    ],
    importantTips: [
      'Gunakan tipe Long untuk baris Excel, jangan gunakan Integer karena Integer hanya mampu menampung angka hingga 32.767 (baris Excel mencapai 1 juta!).'
    ],
    commonMistakes: [
      {
        mistake: 'Menggunakan tipe data Integer untuk baris tabel sehingga menghasilkan error "Overflow" saat data melebihi 32.767 baris.',
        solution: 'Selalu gunakan tipe data Long untuk indeks baris.'
      }
    ],
    practiceTask: 'Deklarasikan 3 variabel (Nama, TanggalLahir, dan Gaji) dengan tipe data yang sesuai.',
    youtubeUrl: 'https://www.youtube.com/watch?v=co2e8W_V_04',
    youtubeTitle: 'Struktur Dasar Prosedur Sub dan Function dalam Pemrograman VBA',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-10',
    category: 'vba',
    number: 10,
    title: 'Percabangan Logika: If...Then...Else di VBA',
    shortDesc: 'Mengambil keputusan di script kode berdasarkan kondisi nilai angka atau status sel.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Struktur logika percabangan mengeksekusi blok kode tertentu jika syarat terpenuhi dan blok lain jika tidak.',
    explanation: [
      'Sintaks If tunggal: If kondisi Then aksi.',
      'Sintaks If blok: If kondisi Then ... ElseIf kondisi2 Then ... Else ... End If.',
      'Select Case: Alternatif yang lebih rapi jika ada banyak opsi pilihan.'
    ],
    syntax: 'Sub CekKelulusan()\n    Dim nilai As Double\n    nilai = Range("B2").Value\n    \n    If nilai >= 75 Then\n        Range("C2").Value = "LULUS"\n        Range("C2").Interior.Color = RGB(200, 255, 200)\n    Else\n        Range("C2").Value = "REMEDIAL"\n        Range("C2").Interior.Color = RGB(255, 200, 200)\n    End If\nEnd Sub',
    keySteps: [
      'Ambil nilai sel ke dalam variabel: nilai = Range("B2").Value.',
      'Lakukan pengujian kondisi dengan If nilai >= 75 Then.',
      'Tulis perintah aksi di dalam blok Then dan Else.',
      'Tutup dengan End If.'
    ],
    importantTips: [
      'Jangan lupa menambahkan End If di akhir blok If multi-baris.'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa menulis End If sehingga muncul error "Block If without End If".',
        solution: 'Pastikan setiap pembuka If memiliki pasangan penutup End If.'
      }
    ],
    practiceTask: 'Buat macro yang mengecek saldo di sel D5: jika saldo minus, munculkan MsgBox peringatan berwarna merah.',
    youtubeUrl: 'https://www.youtube.com/watch?v=co2e8W_V_04',
    youtubeTitle: 'Cara Menampilkan Pop-up Pesan Interaktif Menggunakan Perintah MsgBox di VBA',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-11',
    category: 'vba',
    number: 11,
    title: 'Perulangan: For...Next dan For Each Loop',
    shortDesc: 'Memproses ribuan baris data atau ratusan worksheet dalam sekejap mata dengan looping.',
    difficulty: 'Menengah',
    readTime: '6 menit',
    summary: 'Perulangan (Looping) adalah alasan utama mengapa orang belajar VBA. Anda bisa mengulang tugas yang sama 10.000 kali tanpa lelah.',
    explanation: [
      'For...Next: Perulangan dengan angka pencacah dari batas awal ke batas akhir. Contoh: For i = 2 To 100.',
      'For Each...Next: Perulangan untuk setiap objek di dalam sebuah koleksi, misal: Untuk setiap sheet di buku kerja (For Each ws In Worksheets).'
    ],
    syntax: 'Sub MewarnaiSemuaSheet()\n    Dim ws As Worksheet\n    For Each ws In ThisWorkbook.Worksheets\n        ws.Tab.Color = RGB(16, 124, 65) \' Hijau Excel\n    Next ws\n    MsgBox "Semua tab sheet berhasil diwarnai hijau!", vbInformation\nEnd Sub',
    keySteps: [
      'Gunakan For i = 2 To barisTerakhir untuk memproses baris tabel dari atas ke bawah.',
      'Gunakan For Each ws In Worksheets untuk melakukan hal yang sama di seluruh lembar kerja.',
      'Tutup dengan Next.'
    ],
    importantTips: [
      'Tekan tombol Esc atau Ctrl + Pause Break di keyboard jika kode Anda mengalami perulangan tak terbatas (infinite loop).'
    ],
    commonMistakes: [
      {
        mistake: 'Lupa menambahkan kenaikan angka pencacah pada Do While loop sehingga Excel hang.',
        solution: 'Gunakan For...Next yang batas akhirnya sudah jelas.'
      }
    ],
    practiceTask: 'Tulis script For...Next untuk mengisi angka urut 1 sampai 50 di kolom A.',
    youtubeUrl: 'https://www.youtube.com/watch?v=co2e8W_V_04',
    youtubeTitle: 'Menulis Nilai dan Formula ke Sel Otomatis Menggunakan Range() dan Cells() di VBA',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-12',
    category: 'vba',
    number: 12,
    title: 'Mengolah Objek Range dan Cells di VBA',
    shortDesc: 'Dua metode paling mendasar untuk membaca, menulis, dan memodifikasi sel di lembar kerja.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Ketahui kapan harus menggunakan Range("A1") dan kapan harus menggunakan Cells(baris, kolom).',
    explanation: [
      'Range("A1"): Menggunakan huruf kolom dan angka baris seperti di lembar kerja biasa. Sangat intuitif.',
      'Cells(row, col): Menggunakan angka baris dan angka kolom. Contoh: Cells(3, 2) adalah sel B3 (baris 3, kolom ke-2). Sangat ideal untuk perulangan For i.',
      'Mencari Baris Terakhir Berisi Data: Trik sakti Cells(Rows.Count, "A").End(xlUp).Row (sama seperti menekan Ctrl + Panah Bawah).'
    ],
    syntax: 'Sub BacaTulisSel()\n    \' Menulis nilai dengan Range\n    Range("A1").Value = "Laporan Penjualan"\n    \n    \' Menulis nilai dengan Cells\n    Dim barisTerakhir As Long\n    barisTerakhir = Cells(Rows.Count, "A").End(xlUp).Row + 1\n    Cells(barisTerakhir, 1).Value = "Data Baru di Baris Terbawah"\nEnd Sub',
    keySteps: [
      'Ketik Range("A1").Value = "Teks".',
      'Untuk membaca isi sel: Dim isi As String: isi = Range("B2").Value.',
      'Gunakan formula barisTerakhir = Cells(Rows.Count, "A").End(xlUp).Row untuk mengetahui batas bawah data.'
    ],
    importantTips: [
      'Jangan gunakan Select atau Activate (hindari Range("A1").Select). Menulis langsung Range("A1").Value jauh lebih cepat hingga 100x lipat.'
    ],
    commonMistakes: [
      {
        mistake: 'Tertukar urutan Cells(kolom, baris).',
        solution: 'Ingat: Urutan Cells selalu (BARIS DULUAN, BARU KOLOM), contoh Cells(baris, kolom).'
      }
    ],
    practiceTask: 'Temukan nomor baris terakhir yang terisi data di kolom B dan tampilkan nomor barisnya di MsgBox.',
    youtubeUrl: 'https://www.youtube.com/watch?v=3iLyZq7f0os',
    youtubeTitle: 'Tutorial Excel VBA: Manipulasi Objek Range dan Cells di Lembar Kerja',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-13',
    category: 'vba',
    number: 13,
    title: 'Memasukkan Data Formulir Otomatis ke Database Sheet',
    shortDesc: 'Membuat form entri data: ketik data di lembar input, klik tombol simpan, data otomatis tersimpan di baris paling bawah tabel database.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Proyek nyata yang sangat dibutuhkan di kantor: form kasir atau formulir pendaftaran yang menyimpan data secara teratur.',
    explanation: [
      'Alur Kerja: 1. Validasi sel input tidak kosong. 2. Cari baris kosong pertama di sheet database. 3. Pindahkan nilai satu per satu. 4. Kosongkan kembali formulir input.'
    ],
    syntax: 'Sub SimpanDataTransaksi()\n    Dim wsForm As Worksheet, wsData As Worksheet\n    Dim barisBaru As Long\n    \n    Set wsForm = ThisWorkbook.Sheets("Formulir")\n    Set wsData = ThisWorkbook.Sheets("Database")\n    \n    \' Validasi input nama tidak boleh kosong\n    If wsForm.Range("C4").Value = "" Then\n        MsgBox "Nama Pelanggan wajib diisi!", vbExclamation, "Peringatan"\n        Exit Sub\n    End If\n    \n    \' Cari baris kosong di database\n    barisBaru = wsData.Cells(wsData.Rows.Count, "A").End(xlUp).Row + 1\n    \n    \' Pindahkan data\n    wsData.Cells(barisBaru, 1).Value = Now \' Tanggal Jam\n    wsData.Cells(barisBaru, 2).Value = wsForm.Range("C4").Value \' Nama\n    wsData.Cells(barisBaru, 3).Value = wsForm.Range("C6").Value \' Nominal\n    \n    \' Bersihkan form\n    wsForm.Range("C4,C6").ClearContents\n    MsgBox "Data transaksi berhasil disimpan!", vbInformation\nEnd Sub',
    keySteps: [
      'Buat sheet "Formulir" dengan kotak input di sel C4 (Nama) dan C6 (Nominal).',
      'Buat sheet "Database" dengan judul header di baris 1.',
      'Pasang kode di atas lalu hubungkan ke tombol simpan.'
    ],
    importantTips: [
      'Gunakan Range("C4,C6").ClearContents untuk menghapus tulisan tanpa merusak format warna sel.'
    ],
    commonMistakes: [
      {
        mistake: 'Menggunakan .Clear alih-alih .ClearContents sehingga garis border dan warna kotak formulir ikut terhapus.',
        solution: 'Gunakan .ClearContents hanya untuk membuang teks.'
      }
    ],
    practiceTask: 'Rakit formulir pendaftaran 3 kolom dan buat tombol simpan yang menyetor data ke sheet terpisah.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ICWf2VSlUx4',
    youtubeTitle: 'Tutorial Form Input Data Otomatis ke Database Sheet dengan VBA Excel',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-14',
    category: 'vba',
    number: 14,
    title: 'Memformat Tabel dan Header secara Otomatis',
    shortDesc: 'Menstandarkan format laporan mentah yang di-download dari sistem: warna header, font, border, dan auto-fit.',
    difficulty: 'Menengah',
    readTime: '5 menit',
    summary: 'Script cepat untuk menyulap data mentah acak-acakan menjadi laporan siap setor ke direksi dalam 1 detik.',
    explanation: [
      'Data mentah yang diekspor dari database atau core banking biasanya tidak memiliki garis batas, warna header, dan ukuran kolom berantakan.',
      'Perintah Range("A1").CurrentRegion secara otomatis memilih seluruh area data yang terhubung tanpa perlu menentukan batas baris akhir secara manual.',
      'Blok With ... End With memungkinkan kita memodifikasi properti Font, Warna, dan Alignment sekaligus secara efisien.'
    ],
    syntax: 'Sub FormatTabelOtomatis()\n    Dim ws As Worksheet\n    Dim rngTabel As Range\n    Set ws = ActiveSheet\n    \n    \' Ambil seluruh area data\n    Set rngTabel = ws.Range("A1").CurrentRegion\n    \n    With ws.Range("A1", ws.Cells(1, rngTabel.Columns.Count))\n        .Font.Bold = True\n        .Font.Color = RGB(255, 255, 255)\n        .Interior.Color = RGB(16, 124, 65) \' Hijau Excel\n        .HorizontalAlignment = xlCenter\n    End With\n    \n    rngTabel.Borders.LineStyle = xlContinuous\n    rngTabel.Columns.AutoFit\n    \n    MsgBox "Tabel berhasil diformat rapi!", vbInformation\nEnd Sub',
    keySteps: [
      'Gunakan Range("A1").CurrentRegion untuk memilih seluruh blok tabel data secara otomatis tanpa peduli berapa ratus baris panjangnya.',
      'Gunakan blok With ... End With untuk efisiensi formatting.'
    ],
    importantTips: [
      'CurrentRegion bekerja seperti shortcut Ctrl + A pada tabel data yang dibatasi baris kosong.'
    ],
    commonMistakes: [
      {
        mistake: 'Ada baris yang kosong total di tengah tabel sehingga CurrentRegion berhenti lebih awal.',
        solution: 'Pastikan data tabel tidak terputus oleh baris yang kosong total.'
      }
    ],
    practiceTask: 'Terapkan macro formatting otomatis ini pada lembar kerja data mentah Anda.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ICWf2VSlUx4',
    youtubeTitle: 'Menggunakan Looping For..Next untuk Memproses Ratusan Baris Sekaligus',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-15',
    category: 'vba',
    number: 15,
    title: 'Membuat Nomor Urut Otomatis dengan VBA',
    shortDesc: 'Mengisi kolom No urut 1, 2, 3... sepanjang data nama terisi secara dinamis.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Menghindari pengetikan nomor urut manual atau penarikan mouse yang lama saat data mencapai puluhan ribu baris.',
    explanation: [
      'Mengetik nomor urut manual 1, 2, 3 sangat membuang waktu dan berisiko salah urut jika ada baris yang disisipkan.',
      'Script VBA ini membaca kolom nama di kolom B untuk mendeteksi berapa baris data yang ada, lalu secara otomatis menulis nomor urut 1 sampai selesai di kolom A.'
    ],
    syntax: 'Sub BuatNomorUrut()\n    Dim barisAkhir As Long, i As Long\n    barisAkhir = Cells(Rows.Count, "B").End(xlUp).Row\n    \n    If barisAkhir < 2 Then Exit Sub\n    \n    For i = 2 To barisAkhir\n        Cells(i, 1).Value = i - 1\n    Next i\nEnd Sub',
    keySteps: [
      'Hitung baris terakhir di kolom nama (kolom B).',
      'Lakukan looping dari baris 2 sampai baris akhir.',
      'Isi kolom A dengan nilai i - 1.'
    ],
    importantTips: [
      'Metode ini sangat fleksibel meskipun jumlah baris bertambah atau berkurang setiap hari.'
    ],
    commonMistakes: [
      {
        mistake: 'Looping mulai dari baris 1 sehingga judul header "No" tertimpa angka 0.',
        solution: 'Mulai looping dari baris ke-2 (For i = 2 To ...).'
      }
    ],
    practiceTask: 'Jalankan macro ini pada tabel 20 baris nama untuk melihat nomor urut terisi otomatis.',
    youtubeUrl: 'https://www.youtube.com/watch?v=tynf_xLiDEQ',
    youtubeTitle: 'Studi Kasus VBA: Tombol Reset dan Bersihkan Formulir Input Sel',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'v-16',
    category: 'vba',
    number: 16,
    title: 'Mencetak dan Menyimpan Laporan ke PDF Otomatis',
    shortDesc: 'Ekspor lembar kerja ke file PDF dengan penamaan dinamis berdasarkan nama invoice dan tanggal hari ini.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Otomatisasi pembuatan dokumen PDF tanpa perlu membuka menu File > Save As satu per satu.',
    explanation: [
      'Membuat invoice atau slip gaji satu per satu secara manual sangat lambat jika terdapat puluhan pelanggan.',
      'Metode ExportAsFixedFormat dengan parameter xlTypePDF memungkinkan ekspor langsung dari lembar kerja aktif ke file PDF berkualitas cetak dengan nama file otomatis.'
    ],
    syntax: 'Sub CetakPDF_Otomatis()\n    Dim namaFile As String\n    Dim folderTujuan As String\n    \n    folderTujuan = ThisWorkbook.Path & "\\"\n    namaFile = "Invoice_" & Range("C2").Value & "_" & Format(Date, "yyyymmdd") & ".pdf"\n    \n    ActiveSheet.ExportAsFixedFormat _\n        Type:=xlTypePDF, _\n        Filename:=folderTujuan & namaFile, _\n        Quality:=xlQualityStandard, _\n        OpenAfterPublish:=True\n        \n    MsgBox "PDF berhasil dibuat: " & namaFile, vbInformation\nEnd Sub',
    keySteps: [
      'Gunakan perintah ExportAsFixedFormat dengan parameter Type:=xlTypePDF.',
      'Gunakan ThisWorkbook.Path agar file PDF tersimpan di folder yang sama dengan file Excel Anda.',
      'Set OpenAfterPublish:=True jika ingin PDF langsung terbuka otomatis setelah selesai dibuat.'
    ],
    importantTips: [
      'Pastikan file Excel Anda sudah pernah disimpan (disave) di suatu folder agar ThisWorkbook.Path tidak kosong.'
    ],
    commonMistakes: [
      {
        mistake: 'Karakter pada nama file mengandung tanda terlarang seperti / atau :.',
        solution: 'Gunakan format tanggal Format(Date, "yyyymmdd") tanpa garis miring.'
      }
    ],
    practiceTask: 'Buat macro ekspor PDF untuk lembar slip gaji dan simpan dengan nama NIK karyawan.',
    youtubeUrl: 'https://www.youtube.com/watch?v=tynf_xLiDEQ',
    youtubeTitle: 'Studi Kasus VBA: Memindahkan Data Input ke Sheet Database Historis',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'v-17',
    category: 'vba',
    number: 17,
    title: 'Menggabungkan Data dari Beberapa Worksheet Menjadi Satu',
    shortDesc: 'Konsolidasi data dari tab Sheet1, Sheet2, Sheet3... ke tab Rekapitulasi secara vertikal.',
    difficulty: 'Mahir',
    readTime: '7 menit',
    summary: 'Script konsolidasi paling populer untuk menyatukan puluhan sheet bulanan atau sheet per divisi ke dalam satu sheet master.',
    explanation: [
      'Seringkali kantor memiliki workbook dengan 12 tab sheet per bulan yang datanya harus disatukan ke dalam satu sheet konsolidasi tahunan.',
      'Looping For Each ws In ThisWorkbook.Worksheets memeriksa setiap sheet satu per satu, menghitung baris terakhir, dan menyalin data ke baris kosong berikutnya di sheet rekapitulasi.'
    ],
    syntax: 'Sub GabungSemuaSheet()\n    Dim ws As Worksheet, wsMaster As Worksheet\n    Dim barisSumber As Long, barisTujuan As Long\n    \n    Set wsMaster = ThisWorkbook.Sheets("MasterRekap")\n    \n    For Each ws In ThisWorkbook.Worksheets\n        If ws.Name <> wsMaster.Name Then\n            barisSumber = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row\n            If barisSumber >= 2 Then\n                barisTujuan = wsMaster.Cells(wsMaster.Rows.Count, "A").End(xlUp).Row + 1\n                ws.Range("A2:D" & barisSumber).Copy wsMaster.Range("A" & barisTujuan)\n            End If\n        End If\n    Next ws\n    \n    MsgBox "Penggabungan data dari seluruh sheet selesai!", vbInformation\nEnd Sub',
    keySteps: [
      'Siapkan sheet penampung bernama "MasterRekap" dengan judul kolom di baris 1.',
      'Looping setiap sheet dengan For Each ws In Worksheets.',
      'Pastikan ada kondisi If ws.Name <> wsMaster.Name agar sheet master tidak ikut disalin ke dirinya sendiri.'
    ],
    importantTips: [
      'Tambahkan Application.ScreenUpdating = False di awal kode untuk mematikan kedipan layar sehingga proses berjalan 5x lebih cepat.'
    ],
    commonMistakes: [
      {
        mistake: 'Ikut menyalin baris judul header dari semua sheet sehingga judul muncul berulang-ulang di tengah data.',
        solution: 'Mulai rentang copy dari baris ke-2 (Range("A2:D...")) agar header tidak ikut.'
      }
    ],
    practiceTask: 'Gabungkan isi 3 sheet cabang yang berbeda menjadi 1 sheet konsolidasi dengan script ini.',
    youtubeUrl: 'https://www.youtube.com/watch?v=co2e8W_V_04',
    youtubeTitle: 'Otomasi Protect dan Unprotect Worksheet Menggunakan Script VBA',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-18',
    category: 'vba',
    number: 18,
    title: 'Membuat Tombol untuk Menjalankan Macro',
    shortDesc: 'Memasang Button Form Control atau Shape tombol cantik di lembar kerja agar siap ditekan operator.',
    difficulty: 'Dasar',
    readTime: '4 menit',
    summary: 'Pengguna awam tidak perlu membuka jendela VBE atau tahu shortcut keyboard; cukup klik tombol grafis di layar.',
    explanation: [
      'Memberikan antarmuka yang ramah pengguna adalah kunci agar macro dapat digunakan dengan nyaman oleh staf atau rekan kerja.',
      'Excel menyediakan Form Control Buttons serta Shape (bentuk kotak dengan warna gradasi, bayangan, dan ikon) yang bisa ditautkan ke macro melalui menu Assign Macro.'
    ],
    keySteps: [
      'Cara 1 (Form Control): Buka tab Developer > Insert > pilih ikon "Button (Form Control)". Gambar tombol di sheet, lalu pilih nama Macro yang ingin dijalankan.',
      'Cara 2 (Shape Modern): Buka tab Insert > Shapes > pilih Rounded Rectangle. Beri warna gradasi hijau, ketik teks "PROSES DATA". Klik kanan pada Shape tersebut > pilih "Assign Macro..." > pilih macro Anda > klik OK.'
    ],
    importantTips: [
      'Menggunakan Shape memungkinkan Anda mendesain tombol bergaya modern dengan bayangan halus (drop shadow) dan sudut membulat yang indah.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengklik Shape saat sedang ingin mengedit teks tetapi macro-nya malah langsung tereksekusi.',
        solution: 'Klik kanan pada tombol jika ingin mengedit tampilan tanpa mengeksekusi kodenya.'
      }
    ],
    practiceTask: 'Gambar satu bentuk Shape tombol hijau di sheet Anda dan hubungkan ke macro pesan sapaan.',
    youtubeUrl: 'https://www.youtube.com/watch?v=tynf_xLiDEQ',
    youtubeTitle: 'Cara Simpan Lembar Kerja Langsung Menjadi File PDF dengan Satu Tombol Macro',
    youtubeChannel: 'Karya Riantoni'
  },
  {
    id: 'v-19',
    category: 'vba',
    number: 19,
    title: 'Menangani Kesalahan dengan On Error (Error Handling)',
    shortDesc: 'Mencegah munculnya jendela error kuning "Debug" yang menakutkan bagi pengguna awam.',
    difficulty: 'Mahir',
    readTime: '6 menit',
    summary: 'Error handling menangkap kegagalan tak terduga (misal sheet tidak ada atau file sedang terkunci) dan menampilkan solusi yang santun.',
    explanation: [
      'On Error Resume Next: Mengabaikan error dan lanjut mengeksekusi baris berikutnya.',
      'On Error GoTo LabelError: Melompat ke blok penanganan kesalahan di bagian bawah prosedur.',
      'On Error GoTo 0: Mengembalikan penanganan error ke kondisi standar Excel.'
    ],
    syntax: 'Sub BukaFileAman()\n    On Error GoTo PenanganError\n    \n    \' Mencoba membuka sheet yang mungkin tidak ada\n    Sheets("Laporan_Rahasia").Select\n    Exit Sub\n    \nPenanganError:\n    MsgBox "Maaf, Sheet \'Laporan_Rahasia\' tidak ditemukan!", vbCritical, "Error"\nEnd Sub',
    keySteps: [
      'Tulis On Error GoTo NamaLabel di awal prosedur.',
      'Tulis Exit Sub tepat sebelum label agar kode penangan error tidak ikut berjalan saat kondisi normal.',
      'Tulis label penanganan: NamaLabel: diikuti pesan peringatan ramah.'
    ],
    importantTips: [
      'Selalu cantumkan Exit Sub sebelum baris label error handling.'
    ],
    commonMistakes: [
      {
        mistake: 'Menggunakan On Error Resume Next di semua kode sehingga error fatal tersembunyi dan data menjadi rusak tanpa disadari.',
        solution: 'Gunakan Resume Next hanya pada baris spesifik yang sudah diantisipasi.'
      }
    ],
    practiceTask: 'Bungkus macro pencarian sheet Anda dengan blok On Error GoTo untuk menangani jika nama sheet salah ketik.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA',
    youtubeTitle: 'Pengenalan UserForm: Membuat Antarmuka Formulir Input Modern di Excel',
    youtubeChannel: 'Apri Excel'
  },
  {
    id: 'v-20',
    category: 'vba',
    number: 20,
    title: 'Menyimpan File dalam Format XLSM (Macro-Enabled)',
    shortDesc: 'Aturan wajib menyimpan dokumen yang berisi Macro agar kode tidak hilang permanen saat ditutup.',
    difficulty: 'Dasar',
    readTime: '3 menit',
    summary: 'Jika Anda menyimpan workbook berisi VBA dengan format standar .xlsx biasa, Excel akan menghapus seluruh modul script Anda tanpa ampun.',
    explanation: [
      'Format .xlsx: Buku kerja standar tanpa kode macro (XML aman).',
      'Format .xlsm: Excel Macro-Enabled Workbook. Format wajib untuk menyimpan kode VBA.',
      'Format .xlsb: Excel Binary Workbook. Mendukung macro dan ukuran file jauh lebih kecil.'
    ],
    keySteps: [
      'Buka menu File > Save As.',
      'Klik dropdown "Save as type" (Tipe Penyimpanan).',
      'Pilih opsi "Excel Macro-Enabled Workbook (*.xlsm)".',
      'Klik tombol Save.'
    ],
    importantTips: [
      'Perhatikan ikon file .xlsm di Windows memiliki lambang gulungan kertas kuning kecil di sudutnya.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengabaikan peringatan pop-up "The following features cannot be saved in macro-free workbooks" dan menekan Yes.',
        solution: 'Klik No, lalu ubah jenis tipe file menjadi .xlsm.'
      }
    ],
    practiceTask: 'Simpan workbook latihan VBA Anda ke dalam format .xlsm dan pastikan kodenya tetap utuh saat dibuka kembali.',
    youtubeUrl: 'https://www.youtube.com/watch?v=G6InEnhRpqg',
    youtubeTitle: 'Mengatasi Peringatan Keamanan "Macros have been disabled" dan Trust Center',
    youtubeChannel: 'Belajar Komputer'
  },
  {
    id: 'v-21',
    category: 'vba',
    number: 21,
    title: 'Keamanan Macro dan Mencegah Kode Berbahaya',
    shortDesc: 'Memahami Trust Center, Enable Content, digital signature, dan cara mengecek script sebelum dijalankan.',
    difficulty: 'Dasar',
    readTime: '5 menit',
    summary: 'Macro memiliki akses penuh ke sistem file komputer. Pelajari cara melindungi diri dari bahaya macro virus dari sumber asing.',
    explanation: [
      'Yellow Security Warning: Pita kuning "Macros have been disabled. Enable Content" yang muncul saat membuka file dari internet.',
      'Macro Settings di Trust Center: Disable all macros with notification adalah setelan default paling direkomendasikan.',
      'Aturan Emas: JANGAN PERNAH klik tombol "Enable Content" jika file dikirim oleh orang asing melalui email atau download dari website tidak resmi.'
    ],
    keySteps: [
      'Untuk mengecek isi kode sebelum dijalankan: Buka file, JANGAN klik Enable Content terlebih dahulu.',
      'Tekan Alt + F11 untuk membuka VBE.',
      'Buka folder Modules di Project Explorer dan baca kode script di dalamnya.',
      'Jika script tampak mencurigakan (mengakses file sistem luar atau shell run), segera tutup tanpa menyimpan.'
    ],
    importantTips: [
      'Gunakan folder "Trusted Locations" di Excel Options untuk folder kerja resmi kantor Anda agar macro tidak selalu meminta konfirmasi berulang kali.'
    ],
    commonMistakes: [
      {
        mistake: 'Mengatur Macro Settings ke "Enable all macros (not recommended)" yang membuat komputer rentan terhadap malware.',
        solution: 'Selalu pertahankan opsi "Disable with notification".'
      }
    ],
    practiceTask: 'Buka Excel Options > Trust Center > Trust Center Settings > Macro Settings dan pastikan pengaturannya aman.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_o4Sx3rSJA',
    youtubeTitle: 'Praktik Terbaik Penulisan Kode VBA, Komentar Kode, dan Penanganan Error (On Error Resume Next)',
    youtubeChannel: 'Apri Excel'
  }
];
