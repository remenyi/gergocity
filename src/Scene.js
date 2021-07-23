import { Canvas } from "@react-three/fiber";
import Circle from "./Circle";
import { Physics } from "@react-three/cannon"
import { useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";

const Scene = () => {
    const [circlePos, setCirclePos] = useState([0, 0, 0]);
    return (
        <Canvas>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Physics>
                <Circle />
            </Physics>
        </Canvas>
    );
}

export default Scene;