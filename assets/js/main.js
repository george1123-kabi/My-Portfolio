const navBar = document.getElementById("navbar");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const hobbies = document.querySelector(".hobbies");
const skillData = document.querySelector(".skill-data");

let prevScroll = window.scrollY;
window.onscroll = function () {
  let currentScroll = window.scrollY;

  prevScroll > currentScroll
    ? (navBar.style.top = "0")
    : (navBar.style.top = "-100px");
  if (currentScroll > 450) {
    navBar.classList.add("alterNav");
    navBar.style.top = "0";
    navBar.style.transition=".7s";
  } else {
    navBar.classList.remove("alterNav");
  }

  prevScroll = currentScroll;
};

document.addEventListener("DOMContentLoaded", function () {
  const frontBtn = document.querySelector(".front");
  const backBtn = document.querySelector(".back");
  const frontData = document.querySelector(".front-data");
  const backData = document.querySelector(".back-data");

  function hideAll() {
    frontData.style.display = "none";
    backData.style.display = "none";
  }

  frontBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    frontData.style.display = "block";
    backData.style.display = "none";
  });

  backBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    backData.style.display = "block";
    frontData.style.display = "none";
  });

  // Prevent clicks inside the info boxes from closing them
  frontData.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  backData.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Hide info boxes when clicking outside
  document.addEventListener("click", function () {
    hideAll();
  });
});

//modal


document.addEventListener("DOMContentLoaded", function () {
  // ...existing code...

  // Modal logic for contact-section
  const contactForm = document.querySelector('.contact-section');
  const modal = document.getElementById('contact-modal');
  const modalDetails = document.getElementById('modal-details');
  const proceedBtn = document.getElementById('proceed-btn');
  const retypeBtn = document.getElementById('retype-btn');

  if (contactForm && modal && modalDetails && proceedBtn && retypeBtn) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      const inputs = contactForm.querySelectorAll('input, textarea');
      let detailsHtml = '';
      inputs.forEach(input => {
        if (input.type !== 'submit' && input.type !== 'button') {
          detailsHtml += `<p><strong>${input.placeholder}:</strong> ${input.value}</p>`;
        }
      });

      modalDetails.innerHTML = detailsHtml;
      modal.style.display = 'flex';
    });

    proceedBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      contactForm.submit(); // Actually submit the form
    });

    retypeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Optional: Close modal on outside click
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
});

// Responsive nav menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // Optional: close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }


      document.querySelectorAll('.cv-button').forEach(button =>{
        button.addEventListener('click', function() {
        // Specify the HTML file URL here
        const fileUrl="./assets/resume/George's Resume.pdf"; // The uploaded file
        console.log(fileUrl);
        

        // // Create an anchor element for downloading
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'CV.pdf'; // Specify the name for the downloaded file
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });
  });
 



