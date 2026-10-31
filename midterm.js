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
        0.6
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
        Math.PI / 5,
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
    new THREE.MeshPhysicalMaterial({
        color: 0x7b8080,
        roughness: 0.45,
        metalness: 0.35,
        clearcoat: 0.25,
        clearcoatRoughness: 0.4
    });

const darkStoneMaterial =
    new THREE.MeshPhysicalMaterial({
        color: 0x555b60,
        roughness: 0.45,
        metalness: 0.35,
        clearcoat: 0.25,
        clearcoatRoughness: 0.4
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
    new THREE.MeshToonMaterial({
        color: 0x8f1d2c,
        side: THREE.DoubleSide
    });

const waterMaterial =
    new THREE.MeshPhysicalMaterial({
        color: 0x68a9c7,
        roughness: 0.2,
        metalness: 0,
        transmission: 0.3,
        transparent: true,
        opacity: 0.85
    });

const ironMaterial =
    new THREE.MeshPhysicalMaterial({
        color: 0x252a30,
        roughness: 0.45,
        metalness: 0.35,
        clearcoat: 0.25,
        clearcoatRoughness: 0.4
    });

const goldMaterial =
    new THREE.MeshPhysicalMaterial({
        color: 0xd8b44a,
        roughness: 0.35,
        metalness: 0.75,
        clearcoat: 0.3
    });

const royalMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x8e1d2c,
        roughness: 0.75
    });

const royalSkinMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xb7793e,
        roughness: 0.8
    });

const deadTreeLambertMaterial =
    new THREE.MeshLambertMaterial({
        color: 0x4a3325
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
scene.add(leftGatePillar);

const rightGatePillar =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.65, 0.75, 3.2, 12),
        stoneMaterial
    );
rightGatePillar.castShadow = true;
rightGatePillar.receiveShadow = true;
rightGatePillar.position.set(2.2, 1.6, -7);
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

const leftGatePivot =
    new THREE.Group();
leftGatePivot.position.set(-1.7, 0, -7.15);
scene.add(leftGatePivot);

const leftGateDoor =
    new THREE.Mesh(
        new THREE.BoxGeometry(1.68, 3.1, 0.25),
        woodMaterial
    );
leftGateDoor.castShadow = true;
leftGateDoor.receiveShadow = true;
leftGateDoor.position.set(0.84, 1.55, 0);
leftGatePivot.add(leftGateDoor);

const rightGatePivot =
    new THREE.Group();
rightGatePivot.position.set(1.7, 0, -7.15);
scene.add(rightGatePivot);

const rightGateDoor =
    new THREE.Mesh(
        new THREE.BoxGeometry(1.68, 3.1, 0.25),
        woodMaterial
    );
rightGateDoor.castShadow = true;
rightGateDoor.receiveShadow = true;
rightGateDoor.position.set(-0.84, 1.55, 0);
rightGatePivot.add(rightGateDoor);

const gateBands = [
    { pivot: leftGatePivot, x: 0.84 },
    { pivot: rightGatePivot, x: -0.84 }
];

gateBands.forEach((door) => {
    const horizontalBand =
        new THREE.Mesh(
            new THREE.BoxGeometry(1.68, 0.12, 0.3),
            ironMaterial
        );
    horizontalBand.position.set(door.x, 1.5, 0.1);
    door.pivot.add(horizontalBand);

    const verticalBand =
        new THREE.Mesh(
            new THREE.BoxGeometry(0.12, 3, 0.3),
            ironMaterial
        );
    verticalBand.position.set(door.x, 1.55, 0.1);
    door.pivot.add(verticalBand);
});

// ---------------------------------------------------
// King in Front of the Gate
// ---------------------------------------------------

const frontKing =
    new THREE.Group();
frontKing.position.set(0, 0, -9);
scene.add(frontKing);

const frontKingBody =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.42, 0.68, 1.55, 12),
        royalMaterial
    );
frontKingBody.position.y = 1.05;
frontKingBody.castShadow = true;
frontKingBody.receiveShadow = true;
frontKing.add(frontKingBody);

const frontKingCape =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.92, 1.7, 12, 1, true),
        royalMaterial
    );
frontKingCape.position.y = 1.05;
frontKingCape.scale.z = 0.45;
frontKingCape.castShadow = true;
frontKing.add(frontKingCape);

const frontKingHead =
    new THREE.Mesh(
        new THREE.SphereGeometry(0.38, 16, 12),
        royalSkinMaterial
    );
frontKingHead.position.set(0, 2.15, 0);
frontKingHead.castShadow = true;
frontKing.add(frontKingHead);

