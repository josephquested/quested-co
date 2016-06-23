var app = document.getElementById('app')
var page = 'home'

var links = Array.from(document.getElementsByClassName('nav-link'))
for (key in Object.keys(links)) {
  links[key].addEventListener("click", changePage)
}

 function changePage (e) {
  emptyNode(app)
  page = e.target.innerHTML
  switch (page) {
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

function appendNode (node, text) {
  var p = document.createElement(node)
  var textNode = document.createTextNode(text)
  p.appendChild(textNode);
  app.appendChild(p);
}

function emptyNode (node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function renderHome () {
  appendNode('h2', 'home')
}

function renderGames () {
  appendNode('h2', 'games')
}

function renderContact () {
  appendNode('h2', 'contact')
}
