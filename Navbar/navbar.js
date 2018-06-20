
// $('')
// $('.navbarAll').text = $('#navbarDropdown2 :selected').text();


// function dd(e){
// 	//$('.navbarAll').text(e.text()); 
// 	console.log($('e.target').text());
// };

$("#allDropdown a").click(function(e){
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    //alert(selText);
    $("#navbarDropdown2").text(selText);
    $("#navbarDropdown2").css("width","250px");
});