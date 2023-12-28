document.addEventListener('DOMContentLoaded', function() {
    var texts = [
        "Текст 1", "Текст 2", "Текст 3", "Текст 4", "Текст 5",
        "Текст 6", "Текст 7", "Текст 8", "Текст 9", "Текст 10"
    ];

    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    var textContainer = document.getElementById('randomText');
    textContainer.innerText = randomText;

    document.getElementById('shareBtn').addEventListener('click', function() {
        html2canvas(textContainer).then(canvas => {
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.download = 'shared-text.png';
            link.href = image;
            link.click();
        });
    });
});
