// Menampilkan data saat halaman dibuka
window.onload = function () {
    tampilkanData();
};

function tambahData() {
    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;

    if (nim == "" || nama == "") {
        alert("NIM dan Nama harus diisi!");
        return;
    }

    // Ambil data yang sudah tersimpan
    let data = JSON.parse(localStorage.getItem("mahasiswa")) || [];

    // Tambahkan data baru
    data.push({
        nim: nim,
        nama: nama
    });

    // Simpan kembali ke localStorage
    localStorage.setItem("mahasiswa", JSON.stringify(data));

    // Kosongkan input
    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";

    // Tampilkan data
    tampilkanData();
}

function tampilkanData() {
    let data = JSON.parse(localStorage.getItem("mahasiswa")) || [];

    let table = document.getElementById("dataMahasiswa");

    table.innerHTML = "";

    data.forEach(function (mahasiswa) {
        let row = table.insertRow();

        let kolomNim = row.insertCell(0);
        let kolomNama = row.insertCell(1);

        kolomNim.innerHTML = mahasiswa.nim;
        kolomNama.innerHTML = mahasiswa.nama;
    });
}