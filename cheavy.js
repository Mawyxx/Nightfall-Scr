const htmlcnt = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1337</title>
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: transparent;
            font-family: "Source Code Pro", monospace;
        }
        #bg {
            position: fixed;
            top: 25px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            background: #090909;
            border-radius: 8px;
            padding: 6px 8px;
        }
        .ico {
            font-size: 20px;
            margin: 2px 6px 2px 1px;
            color: #CD4848;
        }
        #txt {
            font-size: 12px;
            font-weight: bold;
            color: #CD4848;
            padding-left: 6px;
        }
    </style>
</head>
<body>
    <div id="bg">
        <i class="fas fa-triangle-exclamation ico"></i>
        <div id="txt">HEAVY WEAPON DETECTED</div>
    </div>
</body>
</html>
`;

let hud = null;
let whash = [0xC472FE2, 0xA914799, 0x6E7DDDEC];
let scra = true;

function shud() {
    if (!hud) hud = new alt.WebView(`data:text/html;charset=utf-8,${encodeURIComponent(htmlcnt)}`);
}

function hhud() {
    if (hud) {
        hud.destroy();
        hud = null;
    }
}

function dw() {
    let wt = alt.Player.streamedIn.some(player => 
        whash.includes(native.getCurrentPedWeapon(player.scriptID, true)[1])
    );
    wt ? shud() : hhud();
}

alt.everyTick(() => scra && dw());

alt.on("keydown", (key) => {
    if (key === 116) { // F5
        scra = !scra;
        alt.emit("api.longNotify", `script - ${scra ? "on" : "off"}`, 1);
        if (!scra) hhud();
    }
});