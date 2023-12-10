console.log("Welcome to SKA Technology Pvt. Ltd.");

// $(document).ready(function(){
//   $('body').scrollspy({
//     target: '#sNavbar',
//     offset: 10
//   });
// });

const navServicesDropDownBtn = document.getElementById("navServicesDropDownBtn");

navServicesDropDownBtn.addEventListener("click", (e) => {
  e.preventDefault();
})




let success = document.getElementById("success");
let failure = document.getElementById("failure");

let cName = document.getElementById("inputName4");
let cEmail = document.getElementById("inputEmail4");
let cNumber = document.getElementById("inputNumber4");
let cCompany = document.getElementById("inputCompany4");
let cCity = document.getElementById("inputCity");
let cState = document.getElementById("inputState");
let cPinCode = document.getElementById("inputPinCode");
let cMessage = document.getElementById("inputMessage");
let gridCheck = document.getElementById("gridCheck");

let submit = document.getElementById("cSubmit");
let contactForm = document.getElementById("contactForm");


let validName = false;
let validEmail = false;
let validPhone = false;

function formReset() {
  contactForm.reset();
  submit.setAttribute("disabled", "true");

};

if (gridCheck) {
  submit.removeAttribute("disabled");

} else {

}



success.style.display = "none";

failure.style.display = "none";


cName.addEventListener("blur", () => {
  console.log("name is blurred");
  // validate name here

  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
  let str = cName.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    cName.classList.remove("is-invalid");
    validName = true;
  }
  else {
    console.log('Your name is not valid');
    cName.classList.add("is-invalid");
    validName = false;

  }
});


// cEmail.addEventListener("blur", () => {
//   console.log("email is blurred");
//   // validate name here

//   let regexEmail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,100})$/;
//   let str1 = cEmail.value;
//   console.log(regexEmail, str1);
//   if (regexEmail.test(str1)) {
//       console.log("Your email is valid");
//       cEmail.classList.remove("is-invalid");
//       validEmail = true;

//   }
//   else{
//       console.log('Your email is not valid');
//       cEmail.classList.add("is-invalid");
//       validEmail = false;
//   }
// })


// selectCar.addEventListener("blur", () => {
//   console.log("selectCar is blurred");
//   // validate name here


//   let regexCar = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
//   let str2 = selectCar.value;
//   console.log(regexCar, str2);
//   if (regexCar.test(str2)) {
//       console.log("Your Car Selection is valid");
//       selectCar.classList.remove("is-invalid");
//   }
//   else{
//       console.log('Your Car Selection is not valid');
//       selectCar.classList.add("is-invalid");

//   }

// })


// cPinCode.addEventListener("blur", () => {
//   console.log("address is blurred");
//   // validate name here

//   let regexAddress = /^[0-9]{6}/;
//   let str3 = cPinCode.value;
//   console.log(regexAddress, str3);
//   if (regexAddress.test(str3)) {
//       console.log("Your address is valid");
//       cPinCode.classList.remove("is-invalid");
//   }
//   else{
//       console.log('Your address is not valid');
//       cPinCode.classList.add("is-invalid");

//   }

// })


cNumber.addEventListener("blur", () => {
  console.log("phone is blurred");
  // validate name here

  let regexPhone = /^[0-9]{10}/;
  let str4 = cNumber.value;
  console.log(regexPhone, str4);
  if (regexPhone.test(str4)) {
    console.log("Your number is valid");
    cNumber.classList.remove("is-invalid");
    validPhone = true;
  }
  else {
    console.log('Your number is not valid');
    cNumber.classList.add("is-invalid");
    validPhone = false;

  }

})


// cMessage.addEventListener("blur", () => {
//   console.log("message is blurred");
//   // validate name here


//   let regexMessage = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
//   let str5 = cMessage.value;
//   console.log(regexMessage, str5);
//   if (regexMessage.test(str5)) {
//       console.log("Your message is valid");
//       cMessage.classList.remove("is-invalid");
//   }
//   else{
//       console.log('Your message is not valid');
//       cMessage.classList.add("is-invalid");

//   }

// });


