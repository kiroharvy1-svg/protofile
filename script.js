function toggleMenu() {
  const menu = document.getElementById("nav-links");
  menu.classList.toggle("active");
}
const container = document.getElementById('container');

for (let i = 0; i < 30; i++) { 
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    

    bubble.style.position = 'absolute' ;

    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.top = Math.random() * 100 + "%";
    
   
    let size = Math.random() * 50 + 20 + "px";
    bubble.style.width = size;
    bubble.style.height = size;
    
    bubble.style.animationDuration = Math.random() * 10 + 10 + "s";
    
    container.appendChild(bubble);
}