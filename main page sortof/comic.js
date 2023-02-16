var page =0;
var vol = 1;
function nextPage(){
    page++;
    
    document.getElementById("pageDisp").src = `comics\\g5_vol_${vol}\\pg${page}.jpg`;
    window.scrollTo(0, 0);
}

function prevPage(){
    if(page>0){
        page--;
        
        document.getElementById("pageDisp").src = `comics\\g5_vol_${vol}\\pg${page}.jpg`;
        window.scrollTo(0, 0);
    }
}