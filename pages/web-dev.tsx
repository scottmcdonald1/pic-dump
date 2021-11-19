import type {NextPage} from 'next'
import React, { ReactNode } from "react"
import styles from '../styles/Web.module.css'

const WebDesign: NextPage = () => {
    return (
        <div className="gallery">
            <div>
                <LinkPreview href="https://bookbase-app.herokuapp.com/" thumbnail="site-previews/bookbase.png" />
            </div>
        </div>
    )
}

function LinkPreview(props: {href:string, thumbnail:string}) {
    return (
        <a href={props.href} target="_blank">
            <div className="doodle-box">
                
                    <div className="doodle-mask">
                        <h3 className="font1">Bookbase</h3>
                    </div>
                
                <img src={props.thumbnail} width="300" height="200"></img>

            </div>
        </a>
    )
}

export default WebDesign;