browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let videoId = new URL(location).searchParams.get("v")

  document.body.textContent = "";

  ["maxresdefault", "sddefault", "hqdefault", "0", "mqdefault", "default", "1",
    "2", "3"].forEach(filename => {
      var url = "https://img.youtube.com/vi/" + videoId + "/" + filename + ".jpg";

      let image = document.createElement("img");
      image.src = url;

      let link = document.createElement("a");
      link.href = url;
      link.appendChild(image);

      document.body.appendChild(link);
      document.body.appendChild(document.createElement("br"));
    });
});
