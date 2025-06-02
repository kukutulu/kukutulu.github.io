function setEmojiFavicon(emoji) {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  ctx.font = "24px serif";
  ctx.textAlign = "center";
  ctx.fillText(emoji, 16, 24);

  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = canvas.toDataURL();
  document.getElementsByTagName("head")[0].appendChild(link);
}

setEmojiFavicon("🐋");
