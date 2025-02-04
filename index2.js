const form = document.querySelector("form");
console.log(form);
const input = document.querySelector("input[type = text]");
console.log(input);
const select  = document.querySelector("select");
console.log(select);

let pseudo = "";
let language = "";

// const ring avec function ring()
const ring = () =>{
    audio = new Audio;
    audio.src = './sonnette.mp3';
    audio.play();
   
    
};

input.addEventListener("input", (e) =>{
    // console.log(e);
    pseudo = e.target.value;
    
});

select.addEventListener("input" , (e) =>{
        language = e.target.value;
});

form.addEventListener("submit" , (e) =>{
    // dès que nous traitons un formulaire avec l'event submit nous rajoutons toujours la methode preventDefault()
    // en ajoutant cette methode a l'evenement nous empechons le rechargement de page du navigateur
     e.preventDefault();
       
  // console.log(cgv.checked);
  // maintenant nous devons faire en sorte que les cgv soit coché pour pouvoir valider le formulaire
  // nous allons créer une condition if()

  if (cgv.checked) {
    // affiche les valeurs
    // avec la propriété innerHTML nous injectons direct dans la div du code et du texte
    // nous aurions pu utiliser  .textContent  mais le soucis c que textContent ne peux pas injecter des balises html elle lit juste le code et ne l'interprete pas
    document.querySelector("form > div").innerHTML = '<h3>Pseudo : '+pseudo+'<h3><h4>Language : '+language+'</h4>'; form.style.background = "red";
     // console.log("yes");
       //ring();
    }else{
        
    alert("veuillez accepter les cgv");
    
  }

 });   

 //--------------------------------------------------------------------------------
     // Load event----------------------------------------------------------------
        // load permet d'éviter des conflits , load permettra d'executer le code apres la validation du formulaire 

    window.addEventListener("load",() => {
    //    console.log("bienvenue");
     });   
// ---------------------------------------------------------------------------------------

//  comment selectionner toutes sortes d'éléments avec les memes classes
// methode forEach cela veut dire : pour chacun

// const boxes = document.getElementsByClassName(".box");

// probleme avec getElementsByClassName pour cela j'utilise querySelectorAll
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// forEach
// boxes.addEventListener("click" , ()=>{
//     console.log("salut");
// });
    

 
boxes.forEach((box)  =>{
    box.addEventListener("click" , (e) =>{
       // console.log(e.target);
        e.target.style.transform = "scale(0.7)";
        // le résultat est que tout mes éléments liés a box vont marché en meme temps
        // a chaque fois que je click sur un éléments lié a box celui ci se reduira au click grace au     transform = "scale(0.7)"
    });
});
     
  

   


