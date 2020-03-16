import React, { Component } from 'react'
import Footer from './Footer'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }
    
    render() {
        return (
            <div>

               <h1>My Blog</h1>
                
<Footer/>



            </div>


        );

    }
}
export default Header;