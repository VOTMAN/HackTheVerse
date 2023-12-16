const product = [
    {
        id: 0,
        image: '../imgs/tshirt.jpg',
        title: 'op t shirt',
        price: 120,
    },
    {
        id: 1,
        image: '../imgs/laptop.webp',
        title: 'hp laptop',
        price: 60,
    },
    {
        id: 2,
        image: '../imgs/photo3.avif',
        title: '250D',
        price: 230,
    },
    {
        id: 3,
        image: '../imgs/photo.jpg',
        title: 'Head Phones',
        price: 100,

    },
    {
        id: 4,
        image: '../imgs/jacket.jpg',
        title: 'jacket',
        price: 100,

    },
    {
        id: 5,
        image: '../imgs/pant.jpg',
        title: 'pant',
        price: 100,

    },
    {
        id: 6,
        image: '../imgs/b1.jpg',
        title: 'bang',
        price: 57,

    },
    {
        id: 7,
        image: '../imgs/b2.webp',
        title: 'webp',
        price: 57,

    },
    {
        id: 8,
        image: '../imgs/b3.webp',
        title: 'webp',
        price: 57,

    },
    
    {
        id: 9,
        image: '../imgs/e1.jpg',
        title: 'orange',
        price: 85,

    },
    {
        id: 10,
        image: '../imgs/e2.jpg',
        title: 'orange',
        price: 70,

    }, 
    {
        id: 11,
        image: '../imgs/e3.jpg',
        title: 'orange',
        price: 69,

    },
    {
        id: 12,
        image: '../imgs/g1.jpg',
        title: 'oil',
        price: 59,

    },
    {
        id: 13,
        image: '../imgs/g2.webp',
        title: 'oil',
        price: 229,

    },
    {
        id: 14,
        image: '../imgs/g3.webp',
        title: 'oil',
        price: 39,

    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}