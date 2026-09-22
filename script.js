document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DATA KOMPONEN
    ====================================================== */

    const components = {

        "pln": {
            name: "PLN",
            type: "Sumber Listrik",
            description:
                "PLN merupakan sumber utama listrik yang memasok energi ke sistem distribusi gedung.",
            extra: {
                "Status": "Sumber Utama",
                "Tegangan": "380 / 220 V",
                "Jenis": "Utility"
            }
        },


        "genset": {
            name: "Genset",
            type: "Sumber Cadangan",
            description:
                "Genset digunakan sebagai sumber listrik cadangan ketika sumber utama PLN mengalami gangguan.",
            extra: {
                "Status": "Backup",
                "Fungsi": "Sumber listrik darurat",
                "Jenis": "Generator Set"
            }
        },


        "panel-input": {
            name: "Panel Input ATS",
            type: "Panel Masukan",
            description:
                "Panel input digunakan sebagai titik masuk sumber PLN dan Genset sebelum diteruskan menuju sistem ATS.",
            extra: {
                "Input": "PLN + Genset",
                "Fungsi": "Distribusi sumber",
                "Status": "Aktif"
            }
        },


        "ats": {
            name: "ATS (Automatic Transfer Switch)",
            type: "Automatic Transfer Switch",
            description:
                "ATS berfungsi untuk memindahkan sumber listrik secara otomatis antara PLN dan Genset saat terjadi gangguan pada salah satu sumber.",
            extra: {
                "Mode": "Automatic",
                "Sumber": "PLN + Genset",
                "Fungsi": "Transfer sumber otomatis",
                "Status": "Aktif"
            }
        },


        "mccb": {
            name: "MCCB UTAMA",
            type: "Proteksi Utama",
            description:
                "MCCB utama digunakan sebagai pengaman dan pemutus utama sebelum daya didistribusikan ke seluruh feeder.",
            extra: {
                "Jenis": "MCCB",
                "Fungsi": "Proteksi utama",
                "Status": "Aktif"
            }
        },


        "mcb": {
            name: "MCB KONTROL",
            type: "Proteksi Kontrol",
            description:
                "MCB kontrol digunakan untuk melindungi rangkaian kontrol dan komponen pendukung pada panel.",
            extra: {
                "Jenis": "MCB",
                "Fungsi": "Proteksi kontrol",
                "Status": "Aktif"
            }
        },


        "busbar": {
            name: "Busbar 3 Fasa R-S-T",
            type: "Busbar Distribusi",
            description:
                "Busbar merupakan penghantar utama yang membagi daya listrik dari panel menuju feeder distribusi.",
            extra: {
                "Sistem": "3 Fasa",
                "Fasa": "R - S - T",
                "Fungsi": "Pembagian daya"
            }
        },


        "feeder1": {
            name: "FEEDER 1",
            type: "Outgoing Feeder",
            description:
                "Feeder 1 merupakan jalur keluar dari panel distribusi menuju beban atau panel lanjutan.",
            extra: {
                "Status": "Aktif",
                "Sumber": "Panel Distribusi",
                "Tujuan": "Beban 1"
            }
        },


        "feeder2": {
            name: "FEEDER 2",
            type: "Outgoing Feeder",
            description:
                "Feeder 2 merupakan jalur keluar dari panel distribusi menuju beban atau panel lanjutan.",
            extra: {
                "Status": "Aktif",
                "Sumber": "Panel Distribusi",
                "Tujuan": "Beban 2"
            }
        },


        "feeder3": {
            name: "FEEDER 3",
            type: "Outgoing Feeder",
            description:
                "Feeder 3 merupakan jalur keluar dari panel distribusi menuju beban atau panel lanjutan.",
            extra: {
                "Status": "Aktif",
                "Sumber": "Panel Distribusi",
                "Tujuan": "Beban 3"
            }
        },


        "feeder4": {
            name: "FEEDER 4",
            type: "Outgoing Feeder",
            description:
                "Feeder 4 merupakan jalur keluar dari panel distribusi menuju beban atau panel lanjutan.",
            extra: {
                "Status": "Aktif",
                "Sumber": "Panel Distribusi",
                "Tujuan": "Beban 4"
            }
        },


        "feeder5": {
            name: "FEEDER 5",
            type: "Outgoing Feeder",
            description:
                "Feeder 5 merupakan jalur keluar dari panel distribusi menuju beban atau panel lanjutan.",
            extra: {
                "Status": "Aktif",
                "Sumber": "Panel Distribusi",
                "Tujuan": "Beban 5"
            }
        },


        "outgoing1": {
            name: "BEBAN 1",
            type: "Outgoing Feeder",
            description:
                "Beban 1 merupakan titik tujuan dari Feeder 1.",
            extra: {
                "Feeder": "Feeder 1",
                "Status": "Terhubung"
            }
        },


        "outgoing2": {
            name: "BEBAN 2",
            type: "Outgoing Feeder",
            description:
                "Beban 2 merupakan titik tujuan dari Feeder 2.",
            extra: {
                "Feeder": "Feeder 2",
                "Status": "Terhubung"
            }
        },


        "outgoing3": {
            name: "BEBAN 3",
            type: "Outgoing Feeder",
            description:
                "Beban 3 merupakan titik tujuan dari Feeder 3.",
            extra: {
                "Feeder": "Feeder 3",
                "Status": "Terhubung"
            }
        },


        "outgoing4": {
            name: "BEBAN 4",
            type: "Outgoing Feeder",
            description:
                "Beban 4 merupakan titik tujuan dari Feeder 4.",
            extra: {
                "Feeder": "Feeder 4",
                "Status": "Terhubung"
            }
        },


        "outgoing5": {
            name: "BEBAN 5",
            type: "Outgoing Feeder",
            description:
                "Beban 5 merupakan titik tujuan dari Feeder 5.",
            extra: {
                "Feeder": "Feeder 5",
                "Status": "Terhubung"
            }
        }

    };


    /* =====================================================
       ELEMENT HTML
    ====================================================== */

    const componentName =
        document.getElementById("componentName");

    const componentType =
        document.getElementById("componentType");

    const componentDescription =
        document.getElementById("componentDescription");

    const extraInfo =
        document.getElementById("extraInfo");


    /* =====================================================
       MENAMPILKAN DETAIL
    ====================================================== */

    function showComponent(id) {

        const data = components[id];

        if (!data) {
            return;
        }


        /* Nama */

        componentName.textContent =
            data.name;


        /* Jenis */

        componentType.textContent =
            data.type;


        /* Deskripsi */

        componentDescription.textContent =
            data.description;


        /* Informasi tambahan */

        extraInfo.innerHTML = "";


        if (data.extra) {

            Object.entries(data.extra).forEach(
                ([label, value]) => {

                    const row =
                        document.createElement("div");

                    row.className =
                        "info-row";


                    row.innerHTML = `
                        <span class="info-label">
                            ${label}
                        </span>

                        <span class="info-value">
                            ${value}
                        </span>
                    `;


                    extraInfo.appendChild(row);

                }
            );

        }


        /* =================================================
           HILANGKAN ACTIVE DARI SEMUA KOMPONEN
        ================================================== */

        document
            .querySelectorAll(".node")
            .forEach(node => {

                node.classList.remove("active");

            });


        /* =================================================
           AKTIFKAN KOMPONEN YANG DIPILIH
        ================================================== */

        document
            .querySelectorAll(
                `.node[data-id="${id}"]`
            )
            .forEach(node => {

                node.classList.add("active");

            });

    }


    /* =====================================================
       EVENT KLIK
    ====================================================== */

    document
        .querySelectorAll(".node")
        .forEach(node => {

            node.addEventListener(
                "click",
                function () {

                    const id =
                        this.getAttribute("data-id");

                    showComponent(id);

                }
            );

        });


    /* =====================================================
       KEYBOARD ACCESS
    ====================================================== */

    document
        .querySelectorAll(".node")
        .forEach(node => {

            node.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        const id =
                            this.getAttribute(
                                "data-id"
                            );

                        showComponent(id);

                    }

                }
            );

        });


    /* =====================================================
       DEFAULT
       ATS DIPILIH SAAT WEBSITE DIBUKA
    ====================================================== */

    showComponent("ats");

});
