/* ==========================================================
   הגדרות האתר — כאן מעדכנים קישורי הורדה, תרומה ויצירת קשר.
   קישור ריק ("") יציג כפתור "יעלה בקרוב" במקום כפתור הורדה.
   ========================================================== */

window.SITE_CONFIG = {
  email: "DT0548438958@GMAIL.COM",

  // פרסומת לקורס — מופיעה בפס העליון ובדף הבית
  course: {
    url: "https://hamachadsh-betuvo.netlify.app/",
    title: "המחדש בטובו: קורס טלפוני ללימוד עיון בגמרא"
  },

  // קישור לעמוד תרומה (נדרים פלוס / PayPal וכו'). אם ריק — הכפתור יפתח חלון עם פרטי יצירת קשר.
  donateUrl: "",

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
    }
  }
};
