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
// Courtyard Lighting
// ---------------------------------------------------

// Low nighttime ambient light
const ambientLight =
    new THREE.AmbientLight(
        0x8090b0,
        0.45
    );

scene.add(ambientLight);


// ---------------------------------------------------
// Point Light - Fountain Glow
// ---------------------------------------------------

const fountainLight =
    new THREE.PointLight(
        0x55aaff,
        35,
        15
    );

fountainLight.position.set(
    5,
    3,
    4
);

fountainLight.castShadow = true;

scene.add(fountainLight);


// ---------------------------------------------------
// Spot Light - Castle Gate
// ---------------------------------------------------

const gateSpotlight =
    new THREE.SpotLight(
        0xffcc88,
        80,
        30,
        Math.PI / 6,
        0.4,
        1
    );

gateSpotlight.position.set(
    0,
    10,
    5
);

gateSpotlight.target.position.set(
    0,
    1.5,
    -7
);

gateSpotlight.castShadow = true;

scene.add(gateSpotlight);
scene.add(gateSpotlight.target);


// ---------------------------------------------------
// Materials
// ---------------------------------------------------

const stoneMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x7b8080,
        roughness: 0.9
    });

const darkStoneMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x555b60,
        roughness: 0.95
    });

const roofMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x35445e,
        roughness: 0.85
    });

const woodMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x6f4930,
        roughness: 0.9
    });

const bannerMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x8f1d2c,
        side: THREE.DoubleSide,
        roughness: 0.7
    });

const waterMaterial =
    new THREE.MeshPhongMaterial({
        color: 0x68a9c7,
        shininess: 100
    });

const ironMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x252a30,
        roughness: 0.6
    });

const deadTreeMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x4a3325,
        roughness: 1
    });


// ---------------------------------------------------
// Main Castle Wall
// ---------------------------------------------------

const leftWall =
    new THREE.Mesh(
        new THREE.BoxGeometry(7.2, 4, 1),
        stoneMaterial
    );
leftWall.castShadow = true;
leftWall.receiveShadow = true;
leftWall.position.set(-5.4, 2, -7);
scene.add(leftWall);

const rightWall =
    new THREE.Mesh(
        new THREE.BoxGeometry(7.2, 4, 1),
        stoneMaterial
    );
rightWall.castShadow = true;
rightWall.receiveShadow = true;
rightWall.position.set(5.4, 2, -7);
scene.add(rightWall);

const wallPositions = [-8, -6, -4, -2, 2, 4, 6, 8];

wallPositions.forEach((x) => {
    const battlement =
        new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 1.2, 1.15),
            darkStoneMaterial
        );
    battlement.position.set(x, 4.6, -7);
    scene.add(battlement);
});


// ---------------------------------------------------
// Castle Towers
// ---------------------------------------------------

const leftTower =
    new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.7, 6, 12),
        stoneMaterial
    );
leftTower.castShadow = true;
leftTower.receiveShadow = true;
leftTower.position.set(-9, 3, -7);
leftTower.rotation.y = Math.PI / 12;
scene.add(leftTower);

const rightTower =
    new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.7, 6, 12),
        stoneMaterial
    );
rightTower.castShadow = true;
rightTower.receiveShadow = true;
rightTower.position.set(9, 3, -7);
rightTower.scale.set(1.05, 1, 1.05);
scene.add(rightTower);

const leftTowerRoof =
    new THREE.Mesh(
        new THREE.ConeGeometry(1.9, 2.2, 12),
        roofMaterial
    );
leftTowerRoof.castShadow = true;
leftTowerRoof.position.set(-9, 7.1, -7);
leftTowerRoof.rotation.y = Math.PI / 8;
scene.add(leftTowerRoof);

const rightTowerRoof =
    new THREE.Mesh(
        new THREE.ConeGeometry(1.9, 2.2, 12),
        roofMaterial
    );
rightTowerRoof.castShadow = true;
rightTowerRoof.position.set(9, 7.1, -7);
scene.add(rightTowerRoof);


