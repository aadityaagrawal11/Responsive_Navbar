console.log('JS IS RUNNING');

const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', () => {
  console.log("Button isCL");
  ul.classList.toggle('ham_active');

  let ham_child = hamburger.firstElementChild;
  if(ul.classList.contains('ham_active')){
    ham_child.classList.replace('fa-bars','fa-xmark');
  }
  else{
    ham_child.classList.replace('fa-xmark','fa-bars');
  }
});
