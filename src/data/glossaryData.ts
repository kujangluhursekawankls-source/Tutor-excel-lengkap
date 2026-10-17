import { GlossaryTerm } from '../types';

export const glossaryData: GlossaryTerm[] = [
  {
    term: 'Cell (Sel)',
    category: 'Antarmuka',
    definition: 'Kotak perpotongan antara satu kolom (huruf) dan satu baris (angka), merupakan unit terkecil tempat menyimpan teks, angka, atau rumus di spreadsheet.',
    example: 'Sel B3 merujuk pada perpotongan kolom B dan baris ke-3.'
  },
  {
    term: 'Range (Rentang Sel)',
    category: 'Antarmuka',
    definition: 'Kumpulan dua atau lebih sel yang dipilih secara bersamaan, ditulis dengan tanda titik dua (:).',
    example: 'A1:C10 mencakup seluruh blok 30 sel dari kolom A sampai C dan baris 1 sampai 10.'
  },
  {
    term: 'Workbook',
    category: 'File',
    definition: 'Satu file dokumen utuh Microsoft Excel (berekstensi .xlsx atau .xlsm) yang dapat menampung banyak lembar kerja (worksheet).',
    example: 'File "Laporan_Keuangan_2026.xlsx".'
  },
  {
    term: 'Worksheet / Sheet',
    category: 'File',
    definition: 'Satu lembaran halaman kerja kisi sel di dalam workbook, ditandai dengan tab di bagian bawah jendela Excel.',
    example: 'Tab sheet "Januari", "Februari", dan "Rekap".'
  },
  {
    term: 'Argument (Argumen)',
    category: 'Rumus',
    definition: 'Nilai input atau parameter yang dimasukkan di dalam tanda kurung fungsi Excel untuk menghasilkan kalkulasi.',
    example: 'Pada =VLOOKUP(A2, D2:E10, 2, FALSE), argumennya ada 4: lookup_value, table_array, col_index, dan range_lookup.'
  },
  {
    term: 'Syntax (Sintaks)',
    category: 'Rumus',
    definition: 'Struktur tata bahasa dan urutan penulisan resmi sebuah rumus atau fungsi di Excel.',
    example: '=IF(logical_test, value_if_true, value_if_false).'
  },
  {
    term: 'Absolute Reference (Referensi Absolut)',
    category: 'Rumus',
    definition: 'Penguncian alamat sel menggunakan tanda dolar ($A$1) agar posisinya tidak bergeser saat rumus disalin ke sel lain.',
    example: 'Sel $E$1 yang menyimpan persentase pajak PPN 11% dikunci mati.'
  },
  {
    term: 'Relative Reference (Referensi Relatif)',
    category: 'Rumus',
    definition: 'Alamat sel biasa tanpa tanda dolar (A1) yang posisinya akan otomatis bergeser relatif mengikuti arah saat rumus disalin ke bawah atau ke samping.',
    example: 'Rumus =A1*B1 ditarik ke bawah menjadi =A2*B2.'
  },
  {
    term: 'Volatile Function',
    category: 'Performa',
    definition: 'Fungsi Excel yang otomatis dihitung ulang setiap kali ada perubahan pada sel mana pun di workbook, meskipun data input fungsi tersebut tidak berubah.',
    example: 'TODAY(), NOW(), OFFSET(), dan INDIRECT() adalah fungsi volatile yang jika dipakai ribuan baris dapat membuat lemot.'
  },
  {
    term: 'Dynamic Array (Array Dinamis)',
    category: 'Excel Modern',
    definition: 'Fitur Excel generasi baru di mana satu rumus dapat menghasilkan kumpulan nilai yang otomatis menumpah (spill) ke sel-sel kosong di sekitarnya.',
    example: '=UNIQUE(A2:A100) langsung mengeluarkan daftar nama unik ke beberapa baris sekaligus.'
  },
  {
    term: 'Spill Range',
    category: 'Excel Modern',
    definition: 'Area kotak persegi bertanda garis biru tipis tempat hasil kalkulasi Dynamic Array menumpahkan nilainya.',
    example: 'Diberi tanda pagar (#) seperti A2# untuk merujuk seluruh hasil tumpahan.'
  },
  {
    term: 'Macro',
    category: 'Otomasi',
    definition: 'Serangkaian tindakan perekaman klik dan pengetikan yang disimpan untuk dijalankan berulang secara otomatis.',
    example: 'Macro untuk mewarnai tabel dan mencetak laporan dalam satu klik.'
  },
  {
    term: 'VBA (Visual Basic for Applications)',
    category: 'Otomasi',
    definition: 'Bahasa pemrograman internal di balik Microsoft Office untuk menciptakan fungsi dan otomasi kustom tingkat tinggi.',
    example: 'Script kode di dalam editor Alt + F11.'
  },
  {
    term: 'PivotTable',
    category: 'Analisis',
    definition: 'Tabel ringkasan interaktif yang mampu mengelompokkan, memfilter, dan menjumlahkan puluhan ribu data besar dalam hitungan detik.',
    example: 'Meringkas omzet penjualan 50.000 transaksi menjadi rekapitulasi per kota cabang.'
  },
  {
    term: 'Slicer',
    category: 'Dashboard',
    definition: 'Tombol filter visual modern yang dapat diklik untuk menyaring data pada PivotTable dan grafik dashboard secara serentak.',
    example: 'Tombol filter sentuh untuk memilih kategori produk.'
  },
  {
    term: 'Power Query',
    category: 'Pengolahan Data',
    definition: 'Mesin transformasi data bawaan Excel untuk mengekstrak, membersihkan, dan menggabungkan banyak file dari folder secara otomatis.',
    example: 'Menggabungkan 12 file laporan bulanan tanpa copy-paste manual.'
  }
];
