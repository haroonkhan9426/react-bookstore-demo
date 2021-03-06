import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "The Kite Runner",
                "src": "./images/TKR.jpg",
                "description": "Novel by Khaled Hosseini",
                "content": "Originally published: May 29, 2003. The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father's servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed.",
                "price": 12,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "To Kill a Mockingbird",
                "src": "./images/TOKILL.jpg",
                "description": "Novel by Harper Lee",
                "content": "Originally published: July 11, 1960. To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize.",
                "price": 8,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "The Great Gatsby",
                "src": "./images/TGG.jpg",
                "description": "Novel by F. Scott Fitzgerald",
                "content": "Originally published: April 10, 1925. The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
                "price": 10,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "One Hundred Years of Solitude",
                "src": "./images/OHYS.jpg",
                "description": "Novel by Gabriel Garc??a M??rquez",
                "content": "Originally published: 1967. One Hundred Years of Solitude is a landmark 1967 novel by Colombian author Gabriel Garc??a M??rquez that tells the multi-generational story of the Buend??a family, whose patriarch, Jos?? Arcadio Buend??a, founded the town of Macondo. The novel is often cited as one of the supreme achievements in literature.",
                "price": 12,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Invisible Man",
                "src": "./images/inv.jpg",
                "description": "Novel by Ralph Ellison",
                "content": "Originally published: April 14, 1952. Invisible Man is one of those rare novels that have changed the shape of American literature. For not only does Ralph Ellison's nightmare journey across the racial divide tell unparalleled truths about the nature of bigotry and its effects on the minds of both victims and perpetrators, it gives us an entirely new model of what a novel can be. ",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Beloved",
                "src": "./images/beloved.jpg",
                "description": "Novel by Toni Morrison",
                "content": "Originally published: September 1987. Beloved is a 1987 novel by the American writer Toni Morrison. Set after the American Civil War, it tells the story of a family of former slaves whose Cincinnati home is haunted by a malevolent spirit.",
                "price": 7,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


