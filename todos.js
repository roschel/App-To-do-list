var listElement=document.querySelector('#app ul')
var inputElement=document.querySelector('#app input')
var buttonElement=document.querySelector('#app button')

/* var todos=[
  'Fazer café',
  'Estudar Javascript',
  'Acessar a comunidade da Rosckeseat'
]; */

var todos=JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  //limpa os itens que estão no html
  listElement.innerHTML='';

  for(todo of todos){
    //cria elemento lista
    var todoElement=document.createElement('li');
    //coloca os textos do array 'todos' nos elementos de lista criados
    var todoText = document.createTextNode(todo);

    //Cria link para 'excluir'
    var linkElement=document.createElement('a');
    //Adiciona o style de link
    linkElement.setAttribute('href','#')

    //verifica a posição do elemento da lista
    var pos=todos.indexOf(todo);


    //atribui o método para excluir o elemento
    linkElement.setAttribute('onclick','deleteTodo('+pos+')')
    
    //cria o texto exluir
    var linkText=document.createTextNode('Excluir')

    //coloca o texto no link
    linkElement.appendChild(linkText);

    //adiciona o texto dos elementos dentro do 'li'
    todoElement.appendChild(todoText)
    todoElement.appendChild(linkElement)

    listElement.appendChild(todoElement)
  }
}
renderTodos();

function addTodo(){
  var todoText=inputElement.value;

  if(todoText!=''){
  todos.push(todoText);
  inputElement.value='';
  renderTodos();
  saveToStorage();
  }
}

buttonElement.onclick=addTodo;

function deleteTodo(pos){
  todos.splice(pos,1);
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('list_todos',JSON.stringify(todos));
}