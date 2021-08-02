const actionButtons = () => {

  // buttons from user stories show
  const buttonPrivate = document.querySelector('.private-btn');

  if (buttonPrivate) {
    
      buttonPrivate.addEventListener('click', () => {
        console.log('hey');
      });
    
  }

}

export { actionButtons };