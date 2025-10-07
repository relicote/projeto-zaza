class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button)

        if(this.form){
            this.url = this.form.getAttribute("action")
        }
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.sucess;
        console.log("sucesso", this.settings.sucess);
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
        console.log("erro", this.settings.error);
    }
}

const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    Success: "<h1 class='success'>Mensagem enviada!</h1>",
    Error: "<H1 class='error'> Não foi possível enviar sua mensagem. </h1>",
});

FormSubmit.init();

