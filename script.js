let quoteMachine = function(){
   let quote;
   let author;
   let img
   fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    quote = myJson[0].quote;
    author = myJson[0].character;
    img = myJson[0].image
    document.getElementById("quotes").textContent = quote;
    document.getElementById("author").textContent = `Author: ${author}`
    document.getElementById('img').src = `${img}`
   
  });
}

quoteMachine()

