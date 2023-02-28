const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Aqui você pode enviar os dados do formulário para um servidor ou fazer o que quiser com eles
  console.log('Nome:', nome);
  console.log('E-mail:', email);
  console.log('Senha:', senha);

  // Aqui você pode redirecionar o usuário para outra página ou exibir uma mensagem de sucesso
});
