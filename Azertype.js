const motATaperInput = document.getElementById('MotATaper');
const motTapeInput = document.getElementById('MotTapé');
const choixMotRadio = document.getElementById('choixMot');
const choixPhraseRadio = document.getElementById('choixPhrase');
const scoreSpan = document.getElementById('point');
const formulaire = document.querySelector('.choix');
const boutonValider = document.querySelector('button');

let score = 0;
let motAComparer = '';

choixMotRadio.addEventListener('change', () => {
    motATaperInput.value = '';
    motTapeInput.value = '';
    score = 0;
    scoreSpan.textContent = score;
    motAComparer = '';
    genererMot();
});

choixPhraseRadio.addEventListener('change', () => {
    motATaperInput.value = '';
    motTapeInput.value = '';
    score = 0;
    scoreSpan.textContent = score;
    motAComparer = '';
    genererPhrase();
});

motATaperInput.addEventListener('input', () => {
    if (motATaperInput.value === motAComparer) {
        score++;
        scoreSpan.textContent = score;
        motATaperInput.value = '';
        motTapeInput.value = '';
        motAComparer = '';
        if (choixMotRadio.checked) {
            genererMot();
        } else if (choixPhraseRadio.checked) {
            genererPhrase();
        }
    }
});

boutonValider.addEventListener('click', (e) => {
    e.preventDefault();
    if (motTapeInput.value === motAComparer) {
        score++;
        scoreSpan.textContent = score;
        motATaperInput.value = '';
        motTapeInput.value = '';
        motAComparer = '';
        if (choixMotRadio.checked) {
            genererMot();
        } else if (choixPhraseRadio.checked) {
            genererPhrase();
        }
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
});

function genererMot() {
    const mots = ['HEI', 'Test', 'WEB1', 'examen', 'Azerty'];
    const randomIndex = Math.floor(Math.random() * mots.length);
    const motAleatoire = mots[randomIndex];
    motATaperInput.value = motAleatoire;
    motAComparer = motAleatoire;
}

function genererPhrase() {
    const phrases = ['Ca va ?', 'Test du site', 'Assistant WEB1', 'Examen de WEB1'];
    const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];
    motATaperInput.value = phraseAleatoire;
    motAComparer = phraseAleatoire;
}

if (choixMotRadio.checked) {
    genererMot();
} else if (choixPhraseRadio.checked) {
    genererPhrase();
}
