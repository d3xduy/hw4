function clicked(event){
	var email= document.getElementById("email");
	var err= email.value;
	var comment= document.getElementById("comment");
	var err2= comment.value;
	if(err==""){
		var mess= document.getElementById("error1");
		mess.innerHTML="Please enter your email!";
		event.preventDefault();
	}
	if(err2==""){
		var mess2= document.getElementById("error2");
		mess2.innerHTML="Please enter your comment!";
		event.preventDefault();
	}
	
}