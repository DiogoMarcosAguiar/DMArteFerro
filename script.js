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