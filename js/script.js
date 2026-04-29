});// ============================================
// 1. MENIU ACTIV - evidențiază pagina curentă
// ============================================
function setActiveMeniu() {
    const links = document.querySelectorAll('td[width="25%"] a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.color = '#4a6741';
            link.style.fontWeight = '400';
            link.style.paddingLeft = '10px';
            link.style.borderLeft = '3px solid #4a6741';
        }
    });
}

// ============================================
// 2. ANIMAȚII LA SCROLL - elementele apar lin
// ============================================
function initScrollAnimations() {
    const elemente = document.querySelectorAll('td[width="75%"] h3, td[width="75%"] img, td[width="75%"] p');

    elemente.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    function verificaVizibil() {
        elemente.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 40) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', verificaVizibil);
    verificaVizibil();
}

// ============================================
// 3. FORMULAR ABONARE (doar pe index.html)
// ============================================
function initFormular() {
    const formContainer = document.getElementById('formular-abonare');
    if (!formContainer) return;

    formContainer.innerHTML = `
        <div class="abonare-box">
            <h3>🌸 Fii primul care află când parfumul tău preferat revine în stoc!</h3>
            <p>Lasă-ne datele tale și te anunțăm imediat.</p>
            <div class="form-grup">
                <input type="text" id="nume" placeholder="Numele tău" />
            </div>
            <div class="form-grup">
                <input type="email" id="email" placeholder="Email-ul tău" />
            </div>
            <button onclick="proceseazaFormular()">Abonează-mă</button>
            <p id="mesaj-raspuns" style="display:none;"></p>
        </div>
    `;
}

function proceseazaFormular() {
    const nume = document.getElementById('nume').value.trim();
    const email = document.getElementById('email').value.trim();
    const mesaj = document.getElementById('mesaj-raspuns');

    if (nume === '') {
        afisezMesaj(mesaj, '⚠️ Te rugăm să introduci numele tău.', '#c0392b');
        return;
    }
    if (email === '' || !email.includes('@') || !email.includes('.')) {
        afisezMesaj(mesaj, '⚠️ Te rugăm să introduci un email valid.', '#c0392b');
        return;
    }

    afisezMesaj(
        mesaj,
        `✅ Mulțumim, ${nume}! Te vom anunța pe ${email} când parfumurile preferate vor fi disponibile.`,
        '#4a6741'
    );

    document.getElementById('nume').value = '';
    document.getElementById('email').value = '';
}

function afisezMesaj(el, text, culoare) {
    el.textContent = text;
    el.style.color = culoare;
    el.style.display = 'block';
    el.style.marginTop = '12px';
    el.style.fontSize = '1rem';
}

// ============================================
// PORNIRE
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    setActiveMeniu();
    initScrollAnimations();
    initFormular();
});

// ============================================
// 3. FORMULAR ABONARE CU AJAX
// ============================================
function initFormular() {
    const form = document.querySelector('.abonare-box form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // oprește reload-ul paginii!

        const nume  = form.querySelector('input[name="nume"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const mesaj = document.getElementById('mesaj-ajax');

        // Validare client-side
        if (nume === '') {
            afisezMesaj(mesaj, '⚠️ Te rugăm să introduci numele tău.', '#c0392b');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            afisezMesaj(mesaj, '⚠️ Te rugăm să introduci un email valid.', '#c0392b');
            return;
        }

        // Trimitere AJAX
        const formData = new FormData();
        formData.append('nume', nume);
        formData.append('email', email);

        fetch('ajax_abonare.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.succes) {
                afisezMesaj(mesaj, data.mesaj, '#4a6741');
                form.reset(); // golește câmpurile
            } else {
                afisezMesaj(mesaj, data.mesaj, '#c0392b');
            }
        })
        .catch(() => {
            afisezMesaj(mesaj, '⚠️ Eroare de rețea. Încearcă din nou.', '#c0392b');
        });
    });
}

function afisezMesaj(el, text, culoare) {
    el.innerHTML = text;
    el.style.color = culoare;
    el.style.display = 'block';
    el.style.marginTop = '12px';
    el.style.fontSize = '1rem';
}
