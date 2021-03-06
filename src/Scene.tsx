/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Bastien Genbrugge (https://sketchfab.com/bastienBGR)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/c613bee6fbd041e58a35d777ae87bdcb
title: Rocket Orbiting Moon
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Ring_1_Ring_0: THREE.Mesh
    Raket_1_Raket_0: THREE.Mesh
    Subdivision_Surface_Subdivision_Surface1_0: THREE.Mesh
  }
  materials: {
    Ring: THREE.MeshStandardMaterial
    Raket: THREE.MeshStandardMaterial
    ['Subdivision_Surface.1']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-160.7, 8.56, 70.84]} rotation={[-1.55, -0.88, 2.54]} scale={1.02}>
            <mesh geometry={nodes.Ring_1_Ring_0.geometry} material={materials.Ring} />
          </group>
          <group position={[0, -59.29, 0]} rotation={[0, 1.24, 0]}>
            <mesh geometry={nodes.Raket_1_Raket_0.geometry} material={materials.Raket} />
          </group>
          <group position={[6.23, 27.45, 6.83]} rotation={[0.02, -0.11, -2.16]}>
            <mesh
              geometry={nodes.Subdivision_Surface_Subdivision_Surface1_0.geometry}
              material={materials['Subdivision_Surface.1']}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
