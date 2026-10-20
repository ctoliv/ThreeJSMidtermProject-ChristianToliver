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
// Materials
// ---------------------------------------------------

const stoneMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x777777
    });

const blueMaterial =
    new THREE.MeshPhongMaterial({
        color: 0x3366ff,
        shininess: 80
    });

const greenMaterial =
    new THREE.MeshLambertMaterial({
        color: 0x2e8b57
    });

const purpleMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xaa55ff
    });


// ---------------------------------------------------
// Object 1 - Tower
// BoxGeometry
// ---------------------------------------------------

const tower =
    new THREE.Mesh(
        new THREE.BoxGeometry(3, 5, 3),
        stoneMaterial
    );

tower.position.set(
    -6,
    2.5,
    -3
);

scene.add(tower);


// ---------------------------------------------------
// Object 2 - Left Pillar
// CylinderGeometry
// ---------------------------------------------------

const pillarLeft =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.7,
            0.7,
            4,
            32
        ),
        stoneMaterial
    );

pillarLeft.position.set(
    -3,
    2,
    1
);

scene.add(pillarLeft);


// ---------------------------------------------------
// Object 3 - Right Pillar
// CylinderGeometry
// ---------------------------------------------------

const pillarRight =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.7,
            0.7,
            4,
            32
        ),
        stoneMaterial
    );

pillarRight.position.set(
    3,
    2,
    1
);

scene.add(pillarRight);


// ---------------------------------------------------
// Object 4 - Magic Orb
// SphereGeometry
// ---------------------------------------------------

const magicOrb =
    new THREE.Mesh(
        new THREE.SphereGeometry(
            1,
            32,
            32
        ),
        blueMaterial
    );

magicOrb.position.set(
    0,
    2,
    0
);

scene.add(magicOrb);


// ---------------------------------------------------
// Object 5 - Crystal
// ConeGeometry
// ---------------------------------------------------

const crystal =
    new THREE.Mesh(
        new THREE.ConeGeometry(
            1,
            3,
            6
        ),
        purpleMaterial
    );

crystal.position.set(
    6,
    1.5,
    -2
);

scene.add(crystal);


// ---------------------------------------------------
// Object 6 - Tree Trunk
// CylinderGeometry
// ---------------------------------------------------

const treeTrunk =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.5,
            0.7,
            3,
            16
        ),
        stoneMaterial
    );

treeTrunk.position.set(
    -6,
    1.5,
    5
);

scene.add(treeTrunk);


// ---------------------------------------------------
// Object 7 - Tree Top
// ConeGeometry
// ---------------------------------------------------

const treeTop =
    new THREE.Mesh(
        new THREE.ConeGeometry(
            2,
            4,
            16
        ),
        greenMaterial
    );

treeTop.position.set(
    -6,
    4,
    5
);

scene.add(treeTop);


// ---------------------------------------------------
// Object 8 - Fountain Ring
// TorusGeometry
// ---------------------------------------------------

const fountainRing =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            2,
            0.4,
            16,
            100
        ),
        blueMaterial
    );

fountainRing.rotation.x =
    Math.PI / 2;

fountainRing.position.set(
    5,
    0.5,
    5
);

scene.add(fountainRing);


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