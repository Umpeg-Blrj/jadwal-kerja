// script.js

document.addEventListener('DOMContentLoaded', function() {
    const jadwalForm = document.getElementById('jadwalForm');
    const jadwalTable = document.getElementById('jadwalTable').getElementsByTagName('tbody')[0];

    let selectedRow = null; // Variable untuk menandakan baris yang sedang diedit

    // Fungsi untuk menambah jadwal
    jadwalForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const namaKegiatan = document.getElementById('namaKegiatan').value;
        const jamMulai = document.getElementById('jamMulai').value;
        const jamSelesai = document.getElementById('jamSelesai').value;

        // Jika ada baris yang sedang diedit
        if (selectedRow) {
            // Update baris yang sedang diedit
            selectedRow.cells[0].textContent = namaKegiatan;
            selectedRow.cells[1].textContent = jamMulai;
            selectedRow.cells[2].textContent = jamSelesai;

            // Reset
            selectedRow = null;
        } else {
            // Tambah baris baru ke tabel
            const newRow = jadwalTable.insertRow();

            newRow.insertCell(0).textContent = namaKegiatan;
            newRow.insertCell(1).textContent = jamMulai;
            newRow.insertCell(2).textContent = jamSelesai;

            // Tambahkan tombol Edit dan Hapus ke baris
            const actionsCell = newRow.insertCell(3);

            // Tombol Edit
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.onclick = function() {
                document.getElementById('namaKegiatan').value = newRow.cells[0].textContent;
                document.getElementById('jamMulai').value = newRow.cells[1].textContent;
                document.getElementById('jamSelesai').value = newRow.cells[2].textContent;

                selectedRow = newRow; // Set baris ini untuk diedit
            };

            // Tombol Hapus
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.classList.add('delete');
            deleteButton.onclick = function() {
                jadwalTable.deleteRow(newRow.rowIndex);
            };

            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        }

        // Reset form
        jadwalForm.reset();
    });
});
