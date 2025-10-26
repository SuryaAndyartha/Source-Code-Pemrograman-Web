<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include("config.php");

if (isset($_POST['daftar'])) {
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $jk = $_POST['jenisKelamin'];
    $agama = $_POST['agama'];
    $sekolah = $_POST['asalSekolah'];

    $sql = "INSERT INTO calonsiswa (nama, alamat, jenisKelamin, agama, asalSekolah)
            VALUES ('$nama', '$alamat', '$jk', '$agama', '$sekolah')";
    $query = mysqli_query($db, $sql);

    if ($query) {
        header('Location: index.php?status=sukses');
    } else {
        header('Location: index.php?status=gagal');
    }
} else {
    die("Akses dilarang...");
}
?>
