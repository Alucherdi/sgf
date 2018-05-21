import React from "react"
import NewsHandler from "../components/Context/SProvider"
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