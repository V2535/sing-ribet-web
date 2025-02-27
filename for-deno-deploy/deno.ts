const html = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://raw.githubusercontent.com/iyarivky/sing-ribet-api/main/media/favicon-32x32.png" rel="icon" type="image/png">
    <title>sing-ribet</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://raw.githubusercontent.com" crossorigin />
    <link rel="preload" href="https://fonts.gstatic.com/l/font?kit=vEFy2_tTDB4M7-auWDN0ahZJW3IX2ih5nk3AucvUHf6OAVIJmeUDygwjisltrhlPAsllw1O1MAJBhw&skey=8bcb392be1d494a6&v=v7" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="https://fonts.gstatic.com/l/font?kit=iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-WYi1VVcJf6vjvrcOee7gIi9UsIzXGBBjyX4EFEGhgSw6YMpqHrCzMEcAz9vIo7Y9m0oM6on3Qzj7YsXisOs0&skey=cee854e66788286d&v=v28" as="font" type="font/woff2" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600&display=fallback&text=sing-rbet" rel="stylesheet" media="all" />
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=fallback&text=2ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%20%2C.%2F" rel="stylesheet" media="all">
    <link rel="stylesheet" type="text/css" href="https://cdn.iyariv.workers.dev/styles.css" media="all" />
    <link rel="stylesheet" type="text/css" href="https://cdn.iyariv.workers.dev/js-snackbar.css" media="all" />
    <script src="https://cdn.iyariv.workers.dev/script.js"></script>
    <script src="https://cdn.iyariv.workers.dev/js-snackbar.js"></script>
  </head>
  <body>
    <div class="judul">
      <h2>sing-ribet</h2>
      <h3>convert xray/v2ray url link to sing-box JSON.</h3>
    </div>
    <div class="card">
      <div class="container">
        <div class="input-url-v2ray">
          <h4>
            <b>Input Link Config</b>
          </h4>
          <textarea id="input" placeholder="Paste the v2ray/xray config link here, multi links separated by Enter"></textarea>
          <br />
          <div class="tombol">
            <button class="button" onclick="parseUrl()">Convert</button>
            <br />
          </div>
        </div>
        <hr>
        <div class="convert-result">
          <h4>
            <b>Base SFA Config</b>
          </h4>
          <textarea id="output1"></textarea>
          <br />
          <div class="tombol">
            <button class="button" onclick="downloadConfig('output1')">Download</button>
            <button class="button" onclick="pasteConfig('output1')"> Copy to Clipboard </button>
          </div>
        </div>
        <hr>
        <div class="convert-result">
          <h4>
            <b>Simple SFA Config</b>
          </h4>
          <textarea id="output2"></textarea>
          <br />
          <div class="tombol">
            <button class="button" onclick="downloadConfig('output2')">Download</button>
            <button class="button" onclick="pasteConfig('output2')"> Copy to Clipboard </button>
          </div>
        </div>
        <hr>
        <div>
          <h4>
            <b>Base BFM Config</b>
          </h4>
          <textarea id="output3"></textarea>
          <br />
          <div class="tombol">
            <button class="button" onclick="downloadConfig('output3')">Download</button>
            <button class="button" onclick="pasteConfig('output3')"> Copy to Clipboard </button>
          </div>
        </div>
        <hr>
        <div>
          <h4>
            <b>Simple BFM Config</b>
          </h4>
          <textarea id="output4"></textarea>
          <br />
          <div class="tombol">
            <button class="button" onclick="downloadConfig('output4')">Download</button>
            <button class="button" onclick="pasteConfig('output4')"> Copy to Clipboard </button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="kaki">
        <a href="https://github.com/iyarivky/sing-ribet-web" target="_blank">
          <svg class="fa" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385c0-.191-.008-.821-.011-1.489c-2.226.484-2.695-.944-2.695-.944c-.364-.925-.888-1.171-.888-1.171c-.726-.497.055-.486.055-.486c.803.056 1.226.824 1.226.824c.714 1.223 1.872.869 2.328.665c.072-.517.279-.87.508-1.07c-1.777-.202-3.645-.888-3.645-3.954c0-.873.313-1.587.824-2.147c-.083-.202-.357-1.015.077-2.117c0 0 .672-.215 2.201.82A7.672 7.672 0 0 1 8 4.066c.68.003 1.365.092 2.004.269c1.527-1.035 2.198-.82 2.198-.82c.435 1.102.162 1.916.079 2.117c.513.56.823 1.274.823 2.147c0 3.073-1.872 3.749-3.653 3.947c.287.248.543.735.543 1.481c0 1.07-.009 1.932-.009 2.195c0 .213.144.462.55.384A8 8 0 0 0 8.001.196z" />
          </svg>
        </a>
        <br />
      </div>
    </footer>
  </body>
</html>`;

Deno.serve((req: Request) => new Response(html, {headers: {"content-type": "text/html;charset=UTF-8"}, status:200}));
