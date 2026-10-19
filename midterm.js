import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ---------------------------------------------------
// Scene
// ---------------------------------------------------

const scene = new THREE.Scene();

scene.background =
    new THREE.Color(0x101522);


// ---------------------------------------------------
// Camera
// ---------------------------------------------------

const camera =
    new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

camera.position.set(
    0,
    8,
    15
);


// ---------------------------------------------------
// Renderer
// ---------------------------------------------------

const renderer =
    new THREE.WebGLRenderer({
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.shadowMap.enabled = true;

document.body.appendChild(
    renderer.domElement
);


// ---------------------------------------------------
// Orbit Controls
// ---------------------------------------------------

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );

controls.enableDamping = true;

controls.target.set(
    0,
    1,
    0
);


// ---------------------------------------------------
// Ground
// ---------------------------------------------------

const groundGeometry =
    new THREE.PlaneGeometry(
        30,
        30
    );

const groundMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x3f4a3f,
        roughness: 0.8
    });

const ground =
    new THREE.Mesh(
        groundGeometry,
        groundMaterial
    );

ground.rotation.x =
    -Math.PI / 2;

ground.position.y = 0;

ground.receiveShadow = true;

scene.add(ground);


// ---------------------------------------------------
// Temporary Ambient Light
// ---------------------------------------------------

// This will be adjusted during the lighting checkpoint.

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        0.8
    );

scene.add(ambientLight);


// ---------------------------------------------------
// Animation Loop
// ---------------------------------------------------

function animate() {

    requestAnimationFrame(animate);

    controls.update();

    renderer.render(
        scene,
        camera
    );
}

animate();


// ---------------------------------------------------
// Resize
// ---------------------------------------------------

window.addEventListener(
    'resize',
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);