// Função para lidar com o envio do formulário
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("musicForm");

    // Adiciona um ouvinte de evento ao formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Verifica se os campos obrigatórios estão preenchidos
        const titleInput = document.getElementById("title");
        const artistInput = document.getElementById("artist");

        if (!titleInput.value.trim() || !artistInput.value.trim()) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Exibe um popup de sucesso
        alert("Música cadastrada com sucesso!");

        // Limpa o formulário após o envio
        form.reset();
    });
});