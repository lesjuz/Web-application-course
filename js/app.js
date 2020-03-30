"use strict";

function pageLoad(){


    const btnSign=document.getElementById("sign-in");
    const btnProduct=document.getElementById("add-product");
    if (btnProduct!==null || btnProduct!==undefined){
        btnProduct.onclick=addProduct;
    }
    if (btnSign!==null || btnSign!==undefined){
        btnSign.onclick=signIn;
    }



}
function signIn(){
    const email=document.getElementById("email");
    const password=document.getElementById("inputPassword4");
    const web=document.getElementById("inputWeb");
    console.log("Your email is: ",email.value);
    console.log("Your password is: ",password.value);
    console.log("Your website is: ",web.value)
}
function addProduct(){
    const unit=document.getElementById("unity");
    const name=document.getElementById("name");
    const supplier=document.getElementById("supplier");
    const quantity=document.getElementById("quantity");
    const product=document.getElementById("product-name");
    alert(product.value+" "+name.value+" "+unit.value+" "+supplier.value+" "+quantity.value);

}
window.onload=pageLoad;
