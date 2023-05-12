const product = [
    {
        id: 0,
        title: 'Tress of the Esmerald Sea',
        price: 29,
    },
    {
        id: 1,
        image: 'images/newbooks/children-of-dune.jpg',
        title: 'Children of Dune',
        price: 38,
    },
    {
        id: 2,
        title: 'Dune Messiah',
        price: 9,
    },
    {
        id: 3,
        title: 'In The Lives Of Puppets',
        price: 18,
    },
    {
        id: 4,
        title: 'One For My Enemy',
        price: 26,
    },
    {
        id: 5,
        title: 'The Blood Gift',
        price: 32,
    },
    {
        id: 6,
        title: 'The Half Moon',
        price: 28,
    },
    {
        id: 7,
        title: 'The Way Home',
        price: 24,
    },
    {
        id: 8,
        title: 'Spare',
        price: 25,
    },
    {
        id: 9,
        title: 'Dark Angel',
        price: 25,
    },
    {
        id: 5,
        title: 'It Ends With Us',
        price: 32,
    },
    {
        id: 5,
        title: 'Hello, beautiful',
        price: 32,
    },
    {
        id: 5,
        title: 'The Only Survivors',
        price: 32,
    },
    {
        id: 5,
        title: 'Poverty By America',
        price: 32,
    },
    {
        id: 5,
        title: 'The Creative Act',
        price: 32,
    },
    {
        id: 5,
        title: 'Crying In H Mart',
        price: 32,
    },

 ]

const  categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var { title, price} = item;
    return(
        `<div class='box'
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` +
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`

    )
}).join('')

var cart = [];

function addtocart (a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length==0){
        document.getIdById('cartItem').innerHTML = "Your cart is empty";
        document.getIdById('total').innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
            "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
 
