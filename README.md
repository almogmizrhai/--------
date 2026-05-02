# Jordan PRO 🏋️ — דף נחיתה

דף נחיתה למתחם כושר Jordan PRO במעלה אדומים.  
בנוי עם HTML, CSS ו-JavaScript טהור — ללא frameworks.

---

## מבנה הפרויקט

```
jordan-pro/
├── index.html        ← דף ראשי
├── main.css          ← כל העיצוב
├── script.js         ← לוגיקה ו-JavaScript
└── assets/
    └── imegs/
        ├── logo.jpg
        ├── hero-pg.png
        ├── icon-group.png
        ├── icon-personal.png
        ├── icon-food.png
        └── images/
            ├── results/
            │   ├── result1.jpg
            │   ├── result2.jpg
            │   ├── result3.jpg
            │   └── result4.jpg
            └── posts/
                ├── post1.jpg
                ├── post2.jpg
                ├── post3.jpg
                ├── post4.jpg
                └── post5.jpg
```

---

## סקשנים בדף

| # | סקשן | סטטוס | תיאור |
|---|------|--------|-------|
| 1 | Hero | ✅ הושלם | תמונת רקע + לוגו + כפתור CTA |
| 2 | About | ✅ הושלם | קצת עלינו + לוגו + כפתורי ניווט |
| 3 | Services | ✅ הושלם | 3 כרטיסיות accordion — קבוצתי / אישי / תזונה |
| 4 | Contact | ✅ הושלם | טופס ליד ראשון + שליחה לוואטסאפ + Google Sheets |
| 5 | Testimonials | ✅ הושלם | שיחות וואטסאפ של לקוחות מרוצים |
| 6 | Results | ✅ הושלם | carousel תמונות לפני/אחרי |
| 7 | Trainers | ✅ הושלם | carousel כרטיסי מאמנים |
| 8 | Contact | ✅ הושלם | טופס ליד שני + שליחה לוואטסאפ + Google Sheets |
| 9 | More Info | ✅ הושלם | carousel קישורי פוסטים מאינסטגרם |
| 10 | Footer | ✅ הושלם | קרדיט + אייקוני טלפון, וואטסאפ, אינסטגרם, פייסבוק |

---

## טכנולוגיות

- **HTML5** — מבנה הדף, סמנטיקה, RTL
- **CSS3** — Grid, Flexbox, CSS Nesting, CSS Variables, Animations, Media Queries
- **JavaScript** — vanilla JS, accordion, carousel, form submission, scroll reveal
- **Google Fonts** — Heebo + Bebas Neue
- **Google Apps Script** — שמירת לידים ב-Google Sheets
- **WhatsApp API** — שליחת לידים אוטומטית

---

## צבעי המותג

```css
--gold:       #c8874a   /* כתום — צבע ראשי */
--gold-light: #e8a568   /* כתום בהיר — hover */
--black:      #0a0a0a   /* שחור רקע */
--dark:       #111111   /* שחור כרטיסיות */
--beige:      #f0ede8   /* בז' — סקשנים בהירים */
--text-muted: #888888   /* טקסט משני */
--white:      #ffffff   /* לבן */
```

---

## פונקציות JavaScript

| פונקציה | תיאור |
|---------|--------|
| `toggleService(card)` | פתיחה/סגירה של כרטיסיות השירותים |
| `submitForm(formId, successId)` | הגשת טופס ליד + שמירה ב-Sheets + שליחה לוואטסאפ |
| `scrollResults(dir)` | גלילה ב-carousel של תוצאות מהשטח |
| `scrollTrainers(dir)` | גלילה ב-carousel של המאמנים |
| `scrollMore(dir)` | גלילה ב-carousel של אולי יעניין אותך |
| `scrollToTop()` | חזרה לראש הדף |
| `toggleAccessibility()` | פתיחת תפריט נגישות |
| `changeFontSize(dir)` | הגדלה/הקטנה של טקסט |
| `toggleContrast()` | ניגודיות גבוהה |
| `toggleGrayscale()` | גווני אפור |
| `resetAll()` | איפוס כל הגדרות הנגישות |
| `IntersectionObserver` | אנימציית fade-in על גלילה |

---

## תכונות נגישות

- הגדלת/הקטנת טקסט
- ניגודיות גבוהה
- גווני אפור
- כפתור קבוע בצד שמאל (דסקטופ) / ימין למטה (מובייל)

---

## SEO

```html
<meta name="description" content="..."/>
<meta property="og:title" content="..."/>
<meta property="og:image" content="..."/>
<meta property="og:description" content="..."/>
<link rel="icon" href="assets/imegs/logo.jpg"/>
```

---

## קישורים חיצוניים — לעדכן

| שירות | מה לעדכן |
|--------|----------|
| WhatsApp | `MY_WHATSAPP` ב-script.js |
| Google Sheets | `SHEET_URL` ב-script.js |
| Instagram | `YOUR_USERNAME` בפוטר |
| Facebook | `YOUR_PAGE` בפוטר |
| Instagram posts | `YOUR_POST_ID` בסקשן More Info |

---

## הרצת הפרויקט

1. פתח את התיקייה ב-VS Code
2. התקן את תוסף **Live Server**
3. לחץ לחיצה ימנית על `index.html` ← **Open with Live Server**
4. הדפדפן יפתח אוטומטית על `localhost:5500`

---

## פרסום

הדף מתארח על **Netlify** — drag & drop של תיקיית הפרויקט.

```
https://jordan-pro.netlify.app
```

---

## מה עוד נשאר לבנות

- [ ] כפתור WhatsApp צף לאורך כל הדף
- [ ] Sticky Header — תפריט ניווט שנשאר למעלה
- [ ] אנימציית מספרים — סטטיסטיקות המתחם
- [ ] בדיקת Responsive מלאה על כל הסקשנים
- [ ] דחיסת תמונות ב-squoosh.app לשיפור מהירות

---

## גרסה

`v4.0.0` — הדף הושלם ופורסם 🎉
