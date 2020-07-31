class Product {
    constructor(id,name, price, quantity, desc, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.desc = desc;
        this.img = img;
    }

    getHtml(){
        let html = `<tr>
                        <td>${this.id}</td>
                        <td>${this.name}</td>
                        <td>${this.price}</td>
                        <td>${this.quantity}</td>
                        <td>${this.desc}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>`;
        return html;
    }
}
