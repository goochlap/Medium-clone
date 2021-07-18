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
      
      const bottomContent = (content.offsetHeight - 500);
      const bottomHeader = headerSize.offsetHeight;
      console.log(window.scrollY);
      console.log('bottomHeader: ' + bottomHeader);
      console.log('bottomContent: '+ bottomContent);

      if ((window.scrollY > bottomHeader) && (window.scrollY < bottomContent) ) {
        sidebar.classList.add('active')
      } else {
        sidebar.classList.remove('active');
      }
    }
    
    window.addEventListener('scroll', debounce(checkSlide));
  }

}

export { activeSideBar };