const frontKingCrown =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.34, 0.42, 0.32, 10),
        goldMaterial
    );
frontKingCrown.position.y = 2.52;
frontKingCrown.castShadow = true;
frontKing.add(frontKingCrown);

for (let i = 0; i < 5; i += 1) {
    const crownPoint =
        new THREE.Mesh(
            new THREE.ConeGeometry(0.095, 0.42, 8),
            goldMaterial
        );
    const angle =
        (i / 5) * Math.PI * 2;

    crownPoint.position.set(
        Math.cos(angle) * 0.34,
        2.88,
        Math.sin(angle) * 0.34
    );
    crownPoint.castShadow = true;
    frontKing.add(crownPoint);
}


// ---------------------------------------------------
// Enclosed Courtyard Walls and Interior
// ---------------------------------------------------

const leftCurtainWall =
    new THREE.Mesh(
        new THREE.BoxGeometry(1, 4, 14),
        stoneMaterial
    );
leftCurtainWall.castShadow = true;
leftCurtainWall.receiveShadow = true;
leftCurtainWall.position.set(-10, 2, 0);
scene.add(leftCurtainWall);

const rightCurtainWall =
    new THREE.Mesh(
        new THREE.BoxGeometry(1, 4, 14),
        stoneMaterial
    );
rightCurtainWall.castShadow = true;
rightCurtainWall.receiveShadow = true;
rightCurtainWall.position.set(10, 2, 0);
scene.add(rightCurtainWall);

[-5, -2.5, 0, 2.5, 5].forEach((z) => {
    [-10, 10].forEach((x) => {
        const sideBattlement =
            new THREE.Mesh(
                new THREE.BoxGeometry(1.15, 1.2, 1.15),
                darkStoneMaterial
            );
        sideBattlement.position.set(x, 4.6, z);
        sideBattlement.castShadow = true;
        sideBattlement.receiveShadow = true;
        scene.add(sideBattlement);
    });
});

const courtyardFloor =
    new THREE.Mesh(
        new THREE.PlaneGeometry(19, 13),
        darkStoneMaterial
    );
courtyardFloor.rotation.x = -Math.PI / 2;
courtyardFloor.position.set(0, 0.012, 0);
courtyardFloor.receiveShadow = true;
scene.add(courtyardFloor);

for (let x = -8; x <= 8; x += 2) {
    for (let z = -5; z <= 5; z += 2) {
        const pavingStone =
            new THREE.Mesh(
                new THREE.BoxGeometry(1.75, 0.025, 1.75),
                ((x + z) / 2) % 2 === 0
                    ? stoneMaterial
                    : darkStoneMaterial
            );
        pavingStone.position.set(x, 0.035, z);
        pavingStone.receiveShadow = true;
        scene.add(pavingStone);
    }
}

const frontLeftTower =
    new THREE.Mesh(
        new THREE.CylinderGeometry(1.35, 1.55, 5.4, 12),
        stoneMaterial
    );
frontLeftTower.castShadow = true;
frontLeftTower.receiveShadow = true;
frontLeftTower.position.set(-10, 2.7, 7);
scene.add(frontLeftTower);

const frontRightTower =
    new THREE.Mesh(
        new THREE.CylinderGeometry(1.35, 1.55, 5.4, 12),
        stoneMaterial
    );
frontRightTower.castShadow = true;
frontRightTower.receiveShadow = true;
frontRightTower.position.set(10, 2.7, 7);
scene.add(frontRightTower);

[[-10, 7], [10, 7]].forEach(([x, z]) => {
    const towerRoof =
        new THREE.Mesh(
            new THREE.ConeGeometry(1.75, 2, 12),
            roofMaterial
        );
    towerRoof.castShadow = true;
    towerRoof.position.set(x, 6.4, z);
    scene.add(towerRoof);
});


// ---------------------------------------------------
// Courtyard Pillars
// ---------------------------------------------------

const courtyardPillarPositions = [
    [-4, 1, -1],
    [4, 1, -1]
];

const courtyardFlags = [];

