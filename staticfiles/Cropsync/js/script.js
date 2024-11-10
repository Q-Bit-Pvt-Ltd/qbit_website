// Countdown Timer Logic
function updateCountdown() {
    const launchDate = new Date("2024-12-31T00:00:00").getTime(); // Set your launch date here
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft <= 0) {
        document.getElementById('countdown-timer').innerHTML = "Launched!";
        return;
    }

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `Launching in ${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);

// Background Animation using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-animation') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adding 3D Sphere with glowing material for cinematic effect
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
    color: 0x44aa88,
    emissive: 0x44aa88,
    emissiveIntensity: 0.8
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Resize listener for responsive canvas
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
