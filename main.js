function createColorPowder() {
  const container = document.getElementById('color-powder-container');
  const colors = [
    '#FF6B6B', // Vibrant Red
    '#4ECDC4', // Teal
    '#FFA726', // Orange
    '#66BB6A', // Green
    '#42A5F5', // Blue
    '#AB47BC', // Purple
  ];

  for (let i = 0; i < 50; i++) {
    const powder = document.createElement('div');
    powder.classList.add('color-powder');

    // Random positioning
    powder.style.left = `${Math.random() * 100}%`;
    powder.style.top = `${Math.random() * 100}%`;

    // Random color
    powder.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Random movement
    powder.style.setProperty('--x-move', `${(Math.random() - 0.5) * 300}px`);
    powder.style.setProperty('--y-move', `${(Math.random() - 0.5) * 300}px`);

    // Random animation properties
    powder.style.animationDuration = `${Math.random() * 3 + 2}s`;
    powder.style.animationDelay = `${Math.random() * 2}s`;
    powder.style.animation = 'color-burst ease-out forwards';

    container.appendChild(powder);
  }
}

// Create color powder when page loads
window.addEventListener('load', createColorPowder);

// Add interactivity to wish buttons
document.querySelectorAll('.wish-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // You could add social sharing logic here
    alert('Spread the Holi cheer! 🎨🌈');
  });
});
