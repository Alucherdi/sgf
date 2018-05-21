import React from "react"
import SProvider from "../Context/Storage"
import News from './News'

class NewsHandler extends React.Component {
    render(){
        return(
            <SProvider>
                <News/>
            </SProvider>
        )
    }
}

export default NewsHandler