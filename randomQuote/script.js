



 const quote=document.querySelector('.quote'),
quoteBtn=document.querySelector("#btnc");
aname=document.querySelector('.name')
function  randomq(){
fetch("http://api.quotable.io/random").then(res =>res.json()).then(result =>{
quote.innerText=result.content;
aname.innerText=result.author;

})
}
quoteBtn.addEventListener('click',randomq)