gridCheck.addEventListener("click", function () {
  console.log("gridcheck clicked")
  if (validName && validPhone) {
    console.log("both true");
    gridCheck.checked = true;

    submit.removeAttribute("disabled");

  }
  else {
    console.log("both not true");
    submit.setAttribute("disabled", "true");
    gridCheck.checked = false;
    failure.classList.add("show");
    failure.style.display = "block";

    setTimeout(() => {
      failure.classList.remove("show");
      failure.style.display = "none";

    }, 2000);
  }
});




submit.addEventListener("click", (e) => {
  console.log('submitted');
  e.preventDefault();

  if (validName && validPhone && gridCheck) {
    console.log('all true');
    success.classList.add("show");
    success.style.display = "block";
    failure.style.display = "none";
    failure.classList.remove("show");



    sendEmail();
    formReset();
    validName = false;
    validPhone = false;

    setTimeout(() => {
      success.classList.remove("show");
      success.style.display = "none";

    }, 2000);

  } else {
    console.log('false');
    failure.classList.add("show");
    failure.style.display = "block";
    success.style.display = "none";
    success.classList.remove("show");

    setTimeout(() => {
      failure.classList.remove("show");
      failure.style.display = "none";

    }, 2000);
  }
  // success.classList.add("show");


});






function sendEmail() {

  // if (condition) {

  // } else {

  // }
  console.log(cName);



  let body = "Name: " + cName.value +
    "<br/> Email: " + cEmail.value +
    "<br/> Mobile Number: " + cNumber.value +
    "<br/> Company:" + cCompany.value +
    "<br/> City:" + cCity.value +
    "<br/> State:" + cState.value +
    "<br/> Pin Code:" + cPinCode.value +
    "<br/> Message:" + cMessage.value;


  Email.send(
    // Your security token is 29ab9f15-c7c6-4873-9919-4608fca03da4 Please take note of this.

    {

      Host: "",
      Username: "",
      Password: '',
      To: '',
      From: "",
      Subject: "New Enquiry from contact form",
      Body: body
    }).then(
      function () {
        alert("Thank You. We have received your details and we will get back to you shortly");
        let contactForm = document.getElementById("contactForm");
        contactForm.reset();


      }
    );

}










// let navbarSupportedContent = document.getElementById("navbarSupportedContent")
// let navTogglerIcon = document.getElementById("navTogglerIcon");

// let a = navbarSupportedContent.classList;
// console.log(a)

// navTogglerIcon.addEventListener("click", function(){
//   console.log("clicked");
//   if (a.contains("show") != true) {
//     console.log("false");
//     a.add("show");
//     a.remove("hide");

//   } 
// });



// // navTogglerIcon.addEventListener("blur", navTogglerIconFunction);
// function navTogglerIconFunction() {
//   console.log("blur");
//   if (a.contains("show") != true) {
//     console.log("false");
//     a.add("show");
//     a.remove("hide");

//   } else {
//     console.log("true");

//     setInterval(() => {
//       a.remove("show");
//       a.add("hide");

//     }, 500);
//   }

// }



// var corp = $("html, body");
// $(".scrollTrigger").click(function(){
//   var flag = $.attr(this,"href");
//   corp.animate({
//     scrollTop: $(schild).offset().top -60
//   }, 1600, function(){
//     window.location.hash = flag;

//   });
//   return false;
// });


// $("#navbarSupportedContent").on('show.bs.collapse', function () {
//   $('.scrollTrigger').click(function () {
//     $("#navbarSupportedContent").collapse('hide');
//   });
// });




// navbar scroll down show function
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 450);

});




// scroll padding
const navigationHeight = document.querySelector(".navbar").offsetHeight;
// console.log(navigationHeight);
document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");




// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("smallimg1new");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }











// var slider1Images = document.getElementById("slider1Images");
// var images = new Array(
//     "img/slider1.png",
//     "img/slider2.png",
//     "img/slider3.png",
//     "img/slider4.png"
// );

// var len = images.length;
// var i = 0 ;
// function slider(){
//     if(i > len-1){
//         i = 0;
//     }
//     slider1Images.src = images[i];
//     i++;
//     setTimeout('slider()', 6000);
// }




// hide offcanvas by js,   failed
// let scrollTrigger = document.getElementsByClassName("scrollTrigger");
// let offcanvasDark = document.getElementById("offcanvasDark");

