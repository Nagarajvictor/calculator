let n1='';
let n2='';
let operation='';

//calculation
const cal= x =>{
    if(operation==''){
        n1+=x.target.dataset.number;
        display(n1);
    }
    else{
        n2+=x.target.dataset.number;
        display(n2);
    }
}

function display(val){
    var displayBox=document.getElementById('dispBox');
        displayBox.value=val;
}
//operation
function addition(){
    operation='+';
}
function subtract(){
    operation='-';
}
function multiply(){
    operation='*';
}
function division(){
    operation='/';
}
//assigning operation


function answer(){
    if(operation=='+'){
        const a=Number(n1)+Number(n2);
        display(a);
    }
    else if(operation=='-'){
        const a=Number(n1)-Number(n2);
        display(a);
    }
    else if(operation=='*'){
        const a=Number(n1)*Number(n2);
        display(a);
    }
    else if(operation=='/'){
        const ans=Number(n1)/Number(n2);
        display(a);
    }
operation=''
}

//reset
function reset(){
    location.reload();
}
//assign
document.getElementById('equalTo').addEventListener('click',answer);
document.getElementById('subtract').addEventListener('click',subtract);
document.getElementById('addition').addEventListener('click',addition);
document.getElementById('division').addEventListener('click',division);
document.getElementById('multiplication').addEventListener('click',multiply);
document.getElementById('reset').addEventListener('click',reset);
//
let y=document.querySelectorAll('.btn');
y.forEach(action =>{
    action.addEventListener('click',cal)
})


