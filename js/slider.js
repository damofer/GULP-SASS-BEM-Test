window.onload = function(){
    //setting main variables for slider
	var slider = document.getElementsByClassName("slider")[0],
		slides = slider.getElementsByClassName("banner__img"),
		slidesContent = slider.getElementsByClassName("banner__content"),
		count = 0,
		nxtBtn = slider.getElementsByClassName("banner__arrow__right")[0],
		bckBtn = slider.getElementsByClassName("banner__arrow__left")[0],
		firstLoad = true;



function showSlide(index){
	//occult all content but shows the content  of the index.
	for ( var i = 0; i< slides.length; i++){


		slides[i].className = 'banner__img hidden';
		slidesContent[i].className = 'banner__content hidden';

	}
//it prevents the first time loading fading animation
	if(firstLoad){firstLoad =!firstLoad}
		else{slides[index].style.opacity=0;};
/////////////////////////////////////////////
	slides[index].className='banner__img unhidden '
	slidesContent[index].className = 'banner__content unhidden ';
	setTimeout(function(){slides[index].style.opacity=1;},1000);

}

 function nxtSlide () {
    //it will create a loop when reach the last slide and return to the first.
slides[count].style.opacity=0;
	    if (count < slides.length-1) {

	      count += 1;
	    } else {

	      count = 0;
	    }

	   setTimeout(function(){

	   	showSlide(count);
	   	 setTimeout(function(){ slides[count].style.opacity=1; },1000);
	   },1000);
  }

   function prevSlide () {
    //it will create a loop when reach the first slide and return to the last.
slides[count].style.opacity=0;
	    if (count > 0) {

	      count -=1;
	    } else {

	      count = slides.length -1;
	    }



	   setTimeout(function(){

	   	showSlide(count);
        setTimeout(function(){ slides[count].style.opacity=1; },1000);
	   },1000);
  }
//set navigation buttons
nxtBtn.onclick = nxtSlide;
bckBtn.onclick = prevSlide;
//initialize the slider.
showSlide(count);
  };