// ---------------------------------------------------
// Arched Gate and Gate Pillars
// ---------------------------------------------------

const leftGatePillar =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.65, 0.75, 3.2, 12),
        stoneMaterial
    );
leftGatePillar.castShadow = true;
leftGatePillar.receiveShadow = true;
leftGatePillar.position.set(-2.2, 1.6, -7);
leftGatePillar.scale.set(1, 1.1, 1);
scene.add(leftGatePillar);

const rightGatePillar =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.65, 0.75, 3.2, 12),
        stoneMaterial
    );
rightGatePillar.castShadow = true;
rightGatePillar.receiveShadow = true;
rightGatePillar.position.set(2.2, 1.6, -7);
rightGatePillar.rotation.z = Math.PI / 24;
scene.add(rightGatePillar);

const gateArch =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            1.55,
            0.3,
            10,
            24,
            Math.PI
        ),
        stoneMaterial
    );
gateArch.castShadow = true;
gateArch.receiveShadow = true;
gateArch.position.set(0, 3, -7);
gateArch.rotation.z = 0;
scene.add(gateArch);

const gateDoor =
    new THREE.Mesh(
        new THREE.BoxGeometry(3.4, 3.1, 0.25),
        woodMaterial
    );
gateDoor.castShadow = true;
gateDoor.receiveShadow = true;
gateDoor.position.set(0, 1.55, -7.15);
scene.add(gateDoor);

const gateIronBand =
    new THREE.Mesh(
        new THREE.BoxGeometry(3.45, 0.12, 0.3),
        ironMaterial
    );
gateIronBand.position.set(0, 1.5, -7.05);
scene.add(gateIronBand);

const gateVerticalBand =
    new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 3, 0.3),
        ironMaterial
    );
gateVerticalBand.position.set(0, 1.55, -7.05);
scene.add(gateVerticalBand);


// ---------------------------------------------------
// Courtyard Pillars
// ---------------------------------------------------

const courtyardPillarPositions = [
    [-4, 1, 1],
    [4, 1, 1]
];

courtyardPillarPositions.forEach((position) => {
    const pillar =
        new THREE.Mesh(
            new THREE.CylinderGeometry(0.55, 0.65, 3.3, 10),
            darkStoneMaterial
        );
    pillar.position.set(position[0], position[1] + 1.65, position[2]);
    pillar.scale.set(1, 1.25, 1);
    scene.add(pillar);

    const pillarTop =
        new THREE.Mesh(
            new THREE.BoxGeometry(1.35, 0.35, 1.35),
            stoneMaterial
        );
    pillarTop.position.set(position[0], 3.85, position[2]);
    pillarTop.rotation.y = Math.PI / 8;
    scene.add(pillarTop);
});


// ---------------------------------------------------
// Small Fountain
// ---------------------------------------------------

const fountainBase =
    new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 2, 0.5, 16),
        darkStoneMaterial
    );
fountainBase.castShadow = true;
fountainBase.receiveShadow = true;
fountainBase.position.set(5, 0.25, 4);
scene.add(fountainBase);

const fountainWater =
    new THREE.Mesh(
        new THREE.CylinderGeometry(1.55, 1.55, 0.12, 16),
        waterMaterial
    );
fountainWater.position.set(5, 0.55, 4);
scene.add(fountainWater);

const fountainPost =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.35, 1.8, 12),
        stoneMaterial
    );
fountainPost.castShadow = true;
fountainPost.position.set(5, 1.3, 4);
scene.add(fountainPost);

const fountainBowl =
    new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 16, 12),
        stoneMaterial
    );
fountainBowl.position.set(5, 2.05, 4);
fountainBowl.scale.set(1, 0.45, 1);
scene.add(fountainBowl);

const fountainGlow =
    new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 12),
        waterMaterial
    );
fountainGlow.position.set(5, 2.25, 4);
fountainGlow.scale.set(1, 1.3, 1);
scene.add(fountainGlow);


