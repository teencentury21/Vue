const getBase64Image = (url) => {
    console.log(url)
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.onload = () => {
    const canvas = document.createElement("canvas");
    let w = 200 / img.width;
    canvas.width = 200;
    canvas.height = img.height * w;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    console.log(dataURL)
  }
  img.src = url
}

let test = getBase64Image('./images/ex2-5.jpg');
console.log(test);

var app = new Vue({
    el: '#app',
    data: {
        // 圖片路徑
        imagePath: './images/ex2-5.jpg',
        // 圖片base64資訊
    },
});