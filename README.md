# Aplikasi Catatan Pribadi (React)

Aplikasi catatan pribadi sederhana yang dibangun menggunakan React. Aplikasi ini memungkinkan pengguna untuk membuat, melihat, mencari, menghapus, dan mengarsipkan catatan.

## Fitur

*   **Buat Catatan**: Pengguna dapat menambahkan catatan baru dengan judul dan isi.

*   **Tampilkan Catatan**: Menampilkan daftar catatan yang aktif dan yang diarsipkan secara terpisah.
*   **Hapus Catatan**: Pengguna dapat menghapus catatan yang sudah tidak diperlukan.
*   **Arsipkan Catatan**: Pengguna dapat memindahkan catatan ke arsip atau mengembalikannya ke daftar catatan aktif.
*   **Cari Catatan**: Pengguna dapat mencari catatan berdasarkan judul.
*   **Batas Karakter Judul**: Input judul catatan dibatasi hingga 50 karakter, dengan tampilan sisa karakter.
*   **Mode Gelap (Dark Mode)**: Pengguna dapat mengganti tema tampilan antara mode terang dan gelap. Preferensi tema disimpan di `localStorage`.
*   **Pesan Catatan Kosong**: Menampilkan pesan informatif ketika tidak ada catatan (baik aktif maupun arsip).
*   **Desain Responsif**: Tampilan aplikasi menyesuaikan dengan berbagai ukuran layar.

## Struktur Proyek

```
personal-notes-starter/
├── public/
│   └── vite.svg
├── src/
│   ├── components/           # Komponen-komponen React
│   │   ├── ArchiveButton.jsx
│   │   ├── DeleteButton.jsx
│   │   ├── NoteApp.jsx       # Komponen utama aplikasi
│   │   ├── NoteInput.jsx
│   │   ├── NoteItem.jsx
│   │   ├── NoteItemBody.jsx
│   │   ├── NoteList.jsx
│   │   ├── SearchInput.jsx   # Komponen input pencarian
│   │   └── ThemeToggleButton.jsx # Komponen tombol mode gelap
│   ├── styles/
│   │   └── style.css         # File styling CSS
│   ├── utils/
│   │   └── index.js          # Data awal dan fungsi utility
│   └── index.jsx             # Entry Point aplikasi React
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── README.md                 # Dokumentasi Project
```

## Komponen Utama

*   **`NoteApp.jsx`**: Komponen induk yang mengelola state utama aplikasi, termasuk daftar catatan, query pencarian, dan tema.
*   **`NoteInput.jsx`**: Komponen form untuk menambahkan catatan baru, termasuk validasi batas karakter judul.

*   **`NoteList.jsx`**: Komponen untuk menampilkan daftar catatan (baik aktif maupun arsip).
Menerima props `notes`, `onDelete`, dan `onArchive`.
*   **`NoteItem.jsx`**: Komponen untuk menampilkan satu item catatan. Menerima detail catatan dan fungsi aksi (hapus, arsip).
*   **`NoteItemBody.jsx`**: Komponen untuk menampilkan konten dari satu item catatan (judul, tanggal, isi).
*   **`DeleteButton.jsx`**: Tombol untuk menghapus catatan.
*   **`ArchiveButton.jsx`**: Tombol untuk mengarsipkan atau membatalkan pengarsipan catatan.
*   **`SearchInput.jsx`**: Komponen input teks untuk fitur pencarian catatan.
*   **`ThemeToggleButton.jsx`**: Tombol untuk mengganti tema antara mode terang dan gelap.

## Data dan Utilitas

*   **`src/utils/index.js`**: Berisi fungsi `getInitialData()` yang menyediakan data catatan awal untuk aplikasi dan fungsi `showFormattedDate()` untuk memformat tanggal.

## Styling

*   **`src/styles/style.css`**: Berisi semua aturan CSS untuk aplikasi. Menggunakan variabel CSS untuk tema terang dan gelap.

## Cara Menjalankan Proyek (Lokal)

1.  Pastikan Node.js dan npm (atau yarn) sudah terinstal di sistem Anda.
2.  Clone repositori ini lalu pindah ke path dari direktori project ini.
3.  Instal dependensi proyek:
    ```bash
    npm install
    # atau
    yarn install
    ```
4.  Jalankan server pengembangan:
    ```bash
    npm run dev
    # atau
    yarn dev
    ```
5.  Buka browser dan akses alamat yang ditampilkan di terminal (Default  `http://localhost:5173`).

## Teknologi yang Digunakan

*   React
*   Vite (sebagai build tool dan development server)
*   JavaScript (ES6+)
*   CSS

## - The Next Updated Features -

*   Integrasi dengan backend API untuk persistensi data.
*   Fitur edit catatan.
*   Notifikasi.
*   Autentikasi pengguna.

## - Contributor -

Made by **Muhammad Dafa Ardiansyah**