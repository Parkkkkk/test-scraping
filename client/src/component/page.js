import React ,{ Component } from 'react';
import './page.css';



class Page extends Component {
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
            <div className="Page">
                <div className = "profile">
                    <from>
                    <input type="text"></input>

                    <button type ="submit"></button>
                    </from>
                    
                </div>
                {this.state.data.map(datas => 
                <div className = "Page_Columns">
                    <a href ={datas.item}><img src={datas.image} alt="gi" width = "150" height="200"/></a>
                </div>
                 )}
            </div>
        );
    }

}





export default Page;