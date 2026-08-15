// ==========================================
// CONFIG — Pusat Pengaturan Variabel & Link Dynamic
// ==========================================
const CONFIG = {
  GOOGLE_FORM_PUTRA_URL: "https://docs.google.com/forms/d/e/1FAIpQLSd4rd6zi_TxzmxpP-fhsW8XJ_Zcwo-ltrn19HJjmQVP7dxm5A/viewform?usp=sharing&ouid=115321370992276871506",
  GOOGLE_FORM_PUTRI_URL: "https://docs.google.com/forms/d/e/1FAIpQLSfT5q_JJPLlobAPoHczYPea6VP9InTtb2sWGhLBzWKy6xoOHA/viewform?usp=sharing&ouid=115321370992276871506",
  TAHUN_AJARAN: "2026/2027",
  INSTITUTION_NAME: "Pondok Modern Sabilurrosyad Muhammadiyah Banjarnegara",
  EMAIL_CONTACT: "psbsabilurrosyadmuhbjr@gmail.com",
  WHATSAPP_SEKRETARIAT_URL: "https://wa.me/6281234567890?text=Halo%20Sekretariat%20PSB%20Sabilurrosyad,%20saya%20ingin%20bertanya",
  WHATSAPP_ADMIN_TEKNIS_URL: "https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mengalami%20kendala%20teknis%20pendaftaran%20PSB",
  YOUTUBE_URL: "https://youtube.com/@pmsabilurrosyadbanjarnegara?si=2s2bmODAe0RW5k80",
  INSTAGRAM_URL: "https://www.instagram.com/pm_sabilurrosyad?utm_source=qr",
  TIKTOK_URL: "https://www.tiktok.com/@pm_sabilurrosyad?_r=1&_t=ZS-98u8RqWP51z"
};
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Bind CTA Links
  const ctaPutra = document.querySelector(".cta--putra");
  const ctaPutri = document.querySelector(".cta--putri");
  const cardPutra = document.querySelector(".card--putra");
  const cardPutri = document.querySelector(".card--putri");

  const headerChatBtn = document.querySelector(".header-chat-btn");
  const headerEmailLink = document.querySelector(".header-email-link");
  const footerSupportBtn = document.querySelector(".footer-support-btn");
  const footerWebsiteLink = document.querySelector(".footer-website-link");

  const socialYoutube = document.querySelector(".social-link--youtube");
  const socialInstagram = document.querySelector(".social-link--instagram");
  const socialTiktok = document.querySelector(".social-link--tiktok");

  const tahunAjaranEls = document.querySelectorAll(".tahun-ajaran");

  if (ctaPutra) ctaPutra.href = CONFIG.GOOGLE_FORM_PUTRA_URL;
  if (ctaPutri) ctaPutri.href = CONFIG.GOOGLE_FORM_PUTRI_URL;

  if (headerChatBtn) headerChatBtn.href = CONFIG.WHATSAPP_SEKRETARIAT_URL;
  if (headerEmailLink) {
    headerEmailLink.href = `mailto:${CONFIG.EMAIL_CONTACT}`;
    const emailText = headerEmailLink.querySelector(".email-text");
    if (emailText) emailText.textContent = CONFIG.EMAIL_CONTACT;
  }

  if (footerSupportBtn) footerSupportBtn.href = CONFIG.WHATSAPP_ADMIN_TEKNIS_URL;
  if (footerWebsiteLink) footerWebsiteLink.href = CONFIG.WEBSITE_URL;

  if (socialYoutube) socialYoutube.href = CONFIG.YOUTUBE_URL;
  if (socialInstagram) socialInstagram.href = CONFIG.INSTAGRAM_URL;
  if (socialTiktok) socialTiktok.href = CONFIG.TIKTOK_URL;

  // Allow clicking anywhere on card to activate CTA
  if (cardPutra) {
    cardPutra.addEventListener("click", (e) => {
      if (!e.target.closest("a")) {
        window.open(CONFIG.GOOGLE_FORM_PUTRA_URL, "_blank");
      }
    });
  }

  if (cardPutri) {
    cardPutri.addEventListener("click", (e) => {
      if (!e.target.closest("a")) {
        window.open(CONFIG.GOOGLE_FORM_PUTRI_URL, "_blank");
      }
    });
  }

  // Dynamic text injection
  tahunAjaranEls.forEach((el) => {
    el.textContent = CONFIG.TAHUN_AJARAN;
  });

  // Entrance animations via IntersectionObserver
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    animatedElements.forEach((el) => el.classList.add("is-visible"));
  }
});
