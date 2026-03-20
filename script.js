function escolha(opcao) {
    let titulo = document.getElementById("title");
    let imagem = document.getElementById("scene-img");
    let historia = document.getElementById("story");
    let botoes = document.querySelectorAll(".choice");

    if (opcao === "esquerda") {
        titulo.innerText = "Você encontrou Lorde Valdemir";
        imagem.src = "camerasecreta.png";
        historia.innerText = "Lorde Valdemir quer bater uma foto sua com sua câmera secreta e te cancelar na internet!";
        botoes[0].innerText = "Tentar se esquivar";
        botoes[0].setAttribute("onclick","escolha('esquivar')");
        botoes[1].innerText = "Usar um espelho contra a câmera";
        botoes[1].setAttribute("onclick","escolha('espelho')");
    }
    else if (opcao === "direita") {
        titulo.innerText = "Você encontrou o Sócrates de IA!";
        imagem.src = "socrates.png";
        historia.innerText = "Ele pergunta: Por quais razões quando se oferece a um prisioneiro um pão e uma chave o prisioneiro acaba por escolher o pão?";
        botoes[0].innerText = "Pois é da natureza humana preferir aquilo que oferece prazer imediato, algo simples, acessível e recompensador no curto prazo — como comer um pão, saciar a fome ou buscar conforto rápido — em vez de investir tempo, esforço e paciência em algo mais distante, abstrato e, muitas vezes, entediante no presente. No entanto, esse “algo distante” pode carregar um valor muito maior no longo prazo, como uma chave que, embora pareça insignificante ou pouco interessante à primeira vista, é justamente o instrumento que abre portas, que concede liberdade, autonomia e possibilidades que não existiriam sem ela.";
        botoes[0].setAttribute("onclick","escolha('explicacao')");
        botoes[1].innerText = "Pois o pão tem mais SABOR doque a chave";
        botoes[1].setAttribute("onclick","escolha('sabor')");
    }
    else if (opcao === "esquivar") {
        titulo.innerText = "Cancelado";
        imagem.src = "final-ruim1.png";
        historia.innerText = "Valdemir conseguiu bater sua foto e fazer um exposed de você no youtube. Você foi cancelado.";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if (opcao === "espelho") {
        titulo.innerText = "Valdemir Cancelado";
        imagem.src = "final-bom1.png";
        historia.innerText = "Quando foi bater a foto, o espelho refletiu Valdemir e foi ele que foi cancelado pela câmera secreta. Valdemir foi cancelado.";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if (opcao === "explicacao") {
        titulo.innerText = "Virou beta";
        imagem.src = "final-ruim2.png";
        historia.innerText = "No meio de sua explicação absurdamente grande, Sócrates te chamou de betinha por falar por tanto tempo e roubou toda sua aura, e você virou beta.";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if (opcao === "sabor") {
        titulo.innerText = "Muito sigma";
        imagem.src = "final-bom2.png";
        historia.innerText = "Sócrates de IA ficou tão surpreendido que virou uma pilha de batatas e você roubou toda a aura dele. Você é muito sigma.";
        botoes.forEach(botao => botao.style.display = "none");
    }
        else if (opcao === "secreto") {
        titulo.innerText = "FESTA DO GNOMO DA BAHIA";
        imagem.src = "final-secreto.png";
        historia.innerText = "VOCÊ ACHOU A FESTA DO GNOMO DA BAHIA E VIROU MUITO SIGMA. +1000 DE AURA.";
        botoes.forEach(botao => botao.style.display = "none");
    }
}