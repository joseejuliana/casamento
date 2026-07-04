console.log("Presentes carregado!");

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

var limite = 40;

function reservarPresente(nome) {

    var telefone = "5511949626996";

    var mensagem = encodeURIComponent(
        "Olá! Gostaria de reservar o presente: " + nome + " 💛"
    );

    window.open(
        "https://wa.me/" + telefone + "?text=" + mensagem,
        "_blank"
    );
}

function carregarPresentes() {

    var container = document.getElementById("gradePresentes");

    if (!container) return;

    container.innerHTML = "";

    for (var i = 0; i < limite && i < listaPresentes.length; i++) {

        var card = document.createElement("div");
        card.className = "card-presente";

        var titulo = document.createElement("h3");
        titulo.textContent = listaPresentes[i];

        var botao = document.createElement("button");
        botao.className = "botao-capa";
        botao.textContent = "Reservar pelo WhatsApp";

        (function(nome){

            botao.addEventListener("click", function(){

                reservarPresente(nome);

            });

        })(listaPresentes[i]);

        card.appendChild(titulo);
        card.appendChild(botao);

        container.appendChild(card);

    }

    var btn = document.getElementById("btnCarregarMais");

    if (btn) {

        if (limite >= listaPresentes.length) {

            btn.style.display = "none";

        } else {

            btn.style.display = "inline-block";

        }

    }

}

document.addEventListener("DOMContentLoaded", function(){

    carregarPresentes();

    var btn = document.getElementById("btnCarregarMais");

    if(btn){

        btn.addEventListener("click", function(){

            limite += 10;

            carregarPresentes();

        });

    }

});