function iniciarSite() {

    // =========================
    // ABRIR CONVITE
    // =========================
    const capa = document.getElementById('capa');
    const conteudo = document.getElementById('conteudoPrincipal');
    const btnAbrir = document.getElementById('btnAbrirConvite');

    if (btnAbrir && capa && conteudo) {
        btnAbrir.addEventListener('click', () => {
            capa.style.opacity = '0';

            setTimeout(() => {
                capa.style.display = 'none';
                conteudo.style.display = 'block';
                window.scrollTo(0, 0);
            }, 600);
        });
    }

    // =========================
    // MENU MOBILE
    // =========================
    const btnMenu = document.getElementById('btnMenuMobile');
    const menu = document.querySelector('.lista-menu');

    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('ativa');
        });
    }

    // =========================
    // CONTADOR
    // =========================
    const fim = new Date('2026-09-27T13:00:00');

    function atualizar() {
        const agora = new Date();
        const diff = fim - agora;

        const dias = Math.max(0, Math.floor(diff / 86400000));
        const horas = Math.max(0, Math.floor((diff % 86400000) / 3600000));
        const min = Math.max(0, Math.floor((diff % 3600000) / 60000));
        const seg = Math.max(0, Math.floor((diff % 60000) / 1000));

        const d = document.getElementById('dias');
        const h = document.getElementById('horas');
        const m = document.getElementById('minutos');
        const s = document.getElementById('segundos');

        if (d) d.textContent = dias;
        if (h) h.textContent = horas;
        if (m) m.textContent = min;
        if (s) s.textContent = seg;
    }

    atualizar();
    setInterval(atualizar, 1000);

    // =========================
    // PIX
    // =========================
    const btnPix = document.getElementById('btnCopiarPix');

    if (btnPix) {
        btnPix.addEventListener('click', () => {
            const chave = document.getElementById('chavePix');
            if (!chave) return;

            navigator.clipboard?.writeText(chave.textContent);
            alert('PIX copiado!');
        });
    }
}

// inicialização segura (EVITA TELA BRANCA)
if (document.readyState !== "loading") {
    iniciarSite();
} else {
    document.addEventListener("DOMContentLoaded", iniciarSite);
}