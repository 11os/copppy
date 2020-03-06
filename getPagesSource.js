// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
  var array = document.getElementsByTagName("a");
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result = result + array[i].href + "\n";
  }

  return result;
}

chrome.runtime.sendMessage({
  action: "getSource",
  source: DOMtoString(document)
});
