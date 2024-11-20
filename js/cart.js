function displayCart(){
    console.log(localStorage.length);
    str=``
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        const prod=JSON.parse(localStorage.getItem(key))
        str+=`<div class="card">
                    <div class="imgdiv">
                        <img class="img" src=${prod.thumbnail} alt="">
                        <div class="quantity">
                            <button>-</button>
                            <h6>1</h6>
                            <button>+</button>
                        </div>
                    </div>
                    <div class="info">
                        <h4>${prod.title}</h4>
                        <h5>uyg</h5>
                        <div class="seller">
                            <h5>${prod.brand}</h5>
                            <img class="assure" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="">
                        </div>
                        <div class="prices">
                            <h5>$${prod.price}</h5>
                            <h4>$${(prod.price-((prod.discountPercentage)/prod.price)).toFixed(2)}</h4>
                            <h5>${prod.discountPercentage}</h5>
                            <h5>offers</h5>
                        </div>
                        <div class="remove">
                            <button onclick="removeProd(${prod.id})">REMOVE</button>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("containe").innerHTML=str
}


displayCart()
function removeProd(id){
    console.log(id);
    localStorage.removeItem(id)
    displayCart()
    
}
