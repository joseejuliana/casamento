const presentes = [
"Ventilador","Tapete de entrada","Jogo de lençol","Travesseiro Queen",
"Cobertor","Processador","Jogo de toalhas","Grill","Mixer",
"Mini forno elétrico","Liquidificador","Sanduicheira",
"Chaleira elétrica","Panela elétrica","Fogareiro",
"Jogo de jantar","Xícaras","Copos","Facas",
"Taças de vinho","Travessas","Petisqueira",
"Air Fryer","Micro-ondas","Espelho grande",
"Lixeira inox","Secador","Organizador"
];

function carregarPresentes() {

    const container = document.getElementById("gradePresentes");
    if (!container) return;

    container.innerHTML = "";

    presentes.forEach(nome => {

        const card = document.createElement("div");
        card.className = "card-presente";

        card.innerHTML = `
            <h3>${nome}</h3>
            <button class="botao-capa" onclick="reservar('${nome}')">
                Reservar pelo WhatsApp
            </button>
        `;

        container.appendChild(card);
    });
}

function reservar(nome) {
    const numero = "5511949626996";
    const msg = encodeURIComponent(
        `Olá! Gostaria de reservar o presente: ${nome}`
    );

    window.open(`https://wa.me/${numero}?text=${msg}`, "_blank");
}

// carregamento blindado
if (document.readyState !== "loading") {
    carregarPresentes();
} else {
    document.addEventListener("DOMContentLoaded", carregarPresentes);
}