function  SUM()
{
    let num1,num2,ans;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;


ans=parseFloat(num1)+parseFloat(num2);
document.calc.answer.value=ans;


}
function  DIV()
{
    let num1,num2,ans;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;


ans=parseFloat(num1)/parseFloat(num2);
document.calc.answer.value=ans;


}

function CLR()
{
    document.calc.answer.value="";
}


function  SUB()
{
    let num1,num2,ans;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;


ans=parseFloat(num1)-parseFloat(num2);
document.calc.answer.value=ans;


}
function  MUL()
{
    let num1,num2,ans;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;


ans=parseFloat(num1)*parseFloat(num2);
document.calc.answer.value=ans;


}

function AVG()
{
    let num1,num2,ans;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;

ans=(parseFloat(num1)+parseFloat(num2))/2;
document.calc.answer.value=ans;
}