// Array.from(scrollTrigger).forEach(function(element){
//   element.addEventListener("click", function(){
//     // offcanvasDark.classList.add('hide');
//     offcanvasDark.classList.remove('show');
//     offcanvasDark.setAttribute("aria-modal", false);
//     offcanvasDark.setAttribute("role", "none");
//   });
// });



// mobile screen menu options
$("#offcanvasDark a").click(function () {
  $('.offcanvas').offcanvas('hide');
});








window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }

}





setTimeout(function () {
  $('#preloader').fadeOut();
  $('.preloader_img').delay(150).fadeOut('slow');
}, 2000);











let startTime = new Date();
console.log(startTime, Number(startTime));

let dTime = 0;

let body = document.querySelector("body");
body.setAttribute("onload", "slideShowStarts();");

let bannerDots = document.getElementsByClassName("bannerDots");
let bannerBoxs = document.getElementsByClassName("bannerBoxs");

let banner1 = document.getElementById("banner1");
let banner2 = document.getElementById("banner2");
let banner3 = document.getElementById("banner3");
let banner4 = document.getElementById("banner4");
let bannerdot1 = document.getElementById("bannerdot1");
let bannerdot2 = document.getElementById("bannerdot2");
let bannerdot3 = document.getElementById("bannerdot3");
let bannerdot4 = document.getElementById("bannerdot4");
let banner1Img = document.getElementById("banner1Img");
let banner2Img = document.getElementById("banner2Img");
let banner3Img = document.getElementById("banner3Img");
let banner4Img = document.getElementById("banner4Img");

let overlayBanner1 = document.querySelector(".overlayBanner1");
let overlayBanner2 = document.querySelector(".overlayBanner2");
let overlayBanner3 = document.querySelector(".overlayBanner3");
let overlayBanner4 = document.querySelector(".overlayBanner4");



function show1hideAll() {
  console.log("1st slide showing")
  banner2Img.style.animationDuration = "0ms";
  banner3Img.style.animationDuration = "0ms";
  banner4Img.style.animationDuration = "0ms";
  banner1Img.style.animationDuration = "8000ms";
  bannerdot2.style.color = "white";
  bannerdot3.style.color = "white";
  bannerdot4.style.color = "white";
  bannerdot1.style.color = "aqua";
  banner2.classList.remove("bannerBoxsShow");
  banner3.classList.remove("bannerBoxsShow");
  banner4.classList.remove("bannerBoxsShow");
  banner1.classList.add("bannerBoxsShow");
  overlayBanner3.style.animationDuration = "0ms";
  overlayBanner4.style.animationDuration = "0ms";
  overlayBanner2.style.animationDuration = "0ms";
  overlayBanner1.style.animationDuration = "8000ms";
  banner1Img.style.animationDelay = dTime + "ms";
  overlayBanner1.style.animationDelay = dTime + "ms";
}

function show2hideAll() {
  console.log("1st slide showing")
  banner4Img.style.animationDuration = "0ms";
  banner3Img.style.animationDuration = "0ms";
  banner1Img.style.animationDuration = "0ms";
  banner2Img.style.animationDuration = "8000ms";
  bannerdot4.style.color = "white";
  bannerdot3.style.color = "white";
  bannerdot1.style.color = "white";
  bannerdot2.style.color = "aqua";
  banner4.classList.remove("bannerBoxsShow");
  banner3.classList.remove("bannerBoxsShow");
  banner1.classList.remove("bannerBoxsShow");
  banner2.classList.add("bannerBoxsShow");
  overlayBanner3.style.animationDuration = "0ms";
  overlayBanner4.style.animationDuration = "0ms";
  overlayBanner1.style.animationDuration = "0ms";
  overlayBanner2.style.animationDuration = "8000ms";
  banner2Img.style.animationDelay = dTime + "ms";
  overlayBanner2.style.animationDelay = dTime + "ms";
}

