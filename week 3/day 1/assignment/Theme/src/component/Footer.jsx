import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Footer() {
    const {Toggle}= useContext(ThemeContext)
    return (
        <div style={Toggle?{backgroundColor:"black",color:"white",border:"1px solid white"}:{backgroundColor: "white",color:"black",border:"1px solid black"}}>
            <div className="p-4 p-md-5 mb-4  rounded border-5" >
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p className="lead mb-0"><a  className=" fw-bold">Continue reading...</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
