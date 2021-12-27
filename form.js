let forms = document.createElement("form");
forms.setAttribute("id","form")
forms.classList.add("container", "mx-auto","m-4","p-4","rounded-3");
document.body.appendChild(forms)

var br = document.createElement("br")
let h1 = document.createElement("h1");
h1.setAttribute('id','title');
h1.innerText="FORM";
document.head.appendChild(forms).appendChild(h1);

let descrip = document.createElement("p");
descrip.setAttribute("id","description");
descrip.innerText="CANDIDATE FORM DETAILS"
document.body.appendChild(forms).appendChild(descrip)

let firstname = document.createElement("label")
firstname.innerText="First Name";
firstname.classList.add("form-label","my-1");
let firstname1 = document.createElement("input");
firstname1.classList.add("form-label")
firstname1.setAttribute("id","first-name");
firstname1.setAttribute("type","text");
firstname1.setAttribute("name","firstname");
firstname1.setAttribute("required"," ");
firstname1.setAttribute("placeholder","Enter a name");
document.body.appendChild(forms).appendChild(firstname);
document.body.appendChild(forms).appendChild(firstname1)
let b=document.createElement("br")
document.body.appendChild(b)

let c=document.createElement("br")
document.body.appendChild(forms).appendChild(c)
let Lastname = document.createElement("label")
Lastname.innerText="Last Name";
Lastname.classList.add("form-label","my-1")
let Lastname1 = document.createElement("input");
Lastname1.classList.add("form-label")
Lastname1.setAttribute("id","last-name");
Lastname1.setAttribute("type","text");
Lastname1.setAttribute("name","lastname");
Lastname1.setAttribute("required"," ");
Lastname1.setAttribute("placeholder","Enter a name");
document.body.appendChild(forms).appendChild(Lastname);
document.body.appendChild(forms).appendChild(Lastname1)
let d=document.createElement("br")
document.body.appendChild(d)

let e=document.createElement("br")
document.body.appendChild(forms).appendChild(e);
let Address = document.createElement("label")
Address.innerText="Address";
Address.setAttribute("class","form-label")
Lastname.classList.add("form-label","my-1")
let Address1 = document.createElement("input");
Address1.classList.add("form-label")
Address1.setAttribute("id","address");
Address1.setAttribute("type","text");
Address1.setAttribute("name","address");
// Address1.setAttribute("required"," ");
Address1.setAttribute("placeholder","Enter a address");
document.body.appendChild(forms).appendChild(Address);
document.body.appendChild(forms).appendChild(Address1);
let f=document.createElement("br")
document.body.appendChild(f);

let g=document.createElement("br")
document.body.appendChild(forms).appendChild(g);
let Pincode = document.createElement("label");
Pincode.innerText="Pincode";
Lastname.classList.add("form-label","my-1")
let Pincode1 = document.createElement("input");
Pincode1.classList.add("form-label")
Pincode1.setAttribute("id","pincode");
Pincode1.setAttribute("type","text");
Pincode1.setAttribute("name","pincode");
Pincode1.setAttribute("required"," ");
Pincode1.setAttribute("placeholder","Enter a pincode");
document.body.appendChild(forms).appendChild(Pincode);
document.body.appendChild(forms).appendChild(Pincode1);
let h=document.createElement("br")
document.body.appendChild(forms).appendChild(h);

let gender = document.createElement("label");
let w = document.createElement("br");
document.body.appendChild(w);
gender.innerText="Gender";
let gender1 = document.createElement("input");
gender1.setAttribute("id","gender");
gender1.setAttribute("type","text");
gender1.setAttribute("placeholder","Enter a gender");
document.body.appendChild(forms).appendChild(gender);
document.body.appendChild(forms).appendChild(gender1)
let y=document.createElement("br")
document.body.appendChild(forms).appendChild(y);

let ya=document.createElement("br")
document.body.appendChild(forms).appendChild(ya);
let food = document.createElement("label");
food.innerText="Choice of Food";
document.body.appendChild(forms).appendChild(food);



