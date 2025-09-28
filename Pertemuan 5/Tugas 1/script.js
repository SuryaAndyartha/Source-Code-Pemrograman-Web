// Daftar Nama Mahasiswa
const namaMahasiswaList = [
  "Ahmad Fauzi", "Budi Santoso", "Citra Lestari", "Dewi Anggraini", "Eko Prabowo",
  "Fajar Nugroho", "Gita Ramadhani", "Hendra Putra", "Intan Sari", "Joko Susilo",
  "Kevin Wicaksono", "Linda Marlina", "Mega Putri", "Nadia Wijaya", "Oki Saputra",
  "Putri Maharani", "Qori Qarina", "Rina Handayani", "Siti Nurjanah", "Teguh Prasetyo",
  "Tami Usamah", "Cici Hassanah", "Malik Prakasa", "Wahyu Utama", "Leo Waskita",
  "Dewi Laksita", "Mariadi Wibisono", "Galang Ramadan", "Jindra Pradana", "Hardana Prabowo"
];

const inputNama = document.getElementById("nama");
const suggestionsBox = document.getElementById("suggestions");

inputNama.addEventListener("input", function(){
  const query = this.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";

  if(query === ""){
    suggestionsBox.style.display = "none";
    return;
  }

  const matched = namaMahasiswaList.filter(function(nama){
    return nama.toLowerCase().startsWith(query);
  });

  if(matched.length === 0){
    suggestionsBox.style.display = "none";
    return;
  }

  matched.forEach(function(nama){
    const div = document.createElement("div");
    div.textContent = nama;
    div.classList.add("suggestion-item");
    div.addEventListener("click", function(){
      inputNama.value = nama;
      suggestionsBox.innerHTML = "";
      suggestionsBox.style.display = "none";
    });
    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = "block";
});

document.addEventListener("click", function(event){
  if(!inputNama.contains(event.target) && !suggestionsBox.contains(event.target)){
    suggestionsBox.style.display = "none";
  }
});

// Data Jurusan dan Prodi
const prodiData = {
  elektro: ["Teknik Elektro", "Teknik Telekomunikasi"],
  informatika: ["Teknik Informatika", "Rekayasa Perangkat Lunak", "Rekayasa Kecerdasan Artifisial"],
  sistem_informasi: ["Sistem Informasi", "Inovasi Digital"],
  biomedik: ["Teknik Biomedik"],
  komputer: ["Teknik Komputer"],
  teknologi_informasi: ["Teknologi Informasi"]
};

const jurusanSelect = document.getElementById("jurusan");
const prodiSelect = document.getElementById("prodi");

jurusanSelect.addEventListener("change", function (){
  const jurusan = this.value;
  prodiSelect.innerHTML = '<option value="">-- Pilih Prodi --</option>';

  if(jurusan && prodiData[jurusan]){
    prodiData[jurusan].forEach(function (p){
      const option = document.createElement("option");
      option.value = p.toLowerCase().replace(/\s+/g, "-");
      option.textContent = p;
      prodiSelect.appendChild(option);
    });
  }
});

// Notifikasi 
function showNotification(message, type = "success") {
  const notif = document.getElementById("notification");
  notif.textContent = message;

  notif.className = "notification"; // reset class
  if (type === "error") {
    notif.classList.add("error");
  }

  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 3000);
}

// Submit Form
document.getElementById("registrasiForm").addEventListener("submit", function(event){
  event.preventDefault();

  const nama = inputNama.value.trim();
  const email = document.getElementById("email").value.trim();
  const jurusan = jurusanSelect.value.trim();
  const prodi = prodiSelect.value.trim();

  if(!nama){
    showNotification("Nama tidak boleh kosong!", "error");
    return;
  }
  else if(!email){
    showNotification("Email tidak boleh kosong!", "error");
    return;
  }
  else if(!jurusan || !prodi){
    showNotification("Jurusan dan/atau program studi tidak boleh kosong!", "error");
    return;
  }

  console.log("Data Registrasi:");
  console.log("Nama:", nama);
  console.log("Email:", email);
  console.log("Jurusan:", jurusan);
  console.log("Prodi:", prodi);

  showNotification("Registrasi berhasil!\nNama: " + nama + "\nEmail: " + email, "success");

  this.reset();
  prodiSelect.innerHTML = '<option value="">-- Pilih Prodi --</option>'; 
});
