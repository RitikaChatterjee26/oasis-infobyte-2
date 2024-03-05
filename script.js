var input = document.getElementsByClassName('input')[0];
 var btn=  document.getElementsByTagName('button')[0];
 var tasklist=document.getElementsByClassName('tasklist-container')[0];

 btn.addEventListener('click',()=>
{
   if( input.value ==='')
   {
   alert("Enter the task");
   }
    else{
        var li=document.createElement('li');
        li.innerHTML=`${input.value}`;
        tasklist.appendChild(li); 
        
       }


       li.addEventListener('click',()=>
       {
        li.style.textDecoration="line-through";

       })
       
       
       
        
    

      

       
   })
   
