// telephone input
$("#tel").mask("+380 99 999 99 99");

// custom select menu
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// slider
$('.top-slider__items').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
});

$('.product-like__cards').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    arrows:false,
    slidesToScroll: 2,
});

$('.gallery__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

// category links masks
$(document).ready((function () {
    $('#intCatLink1').hover(function () {
        $(this).find($('#intCatSpan1').addClass('active'));
    }, function () {
        $('#intCatSpan1').removeClass('active');
    });
}));

$(document).ready((function () {
    $('#intCatLink2').hover(function () {
        $(this).find($('#intCatSpan2').addClass('active'));
    }, function () {
        $('#intCatSpan2').removeClass('active');
    });
}));

// products links masks
$(document).ready((function () {
    $('#prdCrdLink1').hover(function () {
        $(this).find($('#prdCrdSpn2').addClass('active'));
        $(this).find($('#prdCrdSpn3').addClass('active'));
    }, function () {
        $('#prdCrdSpn2').removeClass('active');
        $('#prdCrdSpn3').removeClass('active');
    });
}));

$(document).ready((function () {
    $('#prdCrdLink2').hover(function () {
        $(this).find($('#prdCrdSpn1').addClass('active'));
        $(this).find($('#prdCrdSpn3').addClass('active'));
    }, function () {
        $('#prdCrdSpn1').removeClass('active');
        $('#prdCrdSpn3').removeClass('active');
    });
}));

$(document).ready((function () {
    $('#prdCrdLink3').hover(function () {
        $(this).find($('#prdCrdSpn1').addClass('active'));
        $(this).find($('#prdCrdSpn2').addClass('active'));
    }, function () {
        $('#prdCrdSpn1').removeClass('active');
        $('#prdCrdSpn2').removeClass('active');
    });
}));

// Scroll Up
$(function() {
    $.fn.scrollToTop = function() {
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $(".footer__right").scrollToTop();
});

// Menu down
$(function () {
    $('#menu-panel__select1').click(function () {
        $('.menu-panel__brands').slideToggle("medium");
        $('#menu-panel__select1').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select2').click(function () {
        $('.menu-panel__colors--wrapper').slideToggle("medium");
        $('#menu-panel__select2').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select3').click(function () {
        $('.menu-panel__sizes--wrapper').slideToggle("medium");
        $('#menu-panel__select3').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select4').click(function () {
        $('#product-menu__select-desc1').slideToggle("medium");
        $('#menu-panel__select4').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select5').click(function () {
        $('#product-menu__select-desc2').slideToggle("medium");
        $('#menu-panel__select5').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select6').click(function () {
        $('#product-menu__select-desc3').slideToggle("medium");
        $('#menu-panel__select6').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select7').click(function () {
        $('#care__p1').slideToggle("medium");
        $('#menu-panel__select7').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select8').click(function () {
        $('#care__p2').slideToggle("medium");
        $('#menu-panel__select8').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select9').click(function () {
        $('#care__p3').slideToggle("medium");
        $('#menu-panel__select9').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select10').click(function () {
        $('#care__p4').slideToggle("medium");
        $('#menu-panel__select10').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select11').click(function () {
        $('#care__p5').slideToggle("medium");
        $('#menu-panel__select11').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select12').click(function () {
        $('#care__p6').slideToggle("medium");
        $('#menu-panel__select12').toggleClass('active');
    });
});

$(function () {
    $('#menu-panel__select13').click(function () {
        $('#care__p7').slideToggle("medium");
        $('#menu-panel__select13').toggleClass('active');
    });
});

// onClick active
$(document).ready(function() {
    $(".menu-panel__color--link").click(function () {
        $(".menu-panel__color--link").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function() {
    $(".btn-m").click(function () {
        $(".btn-m").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function() {
    $(".clothing__card--color a").click(function () {
        $(".clothing__card--color a").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function() {
    $("#menu-panel__category--link1").click(function () {
        $(".menu-panel__category--link").removeClass("active");
        $(".personal__data").show(300);
        $(".personal__address").slideUp(300);
        $(".personal__history").slideUp(300);
        $(this).addClass("active");
    });
});

$(document).ready(function() {
    $("#menu-panel__category--link2").click(function () {
        $(".menu-panel__category--link").removeClass("active");
        $(".personal__address").show(300);
        $(".personal__data").slideUp(300);
        $(".personal__history").slideUp(300);
        $(this).addClass("active");
    });
});

$(document).ready(function() {
    $("#menu-panel__category--link3").click(function () {
        $(".menu-panel__category--link").removeClass("active");
        $(".personal__history").show(300);
        $(".personal__address").slideUp(300);
        $(".personal__data").slideUp(300);
        $(this).addClass("active");
    });
});