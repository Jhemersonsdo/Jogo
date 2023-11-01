document.getElementById('esquerda').addEventListener('click', () => {
    document.querySelector('.story').textContent = 'Você escolheu ir para a esquerda. Você encontra um rio e uma ponte. O que você faz?';
    document.getElementById('esquerda').textContent = 'Cruzar a ponte';
    document.getElementById('direita').textContent = 'Voltar para a floresta';
  });
  
  document.getElementById('direita').addEventListener('click', () => {
    document.querySelector('.story').textContent = 'Você escolheu entrar na caverna. Dentro da caverna, você encontra um tesouro. Parabéns, você venceu!';
    document.getElementById('esquerda').style.display = 'none';
    document.getElementById('direita').style.display = 'none';
  });
  