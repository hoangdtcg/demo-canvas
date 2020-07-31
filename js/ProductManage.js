class ProductManage {
    constructor() {
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    editProduct(){

    }

    removeProduct(id){
        this.products.splice(id,1);
    }

    getAllProduct(){
        let html ="";
        for (let i = 0; i < this.products.length; i++) {
            html += this.products[i].getHtml();
        }
        return html;
    }
}
