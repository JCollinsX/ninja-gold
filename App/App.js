var App = new Game({

	ClearBeforeRender: true,
	Antialias: false,
	RoundPixels: false,
	MoveWhenInside: false,
	PrecisionFragment: "mediump",

	Symbols: [], //Use for Random init reels.

	SymbolsNames: {
	    'S00': '11', //9        UniqueSymbols[0]
	    'S01': '10', //10       UniqueSymbols[1]
	    'S02': '9', //J         UniqueSymbols[2]
	    'S03': '8', //Q         UniqueSymbols[3]
	    'S04': '7', //K         UniqueSymbols[4]
	    'S05': '6', //A         UniqueSymbols[5]
	    'S06': '5', //Green(wind)     UniqueSymbols[6]
	    'S07': '4', //Cyan(thunder)      UniqueSymbols[7]
	    'S08': '3', //Blue(water)      UniqueSymbols[8]
	    'S09': '2', //Mergenta(fire)  UniqueSymbols[9]
	    'S10': '1', //Yellow(earth)    UniqueSymbols[10]
	    'Scatter': '12', //     UniqueSymbols[11]
	    'Wild': '0', //         UniqueSymbols[12]
	},

	//ScatterNames: {   'Scatter': 'B01ScatterBaseGame_0001.png'  /*freespin*/	},

	MovieClips: {
	    'WIN_EF_GILT_00_':  { start: 0, end: 24, speed: 0.3, suffix:'', frames: [] }, //confetti.png
	    'RHL_EF_REEL_00_':  { start: 0, end: 9,  speed: 0.3, suffix:'', frames: [] }, //reelanticipation-hd.png
	    'PIC_EF_TOUCH_00_': { start: 0, end: 13, speed: 0.3, suffix:'', frames: [] }, //sparkle.png
                                                             suffix:'',
	    'SYM_SY_WLHIT_00_': { start: 0, end: 24, speed: 0.3, suffix:'', frames: [] }, //animations/0.png
	    'SYM_SY_BOTRI_00_': { start: 0, end: 24, speed: 0.3, suffix:'', frames: [] }, //animations/12.png
	    'SYM_SY_BOSTP_00_': { start: 0, end: 24, speed: 0.3, suffix:'', frames: [] }, //animations/12drop.png
	    'Ninja_2A_':        { start: 0, end: 24, speed: 0.3, suffix:'', frames: [] }, //animations/13.png
	    'Ninja_1_':         { start: 0, end: 24, speed: 0.3, suffix:'', frames: [] }, //animations/13drop.png
	},

	Lines:{
		"None":  {color: 0x000000, nodepos:[0,0], 		positions:[[0,0],[1,1]]},
		//Left
		"Line4":  {color: 0xff9900, nodepos:[-671,-355], positions:[[-630,-367],[-509,-367],            [0,177],			[498,-350],[616,-350]] },
		"Line20": {color: 0x003aff, nodepos:[-671,-308], positions:[[-630,-302],[-509,-302],[-254,256], [0,307], [254,256], [498,-228],[616,-228]] },
		"Line2":  {color: 0xff4200, nodepos:[-671,-261], positions:[[-630,-275],[-509,-275],[-254,-370],[0,-368],[254,-370],           [616,-370]] },
		"Line9":  {color: 0x59e200, nodepos:[-671,-214], positions:[[-630,-222],[-509,-222],[-254,-322],[0,-75], [254,-329],[498,-323],[616,-323]] },
		"Line26": {color: 0xff24ff, nodepos:[-671,-167], positions:[[-630,-152],[-509,-152],[-254,-181],[0,356], [254,-198],[498,-183],[616,-183]] },

		"Line16": {color: 0x04e0fc, nodepos:[-671,-94], positions:[[-630,-92],[-509,-92],[-254,-274],[0,-56],[254,-284],[498,7],[616,7]] },
		"Line7":  {color: 0xc8ee00, nodepos:[-671,-47], positions:[[-630,-54],[-509,-54],[-254,-346],[0,-317],[254,-351],[498,-65],[616,-65]] },
		"Line1":  {color: 0xff1700, nodepos:[-671,0], 	positions:[[-630,-14],[-509,-14],[-254,-107],[0,-115],[254,-110],[498,-110],[616,-110]] },
		"Line6":  {color: 0xfff000, nodepos:[-671,47], 	positions:[[-630,35], [-509,35], [-254,169], [0,203], [254,171], [498,-87],[616,-87]] },
		"Line17": {color: 0x00bdff, nodepos:[-671,94], 	positions:[[-630,101],[-509,101],[-254,233],[0,-31],[254,241],[498,33],[616,33]] },

		"Line27": {color: 0xff25d0, nodepos:[-671,167], positions:[[-630,181],[-509,181],[-254,317], [0,-155],[254,339], [498,339],[616,339]] },
		"Line8":  {color: 0x8de700, nodepos:[-671,214], positions:[[-630,207],[-509,207],[-254,191], [0,-91], [254,197], [498,197],[616,197]] },
		"Line3":  {color: 0xff7000, nodepos:[-671,261], positions:[[-630,248],[-509,248],[-254,149], [0,149], [254,149], [498,149],[616,149]] },
		"Line21": {color: 0x000dff, nodepos:[-671,308], positions:[[-630,315],[-509,315],[-254,-250],[0,-209],[254,-263],[498,290],[616,290]] },
		"Line5":  {color: 0xffc502, nodepos:[-671,355], positions:[[-630,345],[-509,345],[-254,-55], [0,-340],[254,-56], [498,172],[616,172]] },

		//right:
		"Line12": {color: 0x00e123, nodepos:[671,-355], positions:[[-617,-300],[-509,-300],[-254,209],[0,-261],[254,219],[498,-360],[630,-360]] },
		"Line23": {color: 0x6e18ff, nodepos:[671,-308], positions:[[-617,-205],[-509,-205],[-254,277],[0,49],[254,289],[498,-297],[630,-297]] },
		"Line18": {color: 0x0093ff, nodepos:[671,-261], positions:[[-617,-253],[-509,-253],[-254,74],[0,-11],[254,74],[498,-257],[630,-257]] },
		"Line14": {color: 0x00e595, nodepos:[671,-214], positions:[[-617,-276],[-509,-276],[-254,20],[0,-235],[254,20],[498,-214],[630,-214]] },
		"Line29": {color: 0xff1d60, nodepos:[671,-167], positions:[[-617,361], [-509,361], [-254,340],       [254,-176],[498,-154],[630,-154]] },

		"Line24": {color: 0xaa1cff, nodepos:[671,-94], 	positions:[[-617,58], [-509,58], [-254,-200],[0,328], [254,-216],[498,-80],[630,-80]] },
		"Line11": {color: 0x00d800, nodepos:[671,-47], 	positions:[[-617,-15],[-509,-15],[-254,-4],  [0,-286],[254,-4],  [498,-45],[630,-45]] },
		"Line30": {color: 0xff1a33, nodepos:[671,0], 	positions:[[-617,104],[-509,104],[-254,360],          [254,-155],[498,20], [630,20]] },
		"Line10": {color: 0x1ae100, nodepos:[671,47], 	positions:[[-617,-40],[-509,-40],[-254,-30], [0,226], [254,-29], [498,45], [630,45]] },
		"Line25": {color: 0xe31dff, nodepos:[671,94], 	positions:[[-617,75], [-509,75], [-254,298], [0,-180],[254,314], [498,109],[630,109]] },

		"Line28": {color: 0xff2097, nodepos:[671,167], 	positions:[[-617,-157],          [-254,-157],[0,65], [254,360],[498,186],[630,186]] },
		"Line15": {color: 0x00e5cb, nodepos:[671,214], 	positions:[[-617,241],[-509,241],[-254,49],  [0,280],[254,49], [498,215],[630,215]] },
		"Line19": {color: 0x0064ff, nodepos:[671,261], 	positions:[[-617,264],[-509,264],[-254,102], [0,4],  [254,99], [498,265],[630,265]] },
		"Line22": {color: 0x3312ff, nodepos:[671,308], 	positions:[[-617,316],[-509,316],[-254,-226],[0,23],[254,-240],[498,318],[630,318]] },
		"Line13": {color: 0x00d95c, nodepos:[671,355], 	positions:[[-617,222],[-509,222],[-254,-302],[0,252],[254,-302],[498,355],[630,355]] },
	},

	prepare: function() {
	    this.PrecisionFragment = Settings["precision-fragment"];
	    this.escalibur = new Escalibur();

	    //jakovsoft Add
	    var sn_keys = Object.keys(this.SymbolsNames);
	    for (var i = 0; i < sn_keys.length; i++) {
	        var symbol = sn_keys[i];
	        this.Symbols.push({ Image: this.SymbolsNames[symbol] });
	    } //*/

	    //jakovsoft Add
	    var movieNames = Object.keys(this.MovieClips);
	    movieNames.forEach((name) => {
	        let frames = [];
	        for (let k = App.MovieClips[name].start; k <= App.MovieClips[name].end; k++) {
	            frames.push(name + k + App.MovieClips[name].suffix);
	        }
	        this.MovieClips[name].frames = frames;
	    });
	},

	ready: function () {
		MRAID.track('Assets Loaded');
		this.cacheScreenTextures();
		if (Settings["publisher"] === "playable-kit") {
			PlayableKit.onStart(function(options) {
				App.startGame();
			});
			PlayableKit.start();
		} else if (Settings["publisher"] === "facebook-instant-games") {
			if (window.FBInstant) {
				FBInstant.startGameAsync().then(function() {
					App.startGame();
				});
			} else {
				App.startGame();
			}
		} else {
			if (Settings['start-on'] === 'ready') {
				MRAID.onReady(function () {
					App.startGame();
				});
			} else if (Settings['start-on'] === 'viewable') {
				MRAID.onViewable(function() {
					App.startGame();
				});

			} else if (Settings['start-on'] === 'load') {
				App.startGame();
			}
		}
	},

	startGame: function() {
		if (!App.Loader || !App.Loader.loadCompleted) {
			if (Settings['start-on'] === "none") Settings['start-on'] = 'load';
			return;
		}

		var parent_div = document.createElement("div");
		parent_div.classList.add("container");
		parent_div.appendChild(this.Renderer.view);

	    /*var clock_div = document.createElement("div");
        clock_div.classList.add("systemclock");
        clock_div.setAttribute("id", "systemClock");
        parent_div.appendChild(clock_div);*/

		document.body.appendChild(parent_div);
	    // document.body.appendChild(this.Renderer.view);

		MRAID.showApp();

		//App.scale = [1.5,1];
        App.resize();

		if (Settings['cta-only']) App.CallToAction.show();

		else { //For Fast Load, Disable else block and call App.Gameplay.show();
		    if (false) {
		        App.NETENT_Animation.show();
		        setTimeout(() => {
		            App.NETENT_Animation.hide();
		            App.Gameplay.show();
		        }, 3000);
		    }
		    else
		        App.Gameplay.show();
		}

		Loader.hideLoadProgress();

		App.startTicker();

	}

});
