import React, { Component,useState } from 'react';
import { Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import ErrorBoundary from './ErrorBoundry';
import products from '../ProductItem';
import counter from '../Counter';
import PopUp from './PopUp';
import Badge from 'react-bootstrap/Badge'
import swal from 'sweetalert';

class Product extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            showPopup: false,
        }

        this.togglePopup = () => {
            this.setState({
                showPopup: !this.state.showPopup
            });
        }

        this.removeCard = (id) => {
            swal({
                title: "Are you sure?",
                text: "Are you sure that you want to remove Item?",
                icon: "warning",
                dangerMode: true,
              })
              .then(willDelete => {
                if (willDelete) {
                  swal("Deleted!", "Your item has been removed!", "success");
                  for (var i = 0; i < products.length; i++) {
                    if (products[i].id === id) {
                        products.splice(i, 1);
                       // this.setState({ counter: counter - 1 });
                        this.setState((prevState,props) => {
                            return {counter: prevState.counter - props.step};
                          })
                          console.log(counter);
                        // if (this.state.name === '') {
                        //     throw new Error("Name Not found")
                        // }
                    }
                }
                }
              });
            
        };

    }

    //   componentDidMount() {
    //     fetch("http://localhost:3000/products/")
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({ products: data })
    //             console.log('Data is::', this.state.products);
    //         })
    //         .catch(err =>
    //             console.log('Error::', err)
    //         )
    // }
  
  render (){
    return(
        <div>
        {this.state.showPopup ? 
            <PopUp showPopup={this.state.showPopup} 
            closePopup={this.togglePopup.bind(this)}/>
            : null  
        }
            <div className="row" >
                <div className="col-2" >
                    <Badge variant="danger mt-4">Available Products : {counter}</Badge>
                    <Button variant="primary mt-4" onClick={this.togglePopup.bind(this)}>Add Product</Button>
                </div>
                <ErrorBoundary>
                <div className="col-10" >
                    <div className="row" >{
                        products.map((product,index) => {
                            return (
                                <ProductCard key={index} id={product.id} name={product.name} price={product.price}
                                    description={product.description}
                                    removeCard={() => this.removeCard(product.id)} />
                            )
                        })
                    }
                    </div>
                </div>
                </ErrorBoundary>
            </div>
        </div>     
    );
  }
  
}

export default Product;
