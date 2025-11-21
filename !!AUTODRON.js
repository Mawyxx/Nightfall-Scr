const bind_toggle = 0x45; // "E"
const bind_disable = 0x55; // "U"

let NeedID = 399;
let originalPosition = null;

let explodeTimeout = null;
let leaveVehicleTimeout = null;

let enabled = true; // Скрипт включён по умолчанию

alt.on("keyup", (key) => {
    if (key === bind_toggle) {
        if (enabled) {
            attackAndReturn();
        } else {
            alt.emit("api.longNotify", "Скрипт выключен. Нажмите U, чтобы включить.", "warning");
        }
    } else if (key === bind_disable) {
        if (enabled) {
            disableAttack();
            enabled = false;
            alt.emit("api.longNotify", "Скрипт выключен.", "info");
        } else {
            enabled = true;
            alt.emit("api.longNotify", "Скрипт включен.", "success");
        }
    }
});

function attackAndReturn() {
    const player = alt.Player.local;
    const vehicle = native.getVehiclePedIsIn(player.scriptID, false);

    if (!vehicle || vehicle === 0) {
        alt.emit("api.longNotify", "Вы не в транспорте!", "error");
        return;
    }

    const target = findPlayerByID(NeedID);
    if (!target || !target.valid) {
        alt.emit("api.longNotify", "Цель не найдена!", "error");
        return;
    }

    const targetPos = native.getEntityCoords(target.scriptID, false);
    if (!targetPos) {
        alt.emit("api.longNotify", "Ошибка позиции цели", "error");
        return;
    }

    // Сохраняем текущую позицию машины
    const vehiclePos = native.getEntityCoords(vehicle, false);
    originalPosition = {
        x: vehiclePos.x,
        y: vehiclePos.y,
        z: vehiclePos.z
    };

    // Телепортируем ТРАНСПОРТ (и игрока вместе с ним)
    const offsetZ = 3;
    native.setEntityCoords(vehicle, targetPos.x, targetPos.y, targetPos.z + offsetZ, false, false, false, false);
    alt.emit("api.longNotify", "Телепорт над целью", "success");

    // Через секунду — взрыв
    setTimeout(() => {
        native.setVehiclePetrolTankHealth(vehicle, -975.0); // Взорвать
        native.taskLeaveVehicle(player.scriptID, vehicle, 0); // Выйти из машины

        setTimeout(() => {
            native.clearPedTasksImmediately(player.scriptID); // Сброс анимаций

            // Возврат игрока назад (не машины)
            if (originalPosition) {
                native.setEntityCoords(
                    player.scriptID,
                    originalPosition.x,
                    originalPosition.y,
                    originalPosition.z,
                    false, false, false, false
                );
                alt.emit("api.longNotify", "Возврат на исходную позицию", "success");
            }

        }, 50); // Ждём полсекунды после выхода
    }, 50); // Взрыв через 1 сек
}

function findPlayerByID(id) {
    for (const p of alt.Player.streamedIn) {
        if (p && p.remoteID === id) {
            return p;
        }
    }
    return null;
}
