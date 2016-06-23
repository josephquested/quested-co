var app = document.getElementById('app')
changePage({target: {innerHTML: 'home'}})

var links = document.getElementsByClassName('nav-link')
for (key in Object.keys(links)) {
  links[key].addEventListener("click", changePage)
}

function changePage (e) {
  emptyNode(app)
  switch (e.target.innerHTML) {
    case "home":
      renderHome()
      break
    case "games":
      renderGames()
      break
    case "contact":
      renderContact()
      break
  }
}

function appendNode (parent, node, text) {
  var newNode = document.createElement(node)
  var textNode = document.createTextNode(text)
  newNode.appendChild(textNode);
  parent.appendChild(newNode);
}

function emptyNode (node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function renderHome () {
  appendNode(app, 'h2', 'home')
}

function renderGames () {
  appendNode(app, 'h2', 'games')
}

function renderContact () {
  appendNode(app, 'h2', 'contact')
  appendNode(app, 'p', 'josephquested@gmail.com')
  appendNode(app, 'p', '021647472')
}
