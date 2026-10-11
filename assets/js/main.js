(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || { downloads: {} };
  var body = document.body;
  var page = body.dataset.page || "home";

  var ICONS = {
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10h18L12 4z"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
  };

  /* ---------- כותרת ופוטר משותפים ---------- */
  var NAV = [
    { id: "home", href: "index.html", label: "בית" },
    { id: "sefer", href: "sefer.html", label: "ספר" },
    { id: "mechadesh", href: "hamechadesh.html", label: "המחדש בטובו" },
    { id: "azkir", href: "azkir.html", label: "אזכיר" },
    { id: "sochen", href: "sochen.html", label: "סוכן החידושים" },
    { id: "contact", href: "index.html#contact", label: "צור קשר" }
  ];

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header" + (body.dataset.header === "light" ? " is-light" : "");
    var course = CFG.course;
    header.innerHTML =
      (course
        ? '<a class="promo-ribbon" href="' + course.url + '" target="_blank" rel="noopener">' +
            '<span class="container promo-ribbon-inner">' +
              '<img src="assets/img/course-thumb.webp" alt="" width="30" height="30">' +
              '<span class="promo-tag">חדש</span>' +
              '<span class="promo-text"><strong class="promo-long">' + course.title + '</strong><strong class="promo-short">קורס טלפוני: עיון בגמרא</strong><span class="promo-extra"> · בשיטת תבניות החשיבה, מכל טלפון ובכל שעה</span></span>' +
              '<span class="promo-cta">לפרטים ←</span>' +
            "</span>" +
          "</a>"
        : "") +
      '<div class="container bar">' +
        '<a class="brand" href="index.html" aria-label="דף הבית — תוכנות מבית מכון תורת מלך">' +
          '<img src="assets/logos/torat-melech.png" alt="" width="46" height="46">' +
          '<span class="brand-text"><strong>מכון תורת מלך</strong><span>תוכנות תורניות</span></span>' +
        "</a>" +
        '<nav class="nav" id="main-nav" aria-label="ניווט ראשי">' +
          NAV.map(function (n) {
            return '<a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
          }).join("") +
        "</nav>" +
        '<div class="header-actions">' +
          '<button type="button" class="btn btn-donate" data-donate>' + ICONS.heart + "<span>תרומה</span></button>" +
          '<button type="button" class="menu-toggle" aria-label="פתיחת תפריט" aria-expanded="false" aria-controls="main-nav">' + ICONS.menu + "</button>" +
        "</div>" +
      "</div>";

    var toggle = header.querySelector(".menu-toggle");
    var nav = header.querySelector(".nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      if (open) header.classList.add("is-solid");
      else onScroll();
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
    });

    var onScroll = function () {
      header.classList.toggle("is-solid", window.scrollY > 30 || nav.classList.contains("is-open"));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    var year = new Date().getFullYear();
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          "<div>" +
            '<div class="footer-brand"><img src="assets/logos/torat-melech.png" alt="" width="56" height="56">' +
            "<div><strong>מכון תורת מלך</strong><span>המכון להפצת תורה</span></div></div>" +
            "<p>תוכנות תורניות חכמות לעיון, לחזרה ולחידוש, ללא תשלום, לזיכוי הרבים.</p>" +
          "</div>" +
          "<div><h4>התוכנות</h4><ul>" +
            '<li><a href="sefer.html">ספר: מאגר ספרים</a></li>' +
            '<li><a href="hamechadesh.html">המחדש בטובו</a></li>' +
            '<li><a href="azkir.html">אזכיר</a></li>' +
            '<li><a href="sochen.html">סוכן החידושים</a></li>' +
          "</ul></div>" +
          "<div><h4>יצירת קשר</h4><ul>" +
            '<li><a href="mailto:' + CFG.email + '" class="ltr" style="direction:ltr;display:inline-block">' + CFG.email + "</a></li>" +
            '<li><a href="index.html#faq">שאלות נפוצות</a></li>' +
            '<li><a href="#" data-donate>תרומה למכון</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom"><span>© ' + year + " מכון תורת מלך. כל הזכויות שמורות.</span>" +
        "<span>נבנה לזיכוי הרבים</span></div>" +
      "</div>";
  }

  /* ---------- כפתורי הורדה ---------- */
  document.querySelectorAll("[data-download]").forEach(function (el) {
    var item = CFG.downloads[el.dataset.download];
    if (!item) return;

    var meta = document.querySelector('[data-download-meta="' + el.dataset.download + '"]');
    if (meta) {
      meta.innerHTML =
        (item.version ? "גרסה <b><bdi>" + item.version + "</bdi></b> · " : "") +
        'גודל <b><bdi dir="ltr">' + item.size.replace(/^כ-/, "") + "</bdi></b>" + (/^כ-/.test(item.size) ? " בערך" : "");
    }

    if (item.url) {
      el.setAttribute("href", item.url);
      if (!/^https?:/.test(item.url)) el.setAttribute("download", item.file);
      if (!el.dataset.keepLabel) el.innerHTML = ICONS.download + "<span>" + (el.dataset.label || "הורדה") + "</span>";
    } else {
      el.removeAttribute("href");
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.innerHTML = ICONS.clock + "<span>יעלה בקרוב</span>";
    }
  });

  /* ---------- חלון תרומה ---------- */
  function hasBank() { return !!(CFG.bank && CFG.bank.account); }
  function bankHtml() {
    if (!hasBank()) {
      return '<p style="margin-bottom:6px">לתרומה ולפרטים ניתן לפנות אלינו במייל:</p>' +
        '<a class="btn btn-gold btn-lg" href="mailto:' + CFG.email + '?subject=' + encodeURIComponent("תרומה למכון תורת מלך") + '">' + ICONS.mail + '<span style="direction:ltr">' + CFG.email + "</span></a>";
    }
    var b = CFG.bank;
    var row = function (label, value, copy) {
      if (!value) return "";
      return '<div class="bank-row"><span class="bank-label">' + label + '</span><span class="bank-value">' + value + "</span>" +
        (copy ? '<button type="button" class="bank-copy" data-copy="' + value + '" aria-label="העתקת ' + label + '">העתק</button>' : "<span></span>") + "</div>";
    };
    return '<div class="bank-card"><div class="bank-title">' + ICONS.bank + "<span>העברה בנקאית</span></div>" +
      row("שם החשבון", b.holder, false) +
      row("בנק", b.bank, false) +
      row("סניף", b.branch, true) +
      row("מספר חשבון", b.account, true) +
      "</div>";
  }

  var modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "donate-title");
  modal.innerHTML =
    '<div class="modal-card">' +
      '<button type="button" class="close" aria-label="סגירה">×</button>' +
      '<img src="assets/logos/torat-melech.png" alt="">' +
      '<h2 id="donate-title">שותפים בהפצת התורה</h2>' +
      "<p>כל התוכנות ניתנות ללא תשלום. תרומתכם מאפשרת למכון להמשיך לפתח, לשפר ולהוסיף תוכנות חדשות לזיכוי הרבים.</p>" +
      (CFG.donateUrl
        ? '<a class="btn btn-gold btn-lg" href="' + CFG.donateUrl + '" target="_blank" rel="noopener">' + ICONS.heart + "<span>לתרומה מאובטחת</span></a>" +
          '<p class="bank-note">התשלום מתבצע דרך PayPal באתר Ko-fi. אפשר לשלם בכרטיס אשראי, בלי להירשם.</p>"
        : bankHtml()) +
      (CFG.donateUrl || !hasBank() ? "" :
        '<p class="bank-note">לאחר ההעברה נשמח אם תשלחו לנו מייל ל-<a href="mailto:' + CFG.email + '?subject=' + encodeURIComponent("תרומה בהעברה בנקאית") + '" style="direction:ltr;display:inline-block">' + CFG.email + "</a>, כדי שנוכל להודות לכם.</p>") +
    "</div>";
  body.appendChild(modal);

  var lastFocus = null;
  function openModal(m) { lastFocus = document.activeElement; m.classList.add("is-open"); var c = m.querySelector(".close"); if (c) c.focus(); }
  function closeModal(m) { m.classList.remove("is-open"); if (lastFocus) lastFocus.focus(); }

  modal.addEventListener("click", function (e) {
    var c = e.target.closest(".bank-copy");
    if (c) {
      var done = function () { c.textContent = "הועתק ✓"; setTimeout(function () { c.textContent = "העתק"; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(c.dataset.copy).then(done, function () {});
      return;
    }
    if (e.target === modal || e.target.closest(".close")) closeModal(modal);
  });
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-donate]");
    if (t) { e.preventDefault(); openModal(modal); }
  });

  /* ---------- העתקת מייל ---------- */
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  body.appendChild(toast);
  function showToast(msg) {
    toast.textContent = msg; toast.classList.add("is-visible");
    clearTimeout(showToast.t); showToast.t = setTimeout(function () { toast.classList.remove("is-visible"); }, 2200);
  }
  document.querySelectorAll("[data-copy-email]").forEach(function (b) {
    b.addEventListener("click", function () {
      var done = function () { showToast("כתובת המייל הועתקה"); };
      if (navigator.clipboard) navigator.clipboard.writeText(CFG.email).then(done, function () {});
      else done();
    });
  });
  document.querySelectorAll("[data-email]").forEach(function (el) { el.textContent = CFG.email; });
  document.querySelectorAll("[data-mailto]").forEach(function (el) {
    el.href = "mailto:" + CFG.email + (el.dataset.mailto ? "?subject=" + encodeURIComponent(el.dataset.mailto) : "");
  });

  /* ---------- גלריה ---------- */
  var gallery = document.querySelector("[data-gallery]");
  if (gallery) {
    var mainImg = gallery.querySelector(".gallery-main img");
    var caption = gallery.querySelector(".gallery-caption");
    var chromeTitle = gallery.querySelector(".chrome span");
    var thumbs = gallery.querySelectorAll(".gallery-thumbs button");
    var current = 0;
    var select = function (i) {
      current = (i + thumbs.length) % thumbs.length;
      var b = thumbs[current];
      mainImg.style.opacity = ".3";
      var img = new Image();
      img.onload = function () { mainImg.src = img.src; mainImg.alt = b.dataset.caption; mainImg.style.opacity = "1"; };
      img.src = b.dataset.full;
      caption.textContent = b.dataset.caption;
      if (chromeTitle) chromeTitle.textContent = (gallery.dataset.gallery || "") + " · " + b.dataset.caption;
      thumbs.forEach(function (t, j) { t.setAttribute("aria-current", j === current ? "true" : "false"); });
    };
    thumbs.forEach(function (b, i) { b.addEventListener("click", function () { select(i); }); });

    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<button type="button" class="close" aria-label="סגירה">×</button><img alt="">';
    body.appendChild(lb);
    gallery.querySelector("button.view").addEventListener("click", function () {
      lb.querySelector("img").src = mainImg.src; lb.querySelector("img").alt = mainImg.alt; openModal(lb);
    });
    lb.addEventListener("click", function () { closeModal(lb); });
    document.addEventListener("keydown", function (e) {
      if (lb.classList.contains("is-open")) {
        if (e.key === "ArrowLeft") { select(current + 1); lb.querySelector("img").src = thumbs[current].dataset.full; }
        if (e.key === "ArrowRight") { select(current - 1); lb.querySelector("img").src = thumbs[current].dataset.full; }
      }
    });
    select(0);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll(".modal.is-open, .lightbox.is-open").forEach(closeModal);
  });

  /* ---------- אנימציות גלילה ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("is-visible"); });
  }
})();
