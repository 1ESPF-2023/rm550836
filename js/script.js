// recuperando o botão com o getElementById()

// const botao = document.getElementById('btn-1')

// Recuperar um item específico com a 
// função querySelectorAll(parâmetro)

// const seletores = document.querySelectorAll("li")

// seletores.forEach((item)=>{

//   if(item.textContent === 'Item-2'){

//   let meuItem = item;

//   console.log(`Items selecionados: ${item.textContent}`);
//   meuItem.textContent = 'Tá Dominado!';
//   }
// },
// );

// setTimeOut
// setInterval
// Random
// Math.ceil
// Math.random
// Math.floor

let tmp = "";

// function changeColor(){
//   let r = 0;
//   let g = 0;
//   let b = 0;

//   r =Math.round(Math.random() * 255);
//   g = Math.round(Math.random() * 255);
//   b = Math.round(Math.random() * 255);
  
//   const cabecalho = document.querySelector(".cabecalho");
  
//   cabecalho.style.backgroundColor = `rgb(${r},${g}, ${b})`;
  
//   tmp = setTimeout(changeColor, 1000);
// };
// changeColor();


// this

function rotateBanner() {
  const img1 = document.querySelector('.banner-1 img');
  let nr = Math.ceil(Math.random() * 3);
  img1.src = `../img/banner-lateral-${nr}.png`;
  const img2 = document.querySelector('.banner-2 img');
  nr = Math.ceil(Math.random() * 3);
  img2.src = `../img/banner-lateral-${nr}.png`;
  setTimeout(rotateBanner, 1000);
}
rotateBanner()


const button = document.querySelector('.conteudo button');
const bulb = document.querySelector('.conteudo img')

button.addEventListener('click', function(){
  if (this.textContent === 'Ligar'){
    bulb.src = '../img/pic_bulbon.gif'
    bulb.alt = 'Lampada acesa'
    button.textContent = 'Desligar' 
  } else {
    bulb.src = '../img/pic_bulboff.gif';
    bulb.alt = 'Lampada apagada';
    button.textContent = 'Ligar';
  }
  
})

const botoes = document.querySelectorAll('button');
let bt = '';
botoes.forEach((botao) =>{
  if (botao.textContent === 'Ligar'){
    bt = botao
  };
});
console.log(bt);