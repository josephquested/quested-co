var app = document.getElementById('app')
var page = 'home'

var links = Array.from(document.getElementsByClassName('nav-link'))
for (key in Object.keys(links)) {
  links[key].addEventListener("click", changePage)
}

 function changePage (e) {

  console.log(e.target.innerHTML)
  emptyNode(app)
  page = newPage

  switch (page) {
    case "home":
      renderHome()
      break
    case "games":
      renderGames()
      break
    case "games":
      renderContact()
      break
  }
}

var emptyNode = function (node) {
  while (node.firstChild) {
    node.removeChild(myNode.firstChild);
  }
}

var renderHome = function () {
  console.log('home!')
}

var renderGames = function () {
  console.log('games!')
}

var renderHome = function () {
  console.log('contact!')
}
