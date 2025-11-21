// HTML содержимое
const htmlContent = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Анимации</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            user-select: none;
        }


        #header {
    cursor: move; /* Добавляем курсор "перетаскивание" */
}
        body {
            background: transparent;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            overflow: hidden;
        }

        #container {
            width: 400px;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            position: absolute;
            left: 50px;
            top: 50%;
            transform: translateY(-50%);
            max-height: 80vh;
            display: flex;
            flex-direction: column;
        }

        #header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: rgba(0, 0, 0, 0.7);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        #title {
            font-size: 18px;
            font-weight: bold;
        }

        #closeBtn {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0 10px;
            line-height: 1;
        }

        #closeBtn:hover {
            color: #ff5555;
        }

        .tabs {
            display: flex;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab {
            flex: 1;
            padding: 12px;
            background: rgba(0, 0, 0, 0.5);
            border: none;
            color: white;
            cursor: pointer;
            font-size: 14px;
            text-align: center;
            transition: all 0.2s;
        }

        .tab:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .tab.active {
            background: rgba(0, 100, 200, 0.7);
        }

        .tab-content {
            display: none;
            padding: 15px;
            overflow-y: auto;
            flex: 1;
        }

        .tab-content.active {
            display: block;
        }

        #animList {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .anim-category {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            overflow: hidden;
        }

        .category-title {
            padding: 8px 12px;
            background: rgba(0, 100, 200, 0.5);
            font-size: 14px;
            font-weight: bold;
        }

        .anim-btn {
            width: 100%;
            padding: 10px;
            background: rgba(255, 255, 255, 0.05);
            border: none;
            color: white;
            text-align: left;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.2s;
        }

        .anim-btn:hover {
            background: rgba(0, 100, 200, 0.5);
        }

        .input-group {
            margin-bottom: 15px;
        }

        .input-group label {
            display: block;
            margin-bottom: 5px;
            font-size: 13px;
            color: #aaa;
        }

        .input-group input {
            width: 100%;
            padding: 8px 10px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            color: white;
        }

        .input-group .hint {
            font-size: 11px;
            color: #777;
            margin-top: 5px;
            line-height: 1.4;
        }

        #animInputContainer {
            display: flex;
            align-items: center;
        }

        #animInputContainer input {
            flex: 1;
        }

        .section-title {
            font-size: 14px;
            margin: 20px 0 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: #aaa;
        }

        .row {
            display: flex;
            gap: 10px;
        }

        .row .input-group {
            flex: 1;
            margin-bottom: 10px;
        }

        #buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        #buttons button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s;
        }

        #playBtn {
            background: rgba(0, 150, 0, 0.7);
        }

        #playBtn:hover {
            background: rgba(0, 200, 0, 0.7);
        }

        #stopBtn, #stopAnimBtn {
            background: rgba(150, 0, 0, 0.7);
        }

        #stopBtn:hover, #stopAnimBtn:hover {
            background: rgba(200, 0, 0, 0.7);
        }

        #stopAnimBtn {
            width: 100%;
            padding: 12px;
            margin-top: 15px;
            border: none;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            font-size: 14px;
        }

        /* Стили для скроллбара */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .category-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: rgba(0, 0, 0, 0.2);
}

.category-content.show {
    max-height: 1000px; /* Достаточно большое значение для плавного раскрытия */
}

.category-title {
    cursor: pointer;
    transition: background 0.2s;
}

.category-title:hover {
    background: rgba(0, 100, 200, 0.7);
}
    
    </style>
