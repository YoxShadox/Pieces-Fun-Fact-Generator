const facts = [
    "Earth is approximately 4.54 billion years old.",
    "Earth has a diameter of about 12,742 kilometers.",
    "About 71% of Earth's surface is covered by water.",
    "Earth's atmosphere is composed of 78% nitrogen and 21% oxygen.",
    "Earth has a strong magnetic field.",
    "Earth's crust is divided into tectonic plates.",
    "Earth experiences four distinct seasons.",
    "Earth has one natural satellite, the Moon.",
    "Earth is the only known planet to support life.",
    "Earth rotates on its axis once every 24 hours."
];

document.getElementById('generateButton').addEventListener('click', () => {
    // Change face color randomly
    const face = document.getElementById('face');
    face.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    // Display a random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;

    // Play sound effect
    const audio = new Audio('click.mp3');
    audio.play();
});
