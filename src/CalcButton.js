import RoundedRectangle from "./RoundedRectangle";
import { Text, Plane } from "@react-three/drei";
import { useState } from "react";
import { MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry } from "three";
import { Vector3, DoubleSide } from 'three';

const CalcButton = (props) => {
    const [state, setState] = useState("idle");
    return <>
            <RoundedRectangle 
                position={props.position}
                height={props.height}
                width={props.width}
                color={props.color}
                lineWidth={props.lineWidth}>         
            </ RoundedRectangle>
            <Text
                color={state === "pressed" ? "white" : props.color}
                position={new Vector3(props.position.x, props.position.y, props.position.z+0.001)}
                anchorX="center"
                anchorY="middle"
                fontSize={props.fontSize}>
                    {props.text}
            </Text>
            <Text
                color={state === "pressed" ? "white" : props.color}
                position={new Vector3(props.position.x, props.position.y, props.position.z-0.001)}
                anchorX="center"
                anchorY="middle"
                fontSize={props.fontSize}>
                    {props.text}
            </Text>
            <Plane
                position={props.position}
                material={state === "idle"? new MeshBasicMaterial({transparent: "true", opacity: 0.0, side: DoubleSide}) : state === "pressed"? new MeshBasicMaterial({color: props.color, side: DoubleSide}) : new MeshBasicMaterial({color: "white", side: DoubleSide}) }
                onPointerEnter={() => setState("hovered")}
                onPointerLeave={() => setState("idle")}
                onPointerDown={() => setState("pressed")}
                onPointerUp={() => setState("hovered")}
                onClick={() => props.setDisplayValue(props.displayValue.concat(props.text))}>
            </Plane>
        </>
}

export default CalcButton;