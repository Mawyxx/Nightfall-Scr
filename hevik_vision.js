const KEY_UNLOAD = 0x73;

const weaponData = [
    { modelHash: 3548001216, name: "ZZZZZZ" },
    { modelHash: 619715967, name: "ZZZZZZZZZZZZ" }
];

let isScriptActive = true;

function getWeaponNameByHash(weaponHash) {
    const weapon = weaponData.find(weapon => weapon.modelHash === weaponHash);
    return weapon ? weapon.name : null;
}


function hasPlayerWeapon(weaponHash) {
    const [hasWeapon, currentWeapon] = native.getCurrentPedWeapon(alt.Player.local.scriptID, true);
    return hasWeapon && currentWeapon === weaponHash;
}

alt.on("keydown", (key) => {
    if (key === KEY_UNLOAD) {
        isScriptActive = !isScriptActive;
        if (!isScriptActive) {
            alt.clearEveryTick();
            alt.emit("api.longNotify", ZZZZZZZZZZZZZZZZZZ, "success");
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

            if (distance <= 300) {
                const [hasWeapon, weaponHash] = native.getCurrentPedWeapon(ped.scriptID, true);

                if (hasWeapon) {
                    const weaponName = getWeaponNameByHash(weaponHash);
                    if (weaponName && !hasPlayerWeapon(weaponHash)) {
                        const weaponIndex = weaponData.findIndex(weapon => weapon.modelHash === weaponHash);
                        const color = weaponIndex === 0 ? { r: 255, g: 0, b: 255, a: 255 } : weaponIndex === 1 ? { r: 0, g: 0, b: 139, a: 255 } : null;

                        if (color) {
                            drawTextAndLineBelowPed(pedPos, weaponName, distance, color);
                        }
                    }
                }
            }
        });

        weaponData.forEach(weapon => {
            const weaponObject = native.getClosestObjectOfType(playerPos.x, playerPos.y, playerPos.z, 1000.0, weapon.modelHash, false, false, false);

            if (weaponObject && native.doesEntityExist(weaponObject)) {
                const objPos = native.getEntityCoords(weaponObject, true);
                const distanceToWeapon = native.vdist(objPos.x, objPos.y, objPos.z, playerPos.x, playerPos.y, playerPos.z);

                if (distanceToWeapon <= 300) {
                    const weaponIndex = weaponData.findIndex(w => w.modelHash === weapon.modelHash);
                    const color = weaponIndex === 0 ? { r: 0, g: 255, b: 0, a: 255 } : weaponIndex === 1 ? { r: 255, g: 0, b: 0, a: 255 } : null;

                    if (color) {
                        drawTextAndLineBelowPed(objPos, weapon.name, distanceToWeapon, color);
                    }
                }
            }
        });

        drawScreenText("by trenbolon", { r: 255, g: 0, b: 255, a: 255 });
    });
}


function drawTextAndLineBelowPed(pos, text, distance, color) {
    const [success, screenX, screenY] = native.getScreenCoordFromWorldCoord(pos.x, pos.y, pos.z);

    if (success) {
        native.setTextFont(3);
        native.setTextProportional(true);
        const scale = Math.max(0.2, 0.5 - (distance / 1000));
        native.setTextScale(scale, scale);
        native.setTextColour(color.r, color.g, color.b, color.a);
        native.setTextOutline();
        native.setTextEdge(2, 0, 0, 0, 255);
        native.beginTextCommandDisplayText('STRING');
        native.addTextComponentSubstringPlayerName(text);
        native.endTextCommandDisplayText(screenX, screenY, 0);
    }
}


function drawScreenText(text, color) {
    const screenX = 0.48;
    const screenY = 0.975;
    native.setTextFont(0);
    native.setTextProportional(true);
    native.setTextScale(0.2, 0.2);
    native.setTextColour(color.r, color.g, color.b, color.a);
    native.beginTextCommandDisplayText('STRING');
    native.addTextComponentSubstringPlayerName(text);
    native.endTextCommandDisplayText(screenX, screenY, 0);
}


startMainLoop();