// ---------------------------------------------------
// Crates and Barrels
// ---------------------------------------------------

const leftCrate =
    new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 1.4, 1.4),
        woodMaterial
    );
leftCrate.castShadow = true;
leftCrate.receiveShadow = true;
leftCrate.position.set(-4.8, 0.7, 5.5);
leftCrate.rotation.y = Math.PI / 6;
leftCrate.scale.set(1, 1.1, 1);
scene.add(leftCrate);

const stackedCrate =
    new THREE.Mesh(
        new THREE.BoxGeometry(1.15, 1.15, 1.15),
        woodMaterial
    );
stackedCrate.castShadow = true;
stackedCrate.receiveShadow = true;
stackedCrate.position.set(-5.8, 0.575, 4.7);
stackedCrate.rotation.z = -Math.PI / 12;
stackedCrate.scale.set(1, 1, 1.1);
scene.add(stackedCrate);

const barrel =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.65, 0.65, 1.5, 12),
        woodMaterial
    );
barrel.castShadow = true;
barrel.receiveShadow = true;
barrel.position.set(3.2, 0.75, 6);
barrel.rotation.z = Math.PI / 2;
scene.add(barrel);

const barrelBands = [-0.45, 0.45];
barrelBands.forEach((xOffset) => {
    const band =
        new THREE.Mesh(
            new THREE.TorusGeometry(0.66, 0.06, 8, 16),
            ironMaterial
        );
    band.position.set(3.2 + xOffset, 0.75, 6);
    band.rotation.y = Math.PI / 2;
    scene.add(band);
});


// ---------------------------------------------------
// Castle Banners
// ---------------------------------------------------

const bannerPoleLeft =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 3.6, 8),
        ironMaterial
    );
bannerPoleLeft.position.set(-3.3, 3.5, -6.4);
scene.add(bannerPoleLeft);

const leftBanner =
    new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 2.1, 1.25),
        bannerMaterial
    );
leftBanner.castShadow = true;
leftBanner.position.set(-3.3, 3.1, -5.75);
leftBanner.rotation.x = -Math.PI / 8;
scene.add(leftBanner);

const bannerPoleRight =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 3.6, 8),
        ironMaterial
    );
bannerPoleRight.position.set(3.3, 3.5, -6.4);
scene.add(bannerPoleRight);

const rightBanner =
    new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 2.1, 1.25),
        bannerMaterial
    );
rightBanner.castShadow = true;
rightBanner.position.set(3.3, 3.1, -5.75);
rightBanner.rotation.x = Math.PI / 8;
scene.add(rightBanner);


// ---------------------------------------------------
// Dead Fantasy Tree
// ---------------------------------------------------

const deadTreeTrunk =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.35, 0.55, 3.8, 9),
        deadTreeMaterial
    );
deadTreeTrunk.castShadow = true;
deadTreeTrunk.receiveShadow = true;
deadTreeTrunk.position.set(-7, 1.9, 5);
deadTreeTrunk.rotation.z = -Math.PI / 16;
deadTreeTrunk.scale.set(1.2, 1, 1.2);
scene.add(deadTreeTrunk);

const leftBranch =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.18, 2, 8),
        deadTreeMaterial
    );
leftBranch.castShadow = true;
leftBranch.position.set(-7.5, 3.5, 5);
leftBranch.rotation.z = Math.PI / 3;
scene.add(leftBranch);

const rightBranch =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.18, 2.3, 8),
        deadTreeMaterial
    );
rightBranch.castShadow = true;
rightBranch.position.set(-6.45, 3.7, 5);
rightBranch.rotation.z = -Math.PI / 2.8;
rightBranch.scale.set(1, 1, 1.15);
scene.add(rightBranch);

const upperBranch =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.12, 1.7, 8),
        deadTreeMaterial
    );
upperBranch.castShadow = true;
upperBranch.position.set(-7.05, 4.45, 5);
upperBranch.rotation.z = Math.PI / 10;
scene.add(upperBranch);


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