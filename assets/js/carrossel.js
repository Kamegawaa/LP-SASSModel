document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.fidelity-gallery__carroussel');
    const imagens = document.querySelectorAll('.fidelity-gallery-img');
    const totalImagens = imagens.length;
    let indiceAtual = 0;
    let intervalo;
  
    // Posicionamento inicial
    const posicionarImagens = () => {
      imagens.forEach((img, index) => {
        const posicao = (index - indiceAtual + totalImagens) % totalImagens;
        img.style.transform = `translateX(${posicao * 120}%) scale(${posicao === 1 ? 1.1 : 0.9})`;
        img.style.zIndex = posicao === 1 ? 2 : 1;
      });
    };
  
  
    // Inicialização
    const iniciarCarrossel = () => {
      posicionarImagens();
      
      // Auto-play
      intervalo = setInterval(() => {
        indiceAtual = (indiceAtual + 1) % totalImagens;
        posicionarImagens();
      }, 5000);
  
      // Pausa no hover
      carrossel.addEventListener('mouseenter', () => clearInterval(intervalo)
    );
      carrossel.addEventListener('mouseleave', () => {
        intervalo = setInterval(() => {
          indiceAtual = (indiceAtual + 1) % totalImagens;
          posicionarImagens();
        }, 3000);
      });
    };
  
    iniciarCarrossel();
  });