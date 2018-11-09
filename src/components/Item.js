import React from 'react'
import './Item.css'

class Item extends React.Component {
    
    render(){
        return(
                    <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                        <img className="imgCard"  src={this.props.platillo.image} alt={this.props.platillo.name} />
                        <button onClick={this.props.add} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></button>
                        </div>
                        <div className="card-content" style={{height: "220px"}}>
                        <p style={{margin: ".5rem", fontSize: "16px", fontWeight: "bold"}}>{this.props.platillo.name}</p>
                        <p style={{margin: ".5rem"}}>Precio</p>
                        <p style={{margin: ".5rem", fontSize: "16px", fontWeight: "bold"}}>$ {this.props.platillo.price}</p>
                        </div>
                        
                    </div>
                    </div>
        )
    }
}

export default Item