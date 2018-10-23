class PHXEditor {
    private board;
    private area;
    constructor(){
        document.execCommand("defaultParagraphSeparator", false, "br");
        this.board = document.getElementById('phx_board');
        console.log(this.board);
        //this.board.innerHTML = this.nl2br(this.board.innerHTML);
        this.area = document.getElementById('phx_area');
        this.area.addEventListener("input", this.change_area.bind(this) );
    }

    nl2br(str: string) : string {
        str = str.replace(/\r?\n/g, '<br />');
        return str;
    }

    change_area() {
        let board_text = this.board.innerText;
        let area_text = document.getElementById('phx_area').innerText;
        for (let i = 0; i < board_text.length; i++) {
            if (board_text.charAt(i) != area_text.charAt(i)){
                this.add_range({color: 'green', width: board_text.charCodeAt(i) > 255 ? 2 : 1, height: 2, top: 1.2, left: i*2});
            }

        }
    }

    input(){

    }

    add_range(range: any){
        let span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.width = range.width + 'rem';
        span.style.height = range.height + 'rem';
        span.style.top = range.top + 'rem';
        span.style.left = range.left + 'rem';
        span.style.zIndex = '0';
        span.style.backgroundColor = range.color;
        this.get_dom('phx_editor').appendChild(span);
    }

    get_dom(id: string): any{
        return document.getElementById(id);
    }

}