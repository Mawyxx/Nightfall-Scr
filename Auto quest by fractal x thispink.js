const VERIFICATION_KEY = 'fractal x thispink';
    
const DIALOG_EVENT = "1080277863";
const QUEST_EVENT = "908555339";
const RENT_EVENT = "2191418292";
const BANK_MENU_EVENT = "2122464461";
const CARD_REGISTER_EVENT = "4057617256";
const ATM_EVENT = "1890931593";
const FOOD_SLOT_EVENT = "1368940019";
const FOOD_EAT_EVENT = "2979989815";
const MINER_DIMENSION_EVENT = "1046250591";
const MINER_DIG_EVENT = "312110879";
const MINER_COMPLETE_EVENT = "2983877669";
const MINER_UNLOAD_EVENT = "3133017335";
const MINER_DISMISS_EVENT = "1009406370";
const MINER_SPEECH_EVENT = "3537442249";
const MINER_DIALOG_END_EVENT = "518952074";
const PURCHASE_EVENT = "1637585120";
const OPEN_CONTACTS_EVENT = "3498992501";
const ENGINE_OFF_EVENT = "2215931285";
const SOME_EMIT_EVENT = "3387882330";
const OPEN_APP_EVENT = "3353945403";
const PIN_SWAP_EVENT = "нахуй не нужен";
const EAT_ID = 21608058;
const DOG_BAG = "3498992501";
const METKA = 2814637369;
    
    const DIALOG_OPEN = [DIALOG_EVENT, 1, 3];
    const QUEST_TAKE = [QUEST_EVENT, 3, 0];
    const MOPED_RENT_STEP_2 = [QUEST_EVENT, 3, 2];
    const MOPED_RENT_FINAL = [RENT_EVENT, "cash", 1, "faggio", 0, null];
    const BANK_MENU_OPEN = [BANK_MENU_EVENT];
    const CARD_REGISTER = [CARD_REGISTER_EVENT, "Standart"];
    const ATM_OPEN = [ATM_EVENT, 7, 10];
    const FOOD_TO_QUICK_SLOT = [FOOD_SLOT_EVENT, 1, 0, 3, 0, -2, null, 0, null];
    const FOOD_EAT = [FOOD_EAT_EVENT, 0];
    const MINER_SET_DIMENSION = [MINER_DIMENSION_EVENT];
    const MINER_MINIGAME_DIG = [MINER_DIG_EVENT, "dig"];
    const MINER_MINIGAME_COMPLETE = [MINER_COMPLETE_EVENT];
    const MINER_UNLOAD = [MINER_UNLOAD_EVENT];
    const MINER_DISMISS_STATE = [MINER_DISMISS_EVENT, 0];
    const MINER_SPEECH = [MINER_SPEECH_EVENT, 35, null, null, "SPEECH_PARAMS_FORCE_SHOUTED"];
    const MINER_DIALOG_START = [DIALOG_EVENT, 35, 104];
    const MINER_DIALOG_ANSWER_1 = [QUEST_EVENT, 104, 1];
    const MINER_DIALOG_ANSWER_0 = [QUEST_EVENT, 104, 0];
    const MINER_DIALOG_END = [MINER_DIALOG_END_EVENT];
    const ENGINE_OFF = [ENGINE_OFF_EVENT, 0];
    const SOME_EMIT = [SOME_EMIT_EVENT, "regular", "cash", "1"];
    const OPEN_APP = [OPEN_APP_EVENT];
    
    const AUTO_SCHOOL_GPS = {
        title: "gps.waypoints.autoschool",
        x: -911.275,
        y: -2037.5692,
        z: 9.4063
    };
    
    const INSTRUCTOR_POSITION = { x: -929.36, y: -2048.79, z: 9.54 };
    
    const AUTO_SCHOOL_COORDS = [
        { x: -999.24, y: -2101.92, z: 12.04 },
        { x: -958.94, y: -2157.19, z: 8.44 },
        { x: -791.54, y: -2324.64, z: 14.25 },
        { x: -682.49, y: -2352.25, z: 12.91 },
        { x: -594.27, y: -2250.53, z: 5.65 },
        { x: -519.65, y: -2165.04, z: 6.95 },
        { x: -431.19, y: -2158.88, z: 9.80 },
        { x: -268.60, y: -2194.04, z: 9.81 },
        { x: -92.16, y: -2157.08, z: 9.80 },
        { x: 6.49, y: -2054.53, z: 9.78 },
        { x: -224.23, y: -1862.74, z: 28.43 },
        { x: -272.74, y: -1826.55, z: 27.11 },
        { x: -395.77, y: -1784.14, z: 20.89 },
        { x: -493.49, y: -1775.79, z: 20.57 },
        { x: -650.80, y: -1668.53, z: 24.69 },
        { x: -667.22, y: -1551.00, z: 14.69 },
        { x: -693.09, y: -1480.21, z: 10.31 },
        { x: -806.79, y: -1657.48, z: 16.08 },
        { x: -1085.76, y: -1944.53, z: 12.63 },
        { x: -1003.53, y: -2101.36, z: 12.52 }
    ];
    
    const DIALOG_STEP_DELAY = 1000;
    const TELEPORT_DELAY_MIN = 2900;
    const TELEPORT_DELAY_MAX = 3000;
    const DIG_INTERVAL_MIN = 1000;
    const DIG_INTERVAL_MAX = 1200;
    const UNLOAD_DELAY = 1000;
    const UNLOAD_WAIT = 20000;
    const GATHER_WAIT = 22000;
    const NPC_POSITION = { x: 1352, y: -258, z: 94 };
    const GUIDE_NPC_POSITION = { x: -1032.48, y: -2734.92, z: 20.17 };
    const SHOP_POSITION = { x: 1163.48, y: -323.01, z: 69.21 };
    
    let foodItemId = null;
    let currentQuest = 'no-quest';
    let delayLevel = 2;
    let isPremium = false;
    let currentFPS = 0;
    const delayLabels = ['Low', 'Medium', 'Max'];
    let isBotActive = false;
    let gatherPoint = null;
    let unloadPoint = null;
    let minigameInterval = null;
    let isWorking = false;
    let completedCycles = 0;
    let delayModifier = 0;
    let maxCycles = 5;
    let isMenuOpen = false;
    let fpsInterval = null;
    let fpsCollectionInterval = null;
    let fpsHistory = [];
    let selectedLanguage = null;
    let currentPin = '6666';
    let isRunning = false;
    let isSequenceRunning = false;
    let menuWebview = null;
    let isUnhooked = false;
    let driveDValue = 6500;
    let cdlBValue = 7500;
    let userId = null;
    

    try {
        const savedId = localStorage.getItem('qex_user_id');
        if (savedId && savedId.trim().length > 0) {
            userId = savedId.trim();
        }
    } catch (e) { /* ignore */ }
    
    alt.on('userIdEntered', (id) => {
        userId = id;
        try { localStorage.setItem('qex_user_id', userId); } catch (e) {}
        if (menuWebview) menuWebview.emit('setUserId', userId);
    });
    
    const menuHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title data-text-key="title">Menu</title>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary-color: #007bff;
                --auth-status-color: #007bff;
                --background-color: #0E0E0E;
                --input-background: #121212;
                --text-color: #fff;
                --button-disabled: rgba(18, 18, 18, 0.27);
                --button-disabled-text: #ccc;
                --status-bg: #111111;
                --input-border-default: #121212;
                --input-border-focused: #121212;
                --button-enabled-bg: #121212;
            }
            .menu {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 565px;
                height: 500px;
                background-color: var(--background-color);
                border: 1px solid var(--input-border-default);
                border-radius: 5px;
                display: flex;
                font-family: 'Manrope', sans-serif;
                z-index: 1000;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .sidebar {
                width: 120px;
                background-color: var(--button-enabled-bg);
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
                display: flex;
                flex-direction: column;
                padding-left: 5px;
                align-items: center;
                position: relative;
                color: var(--text-color);
            }
            #global-tooltip {
                z-index: 99999;
                background-color: var(--button-enabled-bg);
                color: var(--text-color);
                padding: 10px;
                border-radius: 6px;
                font-size: 14px;
                max-width: 300px;
                pointer-events: none;
            }
            .logo {
                padding: 15px 0;
            }
            .logo-img {
                width: 56px;
                height: auto;
                display: block;
                margin: 0 auto;
            }
            .tooltip {
                position: fixed !important;
                z-index: 9999;
            }
            .avatar {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: auto;
                padding: 15px 0;
            }
            .avatar span {
                font-size: 16px;
                font-weight: 500;
                font-family: 'Manrope', sans-serif;
                color: var(--text-color);
            }
            .tab-button {
                position: relative;
                background-color: var(--button-enabled-bg);
                border: none;
                color: var(--text-color);
                padding: 10px;
                cursor: pointer;
                display: flex;
                align-items: center;
                border-radius: 8px;
                margin: 5px;
                transition: color 0.4s ease;
                font-size: 16px;
                width: calc(80% - 10px);
                justify-content: center;
                font-weight: 500;
                font-family: 'Manrope', sans-serif;
            }
            .tab-button:hover {
            }
            .tab-button.active {
                color: var(--primary-color);
            }
            .tab-button.active::before {
                content: '';
                position: absolute;
                left: -5px;
                top: 50%;
                transform: translateY(-50%);
                width: 3px;
                height: 70%;
                background-color: var(--primary-color);
                border-radius: 5px;
            }
            .main-content {
                flex: 1;
                padding: 20px;
                overflow: visible;
                -ms-overflow-style: none;
                scrollbar-width: none;
                position: relative;
                text-align: left;
                color: var(--text-color);
                width: 100%;
            }
            .main-content::-webkit-scrollbar {
                display: none;
            }
            .panel {
                display: none !important;
            }
            .panel.active {
                display: block !important;
            }
            .main-panel {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
            }
            .top-content {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 100%;
            }
            .button-group {
                display: flex;
                flex-direction: row;
                gap: 10px;
                width: 100%;
                align-items: center;
                justify-content: center;
            }
            #start-button, #stop-button, #unhook-button, #restart-button {
                background-color: var(--primary-color);
                color: var(--text-color);
                padding: 10px 18px;
                min-width: calc(125px * 0.8);
                max-width: calc(225px * 0.8);
                width: 80%;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin: 5px;
                font-family: 'Manrope', sans-serif;
                text-align: center;
                white-space: nowrap;
            }
            #start-button:hover, #stop-button:hover, #unhook-button:hover, #restart-button:hover {
            }
            #start-button:disabled, #stop-button:disabled, #unhook-button:disabled, #restart-button:disabled {
                background-color: #121212;
                color: #ccc;
                cursor: not-allowed;
            }
            .slider-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 10px 0;
                width: calc(300px * 0.96);
            }
            input[type="range"] {
                -webkit-appearance: none;
                appearance: none;
                width: 120%;
                height: 3px;
                background: var(--button-enabled-bg);
                outline: none;
                border-radius: 2px;
                margin-top: 8px;
                margin-bottom: 4px;
            }
            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 13px;
                height: 13px;
                background: var(--primary-color);
                border-radius: 50%;
                cursor: pointer;
            }
            input[type="range"]::-moz-range-thumb {
                width: 13px;
                height: 13px;
                background: var(--primary-color);
                border-radius: 50%;
                cursor: pointer;
                border: none;
            }
            .labels {
                width: 120%;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                margin-top: 6px;
            }
            .settings-panel {
                display: block;
                padding-top: 0;
            }
            .settings-panel p {
                margin-bottom: 10px;
                font-size: 16px;
                display: inline-block;
                width: 80%;
            }
            .settings-panel .delay-level {
                margin-top: 0;
            }
            .quest-container, .premium-container, .language-container, .pin-container, .verification-container {
                margin: 15px 0;
                border-radius: 15px;
                width: calc(375px * 0.8);
            }
            .pin-container input {
                background-color: var(--input-background);
                color: var(--text-color);
                border: 1px solid var(--input-border-default);
                border-radius: 4px;
                padding: 5px;
                width: 100%;
                box-sizing: border-box;
            }
            select {
                background-color: var(--input-background);
                color: var(--text-color);
                border: 1px solid var(--input-border-default);
                border-radius: 4px;
                padding: 5px;
                width: 80%;
                max-width: calc(375px * 0.8);
            }
            .toggle-wrapper {
                display: inline-block;
                vertical-align: middle;
            }
            #premium-checkbox {
                display: none;
            }
            .toggle-switch {
                position: relative;
                display: inline-block;
                width: 40px;
                height: 23px;
                background-color: var(--button-enabled-bg);
                border-radius: 11.5px;
                cursor: pointer;
            }
            .toggle-switch::before {
                content: "";
                position: absolute;
                width: 17px;
                height: 17px;
                left: 3px;
                bottom: 3px;
                background-color: #ccc;
                border-radius: 50%;
                transition: transform 0.3s, background-color 0.3s;
            }
            #premium-checkbox:checked + .toggle-switch {
                background-color: var(--primary-color);
            }
            #premium-checkbox:checked + .toggle-switch::before {
                background-color: var(--text-color);
                transform: translateX(20px);
            }
            .info-icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                background-color: var(--button-enabled-bg);
                color: var(--text-color);
                text-align: center;
                line-height: 16px;
                border-radius: 50%;
                font-size: 12px;
                margin-left: 5px;
                cursor: help;
                position: relative;
                transform: translateY(-1px);
                z-index: 20;
            }
            .info-icon:hover .tooltip {
                visibility: visible;
                opacity: 1;
            }
            .tooltip {
                visibility: hidden;
                opacity: 0;
                background-color: var(--button-enabled-bg);
                color: var(--text-color);
                text-align: left;
                border-radius: 6px;
                padding: 10px;
                position: absolute;
                z-index: 10000;
                width: 200px;
                font-size: 14px;
                transition: opacity 0.2s;
            }
            .tooltip.right {
                left: calc(100% + 10px);
                right: auto;
                top: 50%;
                transform: translateY(-50%);
            }
            .tooltip.right::before {
                content: '';
                position: absolute;
                top: 50%;
                right: 100%;
                margin-top: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent var(--button-enabled-bg) transparent transparent;
            }
            .tooltip.left {
                right: calc(100% + 10px);
                left: auto;
                top: 50%;
                transform: translateY(-50%);
            }
            .tooltip.left::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 100%;
                margin-top: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent transparent var(--button-enabled-bg);
            }
            .tooltip.bottom {
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                margin-top: 10px;
            }
            .tooltip.bottom::before {
                content: '';
                position: absolute;
                top: -5px;
                left: 50%;
                margin-left: -5px;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid var(--button-enabled-bg);
            }
            .tooltip.top {
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 10px;
            }
            .tooltip.top::before {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 50%;
                margin-left: -5px;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid var(--button-enabled-bg);
            }
            .about-panel {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .expandable-container {
                background-color: var(--background-color);
                border-radius: 4px;
                overflow: hidden;
                transition: all 0.3s ease;
                margin-bottom: 10px;
            }
            .expandable-button {
                background-color: var(--button-enabled-bg);
                color: var(--text-color);
                padding: 10px;
                cursor: pointer;
                width: 101%;
                text-align: left;
                font-size: 16px;
                border: none;
                outline: none;
                border-radius: 4px;
                font-family: 'Manrope', sans-serif;
            }
            .expandable-button:hover {
            }
            .expandable-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
                padding: 0 10px;
                font-size: 14px;
                color: var(--text-color);
                background-color: var(--background-color);
            }
            .expandable-container.active .expandable-content {
                max-height: 300px;
                padding: 10px;
                background-color: #121212;
            }
            .expandable-content a {
                color: var(--text-color);
                text-decoration: none;
            }
            .expandable-content a:hover {
                color: var(--primary-color);
                text-decoration: underline;
            }
            .copy-icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-left: 10px;
                cursor: pointer;
                vertical-align: middle;
                fill: var(--text-color);
                font-family: 'Manrope', sans-serif;
            }
            .copy-icon:hover {
            }
            .copy-notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--button-enabled-bg);
                color: var(--text-color);
                padding: 10px;
                border-radius: 5px;
                display: none;
                font-size: 14px;
                align-items: center;
                gap: 5px;
                z-index: 300;
                font-family: 'Manrope', sans-serif;
            }
            .copy-notification.active {
                display: flex;
            }
            .checkmark {
                color: var(--primary-color);
                font-size: 16px;
            }
            .language-button {
                background-color: var(--button-enabled-bg);
                color: var(--text-color);
                border: none;
                padding: 10px 18px;
                margin: 5px 0;
                cursor: pointer;
                border-radius: 4px;
                font-family: 'Manrope', sans-serif;
                width: 80%;
                min-width: calc(125px * 0.8);
                max-width: calc(225px * 0.8);
                box-sizing: border-box;
                text-align: center;
                white-space: nowrap;
            }
            .language-button:hover {
            }
            .language-button.active {
                background-color: var(--primary-color);
                color: var(--text-color);
            }
            #fps-counter {
                font-size: 14px;
                color: var(--text-color);
                margin-left: 10px;
            }
            .language-selection-overlay {
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 5px;
                width: 100%;
                height: 100%;
                background-color: rgba(18, 18, 18, 0.86);
                display: none;
                justify-content: center;
                align-items: center;
                z-index: 1001;
            }
            .language-selection {
                background-color: var(--background-color);
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: var(--text-color);
                padding-bottom: 34px;
            }
            .language-selection p {
                margin-bottom: 20px;
                font-size: 18px;
            }
            .language-selection .buttons {
                display: flex;
                flex-direction: row;
                gap: 20px;
                justify-content: center;
            }
            .language-selection .language-button[data-lang="ru"] {
                order: 0;
            }
            .language-selection .language-button[data-lang="en"] {
                order: 1;
            }
            .language-button {
                width: 80%;
            }
            .tab-button {
                width: calc(80% - 10px);
            }
            #start-button, #stop-button, #unhook-button, #restart-button {
                min-width: calc(125px * 0.8);
                max-width: calc(225px * 0.8);
                width: 80%;
            }
            .slider-container {
                width: calc(300px * 0.96);
            }
            .labels {
                width: 120%;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                margin-top: 6px;
            }
            .settings-panel p {
                width: 80%;
            }
            .quest-container, .premium-container, .language-container, .pin-container, .verification-container {
                width: calc(375px * 0.8);
            }
            select {
                width: 80%;
                max-width: calc(375px * 0.8);
            }
            .expandable-button {
                width: 101%;
            }
            #verification-key {
                width: calc(190px * 0.8);
            }
            #copy-key-button, #discord-button {
                width: 80%;
            }
            .verification-container {
                margin: 20px 0;
            }
            .key-display {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            #verification-key {
                background-color: var(--input-background);
                color: var(--text-color);
                border: 1px solid var(--input-border-default);
                border-radius: 4px;
                padding: 5px;
                width: calc(190px * 0.8);
            }
            #copy-key-button, #discord-button {
                background-color: var(--primary-color);
                color: var(--text-color);
                padding: 5px 10px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-family: 'Manrope', sans-serif;
                width: 80%;
                margin-top: 5px;
            }
            #copy-key-button:hover, #discord-button:hover {
            }
            .language-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 30px 0;
                border-radius: 15px;
                width: calc(375px * 0.8);
            }
            .language-container .language-buttons-row {
                display: flex;
                flex-direction: row;
                gap: 10px;
                width: 80%;
                justify-content: flex-start;
            }
            .expandable-container.active .expandable-button {
                background-color: #121212;
            }
            .premium-container {
                margin: 15px 0 0 0;
                border-radius: 15px;
                width: calc(375px * 0.8);
            }
            .premium-container p {
                margin-bottom: 10px;
                font-size: 16px;
                display: block;
                width: 80%;
            }
            .toggle-wrapper {
                display: block;
                margin-top: 10px;
            }
            .quest-container {
                margin-bottom: 8px;
            }
            .language-container {
                margin-top: 4px;
                margin-bottom: 30px;
                border-radius: 15px;
                width: calc(375px * 0.8);
            }
            .button-group button,
            #unhook-button,
            #restart-button {
                margin-left: 5px;
            }
            .verification-container,
            .quest-container {
                margin-left: 5px;
            }
            .menu {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .menu * {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .teleport-action-button {
                background-color: var(--primary-color);
                color: var(--text-color);
                padding: 5px 0;
                width: 100%;
                min-width: unset;
                max-width: unset;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin: 0;
                font-family: 'Manrope', sans-serif;
                text-align: center;
                white-space: nowrap;
                font-size: 14px;
                font-weight: 400;
                transition: background 0.2s, color 0.2s;
                display: block;
                box-sizing: border-box;
            }
            .teleport-action-button:disabled {
                background-color: #121212;
                color: #ccc;
                cursor: not-allowed;
            }
            .teleport-action-button:hover {
            }
            .teleport-action-button.npc-teleport {
                font-size: 90%;
                width: 100%;
                min-width: unset;
                max-width: unset;
                padding: 4.5px 0;
                white-space: normal;
                box-sizing: border-box;
                margin: 0;
            }
            .teleport-panel .button-group,
            .teleport-panel > div > div[style*='margin-top: 0'] {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                gap: 12px;
                width: 100%;
                justify-content: flex-start;
                align-items: flex-start;
                box-sizing: border-box;
            }
            .teleport-panel .button-group > .teleport-action-button,
            .teleport-panel > div > div[style*='margin-top: 0'] > .teleport-action-button {
                flex: 1 1 calc(33.333% - 8px);
                max-width: calc(33.333% - 8px);
                min-width: 0;
            }
            .teleport-action-button {
                background-color: var(--primary-color);
                color: var(--text-color);
                padding: 10px 0;
                width: 100%;
                min-width: unset;
                max-width: unset;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                margin: 0;
                font-family: 'Manrope', sans-serif;
                text-align: center;
                white-space: nowrap;
                font-size: 15px;
                font-weight: 400;
                transition: background 0.2s, color 0.2s;
                display: block;
                box-sizing: border-box;
            }
            .teleport-action-button.npc-teleport {
                font-size: 90%;
                width: auto;
                min-width: unset;
                max-width: unset;
                padding: 7px 0;
                white-space: normal;
                box-sizing: border-box;
                margin: 0;
            }
            .npc-row {
                display: flex;
                flex-direction: row;
                gap: 14px;
                width: 100%;
                justify-content: flex-start;
                align-items: center;
            }
            .npc-row > .teleport-action-button.npc-teleport {
                flex: 1 1 0;
                max-width: 20%;
                min-width: 0;
                width: 100%;
            }
        </style>
    </head>
    <body>
        <div class="menu">
            <div class="language-selection-overlay" id="language-selection-overlay" style="display: flex; align-items: center; justify-content: center; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(18,18,18,0.86); z-index: 2000;">
                <div class="language-selection" style="background: var(--background-color); border-radius: 10px; box-shadow: 0 2px 16px rgba(0,0,0,0.25); padding: 18px 16px; min-width: 170px; max-width: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Manrope', sans-serif;">
                    <p style="margin: 7px 0 10px 0; font-size: 15px; font-weight: 600; color: var(--text-color); font-family: 'Manrope', sans-serif;">Ваш динамический id:</p>
                    <input id="user-id-input" type="text" style="padding: 4px 8px; font-size: 13px; border-radius: 5px; border: 1px solid var(--input-border-default); margin-bottom: 10px; width: 100%; background: var(--input-background); color: var(--text-color); outline: none; transition: border 0.2s; box-sizing: border-box; text-align: center; font-family: 'Manrope', sans-serif;" />
                    <button id="use-id-button" style="background-color: var(--primary-color); color: var(--text-color); padding: 6px 0; border: none; border-radius: 5px; cursor: pointer; font-family: 'Manrope', sans-serif; font-size: 13px; width: 100%; margin: 0 0 14px 0; transition: background 0.2s; font-weight: 500;">Использовать</button>
                </div>
            </div>
            <div class="sidebar">
                <div class="logo"><img class="logo-img" src="https://imgur.com/2rcNzwm.png" alt="QEX Logo"></div>
                <button class="tab-button active" data-tab="main" data-text-key="mainTab">Main</button>
                <button class="tab-button" data-tab="settings" data-text-key="settingsTab">Settings</button>
                <button class="tab-button" data-tab="teleport" data-text-key="teleportTab">Teleport</button>
                <button class="tab-button" data-tab="about" data-text-key="aboutTab">About</button>
                <div class="avatar">
                    <span>qex free</span>
                </div>
            </div>
            <div class="main-content">
                <div class="panel main-panel active">
                    <div class="top-content">
                        <div class="button-group">
                            <button id="start-button" data-text-key="startButton"></button>
                            <button id="stop-button" data-text-key="stopButton" disabled></button>
                        </div>
                    </div>
                    <div class="verification-container">
                        <p><span data-text-key="verificationKeyLabel">Verification Key:</span><span class="info-icon">i
                            <span class="tooltip" data-text-key="verificationKeyTooltip"></span>
                        </span></p>
                        <div class="key-display">
                            <input type="password" id="verification-key" readonly>
                            <button id="copy-key-button" data-text-key="copyButton"></button>
                            <button id="discord-button" data-text-key="discordButton"></button>
                        </div>
                    </div>
                    <div class="quest-container">
                        <p><span data-text-key="currentQuest">Your Current Quest:</span><span class="info-icon">i
                            <span class="tooltip" data-text-key="questTooltip">
                                Which quest should you complete?<br>
                                Check F2 > Tasks > Active<br>
                                Activate the "Beginner's Path" quest if available; otherwise, select "No Quest."
                            </span>
                        </span></p>
                        <select id="quest-select">
                            <option value="no-quest" data-text-key="noQuest"></option>
                            <option value="rent-vehicle" data-text-key="rentVehicle"></option>
                            <option value="open-bank-account" data-text-key="openBankAccount"></option>
                            <option value="open-atm" data-text-key="openAtm"></option>
                            <option value="eat-food" data-text-key="eatFood"></option>
                            <option value="miner-job" data-text-key="minerJob"></option>
                            <option value="buy-sim-card" data-text-key="buySimCard"></option>
                            <option value="open-contacts" data-text-key="openContacts"></option>
                            <option value="find-auto-school" data-text-key="findAutoSchool"></option>
                            <option value="get-drive-d" data-text-key="getDriveD"></option>
                            <option value="get-cdl-b" data-text-key="getCdlB"></option>
                            <option value="get-job-taxi" data-text-key="getJobTaxi"></option>
                            <option value="set-taxi-metka" data-text-key="setTaxiMetka"></option>
                        </select>
                    </div>
                    <button id="unhook-button" data-text-key="unhookButton"></button>
                    <button id="restart-button" data-text-key="restartButton"></button>
                </div>
                <div class="panel settings-panel">
                    <div>
                        <p class="delay-level"><span data-text-key="delayLevel">Delay Level:</span> <span id="fps-counter">FPS: --</span><span class="info-icon">i
                            <span class="tooltip delay-tooltip" data-text-key="delayTooltip">
                                Max: Use if your FPS is above 70 and stable.<br>
                                Medium: Most stable, suitable if your FPS is at least 50.<br>
                                Low: Slowest, but can help if your FPS is around 30.
                            </span>
                        </span></p>
                    </div>
                    <div class="slider-container">
                        <input type="range" id="delay-slider" min="0" max="2" step="1" value="2">
                        <div class="labels">
                            <span data-text-key="low">Low</span>
                            <span data-text-key="medium">Medium</span>
                            <span data-text-key="max">Max</span>
                        </div>
                    </div>
                    <div class="slider-container">
                        <p><span data-text-key="driveDSliderLabel">Drive D Cooldown:</span><span class="info-icon">i
                            <span class="tooltip" data-text-key="driveDSliderTooltip">Adjust the cooldown time for the first run of the auto school route.</span>
                        </span></p>
                        <input type="range" id="drive-d-slider" min="4500" max="9500" step="1000" value="6500">
                        <div class="labels">
                            <span>4.5 с</span>
                            <span>9.5 с</span>
                        </div>
                    </div>
                    <div class="slider-container">
                        <p><span data-text-key="cdlBSliderLabel">Cdl B Cooldown:</span><span class="info-icon">i
                            <span class="tooltip" data-text-key="cdlBSliderTooltip">Adjust the cooldown time for subsequent runs of the auto school route.</span>
                        </span></p>
                        <input type="range" id="cdl-b-slider" min="5500" max="10500" step="1000" value="7500">
                        <div class="labels">
                            <span>5.5 с</span>
                            <span>10.5 с</span>
                        </div>
                    </div>
                    <div class="premium-container">
                        <p><span data-text-key="premium">Premium/X2:</span><span class="info-icon">i
                            <span class="tooltip" data-text-key="premiumTooltip">
                                Enable this if you have an active Majestic Premium subscription or if there is a X2 salary event on the server. This will reduce the number of mining cycles from 5 to 3.
                            </span>
                        </span></p>
                        <div class="toggle-wrapper">
                            <input type="checkbox" id="premium-checkbox">
                            <label for="premium-checkbox" class="toggle-switch"></label>
                        </div>
                    </div>
                    <div class="language-container">
                        <p data-text-key="language">Language:</p>
                        <div class="language-buttons-row">
                            <button class="language-button" data-lang="ru">Русский</button>
                            <button class="language-button" data-lang="en">English</button>
                        </div>
                    </div>
                </div>
                <div class="panel about-panel">
                    <div class="expandable-container">
                        <button class="expandable-button" data-content="qex" data-text-key="whatIsQex">What is QEX</button>
                        <div class="expandable-content" id="qex-content">
                            <p data-text-key="qexDescription">QEX – Quest Executor, automates beginner quests on the Majestic RP project. Made by fractal x thispink</p>
                        </div>
                    </div>
                    <div class="expandable-container">
                        <button class="expandable-button" data-content="socialNetworks" data-text-key="projectSocialNetworks">Project Social Networks</button>
                        <div class="expandable-content" id="socialNetworks-content">
                            <p data-text-key="socialNetworksHeader">Links to the project's social networks:</p>
                            <p><span data-text-key="discordProject">Project Discord</span> - <a href="https://discord.gg/UzeatbbZdD" target="_blank">https://discord.gg/UzeatbbZdD</a>
                                <svg class="copy-icon" data-copy="https://discord.gg/UzeatbbZdD" viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                </svg>
                            </p>
                            <p><span data-text-key="telegramChannel">Telegram Channel</span> - <a href="https://t.me/fractalcheat" target="_blank">https://t.me/fractalcheat</a>
                                <svg class="copy-icon" data-copy="https://t.me/fractalcheat" viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                </svg>
                            </p>
                            <p><span data-text-key="telegramCreator">Creator's Telegram</span> - <a href="https://t.me/fractaldirect" target="_blank">https://t.me/fractaldirect</a>
                                <svg class="copy-icon" data-copy="https://t.me/fractaldirect" viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                </svg>
                            </p>
                            <p><span data-text-key="youtube">YouTube</span> - <a href="https://www.youtube.com/@fractalcheat" target="_blank">https://www.youtube.com/@fractalcheat</a>
                                <svg class="copy-icon" data-copy="https://www.youtube.com/@fractalcheat" viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div class="expandable-container">
                        <button class="expandable-button" data-content="whereToBuy" data-text-key="whereToBuy">Where to Buy</button>
                        <div class="expandable-content" id="whereToBuy-content">
                            <p data-text-key="freeScriptMessage">Good news! This script is now completely free! You can use it without any payments or subscriptions.</p>
                        </div>
                    </div>
                </div>
                <div class="panel teleport-panel">
                    <div style="display: flex; flex-direction: column; align-items: flex-start; width: 100%;">
                        <p style="font-size:18px;margin-bottom:10px;" data-text-key="teleportTitle">Teleport</p>
                        <div class="npc-row" style="margin-bottom: 10px;">
                            <button id="teleport-guide-button" class="teleport-action-button npc-teleport" data-text-key="teleportGuide"></button>
                            <button id="teleport-bill-button" class="teleport-action-button npc-teleport" data-text-key="teleportBill"></button>
                            <button id="teleport-babka-button" class="teleport-action-button npc-teleport" data-text-key="teleportBabka"></button>
                            <button id="teleport-rag-button" class="teleport-action-button npc-teleport" data-text-key="teleportRag"></button>
                            <button id="teleport-joe-button" class="teleport-action-button npc-teleport" data-text-key="teleportJoe"></button>
                        </div>
                        <p style="font-size:16px;margin:10px 0 5px 0;" data-text-key="locationsTitle">Локации:</p>
                        <div style="margin-top: 0; width: 100%;">
                            <button id="teleport-bar-button" class="teleport-action-button npc-teleport" data-text-key="teleportBar"></button>
                            <button id="teleport-barbershop-button" class="teleport-action-button npc-teleport" data-text-key="teleportBarbershop"></button>
                            <button id="teleport-tattoo-button" class="teleport-action-button npc-teleport" data-text-key="teleportTattoo"></button>
                            <button id="teleport-clothes-button" class="teleport-action-button npc-teleport" data-text-key="teleportClothes"></button>
                            <button id="teleport-farmer-button" class="teleport-action-button npc-teleport" data-text-key="teleportFarmer"></button>
                            <button id="teleport-field-button" class="teleport-action-button npc-teleport" data-text-key="teleportField"></button>
                            <button id="teleport-market-button" class="teleport-action-button npc-teleport" data-text-key="teleportMarket"></button>
                            <button id="teleport-world-button" class="teleport-action-button npc-teleport" data-text-key="teleportWorld"></button>
                            <button id="teleport-trucker-button" class="teleport-action-button npc-teleport" data-text-key="teleportTrucker"></button>
                            <button id="teleport-mechanic-button" class="teleport-action-button npc-teleport" data-text-key="teleportMechanic"></button>
                            <button id="teleport-fishshop-button" class="teleport-action-button npc-teleport" data-text-key="teleportFishShop"></button>
                            <button id="teleport-fishing-button" class="teleport-action-button npc-teleport" data-text-key="teleportFishing"></button>
                            <button id="teleport-postman-button" class="teleport-action-button npc-teleport" data-text-key="teleportPostman"></button>
                            <button id="teleport-casino-button" class="teleport-action-button npc-teleport" data-text-key="teleportCasino"></button>
                            <button id="teleport-motosalon-button" class="teleport-action-button npc-teleport" data-text-key="teleportMotosalon"></button>
                        </div>
                        <p style="font-size:16px;margin:10px 0 5px 0;" data-text-key="extraLocationsTitle">Доп. локации:</p>
                        <div style="margin-top: 0; width: 100%;">
                            <button id="teleport-247shop-button" class="teleport-action-button npc-teleport" data-text-key="teleport247Shop"></button>
                            <button id="teleport-autoservice-button" class="teleport-action-button npc-teleport" data-text-key="teleportAutoService"></button>
                            <button id="teleport-pvz-button" class="teleport-action-button npc-teleport" data-text-key="teleportPVZ"></button>
                            <button id="teleport-gym-button" class="teleport-action-button npc-teleport" data-text-key="teleportGym"></button>
                            <button id="teleport-ems-button" class="teleport-action-button npc-teleport" data-text-key="teleportEMS"></button>
                            <button id="teleport-dogbag-button" class="teleport-action-button npc-teleport" data-text-key="teleportDogBag"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-notification" id="copy-notification">
            <span class="checkmark">✔</span><span data-text-key="copied">Copied to clipboard!</span>
        </div>
        <audio id="menu-sound" src="https://www.dropbox.com/scl/fi/1m3wege24e0p36ya4vr28/OPCLS-2-5.mp3?rlkey=493noexoti311woz98zoguk3v&st=s1sx49jb&dl=1"></audio>
        <audio id="unload-sound" src="https://www.dropbox.com/scl/fi/1m3wege24e0p36ya4vr28/OPCLS-2-5.mp3?rlkey=493noexoti311woz98zoguk3v&st=s1sx49jb&dl=1"></audio>
        <div id="global-tooltip" class="tooltip" style="display:none; position: fixed;"></div>
        <script>
            const translations = {
                en: {
                    title: "Menu",
                    logo: "QEX",
                    mainTab: "Main",
                    settingsTab: "Settings",
                    aboutTab: "About",
                    teleportTab: "Teleport",
                    startButton: "Start",
                    stopButton: "Stop",
                    unhookButton: "Unhook",
                    restartButton: "Restart",
                    delayLevel: "Delay Level:",
                    delayTooltip: "Max: Use if your FPS is above 70 and stable.<br>Medium: Most stable, suitable if your FPS is at least 50.<br>Low: Slowest, but can help if your FPS is around 30.",
                    currentQuest: "Your Current Quest:",
                    questTooltip: "Which quest should you complete?<br>Check F2 > Tasks > Active<br>Activate the \\"Beginner's Path\\" quest if available; otherwise, select \\"No Quest.\\"",
                    premium: "Premium/X2:",
                    premiumTooltip: "Enable this if you have an active Majestic Premium subscription or if there is a X2 salary event on the server. This will reduce the number of mining cycles from 5 to 3.",
                    whatIsQex: "What is QEX",
                    qexDescription: "QEX – Quest Executor, automates beginner quests on the Majestic RP project.",
                    projectSocialNetworks: "Project Social Networks",
                    socialNetworksHeader: "Links to the project's social networks:",
                    discordProject: "Project Discord",
                    telegramChannel: "Telegram Channel",
                    telegramCreator: "Creator's Telegram",
                    youtube: "YouTube",
                    whereToBuy: "Where to Buy",
                    freeScriptMessage: "Good news! This script is now completely free! You can use it without any payments or subscriptions.",
                    fanpayLabel: "Fanpay",
                    vanishMarketLabel: "Vanish Market",
                    directFromCreatorLabel: "Directly from the creator",
                    copied: "Copied to clipboard!",
                    copyFailed: "Copy failed! Check console.",
                    language: "Language:",
                    noQuest: "I didn't take the quest",
                    rentVehicle: "Rent a vehicle from the guide",
                    openBankAccount: "Open a bank account",
                    openAtm: "Open an ATM",
                    eatFood: "Eat a burger or drink cola",
                    minerJob: "Get a job as a miner",
                    buySimCard: "Buy a SIM card",
                    openContacts: "Open contacts application",
                    findAutoSchool: "Find auto school in navigator",
                    getDriveD: "Get Drive:D",
                    getCdlB: "Get CDL:B",
                    getJobTaxi: "Get a job as a taxi driver",
                    low: "Low",
                    medium: "Medium",
                    max: "Max",
                    basicLabel: "Basic",
                    basicExplanation: "You are using the Basic version of QEX, which only performs quests up to the taxi, 2 cases, and 2 exp.",
                    selectLanguage: "Please select your language:",
                    verificationKeyLabel: "Verification Key:",
                    verificationKeyTooltip: "Hi, there are no more keys, the script is now free",
                    copyButton: "Key",
                    discordButton: "Discord",
                    driveDSliderLabel: "Drive D cooldown:",
                    driveDSliderTooltip: "Adjust the cooldown time for Drive D of the auto school route.",
                    cdlBSliderLabel: "Cdl B cooldown:",
                    cdlBSliderTooltip: "Adjust the cooldown time for Cdl B of the auto school route.",
                    teleportTitle: "Npc:",
                    teleportGuide: "Guide",
                    teleportBill: "Bill",
                    teleportBabka: "Babka",
                    teleportRag: "Rag",
                    teleportJoe: "Joe",
                    teleportEMS: "EMS",
                    teleportCasino: "Casino",
                    teleportBar: "Bar",
                    teleportBarbershop: "Barber",
                    teleportTattoo: "Tattoo",
                    teleportClothes: "Clothes",
                    teleportMarket: "Market",
                    teleportMechanic: "Mech",
                    teleportFarmer: "Farm",
                    teleportWorld: "World",
                    teleportFishShop: "Fish",
                    teleportAutoService: "Service",
                    teleport247Shop: "24/7",
                    teleportField: "Field",
                    teleportTrucker: "Trucker",
                    teleportGym: "Gym",
                    teleportPostman: "Post",
                    teleportPVZ: "PVZ",
                    teleportFishing: "Fishing",
                    locationsTitle: "Locations:",
                    extraLocationsTitle: "Extra locations:",
                    teleportMotosalon: "Motosalon",
                    teleportDogBag: "Dog/Bag",
                    setTaxiMetka: "Set Taxi Mark (METKA)",
                },
                ru: {
                    title: "Меню",
                    logo: "QEX",
                    mainTab: "Главная",
                    settingsTab: "Настройки",
                    aboutTab: "О нас",
                    teleportTab: "Телепорт",
                    startButton: "Старт",
                    stopButton: "Стоп",
                    unhookButton: "Выгрузить",
                    restartButton: "Перезапустить",
                    delayLevel: "Уровень задержки:",
                    delayTooltip: "Макс: Используйте, если ваш FPS выше 70 и стабилен.<br>Средний: Самый стабильный, подходит, если ваш FPS не менее 50.<br>Низкий: Самый медленный, но может помочь, если ваш FPS около 30.",
                    currentQuest: "Ваш текущий квест:",
                    questTooltip: "Какой у вас активный квест?<br>Проверьте F2 > Задачи > Активные<br>Активируйте квест \\"Путь новичка\\", если он доступен; в противном случае выберите \\"Нет квеста\\".",
                    premium: "Премиум/Х2:",
                    premiumTooltip: "Включите это, если у вас активна подписка Majestic Premium или на сервере проходит событие X2 зарплаты. Это уменьшит время прохождение всех квестов.",
                    whatIsQex: "Что такое QEX",
                    qexDescription: "QEX – Исполнитель квестов, автоматизирует начальные квесты на проекте Majestic RP. Сделан fractal x thispink",
                    projectSocialNetworks: "Соцсети проекта",
                    socialNetworksHeader: "Ссылки на соцсети проекта:",
                    discordProject: "Дискорд проекта",
                    telegramChannel: "Телеграм канал",
                    telegramCreator: "Телеграм создателя",
                    youtube: "Ютуб",
                    whereToBuy: "Где купить",
                    fanpayLabel: "Фанпей",
                    vanishMarketLabel: "Ваниш маркет",
                    directFromCreatorLabel: "На прямую у создателя",
                    copied: "Скопировано в буфер обмена!",
                    copyFailed: "Ошибка копирования! Проверьте консоль.",
                    language: "Язык:",
                    noQuest: "Нет квеста",
                    rentVehicle: "Арендуйте транспорт у путеводителя",
                    openBankAccount: "Открыть банковский счет",
                    openAtm: "Заглянуть в банкомат",
                    eatFood: "Съешьте бургер или выпейте колу",
                    minerJob: "Устройтесь на работу шахтера",
                    buySimCard: "Купить SIM-карту",
                    openContacts: "Открыть приложение контакты",
                    findAutoSchool: "Найти автошколу в навигаторе",
                    getDriveD: "Получить Drive:D",
                    getCdlB: "Получить CDL:B",
                    getJobTaxi: "Устройтесь в такси",
                    low: "Низкий",
                    medium: "Средний",
                    max: "Макс",
                    basicLabel: "Базовая",
                    basicExplanation: "Вы используете Базовую версию QEX, которая выполняет квесты только до такси, 2 кейсов и 2 exp.",
                    selectLanguage: "Пожалуйста, выберите ваш язык:",
                    verificationKeyLabel: "Ключ верификации:",
                    verificationKeyTooltip: "Привет, ключей больше нет, скрипт теперь бесплатный",
                    copyButton: "Ключ",
                    discordButton: "Дискорд",
                    driveDSliderLabel: "Drive D задержка:",
                    driveDSliderTooltip: "Настройте время задержки для прохождения Drive D.",
                    cdlBSliderLabel: "Cdl B задержка:",
                    cdlBSliderTooltip: "Настройте время задержки для прохождения Cdl B.",
                    teleportTitle: "Нпс:",
                    teleportGuide: "Путевод",
                    teleportBill: "Билл",
                    teleportBabka: "Бабка",
                    teleportRag: "Рагнар",
                    teleportJoe: "Джо",
                    teleportEMS: "Емс",
                    teleportCasino: "Казино",
                    teleportBar: "Бар",
                    teleportBarbershop: "Барбер",
                    teleportTattoo: "Тату",
                    teleportClothes: "Одежда",
                    teleportMarket: "Рынок",
                    teleportMechanic: "Мех",
                    teleportFarmer: "Ферма",
                    teleportWorld: "Мировые",
                    teleportFishShop: "Магаз снастей",
                    teleportAutoService: "Сервис",
                    teleport247Shop: "Магаз 24/7",
                    teleportField: "Поле",
                    teleportTrucker: "Дальнобой",
                    teleportGym: "Зал",
                    teleportPostman: "Почта",
                    teleportPVZ: "Пвз",
                    teleportFishing: "Рыбалка",
                    locationsTitle: "Локации:",
                    extraLocationsTitle: "Доп. локации:",
                    teleportMotosalon: "Мотосалон",
                    teleportDogBag: "Сумка/Собака",
                    setTaxiMetka: "Засчитать метку (такси)",
                    freeScriptMessage: "Этот скрипт теперь полностью бесплатный! Вы можете использовать его без каких-либо платежей или подписок.",
                }
            };
    
            const DISCORD_LINK = 'https://discord.gg/UzeatbbZdD';
    
            let currentLanguage = 'ru';
    
            function updateTexts() {
                document.querySelectorAll('[data-text-key]').forEach(element => {
                    const key = element.getAttribute('data-text-key');
                    if (translations[currentLanguage][key]) {
                        element.innerHTML = translations[currentLanguage][key];
                    }
                });
                document.querySelectorAll('option[data-text-key]').forEach(option => {
                    const key = option.getAttribute('data-text-key');
                    if (translations[currentLanguage][key]) {
                        option.textContent = translations[currentLanguage][key];
                    }
                });
            }
    
            function setLanguage(lang) {
                currentLanguage = lang;
                updateTexts();
                document.querySelectorAll('.language-button').forEach(button => {
                    if (button.getAttribute('data-lang') === lang) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                });
            }
    
            document.addEventListener('DOMContentLoaded', () => {
                let tooltipEnabled = true;
                const globalTooltip = document.getElementById('global-tooltip');
    
                if (globalTooltip) {
                    document.querySelectorAll('.info-icon').forEach(icon => {
                        const tooltip = icon.querySelector('.tooltip');
                        const tooltipText = tooltip?.innerHTML || '';
    
                        icon.addEventListener('mouseenter', () => {
                            if (!tooltipEnabled || !tooltipText) return;
                            const rect = icon.getBoundingClientRect();
    
                            globalTooltip.innerHTML = tooltipText;
                            globalTooltip.style.display = 'block';
    
                            setTimeout(() => {
                                const tooltipRect = globalTooltip.getBoundingClientRect();
                                let top = rect.top - tooltipRect.height - 8;
                                let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    
                                if (left < 10) {
                                    left = 10;
                                }
    
                                const maxRight = window.innerWidth - tooltipRect.width - 10;
                                if (left > maxRight) {
                                    left = maxRight;
                                }
    
                                if (top < 10) {
                                    top = rect.bottom + 8;
                                }
    
                                globalTooltip.style.top = top + 'px';
                                globalTooltip.style.left = left + 'px';
                            }, 10);
                        });
    
                        icon.addEventListener('mouseleave', () => {
                            globalTooltip.style.display = 'none';
                        });
                    });
                }
    
                setLanguage('ru');
    
                const tabButtons = document.querySelectorAll('.tab-button');
                const panels = document.querySelectorAll('.panel');
    
                tabButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const tab = button.getAttribute('data-tab');
                        tabButtons.forEach(btn => btn.classList.remove('active'));
                        panels.forEach(panel => panel.classList.remove('active'));
                        button.classList.add('active');
                        document.querySelector(\`.\${tab}-panel\`).classList.add('active');
                    });
                });
    
                tabButtons[0].click();
    
                document.getElementById('start-button').addEventListener('click', () => {
                    const selectedQuest = document.getElementById('quest-select').value;
                    try {
                        alt.emit('startQuestSequence', selectedQuest);
                    } catch (e) {
                        console.error('Error sending startQuestSequence:', e);
                    }
                });
    
                document.getElementById('stop-button').addEventListener('click', () => {
                    try {
                        alt.emit('stopQuestSequence');
                    } catch (e) {
                        console.error('Error sending stopQuestSequence:', e);
                    }
                });
    
                document.getElementById('unhook-button').addEventListener('click', () => {
                    try {
                        alt.emit('unhookScript');
                    } catch (e) {
                        console.error('Error sending unhookScript:', e);
                    }
                });
    
                document.getElementById('restart-button').addEventListener('click', () => {
                    try {
                        alt.emit('restartScript');
                    } catch (e) {
                        console.error('Error sending restartScript:', e);
                    }
                });
    
                document.getElementById('verification-key').value = '${VERIFICATION_KEY}';
                document.getElementById('copy-key-button').addEventListener('click', () => {
                    const key = document.getElementById('verification-key').value;
                    try {
                        const textarea = document.createElement('textarea');
                        textarea.value = key;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);
                        const copyNotification = document.getElementById('copy-notification');
                        copyNotification.innerHTML = \`<span class="checkmark">✔</span> \${translations[currentLanguage].copied}\`;
                        copyNotification.classList.add('active');
                        setTimeout(() => {
                            copyNotification.classList.remove('active');
                        }, 2000);
                    } catch (err) {
                        console.error('Copy failed:', err);
                        const copyNotification = document.getElementById('copy-notification');
                        copyNotification.innerHTML = \`<span class="checkmark">❌</span> \${translations[currentLanguage].copyFailed}\`;
                        copyNotification.classList.add('active');
                        setTimeout(() => {
                            copyNotification.classList.remove('active');
                        }, 2000);
                    }
                });
    
                document.getElementById('discord-button').addEventListener('click', () => {
                    try {
                        const textarea = document.createElement('textarea');
                        textarea.value = DISCORD_LINK;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);
                        const copyNotification = document.getElementById('copy-notification');
                        copyNotification.innerHTML = \`<span class="checkmark">✔</span> \${translations[currentLanguage].copied}\`;
                        copyNotification.classList.add('active');
                        setTimeout(() => {
                            copyNotification.classList.remove('active');
                        }, 2000);
                    } catch (err) {
                        console.error('Copy failed:', err);
                        const copyNotification = document.getElementById('copy-notification');
                        copyNotification.innerHTML = \`<span class="checkmark">❌</span> \${translations[currentLanguage].copyFailed}\`;
                        copyNotification.classList.add('active');
                        setTimeout(() => {
                            copyNotification.classList.remove('active');
                        }, 2000);
                    }
                });
    
                const range = document.getElementById('delay-slider');
                function updateSlider() {
                    const value = (range.value - range.min) / (range.max - range.min) * 100;
                    range.style.background = \`linear-gradient(to right, var(--primary-color) \${value}%, var(--button-enabled-bg) \${value}%)\`;
                }
    
                range.addEventListener('input', () => {
                    updateSlider();
                    alt.emit('setDelayLevel', parseInt(range.value));
                });
    
                updateSlider();
    
                const driveDSlider = document.getElementById('drive-d-slider');
                const cdlBSlider = document.getElementById('cdl-b-slider');
    
                function updateSliderBackground(slider) {
                    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
                    slider.style.background = \`linear-gradient(to right, var(--primary-color) \${value}%, var(--button-enabled-bg) \${value}%)\`;
                }
    
                driveDSlider.addEventListener('input', () => {
                    updateSliderBackground(driveDSlider);
                    alt.emit('setDriveDValue', parseInt(driveDSlider.value));
                });
    
                cdlBSlider.addEventListener('input', () => {
                    updateSliderBackground(cdlBSlider);
                    alt.emit('setCdlBValue', parseInt(cdlBSlider.value));
                });
    
                updateSliderBackground(driveDSlider);
                updateSliderBackground(cdlBSlider);
    
                const premiumCheckbox = document.getElementById('premium-checkbox');
                premiumCheckbox.addEventListener('change', () => {
                    const isChecked = premiumCheckbox.checked;
                    const cycles = isChecked ? 4 : 5;
                    alt.emit('setMaxCycles', cycles);
                });
    
                const expandableButtons = document.querySelectorAll('.expandable-button');
                expandableButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const container = button.closest('.expandable-container');
                        const isActive = container.classList.contains('active');
    
                        document.querySelectorAll('.expandable-container').forEach(c => {
                            c.classList.remove('active');
                        });
    
                        if (!isActive) {
                            container.classList.add('active');
                        }
                    });
                });
    
                document.querySelectorAll('.language-button').forEach(button => {
                    button.addEventListener('click', () => {
                        const lang = button.getAttribute('data-lang');
                        setLanguage(lang);
                        alt.emit('languageSelected', lang);
                        if (button.closest('#language-selection-overlay')) {
                            document.getElementById('language-selection-overlay').style.display = 'none';
                        }
                    });
                });
    
                const copyIcons = document.querySelectorAll('.copy-icon');
                const copyNotification = document.getElementById('copy-notification');
    
                copyIcons.forEach(icon => {
                    icon.addEventListener('click', () => {
                        let textToCopy = icon.getAttribute('data-copy');
                        if (textToCopy === 'p1nk.js' && !textToCopy.endsWith('.')) {
                            textToCopy = 'p1nk.js';
                        }
                        try {
                            const textarea = document.createElement('textarea');
                            textarea.value = textToCopy;
                            textarea.style.position = 'fixed';
                            textarea.style.opacity = '0';
                            document.body.appendChild(textarea);
                            textarea.focus();
                            textarea.select();
                            const success = document.execCommand('copy');
                            document.body.removeChild(textarea);
    
                            if (success) {
                                copyNotification.innerHTML = \`<span class="checkmark">✔</span> \${translations[currentLanguage].copied}\`;
                                copyNotification.classList.add('active');
                                setTimeout(() => {
                                    copyNotification.classList.remove('active');
                                }, 2000);
                            } else {
                                throw new Error('Copy command failed');
                            }
                        } catch (err) {
                            console.error('Copy to clipboard error:', err);
                            copyNotification.innerHTML = \`<span class="checkmark">❌</span> \${translations[currentLanguage].copyFailed}\`;
                            copyNotification.classList.add('active');
                            setTimeout(() => {
                                copyNotification.classList.remove('active');
                            }, 2000);
                        }
                    });
                });
    
                alt.on('updateFPS', (fps) => {
                    document.getElementById('fps-counter').textContent = \`FPS: \${fps}\`;
                });
    
                alt.on('setLanguage', (lang) => {
                    setLanguage(lang);
                    document.getElementById('language-selection-overlay').style.display = 'none';
                });
    
                alt.on('showLanguageSelection', () => {
                    document.getElementById('language-selection-overlay').style.display = 'flex';
                });
    
                alt.on('setRunningState', (isRunning) => {
                    const startButton = document.getElementById('start-button');
                    const stopButton = document.getElementById('stop-button');
                    if (isRunning) {
                        startButton.disabled = true;
                        stopButton.disabled = false;
                    } else {
                        startButton.disabled = false;
                        stopButton.disabled = true;
                    }
                });
    
                let isFirstOpen = true;
    
                function playMenuSound() {
                    const audio = document.getElementById('menu-sound');
                    audio.play();
                }
    
                function playUnloadSound() {
                    const audio = document.getElementById('unload-sound');
                    audio.play();
                }
    
                alt.on('menuOpened', () => {
                    if (isFirstOpen) {
                        playMenuSound();
                        isFirstOpen = false;
                    }
                });
    
                alt.on('playUnloadSound', () => {
                    playUnloadSound();
                });
    
                document.getElementById('teleport-guide-button').addEventListener('click', () => {
                    alt.emit('teleportToGuide');
                });
                document.getElementById('teleport-bill-button').addEventListener('click', () => {
                    alt.emit('teleportToBill');
                });
                document.getElementById('teleport-babka-button').addEventListener('click', () => {
                    alt.emit('teleportToBabka');
                });
                document.getElementById('teleport-rag-button').addEventListener('click', () => {
                    alt.emit('teleportToRag');
                });
                document.getElementById('teleport-joe-button').addEventListener('click', () => {
                    alt.emit('teleportToJoe');
                });
                const emsCoords = { x: 1204.68, y: -1479.57, z: 33.86 };
                const casinoCoords = { x: 995.27, y: -59.79, z: 73.96 };
    
                document.getElementById('teleport-ems-button').addEventListener('click', () => {
                    alt.emit('teleportSmart', emsCoords.x, emsCoords.y, emsCoords.z);
                });
                document.getElementById('teleport-casino-button').addEventListener('click', () => {
                    alt.emit('teleportSmart', casinoCoords.x, casinoCoords.y, casinoCoords.z);
                });
                const barCoords = { x: -1577.84, y: -3018.16, z: -80.01 };
                const barbershopCoords = { x: 1930.63, y: 3728.75, z: 31.84 };
                const tattooCoords = { x: 1862.67, y: 3747.58, z: 32.03 };
                const clothesCoords = { x: 1691.64, y: 4816.64, z: 41.06 };
                const marketCoords = { x: 1790.04, y: 4608.69, z: 36.68 };
                const mechanicCoords = { x: 1201.30, y: -3121.35, z: 4.54 };
    
                document.getElementById('teleport-bar-button').addEventListener('click', () => {
                    alt.emit('teleportBar', barCoords.x, barCoords.y, barCoords.z);
                });
                document.getElementById('teleport-barbershop-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', barbershopCoords.x, barbershopCoords.y, barbershopCoords.z);
                });
                document.getElementById('teleport-tattoo-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', tattooCoords.x, tattooCoords.y, tattooCoords.z);
                });
                document.getElementById('teleport-clothes-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', clothesCoords.x, clothesCoords.y, clothesCoords.z);
                });
                document.getElementById('teleport-market-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', marketCoords.x, marketCoords.y, marketCoords.z);
                });
                document.getElementById('teleport-mechanic-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', mechanicCoords.x, mechanicCoords.y, mechanicCoords.z);
                });
                const farmerCoords = { x: 2034.57, y: 4985.27, z: 39.69 };
                const worldCoords = { x: 1145.28, y: -649.56, z: 55.94 };
                const fishShopCoords = { x: -1601.83, y: 5197.23, z: 3.33 };
                const autoServiceCoords = { x: -215.14, y: 6219.03, z: 30.49 };
                const shop247Coords = { x: 161.11, y: 6642.40, z: 30.70 };
                const fieldCoords = { x: 2318.42, y: 4768.51, z: 35.75 };
                const truckerCoords = { x: 1197.09, y: -3254.99, z: 6.10 };
                const gymCoords = { x: -1195.00, y: -1573.94, z: 3.61 };
                const postmanCoords = { x: -232.34, y: -914.08, z: 31.31 };
                const pvzCoords = { x: -2335.38, y: 296.79, z: 169.35 };
                const fishingCoords = { x: -1548.26, y: 4345.52, z: -0.01 };
    
                document.getElementById('teleport-farmer-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', farmerCoords.x, farmerCoords.y, farmerCoords.z);
                });
                document.getElementById('teleport-world-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', worldCoords.x, worldCoords.y, worldCoords.z);
                });
                document.getElementById('teleport-fishshop-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', fishShopCoords.x, fishShopCoords.y, fishShopCoords.z);
                });
                document.getElementById('teleport-autoservice-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', autoServiceCoords.x, autoServiceCoords.y, autoServiceCoords.z);
                });
                document.getElementById('teleport-247shop-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', shop247Coords.x, shop247Coords.y, shop247Coords.z);
                });
                document.getElementById('teleport-field-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', fieldCoords.x, fieldCoords.y, fieldCoords.z);
                });
                document.getElementById('teleport-trucker-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', truckerCoords.x, truckerCoords.y, truckerCoords.z);
                });
                document.getElementById('teleport-gym-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', gymCoords.x, gymCoords.y, gymCoords.z);
                });
                document.getElementById('teleport-postman-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', postmanCoords.x, postmanCoords.y, postmanCoords.z);
                });
                document.getElementById('teleport-pvz-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', pvzCoords.x, pvzCoords.y, pvzCoords.z);
                });
                document.getElementById('teleport-fishing-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', fishingCoords.x, fishingCoords.y, fishingCoords.z);
                });
                document.getElementById('teleport-motosalon-button').addEventListener('click', () => {
                    alt.emit('teleportSimple', 1147.02, -787.66, 56.65);
                });
                document.getElementById('teleport-dogbag-button').addEventListener('click', () => {
                    if (typeof alt !== 'undefined' && typeof alt.emit === 'function') {
                        alt.emit('teleportDogBag');
                    } else {
                        console.error('alt.emit is not available');
                    }
                });
                const overlay = document.getElementById('language-selection-overlay');
                const useIdButton = document.getElementById('use-id-button');
                const userIdInput = document.getElementById('user-id-input');
                if (userIdInput) {
                    userIdInput.setAttribute('maxlength', '5');
                    userIdInput.addEventListener('input', (e) => {
                        let value = userIdInput.value.replace(/\D/g, '').slice(0, 5);
                        userIdInput.value = value;
                        if (useIdButton) {
                            if (userIdInput.value.length === 0) {
                                useIdButton.disabled = true;
                                useIdButton.style.backgroundColor = '#121212';
                                useIdButton.style.color = '#ccc';
                                useIdButton.style.cursor = 'not-allowed';
                            } else {
                                useIdButton.disabled = false;
                                useIdButton.style.backgroundColor = 'var(--primary-color)';
                                useIdButton.style.color = 'var(--text-color)';
                                useIdButton.style.cursor = 'pointer';
                            }
                        }
                    });
                    userIdInput.addEventListener('keydown', (e) => {
                        if (
                            (e.key >= '0' && e.key <= '9') ||
                            e.key === 'Backspace' ||
                            e.key === 'Delete' ||
                            e.key === 'ArrowLeft' ||
                            e.key === 'ArrowRight' ||
                            e.key === 'Tab' ||
                            e.key === 'Home' ||
                            e.key === 'End'
                        ) {
                            return;
                        } else {
                            e.preventDefault();
                        }
                    });
                    if (useIdButton) {
                        if (userIdInput.value.length === 0) {
                            useIdButton.disabled = true;
                            useIdButton.style.backgroundColor = '#121212';
                            useIdButton.style.color = '#ccc';
                            useIdButton.style.cursor = 'not-allowed';
                        } else {
                            useIdButton.disabled = false;
                            useIdButton.style.backgroundColor = 'var(--primary-color)';
                            useIdButton.style.color = 'var(--text-color)';
                            useIdButton.style.cursor = 'pointer';
                        }
                    }
                }
                if (useIdButton && userIdInput && overlay) {
                    overlay.style.display = 'flex';
                    useIdButton.addEventListener('click', () => {
                        const input = userIdInput.value.trim();
                        if (input.length >= 1) {
                            userId = input;
                            overlay.style.display = 'none';
                            if (typeof alt !== 'undefined' && typeof alt.emit === 'function') {
                                alt.emit('userIdEntered', userId);
                            }
                            userIdInput.style.borderColor = 'var(--input-border-default)';
                        } else {
                            userIdInput.style.borderColor = 'red';
                        }
                    });
                    userIdInput.addEventListener('focus', () => {
                        userIdInput.style.borderColor = 'var(--primary-color)';
                    });
                    userIdInput.addEventListener('blur', () => {
                        userIdInput.style.borderColor = 'var(--input-border-default)';
                    });
                    userIdInput.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') useIdButton.click();
                    });
                }
                if (typeof alt !== 'undefined' && typeof alt.on === 'function') {
                    alt.on('setUserId', (id) => {
                        userId = id;
                        const overlay = document.getElementById('language-selection-overlay');
                        if (overlay) overlay.style.display = 'none';
                    });
                }
            });
        </script>
    </body>
    </html>
    `;
    
    alt.onServer((eventName, ...args) => {
        if (eventName === 'events.utils.batch') {
            if (Array.isArray(args[0])) {
                args[0].forEach((batchItem) => {
                    if (batchItem?.name === 'inventory.sync.giveItem') {
                        const giveItemArgs = batchItem.args;
                        if (Array.isArray(giveItemArgs) && Array.isArray(giveItemArgs[0]) && giveItemArgs[0].length >= 1) {
                            foodItemId = giveItemArgs[0][0];
                            alt.log(`[QEX: Получен itemId: ${foodItemId}]`);
                        }
                    }
                });
            }
        } else if (eventName === 'inventory.sync.giveItem') {
            const giveItemArgs = args;
            if (Array.isArray(giveItemArgs) && Array.isArray(giveItemArgs[0]) && giveItemArgs[0].length >= 1) {
                foodItemId = giveItemArgs[0][0];
                alt.log(`[QEX: Получен itemId напрямую: ${foodItemId}]`);
            }
        }
    });
    
    function openMainMenu() {
        if (isUnhooked) {
            alt.log('[QEX: Скрипт выгружен — меню не открывается]');
            return;
        }
    
        if (!menuWebview) {
            menuWebview = new alt.WebView(`data:text/html;charset=utf-8,${encodeURIComponent(menuHtml)}`);
    
            menuWebview.on('startQuestSequence', async (quest) => {
                currentQuest = quest;
                currentPin = '6666';
                isRunning = true;
                isMenuOpen = false;
                menuWebview.isVisible = false;
                menuWebview.unfocus();
                alt.showCursor(false);
                alt.toggleGameControls(true);
    
                if (fpsInterval) {
                    alt.clearInterval(fpsInterval);
                    fpsInterval = null;
                }
                if (fpsCollectionInterval) {
                    alt.clearInterval(fpsCollectionInterval);
                    fpsCollectionInterval = null;
                }
    
                fpsHistory = [];
    
                menuWebview.emit('setRunningState', true);
                alt.emit("api.notify", `[QEX: Запущена последовательность квестов с ${quest}, PIN: ${currentPin}]`, 1);
                if (quest === 'set-taxi-metka') {
                    const data = JSON.stringify({
                        driverId: userId,
                        price: 500,
                        pos: { x: 905, y: -186.376, z: 72.6385 }
                    });
                    alt.emitServer(METKA, "taxi.tariff", 1, data, null);
                    alt.emitServer(METKA, "taxi.tariff", 1, data2, null);
                    alt.emit("api.notify", "[QEX: Засчитана метка для такси]", 1);
                    isRunning = false;
                    menuWebview.emit('setRunningState', false);
                    return;
                }
                await startQuestSequence(quest);
            });
    
            menuWebview.on('stopQuestSequence', () => {
                isRunning = false;
                menuWebview.emit('setRunningState', false);
                alt.emit("api.notify", "[QEX: Последовательность остановлена]", 1);
                menuWebview.emit('playUnloadSound');
            });
    
            menuWebview.on('setDelayLevel', (value) => {
                delayLevel = value;
                if (value === 0) {
                    delayModifier = 1000;
                } else if (value === 1) {
                    delayModifier = 600;
                } else if (value === 2) {
                    delayModifier = 0;
                }
                alt.emit("api.notify", `[QEX: Уровень задержки установлен на ${value === 0 ? 'Низкий' : value === 1 ? 'Средний' : 'Максимальный'}]`, 1);
            });
    
            menuWebview.on('setMaxCycles', (cycles) => {
                maxCycles = cycles;
                isPremium = (cycles === 3);
                alt.emit("api.notify", `[QEX: Максимальное количество циклов установлено на ${cycles}]`, 1);
            });
    
            menuWebview.on('setDriveDValue', (value) => {
                driveDValue = value;
                alt.emit("api.notify", `[QEX: Drive D value установлено на ${value}]`, 1);
            });
    
            menuWebview.on('setCdlBValue', (value) => {
                cdlBValue = value;
                alt.emit("api.notify", `[QEX: Cdl B value установлено на ${value}]`, 1);
            });
    
            menuWebview.on('unhookScript', () => {
                isUnhooked = true;
    
                if (fpsInterval) {
                    alt.clearInterval(fpsInterval);
                    fpsInterval = null;
                }
                if (fpsCollectionInterval) {
                    alt.clearInterval(fpsCollectionInterval);
                    fpsCollectionInterval = null;
                }
                fpsHistory = [];
    
                if (menuWebview) {
                    menuWebview.isVisible = false;
                    menuWebview.unfocus();
                    menuWebview.destroy();
                    menuWebview = null;
                }
    
                isMenuOpen = false;
    
                alt.showCursor(false);
                alt.toggleGameControls(true);
    
                if (typeof unloadScript === 'function') {
                    unloadScript();
                }
    
                alt.log('[QEX: Скрипт полностью выгружен. Все интерфейсы удалены. isUnhooked = true]');
            });
    
            menuWebview.on('restartScript', () => {
                isRunning = false;
                isSequenceRunning = false;
                foodItemId = null;
                currentQuest = 'no-quest';
                delayLevel = 2;
                isPremium = false;
                isBotActive = false;
                gatherPoint = null;
                unloadPoint = null;
                isWorking = false;
                completedCycles = 0;
                delayModifier = 0;
                maxCycles = 5;
                currentPin = '6666';
                selectedLanguage = null;
            
                if (fpsInterval) {
                    alt.clearInterval(fpsInterval);
                    fpsInterval = null;
                }
                if (fpsCollectionInterval) {
                    alt.clearInterval(fpsCollectionInterval);
                    fpsCollectionInterval = null;
                }
                if (minigameInterval) {
                    alt.clearInterval(minigameInterval);
                    minigameInterval = null;
                }
            
                fpsHistory = [];
            
                if (menuWebview) {
                    menuWebview.destroy();
                    menuWebview = null;
                }
            
                openMainMenu();
            
                alt.emit("api.notify", "[QEX: Скрипт перезапущен]", 1);
            });
            
    
            menuWebview.on('languageSelected', (lang) => {
                selectedLanguage = lang;
            });
    
            menuWebview.on('teleportToGuide', () => {
                alt.emitServer(MINER_DIMENSION_EVENT, 0); 
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, -834.47, -1217.08, 6.09, false, false, false);
                alt.emit("api.notify", "[QEX: Телепорт к путеводителю]", 1);
            });
            menuWebview.on('teleportToBill', () => {
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, 1965.91, 4633.54, 39.73, false, false, false);
                alt.emit("api.notify", "[QEX: Телепорт к Биллу]", 1);
            });
            menuWebview.on('teleportToBabka', () => {
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, 1298.62, -1739.23, 52.88, false, false, false);
                alt.emit("api.notify", "[QEX: Телепорт к Бабке]", 1);
            });
            menuWebview.on('teleportToRag', () => {
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, 1151.06, -454.41, 65.98, false, false, false);
                alt.emit("api.notify", "[QEX: Телепорт к Рагнореку]", 1);
            });
            menuWebview.on('teleportToJoe', () => {
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, 335.21, -1091.26, 28.41, false, false, false);
                alt.emit("api.notify", "[QEX: Телепорт к Джо]", 1);
            });
            menuWebview.on('teleportToCoords', (x, y, z, withVehicle) => {
                if (withVehicle) {
                    teleportVehicleToCoords(x, y, z);
                    alt.emit("api.notify", `[QEX: Телепорт с машиной к (${x}, ${y}, ${z})]`, 1);
                } else {
                    native.setEntityCoordsNoOffset(alt.Player.local.scriptID, x, y, z, false, false, false);
                    alt.emit("api.notify", `[QEX: Телепорт без машины к (${x}, ${y}, ${z})]`, 1);
                }
            });
            menuWebview.on('teleportSmart', (x, y, z) => {
                const localPlayer = alt.Player.local;
                const isInVehicle = native.isPedInAnyVehicle(localPlayer.scriptID, false);
                alt.emitServer(MINER_DIMENSION_EVENT, 0); 
                if (isInVehicle) {
                    teleportVehicleToCoords(x, y, z);
                    alt.emit("api.notify", `[QEX: Телепорт с машиной к (${x}, ${y}, ${z})]`, 1);
                } else {
                    native.setEntityCoordsNoOffset(localPlayer.scriptID, x, y, z, false, false, false);
                    alt.emit("api.notify", `[QEX: Телепорт без машины к (${x}, ${y}, ${z})]`, 1);
                }
            });
            menuWebview.on('teleportBar', (x, y, z) => {
                alt.emitServer(MINER_DIMENSION_EVENT, 876); 
                const localPlayer = alt.Player.local;
                native.setEntityCoordsNoOffset(localPlayer.scriptID, x, y, z, false, false, false);
                alt.emit("api.notify", `[QEX: Телепорт в Бар (${x}, ${y}, ${z}), дим 876]`, 1);
            });
            menuWebview.on('teleportSimple', (x, y, z) => {
                const localPlayer = alt.Player.local;
                alt.emitServer(MINER_DIMENSION_EVENT, 0); 
                native.setEntityCoordsNoOffset(localPlayer.scriptID, x, y, z, false, false, false);
                alt.emit("api.notify", `[QEX: Телепорт к (${x}, ${y}, ${z})]`, 1);
            });
            menuWebview.on('teleportDogBag', () => {
                alt.emitServer(DOG_BAG, "find_dog", "null");
                setTimeout(() => {
                    alt.emitServer(DOG_BAG, "find_bag", "null");
                }, 200);
            });
            menuWebview.on('userIdEntered', (id) => {
                userId = id;
                try { localStorage.setItem('qex_user_id', userId); } catch (e) {}
                if (menuWebview) menuWebview.emit('setUserId', userId);
            });
        }
        menuWebview.isVisible = true;
        menuWebview.focus();
        alt.showCursor(true);
        alt.toggleGameControls(false);
        isMenuOpen = true;
        menuWebview.emit('menuOpened');
        if (selectedLanguage) {
            menuWebview.emit('setLanguage', selectedLanguage);
        } else {
            menuWebview.emit('showLanguageSelection');
        }
        if (userId) {
            menuWebview.emit('setUserId', userId);
        }
        fpsInterval = alt.setInterval(() => {
            const fps = Math.floor(alt.getFps());
            fpsHistory.push(fps);
            if (fpsHistory.length > 10) {
                fpsHistory.shift();
            }
            const averageFPS = Math.floor(fpsHistory.reduce((a, b) => a + b, 0) / fpsHistory.length);
            if (menuWebview) {
                menuWebview.emit('updateFPS', averageFPS);
            }
        }, 1000);
    
        fpsCollectionInterval = alt.setInterval(() => {
            if (isMenuOpen) {
                const fps = Math.floor(alt.getFps());
                fpsHistory.push(fps);
                if (fpsHistory.length > 10) {
                    fpsHistory.shift();
                }
            }
        }, 100);
        alt.log('[QEX: Открыто основное меню]');
    }
    
    function closeMainMenu() {
        if (menuWebview) {
            menuWebview.isVisible = false;
            menuWebview.unfocus();
        }
        alt.showCursor(false);
        alt.toggleGameControls(true);
        isMenuOpen = false;
        if (fpsInterval) {
            alt.clearInterval(fpsInterval);
            fpsInterval = null;
        }
        if (fpsCollectionInterval) {
            alt.clearInterval(fpsCollectionInterval);
            fpsCollectionInterval = null;
        }
        fpsHistory = [];
        alt.log('[QEX: Основное меню закрыто]');
    }
    
    alt.on('keydown', (key) => {
        if (key !== 123) return; 
    
        if (typeof isUnhooked !== 'undefined' && isUnhooked === true) {
            return;
        }
    
        if (!isMenuOpen) {
            openMainMenu();
        } else {
            closeMainMenu();
        }
    });
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function waitUntilRunning() {
        while (!isRunning) {
            await delay(100);
        }
    }
    
    const eventHandlers = {
        gatherPoint: async (data) => {
            if (!isBotActive || !isRunning) return;
            await waitUntilRunning();
            gatherPoint = data;
            alt.emit("api.notify", `[QEX: Точка сбора установлена на ${JSON.stringify(gatherPoint)}]`, 1);
            if (isWorking) await startMiningCycle();
        },
        unloadPoint: async (data) => {
            if (!isBotActive || !isRunning) return;
            await waitUntilRunning();
            unloadPoint = data;
            alt.emit("api.notify", `[QEX: Точка выгрузки установлена на ${JSON.stringify(unloadPoint)}]`, 1);
            if (isWorking) await handleUnload();
        }
    };
    
    alt.onServer('job.mining.setRandomGatherPoint', eventHandlers.gatherPoint);
    alt.onServer('job.mining.setRandomUnloadPoint', eventHandlers.unloadPoint);
    
    const gpsSetPointHandler = async (data) => {
        if (!isRunning) return;
        await waitUntilRunning();
        try {
            const point = JSON.parse(data);
            alt.emit("api.notify", `[QEX: Получена точка gps.setPoint: ${JSON.stringify(point)}]`, 1);
        } catch (e) {
            alt.emit("api.notify", `[QEX: Ошибка разбора данных gps.setPoint: ${e}]`, 1);
        }
    };
    
    alt.on('gps.setPoint', gpsSetPointHandler);
    
    function getRandomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    async function startQuestSequence(startFrom) {
        if (isSequenceRunning) {
            isRunning = true;
            alt.emit("api.notify", "[Бот: Возобновление последовательности]", 1);
            return;
        }
        isSequenceRunning = true;
        try {
            alt.emit("api.notify", `[Бот: Начало с ${startFrom}]`, 1);
    
            if (startFrom === 'no-quest') {
                await waitUntilRunning();
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, -1032.48, -2734.92, 20.17, false, false, false);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...DIALOG_OPEN);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...QUEST_TAKE);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...QUEST_TAKE);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                await rentVehicle();
                await waitUntilRunning();
                await openBankAccount();
                await waitUntilRunning();
                await continueAfterBank();
            } else if (startFrom === 'rent-vehicle') {
                await waitUntilRunning();
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, -1032.48, -2734.92, 20.17, false, false, false);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                await rentVehicle();
                await waitUntilRunning();
                await openBankAccount();
                await waitUntilRunning();
                await continueAfterBank();
            } else if (startFrom === 'open-bank-account') {
                await waitUntilRunning();
                await openBankAccount();
                await waitUntilRunning();
                await continueAfterBank();
            } else if (startFrom === 'open-atm') {
                await waitUntilRunning();
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, 147.70, -1035.83, 29.34, false, false, false);
                await delay(300 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...ATM_OPEN);
                await delay(300 + delayModifier);
                await waitUntilRunning();
                await continueAfterBank();
            } else if (startFrom === 'eat-food') {
                await waitUntilRunning();
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, -1032.48, -2734.92, 20.17, false, false, false);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...DIALOG_OPEN);
                await delay(300 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...QUEST_TAKE);
                await delay(300 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...QUEST_TAKE);
                await delay(500 + delayModifier);
                await waitUntilRunning();
                if (foodItemId) {
                    alt.log(`[Бот: Поедание еды с itemId: ${foodItemId}]`);
                    alt.emit("api.notify", "[Бот: Поедание еды]", 1);
                    alt.emitServer(EAT_ID, foodItemId);
                    setTimeout(() => {
                        alt.emitServer(...QUEST_TAKE);
                    }, 150);
                    await delay(7000 + delayModifier - 100);
                    foodItemId = null;
                } else {
                    alt.emit("api.notify", "[Бот: Не удалось получить itemId еды]", 1);
                }
                await waitUntilRunning();
                alt.emit("api.notify", "[Бот: Открытие диалога после еды]", 1);
                alt.emitServer(...DIALOG_OPEN);
                await delay(300 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...QUEST_TAKE);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...QUEST_TAKE);
                await delay(700 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...QUEST_TAKE);
                alt.emit("api.notify", "[Бот: Загружен шахтёрский бот]", 1);
                isBotActive = true;
                alt.emit("api.notify", "[Бот: Активирован]", 1);
                await waitUntilRunning();
                await startWorkCycle();
            } else if (startFrom === 'miner-job') {
                await waitUntilRunning();
                isBotActive = true;
                alt.emit("api.notify", "[Бот: Активирован для работы шахтёром]", 1);
                await waitUntilRunning();
                await startWorkCycle();
            } else if (startFrom === 'buy-sim-card') {
                await waitUntilRunning();
                await buySimCardAndContinue();
            } else if (startFrom === 'open-contacts') {
                await waitUntilRunning();
                await openContactsAndContinue();
            } else if (startFrom === 'find-auto-school') {
                await waitUntilRunning();
                const pointData = {
                    title: AUTO_SCHOOL_GPS.title,
                    x: AUTO_SCHOOL_GPS.x,
                    y: AUTO_SCHOOL_GPS.y,
                    z: AUTO_SCHOOL_GPS.z
                };
                alt.emit('gps.setPoint', JSON.stringify(pointData));
                alt.emit("api.notify", `[Бот: GPS установлен на автошколу (${AUTO_SCHOOL_GPS.x}, ${AUTO_SCHOOL_GPS.y}, ${AUTO_SCHOOL_GPS.z})]`, 1);
                await delay(300 + delayModifier);
                await waitUntilRunning();
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, INSTRUCTOR_POSITION.x, INSTRUCTOR_POSITION.y, INSTRUCTOR_POSITION.z, false, false, false);
                alt.emit("api.notify", "[Бот: Телепортация к инструктору по вождению]", 1);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(DIALOG_EVENT, 59, 7);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 1);
                await delay(250 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 0);
                await delay(1000 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 0);
                alt.emit("api.notify", "[Бот: Запуск маршрута автошколы (первый проход)]", 1);
                await waitUntilRunning();
                startAutoSchoolRoute(true);
            } else if (startFrom === 'get-drive-d') {
                await waitUntilRunning();
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, INSTRUCTOR_POSITION.x, INSTRUCTOR_POSITION.y, INSTRUCTOR_POSITION.z, false, false, false);
                alt.emit("api.notify", "[Бот: Телепортация к инструктору по вождению]", 1);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(DIALOG_EVENT, 59, 7);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 1);
                await delay(250 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 0);
                await delay(1000 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 0);
                alt.emit("api.notify", "[Бот: Запуск маршрута автошколы (первый проход)]", 1);
                await waitUntilRunning();
                startAutoSchoolRoute(true);
            } else if (startFrom === 'get-cdl-b') {
                await waitUntilRunning();
                native.setEntityCoordsNoOffset(alt.Player.local.scriptID, INSTRUCTOR_POSITION.x, INSTRUCTOR_POSITION.y, INSTRUCTOR_POSITION.z, false, false, false);
                alt.emit("api.notify", "[Бот: Телепортация к инструктору по вождению (второй проход)]", 1);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(DIALOG_EVENT, 59, 7);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 2);
                await delay(250 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 0);
                await delay(250 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 7, 0);
                await delay(1000 + delayModifier);
                await waitUntilRunning();
                alt.emit("api.notify", "[Бот: Запуск маршрута автошколы для CDL:B]", 1);
                startAutoSchoolRoute(false);
            } else if (startFrom === 'get-job-taxi') {
                await waitUntilRunning();
                native.setEntityCoords(alt.Player.local.scriptID, -596.51, 1522.15, -17.60, false, false, false, false);
                alt.emit("api.notify", "[Бот: Телепортация к месту работы такси]", 1);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...MINER_SET_DIMENSION, 10);
                alt.emit("api.notify", "[Бот: Изменена размерность на 10]", 1);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(DIALOG_EVENT, 3, 2);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 2, 1);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 2, 0);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 2, 0);
                await delay(200 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 2, 0);
                await delay(300 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(QUEST_EVENT, 2, 0);
                await delay(600 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(RENT_EVENT, "cash", 1, "taxi", 0, null);
                alt.emit("api.notify", "[Бот: Арендовано такси]", 1);
                await delay(3000 + delayModifier);
                await waitUntilRunning();
                alt.emitServer(...ENGINE_OFF);
                alt.emit("api.notify", "[Бот: Двигатель выключен]", 1);
                const originalPos = getVehiclePosition();
                if (originalPos) {
                    await waitUntilRunning();
                    await delay(600 + delayModifier);
                    await waitUntilRunning();
                    teleportVehicleToCoords(1180.74, -326.62, 68.75);
                    alt.emit("api.notify", "[Бот: Телепортация к заправке (1180.74, -326.62, 68.75)]", 1);
                    await delay(2000 + delayModifier);
                    await waitUntilRunning();
                    alt.emitServer(...SOME_EMIT);
                    await delay(100 + delayModifier);
                    await waitUntilRunning();
                    alt.emitServer(...SOME_EMIT);
                    await delay(500 + delayModifier);
                    await waitUntilRunning();
                    alt.emitServer(OPEN_APP_EVENT);
                    await delay(1000);

                    const data = JSON.stringify({
                        driverId: userId,
                        price: 500,
                        pos: { x: 905, y: -186.376, z: 72.6385 }
                    });
                    alt.emitServer(METKA, "taxi.tariff", 1, data, null);
                    alt.emitServer(METKA, "taxi.tariff", 1, data2, null);
                    await delay(500 + delayModifier);
                    await waitUntilRunning();
                    alt.emitServer(...OPEN_APP);
                    await delay(1000);

                    const data2 = JSON.stringify({
                        driverId: userId,
                        price: 500,
                        pos: { x: 905, y: -186.376, z: 72.6385 }
                    });
                    alt.emitServer(METKA, "taxi.tariff", 1, data, null);
                    alt.emitServer(METKA, "taxi.tariff", 1, data2, null);
                    await delay(500 + delayModifier);
                    await waitUntilRunning();
                    alt.emitServer(METKA, "taxi.tariff", 1, data, null);
                    alt.emitServer(METKA, "taxi.tariff", 1, data2, null);

                    if (originalPos.x !== undefined && originalPos.y !== undefined && originalPos.z !== undefined) {
                        teleportVehicleToCoords(originalPos.x, originalPos.y, originalPos.z);
                        alt.emit("api.notify", "[Бот: Телепортация обратно в исходную позицию]", 1);
                    } else {
                        alt.emit("api.notify", "[Бот: Не удалось вернуть транспорт в исходную позицию]", 1);
                    }
                } else {
                    alt.emit("api.notify", "[Бот: Не удалось получить исходную позицию транспорта]", 1);
                }
            } else {
                await waitUntilRunning();
                alt.emit("api.notify", "[Бот: Неверное значение startFrom]", 1);
            }
        } finally {
            isSequenceRunning = false;
            alt.emit("api.notify", "[Бот: Последовательность завершена или остановлена]", 1);
        }
    }
    
    async function rentVehicle() {
        await waitUntilRunning();
        alt.emitServer(MINER_SPEECH_EVENT, 1, null, null, "SPEECH_PARAMS_FORCE_SHOUTED");
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...DIALOG_OPEN);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MOPED_RENT_STEP_2);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(600 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MOPED_RENT_FINAL);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(1000 + delayModifier);
        await waitUntilRunning();
        native.clearPedTasks(alt.Player.local.scriptID);
        await delay(500 + delayModifier);
    }
    
    async function openBankAccount() {
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, 149.85, -1040.71, 29.37, false, false, false);
        await delay(350 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...BANK_MENU_OPEN);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...CARD_REGISTER);
        await delay(200);
        await waitUntilRunning();
        alt.emit("api.notify", `[Бот: Установка PIN-кода на ${currentPin}]`, 1);
        alt.emitServer(PIN_SWAP_EVENT, currentPin);
        await delay(200);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, 147.70, -1035.83, 29.34, false, false, false);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...ATM_OPEN);
        await delay(300 + delayModifier);
    }
    
    async function continueAfterBank() {
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, -1032.48, -2734.92, 20.17, false, false, false);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...DIALOG_OPEN);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(500 + delayModifier);
        await waitUntilRunning();
        if (foodItemId) {
            alt.log(`[Бот: Поедание еды с itemId: ${foodItemId}]`);
            alt.emitServer(EAT_ID, foodItemId);
            setTimeout(() => {
                alt.emitServer(...QUEST_TAKE);
            }, 150);
            await delay(7000 + delayModifier - 100);
            foodItemId = null;
        } else {
            alt.emit("api.notify", "[Бот: Не удалось получить itemId еды]", 1);
        }
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...DIALOG_OPEN);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(700 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        alt.emit("api.notify", "[Бот: Загружен шахтёрский бот]", 1);
        isBotActive = true;
        alt.emit("api.notify", "[Бот: Активирован]", 1);
        await waitUntilRunning();
        await startWorkCycle();
    }
    
    async function startWorkCycle() {
        if (!isBotActive) return;
        await waitUntilRunning();
        isWorking = true;
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, NPC_POSITION.x, NPC_POSITION.y, NPC_POSITION.z, true, true, true);
        alt.emit("api.notify", "[QEX: Телепортация к NPC для найма]", 1);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        const randomDimension = Math.floor(Math.random() * (500000 - 10000 + 1)) + 10000;
        alt.emitServer(...MINER_SET_DIMENSION, randomDimension);
        alt.emit("api.notify", `[QEX: Изменена размерность на ${randomDimension}]`, 1);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_SPEECH);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_DIALOG_START);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_DIALOG_ANSWER_1);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_DIALOG_ANSWER_0);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_DIALOG_END);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_SPEECH);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_DIALOG_ANSWER_0);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_DIALOG_END);
    }
    
    async function startMiningCycle() {
        if (!isBotActive || !gatherPoint || unloadPoint) return;
        await waitUntilRunning();
        const teleportDelay = getRandomDelay(TELEPORT_DELAY_MIN, TELEPORT_DELAY_MAX) + delayModifier;
        await delay(teleportDelay);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, gatherPoint.x, gatherPoint.y, gatherPoint.z + 0.05, true, true, true);
        alt.emit("api.notify", `[QEX: Телепортация к точке сбора]`, 1);
        await delay(GATHER_WAIT + delayModifier);
        await waitUntilRunning();
        await simulateMinigame();
    }
    
    async function simulateMinigame() {
        await waitUntilRunning();
        const digSounds = [1, 1, 3];
        let digCount = 0;
    
        minigameInterval = alt.setInterval(async () => {
            if (!isRunning) {
                if (minigameInterval) {
                    alt.clearInterval(minigameInterval);
                    minigameInterval = null;
                }
                return;
            }
            if (!isBotActive || digCount >= digSounds.length) {
                if (minigameInterval) {
                    alt.clearInterval(minigameInterval);
                    minigameInterval = null;
                }
                if (isBotActive) {
                    await waitUntilRunning();
                    alt.emitServer(...MINER_MINIGAME_COMPLETE);
                    alt.emit("api.notify", "[QEX: Руда собрана, ожидание перезарядки выгрузки]", 1);
                    await delay(UNLOAD_WAIT + delayModifier);
                    await waitUntilRunning();
                    await handleUnload();
                }
                return;
            }
            await waitUntilRunning();
            alt.emitServer(...MINER_MINIGAME_DIG, digSounds[digCount]);
            digCount++;
        }, getRandomDelay(DIG_INTERVAL_MIN, DIG_INTERVAL_MAX) + delayModifier);
    }
    
    async function handleUnload() {
        if (!isBotActive || !unloadPoint) return;
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, unloadPoint.x, unloadPoint.y, unloadPoint.z + 1.5, true, true, true);
        alt.emit("api.notify", `[QEX: Телепортация к точке выгрузки]`, 1);
        await delay(UNLOAD_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_UNLOAD);
        await delay(DIALOG_STEP_DELAY + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...MINER_DISMISS_STATE);
        completedCycles++;
        alt.emit("api.notify", `[QEX: Груз доставлен. Всего доставлено: ${completedCycles}/${maxCycles}]`, 1);
        unloadPoint = null;
        if (completedCycles >= maxCycles) {
            await waitUntilRunning();
            await unloadBot();
        } else {
            await waitUntilRunning();
            await dismissAndRestart();
        }
    }
    
    async function dismissAndRestart() {
        if (!isBotActive) return;
        await waitUntilRunning();
        alt.emit("api.notify", `[QEX: Ожидание ${UNLOAD_WAIT / 1000} секунд на точке выгрузки]`, 1);
        await delay(UNLOAD_WAIT + delayModifier);
        if (gatherPoint) {
            await waitUntilRunning();
            native.setEntityCoordsNoOffset(alt.Player.local.scriptID, gatherPoint.x, gatherPoint.y, gatherPoint.z + 0.05, true, true, true);
            alt.emit("api.notify", `[QEX: Телепортация к точке сбора, ожидание ${GATHER_WAIT / 1000} секунд]`, 1);
            await delay(GATHER_WAIT + delayModifier);
        }
        await waitUntilRunning();
        isWorking = false;
        await startMiningCycle();
    }
    
    function teleportToCoords(x, y, z, pointIndex, showNotification) {
        if (!isRunning) return;
        const localPlayer = alt.Player.local;
        const isInVehicle = native.isPedInAnyVehicle(localPlayer.scriptID, false);
        const vehicle = isInVehicle ? native.getVehiclePedIsIn(localPlayer.scriptID, false) : null;
        const finalZ = z + 1.0;
    
        if (isInVehicle && vehicle) {
            native.freezeEntityPosition(vehicle, false);
        } else {
            native.freezeEntityPosition(localPlayer.scriptID, false);
        }
    
        if (isInVehicle && vehicle) {
            native.setEntityCoordsNoOffset(vehicle, x, y, finalZ, true, true, true);
            native.setPedIntoVehicle(localPlayer.scriptID, vehicle, -1);
            native.freezeEntityPosition(vehicle, true);
        } else {
            native.setEntityCoordsNoOffset(localPlayer.scriptID, x, y, finalZ, true, true, true);
            native.freezeEntityPosition(localPlayer.scriptID, true);
        }
    
        if (showNotification) {
            alt.emit("api.notify", `[QEX: Телепортация к точке ${pointIndex + 1}/${AUTO_SCHOOL_COORDS.length} и заморозка]`, 1);
        }
    }
    
    function startAutoSchoolRoute(isFirstRun = true) {
        if (!isRunning) return;
        let currentIndex = 0;
        const baseCooldown = isFirstRun ? driveDValue : cdlBValue;
        const intervalTime = baseCooldown + delayModifier;
        const intervalId = alt.setInterval(async () => {
            if (!isRunning) {
                alt.clearInterval(intervalId);
                return;
            }
            await waitUntilRunning();
            if (currentIndex >= AUTO_SCHOOL_COORDS.length) {
                const localPlayer = alt.Player.local;
                const isInVehicle = native.isPedInAnyVehicle(localPlayer.scriptID, false);
                const vehicle = isInVehicle ? native.getVehiclePedIsIn(localPlayer.scriptID, false) : null;
                if (isInVehicle && vehicle) {
                    native.freezeEntityPosition(vehicle, false);
                } else {
                    native.freezeEntityPosition(localPlayer.scriptID, false);
                }
                alt.clearInterval(intervalId);
                alt.emit("api.notify", "[QEX: Маршрут автошколы завершён]", 1);
                if (isFirstRun) {
                    setTimeout(async () => {
                        await waitUntilRunning();
                        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, INSTRUCTOR_POSITION.x, INSTRUCTOR_POSITION.y, INSTRUCTOR_POSITION.z, false, false, false);
                        alt.emit("api.notify", "[QEX: Телепортация к инструктору по вождению]", 1);
                        await delay(300 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(DIALOG_EVENT, 59, 7);
                        await delay(200 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 7, 2);
                        await delay(250 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 7, 0);
                        await delay(250 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 7, 0);
                        await delay(1000 + delayModifier);
                        await waitUntilRunning();
                        alt.emit("api.notify", "[QEX: Запуск маршрута автошколы (второй проход)]", 1);
                        startAutoSchoolRoute(false);
                    }, 900 + delayModifier);
                } else {
                    setTimeout(async () => {
                        await waitUntilRunning();
                        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, GUIDE_NPC_POSITION.x, GUIDE_NPC_POSITION.y, GUIDE_NPC_POSITION.z, false, false, false);
                        alt.emit("api.notify", "[QEX: Телепортация к путеводителю после второго прохода автошколы]", 1);
                        await delay(300 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(DIALOG_EVENT, 1, 3);
                        await delay(300 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(...QUEST_TAKE);
                        await delay(350 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(...QUEST_TAKE);
                        await delay(500 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(...QUEST_TAKE);
                        await delay(400 + delayModifier);
                        await waitUntilRunning();
                        native.setEntityCoords(alt.Player.local.scriptID, -596.51, 1522.15, -17.60, false, false, false, false);
                        alt.emit("api.notify", "[QEX: Телепортация к месту работы такси]", 1);
                        await delay(200 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(...MINER_SET_DIMENSION, 10);
                        alt.emit("api.notify", "[QEX: Изменена размерность на 10]", 1);
                        await delay(200 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(DIALOG_EVENT, 3, 2);
                        await delay(200 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 2, 1);
                        await delay(200 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 2, 0);
                        await delay(200 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 2, 0);
                        await delay(200 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 2, 0);
                        await delay(300 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(QUEST_EVENT, 2, 0);
                        await delay(600 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(RENT_EVENT, "cash", 1, "taxi", 0, null);
                        alt.emit("api.notify", "[QEX: Арендовано такси]", 1);
                        await delay(3000 + delayModifier);
                        await waitUntilRunning();
                        alt.emitServer(...ENGINE_OFF);
                        alt.emit("api.notify", "[QEX: Двигатель выключен]", 1);
                        const originalPos = getVehiclePosition();
                        if (originalPos) {
                            await waitUntilRunning();
                            await delay(600 + delayModifier);
                            await waitUntilRunning();
                            teleportVehicleToCoords(1180.74, -326.62, 68.75);
                            alt.emit("api.notify", "[QEX: Телепортация к заправке (1180.74, -326.62, 68.75)]", 1);
                            await delay(2000 + delayModifier);
                            await waitUntilRunning();
                            alt.emitServer(...SOME_EMIT);
                            await delay(100 + delayModifier);
                            await waitUntilRunning();
                            alt.emitServer(...SOME_EMIT);
                            await delay(500 + delayModifier);
                            await waitUntilRunning();
                            alt.emitServer(OPEN_APP_EVENT);
                            await delay(1000);
                            alt.emitServer(METKA, "taxi.tariff", 1, data, null);
                            alt.emitServer(METKA, "taxi.tariff", 1, data2, null);
                            await delay(500 + delayModifier);
                            await waitUntilRunning();
                            alt.emitServer(...OPEN_APP);
                            await delay(1000);
                            alt.emitServer(METKA, "taxi.tariff", 1, data, null);
                            alt.emitServer(METKA, "taxi.tariff", 1, data2, null);
                            await delay(500 + delayModifier);
                            await waitUntilRunning();
                            teleportVehicleToCoords(originalPos.x, originalPos.y, originalPos.z);
                            alt.emit("api.notify", "[QEX: Телепортация обратно в исходную позицию]", 1);
                            alt.emitServer(METKA, "taxi.tariff", 1, data, null);
                            alt.emitServer(METKA, "taxi.tariff", 1, data2, null);
                        }
                    }, 500 + delayModifier);
                }
                return;
            }
            const { x, y, z } = AUTO_SCHOOL_COORDS[currentIndex];
            teleportToCoords(x, y, z, currentIndex, !isFirstRun);
            currentIndex++;
        }, intervalTime);
    }
    
    async function unloadBot() {
        await waitUntilRunning();
        isBotActive = false;
        gatherPoint = null;
        unloadPoint = null;
        isWorking = false;
        if (minigameInterval) {
            alt.clearInterval(minigameInterval);
            minigameInterval = null;
        }
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z + 2, true, true, true);
        alt.emitServer(...MINER_SET_DIMENSION, 0);
        alt.emit("api.notify", "[QEX: Выгружен после завершения циклов]", 1);
        alt.offServer('job.mining.setRandomGatherPoint', eventHandlers.gatherPoint);
        alt.offServer('job.mining.setRandomUnloadPoint', eventHandlers.unloadPoint);
    
        await delay(800 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, GUIDE_NPC_POSITION.x, GUIDE_NPC_POSITION.y, GUIDE_NPC_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация к путеводителю]", 1);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...DIALOG_OPEN);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        alt.emit("api.notify", "[QEX: Закрыт обязательный диалог после путеводителя]", 1);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, SHOP_POSITION.x, SHOP_POSITION.y, SHOP_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация в магазин]", 1);
        await delay(400 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(PURCHASE_EVENT, 239, "cash", 1);
        alt.emit("api.notify", "[QEX: Куплена SIM-карта]", 1);
        await delay(1000 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(OPEN_CONTACTS_EVENT, "open_contacts", "null");
        alt.emit("api.notify", "[QEX: Открыты контакты]", 1);
        await delay(450 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, GUIDE_NPC_POSITION.x, GUIDE_NPC_POSITION.y, GUIDE_NPC_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация к путеводителю]", 1);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...DIALOG_OPEN);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        alt.emit("api.notify", "[QEX: Закрыт обязательный диалог]", 1);
        await delay(800 + delayModifier);
        await waitUntilRunning();
        const pointData = {
            title: AUTO_SCHOOL_GPS.title,
            x: AUTO_SCHOOL_GPS.x,
            y: AUTO_SCHOOL_GPS.y,
            z: AUTO_SCHOOL_GPS.z
        };
        alt.emit('gps.setPoint', JSON.stringify(pointData));
        alt.emit("api.notify", `[QEX: GPS установлен на автошколу (${AUTO_SCHOOL_GPS.x}, ${AUTO_SCHOOL_GPS.y}, ${AUTO_SCHOOL_GPS.z})]`, 1);
        alt.emit('gps.setPoint', JSON.stringify({
            title: AUTO_SCHOOL_GPS.title,
            x: AUTO_SCHOOL_GPS.x,
            y: AUTO_SCHOOL_GPS.y,
            z: AUTO_SCHOOL_GPS.z,
            args: { id: 1 }
        }));
        alt.emit("api.notify", "[QEX: Альтернативный GPS установлен на автошколу с аргументами]", 1);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, INSTRUCTOR_POSITION.x, INSTRUCTOR_POSITION.y, INSTRUCTOR_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация к инструктору по вождению]", 1);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(DIALOG_EVENT, 59, 7);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 1);
        await delay(250 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 0);
        await delay(1000 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 0);
        alt.emit("api.notify", "[QEX: Запуск маршрута автошколы (первый проход)]", 1);
        await waitUntilRunning();
        startAutoSchoolRoute(true);
    }
    
    function getVehiclePosition() {
        if (!isRunning) return null;
        const localPlayer = alt.Player.local;
        const vehicle = native.getVehiclePedIsIn(localPlayer.scriptID, false);
        if (vehicle) {
            const pos = native.getEntityCoords(vehicle, true);
            return { x: pos.x, y: pos.y, z: pos.z };
        } else {
            alt.emit("api.notify", "[QEX: Не в транспорте, невозможно получить позицию]", 1);
            return null;
        }
    }
    
    function teleportVehicleToCoords(x, y, z) {
        const localPlayer = alt.Player.local;
        const vehicle = native.getVehiclePedIsIn(localPlayer.scriptID, false);
        if (vehicle) {
            native.setEntityCoordsNoOffset(vehicle, x, y, z, true, true, true);
        } else {
            alt.emit("api.notify", "[QEX: Не в транспорте, невозможно телепортировать]", 1);
        }
    }
    
    async function buySimCard() {
        await waitUntilRunning();
        alt.emitServer(...MINER_SET_DIMENSION, 0);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, SHOP_POSITION.x, SHOP_POSITION.y, SHOP_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация в магазин]", 1);
        await delay(400 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(PURCHASE_EVENT, 239, "cash", 1);
        alt.emit("api.notify", "[QEX: Куплена SIM-карта]", 1);
        await delay(1000 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(OPEN_CONTACTS_EVENT, "open_contacts", "null");
        alt.emit("api.notify", "[QEX: Открыты контакты]", 1);
        await delay(450 + delayModifier);
    }
    
    async function continueAfterSimCard() {
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, GUIDE_NPC_POSITION.x, GUIDE_NPC_POSITION.y, GUIDE_NPC_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация к путеводителю]", 1);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...DIALOG_OPEN);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        alt.emit("api.notify", "[QEX: Закрыт обязательный диалог]", 1);
        await delay(800 + delayModifier);
        await waitUntilRunning();
        const pointData = {
            title: AUTO_SCHOOL_GPS.title,
            x: AUTO_SCHOOL_GPS.x,
            y: AUTO_SCHOOL_GPS.y,
            z: AUTO_SCHOOL_GPS.z
        };
        alt.emit('gps.setPoint', JSON.stringify(pointData));
        alt.emit("api.notify", `[QEX: GPS установлен на автошколу (${AUTO_SCHOOL_GPS.x}, ${AUTO_SCHOOL_GPS.y}, ${AUTO_SCHOOL_GPS.z})]`, 1);
        alt.emit('gps.setPoint', JSON.stringify({
            title: AUTO_SCHOOL_GPS.title,
            x: AUTO_SCHOOL_GPS.x,
            y: AUTO_SCHOOL_GPS.y,
            z: AUTO_SCHOOL_GPS.z,
            args: { id: 1 }
        }));
        alt.emit("api.notify", "[QEX: Альтернативный GPS установлен на автошколу с аргументами]", 1);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, INSTRUCTOR_POSITION.x, INSTRUCTOR_POSITION.y, INSTRUCTOR_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация к инструктору по вождению]", 1);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(DIALOG_EVENT, 59, 7);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 1);
        await delay(250 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 0);
        await delay(1000 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 0);
        alt.emit("api.notify", "[QEX: Запуск маршрута автошколы (первый проход)]", 1);
        await waitUntilRunning();
        startAutoSchoolRoute(true);
    }
    
    async function buySimCardAndContinue() {
        await waitUntilRunning();
        await buySimCard();
        await waitUntilRunning();
        await continueAfterSimCard();
    }
    
    async function openContactsAndContinue() {
        await waitUntilRunning();
        alt.emitServer(OPEN_CONTACTS_EVENT, "open_contacts", "null");
        alt.emit("api.notify", "[QEX: Открыты контакты]", 1);
        await delay(450 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, GUIDE_NPC_POSITION.x, GUIDE_NPC_POSITION.y, GUIDE_NPC_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация к путеводителю]", 1);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...DIALOG_OPEN);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(...QUEST_TAKE);
        alt.emit("api.notify", "[QEX: Закрыт обязательный диалог]", 1);
        await delay(800 + delayModifier);
        await waitUntilRunning();
        const pointData = {
            title: AUTO_SCHOOL_GPS.title,
            x: AUTO_SCHOOL_GPS.x,
            y: AUTO_SCHOOL_GPS.y,
            z: AUTO_SCHOOL_GPS.z
        };
        alt.emit('gps.setPoint', JSON.stringify(pointData));
        alt.emit("api.notify", `[QEX: GPS установлен на автошколу (${AUTO_SCHOOL_GPS.x}, ${AUTO_SCHOOL_GPS.y}, ${AUTO_SCHOOL_GPS.z})]`, 1);
        alt.emit('gps.setPoint', JSON.stringify({
            title: AUTO_SCHOOL_GPS.title,
            x: AUTO_SCHOOL_GPS.x,
            y: AUTO_SCHOOL_GPS.y,
            z: AUTO_SCHOOL_GPS.z,
            args: { id: 1 }
        }));
        alt.emit("api.notify", "[QEX: Альтернативный GPS установлен на автошколу с аргументами]", 1);
        await delay(300 + delayModifier);
        await waitUntilRunning();
        native.setEntityCoordsNoOffset(alt.Player.local.scriptID, INSTRUCTOR_POSITION.x, INSTRUCTOR_POSITION.y, INSTRUCTOR_POSITION.z, false, false, false);
        alt.emit("api.notify", "[QEX: Телепортация к инструктору по вождению]", 1);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(DIALOG_EVENT, 59, 7);
        await delay(200 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 1);
        await delay(250 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 0);
        await delay(1000 + delayModifier);
        await waitUntilRunning();
        alt.emitServer(QUEST_EVENT, 7, 0);
        alt.emit("api.notify", "[QEX: Запуск маршрута автошколы (первый проход)]", 1);
        await waitUntilRunning();
        startAutoSchoolRoute(true);
    }

function unloadScript() {
    isMenuOpen = false;
    if (menuWebview) {
        menuWebview.isVisible = false;
        menuWebview.unfocus();
    }
    alt.showCursor(false);
    alt.toggleGameControls(true);

    activeIntervals.forEach(intervalId => alt.clearInterval(intervalId));
    activeIntervals = [];
    fpsHistory = [];

    const localPlayer = alt.Player.local;
    native.freezeEntityPosition(localPlayer.scriptID, false);
    const vehicle = native.getVehiclePedIsIn(localPlayer.scriptID, false);
    if (vehicle) {
        native.freezeEntityPosition(vehicle, false);
    }

    isBotActive = false;
    isRunning = false;

    alt.offServer(serverEventHandler);
    alt.offServer('job.mining.setRandomGatherPoint', eventHandlers.gatherPoint);
    alt.offServer('job.mining.setRandomUnloadPoint', eventHandlers.unloadPoint);
    alt.off('gps.setPoint', gpsSetPointHandler);
    alt.off('keydown', keydownHandler);
    
    if (menuWebview) {
        menuWebview.emit('playUnloadSound');
        setTimeout(() => {
            menuWebview.destroy();
            menuWebview = null;
            alt.emit("api.notify", "[QEX: Скрипт выгружен]", 1);
        }, 1200);
    }
}

document.getElementById('teleport-guide-sidebar-button').addEventListener('click', () => {
    alt.emit('teleportToGuide');
});

document.getElementById('teleport-guide-button-main').addEventListener('click', () => {
    alt.emit('teleportToGuide');
});


const teleportGuideBtn = document.getElementById('teleport-guide-button');
if (teleportGuideBtn) {
    teleportGuideBtn.className = '';
    teleportGuideBtn.classList.add('tab-button'); 
    teleportGuideBtn.id = 'teleport-guide-button';
    teleportGuideBtn.style.backgroundColor = 'var(--primary-color)';
    teleportGuideBtn.style.color = 'var(--text-color)';
    teleportGuideBtn.style.padding = '10px 18px';
    teleportGuideBtn.style.minWidth = 'calc(125px * 0.8)';
    teleportGuideBtn.style.maxWidth = 'calc(225px * 0.8)';
    teleportGuideBtn.style.width = '80%';
    teleportGuideBtn.style.border = 'none';
    teleportGuideBtn.style.borderRadius = '4px';
    teleportGuideBtn.style.cursor = 'pointer';
    teleportGuideBtn.style.margin = '5px';
    teleportGuideBtn.style.fontFamily = "'Manrope', sans-serif";
    teleportGuideBtn.style.textAlign = 'center';
    teleportGuideBtn.style.whiteSpace = 'nowrap';
    teleportGuideBtn.addEventListener('click', () => {
        alt.emit('teleportToGuide');
    });
}


const data = JSON.stringify({
    driverId: userId,
    price: 500,
    pos: { x: 905, y: -186.376, z: 72.6385 }
});

const teleportDogBagBtn = document.getElementById('teleport-dogbag-button');
if (teleportDogBagBtn) {
    teleportDogBagBtn.addEventListener('click', () => {
        alt.emitServer(DOG_BAG, "find_dog", "null");
        setTimeout(() => {
            alt.emitServer(DOG_BAG, "find_bag", "null");
        }, 200);
    });
}