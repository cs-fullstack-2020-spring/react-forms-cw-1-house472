import React, { Component } from 'react'
import Header from './Header'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }




render() {
    return (
        <div>

<Header/>

        </div>


    );

}
}
export default AppContainer;