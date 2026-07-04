// ================================
// LISTA DE PRESENTES
// ================================

const listaPresentes = [
    "Ventilador",
    "Tapete de entrada",
    "Jogo de lençol cinza/branco",
    "Travesseiro Queen",
    "Cobertor cor neutra",
    "Edredom casal",
    "Processador de alimentos",
    "Jogo de toalhas banho",
    "Jogo de toalhas rosto",
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
    "Jogo de jantar completo",
    "Xícaras chá/café",
    "Xícaras vidro duplo",
    "Jogo de copos",
    "Jogo de facas bloco",
    "Taças de vinho",
    "Taças de água",
    "Travessas sobremesa",
    "Petisqueiras vidro",
    "Assadeira fundo removível",
    "Jogo de travessas inox",
    "Frigideira cerâmica",
    "Jogo panelas antiaderente",
    "Panela pressão",
    "Garrafas térmicas",
    "Saladeira vidro",
    "Toalha de mesa",
    "Porta-guardanapo",
    "Escorredor louça inox",
    "Tigelas vidro",
    "Aspirador vassoura",
    "Mop giratório",
    "Ferro de passar",
    "Tábua de passar",
    "Varal chão",
    "Escada alumínio",
    "Lavadora alta pressão",
    "Cesto de roupa",
    "Utensílios silicone",
    "Air Fryer",
    "Micro-ondas",
    "Espelho grande",
    "Lixeira inox",
    "Secador",
    "Organizador giratório",
    "Jogo de potes plástico",
    "Jogo de potes vidro",
    "Cafeteira elétrica",
    "Filtro de água",
    "Kit banheiro (lixeira + escova)",
    "Kit decoração sala",
    "Kit cozinha básico"
];

// ================================
// CONFIG
// ================================

let limite = 40;

// ================================
// CARREGAR PRESENTES
// ================================

function carregarPresentes() {
    const container = document.getElementById("gradePresentes");
    if (!container) return;

    container.innerHTML = "";

    listaPresentes.slice(0, limite).forEach((item) => {
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

    // esconder botão se acabou lista
    const btn = document.getElementById("btnCarregarMais");
    if (btn) {
        btn.style.display = limite >= listaPresentes.length ? "none" : "block";
    }
}

// ================================
// RESERVAR PRESENTE
// ================================

function reservarPresente(nome) {
    const telefone = "5511949626996";

    const mensagem = encodeURIComponent(
        `Olá! Gostaria de reservar o presente: ${nome} 💛`
    );

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}

// ================================
// INICIALIZAÇÃO SEGURA
// ================================

document.addEventListener("DOMContentLoaded", () => {

    carregarPresentes();

    const btn = document.getElementById("btnCarregarMais");

    if (btn) {
        btn.addEventListener("click", () => {
            limite += 10;
            carregarPresentes();
        });
    }
});