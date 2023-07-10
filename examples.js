let sketchOne = function(p) {

    p.setup = function() {
        p.createCanvas(600, 400);
        let colors = [
            p.color(53,226,195),
            p.color(127,115,255),
            p.color(255,229,82)
        ];
        let friends = ["Ad", "Va", "Ve"];

        p.background(52);
        p.drawNoCoal(friends, colors, 30, 5);
        p.drawDualCoal(friends, colors, 140, 5);
        p.drawGC(friends, colors, 470, 5);
    };

    p.drawNoCoal = function(f, c, x, y) {
        p.textAlign(p.CENTER);
        p.textSize(20);
        for(let i = 0; i <= f.length; i++) {
            if(i < f.length) {
                p.fill(c[i]);
                p.noStroke();
                p.rect(x, y + i * 100, 100, 100);
                p.stroke(0);
                p.strokeWeight(2);
                p.fill(255);
                p.text(f[i], x + 50, y + 50 + i * 100);
            }
            else {
                p.text("£0", x + 50, y + 50 + i * 100);
            }
        }
    };

    p.drawDualCoal = function(f, c, x, y) {
        let duals = [[0, 1], [0, 2], [1, 2]];
        let royal = [2, 1, 0];
        let dualCash = ["£12m", "£13m", "£14m"];

        let xOff = x;
        p.textAlign(p.CENTER);
        p.textSize(20);
        for(let i = 0; i < duals.length; i++) {
            let d1 = duals[i][0];
            let d2 = duals[i][1];
            let col = p.lerpColor(c[d1], c[d2], 0.5);
            p.fill(col);
            p.noStroke();
            p.rect(xOff, y, 100, 200);
            p.stroke(0);
            p.strokeWeight(2);
            p.fill(255);
            p.text(f[d1] + ", " + f[d2], xOff + 50, y + 100);
            p.text(dualCash[i], xOff + 50, y + 220);

            p.fill(c[royal[i]]);
            p.noStroke();
            p.rect(xOff, y + 250, 100, 100);
            p.stroke(0);
            p.strokeWeight(2);
            p.fill(255);
            p.text(f[royal[i]], xOff + 50, y + 300);
            p.text("(£9m)", xOff + 50, y + 370);

            xOff += 110;
        }
    };

    p.drawGC = function(f, c, x, y) {
        let col = p.lerpColor(c[0], c[1], 0.5);
        col = p.lerpColor(col, c[2], 0.5);
        p.fill(col);
        p.noStroke();
        p.rect(x, y, 100, 300);
        p.stroke(0);
        p.strokeWeight(2);
        p.fill(255);
        p.text("Ad, Va, Ve", x + 50, y + 100);
        p.text("£24m", x + 50, y + 320);
    };
}

let sk1 = new p5(sketchOne, "sketch_one");