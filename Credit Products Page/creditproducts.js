//alert("connected!!");

// var loantap = document.getElementById("loantap");

$("#lendingkart").click(function(){
	checkPosition();
	});

$("#loantap").click(function(){
	checkPosition1();
	});

$("#capitalfloat").click(function(){
	checkPosition2();
	});

$("#kredx").click(function(){
	checkPosition3();
	});

$("#neogrowth").click(function(){
	checkPosition4();
	});

// $('#capitalfloat').click(function(){
// 	$('#p1').text("");
// 	$('#p2').text("");
// 	$('#p3').text("");
// });

function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
		$('#p1').removeClass('wd');   
		$('#p2').removeClass('wd');   
		$('#p3').removeClass('wd');  
		$('#content').removeClass('Combined-Shape-Copy') ;
		$('#content').removeClass('flex-container2') ;
		$('#p1').text("");
		$('#p2').text("");
		$('#p3').text("");
		$('#lkp1').addClass('wd');
		$('#lkp2').addClass('wd');
		$('#lkp3').addClass('wd');
		$('#lendingkartdiv').addClass('Combined-Shape-Copy') ;
		$('#lendingkartdiv').addClass('flex-container2') ;
		$('#ltp1').text("");
		$('#ltp2').text("");
		$('#ltp3').text("");
		$('#ltp1').removeClass('wd');
		$('#ltp2').removeClass('wd');
		$('#ltp3').removeClass('wd');
		$('#loantapdiv').removeClass('Combined-Shape-Copy') ;
		$('#loantapdiv').removeClass('flex-container2') ;
		$('#cfp1').text("");
		$('#cfp2').text("");
		$('#cfp3').text("");
		$('#cfp1').removeClass('wd');
		$('#cfp2').removeClass('wd');
		$('#cfp3').removeClass('wd');
		$('#capitalfloatdiv').removeClass('Combined-Shape-Copy') ;
		$('#capitalfloatdiv').removeClass('flex-container2') ;
		$('#krp1').text("");
		$('#krp2').text("");
		$('#krp3').text("");
		$('#krp1').removeClass('wd');
		$('#krp2').removeClass('wd');
		$('#krp3').removeClass('wd');
		$('#kredxdiv').removeClass('Combined-Shape-Copy') ;
		$('#kredxdiv').removeClass('flex-container2') ;
		$('#ngp1').text("");
		$('#ngp2').text("");
		$('#ngp3').text("");
		$('#ngp1').removeClass('wd');
		$('#ngp2').removeClass('wd');
		$('#ngp3').removeClass('wd');
		$('#neogrowthdiv').removeClass('Combined-Shape-Copy') ;
		$('#neogrowthdiv').removeClass('flex-container2') ;
		$('#lkp1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#lkp2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#lkp3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    } 
    else {
    $('#p1').addClass('wd');   
	$('#p2').addClass('wd');   
	$('#p3').addClass('wd');  
	$('#content').addClass('Combined-Shape-Copy') ;
	$('#content').addClass('flex-container2') ;
	$('#lkp1').text("");
	$('#lkp2').text("");
	$('#lkp3').text("");
	$('#lkp1').removeClass('wd');
	$('#lkp2').removeClass('wd');
	$('#lkp3').removeClass('wd');
	$('#lendingkartdiv').removeClass('Combined-Shape-Copy') ;
	$('#lendingkartdiv').removeClass('flex-container2') ;
    $('#p1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    }
}

// loantap.addEventListener("click",function(){
// 		alert("Button clicked");
// 	});

function checkPosition1() {
    if (window.matchMedia('(max-width: 767px)').matches) {
		$('#p1').removeClass('wd');   
		$('#p2').removeClass('wd');   
		$('#p3').removeClass('wd');  
		$('#content').removeClass('Combined-Shape-Copy') ;
		$('#content').removeClass('flex-container2') ;
		$('#p1').text("");
		$('#p2').text("");
		$('#p3').text("");
		$('#ltp1').addClass('wd');
		$('#ltp2').addClass('wd');
		$('#ltp3').addClass('wd');
		$('#lkp1').text("");
		$('#lkp2').text("");
		$('#lkp3').text("");
		$('#lkp1').removeClass('wd');
		$('#lkp2').removeClass('wd');
		$('#lkp3').removeClass('wd');
		$('#lendingkartdiv').removeClass('Combined-Shape-Copy') ;
		$('#lendingkartdiv').removeClass('flex-container2') ;
		$('#cfp1').text("");
		$('#cfp2').text("");
		$('#cfp3').text("");
		$('#cfp1').removeClass('wd');
		$('#cfp2').removeClass('wd');
		$('#cfp3').removeClass('wd');
		$('#capitalfloatdiv').removeClass('Combined-Shape-Copy') ;
		$('#capitalfloatdiv').removeClass('flex-container2') ;
		$('#krp1').text("");
		$('#krp2').text("");
		$('#krp3').text("");
		$('#krp1').removeClass('wd');
		$('#krp2').removeClass('wd');
		$('#krp3').removeClass('wd');
		$('#kredxdiv').removeClass('Combined-Shape-Copy') ;
		$('#kredxdiv').removeClass('flex-container2') ;
		$('#ngp1').text("");
		$('#ngp2').text("");
		$('#ngp3').text("");
		$('#ngp1').removeClass('wd');
		$('#ngp2').removeClass('wd');
		$('#ngp3').removeClass('wd');
		$('#neogrowthdiv').removeClass('Combined-Shape-Copy') ;
		$('#neogrowthdiv').removeClass('flex-container2') ;
		$('#loantapdiv').addClass('Combined-Shape-Copy') ;
		$('#loantapdiv').addClass('flex-container2') ;
		$('#ltp1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#ltp2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#ltp3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    } 
    else {
    $('#p1').addClass('wd');   
	$('#p2').addClass('wd');   
	$('#p3').addClass('wd');  
	$('#content').addClass('Combined-Shape-Copy') ;
	$('#content').addClass('flex-container2') ;
	$('#ltp1').text("");
	$('#ltp2').text("");
	$('#ltp3').text("");
	$('#ltp1').removeClass('wd');
	$('#ltp2').removeClass('wd');
	$('#ltp3').removeClass('wd');
	$('#loantapdiv').removeClass('Combined-Shape-Copy') ;
	$('#loantapdiv').removeClass('flex-container2') ;
    $('#p1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    }
}

function checkPosition2() {
    if (window.matchMedia('(max-width: 767px)').matches) {
		$('#p1').removeClass('wd');   
		$('#p2').removeClass('wd');   
		$('#p3').removeClass('wd');  
		$('#content').removeClass('Combined-Shape-Copy') ;
		$('#content').removeClass('flex-container2') ;
		$('#p1').text("");
		$('#p2').text("");
		$('#p3').text("");
		$('#cfp1').addClass('wd');
		$('#cfp2').addClass('wd');
		$('#cfp3').addClass('wd');
		$('#lkp1').text("");
		$('#lkp2').text("");
		$('#lkp3').text("");
		$('#lkp1').removeClass('wd');
		$('#lkp2').removeClass('wd');
		$('#lkp3').removeClass('wd');
		$('#lendingkartdiv').removeClass('Combined-Shape-Copy') ;
		$('#lendingkartdiv').removeClass('flex-container2') ;
		$('#ltp1').text("");
		$('#ltp2').text("");
		$('#ltp3').text("");
		$('#ltp1').removeClass('wd');
		$('#ltp2').removeClass('wd');
		$('#ltp3').removeClass('wd');
		$('#loantapdiv').removeClass('Combined-Shape-Copy') ;
		$('#loantapdiv').removeClass('flex-container2') ;
		$('#krp1').text("");
		$('#krp2').text("");
		$('#krp3').text("");
		$('#krp1').removeClass('wd');
		$('#krp2').removeClass('wd');
		$('#krp3').removeClass('wd');
		$('#kredxdiv').removeClass('Combined-Shape-Copy') ;
		$('#kredxdiv').removeClass('flex-container2') ;
		$('#ngp1').text("");
		$('#ngp2').text("");
		$('#ngp3').text("");
		$('#ngp1').removeClass('wd');
		$('#ngp2').removeClass('wd');
		$('#ngp3').removeClass('wd');
		$('#neogrowthdiv').removeClass('Combined-Shape-Copy') ;
		$('#neogrowthdiv').removeClass('flex-container2') ;
		$('#capitalfloatdiv').addClass('Combined-Shape-Copy') ;
		$('#capitalfloatdiv').addClass('flex-container2') ;
		$('#cfp1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#cfp2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#cfp3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    } 
    else {
    $('#p1').addClass('wd');   
	$('#p2').addClass('wd');   
	$('#p3').addClass('wd');  
	$('#content').addClass('Combined-Shape-Copy') ;
	$('#content').addClass('flex-container2') ;
	$('#cfp1').text("");
	$('#cfp2').text("");
	$('#cfp3').text("");
	$('#cfp1').removeClass('wd');
	$('#cfp2').removeClass('wd');
	$('#cfp3').removeClass('wd');
	$('#capitalfloatdiv').removeClass('Combined-Shape-Copy') ;
	$('#capitalfloatdiv').removeClass('flex-container2') ;
    $('#p1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    }
}

function checkPosition3() {
    if (window.matchMedia('(max-width: 767px)').matches) {
		$('#p1').removeClass('wd');   
		$('#p2').removeClass('wd');   
		$('#p3').removeClass('wd');  
		$('#content').removeClass('Combined-Shape-Copy') ;
		$('#content').removeClass('flex-container2') ;
		$('#p1').text("");
		$('#p2').text("");
		$('#p3').text("");
		$('#krp1').addClass('wd');
		$('#krp2').addClass('wd');
		$('#krp3').addClass('wd');
		$('#lkp1').text("");
		$('#lkp2').text("");
		$('#lkp3').text("");
		$('#lkp1').removeClass('wd');
		$('#lkp2').removeClass('wd');
		$('#lkp3').removeClass('wd');
		$('#lendingkartdiv').removeClass('Combined-Shape-Copy') ;
		$('#lendingkartdiv').removeClass('flex-container2') ;
		$('#ltp1').text("");
		$('#ltp2').text("");
		$('#ltp3').text("");
		$('#ltp1').removeClass('wd');
		$('#ltp2').removeClass('wd');
		$('#ltp3').removeClass('wd');
		$('#loantapdiv').removeClass('Combined-Shape-Copy') ;
		$('#loantapdiv').removeClass('flex-container2') ;
		$('#cfp1').text("");
		$('#cfp2').text("");
		$('#cfp3').text("");
		$('#cfp1').removeClass('wd');
		$('#cfp2').removeClass('wd');
		$('#cfp3').removeClass('wd');
		$('#capitalfloatdiv').removeClass('Combined-Shape-Copy') ;
		$('#capitalfloatdiv').removeClass('flex-container2') ;
		$('#ngp1').text("");
		$('#ngp2').text("");
		$('#ngp3').text("");
		$('#ngp1').removeClass('wd');
		$('#ngp2').removeClass('wd');
		$('#ngp3').removeClass('wd');
		$('#neogrowthdiv').removeClass('Combined-Shape-Copy') ;
		$('#neogrowthdiv').removeClass('flex-container2') ;
		$('#kredxdiv').addClass('Combined-Shape-Copy') ;
		$('#kredxdiv').addClass('flex-container2') ;
		$('#krp1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#krp2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#krp3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    } 
    else {
    $('#p1').addClass('wd');   
	$('#p2').addClass('wd');   
	$('#p3').addClass('wd');  
	$('#content').addClass('Combined-Shape-Copy') ;
	$('#content').addClass('flex-container2') ;
	$('#krp1').text("");
	$('#krp2').text("");
	$('#krp3').text("");
	$('#krp1').removeClass('wd');
	$('#krp2').removeClass('wd');
	$('#krp3').removeClass('wd');
	$('#kredxdiv').removeClass('Combined-Shape-Copy') ;
	$('#kredxdiv').removeClass('flex-container2') ;
    $('#p1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    }
}

function checkPosition4() {
    if (window.matchMedia('(max-width: 767px)').matches) {
		$('#p1').removeClass('wd');   
		$('#p2').removeClass('wd');   
		$('#p3').removeClass('wd');  
		$('#content').removeClass('Combined-Shape-Copy') ;
		$('#content').removeClass('flex-container2') ;
		$('#p1').text("");
		$('#p2').text("");
		$('#p3').text("");
		$('#ngp1').addClass('wd');
		$('#ngp2').addClass('wd');
		$('#ngp3').addClass('wd');
		$('#lkp1').text("");
		$('#lkp2').text("");
		$('#lkp3').text("");
		$('#lkp1').removeClass('wd');
		$('#lkp2').removeClass('wd');
		$('#lkp3').removeClass('wd');
		$('#lendingkartdiv').removeClass('Combined-Shape-Copy') ;
		$('#lendingkartdiv').removeClass('flex-container2') ;
		$('#ltp1').text("");
		$('#ltp2').text("");
		$('#ltp3').text("");
		$('#ltp1').removeClass('wd');
		$('#ltp2').removeClass('wd');
		$('#ltp3').removeClass('wd');
		$('#cfp1').text("");
		$('#cfp2').text("");
		$('#cfp3').text("");
		$('#cfp1').removeClass('wd');
		$('#cfp2').removeClass('wd');
		$('#cfp3').removeClass('wd');
		$('#capitalfloatdiv').removeClass('Combined-Shape-Copy') ;
		$('#capitalfloatdiv').removeClass('flex-container2') ;
		$('#krp1').text("");
		$('#krp2').text("");
		$('#krp3').text("");
		$('#krp1').removeClass('wd');
		$('#krp2').removeClass('wd');
		$('#krp3').removeClass('wd');
		$('#kredxdiv').removeClass('Combined-Shape-Copy') ;
		$('#kredxdiv').removeClass('flex-container2') ;
		$('#loantapdiv').removeClass('Combined-Shape-Copy') ;
		$('#loantapdiv').removeClass('flex-container2') ;
		$('#neogrowthdiv').addClass('Combined-Shape-Copy') ;
		$('#neogrowthdiv').addClass('flex-container2') ;
		$('#ngp1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#ngp2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
		$('#ngp3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    } 
    else {
    $('#p1').addClass('wd');   
	$('#p2').addClass('wd');   
	$('#p3').addClass('wd');  
	$('#content').addClass('Combined-Shape-Copy') ;
	$('#content').addClass('flex-container2') ;
	$('#ngp1').text("");
	$('#ngp2').text("");
	$('#ngp3').text("");
	$('#ngp1').removeClass('wd');
	$('#ngp2').removeClass('wd');
	$('#ngp3').removeClass('wd');
	$('#neogrowthdiv').removeClass('Combined-Shape-Copy') ;
	$('#neogrowthdiv').removeClass('flex-container2') ;
    $('#p1').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p2').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
	$('#p3').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
    }
}

$('#nextbutton').click(function(){
	$('.front').addClass('rotate');
	$('.back').removeClass('rotate');

	// $('#companydetails').removeClass('displayform');
	// $('#companydetails').fadeIn("slow" , function(){
	// 	//
	// });
});