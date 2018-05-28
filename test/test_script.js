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
    var apkUrl = 'http://pc.pulipuli.info/phonegap-build-projects/PhoneGapBuild-URL-Redirect/test/app-debug.apk';
 
    // Get file name from apk url;
    var fileName = "tmp.apk";
    
    var fileTransfer = new FileTransfer();
    var fileURL = "cdvfile://localhost/temporary/tmp.apk";
    var uri = encodeURI(apkUrl);
    
    //fileOpener.open("/storage/emulated/0/Download/app-debug-193.apk", "application/vnd.android.package-archive");
    try {
        window.cordova.plugins.FileOpener.openFile(apkUrl, function (e) {
            alert("1: " + JSON.stringify(e))
        }, function (e) {
            alert("2: " + JSON.stringify(e))
        });
    }catch (e) {
        alert(e)
    }
    //navigator.app.exitApp();
    return;
    
    window.requestFileSystem(LocalFileSystem.TEMPORARY , 0, function (fs) {
        fileTransfer.download(
                uri,
                fileURL,
                function (entry) {
                    var _file_url = entry.toURL();
                    alert("download complete: " + entry.toURL());
                    try {
                         fileOpener.open("/storage/emulated/0/Download/app-debug-193.apk");
                         
                    }catch (e) {
                        alert(e);
                    }
                    navigator.app.exitApp();
                },
                function (error) {
                    alert("download error source " + error.source);
                    alert("download error target " + error.target);
                    alert("download error code" + error.code);
                    navigator.app.exitApp();
                },
                
                false
        );
    });
        
};