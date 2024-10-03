// Rolagem

let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
	let scrollTop = window.scrollY
	
	if(scrollTop > 0){
		navBar.classList.add('rolar')
	} else {
		navBar.classList.remove('rolar')
	}
})

// Fim rolagem

// SubMenu

document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function (e) {
      e.preventDefault();
      var dropdownMenu = this.querySelector('.dropdown-menu');
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
  });
  
//   Curtida dos Atletas

  const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
  heart.addEventListener('click', function() {
    if (heart.textContent === '♡') {
      heart.textContent = '❤'; // Substitui o coração vazio pelo preenchido
      heart.classList.add('red'); // Adiciona a classe para mudar a cor
    } else {
      heart.textContent = '♡'; // Volta para o coração vazio
      heart.classList.remove('red'); // Remove a classe de cor vermelha
    }
  });
});

// Efeito Ondas

var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 4 +'px'
    onda2.style.backgroundPositionX = 300 + rolagemPos * -4 +'px'
    onda3.style.backgroundPositionX = 200 + rolagemPos * 2 +'px'
    onda4.style.backgroundPositionX = 100 + rolagemPos * -2 +'px'
})


