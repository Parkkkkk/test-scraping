import React , { Component }from 'react';
import { Item , Login , Profile} from '../component';

class Home extends Component {

    render(){
        return (
            <div>
                <Item />
                
                <Login/>
            </div>
        )
    }
}

export default Home;