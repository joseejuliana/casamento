// 🔥 TUDO CARGA DEPOIS DA PÁGINA PRONTA → NUNCA MAIS QUEBRA
document.addEventListener('DOMContentLoaded', () => {

    // ======================================
    // ✅ ABRIR CONVITE - 100% FUNCIONAL
    // ======================================
    const capa = document.getElementById('capa');
    const conteudo = document.getElementById('conteudoPrincipal');
    document.getElementById('btnAbrirConvite').addEventListener('click', () => {
        capa.style.opacity = '0';
        setTimeout(() => {
            capa.style.display = 'none';
            conteudo.style.display = 'block';
            window.scrollTo(0,0);
            setTimeout(ligaAnimacoes, 80);
        }, 800);
    });

    // ======================================
    // ✅ MENU TRANSPARENTE → VIDRO AO ROLAR
    // ======================================
    const menu = document.getElementById('menu');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) menu.classList.add('rolou');
        else menu.classList.remove('rolou');

        // marca item ativo
        document.querySelectorAll('section[id]').forEach(s => {
            const y = window.scrollY + 130;
            const a = document.querySelector(`.lista-menu a[href="#${s.id}"]`);
            if(!a) return;
            if(y >= s.offsetTop && y < s.offsetTop + s.offsetHeight){
                document.querySelectorAll('.lista-menu a').forEach(x=>x.classList.remove('ativo'));
                a.classList.add('ativo');
            }
        });

        // botão topo
        const topo = document.getElementById('btnTopo');
        if(window.scrollY > 600) topo.classList.add('mostrar');
        else topo.classList.remove('mostrar');
    });

    // ======================================
    // MENU MOBILE
    // ======================================
    document.getElementById('btnMenuMobile').addEventListener('click', () =>
        document.querySelector('.lista-menu').classList.toggle('ativa')
    );
    document.querySelectorAll('.lista-menu a').forEach(a =>
        a.addEventListener('click', () => document.querySelector('.lista-menu').classList.remove('ativa'))
    );

    // ======================================
    // CONTADOR
    // ======================================
    const FIM = new Date('2026-09-27T13:00:00');
    function relogio(){
        const d = Math.max(0, FIM - Date.now());
        const d_ = String(Math.floor(d/86400000)).padStart(2,'0');
        const h_ = String(Math.floor((d%86400000)/3600000)).padStart(2,'0');
        const m_ = String(Math.floor((d%3600000)/60000)).padStart(2,'0');
        const s_ = String(Math.floor((d%60000)/1000)).padStart(2,'0');
        document.getElementById('dias').textContent=d_;
        document.getElementById('horas').textContent=h_;
        document.getElementById('minutos').textContent=m_;
        document.getElementById('segundos').textContent=s_;
    }
    relogio(); setInterval(relogio, 1000);

    // ======================================
    // COPIAR PIX
    // ======================================
    document.getElementById('btnCopiarPix').addEventListener('click', async () => {
        const chave = document.getElementById('chavePix').textContent;
        const b = document.getElementById('btnCopiarPix');
        try {
            await navigator.clipboard.writeText(chave);
            b.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            setTimeout(()=> b.innerHTML='<i class="fas fa-copy"></i> Copiar Chave', 2500);
        } catch { alert('Chave: '+chave); }
    });

    // ======================================
    // ✅ FORMULÁRIO WHATSAPP - SEM DUPLICATA
    // ======================================
    document.getElementById('formConfirmar').addEventListener('submit', e => {
        e.preventDefault();
        const n = document.getElementById('nome').value.trim();
        const t = document.getElementById('telefone').value.trim();
        const q = document.getElementById('quantidade').value;
                const m = document.getElementById('mensagem').value.trim();
        if(!n){ alert('Por favor, digite seu nome ❤'); return; }

        const msg = encodeURIComponent(
`💍 CONFIRMAÇÃO DE PRESENÇA

👤 Nome: ${n}
📱 Telefone: ${t || '—'}
👥 Pessoas: ${q}
💌 Mensagem:
${m || '—'}

Com carinho, até lá! ❤`
        );
        window.open(`https://wa.me/5511949626996?text=${msg}`, '_blank');
        e.target.reset();
    });

    // ======================================
    // MÚSICA
    // ======================================


    // ======================================
    // PÉTALAS
    // ======================================
    function petala(){
        const p = document.createElement('div');
        p.className = 'petala';
        p.textContent = ['🌸','✦','❀','✨'][Math.floor(Math.random()*4)];
        p.style.left = Math.random()*100 + 'vw';
        p.style.animationDuration = (7 + Math.random()*7) + 's';
        p.style.fontSize = (14 + Math.random()*18) + 'px';
        document.body.appendChild(p);
        setTimeout(()=>p.remove(), 15000);
    }
    setInterval(petala, 850);

    // ======================================
    // ANIMA SEÇÕES
    // ======================================
    function ligaAnimacoes(){
        const obs = new IntersectionObserver(es => {
            es.forEach(e => { if(e.isIntersecting) e.target.classList.add('visivel'); });
        }, { threshold:.12 });
        document.querySelectorAll('section').forEach(s => obs.observe(s));
    }

});