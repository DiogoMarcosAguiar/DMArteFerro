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

  let mensagem = "Olá, quero comprar:\n\n";
  let total = 0;

  carrinho.forEach(item => {
    mensagem += `- ${item.nome} R$${item.preco}\n`;
    total += item.preco;
  });

  mensagem += `\nTotal: R$${total}`;

  let url = "https://wa.me/5511984416554?text=" + encodeURIComponent(mensagem);

  window.open(url, "_blank");
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