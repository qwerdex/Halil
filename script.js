<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">document.addEventListener('DOMContentLoaded', function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var texts = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Текст 1", "Текст 2", "Текст 3", "Текст 4", "Текст 5",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Текст 6", "Текст 7", "Текст 8", "Текст 9", "Текст 10"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var randomIndex = Math.floor(Math.random() * texts.length);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var randomText = texts[randomIndex];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var textContainer = document.getElementById('randomText');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>textContainer.innerText = randomText;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.getElementById('shareBtn').addEventListener('click', function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>html2canvas(textContainer).then(canvas =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>var link = document.createElement('a');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>link.download = 'shared-text.png';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>link.href = image;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>link.click();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
