/**
 *
 * @param ul
 * @param line_data [{
 *     title:
 *     content:
 * }]
 */
function addTimeLine(ul, line_data) {
    function bindLabelWithClassHtml(parent, label, class_value, inner_value) {
        var t = document.createElement(label);
        t.setAttribute('class', class_value);
        if (undefined !== inner_value) {
            t.innerHTML = inner_value;
        }
        parent.appendChild(t);
        return t;
    }
    ul.setAttribute('class', 'layui-timeline');
    for (var i = 0; i < line_data.length; i++) {
        var item = line_data[i];
        var li = bindLabelWithClassHtml(ul, 'li', 'layui-timeline-item');
        bindLabelWithClassHtml(li, 'i', 'layui-icon layui-timeline-axis', '&#xe63f;');
        var div = bindLabelWithClassHtml(li, 'div', 'layui-timeline-content layui-text');
        bindLabelWithClassHtml(div, 'h3', 'layui-timeline-title', item['title']);
        bindLabelWithClassHtml(div, 'p', '', item['content']);
    }
}
