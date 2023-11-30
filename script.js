//criei uma função pra adicionar novas tarefas na lista aqui
function add() {
  //criei o elemento dos itens da lista (li)
  let li = document.createElement("LI");
  //aqui pega o "valor" que foi escrito no formulário
  let input_value = document.form_main.task.value;
  let input_text = document.createTextNode(input_value);

  li.appendChild(input_text);
  document.querySelector("ul").appendChild(li);
  document.form_main.task.value = "";
  //aqui criei um botão de fechar pra cada elemento colocado na lista
  createCloseButton(li);
}
//aqui é a função do botão de fechar
function createCloseButton(li) {
  // criei um span que esconde o elemento
  let span = document.createElement("SPAN");
  // aqui é o "x" que aparece em todos os elementos da lista, e que faz o elemento ser escondido ao clicar
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = () => (span.parentElement.style.display = "none");
}

document.querySelectorAll("li").forEach(createCloseButton);

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
});
