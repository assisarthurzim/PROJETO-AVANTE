// js/script.js
const team = [
    {
      name: "Tiago Vinícius",
      role: "Gerente Geral",
      bio: "Responsável pela visão estratégica e direção geral da AVANTE, assegurando a excelência, a ética e a qualidade em todos os serviços prestados.",
      image: "https://ui-avatars.com/api/?name=Tiago+Vinicius&background=0F172A&color=3B82F6&bold=true"
    },
    {
      name: "Davi Ferreira",
      role: "Gerente de Projeto",
      bio: "Lidera o planejamento e a execução das demandas, garantindo que as soluções tecnológicas sejam entregues com precisão e dentro do prazo.",
      image: "https://ui-avatars.com/api/?name=Davi+Ferreira&background=0F172A&color=06B6D4&bold=true"
    },
    {
      name: "Theo Souza",
      role: "Gerente de Materiais",
      bio: "Controla a logística, a curadoria e o fornecimento de hardwares e equipamentos, garantindo a disponibilidade dos melhores recursos para as instalações.",
      image: "https://ui-avatars.com/api/?name=Theo+Souza&background=0F172A&color=10B981&bold=true"
    },
    {
      name: "Luis Henrique",
      role: "Gerente Administrativo",
      bio: "Coordena as operações internas, a gestão financeira e a otimização de processos, mantendo a estrutura corporativa da AVANTE sólida e eficiente.",
      image: "https://ui-avatars.com/api/?name=Luis+Henrique&background=0F172A&color=3B82F6&bold=true"
    },
    {
      name: "Pedro Henrique",
      role: "Gerente de Comunicação",
      bio: "Gerencia as relações públicas, o marketing e a experiência do cliente, assegurando uma comunicação clara, humanizada e transparente da marca.",
      image: "https://ui-avatars.com/api/?name=Pedro+Henrique&background=0F172A&color=06B6D4&bold=true"
    },
    {
      name: "Arthur Assis",
      role: "Gerente de TI",
      bio: "Especialista em redes e infraestrutura. Planeja e gerencia a arquitetura técnica, a segurança e o suporte avançado dos sistemas implementados.",
      image: "https://ui-avatars.com/api/?name=Arthur+Assis&background=0F172A&color=10B981&bold=true"
    },
    {
      name: "Auero Henrique",
      role: "Gerente de IA",
      bio: "Responsável pela pesquisa, curadoria e integração de ferramentas de Inteligência Artificial para inovação e automação de processos tecnológicos.",
      image: "https://ui-avatars.com/api/?name=Auero+Henrique&background=0F172A&color=3B82F6&bold=true"
    },
    {
      name: "João Marcelo",
      role: "Colaborador",
      bio: "Atua diretamente na execução técnica e no suporte operacional, garantindo agilidade nas configurações, montagens e manutenções do dia a dia.",
      image: "https://ui-avatars.com/api/?name=Joao+Marcelo&background=0F172A&color=06B6D4&bold=true"
    }
];

const services = [
    {
        title: "Informática e Hardware Sob Medida",
        icon: "monitor",
        desc: "Esqueça a lentidão e as perdas de trabalho. Desenhamos, otimizamos e prestamos suporte para computadores que acompanham o seu ritmo, seja para alta produtividade no Home Office ou performance em jogos.",
        checks: ["Consultoria de compra focada no custo-benefício real", "Diagnóstico preciso e otimização de sistemas lentos", "Montagem e organização ergonômica do seu ambiente"],
        limit: "Otimizamos o seu equipamento atual até o seu limite físico; não prometemos milagres em hardwares obsoletos."
    },
    {
        title: "Infraestrutura e Redes de Alta Estabilidade",
        icon: "wifi",
        desc: "O fim absoluto das 'zonas mortas' de Wi-Fi na sua casa ou escritório. Criamos uma rede fluida para que as suas videochamadas, streaming em 4K e downloads não sofram interrupções em nenhum ambiente.",
        checks: ["Implementação de Redes Wi-Fi Mesh de alto alcance", "Organização invisível e estética de cabeamento", "Diagnóstico avançado de velocidade e cobertura"],
        limit: "A velocidade máxima entregue estará sempre dependente do plano contratado junto à sua operadora."
    },
    {
        title: "Automação Residencial e Conforto Inteligente",
        icon: "lightbulb",
        desc: "Traga a sua casa para o futuro sem obras complexas. Soluções inteligentes que trazem conforto imediato, economia de energia na fatura e segurança, tudo controlado por voz ou na palma da sua mão.",
        checks: ["Controle de iluminação e programação de climatização", "Criação de rotinas diárias automáticas (Ex: 'Bom dia')", "Integração total com Alexa, Google Assistant e Siri"],
        limit: "Focamos em soluções 'plug-and-play'. Não realizamos alterações elétricas estruturais ou instalação de módulos embutidos na parede."
    },
    {
        title: "Eletricidade Preventiva e Segurança Digital",
        icon: "wrench",
        desc: "Proteja o seu patrimônio tecnológico e a sua família. Atuamos na organização energética para evitar sobrecargas e implementamos vigilância inteligente para a sua paz de espírito onde quer que esteja.",
        checks: ["Mapeamento visual de riscos elétricos nas tomadas", "Configuração de câmeras IP para monitoramento 24h via celular", "Boas práticas e blindagem da sua rede contra invasões"],
        limit: "Qualquer redimensionamento de quadros elétricos ou alteração de alta tensão é encaminhado para parceiros eletricistas certificados."
    }
];

