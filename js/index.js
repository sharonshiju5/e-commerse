let products=[];
async function fetchData(){
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data= await res.json();
            products = [...data.products]
            str=``
            products.map((product) => {
                function per(a,b){
                
                    let amount=(a/100)*b;
                    let sell=b-amount
                    console.log(sell,a,b);
                    return sell

                }
                per(product.discountPercentage,product.price)
                str += `<div class="show">
                    <img src=${product.thumbnail} class="product" alt="">
                </div>    
                <a href="product.html?id=${product.id}">
                <div class="card">
                    <div class="section">
                        <img src=${product.thumbnail} class="product" id="product" alt="">
                        <div class="sale">-${product.discountPercentage}% OFF</div>
                        <div class="shnames">
                            <h2>${product.title}</h2>
                            <div class="prices">
                                <p class="price1">$${(product.price-((product.discountPercentage)/product.price)).toFixed(2)}</p>
                                <p class="price2" align="right" >$${product.price}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="  class="star"></p>
                                <p class="rate">${product.rating}</p>
                            </div>
                        </div>
                    </div></a>
                </div>`
            })
            document.getElementById("container")
            .innerHTML=str
    } catch (error) {
        
    }
}
fetchData()
