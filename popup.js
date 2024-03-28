browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let videoId = new URL(tabs[0].url).searchParams.get("v");

  ["maxresdefault", "sddefault", "hqdefault", "0", "mqdefault", "default", "1",
    "2", "3"].forEach(filename => {
      var url = "https://img.youtube.com/vi/" + videoId + "/" + filename + ".jpg";

      let image = document.createElement("img");
      image.src = url;

      let link = document.createElement("a");
      link.href = url;
      link.setAttribute("class", "thumbnail");
      link.appendChild(image);

      document.body.appendChild(link);
      document.body.appendChild(document.createElement("br"));
    });
});
