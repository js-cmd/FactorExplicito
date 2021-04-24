window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");  // id unseres status message der form !!!!

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event
    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
  
  });

    
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  // clear the inputs of the contact form !!!!
  function clearInputFields() {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
}

// scroll button smooth scroll !!!!
document.querySelector('.scroll-btn').addEventListener('click',()=> {
    document.querySelector('html').style.scrollBehavior = 'smooth'
    
});



// open and close the pop uo windows - modal in the services section !!!!!
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
       const modal = button.closest('.modal')
       closeModal(modal)
    })
})

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
       const modal = document.querySelector(button.dataset.modalTarget)  
       openModal(modal)
    })
})


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    //if (modal == null)  return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null)  return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// new hamburger function !!!

const burger = document.getElementById('burger');
const navbar = document.getElementById('nav-links');

document.onclick = function(e) {
  if(e.target.id !== 'burger' && e.target.id !== 'navbar') {
    burger.classList.remove('nav-active');
    navbar.classList.remove('nav-active');
    burger.classList.toggle('toggle');
  }
}

burger.onclick = function()
{
  burger.classList.toggle('nav-active');
  navbar.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
}

/*
// Navigation and Hamburger
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // toggle nav slider
      burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      // animate the nav links
          navLinks.forEach((link, index) => {
          if(link.style.animation) {
            // closes the menu
              link.style.animation = '';    
          }else {
          // opens the menu
          link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.4}s`;
         
          }
      });
      //  burger animation
      burger.classList.toggle('toggle');
  });
}

navSlide();
// end of Navigation and Hamburger
*/