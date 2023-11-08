$(document).ready(function () {
    $("#clicksearch").click(function () {
        $("#boxsearch").slideDown("fast");
    });
});
$(document).ready(function () {
    $("#btbncancelsearch").click(function () {
        $("#boxsearch").slideUp("fast");
    });
});



function hidepro() {
    var hdpr = document.getElementById('hidepro')
    var shpr = document.getElementById('showpro')

    hdpr.style.display = 'block';
    shpr.style.display = 'none';
}
function showpro() {
    var hdpr = document.getElementById('hidepro')
    var shpr = document.getElementById('showpro')

    hdpr.style.display = 'none';
    shpr.style.display = 'block';
}
function hidepro1() {
    var hdpr1 = document.getElementById('hidepro1')
    var shpr1 = document.getElementById('showpro1')

    hdpr1.style.display = 'block';
    shpr1.style.display = 'none';
}
function showpro1() {
    var hdpr1 = document.getElementById('hidepro1')
    var shpr1 = document.getElementById('showpro1')

    hdpr1.style.display = 'none';
    shpr1.style.display = 'block';
}
function hidepro2() {
    var hdpr2 = document.getElementById('hidepro2')
    var shpr2 = document.getElementById('showpro2')

    hdpr2.style.display = 'block';
    shpr2.style.display = 'none';
}
function showpro2() {
    var hdpr2 = document.getElementById('hidepro2')
    var shpr2 = document.getElementById('showpro2')

    hdpr2.style.display = 'none';
    shpr2.style.display = 'block';
}
function hidepro4() {
    var hdpr4 = document.getElementById('hidepro4')
    var shpr4 = document.getElementById('showpro4')

    hdpr4.style.display = 'block';
    shpr4.style.display = 'none';
}
function showpro4() {
    var hdpr4 = document.getElementById('hidepro4')
    var shpr4 = document.getElementById('showpro4')

    hdpr4.style.display = 'none';
    shpr4.style.display = 'block';
}
function hidepro3() {
    var hdpr3 = document.getElementById('hidepro3')
    var shpr3 = document.getElementById('showpro3')

    hdpr3.style.display = 'block';
    shpr3.style.display = 'none';
}
function showpro3() {
    var hdpr3 = document.getElementById('hidepro3')
    var shpr3 = document.getElementById('showpro3')

    hdpr3.style.display = 'none';
    shpr3.style.display = 'block';
}
function hidepro6() {
    var hdpr6 = document.getElementById('hidepro6')
    var shpr6 = document.getElementById('showpro6')

    hdpr6.style.display = 'block';
    shpr6.style.display = 'none';
}
function showpro6() {
    var hdpr6 = document.getElementById('hidepro6')
    var shpr6 = document.getElementById('showpro6')

    hdpr6.style.display = 'none';
    shpr6.style.display = 'block';
}
function hidepro5() {
    var hdpr5 = document.getElementById('hidepro5')
    var shpr5 = document.getElementById('showpro5')

    hdpr5.style.display = 'block';
    shpr5.style.display = 'none';
}
function showpro5() {
    var hdpr5 = document.getElementById('hidepro5')
    var shpr5 = document.getElementById('showpro5')

    hdpr5.style.display = 'none';
    shpr5.style.display = 'block';
}
function hidepro7() {
    var hdpr7 = document.getElementById('hidepro7')
    var shpr7 = document.getElementById('showpro7')

    hdpr7.style.display = 'block';
    shpr7.style.display = 'none';
}
function showpro7() {
    var hdpr7 = document.getElementById('hidepro7')
    var shpr7 = document.getElementById('showpro7')

    hdpr7.style.display = 'none';
    shpr7.style.display = 'block';
}
function hidepro8() {
    var hdpr8 = document.getElementById('hidepro8')
    var shpr8 = document.getElementById('showpro8')

    hdpr8.style.display = 'block';
    shpr8.style.display = 'none';
}
function showpro8() {
    var hdpr8 = document.getElementById('hidepro8')
    var shpr8 = document.getElementById('showpro8')

    hdpr8.style.display = 'none';
    shpr8.style.display = 'block';
}
function hidepro9() {
    var hdpr9 = document.getElementById('hidepro9')
    var shpr9 = document.getElementById('showpro9')

    hdpr9.style.display = 'block';
    shpr9.style.display = 'none';
}
function showpro9() {
    var hdpr9 = document.getElementById('hidepro9')
    var shpr9 = document.getElementById('showpro9')

    hdpr9.style.display = 'none';
    shpr9.style.display = 'block';
}
function hidepro10() {
    var hdpr10 = document.getElementById('hidepro10')
    var shpr10 = document.getElementById('showpro10')

    hdpr10.style.display = 'block';
    shpr10.style.display = 'none';
}
function showpro10() {
    var hdpr10 = document.getElementById('hidepro10')
    var shpr10 = document.getElementById('showpro10')

    hdpr10.style.display = 'none';
    shpr10.style.display = 'block';
}

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener(`click`, () => {
    container.classList.remove("active");
});

function scrollToTop(){
    window.scrollTo(0, 0);
}