let accordion = document.querySelectorAll(".accordion .contentBox");

for(let i = 0; i < accordion.length; i++){
      accordion[i].addEventListener("click", function(){
            this.classList.toggle("active")
      });
};