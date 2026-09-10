(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var sections = document.querySelectorAll('.bio,.services,.paths,.contact,.section-reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  }, { rootMargin: '-15% 0px -35% 0px', threshold: 0 });
  sections.forEach(function(s){ io.observe(s); });
})();
