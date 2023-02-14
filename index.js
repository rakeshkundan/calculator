 var click=document.querySelectorAll(".num");
 var screen=document.querySelector(".scr-input");

click.forEach(function(num){
    num.addEventListener("click",function(e){
        var value=num.innerHTML;
        if(value==="DEL")
        {
            erase();
        }
        else{
        screen.value+=value;
        }
    });
});

function erase()
{
    var len=screen.value;
    var k=len.length;
    if(screen.value!='')
    {
        screen.value=len.slice(0,k-1);
    }

}




var equal=document.querySelector("#equal");
equal.addEventListener('click',function(e){
    var len=screen.value;
    var k=len.length;
    if(screen.value==='')
    {
        screen.value='';
    }
    else if(len[k-1]=='+'||len[k-1]=='-'||len[k-1]=='*'||len[k-1]=='/')
    {
        screen.value="Error";
        setTimeout(function(){screen.value="";},2000);  
    }
    else{
        var ans=eval(screen.value);
        // console.log(ans);
        screen.value=ans;
    }
});
var clear=document.querySelector("#clear");
clear.addEventListener("click",function(e){
    screen.value="";
});
