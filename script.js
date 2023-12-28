document.addEventListener('DOMContentLoaded', function() {
    var texts = [
        "Art is never finished, only abandoned", 
        "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
        "Art does not reproduce the visible; rather, it makes visible",
        "The true work of art is but a shadow of the divine perfection",
        "Every artist was first an amateur",
        "Art is the lie that enables us to realize the truth"
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
