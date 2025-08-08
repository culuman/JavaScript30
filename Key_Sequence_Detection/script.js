const pressed = [];
const secretCode = 'nikola';

window.addEventListener('keyup', e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode);
  if (pressed.join('').includes(secretCode)) {
    console.log('You got it!');
    cornify_add();
  }
});
