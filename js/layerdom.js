

function getOpenLayerForm(layer_return) {
    var buffer = {};

    var iframe = layer_return[0].getElementsByTagName('iframe')[0];
    var dom = iframe.contentWindow.document;
    var form = dom.getElementsByTagName('form')[0];

    var elements, i;
    var item;
    elements = form.getElementsByTagName('input');
    for (i = 0; i < elements.length; i++){
        item = elements[i];
        if (0 !== item.name.length) {
            if ('text' === item.type) {
                buffer[item.name] = item.value;
            } else if ('radio' === item.type && item.checked) {
                buffer[item.name] = item.value;
            }
        }
    }
    elements = form.getElementsByTagName('select');
    for (i = 0; i < elements.length; i++){
        item = elements[i];
        if ('' !== item.name) {
            buffer[item.name] = item.value;
        }
    }
    elements = form.getElementsByTagName('textarea');
    for (i = 0; i < elements.length; i++){
        item = elements[i];
        if ('' !== item.name) {
            buffer[item.name] = item.value;
        }
    }
    return buffer;
}
