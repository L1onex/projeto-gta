/* 
Objetivo 1 - quando o usuario clicar no botao de seleção de plataformas deve abrir uma caixa com botões de seleção de plataforma
    Passo 1 - pegar o botao de seleçao de plataformas no js pra poder verificar quando o usuario clicar em cima dele

    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo apareça 

Objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

     Passo 1 - verificar se o botão esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/
// Objetivo 1 - quando o usuario clicar no botao de seleção de plataformas deve abrir uma caixa com botões de seleção de plataforma
    // Passo 1 - pegar o botao de seleçao de plataformas no js pra poder verificar quando o usuario clicar em cima dele
   const botao = document.querySelector(".btn-plataforma");

   //Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
   const elementoplataformas = document.querySelector(".btn-plataforma .plataformas");

   //Passo 3 - pegar o clique do usuario no js


   //Passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo apareça
   botao.addEventListener("click", () => {
    
   //Objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

   //Passo 1 - verificar se o botão esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
   elementoplataformas.classList.toggle("ativo")
   })



 