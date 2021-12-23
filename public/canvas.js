const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
//1.הצג ריבוע 50X50 שחור בכל מקום ב- canvas.

context.fillStyle = "black";
context.fillRect(0, 0, 50, 50);

// 2. הצג ריבוע 70X70 צבע אדום בכל מקום ב- canvas.

context.fillStyle = "red";
context.fillRect(0, 100, 70, 70);

// 3.צור עיגול ברדיוס 30 בצבע אדום בכל מקום ב- canvas.
// context.arc(x,y,radios,start angle/זווית, end angle)
context.beginPath();
context.arc(100, 100, 30, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();
context.closePath();

// 4. צור עיגול ברדיוס 50 בצבע כחול בכל מקום ב- canvas.
context.beginPath();
context.arc(200, 200, 50, 0, 2 * Math.PI);
context.fillStyle = "yellow";
context.fill();
context.closePath();
// 5.צור 2 עיגולים ברדיוס 40 בצבע ירוק בכל מקום ב- canvas.
context.beginPath();
context.arc(600, 60, 10, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();
context.closePath();

context.beginPath();
context.arc(500, 60, 10, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();
context.closePath();

context.beginPath();
context.arc(550, 100, 10, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();
context.closePath();

//6. צור 3 מרובעים במקומות שונים כל חצי שנייה יתקדמו 20 קדימה.

// let x = 0,
//   dir = "ltr",
//   step = 100;
// const timeInterval = setInterval(() => {
//   context.clearRect(x, 300, 100, 100);
//   context.clearRect(x, 450, 100, 100);
//   context.clearRect(x, 600, 100, 100);

//   // -------------------------------------------------
//   if (dir === "ltr") x += step;
//   else x -= step;
//   if (x >= canvas.width - 200) dir = "rtl";
//   if (x <= 0) dir = "ltr";
//   context.fillStyle = "green";
//   context.fillRect(x, 300, 100, 100);

//   context.fillStyle = "yellow";
//   context.fillRect(x, 450, 100, 100);

//   context.fillStyle = "red";
//   context.fillRect(x, 600, 100, 100);
// }, 500);

//7. צור אובייקט של רצפה והצג אותו על ה-canvas כרצפה.
const floor = { x: 0, y: canvas.height - 70, w: canvas.width, h: 70 };
context.fillStyle = "black";
context.fillRect(floor.x, floor.y, floor.w, floor.h);

//8. צור אובייקט של שחקן - והצג אותו על ה- canvas ברצפה מהשאלה הקודמת.
const player = { x: 0, y: canvas.height - 70, w: 70, h: 70 };
context.fillStyle = "red";
context.fillRect(player.x, player.y, player.w, player.h);
