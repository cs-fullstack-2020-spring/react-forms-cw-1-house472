import React, {Component} from 'react'
class BlogPost extends Component {
    constructor(props){
        super(props)
        this.state ={
            blogTitle : "",
            post : ""
        }
    }
    newTitle = (event) => {
        this.setState = ({
            blogTitle : event.target.value
        }) 
    }
    newPost = (event) => {
        this.setState = ({
            post : event.target.value
        }) 
    }
    render (){
        return(
            <div>
                <form action="">
                    <fieldset>
                        <legend>Blog Post</legend>
                        <label htmlFor="">Blog Title</label>
                        <input type="text" onChange = {this.newTitle} value ={this.state.blogTitle} />
                        <label htmlFor="">Blog Post</label>
                        <input type="text" onChange = {this.newPost} value = {this.state.post}/>
{/* CANNOT TYPE TEXT INTO INPUT BOXES */}
                    </fieldset>
                </form>
                <div>
                    {this.state.blogTitle}
                </div>

                    
            </div>
        )
    }
}
export default BlogPost;