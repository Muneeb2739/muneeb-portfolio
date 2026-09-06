/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#navLinks");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

}


/* ================= CLOSE MOBILE MENU ================= */

document
  .querySelectorAll("#navLinks a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      nav?.classList.remove("open");

      menuBtn?.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


/* ================= SCROLL REVEAL ================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });


/* ================= PROJECT LINKS ================= */

/*
  Make sure GitHub links always open in a new tab.
*/

document
  .querySelectorAll(".project-body a")
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      event.stopPropagation();

      const url = link.getAttribute("href");

      if (url) {

        window.open(
          url,
          "_blank",
          "noopener,noreferrer"
        );

      }

    });

  });