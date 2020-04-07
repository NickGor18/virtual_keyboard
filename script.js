/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const idList = [];
class Keyboard {
  constructor() {
    this.engKeyboard = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
      ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
      ['ShiftLft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ShiftRght', 'up'],
      ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', 'left', 'down', 'right'],
    ];
    this.rusKeyboard = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
      ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['ShiftLft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ShiftRght', 'up'],
      ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', 'left', 'down', 'right'],
    ];
    this.engletters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    this.rusletters = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
    this.digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    this.classNameList = ['first', 'second', 'third', 'fourth', 'fifth'];
    this.currentKeybord = this.engKeyboard;
    this.letterCheck = false;
    this.digitCheck = false;
    this.currLang = localStorage.getItem('lang') || 'en';
    this.textArea = document.createElement('textarea');
  }

  createinput() {
    const inp = this.textArea;
    inp.id = 'inp';
    inp.setAttribute('autofocus', 'autofocus');
    document.body.append(inp);
  }

  createKeyboard() {
    this.currentKeybord.forEach((keyRow, index) => {
      keyRow.forEach((elem) => {
        this.createKey(elem, index);
      });
    });
  }

  createKey(elem, index) {
    const div = document.createElement('div');
    this.engletters.forEach((i) => {
      if (i === elem) this.letterCheck = true;
    });
    this.digits.forEach((i) => {
      if (i === elem) this.digitCheck = true;
    });
    // eslint-disable-next-line no-nested-ternary
    this.letterCheck ? div.id = `Key${elem}` : this.digitCheck ? div.id = `Digit${elem}` : div.id = elem;
    if (elem === '`') div.id = 'Backquote';
    if (elem === '-') div.id = 'Minus';
    if (elem === '=') div.id = 'Equal';
    if (elem === '[') div.id = 'BracketLeft'; if (elem === ']') div.id = 'BracketRight';
    if (elem === '\\') div.id = 'Backslash'; if (elem === ';') div.id = 'Semicolon'; if (elem === '\'') div.id = 'Quote';
    if (elem === ',') div.id = 'Comma'; if (elem === '.') div.id = 'Period';
    if (elem === '/') div.id = 'Slash'; if (elem === 'up') div.id = 'ArrowUp';
    if (elem === 'CtrlL') div.id = 'ControlLeft'; if (elem === 'CtrlR') div.id = 'ControlRight';
    if (elem === 'Win') div.id = 'MetaLeft'; if (elem === 'AltL') div.id = 'AltLeft';
    if (elem === 'AltR') div.id = 'AltRight'; if (elem === 'ShiftLft') div.id = 'ShiftLeft';
    if (elem === 'ShiftRght') div.id = 'ShiftRight'; if (elem === 'left') div.id = 'ArrowLeft';
    if (elem === 'down') div.id = 'ArrowDown'; if (elem === 'right') div.id = 'ArrowRight';
    this.letterCheck ? div.innerHTML = elem.toLowerCase() : div.innerHTML = elem;
    div.className = this.classNameList[index];
    this.letterCheck = false;
    this.digitCheck = false;
    idList.push(div.id);
    document.body.append(div);
  }

  changekey() {
    this.currLang = this.currLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', this.currLang);
    if (this.currentKeybord === this.engKeyboard)
    // eslint-disable-next-line brace-style
    { this.currentKeybord = this.rusKeyboard; }
    else { this.currentKeybord = this.engKeyboard; }
  }

  check() {
    if (this.currLang === 'en') return true;
    return false;
  }

  changeKeyboard() {
    const all_keys_arr = [].concat(this.currentKeybord[0], this.currentKeybord[1],
      this.currentKeybord[2], this.currentKeybord[3], this.currentKeybord[4]);
    for (let i = 0; i < idList.length; i++) {
      this.engletters.forEach((l) => {
        if (l === all_keys_arr[i]) this.letterCheck = true;
      });

      if (this.letterCheck) {
        document.getElementById(idList[i])
          .innerHTML = all_keys_arr[i].toLowerCase();
      } else document.getElementById(idList[i]).innerHTML = all_keys_arr[i];
      this.letterCheck = false;
    }
  }

  mess() {
    const text = document.createElement('p');
    text.className = 'message';
    text.innerText = 'Для переключения языка нажмите Ctrl + Z (Ctrl + Я)';
    document.body.append(text);
  }

  uppertext() {
    // eslint-disable-next-line camelcase
    const all_keys_arr = [].concat(this.currentKeybord[0], this.currentKeybord[1],
      this.currentKeybord[2], this.currentKeybord[3], this.currentKeybord[4]);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < idList.length; i++) {
      if (this.currentKeybord === this.engKeyboard) {
        this.engletters.forEach((l) => {
          if (l === all_keys_arr[i]) this.letterCheck = true;
        });
      } else {
        this.rusletters.forEach((l) => {
          if (l === all_keys_arr[i]) this.letterCheck = true;
        });
      }


      if (this.letterCheck) {
        document.getElementById(idList[i])
          .innerHTML = all_keys_arr[i].toUpperCase();
      } else document.getElementById(idList[i]).innerHTML = all_keys_arr[i];
      this.letterCheck = false;
    }
  }

  lowertext() {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line camelcase
    const all_keys_arr = [].concat(this.currentKeybord[0], this.currentKeybord[1],
      this.currentKeybord[2], this.currentKeybord[3], this.currentKeybord[4]);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < idList.length; ++i) {
      if (this.currentKeybord === this.engKeyboard) {
        this.engletters.forEach((l) => {
          if (l === all_keys_arr[i]) this.letterCheck = true;
        });
      } else {
        this.rusletters.forEach((l) => {
          if (l === all_keys_arr[i]) this.letterCheck = true;
        });
      }


      // eslint-disable-next-line no-unused-expressions
      if (this.letterCheck) {
        document.getElementById(idList[i])
          .innerHTML = all_keys_arr[i].toLowerCase();
      } else document.getElementById(idList[i]).innerHTML = all_keys_arr[i];
      this.letterCheck = false;
    }
  }
}

