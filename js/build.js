var PHXEditor = (function () {
    function PHXEditor() {
        document.execCommand("defaultParagraphSeparator", false, "br");
        this.board = document.getElementById('phx_board');
        console.log(this.board);
        this.area = document.getElementById('phx_area');
        this.area.addEventListener("input", this.change_area.bind(this));
    }
    PHXEditor.prototype.nl2br = function (str) {
        str = str.replace(/\r?\n/g, '<br />');
        return str;
    };
    PHXEditor.prototype.change_area = function () {
        var board_text = this.board.innerText;
        var area_text = document.getElementById('phx_area').innerText;
        for (var i = 0; i < board_text.length; i++) {
            if (board_text.charAt(i) != area_text.charAt(i)) {
                this.add_range({ color: 'green', width: board_text.charCodeAt(i) > 255 ? 2 : 1, height: 2, top: 1.2, left: i * 2 });
            }
        }
    };
    PHXEditor.prototype.input = function () {
    };
    PHXEditor.prototype.add_range = function (range) {
        var span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.width = range.width + 'rem';
        span.style.height = range.height + 'rem';
        span.style.top = range.top + 'rem';
        span.style.left = range.left + 'rem';
        span.style.zIndex = '0';
        span.style.backgroundColor = range.color;
        this.get_dom('phx_editor').appendChild(span);
    };
    PHXEditor.prototype.get_dom = function (id) {
        return document.getElementById(id);
    };
    return PHXEditor;
}());
//# sourceMappingURL=build.js.map