function tambahData() {

    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;

    if (nim == "" || nama == "") {
        alert("NIM dan Nama harus diisi!");
        return;
    }

    let table = document.getElementById("dataMahasiswa");

    let row = table.insertRow();

    let kolomNim = row.insertCell(0);
    let kolomNama = row.insertCell(1);

    kolomNim.innerHTML = nim;
    kolomNama.innerHTML = nama;

    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
}