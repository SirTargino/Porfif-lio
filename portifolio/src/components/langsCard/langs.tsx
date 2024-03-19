import React from "react";
import "./langs.css"

interface LangsProps {
    name: string;
    skill: number;
    image: string;
}

const Langs: React.FC<LangsProps> = ({ name, skill, image }) => {
    return(
        <div>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Habilidade:</p>
            <progress value={skill} max="100"></progress>
        </div>
    )
}

export default Langs