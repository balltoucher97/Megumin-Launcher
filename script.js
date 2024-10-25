// Dropdown logic for the play button
const playButton = document.querySelector('.play-button');
const dropdown = document.querySelector('.dropdown');

// Toggle dropdown with smooth animation
playButton.addEventListener('click', () => {
  const isVisible = dropdown.classList.contains('visible');

  if (!isVisible) {
    dropdown.style.animation = 'slideDown 0.5s ease forwards';
    dropdown.classList.add('visible');
  } else {
    dropdown.style.animation = 'slideUp 0.5s ease forwards';
    setTimeout(() => dropdown.classList.remove('visible'), 500); // Remove visibility after animation
  }
});

// Keyframes animation for dropdown slide effects
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-20px); opacity: 0; }
  }
`;
document.head.appendChild(style);

// SPA-like navigation (content swap without reload)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent page reload

    const target = event.target.getAttribute('href').replace('#', ''); // Get target ID

    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('active');
    });

    // Show the clicked target section
    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      targetSection.classList.add('active');
    }
  });
});
