/**
 * ========================================================
 * SCRIPT.JS - LOGIKA INTERAKTIF PEMETAAN LISTRIK
 * ========================================================
 * Kode ini menggunakan JavaScript dasar (Vanilla JS) tanpa library luar.
 * Dibuat terstruktur dan diberi komentar agar mudah dipelajari oleh pemula.
 */

// Menjalankan kode setelah seluruh dokumen HTML selesai dimuat oleh browser
document.addEventListener("DOMContentLoaded", () => {

  /* --------------------------------------------------------
     1. DATA INFORMASI KOMPONEN KELISTRIKAN
     --------------------------------------------------------
     Objek ini menyimpan daftar informasi dari setiap komponen.
     Key (kunci) pada objek ini harus sama persis dengan atribut
     'data-id' yang ada di tag <g> pada file index.html.
  */
  const dataKomponen = {
    "pln": {
      nama: "PLN (Perusahaan Listrik Negara)",
      jenis: "Sumber Listrik",
      keterangan: "Sumber listrik utama dari jaringan utilitas publik untuk menyuplai kebutuhan daya kantor."
    },
    "genset": {
      nama: "Genset (Generator Set)",
      jenis: "Sumber Listrik",
      keterangan: "Sumber listrik cadangan (backup) yang beroperasi secara otomatis saat sumber utama PLN padam."
    },
    "ats-amf": {
      nama: "Panel ATS / AMF",
      jenis: "Panel Kontrol & Perpindahan Sumber",
      sumber: "PLN + Genset",
      controller: "ComAp InteliLite AMF 25",
      mode: "Automatic / Manual / Off",
      fungsi: "Panel ATS/AMF digunakan untuk memonitor dan mengendalikan sistem perpindahan sumber listrik antara PLN dan genset sesuai konfigurasi sistem.",
      komponenUtama: [
        "ComAp InteliLite AMF 25",
        "MCB kontrol",
        "Relay",
        "Terminal block",
        "Power supply",
        "Lampu indikator",
        "Selector switch",
        "Wiring kontrol"
      ]
    },
    "comap-controller": {
      nama: "ComAp InteliLite AMF 25",
      jenis: "Controller AMF / Genset",
      status: "Aktif",
      fungsi: "Controller utama yang berfungsi untuk monitoring dan kontrol sistem perpindahan sumber (AMF) serta kondisi genset secara otomatis."
    },
    "mcb-kontrol": {
      nama: "MCB Kontrol",
      jenis: "Proteksi Internal Panel",
      status: "Aktif",
      fungsi: "MCB yang digunakan sebagai proteksi rangkaian kontrol internal panel ATS/AMF. Bukan MCB distribusi gedung."
    },
    "ats-indicator-pln": {
      nama: "Indikator MAINS / PLN",
      jenis: "Lampu Indikator",
      status: "Aktif",
      fungsi: "Lampu indikator yang menunjukkan status sumber listrik PLN (MAINS INCOMING). LED hijau menyala saat PLN tersedia."
    },
    "ats-indicator-genset": {
      nama: "Indikator GENSET",
      jenis: "Lampu Indikator",
      status: "Aktif",
      fungsi: "Lampu indikator yang menunjukkan status sumber listrik genset (GENSET INCOMING). LED amber menyala saat genset dalam kondisi running."
    },
    "ats-selector": {
      nama: "Selector Switch A-0-M",
      jenis: "Komponen Kontrol",
      status: "Aktif",
      fungsi: "Selector switch dengan 3 posisi: A (Automatic) untuk perpindahan otomatis, 0 (Off) untuk mematikan sistem, dan M (Manual) untuk kontrol manual oleh operator."
    },
    "ats-relay": {
      nama: "Relay",
      jenis: "Komponen Kontrol",
      status: "Aktif",
      fungsi: "Relay yang berfungsi meneruskan dan mengendalikan sinyal kontrol dalam sistem perpindahan sumber listrik pada panel ATS/AMF."
    },
    "ats-terminal": {
      nama: "Terminal Block",
      jenis: "Komponen Wiring",
      fungsi: "Kumpulan terminal wiring yang digunakan untuk menghubungkan dan mendistribusikan kabel kontrol serta kabel daya di dalam panel ATS/AMF."
    },
    "ats-power-supply": {
      nama: "Power Supply DC",
      jenis: "Komponen Pendukung",
      status: "Aktif",
      fungsi: "Perangkat power supply yang mengkonversi tegangan AC menjadi DC untuk menyuplai rangkaian kontrol internal panel ATS/AMF."
    },
    "rst-pembagian": {
      nama: "RST Pembagian",
      jenis: "Distribusi Daya",
      sistem: "3 Phase",
      fungsi: "Rel distribusi busbar 3 fasa (R-S-T) yang membagi daya dari panel ATS/AMF ke seluruh outgoing feeder."
    },
    "feeder-1": {
      nama: "FEEDER 1",
      jenis: "Outgoing Feeder",
      status: "Aktif",
      sumber: "Panel ATS / AMF",
      tujuan: "Belum ditentukan",
      beban: "Belum ditentukan"
    },
    "feeder-2": {
      nama: "FEEDER 2",
      jenis: "Outgoing Feeder",
      status: "Aktif",
      sumber: "Panel ATS / AMF",
      tujuan: "Belum ditentukan",
      beban: "Belum ditentukan"
    },
    "feeder-3": {
      nama: "FEEDER 3",
      jenis: "Outgoing Feeder",
      status: "Aktif",
      sumber: "Panel ATS / AMF",
      tujuan: "Belum ditentukan",
      beban: "Belum ditentukan"
    },
    "feeder-4": {
      nama: "FEEDER 4",
      jenis: "Outgoing Feeder",
      status: "Aktif",
      sumber: "Panel ATS / AMF",
      tujuan: "Belum ditentukan",
      beban: "Belum ditentukan"
    },
    "feeder-5": {
      nama: "FEEDER 5",
      jenis: "Outgoing Feeder",
      status: "Aktif",
      sumber: "Panel ATS / AMF",
      tujuan: "Belum ditentukan",
      beban: "Belum ditentukan"
    }
  };

  /* --------------------------------------------------------
     2. MENGAMBIL ELEMEN HTML (DOM SELECTION)
     --------------------------------------------------------
     Kita mengambil elemen-elemen dari halaman agar bisa diubah
     secara dinamis menggunakan JavaScript.
  */
  // Mengambil semua kotak komponen di dalam SVG (memiliki class 'node')
  const nodeElements = document.querySelectorAll(".node");

  // Mengambil elemen panel informasi di sidebar
  const emptyState = document.getElementById("empty-state");
  const detailBox = document.getElementById("detail-box");
  const compName = document.getElementById("comp-name");
  const compType = document.getElementById("comp-type");
  const compExtraDetails = document.getElementById("comp-extra-details");
  const compDescContainer = document.getElementById("comp-desc-container");
  const compDescLabel = document.getElementById("comp-desc-label");
  const compDesc = document.getElementById("comp-desc");

  /* --------------------------------------------------------
     3. FUNGSI UNTUK MENAMPILKAN INFORMASI KOMPONEN
     --------------------------------------------------------
     Fungsi ini dipanggil saat salah satu komponen diklik.
  */
  function tampilkanDetail(idKomponen, elemenTerpilih) {
    // Cari data komponen berdasarkan id
    const data = dataKomponen[idKomponen];

    if (!data) {
      console.warn("Data komponen tidak ditemukan untuk ID:", idKomponen);
      return;
    }

    // 1. Perbarui nama dan jenis pada panel informasi di sebelah kanan
    compName.textContent = data.nama;
    compType.textContent = data.jenis;

    // 2. Bersihkan atribut detail tambahan sebelumnya
    if (compExtraDetails) {
      compExtraDetails.innerHTML = "";

      // Render atribut spesifikasi (Sistem, Status, Sumber, Tujuan, Beban, Controller, Mode) jika tersedia
      const specItems = [];
      if (data.sistem) {
        specItems.push({ label: "Sistem", val: `<span class="badge-system">${data.sistem}</span>` });
      }
      if (data.status) {
        specItems.push({ label: "Status", val: `<span class="badge-status-active">${data.status}</span>` });
      }
      if (data.sumber) {
        specItems.push({ label: "Sumber", val: data.sumber });
      }
      if (data.controller) {
        specItems.push({ label: "Controller", val: data.controller });
      }
      if (data.mode) {
        specItems.push({ label: "Mode", val: `<span class="badge-mode">${data.mode}</span>` });
      }
      if (data.tujuan) {
        specItems.push({ label: "Tujuan", val: data.tujuan });
      }
      if (data.beban) {
        specItems.push({ label: "Beban", val: data.beban });
      }

      if (specItems.length > 0) {
        const specGrid = document.createElement("div");
        specGrid.className = "info-spec-grid";
        specItems.forEach(item => {
          const row = document.createElement("div");
          row.className = "info-spec-item";
          row.innerHTML = `
            <span class="info-spec-label">${item.label}</span>
            <span class="info-spec-val">${item.val}</span>
          `;
          specGrid.appendChild(row);
        });
        compExtraDetails.appendChild(specGrid);
      }

      // Render daftar Komponen Utama (untuk Panel ATS/AMF) jika tersedia
      if (data.komponenUtama && Array.isArray(data.komponenUtama)) {
        const listSection = document.createElement("div");
        listSection.className = "info-row";
        listSection.innerHTML = `
          <span class="info-label">Komponen Utama</span>
          <ul class="comp-list">
            ${data.komponenUtama.map(item => `
              <li class="comp-list-item">
                <span class="comp-list-bullet">&#9679;</span>
                <span>${item}</span>
              </li>
            `).join("")}
          </ul>
        `;
        compExtraDetails.appendChild(listSection);
      }
    }

    // 3. Tampilkan Fungsi atau Keterangan Singkat
    if (compDescContainer && compDesc) {
      if (data.fungsi) {
        compDescContainer.classList.remove("hidden");
        if (compDescLabel) compDescLabel.textContent = "Fungsi";
        compDesc.textContent = data.fungsi;
      } else if (data.keterangan) {
        compDescContainer.classList.remove("hidden");
        if (compDescLabel) compDescLabel.textContent = "Keterangan Singkat";
        compDesc.textContent = data.keterangan;
      } else {
        compDescContainer.classList.add("hidden");
      }
    }

    // 4. Sembunyikan pesan awal 'empty state' dan tampilkan detail informasi
    emptyState.classList.add("hidden");
    detailBox.classList.remove("hidden");

    // 5. Atur tanda aktif visual pada diagram SVG
    // Hapus kelas 'active' dari semua komponen terlebih dahulu
    const allNodes = document.querySelectorAll(".node");
    allNodes.forEach(node => {
      node.classList.remove("active");
    });

    // Berikan kelas 'active' pada komponen yang memiliki data-id yang cocok
    const matchingNodes = document.querySelectorAll(`.node[data-id="${idKomponen}"]`);
    if (matchingNodes.length > 0) {
      matchingNodes.forEach(node => node.classList.add("active"));
    } else if (elemenTerpilih) {
      elemenTerpilih.classList.add("active");
    }
  }

  /* --------------------------------------------------------
     4. MENAMBAHKAN EVENT LISTENER (INTERAKSI KLIK)
     --------------------------------------------------------
     Kita melakukan perulangan (loop) ke semua elemen komponen SVG.
     Setiap komponen diberi perintah: 'Jika diklik, jalankan fungsi tampilkanDetail'.
  */
  const clickableNodes = document.querySelectorAll(".node");
  clickableNodes.forEach(node => {
    // Event ketika mouse mengklik elemen komponen
    node.addEventListener("click", () => {
      const idKomponen = node.getAttribute("data-id");
      tampilkanDetail(idKomponen, node);
    });

    // Menambahkan aksesibilitas keyboard (tombol Enter atau Spasi)
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const idKomponen = node.getAttribute("data-id");
        tampilkanDetail(idKomponen, node);
      }
    });
  });

});
