function developerImg() {
const showImage = document.getElementById("myImage");
const buttonText = document.getElementById("myButton");
if(showImage.style.display==="none"){
    showImage.style.display="block";
    
    buttonText.innerHTML = "Hide Image"
}else{
    showImage.style.display="none";
    buttonText.innerHTML = "Show Image"
}
}