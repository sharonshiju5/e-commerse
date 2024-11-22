function displayCart(){
    console.log(localStorage.length);
    str=``;
    discount=0;
    fultotal=0;
    fuldisc=0;
    del=0;
    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        const prod=JSON.parse(localStorage.getItem(key))

        discount=prod.price*(prod.discountPercentage/100);
        let total=Math.round(prod.price);
        fultotal+=total;
        fuldisc+=discount;
        p=Math.round(prod.price)
        console.log(fuldisc);
        
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
                            <h5>${prod.discountPercentage} off</h5>
                            <h5>offers</h5>
                        </div>
                        <div class="remove">
                            <button onclick="removeProd(${prod.id})">REMOVE</button>
                        </div>
                    </div>
                </div>`
                if(localStorage.length>=3){
                    console.log("heee");
                    del="free";
                    
                }
                else{
                    del="$100"
                    console.log(del);
                    
                }
    }      
    tot=fultotal-fuldisc
        document.getElementById("containe").innerHTML=str
        document.getElementById("bill").innerHTML=`
        <div class="div">
        <h4 class="h4">
        Price details
        </h4>
        <div class="div2">
        <div class="p" >
        <p class="price" id="p">Price ( ${localStorage.length} item )</p>
        <p>$${fultotal}</p>
        </div>
        <div class="p">
        <p>Discount</p>
        <p>${fuldisc.toFixed(2)}</p>
        </div>
        <div class="p">
        <p>delivery charge</p>
        <p>${del}</p>
        </div>
        <hr>
        <div class="p">
        <h2>TOTAL AMOUNT</h2>
        <p>$${tot.toFixed(2)}</p>
        </div>
        <hr>
        <div class="p" id="save">
        <p> YOU SAVED ON THIS ORDER $ ${(fultotal-tot ).toFixed(2)}</p>
        </div>
        </div>
        </div>`
}

displayCart()

function removeProd(id){
    console.log(id);
    localStorage.removeItem(id)
    displayCart()
    
}

