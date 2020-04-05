Settings = {

    "title": "gold",

    "name": "gold",

    "version": { "default": "1.0.1560845902188", "type": "string" },

    "debug": { "default": false, "type": "boolean", "editor": { "title": "Debug mode", "description": "Disable code compression, enable logging and some other debug functionality.", "control": "switch", "section": "system", "priority": 10 } },

    "debug-logger": { "default": "native", "type": "select", "values": ["native", "custom", "firebug", "none"], "editor": { "title": "Debug messages", "description": "Where to show debug messages?", "option-descriptions": { "none": "Disable debug messages", "native": "Regular browser console", "custom": "Over the ad", "firebug": "Firebug Lite" }, "control": "radio", "section": "system", "priority": 10.1, "dependency": { "name": "debug", "value": true } } },

    "publisher": { "type": "select", "default": "none", "values": ["google", "rovio", "sega", "kidoz", "facebook", "facebook-instant-games", "pocket-math", "playable-kit", "applovin", "unity-ads", "adcolony", "tapjoy", "iron-source", "vungle", "life-street", "aarki", "none"], "description": "If you use one of listed ad networks choose it, to enable specific code and fixes." },

    "publisher-settings": { "type": "key-value", "default": { "width": 320, "height": 480, "fixed-size": false }, "description": "Various settings which needed for specific ad network." },

    "viewport-size": { "type": "select", "default": "window-inner-dimensions", "values": ["mraid-max-size", "mraid-screen-size", "window-inner-dimensions", "screen-size"], "editor": { "title": "Viewport size", "description": "Method to detect viewport size.", "option-descriptions": { "mraid-max-size": "Mraid max size", "mraid-screen-size": "Mraid screen size", "window-inner-dimensions": "Window inner dimensions", "screen-size": "Screen size" }, "control": "radio", "section": "system", "priority": 1 } },

    "viewport-size-protection": { "default": true, "type": "boolean", "editor": { "title": "Viewport size protection", "description": "Sometimes mraid can return 10x10 px size of viewport or 414x414 px which is incorrect. Enable this options to stabilize and fix incorrect values.", "control": "switch", "section": "system", "priority": 1.1 } },

    "viewport-aspect-ratio": { "default": "none", "type": "select", "values": ["portrait", "landscape", "none"], "description": "Viewport sizes aspect ratio. Set it to \"portrait\" or \"landscape\" if you want always show your ad in \"portrait\" or \"landscape\" mode." },

    "viewport-aspect-ratio-portrait": { "default": 0.75, "type": "number", "description": "Maximum ratio of width to height. Used if \"Viewport aspect ratio\" is set to \"portrait\"" },

    "viewport-aspect-ratio-landscape": { "default": 0.75, "type": "number", "description": "Maximum ratio of height to width. Used if \"Viewport aspect ratio\" is set to \"landscape\"" },

    "assets-path": { "default": "", "type": "string", "description": "Path to game assets on your server." },

    "target-url": { "default": "", "type": "string" },

    "web-mode": { "default": "redirect", "type": "select", "values": ["alert", "redirect", "mraid", "none"] },

    "tween-factor-default": { "default": 1, "type": "number", "control": "slider", "editor": { "title": "Default speed of animations", "description": "Default speed of 'tween' and 'timeout' animations.", "section": "main" }, "playable-kit": true },

    "tween-factor-gameplay": { "default": 1, "type": "number", "control": "slider", "editor": { "title": "Speed of gameplay animations", "description": "Default speed of gameplay 'tween' and 'timeout' animations.", "section": "main" }, "playable-kit": true },

    "tween-factor-tutorial": { "default": 1, "type": "number", "control": "slider", "editor": { "title": "Speed of tutorial animations", "description": "Default speed of tutorial 'tween' and 'timeout' animations.", "section": "main" }, "playable-kit": true },

    "tween-factor-end-screen": { "default": 1, "type": "number", "control": "slider", "editor": { "title": "Speed of end screen animations", "description": "Default speed of end screen 'tween' and 'timeout' animations.", "section": "main" }, "playable-kit": true },

    "tween-factor-win-animation": { "default": 0.8, "type": "number", "control": "slider", "description": "Default speed of win animations" },

    "game-code-url": { "default": "Builds/gold.min.js", "type": "string" },

    "game-loader-url": { "default": "Builds/gold-loader.min.js", "type": "string" },

    "loading-overlay-styles": { "type": "css", "default": {} },
    "loading-overlay-show-time": {"type": "number", "default": 200, "playable-kit": true, "editor": { "title": "Loading show time", "description": "Loading screen show animation time." } },
    "loading-overlay-hide-time": { "type": "number","default": 1000,"playable-kit": true, "editor": { "title": "Loading hide time", "description": "Loading screen hide animation time." }},
    "loading-background-styles": {"type": "css","default": { "background-color": "#000000", "transform": "scale(1.07)" }},
    "loading-icon-styles": {"type": "css","default": { "background-color": "black","left": "0","right": "0","top": "0","bottom": "0"} },
    "loading-progress-styles": {"type": "css","default": {"line-height": "50px", "text-align": "center", "font-family": "Arial", "font-size": "50px", "font-weight": "bold", "color": "#fff", "top": "83%", "bottom": "25%",}},
    "loading-progress-fill-styles": {"type": "css","default": {"background": "block","left": "2%","width": "10%","bottom": "5%","height": "100%","background-color": "#78be20",}},
    "loading-code-progress-percent": 0.5,
    "loading-click-out": { "default": true, "type": "boolean", "playable-kit": true, "editor": { "title": "Loading click out", "description": "If true, loading screen will work like CTA button." } },

    "load-on": { "default": "immediately", "type": "select", "values": ["immediately", "none"], "description": "If you need to load ad manually set this to 'none' and use 'Loader.load()' command." },
    "start-on": { "default": "viewable", "type": "select", "values": ["load", "ready", "viewable", "none"], "description": "If you need to show ad manually set this to 'none' and use 'App.startGame()' command." },

    "in-game-click-out": { "default": "redirect", "type": "select", "values": ["cta", "redirect", "none"], "description": "Action for the in-game cta button (if exist)" },

    "cta-only": { "default": false, "type": "boolean" },

    "end-screen-click-out": { "default": true, "type": "boolean", "description": "Make all end screen clickable or not." },

    "end-screen-click-out-block": { "default": 1000, "type": "number", "description": "Timeout between end screen showed and possibility to click on cta buttons." },

    "click-out-multiple": { "default": 1000, "type": "number", "description": "Minimal timeout between multiple clicks on CTA buttons. 0 will disable multiple clicks and allow only one click on CTA per session (recommended)." },

    "try-again": { "default": 1, "type": "number", "playable-kit": true, "editor": { "title": "Try again", "description": "Possibility to return in game after end screen and start to play again. You can specify count of possible replays here. 0 will disable replay button." } },

    "gameplay-timeout": { "default": 0, "type": "number", "playable-kit": { "multiplier": 1000 }, "editor": { "title": "Gameplay timeout", "description": "Timeout from game start to the End Screen" } },

    "autoplay-timeout": { "default": 0, "type": "number", "playable-kit": { "multiplier": 1000 }, "editor": { "title": "Autoplay timeout", "description": "Timeout from rules/intro/tutorial screen to game start" } },

    "idle-timeout": { "default": 0, "type": "number", "playable-kit": { "multiplier": 1000 }, "editor": { "title": "Idle timeout", "description": "Timeout from last user action to the End Screen" } },

    "custom-close-button": { "default": 0, "type": "number" },

    "close-button-container-styles": { "type": "css", "default": { "opacity": "0.4", "width": "30px", "height": "30px", "right": "7px", "top": "7px" } },

    "close-button-bar-styles": { "type": "css", "default": { "strokeWidth": 5, "color": "#FFF", "trailColor": "#eee", "trailWidth": 1.1, "svgStyle": null } },

    "close-button-styles": { "type": "css", "default": { "width": "16px", "height": "16px", "right": "7px", "top": "7px", "backgroundSize": "80%" } },

    "close-button-timer-styles": { "type": "css", "default": { "width": "17px", "height": "16px", "right": "7px", "top": "7px", "lineHeight": "16px", "text-align": "center", "fontFamily": "Arial", "fontSize": "16px", "color": "#FFF" } },

    "rewarded-timeout": { "default": 0, "type": "number", "description": "Timeout which blocks open and close mraid actions. So user must play specified count of time." },

    "rewarded-click-toggle": { "default": true, "type": "boolean", "description": "Allow auto redirect toggle in rewarded-timeout mode if user click on CTA buttons several times." },

    "interstitial-timeout": { "default": 0, "type": "number", "description": "Timeout with radial progress indicator for close-button." },

    "interstitial-action": { "default": "none", "type": "select", "values": ["cta", "redirect", "none"] },

    "intro": { "default": false, "type": "boolean", "playable-kit": true, "editor": { "title": "Intro", "description": "If false, intro will be disabled" } },

    "tutorial": { "default": false, "type": "boolean", "playable-kit": true, "editor": { "title": "Tutorial", "description": "If false, tutorial will be disabled." } },

    "tutorial-timeout": { "default": 500, "type": "number", "playable-kit": { "multiplier": 1000 }, "editor": { "title": "Tutorial timeout", "description": "Timeout between last user action and tutorial." } },

    "assets-quality": { "default": "high", "type": "select", "values": ["medium", "high", "low"], "playable-kit": true, "editor": { "title": "Assets quality", "description": "Quality of the images and sounds. Lower quality - faster loading. Medium quality is recommended for production. High quality recommended for the preview." } },

    "filters-quality": { "default": 1, "type": "number", "playable-kit": true, "editor": { "title": "Filters quality", "description": "Quality multiplier for some of the filters from 0 to 1. 0 will disable all filters. Recommended to disable it on low power devices." } },

    "particles-quality": { "default": 1, "type": "number", "playable-kit": true, "editor": { "title": "Particle emitters quality", "description": "Count of particles for the particle emitter effects. From 0% to 100%. You can also use more then 100% to increase count of particles." } },

    "force-canvas-renderer": { "default": true, "type": "boolean", "playable-kit": true, "editor": { "title": "Force canvas renderer", "description": "If true, WebGL will be disabled." } },

    "precision-fragment": { "default": "mediump", "type": "select", "values": ["lowp", "mediump", "highp"] },

    "sounds": { "default": true, "type": "select", "values": [true, false, "delayed"], "playable-kit": true, "editor": { "title": "Sounds load strategy", "description": "Default load strategy for sounds: 'true' will preload sounds, 'false' will disable sounds and 'delayed' will load sounds after game started." } },

    "creative-template-device": { "default": "iPhone", "type": "select", "values": ["iPhone", "iPad", "iPhoneX"], "description": "Default orientation in first launch inside Creative Preview" },

    "creative-template-orientation": { "default": "landscape", "type": "select", "values": ["portrait", "landscape"], "description": "Default orientation in first launch inside Creative Preview" },

    "track-events": { "type": "info", "description": "Loader Initialized, Code Loaded, Assets Loaded, Click Out - Loading Screen, Rewarded Timeout with Redirect, Rewarded Timeout, Interstitial Timeout, Interstitial Timeout - CTA, Interstitial Timeout - Click Out, Gameplay Timeout, Autoplay Timeout, Idle Timeout, Close Button Showed, Click Out - In Game, Close Click, End Screen Showed, Click Out - Interstitial Timeout, Click Out - End Screen, Game Starts, First Interaction, Interaction <n>" },

    "track-events-on-viewable": { "default": true, "type": "boolean" },

    "track-google-analytics-key": { "default": "", "type": "string" },

    "track-google-analytics-actions": { "Loader Initialized": [["set", "appName", "Cui Wild 7"], ["set", "appVersion", "1.0"], ["set", "page", "Loading"], ["send", "pageview", { "sessionControl": "start" }], ["send", "event", "Loading", "Impression", "v1.0"]], "Assets Loaded": [["send", "event", "Loading", "Game Loaded", "Not Skipped"]], "Tutorial Show": [["set", "page", "Tutorial"], ["send", "pageview"], ["send", "event", "Gameplay", "Tutorial Started"]], "Game Starts": [["set", "page", "Game"], ["send", "pageview"], ["send", "event", "Gameplay", "Game Started", "Play 1"]], "Interaction 1": [["send", "event", "Gameplay", "Game Interacted"]], "Interaction 2": [["send", "event", "Gameplay", "Game Interacted X", "2"]], "Interaction 3": [["send", "event", "Gameplay", "Game Interacted X", "3"]], "Game Completed": [["send", "event", "Gameplay", "Game Completed", "win", 1]], "End Screen Showed": [["set", "page", "End"], ["send", "pageview"]], "Retry": [["set", "page", "Replay"], ["send", "pageview"], ["send", "event", "Gameplay", "Game Started", "Play 2"]], "Click Out - In Game": [["send", "event", "Exit", "CTA Pressed Game"]], "Click Out - End Screen": [["send", "event", "Exit", "CTA Pressed End"]], "Error": [["send", "event", "Diagnostic", "Error"]] },

    "track-mixpanel-key": { "default": "", "type": "string" },

    "track-mixpanel-actions": { "Loader Initialized": "Start Load Assets", "Assets Loaded": "Assets Loaded", "Game Starts": "Game Started", "End Screen Showed": "End Screen Showed", "Click Out - End Screen": "Click Out - End Screen", "Click Out - In Game": "Click Out - In Game", "Click Out - Loading Screen": "Click Out - Loading Screen", "Error": "Error" },

    "track-impression-urls": { "default": [], "type": "list" },

    "track-impression-actions": { "Loader Initialized": 0 },

    "track-libraries": { "Loader Initialized": [["PlayableKit.analytics.loading", []]], "Assets Loaded": [["PlayableKit.analytics.loaded", []]], "Menu Showed": [["PlayableKit.analytics.menu", []]], "Intro Started": [["PlayableKit.analytics.intro", []]], "Game Starts": [["PlayableKit.analytics.game", []]], "Interaction:multiple": [["PlayableKit.analytics.gameInteracted", []]], "Game Completed": [["PlayableKit.analytics.gameOver", [0, 1]]], "Outro Started": [["PlayableKit.analytics.outro", []]], "End Screen Showed": [["PlayableKit.analytics.end", []]] },

    "complete-combinations": { "spin 0": [{ "symbols": ["symbol-2.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-2.png", "symbol-4.png", "symbol-2.png", "symbol-3.png", "symbol-2.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png"], "winSymbols": [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false], "winPoints": 0.5 }, { "symbols": ["symbol-8.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-8.png", "symbol-8.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-8.png", "symbol-1.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-1.png"], "winSymbols": [false, false, true, false, false, false, true, false, true, false, true, false, false, false, true], "winPoints": 0.5 }, { "symbols": ["symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-7.png", "symbol-5.png", "symbol-7.png", "symbol-5.png", "symbol-7.png", "symbol-1.png", "symbol-5.png", "symbol-1.png", "symbol-5.png", "symbol-1.png"], "winSymbols": [false, true, false, true, false, false, false, false, false, false, true, false, true, false, true], "winPoints": 0.5 }, { "symbols": ["symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-7.png", "symbol-1.png", "symbol-7.png", "symbol-1.png", "symbol-7.png"], "winSymbols": [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false], "winPoints": 0.5 }, { "symbols": ["symbol-4.png", "symbol-4.png", "symbol-8.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-8.png", "symbol-4.png", "symbol-4.png"], "winSymbols": [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false], "winPoints": 0.5 }], "spin 1": [{ "symbols": ["symbol-4.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-4.png", "symbol-10.png", "symbol-4.png"], "winSymbols": [false, true, false, true, false, true, true, true, true, true, false, true, false, true, false], "winPoints": 1 }, { "symbols": ["symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-8.png", "symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-8.png", "symbol-2.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-2.png"], "winSymbols": [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true], "winPoints": 1 }, { "symbols": ["symbol-7.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-7.png", "symbol-2.png", "symbol-2.png", "symbol-3.png", "symbol-2.png", "symbol-2.png", "symbol-7.png", "symbol-5.png", "symbol-2.png", "symbol-5.png", "symbol-7.png"], "winSymbols": [false, false, true, false, false, true, true, false, true, true, false, false, true, false, false], "winPoints": 1 }, { "symbols": ["symbol-4.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-4.png", "symbol-1.png", "symbol-1.png", "symbol-1.png", "symbol-1.png", "symbol-1.png", "symbol-4.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-4.png"], "winSymbols": [false, false, true, false, false, true, true, true, true, true, false, false, true, false, false], "winPoints": 1 }, { "symbols": ["symbol-3.png", "symbol-5.png", "symbol-5.png", "symbol-5.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-5.png", "symbol-5.png", "symbol-5.png", "symbol-3.png"], "winSymbols": [true, false, false, false, true, true, true, true, true, true, true, false, false, false, true], "winPoints": 1 }], "spin 2": [{ "symbols": ["symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png"], "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], "winPoints": 1.5 }, { "symbols": ["symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png", "symbol-10.png"], "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], "winPoints": 1.5 }, { "symbols": ["symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-4.png", "symbol-2.png", "symbol-4.png", "symbol-4.png"], "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], "winPoints": 1.5 }, { "symbols": ["symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png", "symbol-3.png"], "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], "winPoints": 1.5 }, { "symbols": ["symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png", "symbol-1.png", "symbol-4.png"], "winSymbols": [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], "winPoints": 1.5 }] },

    "Gameplay": {
        "download button text": { "text": "DOWNLOAD NOW" },
        "win text 0": { "text": "WIN:" },
        "spin button text": { "text": "SPIN" },
        "game board text": { "text": "50 PAYLINES" },
        "congratulations button text": { "text": "Continue" }
    },

    "Tutorial": {

    },

    "CallToAction": {

    },

    "Assets": {
        //Image
        "orient_switch.jpg": { "type": "image", "url": "Images/orient_switch.jpg" },
        "loader": { "type": "image", "url": "Images/loader.png" },
        "logo": { "type": "image", "url": "Images/logo.png" },

        "background": { "type": "image", "url": "Images/basegame/background.png" },
        "bonusBackground": { "type": "image", "url": "Images/bonusgame/freespin/background.png" },
        "reels": { "type": "image", "url": "Images/basegame/reels.png" },
        "bonusReels": { "type": "image", "url": "Images/bonusgame/bonusreel.png" },
        "whiteflash": { "type": "image", "url": "Images/basegame/whiteflash.png" },
        "30lines": { "type": "image", "url": "Images/basegame/30lines.png" },
        "bonus30lines": { "type": "image", "url": "Images/bonusgame/freespin/30lines.png" },

        "pickBackground": { "type": "image", "url": "Images/bonusgame/pick/background.png" },

        "bonus_freespin_reel": { "type": "image", "url": "Images/bonusgame/bonusreel.png" },
        "bonus_freespin_30lines": { "type": "image", "url": "Images/bonusgame/freespin/30lines.png" },
        "bonus_freespin_background": { "type": "image", "url": "Images/bonusgame/freespin/background.png" },
        "bonus_freespin_bannerflair": { "type": "image", "url": "Images/bonusgame/freespin/bannerflair.png" },
        "bonus_freespin_blackoutro": { "type": "image", "url": "Images/bonusgame/freespin/blackoutro.png" },
        "bonus_freespin_congratstext": { "type": "image", "url": "Images/bonusgame/freespin/congratstext.png" },
        "bonus_freespin_duringtext": { "type": "image", "url": "Images/bonusgame/freespin/duringtext.png" },
        "bonus_freespin_fgbackgroundeffect": { "type": "image", "url": "Images/bonusgame/freespin/fgbackgroundeffect.png" },
        "bonus_freespin_freetext": { "type": "image", "url": "Images/bonusgame/freespin/freetext.png" },
        "bonus_freespin_gametext": { "type": "image", "url": "Images/bonusgame/freespin/gametext.png" },
        "bonus_freespin_wontext": { "type": "image", "url": "Images/bonusgame/freespin/wontext.png" },
        "bonus_pick_background": { "type": "image", "url": "Images/bonusgame/pick/background.png" },
        "bonus_pick_pickblack": { "type": "image", "url": "Images/bonusgame/pick/pickblack.png" },
        "bonus_pick_pickblackopen": { "type": "image", "url": "Images/bonusgame/pick/pickblackopen.png" },
        "bonus_pick_pickblue": { "type": "image", "url": "Images/bonusgame/pick/pickblue.png" },
        "bonus_pick_pickblueopen": { "type": "image", "url": "Images/bonusgame/pick/pickblueopen.png" },
        "bonus_pick_pickbrown": { "type": "image", "url": "Images/bonusgame/pick/pickbrown.png" },
        "bonus_pick_pickbrownopen": { "type": "image", "url": "Images/bonusgame/pick/pickbrownopen.png" },
        "bonus_pick_pickgoldopen": { "type": "image", "url": "Images/bonusgame/pick/pickgoldopen.png" },
        "bonus_pick_pickgreen": { "type": "image", "url": "Images/bonusgame/pick/pickgreen.png" },
        "bonus_pick_pickgreenopen": { "type": "image", "url": "Images/bonusgame/pick/pickgreenopen.png" },
        "bonus_pick_pickred": { "type": "image", "url": "Images/bonusgame/pick/pickred.png" },
        "bonus_pick_pickredopen": { "type": "image", "url": "Images/bonusgame/pick/pickredopen.png" },
        "bonus_pick_textbaseup": { "type": "image", "url": "Images/bonusgame/pick/textbaseup.png" },
        "bonus_pick_textbegin": { "type": "image", "url": "Images/bonusgame/pick/textbegin.png" },
        "bonus_pick_textgiven": { "type": "image", "url": "Images/bonusgame/pick/textgiven.png" },
        "bonus_pick_textpick": { "type": "image", "url": "Images/bonusgame/pick/textpick.png" },
        "bonus_pick_textremaining": { "type": "image", "url": "Images/bonusgame/pick/textremaining.png" },
        "bonus_pick_texttouch": { "type": "image", "url": "Images/bonusgame/pick/texttouch.png" },
        "bonus_pick_textuntil": { "type": "image", "url": "Images/bonusgame/pick/textuntil.png" },

        "jackpotbg": { "type": "image", "url": "Images/jackpot/jackpotbg.png" },
        "jpearth": { "type": "image", "url": "Images/jackpot/jpearth.png" },
        "jpearthbanner": { "type": "image", "url": "Images/jackpot/jpearthbanner.png" },
        "jpearthglow": { "type": "image", "url": "Images/jackpot/jpearthglow.png" },
        "jpearthheader": { "type": "image", "url": "Images/jackpot/jpearthheader.png" },
        "jpfire": { "type": "image", "url": "Images/jackpot/jpfire.png" },
        "jpfirebanner": { "type": "image", "url": "Images/jackpot/jpfirebanner.png" },
        "jpfireglow": { "type": "image", "url": "Images/jackpot/jpfireglow.png" },
        "jpfireheader": { "type": "image", "url": "Images/jackpot/jpfireheader.png" },
        "jpthunder": { "type": "image", "url": "Images/jackpot/jpthunder.png" },
        "jpthunderbanner": { "type": "image", "url": "Images/jackpot/jpthunderbanner.png" },
        "jpthunderglow": { "type": "image", "url": "Images/jackpot/jpthunderglow.png" },
        "jpthunderheader": { "type": "image", "url": "Images/jackpot/jpthunderheader.png" },
        "jpwater": { "type": "image", "url": "Images/jackpot/jpwater.png" },
        "jpwaterbanner": { "type": "image", "url": "Images/jackpot/jpwaterbanner.png" },
        "jpwaterglow": { "type": "image", "url": "Images/jackpot/jpwaterglow.png" },
        "jpwaterheader": { "type": "image", "url": "Images/jackpot/jpwaterheader.png" },
        "jpwind": { "type": "image", "url": "Images/jackpot/jpwind.png" },
        "jpwindbanner": { "type": "image", "url": "Images/jackpot/jpwindbanner.png" },
        "jpwindglow": { "type": "image", "url": "Images/jackpot/jpwindglow.png" },
        "jpwindheader": { "type": "image", "url": "Images/jackpot/jpwindheader.png" },
        "last": { "type": "image", "url": "Images/jackpot/last.png" },
        "splat": { "type": "image", "url": "Images/jackpot/splat.png" },
        "bonuspane.png": { "type": "image", "url": "Images/bonuspane.png" },

        "wins_big": { "type": "image", "url": "Images/wins/big.png" },
        "wins_super": { "type": "image", "url": "Images/wins/super.png" },
        "wins_win": { "type": "image", "url": "Images/wins/win.png" },
        "wins_winBox": { "type": "image", "url": "Images/wins/winBox.png" },

        "helpPage1": { "type": "image", "url": "Images/helpscreens/page1.png" },
        "helpPage2": { "type": "image", "url": "Images/helpscreens/page2.png" },
        "helpPage3": { "type": "image", "url": "Images/helpscreens/page3.png" },
        "helpPage4": { "type": "image", "url": "Images/helpscreens/page4.png" },
        "helpPage5": { "type": "image", "url": "Images/helpscreens/page5.png" },
        "helpPage6": { "type": "image", "url": "Images/helpscreens/page6.png" },
        "helpPage7": { "type": "image", "url": "Images/helpscreens/page7.png" },
        "helpPage8": { "type": "image", "url": "Images/helpscreens/page8.png" },
        "helpPage9": { "type": "image", "url": "Images/helpscreens/page9.png" },
        // ########## Font ###########
        "font": { "type": "bitmap-font", "url": "Fonts/font.fnt" },
        "blue": { "type": "bitmap-font", "url": "Fonts/blue.fnt" },
        "green": { "type": "bitmap-font", "url": "Fonts/green.fnt" },
        "red": { "type": "bitmap-font", "url": "Fonts/red.fnt" },

        // ########### Texture ############
        "Netent_Logo": { "type": "atlas", "url": "Textures/featureSplash/Netent_Logo.json" },
        "Netent_Logo2": { "type": "atlas", "url": "Textures/featureSplash/Netent_Logo2.json" },

        "confetti": { "type": "atlas", "url": "Textures/confetti.json" },
        "panel": { "type": "atlas", "url": "Textures/panel.json" },
        "reelanticipation": { "type": "atlas", "url": "Textures/reelanticipation.json" },
        "sparkle": { "type": "atlas", "url": "Textures/sparkle.json" },
        "symbols": { "type": "atlas", "url": "Textures/symbols.json" },

        "anim_0": { "type": "atlas", "url": "Textures/animations/0.json" },
        "anim_12": { "type": "atlas", "url": "Textures/animations/12.json" },
        "anim_12drop": { "type": "atlas", "url": "Textures/animations/12drop.json" },
        "anim_13": { "type": "atlas", "url": "Textures/animations/13.json" },
        "anim_13drop": { "type": "atlas", "url": "Textures/animations/13drop.json" },
        "spin_intro": { "type": "atlas", "url": "Textures/spin_intro.json" },

        //############ Sound #######
        "anticipation": { "type": "sound", "url": "Sounds/anticipation.mp3" },
        "reel_stop": { "type": "sound", "url": "Sounds/reel.mp3" },
        "reelspin": { "type": "sound", "url": "Sounds/reelspin.mp3" },
        "reelstart": { "type": "sound", "url": "Sounds/reelstart.mp3" },

        "drop_0": { "type": "sound", "url": "Sounds/drop/0.mp3" },
        "drop_12_1": { "type": "sound", "url": "Sounds/drop/12/1.mp3" },
        "drop_12_2": { "type": "sound", "url": "Sounds/drop/12/2.mp3" },
        "drop_12_3": { "type": "sound", "url": "Sounds/drop/12/3.mp3" },
        "drop_12_4": { "type": "sound", "url": "Sounds/drop/12/4.mp3" },
        "drop_12_5": { "type": "sound", "url": "Sounds/drop/12/5.mp3" },

        "drop_major_1": { "type": "sound", "url": "Sounds/drop/major/1.mp3" },
        "drop_major_2": { "type": "sound", "url": "Sounds/drop/major/2.mp3" },
        "drop_major_3": { "type": "sound", "url": "Sounds/drop/major/3.mp3" },
        "drop_major_4": { "type": "sound", "url": "Sounds/drop/major/4.mp3" },
        "drop_major_5": { "type": "sound", "url": "Sounds/drop/major/5.mp3" },

        "freespin_intro": { "type": "sound", "url": "Sounds/freespin/intro.mp3" },
        "freespin_loop": { "type": "sound", "url": "Sounds/freespin/loop.mp3" },
        "freespin_multtransform": { "type": "sound", "url": "Sounds/freespin/multtransform.mp3" },
        "freespin_outro": { "type": "sound", "url": "Sounds/freespin/outro.mp3" },

        "panel_auto": { "type": "sound", "url": "Sounds/panel/auto.mp3" },
        "panel_denom": { "type": "sound", "url": "Sounds/panel/denom.mp3" },
        "panel_help": { "type": "sound", "url": "Sounds/panel/help.mp3" },
        "panel_lobby": { "type": "sound", "url": "Sounds/panel/lobby.mp3" },
        "panel_max": { "type": "sound", "url": "Sounds/panel/max.mp3" },
        "panel_menu": { "type": "sound", "url": "Sounds/panel/menu.mp3" },
        "panel_recall": { "type": "sound", "url": "Sounds/panel/recall.mp3" },
        "panel_sound": { "type": "sound", "url": "Sounds/panel/sound.mp3" },

        "auto_0": { "type": "sound", "url": "Sounds/panel/autos/auto_0.mp3" },
        "auto_1": { "type": "sound", "url": "Sounds/panel/autos/auto_1.mp3" },
        "auto_2": { "type": "sound", "url": "Sounds/panel/autos/auto_2.mp3" },
        "auto_3": { "type": "sound", "url": "Sounds/panel/autos/auto_3.mp3" },
        "auto_4": { "type": "sound", "url": "Sounds/panel/autos/auto_4.mp3" },
        "auto_5": { "type": "sound", "url": "Sounds/panel/autos/auto_5.mp3" },
        "auto_6": { "type": "sound", "url": "Sounds/panel/autos/auto_6.mp3" },

        "bet_1": { "type": "sound", "url": "Sounds/panel/coins/bet_1.mp3" },
        "bet_2": { "type": "sound", "url": "Sounds/panel/coins/bet_2.mp3" },
        "bet_3": { "type": "sound", "url": "Sounds/panel/coins/bet_3.mp3" },
        "bet_4": { "type": "sound", "url": "Sounds/panel/coins/bet_4.mp3" },
        "bet_5": { "type": "sound", "url": "Sounds/panel/coins/bet_5.mp3" },

        "denom_1":  { "type": "sound", "url":  "Sounds/panel/denoms/denom_01.mp3" },
        "denom_2":  { "type": "sound", "url":  "Sounds/panel/denoms/denom_05.mp3" },
        "denom_3": { "type": "sound", "url":  "Sounds/panel/denoms/denom_10.mp3" },
        "denom_4": { "type": "sound", "url":  "Sounds/panel/denoms/denom_25.mp3" },
        "denom_5": { "type": "sound", "url":  "Sounds/panel/denoms/denom_50.mp3" },
        "denom_6": { "type": "sound", "url": "Sounds/panel/denoms/denom_100.mp3" },
        "denom_7": { "type": "sound", "url": "Sounds/panel/denoms/denom_500.mp3" },

        "pick_sound": { "type": "sound", "url": "Sounds/pick/baseup.mp3" },
        "pick_fsup": { "type": "sound", "url": "Sounds/pick/fsup.mp3" },
        "pick_intro": { "type": "sound", "url": "Sounds/pick/intro.mp3" },
        "pick_open": { "type": "sound", "url": "Sounds/pick/open.mp3" },
        "pick_outro": { "type": "sound", "url": "Sounds/pick/outro.mp3" },
        "pick_pickloop": { "type": "sound", "url": "Sounds/pick/pickloop.mp3" },

        "bigwin_1": { "type": "sound", "url": "Sounds/win/bigwin_1.mp3" },
        "bigwin_2": { "type": "sound", "url": "Sounds/win/bigwin_2.mp3" },
        "bigwin_3": { "type": "sound", "url": "Sounds/win/bigwin_3.mp3" },
        "win_1": { "type": "sound", "url": "Sounds/win/win_1.mp3" },
    }
};
