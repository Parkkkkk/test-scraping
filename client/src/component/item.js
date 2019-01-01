import React ,{ Component } from 'react';
import './item.css';

// image scaping Compnent

class Item extends Component {
    constructor() {
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount () {
        fetch('/api/scraping')
            .then(res => res.json())
            .then(data => this.setState({ data }, () => console.log('fetchd...', data)));

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