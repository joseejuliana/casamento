console.log("presentes carregou");

const listaPresentes = [
    "Ventilador",
    "Tapete de entrada",
    "Jogo de lençol cinza/branco",
    "Travesseiro Queen",
    "Cobertor cor neutra",
    "Processador de alimentos",
    "Jogo de toalhas",
    "Grill",
    "Açúcar + adoçante",
    "Mixer",
    "Mini forno elétrico",
    "Liquidificador vidro",
    "Mini processador",
    "Sanduicheira",
    "Chaleira elétrica",
    "Panela arroz elétrica",
    "Fogareiro",
    "Jogo de jantar preto",
    "Xícaras chá/café",
    "Xícaras vidro duplo",
    "Jogo de copos",
    "Jogo de facas bloco",
    "Taças de vinho",
    "Travessas sobremesa",
    "Petisqueiras vidro",
    "Assadeira fundo removível",
    "Jogo de travessas",
    "Frigideira cerâmica",
    "Jogo panelas antiaderente",
    "Garrafas térmicas",
    "Saladeira vidro",
    "Toalha de mesa",
    "Porta-guardanapo",
    "Escorredor louça inox",
    "Espremedor macarrão",
    "Tigelas vidro",
    "Aspirador vassoura",
    "Mop giratório",
    "Ferro de passar",
    "Tábua passar",
    "Varal chão",
    "Escada alumínio",
    "Apanhador fraldas",
    "Peneira barro",
    "Lavadora alta pressão",
    "Copos cerveja",
    "Copos whisky",
    "Copos shot",
    "Copos balão",
    "Cesto roupa",
    "Utensílios silicone",
    "Carrinho geladeira",
    "Passadeira + tapete",
    "Forno elétrico",
    "Panela grill",
    "Air Fryer",
    "Micro-ondas",
    "Espelho grande",
    "Lixeiras brancas",
    "Aquecedor",
    "Panela pressão",
    "Purificador água",
    "Lixeira inox",
    "Secador",
    "Organizador giratório"
];

let indexAtual = 0;
const porPagina = 10;

function carregarPresentes() {
    const container = document.getElementById("gradePresentes");
    if (!container) return;

    const fim = indexAtual + porPagina;
    const itens = listaPresentes.slice(indexAtual, fim);

    itens.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card-presente";

        card.innerHTML = `
            <h3>${item}</h3>
            <button class="botao-capa" onclick="reservarPresente('${item}')">
                Reservar pelo WhatsApp
            </button>
        `;

        container.appendChild(card);
    });

    indexAtual = fim;

    const btn = document.getElementById("btnCarregarMais");
    if (indexAtual >= listaPresentes.length && btn) {
        btn.style.display = "none";
    }
}

function reservarPresente(nome) {
    const telefone = "5511949626996";
    const mensagem = encodeURIComponent(
        `Olá! Gostaria de reservar o presente: ${nome} 💛`
    );

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    carregarPresentes();
});