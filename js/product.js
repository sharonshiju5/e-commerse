
let data;
async function getProduct(){
    const searchUrl=window.location.search
    const urlParams= new URLSearchParams(searchUrl)
    const id=urlParams.get("id")
    const res=await fetch(`https://dummyjson.com/products/${id}`)
     data=await res.json();
    console.log(data);
    
    document.getElementById("container").innerHTML=`
          
<div class="imgs">
                <img class="img" src=${data.thumbnail} alt="">
                <img class="img" src=${data.thumbnail} alt="">
                <img class="img" src=${data.thumbnail} alt="">
                <img class="img" src=${data.thumbnail} alt="">
                <img class="img" src=${data.thumbnail} alt="">
                <img class="img" src=${data.thumbnail} alt="">
            </div>
            <div class="product">
                <img class="img" src=${data.thumbnail} alt="">
                <div class="cart">
                    <div class="add">
                        ${localStorage.getItem(data.id)? `<button onclick='goToCart()' class="btn1"><svg class="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>    
                            GO TO CART</button>`:`<button onclick='addToCart(${data.id})' class="btn1"><svg class="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>    
                            ADD TO CART</button>`}
                        
                    </div>
                    <div class="buy">
                        <BUtton class="btn2">BUY NOW</BUtton>
                    </div>
                </div>
            </div>
            <div class="info">
                <div class="path">Home >${data.tags} > ${data.brand}> ${data.category}>${data.title}>${data.sku}</div>
                <div class="name">
                    <h3>${data.title}</h3>
                    <div class="descreption">
                    <p>${data.description}</p>
                    </div>
                    <p id="name">special price</p>
                    <div class="price">
                        <h2>$${(data.price-((data.discountPercentage)/data.price)).toFixed(2)}</h2>
                        <p class="price2" color="grey">$${data.price}</p>
                        <p id="name2">${data.discountPercentage}% off</p>
                    </div>
                </div>
                <div class="ratings">
                    <p class="rate">${data.rating}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="  class="star"></p>
                    <img class="fassured" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="">
                </div>
                <div class="thumb">
                    <h6>colours</h6>
                    <div class="colour">
                        <img class="thumbimg" src=${data.thumbnail} alt="">
                        <img class="thumbimg" src=${data.thumbnail} alt="">
                        <img class="thumbimg" src=${data.thumbnail} alt="">
                        <img class="thumbimg" src=${data.thumbnail} alt="">
                        <img class="thumbimg" src=${data.thumbnail} alt="">
                        <img class="thumbimg" src=${data.thumbnail} alt="">
                        <img class="thumbimg" src=${data.thumbnail} alt="">
                    </div>
                </div>
            </div>
    `
}

getProduct()

function addToCart(id){
    console.log(data);
    localStorage.setItem(id,JSON.stringify(data))
    getProduct()
}
function goToCart(){
    window.location.href=`./cart.html`
}
