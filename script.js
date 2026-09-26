/* =========================================================
   DATA KOMPONEN
========================================================= */

const componentData = {

    pln: {
        name: "PLN",
        type: "Sumber Utama (Utility)",

        info: [
            ["⚡", "Jenis", "PLN / Utility"],
            ["⚡", "Fungsi", "Sumber listrik utama"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "Jaringan PLN"]
        ],

        description:
            "PLN merupakan sumber utama listrik yang memasok energi listrik menuju sistem distribusi gedung."
    },


    genset: {
        name: "GENSET",
        type: "Sumber Cadangan (Backup)",

        info: [
            ["⚙", "Jenis", "Generator Set"],
            ["⚡", "Fungsi", "Sumber listrik cadangan"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["●", "Status", "Standby"],
            ["⌂", "Lokasi", "Ruang Genset"]
        ],

        description:
            "Genset berfungsi sebagai sumber listrik cadangan ketika sumber utama PLN mengalami gangguan."
    },


    panel: {
        name: "PANEL INPUT ATS",
        type: "Panel Masukan",

        info: [
            ["▣", "Jenis", "Panel Input"],
            ["⚡", "Fungsi", "Menerima sumber PLN & Genset"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["●", "Status", "Aktif"],
            ["⌂", "Tujuan", "ATS"]
        ],

        description:
            "Panel Input ATS merupakan titik masuk sumber listrik PLN dan Genset sebelum diteruskan menuju Automatic Transfer Switch."
    },


    ats: {
        name: "ATS",
        type: "Automatic Transfer Switch",

        info: [
            ["⚙", "Jenis", "Automatic Transfer Switch"],
            ["⚡", "Fungsi", "Transfer sumber otomatis"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["●", "Status", "Aktif"],
            ["⌂", "Tujuan", "MDB"]
        ],

        description:
            "ATS berfungsi melakukan perpindahan sumber listrik secara otomatis antara PLN dan Genset."
    },


    mccb: {
        name: "MCCB UTAMA",
        type: "Proteksi Utama (MCCB)",

        info: [
            ["▣", "Proteksi", "MCCB"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["→", "Fungsi", "Proteksi utama"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "ATS"]
        ],

        description:
            "MCCB utama berfungsi sebagai pengaman dan pemutus utama sistem distribusi listrik pada MDB."
    },


    mcb: {
        name: "MCB KONTROL",
        type: "Proteksi Kontrol (MCB)",

        info: [
            ["▤", "Proteksi", "MCB"],
            ["⚡", "Tegangan", "220 V"],
            ["→", "Fungsi", "Proteksi kontrol"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "MCB kontrol digunakan untuk memberikan perlindungan pada rangkaian kontrol dan peralatan pendukung panel."
    },


    neutral: {
        name: "N — NEUTRAL",
        type: "Neutral Bar",

        info: [
            ["N", "Jenis", "Neutral Bar"],
            ["⚡", "Fungsi", "Penghantar netral"],
            ["⚡", "Sistem", "3 Fasa + Neutral"],
            ["●", "Status", "Terhubung"],
            ["⌂", "Lokasi", "MDB"]
        ],

        description:
            "Neutral Bar merupakan titik penghimpunan dan distribusi penghantar netral pada panel distribusi utama."
    },


    pe: {
        name: "PE — GROUND",
        type: "Protective Earth",

        info: [
            ["PE", "Jenis", "Protective Earth"],
            ["⚡", "Fungsi", "Proteksi grounding"],
            ["⚡", "Sistem", "Protective Earth"],
            ["●", "Status", "Terhubung"],
            ["⌂", "Lokasi", "MDB"]
        ],

        description:
            "PE digunakan sebagai penghantar proteksi dan jalur grounding untuk keselamatan sistem kelistrikan."
    },


    busbar: {
        name: "BUSBAR 3 FASA",
        type: "Busbar Distribusi R-S-T",

        info: [
            ["R", "Fasa", "R"],
            ["S", "Fasa", "S"],
            ["T", "Fasa", "T"],
            ["⚡", "Fungsi", "Distribusi daya"],
            ["●", "Status", "Aktif"],
            ["⌂", "Lokasi", "MDB"]
        ],

        description:
            "Busbar 3 fasa merupakan penghantar utama yang membagi daya listrik dari proteksi utama menuju feeder."
    },


    feeder1: {
        name: "FEEDER 1",
        type: "Outgoing Feeder",

        info: [
            ["▤", "Proteksi", "MCCB / MCB"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["→", "Tujuan", "Beban 1"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Feeder 1 merupakan jalur distribusi keluar dari MDB yang mengalirkan daya menuju Beban 1."
    },


    feeder2: {
        name: "FEEDER 2",
        type: "Outgoing Feeder",

        info: [
            ["▤", "Proteksi", "MCCB / MCB"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["→", "Tujuan", "Beban 2"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Feeder 2 merupakan jalur distribusi keluar dari MDB yang mengalirkan daya menuju Beban 2."
    },


    feeder3: {
        name: "FEEDER 3",
        type: "Outgoing Feeder",

        info: [
            ["▤", "Proteksi", "MCCB / MCB"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["→", "Tujuan", "Beban 3"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Feeder 3 merupakan jalur distribusi keluar dari MDB yang mengalirkan daya menuju Beban 3."
    },


    feeder4: {
        name: "FEEDER 4",
        type: "Outgoing Feeder",

        info: [
            ["▤", "Proteksi", "MCCB / MCB"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["→", "Tujuan", "Beban 4"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Feeder 4 merupakan jalur distribusi keluar dari MDB yang mengalirkan daya menuju Beban 4."
    },


    feeder5: {
        name: "FEEDER 5",
        type: "Outgoing Feeder",

        info: [
            ["▤", "Proteksi", "MCCB / MCB"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["→", "Tujuan", "Beban 5"],
            ["●", "Status", "Aktif"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Feeder 5 merupakan jalur distribusi keluar dari MDB yang mengalirkan daya menuju Beban 5."
    },


    load1: {
        name: "BEBAN 1",
        type: "Outgoing Feeder",

        info: [
            ["▣", "Jenis", "Beban Listrik"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["←", "Feeder", "Feeder 1"],
            ["●", "Status", "Terhubung"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Beban 1 merupakan titik tujuan akhir dari jalur distribusi Feeder 1."
    },


    load2: {
        name: "BEBAN 2",
        type: "Outgoing Feeder",

        info: [
            ["▣", "Jenis", "Beban Listrik"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["←", "Feeder", "Feeder 2"],
            ["●", "Status", "Terhubung"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Beban 2 merupakan titik tujuan akhir dari jalur distribusi Feeder 2."
    },


    load3: {
        name: "BEBAN 3",
        type: "Outgoing Feeder",

        info: [
            ["▣", "Jenis", "Beban Listrik"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["←", "Feeder", "Feeder 3"],
            ["●", "Status", "Terhubung"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Beban 3 merupakan titik tujuan akhir dari jalur distribusi Feeder 3."
    },


    load4: {
        name: "BEBAN 4",
        type: "Outgoing Feeder",

        info: [
            ["▣", "Jenis", "Beban Listrik"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["←", "Feeder", "Feeder 4"],
            ["●", "Status", "Terhubung"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Beban 4 merupakan titik tujuan akhir dari jalur distribusi Feeder 4."
    },


    load5: {
        name: "BEBAN 5",
        type: "Outgoing Feeder",

        info: [
            ["▣", "Jenis", "Beban Listrik"],
            ["⚡", "Tegangan", "380 / 220 V"],
            ["←", "Feeder", "Feeder 5"],
            ["●", "Status", "Terhubung"],
            ["⌂", "Sumber", "MDB"]
        ],

        description:
            "Beban 5 merupakan titik tujuan akhir dari jalur distribusi Feeder 5."
    }

};


/* =========================================================
   POPUP ELEMENT
========================================================= */

const detailModal =
    document.getElementById("detailModal");

const detailBackdrop =
    document.getElementById("detailBackdrop");

const detailClose =
    document.getElementById("detailClose");

const detailName =
    document.getElementById("detailName");

const detailType =
    document.getElementById("detailType");

const detailInfo =
    document.getElementById("detailInfo");

const detailDescription =
    document.getElementById("detailDescription");


/* =========================================================
   SHOW DETAIL
========================================================= */

function showComponent(id) {

    const data =
        componentData[id];

    if (!data) {
        console.warn(
            "Data komponen tidak ditemukan:",
            id
        );

        return;
    }


    /* Nama */

    detailName.textContent =
        data.name;


    /* Jenis */

    detailType.textContent =
        data.type;


    /* Informasi */

    detailInfo.innerHTML =
        "";


    data.info.forEach(item => {

        const row =
            document.createElement("div");

        row.className =
            "detail-row";


        row.innerHTML = `

            <span class="detail-row-icon">
                ${item[0]}
            </span>

            <span class="detail-row-key">
                ${item[1]}
            </span>

            <span class="detail-row-colon">
                :
            </span>

            <span class="detail-row-value">
                ${item[2]}
            </span>

        `;


        detailInfo.appendChild(row);

    });


    /* Deskripsi */

    detailDescription.textContent =
        data.description;


    /* Hapus selected */

    document
        .querySelectorAll(".component")
        .forEach(component => {

            component.classList.remove(
                "selected"
            );

        });


    /* Selected component */

    const selected =
        document.querySelectorAll(
            `[data-component="${id}"]`
        );


    selected.forEach(component => {

        component.classList.add(
            "selected"
        );

    });


    /* Buka popup */

    detailModal.classList.add(
        "show"
    );

    detailModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   CLOSE DETAIL
========================================================= */

function closeDetail() {

    detailModal.classList.remove(
        "show"
    );

    detailModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document
        .querySelectorAll(".component")
        .forEach(component => {

            component.classList.remove(
                "selected"
            );

        });

}


/* =========================================================
   KLIK KOMPONEN
========================================================= */

document
    .querySelectorAll(".component")
    .forEach(component => {

        component.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const id =
                    this.dataset.component;

                showComponent(id);

            }
        );

    });


/* =========================================================
   CLOSE BUTTON
========================================================= */

detailClose.addEventListener(
    "click",
    closeDetail
);


/* =========================================================
   BACKDROP
========================================================= */

detailBackdrop.addEventListener(
    "click",
    closeDetail
);


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            detailModal.classList.contains("show")
        ) {

            closeDetail();

        }

    }
);
