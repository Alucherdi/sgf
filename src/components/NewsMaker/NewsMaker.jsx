import React from 'react';
import './NewsMaker.scss'
import ReactMarkdown from "react-markdown"
import Logo from '../Assets/Logo-Alt.svg'
import MonacoEditor from 'react-monaco-editor';
import NavBar from '../NavBar/NavBar';
import Save from './Assets/Save.png'
import Clear from './Assets/Clear.png'
import Theme from './Assets/Theme.png'
import Reset from './Assets/Reset.png'
import { Dropbox } from "dropbox"
import $ from 'jquery'
import Resizable from 're-resizable';

class NewsMaker extends React.Component{

    constructor(){
        super();

        
        this.state = {
            title: "",
            banner: "",
            content: "",
            author: "",
            theme: "dark",
            width: ($(window).width()/2)
        }
    }

    editorDidMount = (editor, monaco) => {
        editor.focus();
        this.editor = editor;
        this.monaco = monaco;

        editor.addAction({
            id: 'save-id',
            label: 'Save and Upload News',
            keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10],
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 2.5,
            run: function(ed) {
                var box = document.getElementById('save-box');
                box.style.display = "block";
            }
        });

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < 5; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
        }

        editor.addAction({
            id: 'download-id',
            label: 'Download News',
            keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F11],
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 2.5,
            run: function(ed) {
                var json = JSON.stringify({
                    content: editor.getValue()
                });
                var FileSaver = require('file-saver');
                var file = new File([json], "News-"+makeid()+".json", {type: "json/application;charset=utf-8"});
                FileSaver.saveAs(file);
            }
        });
        
        $(window).on('resize', () => {
            editor.setValue(editor.getValue())
            this.setState({
                width: ($(window).width()/2)
            },()=>{
                this.resizable.updateSize({width: this.state.width})
            })
        });
        
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
            this.editor.setValue('')
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
        this.toggleTheme()
    }

    uploadNews = (e) =>{
        e.preventDefault();
		var dbx = new Dropbox({ accessToken: "oUhHgt2EauAAAAAAAAAAIL7ZT6g3MU5cUjwau-ZdbEnKVzPNM8-z8UU_G2NTYlgV" });
        var box = document.getElementById('save-box');        
        box.style.display = "none";
        dbx.filesUpload({path: '/SGNews/'+new Date().toISOString()+'.json', contents: JSON.stringify(this.state)})
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.error(error);
          });
    }

    onResize = (size) =>{
        this.setState({
            width: size.x-48
        })
    }

    resetSize = (e) =>{
        e.preventDefault();
        this.setState({
            width: ($(window).width()/2)
        },()=>{
            this.resizable.updateSize({width: this.state.width})
        })
    }

    render() {
        const code = this.state.content;
        const options = {
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: {
                enabled: false
            },
            scrollbar: {
                useShadows: false,
                horizontalScrollbarSize: 15
            }
        };
        return (
            <React.Fragment>
                <div className="save-box">
                    <div id="save-box" className="modal">
                        <div className="modal-content"> 
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
                        <div className="buttons">
                            <img className="save" alt="" src={Save} onClick={this.openBox} width={32}/>
                            <img className="save" alt="" src={Clear} onClick={this.cleanEditor} width={32}/>
                            <img className="save" alt="" src={Theme} onClick={this.changeTheme} width={32}/>
                            <img className="save" alt="" src={Reset} onClick={this.resetSize} width={32}/>
                        </div>
                        <div className="editor" id="editor">
                        <Resizable axis='x' onResize={this.onResize} ref={c => { this.resizable = c; }}>
                            <MonacoEditor
                                ref="monaco"
                                language="markdown"
                                theme={(this.state.theme === "dark" ? "vs-dark" : "vs")}
                                width={this.state.width}
                                value={code}
                                options={options}
                                onChange={this.onChange}
                                editorDidMount={this.editorDidMount}
                            />
                        </Resizable>                            
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