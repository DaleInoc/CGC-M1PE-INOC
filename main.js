import * as THREE from 'three';

const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xcccccc);
scene.background = new THREE.Color( 0xffffff );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
//scene.add( ambientLight );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 100 );
directionalLight.position.set(0, 0, -1).normalize();
directionalLight.castShadow = true;
//scene.add( directionalLight );

const light = new THREE.PointLight( 0x404040, 300, 1000);
light.position.set( 0, .75, 2 );
scene.add( light );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;


renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


const leftWallGeometry = new THREE.BoxGeometry( 5, 2, 0.5 );
const leftWallMaterial = new THREE.MeshLambertMaterial({color:0xf2e8bd, fog: true});
const leftWall = new THREE.Mesh( leftWallGeometry, leftWallMaterial );
leftWall.castShadow = true;
leftWall.receiveShadow = true;
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = 2.5;
leftWall.position.y = 0;
leftWall.position.z = 2;
scene.add( leftWall );

const rightWallGeometry = new THREE.BoxGeometry( 5, 2, 0.5 );
const rightWallMaterial = new THREE.MeshLambertMaterial({color:0xf2e8bd, fog: true});
const rightWall = new THREE.Mesh( rightWallGeometry, rightWallMaterial );
rightWall.castShadow = true;
rightWall.receiveShadow = true;
rightWall.rotation.y = Math.PI / 2;
rightWall.position.x = -2.5;
rightWall.position.y = 0;
rightWall.position.z = 2;
scene.add( rightWall );

const ceilingGeometry = new THREE.BoxGeometry( 5, 7, 0.5 );
const ceilingWallMaterial = new THREE.MeshLambertMaterial({color:0x674928, fog: true});
const ceilingWall = new THREE.Mesh( ceilingGeometry, ceilingWallMaterial );
ceilingWall.castShadow = true;
ceilingWall.receiveShadow = true;
ceilingWall.rotation.x = Math.PI / 2;
ceilingWall.position.x = 0;
ceilingWall.position.y = 1.25;
ceilingWall.position.z = 2;
scene.add( ceilingWall );

const floorGeometry = new THREE.BoxGeometry( 5, 7, 0.5 );
const floorMaterial = new THREE.MeshLambertMaterial({color:0x674928, fog: true});
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.castShadow = true;
floor.receiveShadow = true;
floor.rotation.x = Math.PI / 2;
floor.position.x = 0;
floor.position.y = -1.25;
floor.position.z = 2;
scene.add( floor );

const carpetGeometry = new THREE.BoxGeometry( 2, 2, 0.1 );
const carpetMaterial = new THREE.MeshLambertMaterial({color:0x808080, fog: true});
const carpet = new THREE.Mesh( carpetGeometry, carpetMaterial );
carpet.castShadow = true;
carpet.receiveShadow = true;
carpet.rotation.x = Math.PI / 2;
carpet.position.x = 0;
carpet.position.y = -1;
carpet.position.z = 2.5;
scene.add( carpet );

const windowWallGeometry = new THREE.BoxGeometry( 5, 2, 0.5 );
const windowWallMaterial = new THREE.MeshLambertMaterial({color:0xf2e8bd, fog: true});
const windowWall = new THREE.Mesh( windowWallGeometry, windowWallMaterial );
windowWall.castShadow = true;
windowWall.receiveShadow = true;
windowWall.position.x = 0;
windowWall.position.y = 0;
windowWall.position.z = -0.45;
scene.add( windowWall );


camera.position.z = 5;

function animate() {
    renderer.render( scene, camera );
}