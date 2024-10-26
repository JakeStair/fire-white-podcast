document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === "#") {
          e.preventDefault(); // Prevent the default link action only if href is "#"
          alert(`You clicked on ${e.target.textContent}`);
        }
      });
    });
  });