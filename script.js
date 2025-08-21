// Dados dos problemas de saúde (poderiam ser carregados de uma API no futuro)
const healthProblems = [
    {
        title: "1. Falta de Médicos Especializados",
        description: "Segundo o IBGE, municípios pequenos como São Jorge do Ivaí sofrem com a carência de profissionais de saúde especializados. Muitos moradores precisam se deslocar para cidades como Maringá para consultas.",
        source: "Fonte: IBGE - Censo Demográfico e Pesquisa de Assistência Médico-Sanitária"
    },
    {
        title: "2. Saneamento Básico Precário",
        description: "De acordo com a Agência Nacional de Águas (ANA), parte da população rural ainda não tem acesso adequado a água tratada e esgoto, aumentando riscos de doenças.",
        source: "Fonte: ANA - Atlas Esgotos e Sistemas de Água"
    },
    {
        title: "3. Dependência do SUS e Longas Filas",
        description: "O município possui apenas unidades básicas de saúde (UBS), sem hospitais de grande porte. Pacientes enfrentam longas esperas para exames e procedimentos.",
        source: "Fonte: IBGE - Perfil dos Municípios Brasileiros"
    },
    {
        title: "4. Falta de Investimento em Saúde Preventiva",
        description: "Programas de prevenção a doenças crônicas (diabetes, hipertensão) e campanhas de vacinação poderiam ser mais eficientes, segundo relatórios locais.",
        source: "Fonte: Dados secundários do Ministério da Saúde via IBGE"
    }
];

// Função para carregar os problemas na página
function loadProblems() {
    const container = document.getElementById('problems-container');

    healthProblems.forEach(problem => {
        const problemBox = document.createElement('div');
        problemBox.className = 'problem-box';

        problemBox.innerHTML = `
            <h2>${problem.title}</h2>
            <p>${problem.description}</p>
            <div class="source">${problem.source}</div>
        `;

        container.appendChild(problemBox);
    });
}

// Carrega os problemas quando a página é aberta
window.onload = loadProblems;
