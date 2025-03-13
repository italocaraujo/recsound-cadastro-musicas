document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("musicForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const titleInput = document.getElementById("title");
        const artistInput = document.getElementById("artist");

        if (!titleInput.value.trim() || !artistInput.value.trim()) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        window.alertMessage = "Música cadastrada com sucesso!";
        alert(window.alertMessage);

        form.reset();
    });
});