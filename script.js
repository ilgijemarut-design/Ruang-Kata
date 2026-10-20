
const posts = [
  {
   
    id: 1,
    title: "Keresahan Suci",
    category: "Puisi",
    date: "10 Juni 2026",
    excerpt: "Tentang zirah iman, kemalasan rohani, dan ksatria yang tak siap berperang.",
    content: `Kau telah mengangkat pecahan surga
Dalam sebuah bangunan sederhana
Dengan bala malaikat yang sukanya tidur saja
Mereka semua berzirah
Tapi tidak siap untuk perang
Itu hanya pajangan.

Mereka berat untuk melantunkan pujian
Tapi mereka sering meminta. "Berilah kami kekuatan, berilah kami kesejahteraan, berilah kami kenikmatan".
Mereka sungguh tak siap melawan durjana, hanya berakhir jadi bulan-bulanan kedagingan
Dan orang-orang masih menganggap mereka ksatria iman?

Manggarai 10-06-2026`
  },
  {
    id: 2,
    title: "Ibu",
    category: "Puisi",
    date: "30 Agustus 2026",
    excerpt: "Ibu sebagai suaka, tempat pulang, dan gambaran ketulusan yang tak berbatas.",
    content: `Sebuah suaka untuk mereka yang kehilangan harapan
Tempat pulang setelah dibabat habis tuntutan dunia
Tempat di mana manusia mempelajari sebuah ketulusan
Ia adalah gambaran tentang mencintai sehabis-habisnya.

Penfui 30-08-2026`
  },
  {
    id: 3,
    title: "Tepi Laut",
    category: "Puisi",
    date: "30 Agustus 2026",
    excerpt: "Ombak, senja, dan angin malam menjadi saksi bagi insan yang diabaikan.",
    content: `Gulunglah kenanganku dengan ombak
Lalu tenggelamkanlah bersama senja yang berubah jadi malam
Biarkanlah angin malam memberiku sebuah pelukan
Dan beritahukanlah pada semua kehidupan di malam hari untuk bersaksi
Bahwa di bawah gemerlap benda-benda angkasa mereka telah melihat insan yang diabaikan.

Penfui 30-08-2026`
  },
  {
    id: 4,
    title: "Candu",
    category: "Puisi",
    date: "30 Agustus 2026",
    excerpt: "Tentang kenangan, ketergantungan, dan obat bernama ikhlas.",
    content: `Ini tentang kamu
Membuatku layaknya seorang pencandu
Menjebakku dengan sebuah jaminan “kamu adalah segala-galanya untukku”
Masuk dalam benakku dan seolah tak pernah keluar lagi
Mencuri pikiranku dan menyimpannya pada sebuah tempat bernama kenangan kita
Tapi itu sudah berlalu.
Kenyataan memberiku sebuah obat bernama ikhlas
Agar sembuh dari candu tentangmu.

Penfui 30-08-2026`
  },
  {
    id: 5,
    title: "Kenangan",
    category: "Puisi",
    date: "30 Agustus 2026",
    excerpt: "Kepingan masa lalu yang direnungkan untuk menemukan arti bertahan.",
    content: `Kepingan peristiwa yang kau kumpulkan dari masa lalu.
Kau susun tiap keping dalam buku kehidupan
Melihat isinya pada waktu senggang
Bertanya-tanya apakah makna dari semua yang berlalu
Apakah yang lalu adalah tanda untuk yang akan datang
Ataukah yang lalu itu hanya seperti uap yang segera hilang
Akhirnya kau merenunginya
Dan menemukan arti mengapa kau masih bertahan.
Penfui 30-08-2026`
  },
  {
    id: 6,
    title: "Si hantu",
    category: "Puisi",
    date: "7 September 2026",
    excerpt: "Sosok yang menyusup ke pikiran dan merusak kemampuan mengenali kebohongan.",
    content: `Sialan!
Keparat satu itu
Mengendap-endap ke dalam duniaku
Menyabotase pikiranku
Merusak kabel logika
Supaya tak bisa mengenali kebohongan yang sedikit di poles lalu dilabeli ketulusan
Kemudian ia bersarang di sana
Sampai waktu yang tak pasti.
Penfui 07-09-2026`
  },
  {
    id: 7,
    title: "Ia",
    category: "Puisi",
    date: "7 September 2026",
    excerpt: "Segala sesuatu dapat kehilangan pesonanya, kecuali sesuatu yang ingin dibawa menuju keabadian.",
    content: `Pada waktunya
Semuanya pasti akan kehilangan
Bulan akan kehilangan pesonanya
Matahari akan kehilangan panasnya
Singa akan kehilangan keagungannya
Lelaki akan kehilangan kekuatan
Wanita akan kehilangan keanggunan
Namun tentang Ia...
Aku akan membawanya hingga keabadian.

Penfui 07-09-2026`
  },
  {
    id: 8,
    title: "Di antara",
    category: "Puisi",
    date: "7 September 2026",
    excerpt: "Tentang jarak, kehadiran, dan dua hati di dunia yang berlawanan.",
    content: `Kamu terlalu jauh
Di saat yang sama
Kamu terasa selalu ada
Sangat dekat...
Hingga aku buta jarak
Terkadang kita berdiri di antara bayangan masing-masing
Namun ada di dunia yang berlawanan
Hingga tak sempat bertatapan
Dan melihat apakah hati yang ingin saling mendekap itu masih ada.

Penfui 07-09-2026`
  },
  {
    id: 9,
    title: "Penyair Pemabuk",
    category: "Puisi",
    date: "30 September 2026",
    excerpt: "Kisah seorang penyair dan seekor ikan yang bermimpi berenang di angkasa.",
    content: `Si penyair sedang mabuk
Karena terlalu banyak minum anggur
Ia kemudian menulis sebuah kisah
Tentang seekor ikan yang punya mimpi berenang di angkasa
Ceritanya belum rampung namun ia sudah terlelap

Esok pagi, ia terbangun mendapati kertas di mejanya
“Ya Tuhan apa yang ku-tulis” ia keheranan
Mendapati kisah yang telah dibuat
“aku sebaiknya tidak boleh mabuk lagi”
Aku telah membuat seekor ikan dimabuk angan.
Penfui 30-09-2026`
  },
  {
    id: 10,
    title: "Kepada yang terpaksa",
    category: "Puisi",
    date: "30 September 2026",
    excerpt: "Tentang jiwa yang terhimpit oleh tuntutan dan perhatian yang terasa menyakitkan.",
    content: `Untukmu yang memenjarakan jiwa.
Bagimu mata orang-orang
Adalah belati,
Mulut mereka
Adalah beban.
Hati mereka
Adalah pedang.
Perlahan mereka membunuh
Dengan harapan
Dengan perhatian
Dengan cinta.
Terkadang,
Senjata paling mematikan bukanlah pisau.

Penfui 30-09-2026`
  },
  {
    id: 11,
    title: "Icarus",
    category: "Puisi",
    date: "30 September 2026",
    excerpt: "Kisah mitologis tentang ambisi, keindahan, dan ego manusia yang ingin melampaui batas.",
    content: `Keindahan yang kau lihat
Dari sepasang sayap Dedalus
Adalah petaka yang indah bukan?
Bagaimana memandang dari puncak
Justru membuatmu dilahap Ikaria.

Bukanya Dedalus pernah bilang,
Jangan terbang terlalu dekat dengan matahari?
Namun pada akhirnya kau lebih mendengar ego.

Sayap Dedalus membuatmu terpana
Dengan estetika kosmos
Membuatmu merasa
“Aku adalah puncak tatanan”
Berpikir kau bisa meraihnya
Benar-benar naif.

Dasar makhluk fana,
Tumbuh dengan ego yang besar
Bahwa ia bisa menyamai dewa.

Penfui 30-09-2026`
  },
  {
    id: 12,
    title: "Awan",
    category: "Prosa",
    date: "Belum dicantumkan",
    excerpt: "Percakapan seorang bocah dengan sosok ajaib tentang keinginan sederhana: sebuah awan.",
    content: `Saat angin semilir angin tengah meniup seorang bocah di bawah naungan sebuah pohon,
Tiba-tiba suara seorang pria dengan lembut singgah di daun kuping bocah itu.
"halo bocah yang berbudi, aku telah melihat dan mengetahui bahwa kau adalah anak yang baik, pagi-pagi benar kau membangunkan matahari, kemudian pergi untuk menyelesaikan pekerjaan, hingga beriringan pulang ke peraduan masing-masing.”
Aku sang ajaib,
Aku bisa mengabulkan keinginanmu,
Katakan apa yang akan kau minta,
jika kau adalah sang ajaib, maka aku meminta sebuah awan,
awan yang menaungi agar aku tak kepanasan saat bekerja.`
  }
];


