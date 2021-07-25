import { Vector3 } from 'three';
import CalcButton from './CalcButton';
import RoundedRectangle from "./RoundedRectangle";
import Display from './Display';
import { useState } from 'react';

const Calculator = (props) => {
    const [displayValue, setDisplayValue] = useState("");
    return <mesh>
        <RoundedRectangle
            position={new Vector3(0, 0, 0)}
            height={10}
            width={4}
            color={"deepPink"}
            lineWidth={3}/>
        <Display position={new Vector3(0, 1, 0)} width={4} height={1} color={"deepPink"} fontSize={1} text={displayValue}/>
        <CalcButton color={"deepPink"} fontSize={1} text={1} position={new Vector3(-1.5, -2, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={2} position={new Vector3(-0.5, -2, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={3} position={new Vector3(0.5, -2, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={4} position={new Vector3(-1.5, -1, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={5} position={new Vector3(-0.5, -1, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={6} position={new Vector3(0.5, -1, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={7} position={new Vector3(-1.5, 0, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={8} position={new Vector3(-0.5, 0, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
        <CalcButton color={"deepPink"} fontSize={1} text={9} position={new Vector3(0.5, 0, 0)} setDisplayValue={setDisplayValue} displayValue={displayValue} />
    </mesh>;
};

export default Calculator;