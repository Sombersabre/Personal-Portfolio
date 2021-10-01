
//document.getElementById("melafricabtn").addEventListener("click",melafricalink);
//document.getElementById("tnabtn").addEventListener("click",tnalink);

function melafricalink(){
   window.open('https://melafricanation.netlify.app', '_blank');
}

function tnalink(){
   window.open('https://tnaproperties.netlify.app', '_blank');
}

function maillink(){
   let subject = "Communication from website portfolio";
   let body = "Hi, My name is (name) and I'd like to know more about what you do. I'm available at (phone number) or (email)";
   window.open('mailto:collinsnbusiness@gmail.com?subject='+subject+'&body='+body);
}