import React from 'react';
import './NewsMaker.scss'
import ReactMarkdown from "react-markdown"
import Logo from '../Assets/Logo-Alt.svg'
import MonacoEditor from 'react-monaco-editor';
import NavBar from '../NavBar/NavBar';
import Save from './Assets/Save.png'
import Clear from './Assets/Clear.png'
import Theme from './Assets/Theme.png'
import { Dropbox } from "dropbox"
import $ from 'jquery'

class NewsMaker extends React.Component{

    constructor(){
        super();

        this.state = {
            title: "",
            banner: "",
            content: "",
            author: "",
            theme: "dark",
            width: $(window).width(),
        }
    }

    editorDidMount = (editor) => {
        editor.focus();
        this.editor = editor;        
    }

    onRead = (e) =>{
        fetch(URL.createObjectURL(e.target.files[0]))
            .then(response => response.text())
            .then(text => {
                this.setState({
                    content: text
                })                
            })            
    }

    onTitleChange = (e) =>{
        this.setState({
            title: e.target.value
        })
    }

    onBannerChange = (e) =>{
        this.setState({
            banner: e.target.value
        })
    }

    onAuthorChange = (e) =>{
        this.setState({
            author: e.target.value
        })
    }

    onChange = (newValue, e) =>{
        this.setState({
            content: newValue
        })
    }
    
    openBox = (e) =>{
        e.preventDefault()
        var box = document.getElementById('save-box');
        box.style.display = "block";
    }

    componentDidMount = () =>{
        var box = document.getElementById('save-box');
        window.onclick = (e) => {
            if (e.target === box) {
                box.style.display = "none";
            }
        }        
        $(window).bind('keydown', function(event) {
            if (event.ctrlKey || event.metaKey) {
                switch (String.fromCharCode(event.which).toLowerCase()) {
                    case 's':
                        event.preventDefault();
                        box.style.display = "block";
                        break;
                    default:
                }
            }
        });
    }

    cleanEditor = (e) =>{
        e.preventDefault()
        if (this.editor) {
            this.editor.setValue(' ')
        }        
    }

    toggleTheme = () =>{
        this.setState({
            theme: this.state.theme === "dark" ? "clean" : "dark"
        })

        var preview = document.getElementById("preview");    
        preview.style.color = this.state.theme !== "dark" ? "#FFFFFF" : "#1E1E1E";
        preview.style.background = this.state.theme === "dark" ? "#FFFFFF" : "#1E1E1E";

        var mbox = document.getElementById("m-box");
        mbox.style.background = preview.style.color;
    }

    changeTheme = (e) =>{
        e.preventDefault()
        this.toggleTheme();
    }

    uploadNews = (e) =>{
        e.preventDefault();
		var dbx = new Dropbox({ accessToken: "oUhHgt2EauAAAAAAAAAAIL7ZT6g3MU5cUjwau-ZdbEnKVzPNM8-z8UU_G2NTYlgV" });
        var box = document.getElementById('save-box');        
        box.style.display = "none";
        dbx.filesUpload({path: '/News/'+new Date().toISOString()+'.json', contents: JSON.stringify(this.state)})
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.error(error);
          });
    }

    render() {
        const code = this.state.content;
        const options = {
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: {
                enabled: false
            }
        };
        var theme = this.state.theme === "dark" ? "vs-dark" : "vs";
        return (
            <React.Fragment>
                <div className="panel">
                    <div className="modal">
                        <img className="save" alt="" src={Save} onClick={this.openBox} width={32}/>
                        <img className="save" alt="" src={Clear} onClick={this.cleanEditor} width={32}/>
                        <img className="save" alt="" src={Theme} onClick={this.changeTheme} width={32}/>
                    </div>   
                </div>
                <div className="save-box">
                    <div id="save-box" class="modal">
                        <div class="modal-content"> 
                            <div className="main">
                                <img className="logo" alt="" src={Logo} width="128"/>
                                <p>Upload News</p>
                                <label>Title</label>
                                <input type="text"onChange={this.onTitleChange}/>

                                <label>Banner</label>
                                <input type="text" onChange={this.onBannerChange}/>

                                <label>Author</label>
                                <input type="text" onChange={this.onAuthorChange}/>

                                <button onClick={this.uploadNews}>Upload News</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-box" id="m-box">                                      
                    <div className="module">                    
                        <div className="editor">
                            <MonacoEditor
                                ref="monaco"
                                language="markdown"
                                theme={theme}
                                width={($(window).width()/2)}
                                value={code}
                                options={options}
                                onChange={this.onChange}
                                editorDidMount={this.editorDidMount}
                            />
                        </div>
                        <div className="preview" id="preview">
                            <p className="title">Preview</p>
                            <div className="content">
                                <ReactMarkdown className="p-content" escapeHtml={false} skipHtml={false} source={this.state.content} />
                            </div>                        
                        </div>
                    </div>                                          
                    <NavBar/>
                </div>      
            </React.Fragment>
        );
    }
    

    /*
    render(){
        const code = this.state.content;
        const options = {
            selectOnLineNumbers: true,
            "editor.minimap.enabled": false
        };
        return(
            <form className="main">
                <img className="logo" alt="" src={Logo} width="256"/>
                <label>Title</label>
                <input type="text"onChange={this.onTitleChange}/>

                <label>Banner</label>
                <input type="text" onChange={this.onBannerChange}/>

                <label>Content</label>
                {
                    //<input type="file" onChange={this.onRead} accept=".markdown, .mdown, .mkdn, .mkd, .txt, .md"/>
                }
                <div className="editor">
                    <MonacoEditor
                        width="800"
                        height="600"
                        language="markdown"
                        theme="vs-dark"
                        value={code}
                        options={options}
                        onChange={this.onChange}
                        editorDidMount={this.editorDidMount}
                    />
                </div>

                <input type="submit"/>
                <div className="preview">
                    <label>Preview</label>
                    <p className="p-title">
                        {this.state.title}
                    </p>
                    <img className="p-banner" alt="" src={this.state.banner} width="500"/>
                    <ReactMarkdown className="p-content" escapeHtml={false} skipHtml={false} source={this.state.content} />
                </div>
            </form>
        )        
    }
*/
}

export default NewsMaker;