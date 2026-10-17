import { TroubleshootingGuide } from '../types';

export const troubleshootingData: TroubleshootingGuide[] = [
  {
    error: '#N/A (Not Available)',
    title: 'Nilai Acuan Tidak Ditemukan',
    cause: 'Fungsi pencarian seperti VLOOKUP, HLOOKUP, MATCH, atau XLOOKUP tidak dapat menemukan nilai kunci yang dicari pada tabel acuan.',
    solutionSteps: [
      'Periksa apakah ada kelebihan spasi di awal atau akhir kata pada nilai acuan (gunakan rumus =TRIM() untuk membersihkan).',
      'Pastikan tipe data sama persis: jangan sampai kunci di sel bertipe Angka sedangkan di tabel master tersimpan sebagai Teks.',
      'Bungkus rumus dengan fungsi IFERROR: =IFERROR(VLOOKUP(...), "Data Tidak Ditemukan") agar sel tetap tampil bersih.'
    ],
    example: 'Mencari kode "B-01" tetapi di tabel master tertulis "B-01 " (ada spasi di ujung).'
  },
  {
    error: '#VALUE! (Parameter Salah Tipe)',
    title: 'Operasi Matematika Menabrak Teks',
    cause: 'Rumus matematika mencoba menghitung sel yang berisi teks atau rumus menerima argumen dengan tipe data yang salah.',
    solutionSteps: [
      'Periksa apakah ada sel yang berisi kata seperti "Nihil", "Kosong", atau spasi yang ikut dihitung dalam rumus tambah/kali (+, *).',
      'Gunakan fungsi =SUM() alih-alih tanda plus (+), karena fungsi SUM otomatis mengabaikan teks.',
      'Gunakan fitur Formulas > Evaluate Formula untuk melihat bagian mana yang menghasilkan #VALUE!.'
    ],
    example: '=A1 + B1 di mana A1 bernilai 500 dan B1 berisi tulisan "Libur". Gunakan =SUM(A1:B1) untuk hasil 500.'
  },
  {
    error: '#REF! (Reference Invalid)',
    title: 'Sel Referensi Terhapus atau Hilang',
    cause: 'Baris atau kolom yang dijadikan rujukan rumus telah dihapus secara fisik dari lembar kerja.',
    solutionSteps: [
      'Segera tekan Ctrl + Z jika Anda baru saja menghapus baris/kolom secara tidak sengaja.',
      'Jika menyalin hasil rumus ke tempat lain, gunakan Paste Special > Values agar sel tujuan tidak bergantung pada referensi lama.',
      'Ganti referensi #REF! yang rusak dengan koordinat sel yang benar di Formula Bar.'
    ],
    example: 'Rumus =A1+B1, lalu kolom B dihapus dari lembar kerja, rumus berubah menjadi =A1+#REF!.'
  },
  {
    error: '#DIV/0! (Divided by Zero)',
    title: 'Pembagian dengan Angka Nol atau Sel Kosong',
    cause: 'Rumus mencoba membagi suatu bilangan dengan angka nol (0) atau dengan sel yang kosong.',
    solutionSteps: [
      'Pastikan sel pembagi sudah terisi angka yang valid dan tidak bernilai nol.',
      'Bungkus rumus dengan IF: =IF(B2=0, 0, A2/B2).',
      'Atau gunakan IFERROR: =IFERROR(A2/B2, 0).'
    ],
    example: 'Menghitung rata-rata penjualan per hari saat jumlah hari masih bernilai 0 di awal bulan.'
  },
  {
    error: '#NAME? (Name Unrecognized)',
    title: 'Nama Fungsi Typo atau Teks Kurang Petik',
    cause: 'Excel tidak mengenali nama fungsi yang diketik (salah eja) atau teks di dalam rumus tidak diapit tanda petik dua (" ").',
    solutionSteps: [
      'Periksa ejaan nama rumus: contohnya mengetik =VLOKUP() alih-alih =VLOOKUP().',
      'Pastikan teks kriteria selalu diapit tanda petik dua ganda: =IF(A1=10, "Lulus", "Gagal").',
      'Pastikan fungsi yang digunakan didukung di versi Excel Anda (misal XLOOKUP di Excel 2013 akan memicu #NAME?).'
    ],
    example: '=IF(A1=10, Lulus, Gagal) tanpa tanda petik memicu error #NAME?.'
  },
  {
    error: '#SPILL! (Spill Blocked)',
    title: 'Jalur Tumpahan Array Terhalang',
    cause: 'Rumus Dynamic Array di Excel modern ingin menampilkan banyak baris/kolom hasil tetapi jalurnya terhalang oleh sel yang sudah terisi teks/angka atau sel gabungan (merged cells).',
    solutionSteps: [
      'Klik sel yang bertanda #SPILL! dan perhatikan garis batas putus-putus tipis yang muncul di sekitarnya.',
      'Hapus isi sel atau teks yang menghalangi di dalam batas tersebut.',
      'Pastikan tidak ada sel yang digabungkan (Merge Cells) di sepanjang area tumpahan.'
    ],
    example: 'Mengetik =UNIQUE(A2:A50) di sel C2, namun di sel C5 ada ketikan catatan kecil.'
  },
  {
    error: 'Angka Nol Depan Hilang',
    title: 'Nomor HP atau NIK KTP Kehilangan Angka 0 di Depan',
    cause: 'Excel secara otomatis memperlakukan input nomor sebagai bilangan bulat matematika dan menghapus digit 0 di depan.',
    solutionSteps: [
      'Ketik tanda petik satu (\') sebelum angka nol, contoh: \'08179015181.',
      'Atau ubah Number Format kolom tersebut menjadi "Text" sebelum data diketik.',
      'Gunakan Custom Format: 0000000000000000 (16 digit) untuk NIK KTP.'
    ],
    example: 'Mengetik 0812345678 berubah menjadi 812345678.'
  },
  {
    error: 'Angka Terbaca Sebagai Teks',
    title: 'Angka Rata Kiri dan Tidak Mau Dijumlahkan',
    cause: 'Data hasil download dari sistem database tersimpan sebagai teks sehingga rumus SUM menghasilkan angka 0.',
    solutionSteps: [
      'Pilih kolom angka tersebut, buka tab Data > klik "Text to Columns" > langsung klik tombol Finish.',
      'Atau gunakan rumus konversi: =VALUE(A2) atau kalikan dengan angka satu: =A2*1.',
      'Klik ikon segitiga kuning peringatan di samping sel lalu pilih "Convert to Number".'
    ],
    example: 'Total =SUM(A1:A10) menghasilkan 0 padahal di sel ada angka-angkanya.'
  }
];
