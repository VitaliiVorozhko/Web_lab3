
function first() {
      let params = `scrollbars=no,resizable=no,status=no,location=yes,toolbar=no,menubar=no,
width=400,height=600,left=-1000,top=-1000`;
   first = window.open("about:blank", "hello",params);
}

function second(){
    first.window.close();
    win = window.open("http://lpnu.ua");
}
