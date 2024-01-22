let container=document.querySelector(".container");
let generateCV=document.querySelector("#generateCV");
let cvName=document.querySelector("#name")



generateCV.addEventListener("click",(event)=>{
  console.log(event);
  

  let div=document.createElement("div");
  div.className="cv";
  div.innerHTML=`
  <div class="box1">
        <img src="man.jpg" alt="User-Image">
        <p class="heading " >${cvName.value}</p>

        <div class="info-box">
          <p>Personal-Information</p>

          <div class="content">
            <div class="para">
              <p class="small-heading">Address</p>
              <p>${address.value}</p>
            </div>
            <div class="para">
              <p class="small-heading">Phone</p>
              <p>${contact.value}</p>
            </div>
            <div class="para">
              <p class="small-heading">Email</p>
              <p>${email.value}</p>
            </div>
            <div class="para">
              <p class="small-heading">LinkedIn</p>
              <p>${Linkedin.value}</p>
            </div>
            <div class="para">
              <p class="small-heading">Instagram</p>
              <p>${instagram.value}</p>
            </div>

          </div>
        </div>

        
      </div>
      <div class="box2">
        <div class="objective">
          <div class="cv-box">
            <p class="cv-heading">Objective</p>
            <p>${objective.value}</p>
          </div>
          <div class="cv-box">
            <p class="cv-heading">Academic Qualification</p>
            <p>${academics.value}</p>
          </div>
          <div class="cv-box">
            <p class="cv-heading">Skills</p>
            <p>${skills.value}</p>
          </div>
        </div>
      </div>
  `
  container.innerHTML="";
  container.append(div);

})