let choice = document.createElement("select");
choice.setAttribute("id","food");
choice.setAttribute("onchange","myFunction()")
let opt = document.createElement("option");
opt.innerHTML="biriyani";
document.body.appendChild(forms).appendChild(choice).appendChild(opt);
let opt1 = document.createElement("option");
opt1.innerHTML="Fried Rice";
document.body.appendChild(forms).appendChild(choice).appendChild(opt1);
let opt2 = document.createElement("option");
opt2.innerHTML="barotta";
document.body.appendChild(forms).appendChild(choice).appendChild(opt2);
let opt3 = document.createElement("option");
opt3.innerHTML="pasta";
document.body.appendChild(forms).appendChild(choice).appendChild(opt3);
let opt4 = document.createElement("option");
opt4.innerHTML="noodles";
document.body.appendChild(forms).appendChild(choice).appendChild(opt4);
let v = document.createElement("br");
document.body.appendChild(forms).appendChild(v);



let va = document.createElement("br");
document.body.appendChild(forms).appendChild(va);
let state = document.createElement("label");
let i = document.createElement("br");
document.body.appendChild(i);
state.innerText="State";
let state1 = document.createElement("input");
state1.setAttribute("id","states");
state1.setAttribute("type","text");
state1.setAttribute("placeholder","Enter a state");
document.body.appendChild(forms).appendChild(state);
document.body.appendChild(forms).appendChild(state1)
let j=document.createElement("br")
document.body.appendChild(forms).appendChild(j)

let ja=document.createElement("br")
document.body.appendChild(forms).appendChild(ja)
let country = document.createElement("label");
let k = document.createElement("br");
document.body.appendChild(k);
country.innerText="Country";
let country1 = document.createElement("input");
country1.setAttribute("id","country");
country1.setAttribute("type","text");
country1.setAttribute("placeholder","Enter a Country");
document.body.appendChild(forms).appendChild(country);
document.body.appendChild(forms).appendChild(country1)
let l=document.createElement("br")
document.body.appendChild(forms).appendChild(l)



let m=document.createElement("br");
document.body.appendChild(m);
let n=document.createElement("br");
document.body.appendChild(n);

let button = document.createElement("button");
button.setAttribute("id","submit");
button.setAttribute("class","btn btn-primary");
button.innerText="SUBMIT";
document.body.appendChild(forms).appendChild(button);
button.addEventListener("click",validate);

let div = document.createElement("div");
document.body.appendChild(forms).appendChild(div);

let table=document.createElement("table");
table.setAttribute("id","tables");
table.setAttribute("id","table");
document.body.appendChild




let b7=document.createElement("br");
document.body.appendChild(b7);
let b8=document.createElement("br");
document.body.appendChild(b8);

let button1 = document.createElement("button");
button1.setAttribute("id","clearform");
button1.setAttribute("type","reset");
button1.setAttribute("value","reset");
button1.innerText="Clear";
document.body.append(button1);
button1.addEventListener("click",clear);

function clear(){
    document.getElementById("first-name").value='';
    document.getElementById("last-name").value='';
    document.getElementById("address").value='';
    document.getElementById("pincode").value='';
    document.getElementById("gender").value='';
    document.getElementById("food").value='';
    document.getElementById("states").value='';
    document.getElementById("country").value='';
    

}

function validate()
{
    var tabledata=document.getElementById("tables");
    var row = tabledata.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    var cell6=row.insertCell();
    var cell7=row.insertCell();
    var cell8=row.insertCell();
    

    cell1.innerText=document.getElementById("first-name").value;
    cell2.innerText=document.getElementById("last-name").value;
    cell3.innerText=document.getElementById("address").value;
    cell4.innerText=document.getElementById("pincode").value;
    cell5.innerText=document.getElementById("gender").value;
    cell6.innerText=document.getElementById("food").value;
    cell7.innerText=document.getElementById("states").value;
    cell8.innerText=document.getElementById("country").value;
}

function myFunction() {
    var x = document.getElementById("food");
    var i = x.selectedIndex;
    document.getElementById("demo").innerHTML = x.options[i].text;
    document.getElementById("demo").innerHTML = x.options[i].text;
  }

 













































