const nomeInput= document.getElementById("nome");
const emailInput= document.getElementById("email");
const telefoneInput= document.getElementById("telefone");
const comentarioInput= document.getElementById("comentario");



function valoresInput(){
    const nome = localStorage.getItem('nome')
    const email = localStorage.getItem('email')
    const telefone = localStorage.getItem('telefone')
    const comentario = localStorage.getItem('comentario');

  if (nome) nomeInput.value = nome;
  if (email) emailInput.value = email;
  if (telefone) telefoneInput.value = telefone;
  if (comentario) comentarioInput.value = comentario;

}

function salvarValores() {
    localStorage.setItem('nome', nomeInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('telefone', telefoneInput.value);
    localStorage.setItem('comentario', comentarioInput.value);
  }
  

  document.addEventListener('DOMContentLoaded', valoresInput);
  

  nomeInput.addEventListener('input', salvarValores);
  emailInput.addEventListener('input', salvarValores);
  telefoneInput.addEventListener('input', salvarValores);
  comentarioInput.addEventListener('input', salvarValores);