import React, { Component } from 'react'

const Context = React.createContext();

class Provider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            news: []
        }        
        var token = 'oUhHgt2EauAAAAAAAAAAIL7ZT6g3MU5cUjwau-ZdbEnKVzPNM8-z8UU_G2NTYlgV';
        var Dropbox = require('dropbox').Dropbox;
        var dbx = new Dropbox({ accessToken: token });               
        dbx.filesListFolder({path: '/Noticias'}).then(response =>{
            response.entries.map( data =>{
                dbx.filesGetMetadata({path: data.path_display}).then( metadata => {   
                    dbx.usersGetAccount({account_id: metadata.sharing_info.modified_by}).then(response => {
                        dbx.filesGetTemporaryLink({path: data.path_display}).then( json => {                                         
                            fetch(json.link).then( response =>{
                                return response.text();
                            }).then( text => {   
                                this.setState(prevState => ({
                                    news: [...prevState.news, JSON.stringify({
                                        content: text,
                                        file_id: metadata.id,
                                        date: metadata.client_modified,
                                        owner_id: response.account_id,
                                        owner_name: response.name.display_name
                                    })],
                                    loading: true
                                }))
                            })                                               
                        })   
                    })                          
                })                  
                return data;          
            });                
        }).catch(function(error) {
            console.log(error);
        });    
    }

    render(){    
       return(
            <Context.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </Context.Provider>
       );
    }
}

class SProvider extends Component{
    render(){
        return(
            <Provider>
                <Context.Consumer>
                    {(context) => (
                        <div>{React.cloneElement(this.props.children, {state: context.state})}</div>
                    )}
                </Context.Consumer>
            </Provider>
        )
    }
}


export default SProvider;