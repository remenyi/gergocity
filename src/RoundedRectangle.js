import { Vector3 } from 'three';
import { Line } from "@react-three/drei";

const RoundedRectangle = (props) => {
    const position = props.position || new Vector3(0, 0, 0);
    const height = props.height || 1;
    const width = props.width || 1;
    const points = [new Vector3(position.x-(width/2), position.y-(height/2), position.z),
                    new Vector3(position.x-(width/2), position.y+(height/2), position.z), 
                    new Vector3(position.x+(width/2), position.y+(height/2), position.z),
                    new Vector3(position.x+(width/2), position.y-(height/2), position.z),
                    new Vector3(position.x-(width/2), position.y-(height/2), position.z)];
    return <Line
                points={points}
                color={props.color || "white"}
                lineWidth={props.lineWidth || 1} />;
};

export default RoundedRectangle;