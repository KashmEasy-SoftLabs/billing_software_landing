let fields = [
    {
        name : "name",
        type : "text",
        label : "Name",
        pattern : null,
        placeholder : "Enter your name",
        required : true
    },
    {
        name : "phone",
        type : "text",
        label : "Phone",
        pattern : /^[0-9]{10}$/,
        placeholder : "Enter your phone number",
        required : true
    },
    {
        name : "email",
        type : "email",
        label : "Email",
        pattern : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        placeholder : "Enter your email",
        required : true
    },
    {
        name : "message",
        type : "textarea",
        label : "Message",
        pattern : /^[a-zA-Z0-9 ]+$/,
        placeholder : "Enter your message",
        required : true
    }
]


let form = document.querySelector("form");


(function appendInputFields(){
    for(let i = 0; i < fields.length; i++){
        let div = document.createElement("div");
        let input = document.createElement("input");
        if(fields[i].type == "textarea"){
            input = document.createElement("textarea");
            input.style.resize = "none";
            input.cols = "30";
            input.rows = "5";
        }
        
        input.name = fields[i].name;
        input.type = fields[i].type;
        input.placeholder = fields[i].placeholder;
        input.pattern = fields[i].pattern;
        input.required = fields[i].required;
        div.appendChild(input);
        form.appendChild(div);
    }
}())

(function appendSubmitButton(){   
    let submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    submit.classList.add("btn");
    form.appendChild(submit);
    
}());