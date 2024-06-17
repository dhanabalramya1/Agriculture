  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
  });

         function toggleContactInfo() {
            const contactInfo = document.getElementById('contactInfo');
            contactInfo.style.display = contactInfo.style.display === 'block' ? 'none' : 'block';
        }


 // JavaScript for scroll animation

  document.addEventListener('DOMContentLoaded', function() {
    var contentBoxes = document.querySelectorAll('.content-box');
    
    function checkBoxes() {
      var triggerBottom = window.innerHeight / 5 * 4;
      
      contentBoxes.forEach(function(box) {
        var boxTop = box.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom) {
          box.style.opacity = '1';
          box.style.transform = 'translateY(0)';
        }
      });
    }
    
    window.addEventListener('scroll', checkBoxes);
    checkBoxes(); // Initial check
  });