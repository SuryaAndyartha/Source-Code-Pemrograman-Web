<?php
include("config.php");

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM calonsiswa WHERE id=$id";
    $query = mysqli_query($db, $sql);

    if ($query) {
        header('Location: daftar-siswa.php');
    } else {
        die("Gagal menghapus...");
    }
} else {
    die("Akses dilarang...");
}
?>
