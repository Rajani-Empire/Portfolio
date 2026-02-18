// ===============================
// AUTO ACTIVE NAVIGATION
// ===============================
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ===============================
// DARK MODE WITH SAVE
// ===============================
const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark",
    );
  });
}

// ===============================
// TYPING EFFECT (Home Page)
// ===============================
window.addEventListener("load", () => {
  const typing = document.getElementById("typing");
  if (typing) {
    const text = "A Passionate JavaScript Developer";
    let i = 0;
    function type() {
      if (i < text.length) {
        typing.innerHTML += text[i++];
        setTimeout(type, 50);
      }
    }
    type();
  }
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, .section").forEach((el) => {
  observer.observe(el);
});

// ===============================
// SKILL ANIMATION ON SCROLL
// ===============================
function animateSkillBars() {
  document.querySelectorAll(".fill").forEach((bar) => {
    const position = bar.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
}

// Run on load (in case section is already visible)
window.addEventListener("load", animateSkillBars);
// Run on scroll
window.addEventListener("scroll", animateSkillBars);

// ===============================
// PROJECT FILTER (Projects Page)
// ===============================
const projects = [
  {
    name: "Portfolio Website",
    type: "web",
    desc: "Modern responsive portfolio",
  },
  { name: "Student System", type: "app", desc: "CRUD management system" },
  { name: "Calculator App", type: "web", desc: "JavaScript calculator" },
];

function filterProjects(type) {
  const list = document.getElementById("projectList");
  if (!list) return;

  list.innerHTML = "";

  const filtered =
    type === "all" ? projects : projects.filter((p) => p.type === type);

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p>`;
    div.onclick = () => openModal(p);
    list.appendChild(div);
  });
}

// ===============================
// MODAL SYSTEM
// ===============================
function openModal(project) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  body.innerHTML = `<h2>${project.name}</h2><p>${project.desc}</p>`;
  modal.style.display = "block";
}

const closeModal = document.getElementById("closeModal");
if (closeModal) {
  closeModal.onclick = () =>
    (document.getElementById("modal").style.display = "none");
}

// ===============================
// REAL TIME FORM VALIDATION
// ===============================
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorText = document.getElementById("error");

if (emailInput) {
  emailInput.addEventListener("input", () => {
    if (!emailInput.value.includes("@")) {
      errorText.innerText = "Invalid Email";
    } else {
      errorText.innerText = "";
    }
  });
}

if (messageInput) {
  messageInput.addEventListener("input", () => {
    if (messageInput.value.length < 5) {
      errorText.innerText = "Message too short";
    } else {
      errorText.innerText = "";
    }
  });
}

function toggleMode() {
  document.body.classList.toggle("light");
}

// ===============================
// BACK TO TOP BUTTON
// ===============================
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



