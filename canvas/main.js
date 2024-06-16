console.log("html canvas");

//  draw canvas
const canvasContainer = document.getElementById("my_canvas");

const canvasContext = canvasContainer.getContext("2d");

const img_changes = document.getElementById("img_input");
let canvas_img = null;
function drawImage() {
  img_changes.addEventListener("change", (e) => {
    const fileReader = new FileReader();
    let img = e.target.files[0];

    fileReader.onload = () => {
      canvas_img = new Image();
      canvas_img.onload = () => {
        console.log(canvas_img);
        canvasContext.drawImage(canvas_img, 0, 0, 300, 300);
      };
      canvas_img.src = fileReader.result;
    };

    fileReader.readAsDataURL(img);
  });
}

drawImage();

let canvas_text = "";

window.writeText = function (e) {
  canvasContext.clearRect(0, 0, canvasContainer.width, canvasContainer.height);
  if (canvas_img) {
    canvasContext.drawImage(canvas_img, 0, 0, 300, 300);
  }
  canvasContext.restore();
  canvas_text = e;
  canvasContext.font = "20px Georgia";
  canvasContext.fillText(canvas_text, 30, 30);

  canvasContext.save();
};

window.changeTextColor = function (e) {
  if (canvas_text) {
    canvasContext.clearRect(
      0,
      0,
      canvasContainer.width,
      canvasContainer.height
    );
    if (canvas_img) {
      canvasContext.drawImage(canvas_img, 0, 0, 300, 300);
    }
    canvasContext.restore();

    canvasContext.font = "20px Georgia";
    canvasContext.fillText(canvas_text, 30, 30);
    canvasContext.fillStyle = e;
    canvasContext.save();
  }
};
