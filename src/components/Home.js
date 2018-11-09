import React from 'react'
import Platillos from '../platillos'
import Item from './Item'
import ComandaItem from './ComandaItem'

let listComanda = []

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            platillos: Platillos
        }
    }

    componentDidMount(){

    }

    getPlatillos= () => {
        let platillos = []
        for(let i = 0; i < this.state.platillos.length; i++){
            platillos.push(
                <Item key={i} platillo={this.state.platillos[i]} add={this.addComanda.bind(this, this.state.platillos[i])} />
            )
        }
        
        return platillos
    }

    addComanda = (i) => {
        let list = []
        if(localStorage.getItem('listItem') === null){
            list.push(i)
            localStorage.setItem('listItem', JSON.stringify(list))
        } else {
            list = JSON.parse(localStorage.getItem('listItem'))
            list.push(i)
            localStorage.setItem('listItem', JSON.stringify(list))
        }
    }

    getList(){
        let items = JSON.parse(localStorage.getItem('listItem'))
        if(items === null){
            return
        }
        for(let i = 0; i < items.length; i++){
            listComanda.push(
                <ComandaItem key={i} num={i} item={items[i]} delete={this.deleteComanda.bind(this, items[i])} />
            )
        }
        
        return listComanda
    }

    deleteComanda = item => {
        let items = listComanda
        for(let i = 0; i < items.length; i++){
            if(items[i]=== item){
                items.splice(i, 1)
                items = listComanda
                localStorage.setItem('listItem', JSON.stringify(items))
            }
        }
    }
    
    checkStorage(){
        if(localStorage.getItem('listItem') === null){
            return
        } else if(JSON.parse(localStorage.getItem('listItem').length < 1)){
            return
        } else {
            listComanda = JSON.parse(localStorage.getItem('listItem'))
        }

    }
    

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <p style={{fontSize: "2rem"}}>Menu</p>
                        <i style={{cursor: "pointer", color: "#8ECAF2"}} className="medium material-icons">book</i>
                    </div>
                    <div className="col s6">
                        <p style={{fontSize: "2rem"}}>Lista de comandas</p>
                        <i style={{cursor: "pointer", color: "#8ECAF2"}} className="medium material-icons">list</i>
                    </div>
                </div>
                <div className="row">
                    <div className=" col s6">
                        <p style={{fontSize: "26px", fontWeight: "bold"}}>Agrega platillos a tu comanda...</p>
                        <div>
                        {this.getPlatillos()}
                        </div>
                    </div>
                        <div className="col s6">
                            {this.getList()}
                        </div>
                </div>
            </div>
        )
    }
}

export default Home