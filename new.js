const form = document.querySelector("form")
    form.addEventListener('submit',e=>{
      if (!form.checkValidity()){
        e.preventDefault()
      }
      form.classList.add('was-validated')
      
    })
    // var forum = document.querySelector('form');
var adder = document.getElementById('add');
var dele = document.getElementById("delete");

adder.addEventListener('click',deletion);
adder.addEventListener('click',edition);
form.addEventListener('submit',addtostorage);


function addtostorage(e){   
      e.preventDefault()
      let name= document.getElementById('name').value;
    var email = document.getElementById('email').value;
    let myobj ={      name:name,        email:email
   }
   
   let myobj_serialized = JSON.stringify(myobj);
  
   localStorage.setItem(email,myobj_serialized);
   var object = localStorage.getItem(email)
   object = JSON.parse(object)
   var p = document.createElement("p");
   var data = document.createTextNode("Name: "+object.name+",   Email: "+object.email) 
   var dltbtn = document.createElement("button");
   var editbtn = document.createElement('button')
   p.id=email
   dltbtn.id="delete";
   dltbtn.innerText="Delete";
   dltbtn.style.marginLeft="10px"
   editbtn.id="edit";
   editbtn.innerHTML="Edit";
   editbtn.style.marginLeft="10px"

   p.appendChild(data)
   p.appendChild(dltbtn)
   p.appendChild(editbtn)
   adder.appendChild(p);
   
   
   
 }

function deletion(e){


 if (e.target.id=="delete"){

    var p = e.target.parentElement;
    localStorage.removeItem(p.id);
    adder.removeChild(p);

 }
}

function edition(e){
  
  if (e.target.id=="edit"){

    var p = e.target.parentElement;
    obja = localStorage.getItem(p.id)
    obja = JSON.parse(obja)
    var name=obja.name;
    var email=obja.email;
    localStorage.removeItem(p.id);
    adder.removeChild(p);
    var namein = document.getElementById('name');
    var emailin = document.getElementById('email'); 
    namein.value=name;
    emailin.value=email;

 }

}