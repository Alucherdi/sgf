import React from 'react';
import { Dropbox } from 'dropbox';
import properties from '../Properties';
import ReactMarkdown from "react-markdown"
import './Post.scss'

class Post extends React.Component{    

    constructor(props){
        super(props)
        this.state = {
            content: ''
        }        
    }



    downloadNews = (id) =>{
        var dbx = new Dropbox({ accessToken: properties.services.dropbox });   
        dbx.filesGetTemporaryLink({ path: "rev:"+id}).then(json => {
            fetch(json.link)
		        .then(jsonRes => {
                        return jsonRes.json()
                }).then(json => {
                    this.setState({
                        content: json
                    },()=>{
                        console.log(this.state.content)
                    })                    
		        })
        }).catch( err =>{
            document.location.href = `${process.env.PUBLIC_URL}/news`;
        });            
    }

    componentDidMount = () =>{
        this.downloadNews(this.props.match.params.id);        
    }

    render(){        
        return (
            <React.Fragment>
                <div>
                    <div className="article">
                        <img className="banner" src={this.state.content.banner} alt=""/>
                        <p className="a-title">{this.state.content.title}</p>
                        <p className="author">{"Por "+this.state.content.author}</p>
                        <div className="content">                            
                        
                        </div>    					
					    <br/>
				    </div>
                </div>
            </React.Fragment>
        )
    }
    
}

export default Post;