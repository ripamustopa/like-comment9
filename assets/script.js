// data followers
const followers = [
  {
    title: "ripamustopaahmad",
    link: "https://www.instagram.com/ripamustopaahmad?igsh=MW40MHIzYjhqMGhveA==",
  },
  {
    title: "sitinurrr012",
    link: "https://www.instagram.com/sitinurrr012?igsh=c2ZzOWs4d2JsbzMy",
  },
  {
    title: "aimaspupah16",
    link: "https://www.instagram.com/aimaspupah16?igsh=MWx6Z3QxMXFnZGs1OQ==",
  },
  {
    title: "qurotuluyun_fthlizar",
    link: "https://www.instagram.com/qurotuluyun_fthlizar?igsh=MWltNGI3YjdtY2VqNw==",
  },
  {
    title: "syilasusilawati_06",
    link: "https://www.instagram.com/syilasusilawati_06?igsh=bHk0emFvMmh4b2ky",
  },
  {
    title: "vikri_096x",
    link: "https://www.instagram.com/vikri_096x?igsh=MWlibjRzZWVvdmI4eQ==",
  },
  {
    title: "rab.dull1565",
    link: "https://www.instagram.com/ab.dull1565?igsh=MXBmeWE1ZnA2ZjRndQ==",
  },
  {
    title: "ropimuzaqi_03",
    link: "https://www.instagram.com/ropimuzaqi_03?igsh=MW1sdjEwYnh3bzdrZg==",
  },
  {
    title: "mhamd.fhmi16",
    link: "https://www.instagram.com/mhamd.fhmi16?igsh=ajJ4OTA1cG9oamhx",
  },
];
// data sidebar
const listData = [
  {
    fromTo: "1-50",
    link: "https://ripamustopa.github.io/like-comment1/",
  },
  {
    fromTo: "51-100",
    link: "https://ripamustopa.github.io/like-comment2/",
  },
  {
    fromTo: "101-150",
    link: "https://ripamustopa.github.io/like-comment3/",
  },
  {
    fromTo: "151-200",
    link: "https://ripamustopa.github.io/like-comment4/",
  },
  {
    fromTo: "201-250",
    link: "https://ripamustopa.github.io/like-comment5/",
  },
  {
    fromTo: "251-300",
    link: "https://ripamustopa.github.io/like-comment6/",
  },
  {
    fromTo: "301-350",
    link: "https://ripamustopa.github.io/like-comment7/",
  },
  {
    fromTo: "351-400",
    link: "https://ripamustopa.github.io/like-comment8/",
  },
  {
    fromTo: "401-433",
    link: "https://ripamustopa.github.io/like-comment9/",
  },
];

const photos = [
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
  { src: `photos/foto`, alt: "Foto " },
];

if (window.innerWidth >= 500) {
  alert(
    "Harap menggunakan device mobile handphone untuk mengahsilkan tampilan yang baik!"
  );
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("scroll") === "on") {
  window.scrollTo(0, 300);
}

const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".nav-toggle");
const mainContent = document.querySelector(".main-content");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  mainContent.classList.toggle("shift");
});

const closeBtn = document.querySelector(".close-sidebar");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  mainContent.classList.toggle("shift");
});

setInterval(function () {
  document.querySelector(".button").classList.add("gibeg");
  setTimeout(function () {
    document.querySelector(".button").classList.remove("gibeg");
  }, 500);
}, 5000);

// looping sidebar

const list = document.querySelector(".list-page");

listData.forEach((pg) => {
  const NewData = `
         <li>
              <a href="${pg.link}?scroll=on"
                    ><div>Screenshot <span>${pg.fromTo}</span></div>
                    <span
                      ><i
                        class="fa-solid fa-arrow-up-right-from-square"
                    ></i></span
              ></a>
          </li>
        `;
  list.innerHTML += NewData;
});

// looping followers

document.querySelector("#ttl").innerHTML = followers.length;
const tableFollowers = document.querySelector(".table-followers");

followers.forEach((fll) => {
  const NewData = `
          <li data-aos="fade-up" class="card-followers">
                <a href="${fll.link}" class="title-card">
                  <div class="icon-card text-ig"><i class="fa-brands fa-instagram"></i
                ></div>
                  <div>
                    <div class="title-ig">${fll.title}</div>
                    <div class="klik-lihat">klik untuk melihat!</div>
                  </div>
                </a>
                <a href="${fll.link}" class="icon-act"><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
          </li>
        `;
  tableFollowers.innerHTML += NewData;
});

// looping gallery

const gallery = document.getElementById("gallery");
photos.forEach((photo, i) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");
  // galleryItem.setAttribute("data-aos", "fade-up");
  galleryItem.innerHTML = `
                <div class="id">${i + 401}</div>
                <img src="${photo.src} (${i}).jpg" alt="${photo.alt}${i} ">
                <span class="text"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
            `;
  gallery.appendChild(galleryItem);
  galleryItem.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = `${photo.src} (${i}).jpg`;
    modal.style.display = "block";
  });
});

document.querySelector(".close").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

AOS.init({
  duration: 500,
  easing: "ease-out",
  once: true,
});

