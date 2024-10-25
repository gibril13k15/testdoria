// Liste des messages
const messages = [
    "Chaque jour avec toi est un rêve éveillé 💖",
    "Je suis tellement chanceux(se) de t'avoir dans ma vie 🌹",
    "Je t'aime plus que les mots ne peuvent le dire 💕",
    "Avec toi, tout est plus beau 🌈",
    "Merci pour chaque sourire, chaque câlin, et chaque moment 💫",
    "Tu es mon rayon de soleil dans les jours sombres ☀️"
];

// Fonction pour changer le message
function newMessage() {
    const message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = message;
}

// Effet curseur en forme de cœur
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("heart-cursor");
    if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});
// Gestion des commentaires
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Créer un nouvel élément de commentaire
        const commentList = document.getElementById("commentList");
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentText;

        // Ajouter le commentaire à la liste
        commentList.appendChild(newComment);
        commentInput.value = ""; // Réinitialiser le champ de saisie
    } else {
        alert("Veuillez entrer un commentaire avant de soumettre.");
    }
});
// Fonction pour revenir à la page précédente
function goBack() {
    window.history.back(); // Retourne à la page précédente
}

// Gestion des commentaires
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Créer un nouvel élément de commentaire
        const commentList = document.getElementById("commentList");
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentText;

        // Ajouter le commentaire à la liste
        commentList.appendChild(newComment);
        commentInput.value = ""; // Réinitialiser le champ de saisie
    } else {
        alert("Veuillez entrer un commentaire avant de soumettre.");
    }
});