let bol = false;
const keyboard = new Keyboard();
keyboard.createinput();
if (keyboard.check()) keyboard.createKeyboard();
else {
  keyboard.createKeyboard(); keyboard.changekey(); keyboard.changeKeyboard();
  keyboard.currLang = keyboard.currLang === 'en' ? 'ru' : 'en';
  localStorage.setItem('lang', keyboard.currLang);
}
keyboard.mess();
// eslint-disable-next-line no-undef
document.addEventListener('keydown', (event) => {
  console.log(event);
  // eslint-disable-next-line no-undef
  document.getElementById(event.code).classList.add('clicked');
  if (!event.shiftKey && !(event.code === 'CapsLock') && !event.ctrlKey
   && !(event.key === 'Alt') && !(event.key === 'Backspace')
   && !(event.code === 'MetaLeft') && !(event.code === 'Tab')
   && !(event.code === 'Enter') && !(event.code === 'ArrowUp')
   && !(event.code === 'ArrowDown') && !(event.code === 'ArrowLeft')
   && !(event.code === 'ArrowRight')) {
    if (event.code === 'Space') document.getElementById('inp').value += ' ';
    else document.getElementById('inp').value += document.getElementById(event.code).innerHTML;
  }
  if (event.key === 'Backspace') document.getElementById('inp').value = document.getElementById('inp').value.slice(0, -1);
});
// eslint-disable-next-line no-undef
document.addEventListener('keyup', (event) => {
  // eslint-disable-next-line no-undef
  document.getElementById(event.code).classList.remove('clicked');
  if (!event.shiftKey && bol === true) { keyboard.lowertext(); bol = false; }
});
idList.forEach((i) => {
// eslint-disable-next-line no-undef
  document.getElementById(i).addEventListener('mousedown', () => {
    // eslint-disable-next-line no-undef
    document.getElementById(i).classList.add('clicked');
    // eslint-disable-next-line no-undef
    document.getElementById('inp').value += document.getElementById(i).innerHTML;
  });
});
idList.forEach((i) => {
  // eslint-disable-next-line no-undef
  document.getElementById(i).addEventListener('mouseup', () => {
    // eslint-disable-next-line no-undef
    document.getElementById(i).classList.remove('clicked');
  });
});
document.addEventListener('keydown', (event) => {
  if (event.getModifierState('CapsLock')) keyboard.uppertext(); else keyboard.lowertext();
});
// eslint-disable-next-line no-undef
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.ctrlKey && event.code === 'KeyZ') { keyboard.changekey(); keyboard.changeKeyboard(); }
});
