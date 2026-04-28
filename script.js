// main js

// active cards
function toggleService(card) {
    const isActive = card.classList.contains('active')

    document.querySelectorAll('.service-card')
            .forEach(c => c.classList.remove('active'))

    if (!isActive) {
        card.classList.add('active')
    }
}

// Carousel
// Results carousel
function scrollResults(dir) {
    const track = document.getElementById('resultsTrack')
    track.scrollBy({ left: dir * -300, behavior: 'smooth' })
}

// More info carousel
function scrollMore(dir) {
    const track = document.getElementById('moreTrack')
    track.scrollBy({ left: dir * -220, behavior: 'smooth' })
}

// Form submit
function submitForm(formId, successId) {
    const form = document.getElementById(formId)
    // console.log('form:', form)
    
    // בדיקת שדות
    const inputs = form.querySelectorAll('input, select')
    let valid = true
    inputs.forEach(i => { 
        // console.log('input:', i.value)
        if (!i.value) valid = false 
    })
    if (!valid) { alert('אנא מלא/י את כל השדות'); return }

    // טשטוש שדות
    inputs.forEach(i => i.style.opacity = '0.5')

    // ← מחפש את הכפתור לפי class במקום תג
    const btn = form.querySelector('.btn-submit')
    if (btn) btn.style.opacity = '0.5'

    // הצגת הודעת הצלחה
    const successEl = document.getElementById(successId)
    // console.log('successEl:', successEl)
    if (successEl) successEl.classList.add ('show')
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); })
    }, { threshold: 0.12 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

// Jordan Pro Leads
const MY_WHATSAPP = '972503777486'  
const SHEET_URL   = 'https://script.google.com/macros/s/AKfycbzySHOG4JL6YrdJTuIVRVWGsTIm2WnNAM-0vTGGvSDKX4cDJsh3XizaU7D8KSaA_QEa/exec'

async function submitForm(formId, successId) {
    const form = document.getElementById(formId)

    // שלוף ערכים
    const name   = form.querySelector('input[type="text"]').value.trim()
    const phone  = form.querySelector('input[type="tel"]').value.trim()
    const age    = form.querySelector('input[type="number"]').value.trim()
    const gender = form.querySelector('select').value
    const email  = form.querySelector('input[type="email"]').value.trim()

    const textInputs = form.querySelectorAll('input[type="text"]')
    const goal   = textInputs[1]?.value.trim() || ''
    const source = textInputs[2]?.value.trim() || ''

    // ✅ וידוא כל השדות החובה
    if (!name) {
        alert('אנא מלא/י שם מלא')
        return
    }
    if (!phone) {
        alert('אנא מלא/י מספר טלפון')
        return
    }
    if (!age) {
        alert('אנא מלא/י גיל')
        return
    }
    if (!gender) {
        alert('אנא בחר/י מין')
        return
    }
    if (!email) {
        alert('אנא מלא/י מייל')
        return
    }
    if (!goal) {
        alert('אנא מלא/י מה המטרה שלך')
        return
    }
    if (!source) {
        alert('אנא מלא/י איך הגעת אלינו')
        return
    }

    // ── שמור ב-Google Sheets ──
    try {
        await fetch(SHEET_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, age, gender, email, goal, source }),
            mode: 'no-cors'
        })
        console.log('✓ נשמר ב-Google Sheets')
    } catch(err) {
        console.warn('שגיאה בשמירה:', err)
    }

    // ── פתח WhatsApp ──
    const msg = [
        `🏋️ Jordan PRO`,
        `👤 שם: ${name}`,
        `📱 טלפון: ${phone}`,
        `🎂 גיל: ${age}`,
        `⚧ מין: ${gender}`,
        `📧 מייל: ${email}`,
        `🎯 מטרה: ${goal}`,
        `📣 הגיע דרך: ${source}`,
        `📅 ${new Date().toLocaleString('he-IL')}`,
    ].join('\n')

    window.open(`https://wa.me/${MY_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')

    // ── הצג הצלחה ──
    const successEl = document.getElementById(successId)
    if (successEl) successEl.classList.add('show')

    // ── נקה טופס ──
    form.querySelectorAll('input').forEach(i => i.value = '')
    form.querySelector('select').selectedIndex = 0
}