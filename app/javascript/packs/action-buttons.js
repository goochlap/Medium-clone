const actionButtons = () => {

  // buttons public|private from user stories show
  const buttonPublic  = document.querySelector('.public-btn');
  const buttonPrivate = document.querySelector('.private-btn');
  const publicStatus  = document.querySelector('.post-status-public');
  const privateStatus = document.querySelector('.post-status-private');

  if (buttonPublic && buttonPrivate) {

      buttonPublic.addEventListener('click', () => {
        privateStatus.style.display = 'none';
        publicStatus.style.display  = 'block';
      });
      buttonPrivate.addEventListener('click', () => {
        publicStatus.style.display  = 'none';
        privateStatus.style.display = 'block';
      });
    
  }

}

export { actionButtons };