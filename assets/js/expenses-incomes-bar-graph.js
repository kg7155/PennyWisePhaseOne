var canvas = document.getElementById("canvas-expenses-incomes");
canvas.width = 800;
canvas.height = 400;
var context = canvas.getContext("2d");

var data = [0, 0, 6.2, 33.4, 0, 3.4, 6.2, 9, 120.0, 65.2, 12.5, 0, 2.5, 2.3, 4.5, 24.4, 5, 2, 65, 2, 4, 5, 35.2, 41, 23.4, 44, 0, 2, 1, 3, 50];
var maxValue = Math.max.apply(Math, data);
var minValue = Math.min.apply(Math, data);
var step = 20;
var cols = 31;
var rows = (maxValue - minValue) / step + 1;
var margin = 10;
var columnWidth = (canvas.width - 2 * margin) / cols-1;
var columnHeight = (canvas.height - 2 * margin) / rows;

context.strokeStyle = "#a8a8a8";
context.beginPath();

// draw vertical lines
var x;
for (i = 1; i <= cols+1; i++) {
    x = i * columnWidth;
    context.moveTo(x, margin);
    context.lineTo(x, canvas.height - 2 * margin);
    if (i == cols + 1)
        continue;
    context.fillText(i, x + 5, canvas.height - 5);
}

// draw horizontal lines
var i, scale;
for (i = 0, scale = maxValue; scale >= minValue; i++, scale -= step) {
    var y = margin * 2.5 + i * columnHeight; 
    context.moveTo(columnWidth - margin, y);
    context.lineTo(canvas.width - margin, y);
    context.fillText(scale, columnWidth - margin*2.3, y + 3);		
}

context.stroke();

context.strokeStyle = "#312450";
context.beginPath();

// draw bars
var c;
for (i = 1; i <= cols; i++) {
    c = 0;
    for (j = maxValue; j >= minValue; j -= step) {
        if (data[i-1] < j)
            c++;
        else 
            break;
    }
    x = i * columnWidth;
    context.moveTo(x, canvas.height - 2 * margin);
    context.lineTo(x, margin * 2.5 + c * columnHeight - (columnHeight / step) * (data[i-1] - j));
    context.lineTo((i + 1) * columnWidth, margin * 2.5 + c * columnHeight - (columnHeight / step) * (data[i-1] - j));
    context.lineTo((i + 1) * columnWidth, canvas.height - 2 * margin);
}

context.stroke();