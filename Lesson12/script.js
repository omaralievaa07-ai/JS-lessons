let array=[
    {
        id:1,
        title:"BESTSELLER",
        image:"../image/p1.png",
        desc:"Trendy models of our experts, for the love of your life selected",
        price:100
    },
     {
        id:2,
        title:"SOLITAIRE",
        image:"../image/p1.png",
        desc:"Trendy models of our experts, for the love of your life selected",
        price:200
    },
     {
        id:3,
        title:"PLATINUM",
        image:"../image/p1.png",
        desc:"Trendy models of our experts, for the love of your life selected",
        price:300
    },
     {
        id:4,
        title:"CHEAP",
        image:"../image/p1.png",
        desc:"Trendy models of our experts, for the love of your life selected",
        price:100
    },
];

let products =document.querySelector('.products')
let show = array.map((item) => {
    return`
        <div class="cart">
            <img src="./image/logo.png" alt="">
            <h3>BESTSELLER</h3>
            <P>Trendy models of our experts, for the love of your life selected</P>
            <button>Discover now</button>
        </div>
    `
})
products.innerHTML = show.join('');

// ----------------------------------------------------------------

let openbtn = document.getElementById("open")
let modal = document.querySelector('.modal')

openbtn.onclick = function() {
    modal.style.display = 'block'
}
