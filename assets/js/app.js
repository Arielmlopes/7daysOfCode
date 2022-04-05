const botaoMenu = document.querySelector('#buttonMenu');
const navList = document.querySelector('.nav-list');
const botaoMenuFechar = document.querySelector('#buttonMenuFechar')

function abirnavmenu(e){
  const ativado =  navList.classList.toggle('active')
  if(ativado == true){
      botaoMenu.style.display = 'none'
      botaoMenuFechar.style.display = 'block'

  }else{
    botaoMenu.style.display = 'block'
      botaoMenuFechar.style.display = 'none'

  }
}
botaoMenuFechar.addEventListener('click',abirnavmenu)
botaoMenu.addEventListener('click',abirnavmenu)