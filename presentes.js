antes disso você consegue lista de presente  esses presentes para eu ver como ficou aqui mas queria que mandesse o arquvio já para eu testar no site  vpou mandar o codigo e voce poe os presente compleot console.log("Presentes carregado!");

const listaPresentes = [
    "Ventilador",
    "Tapete de entrada",
    "Jogo de lençol casal",
    "Travesseiros (par)",
    "Cobertor casal",
    "Edredom casal",
    "Jogo de toalhas de banho",
    "Jogo de toalhas de rosto",

    "Liquidificador de vidro",
    "Processador de alimentos",
    "Mini processador",
    "Mixer",
    "Grill",
    "Sanduicheira",
    "Chaleira elétrica",
    "Panela de arroz elétrica",
    "Mini forno elétrico",

    "Air Fryer de dois andares",
    "Air Fryer de dois andares",

    "Micro-ondas Inox",
    "Micro-ondas Inox",

    "Fogareiro",
    "Jogo de jantar completo",
    "Jogo de xícaras de chá",
    "Jogo de xícaras de café",
    "Jogo de copos",
    "Jogo de facas com bloco",
    "Taças de água",
    "Travessas de sobremesa",
    "Petisqueiras de vidro",
    "Assadeira com fundo removível",
    "Jogo de travessas inox",
    "Frigideira de cerâmica",
    "Jogo de panelas antiaderente",
    "Panela de pressão",
    "Garrafa térmica",
    "Saladeira de vidro",
    "Toalha de mesa",
    "Porta-guardanapos",
    "Escorredor de louça inox",
    "Tigelas de vidro",

    "Aspirador de pó vertical",
    "Aspirador portátil",
    "Mop giratório",
    "Ferro de passar",
    "Tábua de passar",
    "Varal de chão",
    "Escada de alumínio",
    "Lavadora de alta pressão",
    "Cesto de roupa",

    "Utensílios de silicone",
    "Jogo de potes plásticos",
    "Jogo de potes de vidro",

    "Cafeteira elétrica",
    "Filtro de água elétrico",
    "Purificador de água",

    "Moedor de carne elétrico",
    "Fatiadeira elétrica",

    "Espelho grande",
    "Lixeira inox",
    "Secador de cabelo",
    "Toalheiro térmico",
    "Organizador giratório",

    "Kit banheiro (lixeira + escova)",
    "Kit decoração para sala",
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