const planos = [
    {
        title: "Sob Demanda",
        subtitle: "Para necessidades pontuais e reparos imediatos.",
        price: "Avulso",
        priceSub: "/serviço",
        features: [
            { text: "Diagnóstico presencial ou remoto", included: true },
            { text: "Pagamento único pelo escopo aprovado", included: true },
            { text: "Garantia de 90 dias no serviço", included: true },
            { text: "Sem prioridade na fila de atendimento", included: false }
        ],
        btnText: "Solicitar Orçamento"
    },
    {
        title: "Residencial Essencial",
        subtitle: "Tranquilidade tecnológica para toda a família.",
        price: "Mensal",
        priceSub: "",
        features: [
            { text: "Suporte remoto ilimitado (dúvidas e ajustes)", included: true },
            { text: "1 Visita preventiva semestral grátis", included: true },
            { text: "Monitoramento de segurança e antivírus", included: true },
            { text: "Desconto de 20% em serviços adicionais", included: true }
        ],
        btnText: "Assinar Plano Residencial"
    },
    {
        title: "Home Office Pro",
        subtitle: "Produtividade ininterrupta para quem trabalha em casa.",
        price: "Premium",
        priceSub: "",
        features: [
            { text: "Fila prioritária (SLA de atendimento em até 4h)", included: true },
            { text: "1 Visita presencial mensal (manutenção)", included: true },
            { text: "Gerenciamento de rede Wi-Fi e estabilidade", included: true },
            { text: "Backup em nuvem configurado e monitorado", included: true }
        ],
        btnText: "Falar com Consultor"
    }
];

let selectedPlanIndex = 1;

function selectPlan(index) {
    selectedPlanIndex = index;
    renderPlanos();
}

function navigate(pageId) {
    document.querySelectorAll('.page-section').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('fade-in');
    });
    
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.remove('hidden');
        void target.offsetWidth; 
        target.classList.add('fade-in');
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn.dataset.target === pageId) {
            btn.classList.add('text-cyan-400');
            btn.classList.remove('text-slate-300');
        } else {
            btn.classList.add('text-slate-300');
            btn.classList.remove('text-cyan-400');
        }
    });

    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo(0, 0);

    if(pageId === 'simulador') {
        renderSimulatorStep(1);
    }
}

function renderTeam() {
    const container = document.getElementById('team-container');
    container.innerHTML = team.map(member => `
        <div class="bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-white/5 rounded-2xl p-6 text-center hover:-translate-y-1 hover:border-cyan-500/30 transition-all shadow-lg">
            <img src="${member.image}" alt="${member.name}" class="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-slate-700 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
            <h3 class="text-lg font-bold text-white">${member.name}</h3>
            <div class="text-xs font-semibold text-blue-400 mb-3 tracking-wide">${member.role.toUpperCase()}</div>
            <p class="text-sm text-slate-400">${member.bio}</p>
        </div>
    `).join('');
}

function renderServices() {
    const container = document.getElementById('services-container');
    container.innerHTML = services.map(srv => `
        <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group">
            <i data-lucide="${srv.icon}" class="text-blue-400 w-10 h-10 mb-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"></i>
            <h3 class="text-2xl font-bold text-white mb-3">${srv.title}</h3>
            <p class="text-slate-400 mb-6 leading-relaxed">${srv.desc}</p>
            <div class="space-y-3 mb-6">
                ${srv.checks.map(chk => `<div class="flex items-start gap-2 text-sm text-slate-300"><i data-lucide="check-circle" class="w-5 h-5 shrink-0 text-emerald-400"></i> <span class="pt-0.5">${chk}</span></div>`).join('')}
            </div>
            ${srv.limit ? `<div class="mt-4 p-4 bg-slate-950/50 rounded-xl border border-slate-700/50 text-xs text-slate-400 leading-relaxed"><strong class="text-slate-300 uppercase tracking-wider block mb-1">Limite Técnico AVANTE:</strong> ${srv.limit}</div>` : ''}
        </div>
    `).join('');
}

