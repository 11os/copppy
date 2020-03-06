var g_message = "";
var g_keyword = "";

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    g_message = request.source;
    message.innerText = "success";
  }

  document.getElementById("enter").onclick = function() {
    filter("");
  };

  initBtn("ed2k");
  initBtn("rmd");
  initBtn("thunder");
});

function copy() {
  var clipBoardContent = g_message;
  window.clipboardData.setData("Text", clipBoardContent);
}

function initBtn(id) {
  document.getElementById(id).onclick = function() {
    filter(id);
  };
}

function onWindowLoad() {
  var message = document.querySelector("#message");
  chrome.tabs.executeScript(
    null,
    {
      file: "getPagesSource.js"
    },
    function() {
      if (chrome.runtime.lastError) {
        message.innerText =
          "There was an error injecting script : \n" +
          chrome.runtime.lastError.message;
      }
    }
  );
}

function filter(keyword) {
  keyword = keyword + " " + document.getElementById("keyword").value;
  var array = g_message.split("\n");
  var result = "";
  for (var i = 0; i < array.length; i++) {
    if (multijudge(array[i], keyword)) {
      result = result + buildHref(array[i]) + "<br/>";
    }
  }
  message.innerHTML = result;
}

function buildHref(url) {
  return (url = '<a href="' + url + '" target="_blank">' + url + "</a>");
}

function multijudge(src, keyword) {
  var keys = keyword.split(" ");
  var count = 0;
  for (var i = 0; i < keys.length; i++) {
    if (src.indexOf(keys[i]) != -1) {
      count++;
    }
  }
  if (count == keys.length) {
    return true;
  } else {
    return false;
  }
}

function getKeyword() {
  StorageArea.get("keyword", function(value) {
    return value;
  });
}

function saveKeyword(keyword) {
  StorageArea.set({ keyword: theValue }, function() {
    // Notify that we saved.
  });
}

window.onload = onWindowLoad;
