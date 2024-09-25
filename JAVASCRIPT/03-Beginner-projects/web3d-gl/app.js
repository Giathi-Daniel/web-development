// Basic setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create shapes with different colors
const geometries = {
    cube: new THREE.BoxGeometry(),
    sphere: new THREE.SphereGeometry(),
    cone: new THREE.ConeGeometry(1, 2, 32),
    torus: new THREE.TorusGeometry(1, 0.4, 16, 100),
    cylinder: new THREE.CylinderGeometry(1, 1, 2, 32),
    plane: new THREE.PlaneGeometry(2, 2),
    ring: new THREE.RingGeometry(0.5, 1, 32),
    torusKnot: new THREE.TorusKnotGeometry(1, 0.4, 100, 16),
    dodecahedron: new THREE.DodecahedronGeometry(),
    icosahedron: new THREE.IcosahedronGeometry()
};

const materials = {
    cube: new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
    sphere: new THREE.MeshStandardMaterial({ color: 0xffa500 }), // Orange
    cone: new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    torus: new THREE.MeshStandardMaterial({ color: 0xffff00 }),
    cylinder: new THREE.MeshStandardMaterial({ color: 0xff00ff }),
    plane: new THREE.MeshStandardMaterial({ color: 0x00ffff }),
    ring: new THREE.MeshStandardMaterial({ color: 0xff00ff }),
    torusKnot: new THREE.MeshStandardMaterial({ color: 0x800080 }),
    dodecahedron: new THREE.MeshStandardMaterial({ color: 0x008080 }),
    icosahedron: new THREE.MeshStandardMaterial({ color: 0x808000 })
};

const shapes = {
    cube: new THREE.Mesh(geometries.cube, materials.cube),
    sphere: new THREE.Mesh(geometries.sphere, materials.sphere),
    cone: new THREE.Mesh(geometries.cone, materials.cone),
    torus: new THREE.Mesh(geometries.torus, materials.torus),
    cylinder: new THREE.Mesh(geometries.cylinder, materials.cylinder),
    plane: new THREE.Mesh(geometries.plane, materials.plane),
    ring: new THREE.Mesh(geometries.ring, materials.ring),
    torusKnot: new THREE.Mesh(geometries.torusKnot, materials.torusKnot),
    dodecahedron: new THREE.Mesh(geometries.dodecahedron, materials.dodecahedron),
    icosahedron: new THREE.Mesh(geometries.icosahedron, materials.icosahedron)
};

// Position shapes in the center of the page
const numShapesPerRow = 5;
const shapeSpacing = 4; // Distance between shapes
const rowOffset = (numShapesPerRow - 1) * shapeSpacing / 2;

const positions = [];
for (let i = 0; i < 10; i++) {
    const x = (i % numShapesPerRow) * shapeSpacing - rowOffset;
    const y = Math.floor(i / numShapesPerRow) * shapeSpacing - (shapeSpacing / 2);
    positions.push([x, y]);
}

Object.keys(shapes).forEach((key, index) => {
    shapes[key].position.set(positions[index][0], positions[index][1], 0);
    scene.add(shapes[key]);
});

// Create lighting effects
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);

scene.add(ambientLight);
scene.add(pointLight);

// Set the camera position
camera.position.z = 20;

// Animation variables
let rotationSpeed = 0.01;
let shape = 'cube';
let lightingEnabled = true;
let scaleX = 1, scaleY = 1, scaleZ = 1;
let shearX = 0, shearY = 0;
let reflectX = false, reflectY = false;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate shapes based on selected shape and rotation speed
    Object.keys(shapes).forEach(key => {
        const obj = shapes[key];
        if (key === shape) {
            obj.rotation.x += rotationSpeed;
            obj.rotation.y += rotationSpeed;

            // Apply scaling
            obj.scale.set(scaleX, scaleY, scaleZ);

            // Apply shearing
            obj.matrix.identity();
            obj.matrix.makeScale(scaleX, scaleY, scaleZ);
            obj.matrix.set(
                1, shearX, 0,
                shearY, 1, 0,
                0, 0, 1
            );

            // Apply reflection
            obj.scale.x *= reflectX ? -1 : 1;
            obj.scale.y *= reflectY ? -1 : 1;
        } else {
            obj.rotation.x = 0;
            obj.rotation.y = 0;
            obj.scale.set(1, 1, 1);
        }
    });

    // Render the scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Add event listeners for controls
document.querySelectorAll('input[name="shape"]').forEach(input => {
    input.addEventListener('change', (event) => {
        shape = event.target.value;
    });
});

document.getElementById('speed').addEventListener('input', (event) => {
    rotationSpeed = parseFloat(event.target.value);
    document.getElementById('speedValue').textContent = event.target.value;
});

document.getElementById('scaleX').addEventListener('input', (event) => {
    scaleX = parseFloat(event.target.value);
});

document.getElementById('scaleY').addEventListener('input', (event) => {
    scaleY = parseFloat(event.target.value);
});

document.getElementById('scaleZ').addEventListener('input', (event) => {
    scaleZ = parseFloat(event.target.value);
});

document.getElementById('shearX').addEventListener('input', (event) => {
    shearX = parseFloat(event.target.value);
});

document.getElementById('shearY').addEventListener('input', (event) => {
    shearY = parseFloat(event.target.value);
});

document.getElementById('reflectX').addEventListener('change', (event) => {
    reflectX = event.target.checked;
});

document.getElementById('reflectY').addEventListener('change', (event) => {
    reflectY = event.target.checked;
});

document.getElementById('lightToggle').addEventListener('change', (event) => {
    lightingEnabled = event.target.checked;
    ambientLight.visible = lightingEnabled;
    pointLight.visible = lightingEnabled;
});

// Set initial shape
shape = 'cube';

// Start animation
animate();
