import React ,{ Component } from 'react'
import { Getitem } from './function';
import './item.css'

// image scaping Compnent

class Item extends Component {
    constructor() {
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount () {
        Getitem()
        .then(res => this.setState( { data : res.data } ))
    }

    render() {
        return (
            <div className="Item_list">
                {this.state.data.map(datas => 
                <div className = "Item_Columns">
                    <a href ={datas.item}><img src={datas.image} alt="img" width = "150" height="200"/></a>
                </div>
                 )}
            </div>
        );
    }

}

export default Item;