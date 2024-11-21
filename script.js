const filmes = [
    { 
        id: 'naoolhe', 
        nome: 'Não! Não Olhe', 
        data: '22 de julho de 2022', 
        diretor: 'Jordan Peele', 
        elenco: 'Daniel Kaluuya, Keke Palmer', 
        custo: '$68 milhões', 
        inspiracao: 'Original', 
        imagem: 'images/filmes/naoolhe.jpg' 
    },
    { 
        id: 'terrifier', 
        nome: 'Terrifier', 
        data: '15 de outubro de 2016', 
        diretor: 'Damien Leone', 
        elenco: 'David Howard Thornton, Jenna Kanell', 
        custo: '$35 mil', 
        inspiracao: 'Personagem Art the Clown', 
        imagem: 'images/filmes/terrifier.jpg' 
    },
    { 
        id: 'oop', 
        nome: 'Oppenheimer', 
        data: '21 de julho de 2023', 
        diretor: 'Christopher Nolan', 
        elenco: 'Cillian Murphy, Emily Blunt', 
        custo: '$100 milhões', 
        inspiracao: 'Livro "American Prometheus"', 
        imagem: 'images/filmes/oop.jpg' 
    },
    { 
        id: 'vef7', 
        nome: 'Velozes e Furiosos 7', 
        data: '3 de abril de 2015', 
        diretor: 'James Wan', 
        elenco: 'Vin Diesel, Paul Walker', 
        custo: '$190 milhões', 
        inspiracao: 'Franquia de corrida', 
        imagem: 'images/filmes/vef7.jpg' 
    },
    { 
        id: 'tetlamt', 
        nome: 'Tudo em Todo Lugar ao Mesmo Tempo', 
        data: '25 de março de 2022', 
        diretor: 'Daniel Kwan, Daniel Scheinert', 
        elenco: 'Michelle Yeoh, Ke Huy Quan', 
        custo: '$25 milhões', 
        inspiracao: 'Multiverso', 
        imagem: 'images/filmes/tetlamt.jpg' 
    }
];

const series = [
    { 
        id: 'theboys', 
        nome: 'The Boys', 
        data: '26 de julho de 2019', 
        diretor: 'Eric Kripke', 
        elenco: 'Karl Urban, Jack Quaid', 
        custo: 'Desconhecido', 
        inspiracao: 'HQs de Garth Ennis', 
        imagem: 'images/series/theboys.jpg' 
    },
    { 
        id: 'euphoria', 
        nome: 'Euphoria', 
        data: '16 de junho de 2019', 
        diretor: 'Sam Levinson', 
        elenco: 'Zendaya, Hunter Schafer', 
        custo: 'Desconhecido', 
        inspiracao: 'Série israelense', 
        imagem: 'images/series/euphoria.jpg' 
    },
    { 
        id: 'tlous', 
        nome: 'The Last of Us', 
        data: '15 de janeiro de 2023', 
        diretor: 'Craig Mazin, Neil Druckmann', 
        elenco: 'Pedro Pascal, Bella Ramsey', 
        custo: '$100 milhões (1ª temporada)', 
        inspiracao: 'Jogo homônimo', 
        imagem: 'images/series/tlous.jpg' 
    },
    { 
        id: 'hod', 
        nome: 'House of the Dragon', 
        data: '21 de agosto de 2022', 
        diretor: 'Miguel Sapochnik', 
        elenco: 'Paddy Considine, Matt Smith', 
        custo: '$200 milhões (1ª temporada)', 
        inspiracao: 'Livro "Fogo e Sangue"', 
        imagem: 'images/series/hod.jpg' 
    },
    { 
        id: 'wandinha', 
        nome: 'Wandinha', 
        data: '23 de novembro de 2022', 
        diretor: 'Tim Burton', 
        elenco: 'Jenna Ortega, Catherine Zeta-Jones', 
        custo: '$65 milhões', 
        inspiracao: 'Personagem de Charles Addams', 
        imagem: 'images/series/wandinha.jpg' 
    }
];

// Modal e funcionalidade
const modal = document.getElementById('details-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDirector = document.getElementById('modal-director');
const modalCast = document.getElementById('modal-cast');
const modalCost = document.getElementById('modal-cost');
const modalInspiration = document.getElementById('modal-inspiration');

const filmesList = document.getElementById('filmes-list');
const seriesList = document.getElementById('series-list');

// Renderizar filmes ou séries
function renderItems(items, listElement) {
    listElement.innerHTML = ''; // Limpa a lista
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <h2>${item.nome}</h2>
            <span>${item.data}</span>
        `;
        itemElement.addEventListener('click', () => showDetails(item));
        listElement.appendChild(itemElement);
    });
}

// Mostrar detalhes no modal
function showDetails(item) {
    modalTitle.textContent = item.nome;
    modalImage.src = item.imagem;
    modalDirector.textContent = item.diretor;
    modalCast.textContent = item.elenco;
    modalCost.textContent = item.custo;
    modalInspiration.textContent = item.inspiracao;
    modal.classList.add('visible');
}

// Mostrar seção específica
function showSection(sectionId, items, listElement) {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    renderItems(items, listElement);
}

// Navegação no menu
document.getElementById('menu-filmes').addEventListener('click', () => showSection('conteudo-filmes', filmes, filmesList));
document.getElementById('menu-series').addEventListener('click', () => showSection('conteudo-series', series, seriesList));
document.getElementById('close-modal').addEventListener('click', () => modal.classList.remove('visible'));

// Exibir menu inicial
function showMenu() {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
    document.getElementById('menu-inicial').classList.remove('hidden');
}

// Renderiza a página inicial
showMenu();

// Fecha o modal ao clicar no "X" ou fora do modal
document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.remove('visible');
});
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('visible');
    }
});