function renderPlanos() {
    const container = document.getElementById('planos-container');
    if (!container) return;

    container.innerHTML = planos.map((plano, index) => {
        const isSelected = index === selectedPlanIndex;
        
        const baseClasses = isSelected 
            ? "bg-gradient-to-b from-slate-800 to-slate-900 border border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)] transform md:-translate-y-4 scale-105 z-10 opacity-100" 
            : "bg-slate-800/40 border border-slate-700/50 shadow-inner hover:border-slate-500 hover:-translate-y-1 opacity-60 hover:opacity-100 scale-95 hover:scale-100";

        const badgeHtml = isSelected 
            ? `<div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">Selecionado</div>` 
            : '';

        const iconClass = isSelected ? "check-circle" : "check";
        const iconColor = isSelected ? "text-blue-400" : "text-emerald-500";
        
        const btnClass = isSelected 
            ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25" 
            : "bg-slate-700 hover:bg-slate-600 text-white";

        return `
            <div onclick="selectPlan(${index})" class="rounded-3xl p-8 relative transition-all duration-500 cursor-pointer ${baseClasses}">
                ${badgeHtml}
                <h3 class="${isSelected ? 'text-2xl' : 'text-xl'} font-bold text-white mb-2 transition-all">${plano.title}</h3>
                <p class="text-slate-400 text-sm mb-6">${plano.subtitle}</p>
                <div class="text-4xl font-black text-white mb-6">${plano.price}<span class="text-lg text-slate-500 font-normal">${plano.priceSub}</span></div>
                <ul class="space-y-4 mb-8 text-slate-300 text-sm">
                    ${plano.features.map(f => `
                        <li class="flex items-start gap-3 ${f.included ? '' : 'opacity-40'}">
                            <i data-lucide="${f.included ? iconClass : 'x'}" class="${f.included ? iconColor : 'text-slate-500'} w-5 h-5 shrink-0 transition-colors"></i> 
                            ${f.text}
                        </li>
                    `).join('')}
                </ul>
                <button onclick="event.stopPropagation(); navigate('simulador')" class="w-full py-3 rounded-xl font-medium transition-all ${btnClass}">${plano.btnText}</button>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

let simData = { service: '', name: '', phone: '' };

function renderSimulatorStep(step) {
    const container = document.getElementById('simulator-content');
    
    document.getElementById('step1-bar').className = `h-2 flex-1 rounded-full ${step >= 1 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-slate-700'}`;
    document.getElementById('step2-bar').className = `h-2 flex-1 rounded-full ${step >= 2 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-slate-700'}`;
    document.getElementById('step3-bar').className = `h-2 flex-1 rounded-full ${step >= 3 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-700'}`;

    if (step === 1) {
        const options = ['Informática e Hardware', 'Infraestrutura de Redes', 'Automação Residencial', 'Treinamento Personalizado', 'Assinatura de Planos'];
        container.innerHTML = `
            <div class="space-y-4 fade-in">
                <h3 class="text-lg font-semibold text-white mb-4">1. Qual o seu principal interesse?</h3>
                ${options.map((opt) => `
                    <label class="flex items-center p-4 border border-slate-700 rounded-xl cursor-pointer hover:bg-slate-700/50 transition-colors">
                        <input type="radio" name="sim_service" value="${opt}" onchange="simData.service=this.value" ${simData.service===opt?'checked':''} class="w-5 h-5 text-blue-500 bg-slate-900 border-slate-600">
                        <span class="ml-3 text-slate-200">${opt}</span>
                    </label>
                `).join('')}
                <button onclick="simData.service ? renderSimulatorStep(2) : alert('Selecione uma opção')" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-all">Continuar</button>
            </div>
        `;
    } else if (step === 2) {
        container.innerHTML = `
            <div class="space-y-4 fade-in">
                <h3 class="text-lg font-semibold text-white mb-4">2. Detalhes de Contato</h3>
                <div>
                    <label class="block text-sm text-slate-400 mb-1">Nome Completo</label>
                    <input type="text" id="sim_name" value="${simData.name}" onkeyup="simData.name=this.value" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500" placeholder="Seu nome">
                </div>
                <div>
                    <label class="block text-sm text-slate-400 mb-1">Telefone / WhatsApp</label>
                    <input type="text" id="sim_phone" value="${simData.phone}" onkeyup="simData.phone=this.value" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500" placeholder="(  ) _____-____">
                </div>
                <div class="flex gap-3 mt-6">
                    <button onclick="renderSimulatorStep(1)" class="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-medium transition-all">Voltar</button>
                    <button onclick="(simData.name && simData.phone) ? renderSimulatorStep(3) : alert('Preencha os campos')" class="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-all">Avançar</button>
                </div>
            </div>
        `;
    } else if (step === 3) {
        container.innerHTML = `
            <div class="text-center py-8 fade-in">
                <div class="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                    <i data-lucide="check" class="w-8 h-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Simulação Concluída!</h3>
                <p class="text-slate-400 mb-8">Esta é uma demonstração. Em uma versão real, a proposta para <strong>${simData.service}</strong> em nome de <strong>${simData.name}</strong> seria enviada para a equipe da AVANTE.</p>
                <button onclick="simData={service:'',name:'',phone:''}; navigate('home')" class="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-xl font-medium transition-all">Voltar ao Início</button>
            </div>
        `;
    }
    
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    renderTeam();
    renderServices();
    renderPlanos();
    lucide.createIcons();
});