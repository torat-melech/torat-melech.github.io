/* ==========================================================
   הגדרות האתר — כאן מעדכנים קישורי הורדה, תרומה ויצירת קשר.
   קישור ריק ("") יציג כפתור "יעלה בקרוב" במקום כפתור הורדה.
   ========================================================== */

window.SITE_CONFIG = {
  email: "DT0548438958@GMAIL.COM",

  // קישור לעמוד תרומה (נדרים פלוס / PayPal וכו'). אם ריק — הכפתור יפתח חלון עם פרטי יצירת קשר.
  donateUrl: "",

  downloads: {
    /* ---------- ספר ---------- */
    "sefer-installer": {
      title: "תוכנת ספר — קובץ התקנה",
      file: "Sefer-Setup-13.0.0.exe",
      version: "13.0.0",
      size: "526 MB",
      url: ""
    },
    // אפשרות 1: תיקיית "מאגר ספרים" המלאה בקובץ אחד
    "sefer-db": {
      title: "מאגר ספרים — הכל בקובץ אחד",
      file: "מאגר ספרים.zip",
      size: "כ-21 GB",
      url: ""
    },
    // אפשרות 2: בשני חלקים — ספרי טקסט (כולל קישורים, אינדקס ומודל AI) + ספרי PDF
    "sefer-db-text": {
      title: "מאגר ספרים — ספרי טקסט",
      file: "מאגר ספרים - טקסט.zip",
      size: "כ-14 GB",
      url: ""
    },
    "sefer-db-pdf": {
      title: "מאגר ספרים — ספרי PDF",
      file: "מאגר ספרים - PDF.zip",
      size: "כ-7.3 GB",
      url: ""
    },
    "otzar-scanner": {
      title: "סורק אוצר — קובץ התקנה",
      file: "Otzar-Scanner-Setup-1.0.0.exe",
      version: "1.0.0",
      size: "93 MB",
      url: ""
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
      file: "המחדש בטובו Setup 2.6.0.exe",
      version: "2.6.0",
      size: "0.1 MB",
      url: ""
    },
    "mechadesh-bin": {
      title: "המחדש בטובו — חבילת הנתונים",
      file: "המחדש בטובו Setup 2.6.0.nsisbin",
      version: "2.6.0",
      size: "4.8 GB",
      url: ""
    }
  }
};
