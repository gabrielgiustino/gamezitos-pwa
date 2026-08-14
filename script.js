// ===== TOAST =====
function mostrarMensagem(texto) {
    const toast = document.getElementById("toast");
    toast.textContent = texto;
    toast.classList.add("show");

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ===== NAVEGAÇÃO ENTRE PÁGINAS =====
function navegarPara(pagina) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    const targetPage = document.getElementById(`page-${pagina}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const titulos = {
        dashboard: 'Dashboard',
        loja: 'Loja',
        vendas: 'Vendas',
        perfil: 'Perfil'
    };
    document.getElementById('page-title').textContent = titulos[pagina] || 'GameZitos';

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === pagina);
    });
}

// ===== EVENTOS DOS BOTÕES DO MENU =====
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const pagina = this.dataset.page;
        navegarPara(pagina);
        const mensagens = {
            dashboard: '🏠 Início',
            loja: '🎮 Loja de Jogos',
            vendas: '💰 Financeiro',
            perfil: '👤 Perfil'
        };
        mostrarMensagem(`📱 ${mensagens[pagina] || pagina}`);
    });
});

// ===== FUNÇÕES LEGADO =====
function irPara(tela) {
    navegarPara(tela);
}

// ===== SERVICE WORKER =====
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {
                console.log("✅ PWA GameZitos funcionando!");
            })
            .catch(error => {
                console.error("❌ Erro no Service Worker:", error);
            });
    });
}