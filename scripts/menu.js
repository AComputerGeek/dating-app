/* 
This JavaScript Document
will enable the slide n hide 
vector menu. 

- it will detect if the user clicks on the button class="btn-menu"
- each click will toggle ON and OFF the class="show", between these two states:
   <nav class="show">
    OR
   <nav>
- css style will take care of what to do with class="show"

More on javascript in a future lesson
*/


(function(d){
	
	// d = document
	
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.menu-toggle');
	
	$btn.addEventListener('click', function(){		

		/* change the show/hide state of the nav element */
		$nav.classList.toggle('show');	

		/* swap the symbol each time user clicks the show hide menu button...*/
		if($btn.innerHTML == "☰"){
			$btn.innerHTML = "✕";
		}else{
			$btn.innerHTML = "☰";
		}		

	});
	
	
})(document);
