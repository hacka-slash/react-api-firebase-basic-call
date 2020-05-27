import React, {Component} from 'react';
import axios from 'axios';

//https://www.reddit.com/r/space.json
    //The 'space' in this url is subject to change depending on this.state.subReddit
class Apicall extends Component {
    componentWillMount(){
        this.getReddit()
    }

    constructor(props){
        super(props)

        this.state = {
            posts: [],
            subReddit: 'space'
        }

        this.getReddit = this.getReddit.bind(this)
    }

    getReddit = () => {
        axios.get(`https://www.reddit.com/r/${this.state.subReddit}.json`)
        .then(res => {
            //the '.map()' method returns an array of a specific criteria that we specify after it goes thru each object of
             //the large .json. In this case, we want an array of all the obj.data and only that.
            const posts = res.data.data.children.map(obj => obj.data)
            this.setState({posts})

        })
    }

    render(){
        return(
            <div>
                <h1>{`r/${this.state.subReddit}`}</h1>
                <ul>
                    {this.state.posts.map(post => 
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Apicall;