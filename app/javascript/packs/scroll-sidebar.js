const activeSideBar = (e) => {
  
  const sidebar = document.querySelector('.sidebar-post');

  if (sidebar) {

    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    
    
    function checkSlide(e) {
      const slideInAt = window.scrollY;
      if (slideInAt > 250) {
        sidebar.classList.add('active')
      } else {
        sidebar.classList.remove('active');
      }
    }
    
    window.addEventListener('scroll', debounce(checkSlide));
  }

}

export { activeSideBar };