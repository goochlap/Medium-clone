// function to reveal sidebar reviews on 'speechballon' click

const reviewSlideIn = () => {
  const containerHidden = document.querySelector('.container-hidden');
  const sidebarReviews = document.querySelector('.sidebar-reviews');
  const speechBallon = document.querySelector('.speech-ballon');

  if (speechBallon) {
    
      speechBallon.addEventListener('click', () => {
        containerHidden.classList.add('active');
        sidebarReviews.classList.add('active');
    
        containerHidden.addEventListener('click', () => {
          containerHidden.classList.remove('active');
          sidebarReviews.classList.remove('active');
        })
      });
    
  }
}

export { reviewSlideIn };