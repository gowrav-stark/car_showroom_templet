function fun() {
  console.log("hi")
  $('#searchh').find('i').toggleClass('bi-search').toggleClass('bi-x-circle');
  $('#searchh').find('.hidden_searchbar').toggleClass('d-block').toggleClass('d-none');

}

function profileToggle() {
  console.log("hpp")
  $(".profileDropDown").find('i').toggleClass('bi-person').toggleClass('bi-x-circle');

}


// multi item carousal

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:3,
      autoplay:false,
      margin:30,
      loop:true,
      nav:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      navText:["<i class='bi bi-chevron-left fs-5 p-0 p-sm-4 mb-4'></i>","<i class='bi bi-chevron-right fs-5 p-0 p-sm-4 mb-4 '></i>" ]
  });
});

// //////////////////////////////
// mobile navbar
var flag0 = 0;
var flag1 = 1;
var flag2 = 1;
var flag3 = 1;

function openNav() {

  
  if (flag0 == 1) {
    flag0 = 0;
    $('.smmenu').find('i').toggleClass('bi-list').toggleClass('bi-x');
    document.getElementById("mySidebar").style.width = "0";

    console.log("if" + flag0)
  }
  else {
    flag0 = 1;
    $('.smmenu').find('i').toggleClass('bi-list').toggleClass('bi-x');
    document.getElementById("mySidebar").style.width = "250px";

    console.log("else" + flag0)
  }
}

function openSearch() {
  if (flag1 == 0) {
    flag1=1;
    document.getElementById("searchExpand").style.display = "none";

    $('.smsearch').find('i').toggleClass('bi-search').toggleClass('bi-x');
console.log(flag1)
  }
  else{
    flag1=0;
    document.getElementById("searchExpand").style.display="block";

  $('.smsearch').find('i').toggleClass('bi-search').toggleClass('bi-x');
  console.log(flag1)

  }

}

function openProfile() {
  if (flag2 == 0) {
    flag2=1;
    document.getElementById("profileExpand").style.display = "none";

    $('.smprofile').find('i').toggleClass('bi-profile').toggleClass('bi-x');
console.log(flag2)
  }
  else{
    flag2=0;
    document.getElementById("profileExpand").style.display="block";

  $('.smprofile').find('i').toggleClass('bi-profile').toggleClass('bi-x');
  console.log(flag2)

  }

}
function openCart() {
  if (flag3 == 0) {
    flag3=1;
    document.getElementById("cartExpand").style.display = "none";

    $('.smcart').find('i').toggleClass('bi-cart').toggleClass('bi-x');
console.log(flag3)
  }
  else{
    flag3=0;
    document.getElementById("cartExpand").style.display="block";

  $('.smcart').find('i').toggleClass('bi-cart').toggleClass('bi-x');
  console.log(flag)

  }

}

// // mobile nav bar ends