courtyardPillarPositions.forEach((position) => {
    const pillarHeight =
        3.3 * 1.25;

    const pillar =
        new THREE.Mesh(
            new THREE.CylinderGeometry(0.55, 0.65, 3.3, 10),
            darkStoneMaterial
        );
    pillar.position.set(
        position[0],
        pillarHeight / 2,
        position[2]
    );
    pillar.castShadow = true;
    pillar.receiveShadow = true;
    pillar.scale.set(1, 1.25, 1);
    scene.add(pillar);

    const pillarTop =
        new THREE.Mesh(
            new THREE.BoxGeometry(1.35, 0.35, 1.35),
            stoneMaterial
        );
    pillarTop.position.set(
        position[0],
        pillarHeight + 0.175,
        position[2]
    );
    pillarTop.castShadow = true;
    pillarTop.receiveShadow = true;
    pillarTop.rotation.y = Math.PI / 8;
    scene.add(pillarTop);

    const flagPole =
        new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 2.2, 8),
            ironMaterial
        );
    flagPole.castShadow = true;
    flagPole.position.set(
        position[0],
        pillarHeight + 1.1,
        position[2]
    );
    scene.add(flagPole);

    const flag =
        new THREE.Mesh(
            new THREE.BoxGeometry(1.35, 1.1, 0.08),
            bannerMaterial
        );
    flag.castShadow = true;
    flag.position.set(
        position[0] + 0.675,
        pillarHeight + 1.75,
        position[2]
    );
    scene.add(flag);
    courtyardFlags.push(flag);
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

const fountainSprays = [];

for (let ringIndex = 0; ringIndex < 3; ringIndex += 1) {
    const spray =
        new THREE.Mesh(
            new THREE.ConeGeometry(
                0.3 - ringIndex * 0.05,
                0.95 - ringIndex * 0.12,
                12,
                1,
                true
            ),
            new THREE.MeshPhongMaterial({
                color: 0x9bdcff,
                emissive: 0x173b5c,
                shininess: 120,
                transparent: true,
                opacity: 0.75 - ringIndex * 0.12,
                side: THREE.DoubleSide
            })
        );

    spray.position.set(
        5,
        2.75 + ringIndex * 0.35,
        4
    );
    spray.castShadow = true;
    scene.add(spray);
    fountainSprays.push(spray);
}

const fountainRipples = [];

for (let ringIndex = 0; ringIndex < 4; ringIndex += 1) {
    const ripple =
        new THREE.Mesh(
            new THREE.TorusGeometry(
                0.45 + ringIndex * 0.28,
                0.018,
                6,
                48
            ),
            new THREE.MeshBasicMaterial({
                color: 0xbfeaff,
                transparent: true,
                opacity: 0.75
            })
        );

    ripple.rotation.x = Math.PI / 2;
    ripple.position.set(5, 0.625, 4);
    scene.add(ripple);
    fountainRipples.push(ripple);
}

const fountainDrops = [];

for (let i = 0; i < 36; i += 1) {
    const drop =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.045 + (i % 4) * 0.008,
                8,
                6
            ),
            new THREE.MeshPhongMaterial({
                color: 0xc8efff,
                emissive: 0x234a66,
                shininess: 160,
                transparent: true,
                opacity: 0.9
            })
        );

    drop.castShadow = true;
    scene.add(drop);

    fountainDrops.push({
        mesh: drop,
        angle: (i / 36) * Math.PI * 2,
        offset: i / 36,
        radius: 0.65 + (i % 3) * 0.22
    });
}


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
        new THREE.BoxGeometry(1.25, 2.1, 0.12),
        bannerMaterial
    );
leftBanner.castShadow = true;
leftBanner.position.set(-2.675, 4.25, -6.4);
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
        new THREE.BoxGeometry(1.25, 2.1, 0.12),
        bannerMaterial
    );
rightBanner.castShadow = true;
rightBanner.position.set(2.675, 4.25, -6.4);
scene.add(rightBanner);


// ---------------------------------------------------
// Dead Fantasy Tree
// ---------------------------------------------------

const deadTreeTrunk =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.35, 0.55, 3.8, 9),
        deadTreeLambertMaterial
    );
deadTreeTrunk.castShadow = true;
deadTreeTrunk.receiveShadow = true;
deadTreeTrunk.position.set(-7, 1.9, 9);
deadTreeTrunk.rotation.z = -Math.PI / 16;
deadTreeTrunk.scale.set(1.2, 1, 1.2);
scene.add(deadTreeTrunk);

const leftBranch =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.18, 2, 8),
        deadTreeLambertMaterial
    );
leftBranch.castShadow = true;
leftBranch.position.set(-7.5, 3.5, 9);
leftBranch.rotation.z = Math.PI / 3;
scene.add(leftBranch);

const rightBranch =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.18, 2.3, 8),
        deadTreeLambertMaterial
    );
rightBranch.castShadow = true;
rightBranch.position.set(-6.45, 3.7, 9);
rightBranch.rotation.z = -Math.PI / 2.8;
rightBranch.scale.set(1, 1, 1.15);
scene.add(rightBranch);

const upperBranch =
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.12, 1.7, 8),
        deadTreeLambertMaterial
    );
