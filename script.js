
const posts = [
  {
    id: 1,
    title: "Di Antara",
    category: "Puisi",
    date: "19 Oktober 2026",
    excerpt: "Tentang jarak, kehadiran, dan sesuatu yang tetap terasa dekat.",
    content: `Kamu terlalu jauh,

namun terasa selalu ada.

Di antara jarak
dan kata yang tak selesai,
aku menemukan
jejak kehadiranmu.`
  },
  {
    id: 2,
    title: "Kebisingan Dunia Teknokratis",
    category: "Esai",
    date: "19 Oktober 2026",
    excerpt: "Mencari ruang bagi manusia di tengah derasnya teknologi.",
    content: `Teknologi mengubah cara manusia
bekerja, berkomunikasi, dan memahami dunia.

Namun, di tengah kemudahan itu,
muncul pertanyaan penting:
apakah manusia masih memiliki ruang
untuk berhenti, merenung, dan menemukan makna?

Pertanyaan ini mengajak kita memikirkan
hubungan manusia dengan teknologi
secara lebih kritis.`
  },
  {
    id: 3,
    title: "Mengapa Kita Perlu Menulis?",
    category: "Artikel",
    date: "19 Oktober 2026",
    excerpt: "Menulis sebagai latihan berpikir, mengingat, dan memahami.",
    content: `Menulis bukan sekadar merangkai kata.
Menulis membantu kita menyusun pikiran
yang sebelumnya terasa tidak teratur.

Dengan menulis, sebuah pertanyaan
dapat diperiksa lebih dalam,
sebuah pengalaman dapat dipahami,
dan sebuah gagasan dapat dibagikan
kepada orang lain.`
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
