const canvas = document.getElementById("canvas");

document.getElementById("file_button").addEventListener("change", function (e) {
    var file = e.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
        var src = reader.result;
        drawCanvas(src);
    };
}, false);

function drawCanvas(source) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var image = new Image();
        image.src = source;
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            drawText();
        };
    }
}

function drawText(){
    var ctx = canvas.getContext("2d");
    ctx.font = 0.07 * canvas.height + "px 'Noto Sans JP'";
    var text = 'うん  うん  それもまた  ｱｲｶﾂだね。';

    var tx_size = ctx.measureText(text);
    ctx.fillStyle = 'rgb(0,0,0,0.47)';
    ctx.fillRect(canvas.width/2 - tx_size.width/2 - 0.01*canvas.height,
                 0.887*canvas.height - 0.07 * canvas.height/2 - 0.01*canvas.height,
                 tx_size.width + 0.02*canvas.height,
                 0.07 * canvas.height + 0.02*canvas.height);
	ctx.stroke();

    ctx.textAlign = "center";
    ctx.textBaseline="middle";
    ctx.fillStyle="#ECF236";
    ctx.strokeStyle = "#1E1B00";
    ctx.lineWidth= 0.003 * canvas.height;
    ctx.fillText(text,canvas.width/2,0.887*canvas.height);
    ctx.strokeText(text,canvas.width/2,0.887*canvas.height);
}