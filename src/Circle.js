import { useBox } from "@react-three/cannon"

const Circle = () => {
    const [ref, api] = useBox(() => ({mass: 0, position: [0, 0, 0]}));
    return (
        <mesh
            onClick={() => {
                api.mass.set(2);
            }}
            ref = {ref}
            >
            <circleBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" color="hotpink" />
        </mesh>
    );
};

export default Circle;