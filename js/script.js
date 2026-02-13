/* =========================
   Navigation file:// robuste
   ========================= */

/**
 * Retourne le chemin jusqu'au dossier /html/
 * Exemple :
 * file:///C:/Users/Toi/Desktop/html/page/game.html
 * -> file:///C:/Users/Toi/Desktop/html/
 */
function getRootPath() {
    const url = window.location.href;
    const rootIndex = url.lastIndexOf("/html/");
    return url.substring(0, rootIndex + 6);
}

/**
 * Redirection vers une page du site
 */
function goTo(relativePath) {
    window.location.href = getRootPath() + relativePath;
}

/* =========================
   Gestion des boutons nav
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.link;
            if (target) {
                goTo(target);
            }
        });
    });
});
