document.addEventListener('scroll',()=>{
    const navv=document.querySelector('nav');
  


    if(window.scrollY>0){
        navv.classList.add('scrolled');
    }
    else{
        navv.classList.remove('scrolled');
    }
})