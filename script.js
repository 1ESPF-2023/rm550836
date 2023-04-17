// recuperando o botão com o getElementById()

const botao = document.getElementById('btn-1')

// Recuperar um item específico com a 
// função querySelectorAll(parâmetro)

const seletores = document.querySelectorAll("li")

seletores.forEach((item)=>{

  if(item.textContent === 'Item-2'){

  let meuItem = item;

  console.log(`Items selecionados: ${item.textContent}`);
  meuItem.textContent = 'Tá Dominado!';
  }
},
);

// setTimeOut
// setInterval
// Random
// Math.ceil
// Math.random
// Math.floor