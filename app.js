let item = document.querySelectorAll(".item"); 
setInterval(function(){    
    for(let m=0; m<item.length; m++){
        if(item[m].className=="item active"){
            item[m].classList.remove("active");
            if(m==item.length-1){
                item[0].classList.add("active");
            }else{
                item[m+1].classList.add("active");
            }
            break;
        }
    }
},2000);