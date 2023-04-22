const form = document.querySelector("form")
    form.addEventListener('submit',e=>{
      if (!form.checkValidity()){
        e.preventDefault()
      }
      form.classList.add('was-validated')
      console.log("hi")
    })
    // var forum = document.querySelector('form');
var adder = document.getElementById('add');
var dele = document.getElementById("delete");

adder.addEventListener('click',deletion);
form.addEventListener('submit',addtostorage);


function addtostorage(e){   
      e.preventDefault()
      let name= document.getElementById('name').value;
    var email = document.getElementById('email').value;
    let myobj ={      name:name,        email:email
   }
   let myobj_serialized = JSON.stringify(myobj);

   localStorage.setItem("myobj",myobj_serialized);
   var object = localStorage.getItem('myobj')
   object = JSON.parse(object)
   var p = document.createElement("p");
   var data = document.createTextNode("Name: "+object.name+",   Email: "+object.email) 
   var dltbtn = document.createElement("button");
   dltbtn.id="delete";
   dltbtn.innerText="Delete"
   dltbtn.style.marginLeft="10px"
   p.appendChild(data)
   p.appendChild(dltbtn)
   adder.appendChild(p);

 }

function deletion(e){

 console.log(e.target.id)
 if (e.target.id=="delete"){
    var p = e.target.parentElement;
    adder.removeChild(p);

 }
}