function show3hideAll() {
  console.log("1st slide showing")
  banner4Img.style.animationDuration = "0ms";
  banner1Img.style.animationDuration = "0ms";
  banner2Img.style.animationDuration = "0ms";
  banner3Img.style.animationDuration = "8000ms";
  bannerdot4.style.color = "white";
  bannerdot1.style.color = "white";
  bannerdot2.style.color = "white";
  bannerdot3.style.color = "aqua";
  banner4.classList.remove("bannerBoxsShow");
  banner1.classList.remove("bannerBoxsShow");
  banner2.classList.remove("bannerBoxsShow");
  banner3.classList.add("bannerBoxsShow");
  overlayBanner4.style.animationDuration = "0ms";
  overlayBanner1.style.animationDuration = "0ms";
  overlayBanner2.style.animationDuration = "0ms";
  overlayBanner3.style.animationDuration = "8000ms";
  banner3Img.style.animationDelay = dTime + "ms";
  overlayBanner3.style.animationDelay = dTime + "ms";
}

function show4hideAll() {
  console.log("1st slide showing")
  banner1Img.style.animationDuration = "0ms";
  banner2Img.style.animationDuration = "0ms";
  banner3Img.style.animationDuration = "0ms";
  banner4Img.style.animationDuration = "8000ms";
  bannerdot1.style.color = "white";
  bannerdot2.style.color = "white";
  bannerdot3.style.color = "white";
  bannerdot4.style.color = "aqua";
  banner1.classList.remove("bannerBoxsShow");
  banner2.classList.remove("bannerBoxsShow");
  banner3.classList.remove("bannerBoxsShow");
  banner4.classList.add("bannerBoxsShow");
  overlayBanner1.style.animationDuration = "0ms";
  overlayBanner2.style.animationDuration = "0ms";
  overlayBanner3.style.animationDuration = "0ms";
  overlayBanner4.style.animationDuration = "8000ms";
  banner4Img.style.animationDelay = dTime + "ms";
  overlayBanner4.style.animationDelay = dTime + "ms";
}



function show2hide1() {
  console.log("2nd slide showing")
  banner1.classList.remove("bannerBoxsShow");
  banner1Img.style.animationDuration = "0ms";
  banner2Img.style.animationDuration = "8000ms";
  banner2.classList.add("bannerBoxsShow");
  bannerdot1.style.color = "white";
  bannerdot2.style.color = "aqua";
  overlayBanner1.style.animationDuration = "0ms";
  overlayBanner2.style.animationDuration = "8000ms";
  banner2Img.style.animationDelay = dTime + "ms";
  overlayBanner2.style.animationDelay = dTime + "ms";

}

function show3hide2() {
  console.log("2nd timeout 3rd slide showing")
  banner2.classList.remove("bannerBoxsShow");
  banner2Img.style.animationDuration = "0ms";
  banner3Img.style.animationDuration = "8000ms";
  banner3.classList.add("bannerBoxsShow");
  bannerdot2.style.color = "white";
  bannerdot3.style.color = "aqua";
  overlayBanner2.style.animationDuration = "0ms";
  overlayBanner3.style.animationDuration = "8000ms";
  banner3Img.style.animationDelay = dTime + "ms";
  overlayBanner3.style.animationDelay = dTime + "ms";
}

function show4hide3() {
  console.log("3rd timeout 4th slide showing")
  banner3.classList.remove("bannerBoxsShow");
  banner3Img.style.animationDuration = "0ms";
  banner4Img.style.animationDuration = "8000ms";
  banner4.classList.add("bannerBoxsShow");
  bannerdot3.style.color = "white";
  bannerdot4.style.color = "aqua";
  overlayBanner3.style.animationDuration = "0ms";
  overlayBanner4.style.animationDuration = "8000ms";
  banner4Img.style.animationDelay = dTime + "ms";
  overlayBanner4.style.animationDelay = dTime + "ms";
}

function show1hide4() {
  console.log("last timeout again 1st slide showing")
  banner4.classList.remove("bannerBoxsShow");
  banner4Img.style.animationDuration = "0ms";
  banner1Img.style.animationDuration = "8000ms";
  banner1.classList.add("bannerBoxsShow");
  bannerdot4.style.color = "white";
  bannerdot1.style.color = "aqua";
  overlayBanner4.style.animationDuration = "0ms";
  overlayBanner1.style.animationDuration = "8000ms";
  banner1Img.style.animationDelay = dTime + "ms";
  overlayBanner1.style.animationDelay = dTime + "ms";
}




