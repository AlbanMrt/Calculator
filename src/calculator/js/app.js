// Ce fichier app.js a pour but de permettre à l'utilisateur d'intéragir avec la calculatrice grâce à son clavier ou bien sa souris

// Création de la constante buttons afin de créer un tableau regroupant tout les éléments du code html comportant la class btn
const buttons = [...document.querySelectorAll('.btn')];

// Création de listKeycode qui associe à chaque button du tableau bouttons la valeur du data-key qui lui est associée depuis le fichier index.html on trie les buttons de gauche à droite et de haut en bas
const listKeycode = buttons.map(button => button.dataset.key);

// Création de la constante screen qui correspond dans le fichier index.html à la div possédant la class screen, le but étant de pouvoir imprimer ou supprimer du html dans cette zone
const screen = document.querySelector('.screen')

// Ce morceau de code écoute les pressions de touches et recupère la valeur key associé à la touche pressé
document.addEventListener('keydown', (KeyboardEvent) => {
    const value = KeyboardEvent.key.toString();
    calculate(value) // Suivant l'entré, l'output est calculé par la function calculate (décrite ci-dessous)
})

// Ce morceau de code écoute les clics et recupère la valeur key associé à la touche pressé
document.addEventListener('click', (event) => {
    const value = event.target.dataset.key;
    calculate(value)// Suivant l'entré, l'output est calculé par la function calculate (décrite ci-dessous)
})

// Cette fonction permet d'ineterpréter l'entré de l'utilisateur afin de definir l'action à suivre, les différents cas seront traités en temps voulu
const calculate = (value) => {
    if (listKeycode.includes(value)) {
        switch (value) {
            case 'Backspace': // Si l'entré correspond à "Backspace" ou un clic sur le touche "c", l'écran se vide de tout caractère 
                screen.textContent = "";
                break;
            case 'Enter': // Si l'entré correspond à "Entrer" ou un clic sur égal, la valeur du texte affiché est calculé et renvoyée sur l'écran
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = listKeycode.indexOf(value); 
                const button = buttons[indexKeycode];
                screen.textContent += button.innerHTML
        }
    }
}

// Si une erreur de syntaxte survient, alors cette partie du code permet d'inscrire sur l'écran, "Erreur Syntaxte"
window.addEventListener('error', (event) => {
    screen.textContent = 'Erreur Syntaxte'
})