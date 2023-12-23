function home(){
    location.href="index.html";
}
function register(){
    location.href="register.html";

}
function login(){
  location.href="login.html";

}
function a_search(){
  location.href="a_search.html"
}
function watch_list(){
  location.href="watchlist.html"
}
function invoice_link(){
  location.href="invoicing.html"
}
function adminpanel(){
  location.href="admin_panel.html"
}
function about_us(){
  location.href="about_us.html"
}
//nav bottom
function navbarr(){
    var navbar = document.getElementById('navvbar');
    var scrolval = window.scrollY;
    if (scrolval < 130) {

      navbar.classList.remove('bgbottom');
        
    }else{
        navbar.classList.add('bgbottom');
                    
    }   
}
    window.addEventListener('scroll', navbarr);

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function toast(){

}


//toast
const toastTrigger = document.getElementById('myBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
//toast

//search bar
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

//search bar


