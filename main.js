

$(window).ready(function(){

	//to display team name
		setTimeout(function(){
			$('.fly-in-text').removeClass('hidden');
		},200)

		//to display nav bar
		setTimeout(function(){
			$('nav').removeClass('initial');
		},200)


	$('body').css("display","block");


	//to hide and display navbar and FAB on scroll
		var lastScroll = 0;
$(document).on(('scroll'),function(){
			var currScroll = $(this).scrollTop();

			if(currScroll>lastScroll) {
				$("nav").addClass("hidden");
				// $("#fab").removeClass("fabhide")
			}
			else {
				$("nav").removeClass('hidden');
				// $("#fab").addClass('fabhide');
			}

			lastScroll = currScroll;
			});

	$('#contact').click(function(){
		// window.location.href = "index.html";
		var aTag = $(".empty");
    	$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	});
});




window.onload = function() {

	

} 

$(window).scroll(function(){
	page();
});



//to display team members

function fastScroll(eid){
	var hT = $(eid).offset().top,
       hH = $(eid).outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   	if (wS > (hT+hH-wH)){
       $(' .teamMember').removeClass('init');
   	}
}

function page(){
	var scroll = $(window).scrollTop();
	$('.moto').css('position',' absolute');
	$('.moto').css('top',+(scroll*0.5)+'px');

	$('.roshead').css('position',' absolute');
	$('.roshead').css('top',+(scroll*0.5)+'px');

	// $('.mid').css('position',' absolute');
	// $('.mid').css('top',-(scroll*2)+'px');
}


var elem;

function getElem(ele){
	elem=ele;

	$(document).ready(function() {

		$(elem).mousemove(function(e){
			var movX = 50+(e.pageX * (-1 / 100));
			var movY = 50+(e.pageY * (-1 / 56));
			$(elem).css('background-position', movX + '% ' + movY + '%');
		});
	});
}

// Sponsor
var sone='<p> bala g</p>';
function showInfo(id){
	$('.sponsorInfo').css('transform','translate(0%) rotate(0deg)');
	$(id).css('height','20vw');
	$(id).css('width','20vw');
	if(id=='sone'){	$('.sponsorInfo').innerHTML=sone;}
}
function hideInfo(id){
	$('.sponsorInfo').css('transform','translate(200%) rotate(180deg)');
	$(id).css('height','15vw');
	$(id).css('width','15vw');
}

//footer
function reveal(id,val){
	$(id).css('transform','translateX('+val+'%)');
}
function hide(id){
	$(id).css('transform','translateX(0)');
}