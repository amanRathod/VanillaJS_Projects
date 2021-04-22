// let keys = document.querySelector('.key');
// let sounds = document.querySelector('.sound');
// let audios = document.querySelector('audio');

// for(let i = 0; i< keys.length; ++i){
//     keys[i].addEventListener('keydown', function (e){

//         var value = this.getAttribute('data-key');
//         for(let j = 0; j < audios.length; ++j){
//             let aud = this.getAttribute(value);
//             aud.play();
//         }

//     });

// }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing'); 
  }

  function playSound(e) {
    // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);

    if (!audio) return; //Stop function from running all together

    
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);