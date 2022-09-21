var numbers = [10,20,30,40,50];
var keys = document.getElementById('key')
var but = document.getElementById('sb')

function searchfun(){
    if(numbers.indexOf(Number(keys.value))==-1){
        document.write(keys.value+ "<b>Not Found</b>");
    }else{
        document.write("<b>Element found at" + Number(keys.value)+"Position</b>");
    }
}



but.addEventListener('click',searchfun);