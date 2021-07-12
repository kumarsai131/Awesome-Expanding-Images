let images = document.querySelectorAll(".image")
console.log(images)
images.forEach(e =>{
    e.addEventListener('click',()=>{
        removeClass()
        e.classList.add('active')
    })
})

function removeClass(){
    images.forEach(e =>{
        e.classList.remove('active');
    })
}
var heading = document.querySelector('h1')
document.getElementById("one").addEventListener('click',function(){
    heading.innerText = "Lucifer Morningstar";
    heading.style.color = "red";
})
document.getElementById("2").addEventListener('click',function(){
    heading.innerText = "Thomas Shelby";
    heading.style.color = "black";
})
document.getElementById("3").addEventListener('click',function(){
    heading.innerText = "Dexter Morgan";
    heading.style.color = "#483D8B";
})
document.getElementById("4").addEventListener('click',function(){
    heading.innerText = "Daenerys Targaryen & Jon Snow";
    heading.style.color = "#e25822";
})
document.getElementById("5").addEventListener('click',function(){
    heading.innerText = "Daredevil";
    heading.style.color = "red";
})