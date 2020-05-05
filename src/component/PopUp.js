import React from 'react';  
import './Popup.css';  
import ReactDOM from 'react-dom';
import products from '../ProductItem';
import counter from '../Counter';
import swal from 'sweetalert';

class PopUp extends React.Component {  
    constructor(){
        super()  
    this.save = () => {
        //username and password values
        console.log("save")
       // console.log(this.inputref.current.value)
        console.log(this.name.value,this.price.value,this.description.value)
        
        if(this.name.value ===''){
            swal("Oops!", "Something went wrong!", "error");
        }
        products.push({
            id: (products.length + 1).toString(),
            name: this.name.value,
            price: this.price.value,
            description: this.description.value,
            //counter: counter+1

          })
          this.props.closePopup();
          swal("Succesfully saved!", "Your imaginary file has been deleted!", "success");
    }
}
    componentDidMount(){
        console.log("did mount")
        this.name.focus();

    }
  render() {  
      const style={
          marginLeft: '5px',
          marginRight: '500px',
          width: '400px',
          height: '25px'
      }
      
      const des={
          marginLeft:'10px'
      }
    
    
return ReactDOM.createPortal(  
<div className='popup'>  
        <div className='popup_inner'>  
            <h2>Add Product:</h2><br></br>
            <label>Name:  </label>
            <input style={style} type="text" name="Name"  ref={input=>this.name=input}/><br></br>
            <label>Price:  </label>
            <input style={style} type="text" name="Price" ref={input=>this.price=input}/><br></br>
            <label>Description:  </label><br></br>
            <textarea style={des} name="Description" ref={input=>this.description=input}/><br></br><br></br>

        <button style={des} onClick={this.save}>Save</button><br></br><br></br>
        <button style={des} onClick={this.props.closePopup}>close me</button>
        </div>  
</div> 
, document.getElementById('portal-root')
);  
}  
}  

export default PopUp;