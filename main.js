//Get modal element

var modal = document.getElementById('simpleModal');
//Get open modal button

var modalBtn = document.getElementById('modalBtn');

// Get close button

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click

modalBtn.addEventListener('click', openModal);


//Listen for close click
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

 	function openModal() {
 		// body...

 		modal.style.display = 'block';
 	}

 	function closeModal(){
 		
 		modal.style.display = 'none';
 		
 	}

 		function outsideClick(e){

 			if(e.target == modal){
 				modal.style.display ='none';
 			}

 		}
