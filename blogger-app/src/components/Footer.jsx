import React, {Component} from 'react'
import PostList from './PostList'
class Footer extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render (){
        return(
            <div>
                <h4>This blog is created by Charles Gordon</h4>
               <PostList/>     
            </div>
        )
    }
}
export default Footer;