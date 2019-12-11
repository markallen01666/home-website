// Mark Allen homepage functionality
// M Allen: Freelance Web Developer - 2019

// Enable functionality when document has loaded
$(document).ready(function() {
  // Complete contact form address using Javascript to challenge spam bot address collection
  if (document.getElementById('contactform')) {
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', 'https://formspree.io/' + 'markallen' + '.' + 'webdeveloper' + '@' + 'gmail' + '.' + 'com');
  } 
});