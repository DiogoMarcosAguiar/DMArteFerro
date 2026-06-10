let carrinho = [];

function addCarrinho(nome, preco){
  carrinho.push({nome, preco});
  atualizarContador();
  alert("Produto adicionado!");
}

function atualizarContador(){
  document.getElementById("contador").innerText = carrinho.length;
}

function verCarrinho(){
  if(carrinho.length === 0){
    alert("Carrinho vazio!");
    return;
  }

  let texto = "Seu carrinho:\n\n";
  let total = 0;

  carrinho.forEach((item, index) => {
    texto += `${index + 1} - ${item.nome} - R$${item.preco}\n`;
    total += item.preco;
  });

  texto += `\nTotal: R$${total}`;
  texto += `\n\nDigite o número do item para remover`;

  let escolha = prompt(texto);

  if(escolha !== null){
    let index = parseInt(escolha) - 1;

    if(carrinho[index]){
      carrinho.splice(index, 1);
      atualizarContador();
      alert("Item removido!");
    }
  }
}

function abrirModal(img){
  const modal = document.getElementById("modal");
  const imgModal = document.getElementById("imgModal");

  modal.style.display = "block";
  imgModal.src = img.src;
}

function fecharModal(){
  document.getElementById("modal").style.display = "none";
}

function finalizarCompra(){
  if(carrinho.length === 0){
    alert("Carrinho vazio!");
    return;
  }

  let mensagem = "Olá, quero fazer um pedido:%0A%0A";
  let total = 0;

  carrinho.forEach(item => {
    mensagem += `- ${item.nome} - R$${item.preco}%0A`;
    total += item.preco;
  });

  mensagem += `%0ATotal: R$${total}`;

  window.open(`https://wa.me/5511984416554?text=${mensagem}`, "_blank");
}

let index = 0;

function mostrarSlide(i) {
  const slides = document.querySelector('.slides');
  const total = document.querySelectorAll('.slide').length;

  if(i >= total) index = 0;
  else if(i < 0) index = total - 1;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').onclick = () => mostrarSlide(index + 1);
document.querySelector('.prev').onclick = () => mostrarSlide(index - 1);

// AUTO PLAY (opcional)
setInterval(() => {
  mostrarSlide(index + 1);
}, 4000);

let produtoAtual = null;

function abrirModalCarrossel(img, nome, preco){
  document.getElementById("modalCarrossel").style.display = "block";
  document.getElementById("imgCarrosselZoom").src = img.src;

  produtoAtual = { nome, preco };
}

function fecharModalCarrossel(){
  document.getElementById("modalCarrossel").style.display = "none";
}

function adicionarDoCarrossel(){
  if(produtoAtual){
    addCarrinho(produtoAtual.nome, produtoAtual.preco);
    fecharModalCarrossel();
  }
}

let musicaIniciada = false;

document.addEventListener("click", function(){
  if(!musicaIniciada){
    const musica = document.getElementById("musicaFundo");
    musica.volume = 0.2; // volume baixo (0.0 a 1.0)
    musica.play();
    musicaIniciada = true;
  }
});

function toggleMusica(){
  const musica = document.getElementById("musicaFundo");
  const btn = document.querySelector(".btn-musica");

  if(musica.paused){
    musica.play();
    btn.innerText = "🔊";
  } else {
    musica.pause();
    btn.innerText = "🔇";
  }
}

function toggleCategoria(idCategoria) {
  // Pega o bloco de conteúdo correspondente
  var conteudo = document.getElementById('cat-' + idCategoria);
  var seta = document.getElementById('seta-' + idCategoria);
  
  // Se estiver escondido, mostra. Se estiver visível, esconde.
  if (conteudo.style.display === "block") {
    conteudo.style.display = "none";
    seta.style.transform = "rotate(0deg)"; // Seta aponta pra baixo
  } else {
    conteudo.style.display = "block";
    seta.style.transform = "rotate(180deg)"; // Seta vira pra cima
  }
}

// Pega o modal e os elementos internos
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("imgFull");
var span = document.getElementsByClassName("close-modal")[0];

// Adiciona um ouvinte de clique em TODAS as imagens com a classe 'img-catalogo'
document.querySelectorAll('.img-catalogo').forEach(item => {
  item.addEventListener('click', event => {
    // Ao clicar, mostra o modal
    modal.style.display = "block";
    // Define a imagem do modal como a imagem que foi clicada
    modalImg.src = event.target.src;
  })
})

// Quando o usuário clica no 'X', fecha o modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora da imagem, fecha o modal
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}