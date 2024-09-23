// Função para buscar jogos
function searchGames() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const games = document.querySelectorAll('.game-item');

    games.forEach(game => {
        const gameTitle = game.querySelector('h2').textContent.toLowerCase();
        if (gameTitle.includes(searchInput)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}
