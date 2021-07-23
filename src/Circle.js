import { useBox } from "@react-three/cannon"

const Circle = () => {
    const [ref, api] = useBox(() => ({mass: 0, position: [0, 0, 0]}));
    return (
        <mesh
            onClick={() => {
                api.velocity.set(2, 2, 2);
            }}
            ref = {ref}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    );
};

export default Circle;