</head>
<body>
    <div id="container">
        <div id="header">
            <div id="title">Меню анимаций</div>
            <button id="closeBtn">×</button>
        </div>

        <div class="tabs">
            <button class="tab" onclick="switchTab('list')">Готовые</button>
            <button class="tab active" onclick="switchTab('custom')">Кастомные</button>
        </div>

        <!-- Вкладка списка анимаций -->
        <div id="listTab" class="tab-content">
            <div id="animList">
                <div class="anim-category">
                  <div class="category-title" onclick="toggleCategory(this)">НЕВИДЕМОСТЬ</div>
                    <button class="anim-btn" onclick="playListAnim('mp_arresting', 'arrest_on_floor_front_left_cam', 1)">Невидимость</button>
                </div>
                <div class="anim-category">
                    <div class="category-title" onclick="toggleCategory(this)">Суицид</div>
                    <button class="anim-btn" onclick="playListAnim('mp_suicide', 'pistol_fp', 1)">Выстрел в голову</button>
                    <button class="anim-btn" onclick="playListAnim('mp_suicide', 'pill', 1)">Принять таблетки</button>
                </div>
                <div class="anim-category">
                    <div class="category-title" onclick="toggleCategory(this)">Арест</div>
                    <button class="anim-btn" onclick="playListAnim('mp_arresting', 'idle', 1)">Арест (ожидание)</button>
                    <button class="anim-btn" onclick="playListAnim('mp_arresting', 'arrest_on_floor_front_left_b', 1)">Арест на полу</button>
                </div>
                <div class="anim-category">
                    <div class="category-title" onclick="toggleCategory(this)">Медицинские</div>
                    <button class="anim-btn" onclick="playListAnim('missheistfbi3b_ig8_2', 'cpr_loop_victim', 1)">Без сознания</button>
                    <button class="anim-btn" onclick="playListAnim('amb@medic@standing@tendtodead@base', 'base', 1)">Осмотр пациента</button>
                    <button class="anim-btn" onclick="playListAnim('missheistfbi3b_ig8_2', 'cpr_loop_paramedic', 1)">СЛР (парамедик)</button>
                    <button class="anim-btn" onclick="playListAnim('mini@cpr@char_a@cpr_str', 'cpr_pumpchest', 1)">Массаж сердца</button>
                </div>
                <div class="anim-category">
                    <div class="category-title" onclick="toggleCategory(this)">Животные</div>
                    <button class="anim-btn" onclick="playListAnim('creatures@pug@amb@world_dog_sitting@exit', 'exit', 1)">Собака (сломанная)</button>
                    <button class="anim-btn" onclick="playListAnim('creatures@deer@move', 'gallop_start_0_l', 1)">Бег оленя</button>
                    <button class="anim-btn" onclick="playListAnim('creatures@crow@amb@world_crow_standing@idle_a', 'idle_c', 1)">Почесать за ухом</button>
                </div>
                <div class="anim-category">
                    <div class="category-title" onclick="toggleCategory(this)">Разное</div>
                    <button class="anim-btn" onclick="playListAnim('fbi_3_mcs_5-3', 'prop_npc_phone-3', 1)">Переворот персонажа</button>
                    <button class="anim-btn" onclick="playListAnim('weapons@first_person@aim_idle@generic@melee@knife@shared@core', 'walk_additive_left', 1)">Разминка направо</button>
                    <button class="anim-btn" onclick="playListAnim('mph_tut_ext-5', 'hei_prop_heist_deposit_box-5', 1)">Переворот на 180</button>
                    <button class="anim-btn" onclick="playListAnim('family_5_int-3', 'cs_cig_exhale_mouth-3', 1)">Сдвиг вправо вверх</button>
                    <button class="anim-btn" onclick="playListAnim('mini@repair', 'fixing_a_ped', 1)">Чинить авто</button>
                    <button class="anim-btn" onclick="playListAnim('swimming@first_person', 'walk_fwd_0_loop', 1)">Плавать</button>
                    <button class="anim-btn" onclick="playListAnim('fam_5_mcs_6_p3_b-0', 'a_c_chimp_dual-0', 1)">Гопник</button>
                    <button class="anim-btn" onclick="playListAnim('missheistpaletoscore1leadinout', 'trv_puking_leadout', 1)">Рыгать</button>
                    <button class="anim-btn" onclick="playListAnim('mini@prostitutes@sexnorm_veh', 'sex_loop_prostitute', 1)">Секс анимация</button>
                    <button class="anim-btn" onclick="playListAnim('missbigscore1switch_trevor_piss', 'piss_loop', 1)">Писать</button>
                    <button class="anim-btn" onclick="playListAnim('mp_intro_concat-8', 'w_pi_pistol-8', 1)">Переворот</button>
                    <button class="anim-btn" onclick="playListAnim('creatures@killerwhale@move', 'dead_left', 1)">Акула</button>
                    <button class="anim-btn" onclick="playListAnim('creatures@killerwhale@move', 'swim_turn_r', 1)">Акула 2</button>
                    <button class="anim-btn" onclick="playListAnim('creatures@deer@move', 'walk_bck_upp', 1)">Квадробер</button>
                </div>
            </div>
            
            <button id="stopAnimBtn">Остановить анимацию</button>
        </div>

        <!-- Вкладка кастомных анимаций -->
        <div id="customTab" class="tab-content active">
            <div class="input-group">
                <label for="animInput">Анимация (dict : anim)</label>
                <div id="animInputContainer">
                    <input id="animDict" type="text" placeholder="mp_arresting">
                    <span style="color: white; line-height: 35px; padding: 0 5px;">:</span>
                    <input id="animName" type="text" placeholder="idle">
                </div>
                <div class="hint">Пример: mp_arresting : idle</div>
            </div>

            <div class="section-title">Основные параметры</div>

            <div class="row">
                <div class="input-group">
                    <label for="blendIn">BlendIn (сек)</label>
                    <input id="blendIn" type="number" value="8.0" step="0.1">
                </div>
                <div class="input-group">
                    <label for="blendOut">BlendOut (сек)</label>
                    <input id="blendOut" type="number" value="-8.0" step="0.1">
                </div>
            </div>

            <div class="row">
                <div class="input-group">
                    <label for="duration">Длительность (мс)</label>
                    <input id="duration" type="number" value="-1">
                </div>
                <div class="input-group">
                    <label for="playbackRate">Скорость</label>
                    <input id="playbackRate" type="number" value="1.0" step="0.1">
                </div>
            </div>

            <div class="section-title">Флаги анимации</div>

            <div class="input-group">
                <label for="flags">Флаги (число)</label>
                <input id="flags" type="number" value="0">
                <div class="hint">
                    Основные флаги: 1-повтор, 2-стоп при ходьбе, 16-верх тела, 32-управление<br>
                    Комбинации: 33=1+32 (повтор+управление), 48=16+32 (верх тела+управление)
                </div>
            </div>

            <div class="section-title">Блокировка осей</div>

            <div class="row">
                <div class="input-group">
                    <label for="lockX">Блокировка X</label>
                    <input id="lockX" type="number" value="0" min="0" max="1" step="1">
                </div>
                <div class="input-group">
                    <label for="lockY">Блокировка Y</label>
                    <input id="lockY" type="number" value="0" min="0" max="1" step="1">
                </div>
                <div class="input-group">
                    <label for="lockZ">Блокировка Z</label>
                    <input id="lockZ" type="number" value="0" min="0" max="1" step="1">
                </div>
            </div>

            <div id="buttons">
                <button id="playBtn">Воспроизвести</button>
                <button id="stopBtn">Остановить</button>
            </div>
        </div>
    </div>

    <script>
        // Только функции для работы интерфейса
       function switchTab(tabName) {
    try {
        // Получаем все табы и контенты
        const allTabs = document.querySelectorAll('.tab');
        const allContents = document.querySelectorAll('.tab-content');
        
        // Проверяем существование целевого таба
        const targetTabContent = document.getElementById(tabName + 'Tab');
        if (!targetTabContent) {
            console.error('Tab content not found:', tabName + 'Tab');
            return;
        }
        
        // Снимаем активные классы со всех элементов
        allTabs.forEach(tab => tab.classList.remove('active'));
        allContents.forEach(content => content.classList.remove('active'));
        
        // Активируем нужные элементы
        targetTabContent.classList.add('active');
        
        // Находим соответствующую кнопку таба более надёжным способом
        const targetTabButton = Array.from(allTabs).find(tab => 
            tab.getAttribute('data-tab') === tabName
        );
        
        if (targetTabButton) {
            targetTabButton.classList.add('active');
        } else {
            console.error('Tab button not found for:', tabName);
        }
    } catch (e) {
        console.error('Error in switchTab:', e);
    }
}

        function playListAnim(dict, name, flags) {
            const blendIn = parseFloat(document.getElementById('blendIn').value) || 8.0;
            const blendOut = parseFloat(document.getElementById('blendOut').value) || -8.0;
            const rate = parseFloat(document.getElementById('playbackRate').value) || 1.0;
            
            alt.emit('playAnimation', 
                dict, name, 
                blendIn, blendOut, 
                -1, flags, rate,
                0, 0, 0 // lockX, lockY, lockZ
            );
        }

        function playAnim() {
            const dict = document.getElementById('animDict').value;
            const name = document.getElementById('animName').value;
            if (!dict || !name) return alert('Заполните оба поля!');
            
            const blendIn = parseFloat(document.getElementById('blendIn').value) || 8.0;
            const blendOut = parseFloat(document.getElementById('blendOut').value) || -8.0;
            const duration = parseInt(document.getElementById('duration').value) || -1;
            const flags = parseInt(document.getElementById('flags').value) || 0;
            const rate = parseFloat(document.getElementById('playbackRate').value) || 1.0;
            const lockX = parseInt(document.getElementById('lockX').value) || 0;
            const lockY = parseInt(document.getElementById('lockY').value) || 0;
            const lockZ = parseInt(document.getElementById('lockZ').value) || 0;
            
            alt.emit('playAnimation', 
                dict, name, 
                blendIn, blendOut, 
                duration, flags, rate,
                lockX, lockY, lockZ
            );
        }

        function stopAnim() {
            alt.emit('stopAnimation');
        }

        // Инициализация кнопок
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('closeBtn').addEventListener('click', () => alt.emit('closeMenu'));
            document.getElementById('playBtn').addEventListener('click', playAnim);
            document.getElementById('stopBtn').addEventListener('click', stopAnim);
            document.getElementById('stopAnimBtn').addEventListener('click', stopAnim);
        });


        // Перетаскивание окна
