function onCreateCanvasAudioLine() {
    var c = document.getElementById("progress_bar");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    // ctx.moveTo(0, c.height / 2);
    // ctx.lineTo(c.width, c.height / 2);
    // ctx.strokeStyle = '	#FFFFFF';
    // ctx.lineWidth = 2;

    ctx.beginPath();
    // lrft,top,size, 0 fullnes, ang
    ctx.arc(2, 1, 1, 0, 2 * Math.PI, true);
    ctx.stroke();

    ctx.stroke();
}
