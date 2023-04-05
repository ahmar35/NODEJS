const fs=require('fs')
const path=require('path')
const Product = require('./product')
const p=path.join(path.dirname(process.mainModule.filename),'data','cart.json')
module.exports=class cart{
    static addProduct(id,productPrice){
        //here we will fetch the cart
        fs.readFile(p,(err,fileContent)=>{
            let cart={products:[],totalPrice:0}
            if(!err){
                cart=JSON.parse(fileContent)

            }
            const existingProductIndex=cart.products.findIndex(
                prod => prod.id === id
                )
                //find existing product
            const existingProduct=cart.products[existingProductIndex]
            let updatedProduct
            //if exist...then add quantity
            if(existingProduct){
                updatedProduct={ ...existingProduct }
                updatedProduct.qty=updatedProduct.qty +1
                cart.products=[...cart.products]
                cart.products[existingProductIndex]=updatedProduct


            }else{
                updatedProduct={id:id,qty:1}
                cart.products=[...cart.products,updatedProduct]

            }
            cart.totalPrice=cart.totalPrice+productPrice
            fs.writeFile(p,JSON.stringify(cart),err =>{
                console.log(err)

            })

        })
}
}