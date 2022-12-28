chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    
    if( request.message === "start_search" ) {
        intervalID = setInterval(function () {
            window.scrollBy(0, 10000);
         }, request.time);
    } else if( request.message === "pause_search" ) {
        window.clearInterval(intervalID);

        setTimeout(function() {
            window.scrollTo(0, 0);
            setTimeout(function() {
                processo(request.qtdAds);
            }, 2000);
        }, 2000);
    } else if( request.message === "stop_all") {
        window.clearInterval(intervalID);
    }

       
});

function processo(qtdAdsRequest) {
    let els = document.getElementsByClassName("xh8yej3");
    let counAds = 0;
        Array.prototype.forEach.call(els, function (element) {
            if (element.className == "xh8yej3") {
                let elsInside = element.querySelector("._7jvw");
                if (elsInside) {
                        let qtdAds = element.querySelector('._9b9y');
                        qtdAds = qtdAds ? qtdAds.textContent.replace(/[^0-9]/g,'') : 0;
                        if ((qtdAdsRequest-1) >= qtdAds) {
                            console.log(element)
                            element.style.display = "none";
                        } else {
                            counAds = counAds + 1;
                            element.style.display = "block";
                        }
                }
            }
        });
        console.log('contagem: ', counAds);
        chrome.runtime.sendMessage({"countQtd": counAds});
        window.scrollTo(0, 0);
}