import { isLocalURL } from "next/dist/shared/lib/router/router";
import { type } from "os";
import React, { ChangeEvent, ReactNode, useState } from "react"
import { Image } from "../interfaces/Image";
import { IMAGES } from "./mock-images"

let images: Image[] = IMAGES;


export function Gallery() {

    const [galleryFilter, setGalleryFilter] = useState("all");

    let imageTypes: string[] = [];
    imageTypes.push("all");
    images.forEach(image => {
        if (!imageTypes.includes(image.type)) {
            imageTypes.push(image.type);
        }
    })

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setGalleryFilter(e.target.value)
    }

    let filteredImages = galleryFilter == "all" ? images : images.filter(image => image.type == galleryFilter);

    return (
        <div className="wrapper">
            <RadioButtons handleTypeChange={handleTypeChange} imageTypes={imageTypes} galleryFilter={galleryFilter} />
            <GalleryContainer filteredImages={filteredImages} />
        </div>
    )
}

function RadioButtons({handleTypeChange, imageTypes, galleryFilter} : {handleTypeChange: React.ChangeEventHandler,imageTypes: string[], galleryFilter: string}) {

    return (
        <div className="gallery">
            <div className="form" >
                {imageTypes.map(type =>
                    <label>
                        <input type="radio" key={imageTypes.indexOf(type)} id={type} value={type} name="type" checked={galleryFilter == type} onChange={handleTypeChange} />
                        {type}
                    </label>
                )}
            </div>
        </div>
    )
}

function GalleryContainer({filteredImages} : {filteredImages : Image[]}) {
    return (
        <div className="gallery">
            {filteredImages.map(image => 
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