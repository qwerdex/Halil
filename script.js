document.addEventListener('DOMContentLoaded', function() {
    var texts = [
        // Добавьте здесь свои цитаты
    ];

    function updateText() {
        var randomIndex = Math.floor(Math.random() * texts.length);
        var randomText = texts[randomIndex];
        document.getElementById('randomText').innerText = randomText;
    }

    updateText();

    document.getElementById('curateBtn').addEventListener('click', function() {
        updateText();
    });

    document.getElementById('downloadBtn').addEventListener('click', function() {
        html2canvas(document.getElementById('randomText')).then(canvas => {
            var link = document.createElement('a');
            link.download = 'curated-text.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    });
});
