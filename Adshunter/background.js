chrome.runtime.onConnect.addListener(function (externalPort) {
    externalPort.onDisconnect.addListener(function() {
        var ignoreError = chrome.runtime.lastError;
        alert('Irá parar de funcionar');
        console.log("onDisconnect");
    });
    console.log("onConnect")
})