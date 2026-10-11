/* ==========================================================
   הגדרות האתר — כאן מעדכנים קישורי הורדה, תרומה ויצירת קשר.
   קישור ריק ("") יציג כפתור "יעלה בקרוב" במקום כפתור הורדה.
   ========================================================== */

window.SITE_CONFIG = {
  email: "DT0548438958@GMAIL.COM",

  // פרסומת לקורס — מופיעה בפס העליון ובדף הבית
  course: {
    url: "https://hamachadsh-betuvo.netlify.app/",
    title: "המחדש בטובו: קורס טלפוני ללימוד עיון בגמרא",
    phone: "0772269084",
    phoneDisplay: "077-22-690-84"
  },

  // קישור לעמוד תרומה (נדרים פלוס / PayPal וכו'). אם ריק — הכפתור יציג את פרטי ההעברה הבנקאית שלמטה.
  donateUrl: "https://ko-fi.com/noamking",

  // פרטי העברה בנקאית לתרומות — ממלאים בין המירכאות. אם מספר החשבון ריק, החלון יפנה למייל.
  bank: {
    holder: "",   // שם בעל החשבון
    bank: "",     // שם הבנק ומספרו, למשל: בנק הפועלים (12)
    branch: "",   // מספר סניף
    account: ""   // מספר חשבון
  },

  downloads: {
    /* ---------- ספר ---------- */
    "sefer-installer": {
      title: "תוכנת ספר — קובץ התקנה",
      file: "Sefer-Setup-13.0.0.exe",
      version: "13.0.0",
      size: "526 MB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/sefer/Sefer-Setup-13.0.0.exe?download=true"
    },
    // אפשרות 1: תיקיית "מאגר ספרים" המלאה בקובץ אחד
    "sefer-db": {
      title: "מאגר ספרים — הכל בקובץ אחד",
      file: "Sefer-Library-Full.zip",
      size: "15.3 GB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/sefer/Sefer-Library-Full.zip?download=true"
    },
    // אפשרות 2: בשני חלקים — ספרי טקסט (כולל קישורים, אינדקס ומודל AI) + ספרי PDF
    "sefer-db-text": {
      title: "מאגר ספרים — ספרי טקסט",
      file: "Sefer-Library-Text.zip",
      size: "9.2 GB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/sefer/Sefer-Library-Text.zip?download=true"
    },
    "sefer-db-pdf": {
      title: "מאגר ספרים — ספרי PDF",
      file: "Sefer-Library-PDF.zip",
      size: "6.2 GB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/sefer/Sefer-Library-PDF.zip?download=true"
    },
    "otzar-scanner": {
      title: "סורק אוצר — קובץ התקנה",
      file: "Otzar-Scanner-Setup-1.0.0.exe",
      version: "1.0.0",
      size: "93 MB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/sefer/Otzar-Scanner-Setup-1.0.0.exe?download=true"
    },
    "sefer-guide": {
      title: "הוראות הפעלה לתוכנת ספר",
      file: "sefer-guide.pdf",
      size: "4.6 MB",
      url: "assets/docs/sefer-guide.pdf"
    },

    /* ---------- המחדש בטובו ---------- */
    "mechadesh-exe": {
      title: "המחדש בטובו — קובץ ההתקנה",
      file: "HaMechadesh-BeTuvo-Setup-2.6.0.exe",
      version: "2.6.0",
      size: "0.1 MB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/hamechadesh/HaMechadesh-BeTuvo-Setup-2.6.0.exe?download=true"
    },
    "mechadesh-bin": {
      title: "המחדש בטובו — חבילת הנתונים",
      file: "HaMechadesh-BeTuvo-Setup-2.6.0.nsisbin",
      version: "2.6.0",
      size: "5.1 GB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/hamechadesh/HaMechadesh-BeTuvo-Setup-2.6.0.nsisbin?download=true"
    },

    /* ---------- סוכן החידושים ---------- */
    "sochen-exe": {
      title: "סוכן החידושים — קובץ ההתקנה",
      file: "Setup-SochenChidushim.exe",
      version: "1.0",
      size: "4 MB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/sochen/Setup-SochenChidushim.exe?download=true"
    },
    "sochen-bin": {
      title: "סוכן החידושים — חבילת הנתונים",
      file: "Setup-SochenChidushim-1.bin",
      version: "1.0",
      size: "22.6 GB",
      url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/sochen/Setup-SochenChidushim-1.bin?download=true"
    },

    /* ---------- אזכיר ---------- */
    "azkir-installer": { title: "אזכיר — קובץ התקנה", file: "Azkir-Setup-2.1.0.exe", version: "2.1.0", size: "126 MB", url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/azkir/Azkir-Setup-2.1.0.exe?download=true" },
    "azkir-decks": { title: "אזכיר — מאגר חפיסות", file: "Azkir-Decks.zip", size: "11.7 GB", url: "https://huggingface.co/datasets/NOAM212819/torat-melech/resolve/main/azkir/Azkir-Decks.zip?download=true" }
  }
};