let activeCategory = "Semua";

const grid = document.getElementById("post-grid");
const search = document.getElementById("search");
const count = document.getElementById("result-count");
const empty = document.getElementById("empty-message");
const reader = document.getElementById("reader");
const articleContent = document.getElementById("article-content");

function renderPosts() {
  const keyword = search.value.toLowerCase().trim();

  const filtered = posts.filter(post => {
    const matchesCategory =
      activeCategory === "Semua" ||
      post.category === activeCategory;

    const matchesSearch =
      (post.title + " " + post.excerpt + " " + post.content)
        .toLowerCase()
        .includes(keyword);

    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map(post => `
    <article class="post-card">
      <span class="post-type">${post.category}</span>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <span class="post-type">${post.date}</span>
      <button class="read-more" data-id="${post.id}">
        Baca selengkapnya →
      </button>
    </article>
  `).join("");

  count.textContent = `${filtered.length} tulisan`;
  empty.hidden = filtered.length !== 0;
}

document.getElementById("categories")
  .addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    document.querySelectorAll(".category").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderPosts();
  });

search.addEventListener("input", renderPosts);

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-id]");
  if (!button) return;

  const post = posts.find(item => item.id === Number(button.dataset.id));
  if (!post) return;

  articleContent.innerHTML = `
    <p class="eyebrow">${post.category} · ${post.date}</p>
    <h1>${post.title}</h1>
    <p>${post.excerpt}</p>
    <div class="article-body"></div>
  `;

  articleContent.querySelector(".article-body").textContent = post.content;
  reader.showModal();
});

document.getElementById("close-reader")
  .addEventListener("click", () => reader.close());

reader.addEventListener("click", event => {
  if (event.target === reader) reader.close();
});

document.getElementById("year").textContent = new Date().getFullYear();

renderPosts();