let isDragging = false;
let offsetX, offsetY;
const container = document.getElementById('container');
const header = document.getElementById('header');

header.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = container.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    container.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    container.style.left = (e.clientX - offsetX) + 'px';
    container.style.top = (e.clientY - offsetY) + 'px';
    container.style.transform = 'none';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = '';
});



function toggleCategory(element) {
    // Закрываем все другие категории (если нужно оставить только одну открытой)
    // Если нужно, чтобы несколько могли быть открыты - удалите этот блок
    document.querySelectorAll('.category-content').forEach(content => {
        if (content !== element.nextElementSibling) {
            content.classList.remove('show');
            const title = content.previousElementSibling;
            title.innerHTML = title.innerHTML.replace('▲', '▼');
        }
    });
    
    // Переключаем текущую категорию
    const content = element.nextElementSibling;
    content.classList.toggle('show');
    
    // Меняем стрелочку
    if (content.classList.contains('show')) {
        element.innerHTML = element.innerHTML.replace('▼', '▲');
    } else {
        element.innerHTML = element.innerHTML.replace('▲', '▼');
    }
}
    </script>
</body>
</html>
`;



const dataUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);

let webview = null;

function openAnimationMenu() {
    if (!webview) {
        webview = new alt.WebView(dataUri);
        webview.focus();
        alt.showCursor(true);
        alt.toggleGameControls(false);

        webview.on('playAnimation', (animDict, animName, blendIn, blendOut, duration, flags, playbackRate, lockX, lockY, lockZ) => {
            playAnimation(animDict, animName, blendIn, blendOut, duration, flags, playbackRate, lockX, lockY, lockZ);
        });

        webview.on('stopAnimation', stopAnimation);
        webview.on('closeMenu', closeAnimationMenu);
    }
}

function closeAnimationMenu() {
    if (webview) {
        webview.unfocus();
        webview.destroy();
        webview = null;
        alt.showCursor(false);
        alt.toggleGameControls(true);
    }
}

function toggleAnimationMenu() {
    if (webview) {
        closeAnimationMenu();
    } else {
        openAnimationMenu();
    }
}

function playAnimation(animDict, animName, blendIn = 8.0, blendOut = -8.0, duration = -1, flags = 0, playbackRate = 1.0, lockX = 0, lockY = 0, lockZ = 0) {
    const player = alt.Player.local;

    if (!native.hasAnimDictLoaded(animDict)) {
        native.requestAnimDict(animDict);
    }

    const interval = alt.setInterval(() => {
        if (native.hasAnimDictLoaded(animDict)) {
            alt.clearInterval(interval);
            native.taskPlayAnim(
                player.scriptID,
                animDict,
                animName,
                blendIn,
                blendOut,
                duration,
                flags,
                playbackRate,
                lockX,
                lockY,
                lockZ
            );
        }
    }, 100);
}

function stopAnimation() {
    const player = alt.Player.local;
    native.clearPedTasks(player.scriptID);
}

// Обработка клавиши F7 для проигрывания анимации невидимости
let isInvisibleAnimPlaying = false;

// Обработка клавиши F7 для анимации невидимости
alt.on('keyup', (key) => {
    if (key === 118) { // F7
        if (isInvisibleAnimPlaying) {
            stopAnimation();
            isInvisibleAnimPlaying = false;
        } else {
            playAnimation('mp_arresting', 'arrest_on_floor_front_left_cam', 8.0, -8.0, -1, 1, 1.0, 0, 0, 0);
            isInvisibleAnimPlaying = true;
        }
    }
    
    if (key === 120) { // F9
        toggleAnimationMenu();
    }
});