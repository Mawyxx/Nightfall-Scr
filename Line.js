const weaponData = [
    { modelHash: 3548001216, name: "Heavy Sniper" },
    { modelHash: 619715967, name: "Heavy Sniper Mk II" }
];

let isScriptActive = true;

function getWeaponNameByHash(weaponHash) {
    const weapon = weaponData.find(weapon => weapon.modelHash === weaponHash);
    return weapon ? weapon.name : null;
}

alt.on("keydown", (key) => {
    if (key === 0x72) { // F3 - вкл/выкл
        isScriptActive = !isScriptActive;
        if (!isScriptActive) {
            alt.clearEveryTick();
        } else {
            startMainLoop();
        }
    }
});

function startMainLoop() {
    alt.everyTick(() => {
        if (!isScriptActive) return;

        const playerPos = alt.Player.local.pos;
        
        alt.Player.all.forEach(ped => {
            if (ped === alt.Player.local) return;

            const pedPos = ped.pos;
            const distance = native.vdist(pedPos.x, pedPos.y, pedPos.z, playerPos.x, playerPos.y, playerPos.z);

            if (distance <= 500) {
                const [hasWeapon, weaponHash] = native.getCurrentPedWeapon(ped.scriptID, true);
                if (hasWeapon && getWeaponNameByHash(weaponHash)) {
                    drawLine(playerPos, pedPos, { r: 255, g: 0, b: 0, a: 255 }); // Красная линия
                }
            }
        });

        
        weaponData.forEach(weapon => {
            const weaponObject = native.getClosestObjectOfType(playerPos.x, playerPos.y, playerPos.z, 500.0, weapon.modelHash, false, false, false);

            if (weaponObject && native.doesEntityExist(weaponObject)) {
                const objPos = native.getEntityCoords(weaponObject, true);
                drawLine(playerPos, objPos, { r: 0, g: 0, b: 255, a: 255 }); // тут цвет линии она тут синяя
            }
        });
    });
}

function drawLine(startPos, endPos, color) {
    native.drawLine(
        startPos.x, startPos.y, startPos.z,
        endPos.x, endPos.y, endPos.z,
        color.r, color.g, color.b, color.a
    );
}

startMainLoop();