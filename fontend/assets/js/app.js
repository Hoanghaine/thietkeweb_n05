
console.log("app");

loadHTML('tab','homeTab.html')
function loadHTML(id, filename) {
    let xhttp;
    let element = document.getElementById(id);
    let file = filename;
    if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    element.innerHTML = this.responseText;
                    console.log('changetab')
                    if (filename !== 'cartTab.html' && filename !== 'billTab.html') {
                        activeShowHideCartDropdown();
                    } else {
                        offShowHideCartDropdown();
                        
                    }
                    if (filename === 'homeTab.html') {   
                        console.log('hometab');
                        autoChangeImage();
                    }
                    if (filename === 'productTab.html') {    
                        sortProductByPrice();
                    }
    
                }
                if (this.status == 400) {
                    element.innerHTML = "<h1>Page not found.</h1>";
                }
            }
            }
            xhttp.open("GET", `tabs/${file}`, true);
            xhttp.send();
            return;
    }
}



