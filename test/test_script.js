function fail(evt) {
        alert(evt.target.error.code);
    }
    
    function showLink(url){
        alert(url);
        var divEl = document.getElementById("ready");
        var aElem = document.createElement("a");
        aElem.setAttribute("target", "_blank");
        aElem.setAttribute("href", url);
        aElem.appendChild(document.createTextNode("Ready! Click To Open."))
        divEl.appendChild(aElem);
 
    }

intent_handler = function (intent) {
    
    // Apk download by cordova-plugin-file-transfer
    var fileTransfer = new FileTransfer();
 
    // Get cordova file data directory (app sandbox directory)
    //  > file:///data/user/0/io.cordova.apk.installer.sample/files/
    var sandBoxDirectory = cordova.file.dataDirectory;
 
    // Apk download path
    var apkUrl = 'https://build.phonegap.com/apps/3178142/download/android';
 
    // Get file name from apk url;
    var fileName = "tmp.apk";
 
    fileTransfer.download(
        apkUrl,
        sandBoxDirectory + fileName,
        function(entry) {
            // Install app
            apkInstaller.install(fileName, function(msg) {
                // Start the installer
            }, function(error) {
                // Install error
            });
        },
        function(error) {
            // Download error
        },
        false, {}
    );
    
};