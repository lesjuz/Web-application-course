window.onload = function() {
    document.getElementById("biggerBtn").onclick = fontTimer;
    document.getElementById("blingBox").onchange = chechBoxHandler;
    document.getElementById("malkovitchBtn").onclick = malkcheckHandler;
    document.getElementById("igpayBtn").onclick = piggify;

};



function fontTimer() {
    setInterval(btnHandler, 500);
}

let iterations = 5;
/*I thought it would be better to stop the timer after 5 iterations*/
function btnHandler() {
    if (iterations > 0) {
        const txtArea = document.getElementById("txtArea");
        const style = window.getComputedStyle(txtArea, null).getPropertyValue('font-size');
        const fontSize = parseInt(style) + 2;
        document.getElementById("txtArea").style.fontSize = fontSize + "pt";
        iterations--;
    } else {
        clearInterval(timer)
    }
    //document.getElementById("txtArea").style.fontSize = "24pt";
    // alert("Hello, world!");
}

function chechBoxHandler() {
    const page = document.getElementById("page");
    const txtArea = document.getElementById("txtArea");
    const checkBox = document.getElementById("blingBox");
    if (checkBox.checked === true) {
        txtArea.style.fontWeight = "bold";
        txtArea.style.color = "green";
        txtArea.style.textDecoration = "underline";
        page.style.backgroundImage = "url(\"http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg\")";
    } else {
        txtArea.style.fontWeight = "normal";
        txtArea.style.color = "";
        txtArea.style.textDecoration = "none";
        page.style.backgroundImage = "";
    }
}

function malkcheckHandler() {
    const txtArea = document.getElementById("txtArea");
    const str = txtArea.value.split(" ");
    let txtValue = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i] = "Malkovich";
            txtValue = str.join(" ");
        }
    }
    document.getElementById("txtArea").value = txtValue;
}

function piggify() {
    const txtArea = document.getElementById("txtArea");
    const str = txtArea.value.toLowerCase();
    let st = "";
    for (let j = 0; j < str.length; j++) {
        if ("aeiouAEIOU".indexOf(str.charAt(j)) !== -1) {
            st = st + str.substr(j, str.length);
            st = st + str.substr(0, j) + "ay";
            break;
        }
    }
    document.getElementById('txtArea').value = st;
}