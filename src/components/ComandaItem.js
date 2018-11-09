import React from 'react'

class ComandaItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number: 0
        } 
    }

    addDish = () => {
        this.setState({
            number: this.state.number +1
        })
    }

    removeDish = () => {
        if(this.state.number === 0){
            return
        } else {
            this.setState({
                number: this.state.number -1
            })
        }        
    }
    handleChange = e => {
        const { target } = e
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <ul className="collapsible">
                    <li>
                    <div className="collapsible-header">
                        <i className="material-icons">whatshot</i>
                        Comanda #{this.props.num + 1}
                    </div>
                    <div className="collapsible-body">
                    <p>{this.props.item.name}</p>
                    <p>{this.props.item.price}</p>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <button onClick={this.removeDish} className="btn-floating btn-small waves-effect waves-light red">
                            <i className="material-icons">remove</i>
                        </button>
                            <span style={{fontSize: "20px"}} onChange={this.handleChange} >{this.state.number}</span>
                        <button onClick={this.addDish} className="btn-floating btn-small waves-effect waves-light red">
                            <i className="material-icons">add</i>
                        </button>
                        <button style={{position: "relative", right: "0", bottom: "0"}} onClick={this.props.delete} className="btn-floating btn-small waves-effect waves-light red">
                            <i className="material-icons">delete</i>
                        </button>
                    </div>
                    </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ComandaItem