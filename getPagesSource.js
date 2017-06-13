// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    // var html = '',
    //     node = document_root.firstChild;
    // while (node) {
    //     switch (node.nodeType) {
    //     case Node.ELEMENT_NODE:
    //         html += node.outerHTML;
    //         break;
    //     case Node.TEXT_NODE:
    //         html += node.nodeValue;
    //         break;
    //     case Node.CDATA_SECTION_NODE:
    //         html += '<![CDATA[' + node.nodeValue + ']]>';
    //         break;
    //     case Node.COMMENT_NODE:
    //         html += '<!--' + node.nodeValue + '-->';
    //         break;
    //     case Node.DOCUMENT_TYPE_NODE:
    //         // (X)HTML documents are identified by public identifiers
    //         html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
    //         break;
    //     }
    //     node = node.nextSibling;
    // }

    // var src = 'user13userddduser345';
    // var patrn= /(?<=(href=\")).*?(?=\")/;
    // var patrn = /user/d/g
    var array = document.getElementsByTagName('a');
    var result = '';
    for (var i = 0; i < array.length; i++) {
    //     console.log(array[i]);
        // if(array[i].href.indexOf("magnet:") != -1){
            result = result + array[i].href + '\n';
        // }
    }

    return result;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});