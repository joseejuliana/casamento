const listaPresentes = [
    {id:1,nome:"Ventilador",d:true},{id:2,nome:"Tapete de entrada",d:true},
    {id:3,nome:"Jogo de lençol cinza/branco",d:true},{id:4,nome:"Travesseiro Queen",d:true},
    {id:5,nome:"Cobertor cor neutra",d:true},{id:6,nome:"Processador de alimentos",d:true},
    {id:7,nome:"Jogo de toalhas",d:true},{id:8,nome:"Grill",d:true},
    {id:9,nome:"Açúcar + adoçante",d:true},{id:10,nome:"Mixer",d:true},
    {id:11,nome:"Mini forno elétrico",d:true},{id:12,nome:"Liquidificador vidro",d:true},
    {id:13,nome:"Mini processador",d:true},{id:14,nome:"Sanduicheira",d:true},
    {id:15,nome:"Chaleira elétrica",d:true},{id:16,nome:"Panela arroz elétrica",d:true},
    {id:17,nome:"Fogareiro",d:true},{id:18,nome:"Jogo de jantar preto",d:true},
    {id:19,nome:"Xícaras chá/café",d:true},{id:20,nome:"Xícaras vidro duplo",d:true},
    {id:21,nome:"Jogo de copos",d:true},{id:22,nome:"Jogo de facas bloco",d:true},
    {id:23,nome:"Taças de vinho",d:true},{id:24,nome:"Travessas sobremesa",d:true},
    {id:25,nome:"Petisqueiras vidro",d:true},{id:26,nome:"Assadeira fundo removível",d:true},
    {id:27,nome:"Jogo de travessas",d:true},{id:28,nome:"Frigideira cerâmica",d:true},
    {id:29,nome:"Jogo panelas antiaderente",d:true},{id:30,nome:"Garrafas térmicas",d:true},
    {id:31,nome:"Saladeira vidro",d:true},{id:32,nome:"Toalha de mesa",d:true},
    {id:33,nome:"Porta-guardanapo",d:true},{id:34,nome:"Escorredor louça inox",d:true},
    {id:35,nome:"Espremedor macarrão",d:true},{id:36,nome:"Tigelas vidro",d:true},
    {id:37,nome:"Aspirador vassoura",d:true},{id:38,nome:"Mop giratório",d:true},
    {id:39,nome:"Ferro de passar",d:true},{id:40,nome:"Tábua passar",d:true},
    {id:41,nome:"Varal chão",d:true},{id:42,nome:"Escada alumínio",d:true},
    {id:43,nome:"Apanhador fraldas",d:true},{id:44,nome:"Peneira barro",d:true},
    {id:45,nome:"Lavadora alta pressão",d:true},{id:46,nome:"Copos cerveja",d:true},
    {id:47,nome:"Copos whisky",d:true},{id:48,nome:"Copos shot",d:true},
    {id:49,nome:"Copos balão",d:true},{id:50,nome:"Cesto roupa",d:true},
    {id:51,nome:"Utensílios silicone",d:true},{id:52,nome:"Carrinho geladeira",d:true},
    {id:53,nome:"Passadeira + tapete",d:true},{id:54,nome:"Forno elétrico",d:true},
    {id:55,nome:"Panela grill",d:true},{id:56,nome:"Air Fryer",d:true},
    {id:57,nome:"Micro-ondas",d:true},{id:58,nome:"Espelho grande",d:true},
    {id:59,nome:"Lixeiras brancas",d:true},{id:60,nome:"Aquecedor",d:true},
    {id:61,nome:"Panela pressão",d:true},{id:62,nome:"Purificador água",d:true},
    {id:63,nome:"Lixeira inox",d:true},{id:64,nome:"Secador",d:true},
    {id:65,nome:"Organizador giratório",d:true},{id:66,nome:"Whisky 12 anos",d:true},
    {id:67,nome:"Ciroc",d:true},{id:68,nome:"Absolut",d:true},
    {id:69,nome:"Grey Goose",d:true},{id:70,nome:"Beefeater",d:true},
    {id:71,nome:"Amarula",d:true},{id:72,nome:"Vinhos",d:true},
    {id:73,nome:"Licor",d:true},{id:74,nome:"Salinas",d:true},
    {id:75,nome:"51 Ouro",d:true},{id:76,nome:"Gin Tanqueray",d:true},
    {id:77,nome:"Gin Bulldog",d:true},{id:78,nome:"Conhaque",d:true},
    {id:79,nome:"Ritu Gold",d:true},{id:80,nome:"Cachaça Extra",d:true}
];

function carregar() {
    const g = document.getElementById('gradePresentes');

    if (!g) {
        console.log("ERRO: gradePresentes não existe no HTML");
        return;
    }

    const salvos = JSON.parse(localStorage.getItem('casamento_p') || '[]');

    salvos.forEach(id => {
        const item = listaPresentes.find(p => p.id === id);
        if (item) item.d = false;
    });

    g.innerHTML = '';

    listaPresentes.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card-presente' + (p.d ? '' : ' indisponivel');

        div.innerHTML = `
            <h3>${p.nome}</h3>
            ${p.d
                ? `<button class="botao-capa" onclick="reservar(${p.id})">Quero este</button>`
                : `<p class="texto-indisponivel">💛 Já reservado</p>`
            }
        `;

        g.appendChild(div);
    });
}

window.reservar = function(id) {
    const it = listaPresentes.find(p => p.id === id);
    if (!it || !it.d) return;

    it.d = false;

    const salvos = JSON.parse(localStorage.getItem('casamento_p') || '[]');
    salvos.push(id);
    localStorage.setItem('casamento_p', JSON.stringify(salvos));

    alert(`✅ "${it.nome}" reservado! 🤍`);

    carregar();
};

// 🔥 ISSO AQUI GARANTE FUNCIONAMENTO NO GITHUB
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(carregar, 300);
});