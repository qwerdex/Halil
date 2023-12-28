document.addEventListener('DOMContentLoaded', function() {
    var texts = [
        "Art is never finished, only abandoned", 
        "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
        "Art does not reproduce the visible; rather, it makes visible",
        // Add more quotes as desired
    ];

    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    var textContainer = document.getElementById('randomText');
    textContainer.innerText = randomText;

    document.getElementById('shareBtn').addEventListener('click', function() {
        html2canvas(textContainer).then(canvas => {
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.download = 'curated-text.png';
            link.href = image;
            link.click();
        });
    });
});
