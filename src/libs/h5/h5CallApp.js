/**
 * H5 - App桥接
 * @return {[type]} [description]
 */
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

setupWebViewJavascriptBridge(function (bridge) {
  bridge.registerHandler('webPageForIOS', function (data, responseCallback) {
    // responseCallback(data)
    //调用H5方法
    window.AppCallH5(data);
  });
});

//call native code from js
var H5CallApp = function (funcname, funcdata) {
  if (!funcname) {
    return;
  }
  var appData = {
    funcname: funcname,
    funcdata: funcdata
  };
  if (isIOS) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('jsCallback', JSON.stringify(appData), function responseCallback(responseData) {
        console.log("JS received response:", responseData)
      });
    });
  } else {
    window.ethings.CallJavaInterfaceFromJs(JSON.stringify(appData));
  }
};

export default H5CallApp;