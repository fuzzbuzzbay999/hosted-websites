function search(){
    var term = document.getElementById("searchQuery").value;
    document.getElementById("searched").textContent=term;
    window.open("www.google.com "+term,"_blank");
}