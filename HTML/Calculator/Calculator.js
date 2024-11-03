const input = document.querySelector(".input");
function appendToInput(display){
    input.value += display;
}
function clearInput(){
    input.value = '';
}
function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(error){
        input.value = 'impossible';
    }
}