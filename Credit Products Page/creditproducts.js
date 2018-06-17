
$(document).ready(function () {
    document.getElementById("defaultOpen").click();
});

$('#nextbutton').click(function(){
	$('.front').addClass('rotate');
	$('.back').removeClass('rotate');
});

function openContent(evt, boxName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // // Get all elements with class="tablinks" and remove the class "active"
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }

    // Show the current tab, and add an "active" class to the button that opened the tab
    if (window.matchMedia('(max-width: 767px)').matches) {
    boxName = boxName + "small";
    	document.getElementById(boxName).style.display = "block";

	}else{
    document.getElementById(boxName).style.display = "block";


    //evt.currentTarget.className += " active";
	}
}