upperBranch.castShadow = true;
upperBranch.position.set(-7.05, 4.45, 9);
upperBranch.rotation.z = Math.PI / 10;
scene.add(upperBranch);

// ---------------------------------------------------
// Keyboard Controls
// ---------------------------------------------------

let fountainGlowOn = true;
let bannerAndFountainMoving = true;
let gateLightOn = true;
let gateOpen = false;
let gateAnimation = 0;

window.addEventListener(
    'keydown',
    (event) => {

        if (event.key === '1') {
            fountainGlowOn =
                !fountainGlowOn;

            fountainGlow.visible =
                fountainGlowOn;

            fountainLight.visible =
                fountainGlowOn;
        }

        if (event.key === '2') {
            bannerAndFountainMoving =
                !bannerAndFountainMoving;
        }

        if (event.key === '3') {
            gateLightOn =
                !gateLightOn;

            gateSpotlight.visible =
                gateLightOn;
        }

        if (event.key === '4') {
            gateOpen =
                !gateOpen;
        }
    }
);

// ---------------------------------------------------
// Animation Loop
// ---------------------------------------------------

function animate() {

    requestAnimationFrame(animate);

if (bannerAndFountainMoving) {
    // 1. Slowly rotate the fountain glow
    fountainGlow.rotation.y += 0.03;

    // 2. Make the fountain glow pulse
    const pulse =
        1 + Math.sin(Date.now() * 0.003) * 0.15;

    fountainGlow.scale.set(
        pulse,
        pulse,
        pulse
    );

    // 3. Animate the central fountain sprays
    const fountainTime =
        Date.now() * 0.001;

    fountainSprays.forEach((spray, index) => {
        const sprayPulse =
            1 +
            Math.sin(fountainTime * 2.2 - index * 0.8) *
            (0.12 + index * 0.03);

        spray.scale.set(
            sprayPulse,
            0.75 + sprayPulse * 0.25,
            sprayPulse
        );

        spray.rotation.y =
            fountainTime * (0.25 + index * 0.08);
    });

    // 4. Animate droplets in curved, repeated water arcs
    fountainDrops.forEach((dropData) => {
        const progress =
            (fountainTime * 0.32 + dropData.offset) % 1;

        const arc =
            Math.sin(progress * Math.PI);

        const horizontalRadius =
            dropData.radius *
            (0.15 + progress * 0.85);

        dropData.mesh.position.set(
            5 +
                Math.cos(
                    dropData.angle + fountainTime * 0.12
                ) *
                horizontalRadius,
            2.25 +
                arc * 1.8 -
                progress * 0.15,
            4 +
                Math.sin(
                    dropData.angle + fountainTime * 0.12
                ) *
                horizontalRadius
        );

        const dropSize =
            0.7 +
            arc * 0.65;

        dropData.mesh.scale.set(
            dropSize,
            dropSize * 1.25,
            dropSize
        );
    });

    // 5. Expand circular water ripples across the basin
    fountainRipples.forEach((ripple, index) => {
        const ripplePhase =
            (fountainTime * 0.45 + index / fountainRipples.length) %
            1;

        const rippleScale =
            0.55 + ripplePhase * 1.05;

        ripple.scale.set(
            rippleScale,
            rippleScale,
            rippleScale
        );

        ripple.material.opacity =
            0.7 * (1 - ripplePhase);
    });

    const surfacePulse =
        1 + Math.sin(fountainTime * 2.4) * 0.018;

    fountainWater.scale.set(
        surfacePulse,
        1,
        surfacePulse
    );
}

// 6. Make the banners sway
if (bannerAndFountainMoving) {

         leftBanner.rotation.z =
            Math.sin(Date.now() * 0.0025) * 0.20;
        leftBanner.rotation.y =
            Math.sin(Date.now() * 0.0025) * 0.12;

        rightBanner.rotation.z =
            -Math.sin(Date.now() * 0.0025) * 0.20;
        rightBanner.rotation.y =
            -Math.sin(Date.now() * 0.0025) * 0.12;

    courtyardFlags.forEach((flag, index) => {
        const sway =
            Math.sin(Date.now() * 0.0025 + index * 0.8);

        flag.rotation.z =
            sway * 0.16;
        flag.rotation.y =
            sway * 0.10;
    });
    }

    const gateTarget =
        gateOpen ? 1 : 0;

    gateAnimation +=
        (gateTarget - gateAnimation) * 0.055;

    leftGatePivot.rotation.y =
        -gateAnimation * Math.PI / 2;
    rightGatePivot.rotation.y =
        gateAnimation * Math.PI / 2;

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