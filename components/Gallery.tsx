import React, { ReactNode } from "react"
import { Image } from "../interfaces/Image";
import { IMAGES } from "./mock-images"

let images: Image[] = IMAGES;

export function Gallery() {
    return (
        <div className="wrapper">
            {/* <RadioButtons /> */}
            <GalleryContainer />
        </div>
    )
}

function RadioButtons() {

    let imageTypes: string[] = [];
    images.forEach(image => {
        if (!imageTypes.includes(image.type)) {
            imageTypes.push(image.type);
        }
    })

    return (
        <div>
            {imageTypes.map((type) =>
                <div>
                    <input type="radio" id={type} value={type} name="type" />
                    <label>{type}</label>
                </div>
            )}
        </div>
    )
}

function GalleryContainer() {
    return (
        <div className="gallery">
            {images.map((image) => 
                <DoodleBox 
                    key={image.id}
                    title={image.title} 
                    description={image.description} 
                    src={image.src} 
                    orientation={image.orientation}
                />
            )}
        </div>
    )
}

function DoodleBox(props : { title: string, description: string, src: string , orientation: string}) {
    return (
            <div className="doodle-box">
                <div className="doodle-mask">
                    <h3 className="font1"><i>{props.title}</i></h3>
                    <h3 className="font0">{props.description}</h3>
                </div>
                <img className={"doodle-image " + props.orientation} src={props.src} />
            </div>
    )
}