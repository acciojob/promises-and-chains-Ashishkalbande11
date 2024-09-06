//your JS code here. If required.
let userForm = document.getElementById("userForm");
userForm.addEventListener("submit", function(e) {
	e.preventDefault();

	const name = document.getElementById("name");
	const age = document.getElementById("age");

	if(!name || !age){
		alert("both field required to fill !");
		return;
	}

	const checkAge = new Promise((reslove, rejected) =>{
		setTimeout(()=>{
			if(age < 18){
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}else{
				resolve(`Welcome, ${name}. You can vote.`);
			}
		},4000);
	});
	checkAge.then(message =>{
		alret(message);
	})
	.catch(message =>{
		alert(message);
	});
});
