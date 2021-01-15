const btns = document.querySelectorAll('.about-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

about.addEventListener('click', (e) =>{
  const id = e.target.dataset.id;
  if(id){
    btns.forEach((btn) =>{
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    contents.forEach((content) =>{
      content.classList.remove('active');
    })
    const ele = document.getElementById(id)
    ele.classList.add('active')
  }
})