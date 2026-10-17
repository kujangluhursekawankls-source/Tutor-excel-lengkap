import * as XLSX from 'xlsx';

export interface ExerciseTemplate {
  id: string;
  title: string;
  filename: string;
  description: string;
  sheets: {
    name: string;
    data: (string | number)[][];
  }[];
}

export const EXERCISE_TEMPLATES: ExerciseTemplate[] = [
  {
    id: 'tpl-kasir',
    title: 'Template Laporan Penjualan Toko',
    filename: 'Latihan_Penjualan_Toko_TutorExcel.xlsx',
    description: 'File latihan tabel penjualan kasir untuk mempraktikkan rumus perkalian (=Qty * Harga) dan penjumlahan =SUM().',
    sheets: [
      {
        name: 'Penjualan Harian',
        data: [
          ['LAPORAN PENJUALAN HARIAN TOKO MAJU JAYA'],
          ['Tanggal:', '15 Maret 2026'],
          [''],
          ['Kode Barang', 'Nama Produk', 'Kategori', 'Qty Terjual', 'Harga Satuan (Rp)', 'Subtotal (Rp)'],
          ['BRG-01', 'Kopi Arabika 250g', 'Minuman', 5, 45000, 225000],
          ['BRG-02', 'Susu UHT Full Cream 1L', 'Minuman', 12, 18500, 222000],
          ['BRG-03', 'Gula Pasir Kristal 1kg', 'Sembako', 8, 16000, 128000],
          ['BRG-04', 'Biskuit Gandum Cokelat', 'Makanan', 15, 12000, 180000],
          ['BRG-05', 'Minyak Goreng Pouch 2L', 'Sembako', 6, 34000, 204000],
          ['BRG-06', 'Teh Celup Melati Kotak', 'Minuman', 10, 8500, 85000],
          [''],
          ['', '', '', 'TOTAL PENJUALAN:', '', 1044000],
          ['', '', '', 'RATA-RATA HARGA:', '', 22333]
        ]
      }
    ]
  },
  {
    id: 'tpl-buku-kas',
    title: 'Template Buku Kas Masuk & Keluar',
    filename: 'Latihan_Buku_Kas_Otomatis_TutorExcel.xlsx',
    description: 'Buku kas sederhana dengan saldo berjalan otomatis (=Saldo_Sebelumnya + Masuk - Keluar).',
    sheets: [
      {
        name: 'Buku Kas',
        data: [
          ['BUKU KAS UMUM OPERASIONAL BULANAN'],
          ['Periode: Maret 2026'],
          [''],
          ['Tanggal', 'Keterangan Transaksi', 'Kategori', 'Pemasukan (Rp)', 'Pengeluaran (Rp)', 'Saldo Akhir (Rp)'],
          ['01/03/2026', 'Modal Kas Awal Bulan', 'Modal', 2500000, 0, 2500000],
          ['03/03/2026', 'Beli Kertas HVS & Tinta Printer', 'ATK Kantor', 0, 175000, 2325000],
          ['05/03/2026', 'Pelunasan Jasa Desain Grafis', 'Pendapatan', 850000, 0, 3175000],
          ['08/03/2026', 'Pembayaran Listrik & WiFi Kantor', 'Utilitas', 0, 320000, 2855000],
          ['12/03/2026', 'Penjualan Produk Merchandise', 'Pendapatan', 1200000, 0, 4055000],
          ['15/03/2026', 'Konsumsi Rapat Bulanan Tim', 'Operasional', 0, 140000, 3915000],
          [''],
          ['TOTAL REKAPITULASI:', '', '', 4550000, 635000, 3915000]
        ]
      }
    ]
  },
  {
    id: 'tpl-vlookup',
    title: 'Template Master VLOOKUP & XLOOKUP',
    filename: 'Latihan_VLOOKUP_XLOOKUP_TutorExcel.xlsx',
    description: 'Dua sheet terhubung: Sheet Master Produk dan Sheet Transaksi Kasir untuk latihan rumus VLOOKUP/XLOOKUP.',
    sheets: [
      {
        name: 'Transaksi Kasir',
        data: [
          ['SIMULASI TRANSAKSI PENJUALAN DENGAN VLOOKUP / XLOOKUP'],
          ['(Isi kolom Nama dan Harga dengan rumus mengacu ke Sheet Master Barang)'],
          [''],
          ['No Faktur', 'Kode Barang', 'Nama Produk (Lookup)', 'Harga Satuan (Lookup)', 'Qty', 'Total'],
          ['TRX-001', 'P-101', 'Laptop Ultrabook 14"', 8500000, 2, 17000000],
          ['TRX-002', 'P-103', 'Wireless Mouse Ergonomic', 185000, 5, 925000],
          ['TRX-003', 'P-102', 'Monitor Gaming 24" 165Hz', 1750000, 1, 1750000],
          ['TRX-004', 'P-105', 'USB Flashdisk 64GB', 75000, 10, 750000],
          ['TRX-005', 'P-104', 'Mechanical Keyboard TKL', 450000, 3, 1350000]
        ]
      },
      {
        name: 'Master Barang',
        data: [
          ['TABEL MASTER PRODUK ELEKTRONIK'],
          [''],
          ['Kode Barang', 'Nama Barang Lengkap', 'Kategori', 'Harga Beli (Rp)', 'Harga Jual (Rp)'],
          ['P-101', 'Laptop Ultrabook 14"', 'Komputer', 7200000, 8500000],
          ['P-102', 'Monitor Gaming 24" 165Hz', 'Display', 1450000, 1750000],
          ['P-103', 'Wireless Mouse Ergonomic', 'Aksesoris', 120000, 185000],
          ['P-104', 'Mechanical Keyboard TKL', 'Aksesoris', 340000, 450000],
          ['P-105', 'USB Flashdisk 64GB', 'Penyimpanan', 50000, 75000],
          ['P-106', 'Webcam Full HD 1080p', 'Kamera', 220000, 310000]
        ]
      }
    ]
  },
  {
    id: 'tpl-stok',
    title: 'Template Laporan Stok Gudang (Inventory)',
    filename: 'Latihan_Stok_Barang_Gudang_TutorExcel.xlsx',
    description: 'Tabel inventaris gudang dengan perhitungan stok akhir dan status restock otomatis (=IF(Stok<=Min, "Restock", "Aman")).',
    sheets: [
      {
        name: 'Stok Gudang',
        data: [
          ['LAPORAN KONTROL STOK BARANG GUDANG'],
          ['Per Tanggal: 15 Maret 2026'],
          [''],
          ['Kode SKU', 'Nama Barang', 'Satuan', 'Stok Awal', 'Barang Masuk', 'Barang Keluar', 'Stok Akhir', 'Stok Minimum', 'Status Restock'],
          ['SKU-01', 'Kertas HVS A4 70gsm', 'Rim', 50, 40, 78, 12, 15, 'SEGERA RESTOCK'],
          ['SKU-02', 'Tinta Printer Hitam 003', 'Botol', 20, 30, 25, 25, 10, 'AMAN'],
          ['SKU-03', 'Map Business File Biru', 'Pcs', 100, 50, 130, 20, 25, 'SEGERA RESTOCK'],
          ['SKU-04', 'Pulpen Gel Hitam 0.5', 'Lusin', 35, 20, 18, 37, 10, 'AMAN'],
          ['SKU-05', 'Buku Kas Folio 100 Hal', 'Buku', 15, 10, 21, 4, 8, 'SEGERA RESTOCK'],
          ['SKU-06', 'Stapler No 10 + Isi', 'Set', 25, 15, 12, 28, 5, 'AMAN']
        ]
      }
    ]
  }
];

export function downloadExerciseWorkbook(templateId: string): boolean {
  try {
    const template = EXERCISE_TEMPLATES.find(t => t.id === templateId);
    if (!template) return false;

    const workbook = XLSX.utils.book_new();

    template.sheets.forEach(sheet => {
      const ws = XLSX.utils.aoa_to_sheet(sheet.data);

      // Auto fit column widths
      const colWidths = sheet.data[3] ? sheet.data[3].map(() => ({ wch: 22 })) : [{ wch: 20 }];
      ws['!cols'] = colWidths;

      XLSX.utils.book_append_sheet(workbook, ws, sheet.name);
    });

    XLSX.writeFile(workbook, template.filename);
    return true;
  } catch (err) {
    console.error('Failed to generate excel file:', err);
    return false;
  }
}
