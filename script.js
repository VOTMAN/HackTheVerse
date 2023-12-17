function searchProduct() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("items");
    let itemHold = document.querySelector(".item-holder");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display="list-item"; 
        }
        if (input.toLowerCase() == "") {
            x[i].style.display = "none";
        }
    } 

};