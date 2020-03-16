import React, {Component} from 'react'
import BlogPost from './BlogPost'
class PostList extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render (){
        return(
            <div>
                
          <BlogPost/>          
            </div>
        )
    }
}
export default PostList;