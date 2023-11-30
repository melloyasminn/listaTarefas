//cria uma função pra adicionar novas tarefas na lista aqui
function add() {
  //cria o elemento dos itens da lista (li)
  let li = document.createElement("li");
  //aqui pega o "valor" que foi escrito no formulário
  let input_value = document.form_main.task.value;
  let input_text = document.createTextNode(input_value);

  li.appendChild(input_text);
  document.querySelector("ul").appendChild(li);
  document.form_main.task.value = "";
  //aqui cria um botão de fechar pra cada elemento colocado na lista
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
//aqui faz o item da lista, quando clicado no "x" sumir
  span.onclick = () => (span.parentElement.style.display = "none");
}


document.querySelectorAll("li").forEach(createCloseButton);
//quando clica no elemento da lista, faz com que ele apareça riscado como tarefa feita0
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "li") e.target.classList.toggle("checked");
});
