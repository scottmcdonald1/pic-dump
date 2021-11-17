import React, { ReactNode } from "react"
import { Image } from "../interfaces/Image";
import { IMAGES } from "./mock-images"

let images: Image[] = IMAGES;

export function Gallery() {
    return (
        <object className="open">
            {images.map((image) => {
                return (
                    <DoodleBox 
                        title={image.title} 
                        description={image.description} 
                        src={image.src} 
                    />
                )
            })}
        </object>
    )
}

function DoodleBox(props : { title: string, description: string, src: string }) {
    return (
            <div className="doodle-box">
                <div className="doodle-mask">
                    <h3 className="font1"><i>{props.title}</i></h3>
                    <h3 className="font0">{props.description}</h3>
                </div>
                <img className="doodle-image portrait" src={props.src} />
            </div>
    )
}

{/* <DoodleBox title="Squad Ghouls" description="marker & pen" src="images/squad_ghouls.png" />
<DoodleBox title="Lightyears Davis" description="marker & pen" src="images/lightyears_davis.png" />
<DoodleBox title="Beanie It's Cold Outside" description="marker & pen" src="images/beanie_it's_cold_outside.png" />
<DoodleBox title="Duckie" description="marker & pen" src="images/duckie.png" />
<DoodleBox title="Eat Your Vegetables" description="marker & pen" src="images/eat_your_vegetables.png" />
<DoodleBox title="Grapes" description="marker & pen" src="images/grapes.png" />
<DoodleBox title="It's Just a Plant" description="marker & pen" src="images/it's_just_a_plant.png" />
<DoodleBox title="Swab the Duck" description="marker & pen" src="images/swab_the_duck.png" />
<DoodleBox title="Milk" description="marker & pen" src="images/milk.png" /> */}