// showing slide 1
function slideShowStarts() {

  console.log("show hide starts, 1st slide showing");

  var endTime = new Date();
  dTime = Number(endTime) - Number(startTime) + 1000;
  console.log(dTime);


  timeoutslide0 = setTimeout(show1hideAll, 0 + dTime);
  timeoutslide1 = setTimeout(show2hide1, 8000 + dTime);
  timeoutslide2 = setTimeout(show3hide2, 16000  + dTime);
  timeoutslide3 = setTimeout(show4hide3, 24000 + dTime);
  timeoutslide4 = setTimeout(show1hide4, 32000 + dTime);

  interval1st = setInterval(() => {
    setTimeout(show2hide1, 8000 + dTime);
    setTimeout(show3hide2, 16000 + dTime);
    setTimeout(show4hide3, 24000 + dTime);
    setTimeout(show1hide4, 32000 + dTime);

  }, 32000 );
}


// showing slide 1
function sliderShow1stHideAll() {

  console.log("show hide starts, 1st slide showing");

  var id = window.setTimeout(function () { }, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
  }


  var endTime = new Date();
  dTime = Number(endTime) - Number(startTime);
  console.log(dTime);

  timeoutslide0 = setTimeout(show1hideAll, 0);
  timeoutslide1 = setTimeout(show2hide1, 8000);
  timeoutslide2 = setTimeout(show3hide2, 16000);
  timeoutslide3 = setTimeout(show4hide3, 24000);
  timeoutslide4 = setTimeout(show1hide4, 32000);

  interval1st = setInterval(() => {

    setTimeout(show2hide1, 8000);
    setTimeout(show3hide2, 16000);
    setTimeout(show4hide3, 24000);
    setTimeout(show1hide4, 32000);

  }, 32000);
}



// showing slide 2
function sliderShow2ndHideAll() {

  console.log("show hide starts, 1st slide showing");

  var id = window.setTimeout(function () { }, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
  }


  var endTime = new Date();
  dTime = Number(endTime) - Number(startTime);
  console.log(dTime);

  timeoutslide0 = setTimeout(show2hideAll, 0);
  timeoutslide1 = setTimeout(show3hide2, 8000);
  timeoutslide2 = setTimeout(show4hide3, 16000);
  timeoutslide3 = setTimeout(show1hide4, 24000);
  timeoutslide4 = setTimeout(show2hide1, 32000);

  interval2nd = setInterval(() => {
    setTimeout(show3hide2, 8000);
    setTimeout(show4hide3, 16000);
    setTimeout(show1hide4, 24000);
    setTimeout(show2hide1, 32000);
  }, 32000);
}


// showing slide 3
function sliderShow3rdHideAll() {

  console.log("show hide starts, 1st slide showing");

  var id = window.setTimeout(function () { }, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
  }


  var endTime = new Date();
  dTime = Number(endTime) - Number(startTime);
  console.log(dTime);

  timeoutslide0 = setTimeout(show3hideAll, 0);
  timeoutslide1 = setTimeout(show4hide3, 8000);
  timeoutslide2 = setTimeout(show1hide4, 16000);
  timeoutslide3 = setTimeout(show2hide1, 24000);
  timeoutslide4 = setTimeout(show3hide2, 32000);

  interval3rd = setInterval(() => {
    timeoutslide1 = setTimeout(show4hide3, 8000);
    timeoutslide2 = setTimeout(show1hide4, 16000);
    timeoutslide3 = setTimeout(show2hide1, 24000);
    timeoutslide4 = setTimeout(show3hide2, 32000);
  }, 32000);
}


// showing slide 4
function sliderShow4thHideAll() {

  console.log("show hide starts, 4th slide showing");

  var id = window.setTimeout(function () { }, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
  }

  var endTime = new Date();
  dTime = Number(endTime) - Number(startTime);
  console.log(dTime);

  timeoutslide0 = setTimeout(show4hideAll, 0);
  timeoutslide1 = setTimeout(show1hide4, 8000);
  timeoutslide2 = setTimeout(show2hide1, 16000);
  timeoutslide3 = setTimeout(show3hide2, 24000);
  timeoutslide4 = setTimeout(show4hide3, 32000);

  interval4th = setInterval(() => {
    timeoutslide1 = setTimeout(show1hide4, 8000);
    timeoutslide2 = setTimeout(show2hide1, 16000);
    timeoutslide3 = setTimeout(show3hide2, 24000);
    timeoutslide4 = setTimeout(show4hide3, 32000);
  }, 32000);
}
