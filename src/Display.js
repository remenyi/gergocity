import RoundedRectangle from "./RoundedRectangle";
import {Text} from "@react-three/drei";
import { Vector3 } from "three";

const Display = (props) => {
    const textPosition = new Vector3(props.position.x+(props.width/2), props.position.y, props.position.z);
    return <>
            <RoundedRectangle position={props.position} width={props.width} height={props.height} color={props.color}/>
            <Text
                color={props.color}
                position={textPosition}
                anchorX="right"
                anchorY="middle"
                fontSize={props.fontSize}>
                    {props.text.slice(-7)}
            </Text>
        </>;
}

export default Display;