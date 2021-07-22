const activeSideBar = () => {
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
    
    
    function checkSlide() {
      
      // select elements to scale the scrolling interval
      const headerSize = document.querySelector('.header-post');
      const content = document.querySelector('.post-content');
      
      // set values relative to the scroll
      const slideInAt = (window.scrollY + window.innerHeight);
      const bottomHeader = (headerSize.offsetHeight + window.innerHeight);
      const bottomContent = (content.offsetHeight + content.offsetTop);
      // console.log('slideInAt:' + slideInAt);
      // console.log('bottomHeader: ' + bottomHeader);
      // console.log('bottomContent: '+ bottomContent);

      if ((slideInAt > bottomHeader) && (slideInAt < bottomContent) ) {
        sidebar.classList.add('active')
      } else {
        sidebar.classList.remove('active');
      }
    }
    
    window.addEventListener('scroll', debounce(checkSlide, 10));
  }

}

export { activeSideBar };