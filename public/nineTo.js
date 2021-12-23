const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

//9. צור פונקציית jump לשחקן שבעת לחיצה על מקש החץ העליון יקפוץ ב- 10 ויחזור.

const jump = () => {
  const player = { x: 0, y: 400, w: 100, h: 100 };
  let y = player.y;
  const firstJump = setInterval(() => {
    ctx.clearRect(player.x, y, player.w, player.h);
    y = -20;
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, y, player.w, player.h);
    if (y == 520) {
      clearInterval(firstJump);
      setTimeout(() => {
        ctx.clearRect(player.x, y, player.w, player.y);
      },500);
    }
  },500);

  // // console.log(e.key);
  // let y = player.y;
  // context.fillRect(player.x, player.y, player.w, player.h);
  // y-=20;
  // const player = { x: 0, y: 400, w: 100, h: 100 };
  // context.fillStyle = "red";
};
document.addEventListener("keyup", jump);
jump();

// 10. צור 10 ריבועים במיקומים שונים(באופן רנדומלי, יש לוודא שהם לא יוצאים מהמסך).

function x() {
  for (let i = 0; i < 10; i++) {
    let w = 50,
      h = 50,
      x = Math.floor(Math.random() * canvas.width) - w,
      y = Math.floor(Math.random() * canvas.height) - h;

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, w, h);
  }
}
// x();

// 11. צור 10 עיגולים במיקומים שונים ובגדלים שונים(באופן רנדומלי, יש לוודא שהם לא יוצאים מהמסך).

function randomCircle() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * canvas.width),
      y = Math.floor(Math.random() * canvas.height),
      radios = Math.floor(Math.random() * 100),
      start = 0,
      endPoint = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(x, y, radios, start, endPoint);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }
}
// randomCircle();

// 12 tommorow

function randomCircleAndColor() {
  const style = ["red", "yellow", "black", "green", "pink"];
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * canvas.width),
      y = Math.floor(Math.random() * canvas.height),
      radios = Math.floor(Math.random() * 100),
      start = 0,
      endpoint = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(x, y, radios, start, endpoint);
    ctx.fillStyle = style[Math.floor(Math.random() * 5)];
    ctx.fill();
    ctx.closePath();
  }
}

// randomCircleAndColor()

// 13 צייר חיוך בעזרת שימוש בעיגול(arc).

function CircleByArc() {
  ctx.beginPath();
  ctx.arc(400, 250, 200, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(330, 150, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(480, 150, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(400, 350, 60, 0, 1 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}
// CircleByArc();
