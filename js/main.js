/* Project H.O.O.D. — site JS (minimal)
   Mobile nav toggle + external link safety + active nav highlighting.
*/
(function(){
  // Mobile nav toggle — with aria-expanded support
  document.addEventListener('click', function(e){
    var t = e.target.closest('.nav-toggle');
    if (!t) return;
    var links = document.querySelector('.nav-links');
    if (!links) return;
    var isOpen = links.classList.toggle('open');
    t.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close nav when clicking outside of it
  document.addEventListener('click', function(e){
    if (e.target.closest('.nav-toggle') || e.target.closest('.nav-links')) return;
    var links = document.querySelector('.nav-links');
    if (links && links.classList.contains('open')) {
      links.classList.remove('open');
      var toggle = document.querySelector('.nav-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close nav on Escape key
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      var links = document.querySelector('.nav-links');
      if (links && links.classList.contains('open')) {
        links.classList.remove('open');
        var toggle = document.querySelector('.nav-toggle');
        if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
      }
    }
  });

  // Add rel="noopener" and target="_blank" safety to external links
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="http"]'), function(a){
    if (!a.hasAttribute('target')) a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  // Highlight active nav item based on current path
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  Array.prototype.forEach.call(document.querySelectorAll('.nav-links a'), function(a){
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (!href) return;
    if (href === path || (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Prevent page jump on "#" placeholder links used in the prototype
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href="#"]');
    if (a) e.preventDefault();
  });
})();
