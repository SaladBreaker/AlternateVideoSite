function upfunction() {

    var vid1 = document.getElementById("video_1");
    var vid2 = document.getElementById("video_2");
    var source1 = document.getElementById("source1");
    var source2 = document.getElementById("source2");

    source1.muted = false;
    source2.muted = true;

    vid1.style.display = "block";
    vid2.style.display = "none";

}

function downfunction() {
    var vid1 = document.getElementById("video_1");
    var vid2 = document.getElementById("video_2");
    var source1 = document.getElementById("source1");
    var source2 = document.getElementById("source2");

    source1.muted = true;
    source2.muted = false;

    vid1.style.display = "none";
    vid2.style.display = "block";
}

function simulateClick() {
    downfunction();
    upfunction();
    downfunction();
    upfunction();
}
