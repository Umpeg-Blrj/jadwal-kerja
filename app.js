// Ambil elemen-elemen dari HTML
const form = document.getElementById('jadwal-form');
const tanggalInput = document.getElementById('tanggal');
const jamInput = document.getElementById('jam');
const kegiatanInput = document.getElementById('kegiatan');
const tableBody = document.querySelector('#jadwal-table tbody');

// Fungsi untuk menampilkan jadwal kerja
function renderJadwal() {
  // Ambil data jadwal dari LocalStorage
  const jadwalData = JSON.parse(localStorage.getItem('jadwalKerja')) || [];

  // Kosongkan isi tabel
  tableBody.innerHTML = '';

  // Tampilkan jadwal di tabel
  jadwalData.forEach(jadwal => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${jadwal.tanggal}</td>
      <td>${jadwal.jam}</td>
      <td>${jadwal.kegiatan}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Fungsi untuk menyimpan jadwal kerja
function simpanJadwal(event) {
  event.preventDefault();

  // Ambil nilai input
  const tanggal = tanggalInput.value;
  const jam = jamInput.value;
  const kegiatan = kegiatanInput.value;

  // Ambil data jadwal yang sudah ada dari LocalStorage
  const jadwalData = JSON.parse(localStorage.getItem('jadwalKerja')) || [];

  // Tambahkan jadwal baru ke array
  jadwalData.push({ tanggal, jam, kegiatan });

  // Simpan kembali ke LocalStorage
  localStorage.setItem('jadwalKerja', JSON.stringify(jadwalData));

  // Reset form
  form.reset();

  // Render ulang jadwal
  renderJadwal();
}

// Event listener untuk menyimpan jadwal
form.addEventListener('submit', simpanJadwal);

// Panggil fungsi renderJadwal untuk menampilkan data yang sudah ada saat halaman dimuat
renderJadwal();
