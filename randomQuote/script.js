



 const quote=document.querySelector('.quote');

const quoteBtn=document.querySelector("#btnc");
const aname=document.querySelector('.name'),
sound=document.querySelector('.sound')

const api="http://api.quotable.io/random"

const randomq1=()=>{
    fetch("http://api.quotable.io/random").then(res =>res.json()).then(result =>{
    quote.innerText=result.content;
    aname.innerText=result.author;
})}



quoteBtn.addEventListener('click',randomq1)
copy=addEventListener('click',()=>{
   var copyText=quote;
navigator.clipboard.writeText( quote.innerText);
("Copied")
})
