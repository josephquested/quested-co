var app = document.getElementById('app')
var page = 'home'

var changePage = function (newPage) {
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
