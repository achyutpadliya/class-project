var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event)

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("taking selfie ---");
        speak();
    }

}

function take_snapshot() {
    console.log(img_id);
    Webcam.snap(function (data_uri) {
        if (img_id == selfie1) {
            document.getElementById("results1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>'
        }
        if (img_id == selfie2) {
            document.getElementById("results2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>'
        }
        if (img_id == selfie3) {
            document.getElementById("results3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>'
        }
    });
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_qualit:90
 });
 camera = document.getElementById("camera");

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function () {
        img_id = selfie1;
        take_snapshot();
        speak_data = "Taking your selfie in 3 second";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
    }, 3000);

    setTimeout(function () {
        img_id = selfie2;
        take_snapshot();
        speak_data = "Taking your selfie in 6 second";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
    }, 6000);

    setTimeout(function () {
        img_id = selfie3;
        take_snapshot();
        speak_data = "Taking your selfie in 9 second";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
    }, 9000);
}