import type {NextPage} from 'next'
import React, { ReactNode } from "react"
import styles from '../styles/Web.module.css'

const WebDesign: NextPage = () => {
    return (
        <object className="open">
            <div>
                <LinkPreview href="https://bookbase-app.herokuapp.com/" thumbnail="site-previews/bookbase.png" />
            </div>
        </object>
    )
}

function LinkPreview(props: {href:string, thumbnail:string}) {
    return (
        <div className="thumbnail-container">
            <div className="thumbnail">
                <a href={props.href} target="_blank">
                    <img src={props.thumbnail} width="300" height="200"></img>
                </a>
            </div>
        </div>
    )
}

export default WebDesign;