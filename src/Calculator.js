import { Vector3 } from 'three';
import CalcButton from './CalcButton';
import RoundedRectangle from "./RoundedRectangle";
import Display from './Display';
import { useState } from 'react';

const Calculator = (props) => {
    const [displayValue, setDisplayValue] = useState("");
    const [last, setLast] = useState("0");
    const [nextOperation, setNextOperation] = useState("none");
    const fontSize = 0.5;
    const color = "deepPink";
    const onNumber = function(buttonText){
        if (nextOperation === "eval" || displayValue.toString() === "0") {
            setDisplayValue(buttonText);
            setNextOperation("none");
        }
        else {
            setDisplayValue(displayValue.toString().slice(-7) + buttonText);
        }
    }
    const onAddition = function(_){
        setLast(displayValue || "0");
        setDisplayValue("");
        setNextOperation("addition");
    }
    const onSubtraction = function(_){
        setLast(displayValue || "0");
        setDisplayValue("");
        setNextOperation("subtraction");
    }
    const onMultiplication = function(_){
        setLast(displayValue || "0");
        setDisplayValue("");
        setNextOperation("multiplication");
    }
    const onDivision = function(_){
        setLast(displayValue || "0");
        setDisplayValue("");
        setNextOperation("division");
    }
    const onEval = function(_){
        setLast("0");
        setNextOperation("eval");
        switch(nextOperation){
            case "addition":
                setLast(displayValue);
                setDisplayValue((parseInt(displayValue || last)+parseInt(last)).toString());
                break;
            case "subtraction":
                setLast(displayValue);
                setDisplayValue((parseInt(last)-parseInt(displayValue || last)).toString());
                break;
            case "multiplication":
                setLast(displayValue);
                setDisplayValue((parseInt(displayValue || last)*parseInt(last)).toString());
                break;
            case "division":
                setLast(displayValue);
                setDisplayValue(Math.floor((parseInt(last)/parseInt(displayValue || last))).toString());
                break;
        }
    }
    const onClearEverything = function(_){
        setLast("0");
        setDisplayValue("");
        setNextOperation("none");
    }
    const onClearEntry = function(_){
        setDisplayValue("");
    }
    return <mesh>
        <RoundedRectangle
            position={new Vector3(0, -0.5, 0)}
            height={6}
            width={4}
            color={"deepPink"}
            lineWidth={3}/>
        <Display position={new Vector3(0, 2, 0)} width={4} height={1} color={"deepPink"} fontSize={0.8} text={displayValue}/>
        <CalcButton color={color} fontSize={fontSize} text={0} position={new Vector3(-1.0, -3, 0)} setCalcState={onNumber} width={2} />
        <CalcButton color={color} fontSize={fontSize} text={1} position={new Vector3(-1.5, -2, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={2} position={new Vector3(-0.5, -2, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={3} position={new Vector3(0.5, -2, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={4} position={new Vector3(-1.5, -1, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={5} position={new Vector3(-0.5, -1, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={6} position={new Vector3(0.5, -1, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={7} position={new Vector3(-1.5, 0, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={8} position={new Vector3(-0.5, 0, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={9} position={new Vector3(0.5, 0, 0)} setCalcState={onNumber} />
        <CalcButton color={color} fontSize={fontSize} text={'+'} position={new Vector3(1.5, -2, 0)} setCalcState={onAddition} />
        <CalcButton color={color} fontSize={fontSize} text={'−'} position={new Vector3(1.5, -1, 0)} setCalcState={onSubtraction} />
        <CalcButton color={color} fontSize={fontSize} text={'×'} position={new Vector3(1.5, 0, 0)} setCalcState={onMultiplication} />
        <CalcButton color={color} fontSize={fontSize} text={'÷'} position={new Vector3(1.5, 1, 0)} setCalcState={onDivision} />
        <CalcButton color={color} fontSize={fontSize} text={'='} position={new Vector3(1.0, -3, 0)} setCalcState={onEval} width={2}/>
        <CalcButton color={color} fontSize={fontSize} text={'C'} position={new Vector3(-1.5, 1, 0)} setCalcState={onClearEverything} />
        <CalcButton color={color} fontSize={fontSize} text={'CE'} position={new Vector3(-0.5, 1, 0)} setCalcState={onClearEntry} />
    </mesh>;
};

export default Calculator;