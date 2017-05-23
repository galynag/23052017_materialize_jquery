$(document).ready(function() {
//1.Для декстопной  версии при нажатии появляется окно с возможностью ввести номер телефона
//2.Для мобильной -  прямой звонок
//3.Для всех версий добавить динамику иконки (движение трубки)
    $('#tel').on('click',function() {
        var br='';
        br+=navigator.userAgent;
        phoneMoove();
        if (br.indexOf('Mobile')>=0) {
            $('tel').attr('href','http://www.webmasters.by/articles/web-programming/3118-browser-detection-javascript.html');
            alert('call back');
        } else {
            $('#tel-input').css({'display': 'block'})
        }
    })
    function phoneMoove() {
        $('#tel img').css({
            'transform' : 'rotate(-20deg)'
        });
    }
    /////////

    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        }
    );
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('table').on('click',borderF);

    $('#hide').on('click', function(){
        $('.test').hide(3000);
    });
    $('#show').on('click', function(){
        $('.test').show(2000);
    });
    $('#toggle').on('click', function(){
        $('.test').toggle(2000);
    });
    $('#sup').on('click', function(){
        $('.test').slideUp(2000);
    });
    $('#sud').on('click', function(){
        $('.test').slideDown(2000);
    });
    $('#sut').on('click', function(){
        $('.test').slideToggle(2000);
    });
// --------

    $('#fin').on('click', function(){
        $('.test').fadeIn(2000);
    });
    $('#fout').on('click', function(){
        $('.test').fadeOut(2000);
    });
    $('#ftoggle').on('click', function(){
        $('.test').fadeToggle(2000);
    });

});
var counter=0;
console.log(counter);
function borderF() {
    if (counter==2) {
        counter=0;
        $('table').toggleClass("striped");
        $('table').toggleClass("highlight");
    }
    else if (counter==0) {
        counter++;
        $('table').toggleClass("bordered");
    }
    else if (counter==1) {
        counter++;
        $('table').toggleClass("bordered");
        $('table').toggleClass("striped");
    }
}
$('input[type=radio]').on('click', function(){
    $('table').removeClass().addClass($(this).val());
});

$('input[type=checkbox]').on('click', function(){
    $('table').toggleClass($(this).val());
});
// анимация блока1
$('.block1').animate({
    'height': '150px',
    'width' : '200px'
}, 4000);
$('.block1').animate({
    'border-radius': '200px',
    'background' : 'red'
}, 1000);

// анимация блока2. направление блока направо, вниз, налево, вверх
$('.block2').animate({
    'top': '5',
    'left' : '5'
}, 2000)
    .animate({
        'top': '5',
        'left' : '900'
    }, 1000)
.animate({
    'top': '400',
    'left' : '900'
}, 2000)
.animate({
    'top': '400',
    'left' : '5'
}, 2000)
.animate({
    'top': '5',
    'left' : '5'
}, 2000);



// анимированная кнопка
function AnimateRotate1(d){
    $({deg: 0}).animate({deg: d},
        {step: function(now, fx){
            $("#myBtn").css({
                transform: "rotateY(" + now + "deg)"
            });
        }
      }, 2000);
    $('#myBtnDiv2').queue(function () {
          $(this).show(100);
          $(this).dequeue();
        });

    $('#myBtnDiv1').queue(function () {
          $(this).animate({'height' : '110%'},2000,
        function() {
          AnimateRotate2(40)
        });
          $(this).dequeue();
        });

    $('#myBtnDiv2').queue(function () {
      $(this).toggle(500);
      $(this).dequeue();
    });
    // $('#myBtnDiv2').toggle(100);

    $('#myBtnDiv1').queue(function () {
      $(this).toggle(100);
      $(this).dequeue();
    });
}

AnimateRotate1(40);

function AnimateRotate2(d){
    $({deg: d}).animate({deg: 0},
        {step: function(now, fx){
            $("#myBtn").css({transform: "rotateY(" + now + "deg)"});
        }
      },2000,$('#myBtn-on').show(1000)
    )
}
// анимирование кнопки2
$('#myDiv2 .box').animate({'top' : '-60'},2000)
.animate({'top' : '-120'},2000)
.animate({'top' : '0'},2000);
// анимирование кнопки 3
AnimateRotate1_3(42);
function AnimateRotate1_3(d){
    $({deg: 0}).animate({deg: d},
        {step: function(now, fx){
            $("#myBtn_3").css({
                transform: "rotateX(" + now + "deg)"
            });
        }
      }, 2000, function() {
        AnimateRotate2_3(42)
      });
}


function AnimateRotate2_3(d){
    $({deg: d}).animate({deg: 0},
        {step: function(now, fx){
            $("#myBtn_3").css({transform: "rotateX(" + now + "deg)"});
        }
      },2000,$('#myBtn-on3').show(1000)
    )
}
