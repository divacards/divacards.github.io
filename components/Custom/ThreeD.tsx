import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, Suspense } from 'react';
import { SpinLoading } from "./CustomStatus";

export function ThreeCanvas({ fogColor, pntLgtPos, boxTexture, isBox }) {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <fog attach="fog" args={fogColor} />
                <pointLight position={pntLgtPos} />
                <Box
                    position={[0, 0, 2]}
                    rotation={[0, -0.2, 0]}
                    boxTexture={boxTexture}
                    isBox={isBox}
                />
            </Suspense>
        </Canvas>
    )
}

export function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const colorMap = useTexture(props.boxTexture)
    const ref = useRef()
    useFrame((state, delta) => (
        // props.isBox ?
        // (ref.current.rotation.x = ref.current.rotation.y += delta * 0.1) :
        (ref.current.rotation.y += 0.005)
    ))
    // Return the view, these are regular Threejs elements expressed in JSX
    if (!props.boxTexture) { return (<SpinLoading />) }

    return (
        <mesh
            {...props}
            ref={ref}
            rotation={props.isBox ? [Math.PI / -8, 0, 0] : [0, 0, 0]}
            scale={1}
        >
            <boxGeometry args={props.isBox ? [2, 2, 2] : [1.6, 3.2, 0.01]} />
            <meshStandardMaterial
                map={colorMap}
            />
        </mesh>
    )
}