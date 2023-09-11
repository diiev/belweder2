export default class Form {
    constructor(forms, message, display = 'block') {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.textareas = document.querySelectorAll('textarea');
        this.display = display;
        this.message = {
            lodading: 'Загрузка...',
            success: message,
            failure: 'Что-то пошло не так...',
        };
        this.path = '';
    }  

    initMask () {
        let setCursorPosition = (pos, elem) => {
             elem.focus();
             if (elem.setSelectionRange) {
                elem.setSelectionRange(pos,pos);
             }    
             else if (elem.createTextRange) {
                 let range = elem.createTextRange();
    
                 range.collapse(true);
                 range.moveEnd('character', pos);
                 range.moveStart('character', pos);
                 range.select();
                 
             }
        };
    
        function createMask (event) {
                let matrix = '+7 (___) ___-__-__',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
    
                if (def.length >= val.length) {
                    val = def;
                }
              this.value = matrix.replace(/./g, function(a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
              }); 
    
              if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                } 
              } 
              else {
                setCursorPosition(this.value.length, this);
              }
        } 
    
        let inputs = document.querySelectorAll('[name="phone"]');
        inputs.forEach(input=>{
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    clearInputs() {
        this.inputs.forEach(input => {
            if (input.type !== 'submit')
                input.value = '';
        });
        this.textareas.forEach(textarea => {
            textarea.value = '';
        });
    }
    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');
        mailInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }
    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    }

    init() {
        this.initMask();
        this.checkMailInputs();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let statusTitle = document.createElement('div');
                statusTitle.classList.add('popup__title');
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('popup__descr');
                const formData = new FormData(form)
                form.parentNode.append(statusTitle);
                form.parentNode.append(statusMessage);
                form.style.display = 'none';
                statusMessage.textContent = this.message.lodading;
                this.postData(this.path, formData)
                    .then(res => {
                         statusTitle.textContent = 'Спасибо!';
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.failure;

                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                            statusTitle.remove();
                            form.classList.add('animated', 'fadeIn');
                            form.style.display = this.display;
                           
                        }, 3000)
                    });

            });

        });
    }
}