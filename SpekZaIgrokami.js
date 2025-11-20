/// <reference path="types-gtanatives/index.d.ts" />
/// <reference path="types-altv-client/index.d.ts" />

let isTracking = false;
let targetPlayer = null;
let isFullyDisabled = false;
let originalPosition = null;

function findNearestPlayer() {
    let nearestDistance = Number.MAX_VALUE;
    let nearest = null;
    const localPlayer = alt.Player.local;

    for (const player of alt.Player.streamedIn) {
        if (!player || player.remoteID === localPlayer.remoteID) continue;

        const playerPos = native.getEntityCoords(player.scriptID, false);
        const localPos = native.getEntityCoords(localPlayer.scriptID, false);
        const distance = native.getDistanceBetweenCoords(
            localPos.x, localPos.y, localPos.z,
            playerPos.x, playerPos.y, playerPos.z,
            true
        );

        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearest = player;
        }
    }

    return nearest;
}

async function trackNearestPlayer() {
    while (isTracking && !isFullyDisabled) {
        if (!targetPlayer || !targetPlayer.valid) {
            alt.emit("api.longNotify", "Целевой игрок недоступен, слежение остановлено.", "error");
            toggleTracking();
            break;
        }

        const playerPos = native.getEntityCoords(targetPlayer.scriptID, false);
        native.setEntityCoords(
            alt.Player.local.scriptID,
            playerPos.x,
            playerPos.y,
            playerPos.z - 3.4,
            false, false, false, false
        );

        await alt.Utils.wait(50);
    }
}

function saveCurrentPosition() {
    const localPlayer = alt.Player.local;
    const currentPos = native.getEntityCoords(localPlayer.scriptID, false);
    originalPosition = {
        x: currentPos.x,
        y: currentPos.y,
        z: currentPos.z
    };
}

function restoreOriginalPosition() {
    if (!originalPosition) return;

    native.setEntityCoords(
        alt.Player.local.scriptID,
        originalPosition.x,
        originalPosition.y,
        originalPosition.z,
        false, false, false, false
    );
}

function toggleTracking() {
    if (isFullyDisabled) return;

    isTracking = !isTracking;

    if (isTracking) {
        saveCurrentPosition();

        const nearest = findNearestPlayer();
        if (!nearest || !nearest.valid) {
            alt.emit("api.longNotify", "Нет ближайшего игрока для слежения.", "error");
            isTracking = false;
            return;
        }

        targetPlayer = nearest;

        // -----------------------------------------------
        // Grab the player's name from StreamSyncedMeta
        // using the key s_login. Fallback is remoteID.
        // -----------------------------------------------
        let playerName = targetPlayer.getStreamSyncedMeta("s_login") || `ID: ${targetPlayer.remoteID}`;

        alt.emit(
            "api.longNotify",
            `Слежение начато за ${playerName} (ID: ${targetPlayer.remoteID})`,
            "success"
        );

        trackNearestPlayer();
    } else {
        targetPlayer = null;
        restoreOriginalPosition();
        alt.emit("api.longNotify", "Слежение остановлено", "error");
    }
}

function fullDisable() {
    if (isFullyDisabled) return;

    isTracking = false;
    isFullyDisabled = true;
    targetPlayer = null;
    restoreOriginalPosition();
    alt.emit("api.longNotify", "Функционал полностью отключен", 1);
}

// Key bindings
alt.on("keyup", (key) => {
    if (key === 0x23) { // End key
        toggleTracking();
    } else if (key === 0x55) { // U key
        fullDisable();
    }
});