// Data dummy kode pos (ditambah kecamatan)
const dataKodePos = {
  "Jawa Barat": {
    "Bandung": { "40111": "Kecamatan Cicendo" },
    "Bekasi": { "17113": "Kecamatan Bekasi Timur" }
  },
  "Jawa Tengah": {
    "Semarang": { "50135": "Kecamatan Tembalang" },
    "Solo": { "57111": "Kecamatan Laweyan" }
  }
};

const provinsiSelect = document.getElementById("provinsi");
const kotaSelect = document.getElementById("kota");
const kodePosInput = document.getElementById("kodepos");
const hasilDiv = document.getElementById("hasil");

// Isi provinsi
Object.keys(dataKodePos).forEach(prov => {
  const option = document.createElement("option");
  option.value = prov;
  option.textContent = prov;
  provinsiSelect.appendChild(option);
});

// Update kota ketika provinsi dipilih
provinsiSelect.addEventListener("change", function() {
  const provinsi = this.value;
  kotaSelect.innerHTML = '<option value="">-- Pilih Kabupaten/Kota --</option>';

  if (provinsi && dataKodePos[provinsi]) {
    Object.keys(dataKodePos[provinsi]).forEach(kota => {
      const option = document.createElement("option");
      option.value = kota;
      option.textContent = kota;
      kotaSelect.appendChild(option);
    });
  }
});

// Cek kode pos saat submit
document.getElementById("kodePosForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const provinsi = provinsiSelect.value;
  const kota = kotaSelect.value;
  const kode = kodePosInput.value;

  if (provinsi && kota && kode) {
    const kotaData = dataKodePos[provinsi][kota];
    if (kotaData && kotaData[kode]) {
      hasilDiv.innerHTML = `
        ✅ Kode Pos Cocok!<br>
        Provinsi: <b>${provinsi}</b><br>
        Kota/Kabupaten: <b>${kota}</b><br>
        Kecamatan: <b>${kotaData[kode]}</b>
      `;
      hasilDiv.style.color = "green";
    } else {
      hasilDiv.textContent = "❌ Tidak ditemukan.";
      hasilDiv.style.color = "red";
    }
  } else {
    hasilDiv.textContent = "⚠️ Mohon lengkapi semua data.";
    hasilDiv.style.color = "orange";
  }
});
