var totalSeconds = 0;
/*checkCookie("token")
    ? ((checkMe(getCookie('token'))), (document.getElementsByClassName("login")[0].style.display = "none"), (document.getElementsByClassName("contents")[0].style.display = "block"))
    : ((document.getElementsByClassName("contents")[0].style.display = "none"), (document.getElementsByClassName("login")[0].style.display = "block"));
*/
document.getElementById("content").style.display = "none";
let button = document.getElementById("index_link");
function setCookie(e, t, n) {
    const o = new Date();
    o.setTime(o.getTime() + 60 * n * 1e3);
    let s = "expires=" + o.toUTCString();
    document.cookie = e + "=" + t + ";" + s + ";path=/";
    checkMe(t);
}
function getCookie(e) {
    let t = e + "=",
        n = decodeURIComponent(document.cookie).split(";");
    for (let e = 0; e < n.length; e++) {
        let o = n[e];
        for (; " " == o.charAt(0); ) o = o.substring(1);
        if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
    }
    return "";
}
function checkCookie(e) {
    return getCookie(e);
}
function checkMe(token)
{
    if (!token) {
        chrome.tabs.sendMessage(t.id, { message: "stop_all" })
    }
    setInterval(function() {
    const n = new XMLHttpRequest();
    (n.responseType = "json"),
            (n.onload = function () {
                if (this.status != 200) {
                    document.getElementsByClassName("contents")[0].style.display = "none";
                    document.getElementsByClassName("login")[0].style.display = "block";
                    document.getElementsByClassName("aviso")[0].textContent = "Seu login de acesso já está em uso, evite o banimento do seu login";
                }
            }),
            n.open("GET", ""),
            n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            n.setRequestHeader("Authorization", "Bearer "+token),
            n.setRequestHeader("Accept", "application/json"),
            n.send();
        }, 5000);
}
function reset() {
    totalSeconds = 0;
}
function setTime() {
    ++totalSeconds;
    document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

button.addEventListener("click", function () {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
        var t = e[0];
        var time = document.getElementById("time").value ? document.getElementById("time").value : 5;
        "Iniciar" == button.textContent
            ? ((button.textContent = "Pausar Mineração"), reset(), countup = setInterval(setTime, 1000), chrome.tabs.sendMessage(t.id, { message: "start_search", qtdAds: document.getElementById("qtdAds").value, time: (time*1000) }))
            : "Pausar Mineração" == button.textContent && (clearInterval(countup),(button.textContent = "Iniciar"), chrome.tabs.sendMessage(t.id, { message: "pause_search", qtdAds: document.getElementById("qtdAds").value }));
    });
}),

    document.getElementById("login").addEventListener("click", function () {
    let e = document.getElementById("email").value,
        t = document.getElementById("password").value;
    const n = new XMLHttpRequest();
    (n.responseType = "json"),
        (n.onload = function () {
            if(this.status == 401) {
                ((document.getElementsByClassName("aviso")[0].style.display = "block"), (document.getElementsByClassName("aviso")[0].textContent = "Usuário ou senha inválido. Tente Novamente!"));
            } else {
            (/*setCookie("token", this.response.access_token, 240), */(document.getElementsByClassName("login")[0].style.display = "none"), (document.getElementsByClassName("contents")[0].style.display = "block"))
            }
        }),
        n.open("POST", "https://api-test-vini.herokuapp.com/users/login"),
        n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        n.setRequestHeader("Accept", "application/json"),
        n.send("email=" + e + "&password=" + t);
}),
/*
    document.getElementById("login").addEventListener("click", function () {
     document.getElementsByClassName("login")[0].style.display = "none";
     document.getElementsByClassName("contents")[0].style.display = "block";
}),
*/
    chrome.runtime.onMessage.addListener(function (e) {
        if (e.countQtd)  document.getElementById("count").textContent = e.countQtd;
    });
