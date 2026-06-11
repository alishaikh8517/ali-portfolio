gsap.from("nav",{
    y:-100,
    opacity:0,
    duration:1
});

gsap.from(".hero h1",{
    y:-100,
    opacity:0,
    duration:1.5
});

gsap.from(".hero p",{
    opacity:0,
    duration:1,
    delay:0.5
});

gsap.from("button",{
    scale:0,
    duration:1,
    delay:1
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const text =
"Creative Developer • UI Designer • BCA Student";

let i = 0;

function typeWriter() {

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,80);
    }
}

typeWriter();

const btn = document.querySelector("button");

btn.addEventListener("mousemove", (e) => {

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform =
        `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

btn.addEventListener("mouseleave", () => {

    btn.style.transform = "translate(0,0)";
});
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document
.getElementById("bg")
.appendChild(renderer.domElement);

const particlesGeometry =
new THREE.BufferGeometry();

const particlesCount = 2000;

const posArray =
new Float32Array(
particlesCount * 3
);

for(let i=0;i<particlesCount*3;i++){

    posArray[i] =
    (Math.random()-0.5)*15;

}

particlesGeometry.setAttribute(
"position",
new THREE.BufferAttribute(
posArray,
3
)
);

const particlesMaterial =
new THREE.PointsMaterial({

    size:0.02

});

const particlesMesh =
new THREE.Points(
particlesGeometry,
particlesMaterial
);

scene.add(particlesMesh);

camera.position.z = 5;

function animate(){

    requestAnimationFrame(
    animate
    );

    particlesMesh.rotation.y += 0.0008;

    particlesMesh.rotation.x += 0.0003;

    renderer.render(
    scene,
    camera
    );
}

animate();

window.addEventListener(
"resize",
()=>{

camera.aspect=
window.innerWidth/
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
const title = document.getElementById("hero-title");

title.innerHTML = title.textContent
.split("")
.map(letter =>
`<span>${letter}</span>`)
.join("");

gsap.from("#hero-title span",{
    opacity:0,
    y:100,
    stagger:0.1,
    duration:1
});
window.addEventListener("load",()=>{

    gsap.to("#loader",{
        opacity:0,
        duration:1,
        delay:1.5,

        onComplete:()=>{
            document
            .getElementById("loader")
            .style.display="none";
        }
    });

});
gsap.from("#loader h1",{
    scale:0,
    duration:1
});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});