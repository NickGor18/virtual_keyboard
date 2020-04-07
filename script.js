let idList = [];
class Keyboard{
    constructor(){
        this.engKeyboard =[
            ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
            ['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'],
            ['CapsLock','A','S','D','F','G','H','J','K','L',';','\'','Enter'],
            ['ShiftLft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ShiftRght','up'],
            ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', 'left',  'down', 'right']
        ];
        this.rusKeyboard =[
            ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
            ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\'],
            ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
            ['ShiftLft','я','ч','с','м','и','т','ь','б','ю','.','ShiftRght','up'],
            ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', 'left',  'down', 'right']
        ];
        this.engletters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
        this.rusletters = ['ё','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю'];
        this.digits=['1','2','3','4','5','6','7','8','9','0'];
        this.classNameList = ['first','second','third','fourth','fifth'];
        this.currentKeybord=this.engKeyboard;
        this.letterCheck = false;
        this.digitCheck = false;
    }
    createinput(){
        let inp = document.createElement('textarea');
        inp.className = 'inp';
        inp.setAttribute('autofocus','autofocus');
        document.body.append(inp);
    };
    createKeyboard(){
        this.currentKeybord.forEach((keyRow,index)=>{
            keyRow.forEach((elem)=>{
                this.createKey(elem,index);
                });
        });
    }
    createKey(elem,index){
        
        let div = document.createElement('div')
            this.engletters.forEach((i)=>{
                if(i==elem) this.letterCheck = true;
            })
            this.digits.forEach((i)=>{
                if(i==elem) this.digitCheck = true;
            })
            this.letterCheck ? div.id = 'Key' + elem : this.digitCheck ? div.id = 'Digit' + elem : div.id = elem;
            if(elem == '\`') div.id = 'Backquote';
            if(elem =='-') div.id = 'Minus';
            if(elem =='=') div.id = 'Equal';
            if(elem == '[') div.id ='BracketLeft';if(elem == ']') div.id ='BracketRight';
            if(elem == '\\') div.id ='Backslash';if(elem == ';') div.id ='Semicolon'; if(elem == '\'') div.id = 'Quote';
            if(elem == ',') div.id ='Comma';if(elem == '.') div.id ='Period';
            if(elem == '/') div.id ='Slash';if(elem == 'up') div.id ='ArrowUp';
            if(elem == 'CtrlL') div.id ='ControlLeft';if(elem == 'CtrlR') div.id ='ControlRight';
            if(elem == 'Win') div.id='MetaLeft';if(elem == 'AltL') div.id='AltLeft';
            if(elem == 'AltR') div.id='AltRight';if(elem == 'ShiftLft') div.id='ShiftLeft';
            if(elem == 'ShiftRght') div.id='ShiftRight';if(elem == 'left') div.id='ArrowLeft';
            if(elem == 'down') div.id='ArrowDown';if(elem == 'right') div.id='ArrowRight';
        this.letterCheck ? div.innerHTML = elem.toLowerCase():div.innerHTML = elem;
        div.className = this.classNameList[index];
        this.letterCheck = false;
        this.digitCheck = false;
        idList.push(div.id);
        document.body.append(div);
    }
    changekey(){
        if(this.currentKeybord==this.engKeyboard)
        this.currentKeybord=this.rusKeyboard;
        else
        this.currentKeybord=this.engKeyboard;
    }
    changeKeyboard(){
        let all_keys_arr = [].concat(this.currentKeybord[0],this.currentKeybord[1],
            this.currentKeybord[2],this.currentKeybord[3],this.currentKeybord[4]);
        for(let i=0;i<idList.length;i++) {
            this.engletters.forEach((l)=>{
                if(l==all_keys_arr[i]) this.letterCheck = true;
            })
            
            this.letterCheck ? document.getElementById(idList[i]).innerHTML = all_keys_arr[i].toLowerCase() : 
            document.getElementById(idList[i]).innerHTML = all_keys_arr[i];
            this.letterCheck = false;
        }
    }
    mess(){
        let text = document.createElement('p');
        text.className = 'message';
        text.innerText = 'Для переключения языка нажмите Ctrl + M (Ctrl + Ь)';
        document.body.append(text);

    }
    uppertext(){
        let all_keys_arr = [].concat(this.currentKeybord[0],this.currentKeybord[1],
            this.currentKeybord[2],this.currentKeybord[3],this.currentKeybord[4]);
        for(let i=0;i<idList.length;i++) {
            if(this.currentKeybord==this.engKeyboard){
                this.engletters.forEach((l)=>{
                    if(l==all_keys_arr[i]) this.letterCheck = true;
                })
            }
            else{
                    this.rusletters.forEach((l)=>{
                        if(l==all_keys_arr[i]) this.letterCheck = true;
                    })
                }
            
            
            this.letterCheck ? document.getElementById(idList[i]).innerHTML = all_keys_arr[i].toUpperCase() : 
            document.getElementById(idList[i]).innerHTML = all_keys_arr[i];
            this.letterCheck = false;
        }
    }
    lowertext(){
        let all_keys_arr = [].concat(this.currentKeybord[0],this.currentKeybord[1],
            this.currentKeybord[2],this.currentKeybord[3],this.currentKeybord[4]);
        for(let i=0;i<idList.length;i++) {
            if(this.currentKeybord==this.engKeyboard){
                this.engletters.forEach((l)=>{
                    if(l==all_keys_arr[i]) this.letterCheck = true;
                })
            }
            else{
                    this.rusletters.forEach((l)=>{
                        if(l==all_keys_arr[i]) this.letterCheck = true;
                    })
                }
            
            
            this.letterCheck ? document.getElementById(idList[i]).innerHTML = all_keys_arr[i].toLowerCase() : 
            document.getElementById(idList[i]).innerHTML = all_keys_arr[i];
            this.letterCheck = false;
        }
    }
    }
    

let keyboard = new Keyboard();
keyboard.createinput();
keyboard.createKeyboard();
keyboard.mess();
document.addEventListener('keydown', function(event){
    console.log(event)
    document.getElementById(event.code).classList.add('clicked')

})
document.addEventListener('keyup', function(event){
    console.log(event)
    document.getElementById(event.code).classList.remove('clicked')
})
idList.forEach((i)=>{
    document.getElementById(i).addEventListener('mousedown',function(){
        document.getElementById(i).classList.add('clicked');
    })
})
idList.forEach((i)=>{
    document.getElementById(i).addEventListener('mouseup',function(){
        document.getElementById(i).classList.remove('clicked');
    })
})
document.addEventListener('keydown',function(event){
    if(event.ctrlKey && event.code == 'KeyM') 
    {keyboard.changekey(); keyboard.changeKeyboard();}
})
//document.addEventListener('keydown',function(event){
//    if(event.shiftKey) keyboard.uppertext();
//})
//document.addEventListener('keyup',function(event){
//   if(event.shiftKey) keyboard.lowertext();
//})
document.addEventListener('keypress',function(event){
    let textArea =document.getElementsByClassName('inp');
    textArea
})
