class Escalibur {

	constructor() {

		this.Name = 'Escalibur';

		this.UniqueSymbols = ["Wild", "S10", "S09", "S08", "S07", "S06", "S05", "S04", "S03", "S02", "S01", "S00", "Scatter"];

		this.ReelSymbols = [
			[
                { "weight": 1, "name": "S00" },
				{ "weight": 1, "name": "S01" },
				{ "weight": 1, "name": "S03" },
				{ "weight": 1, "name": "S05" },
				{ "weight": 1, "name": "S07" },
				{ "weight": 1, "name": "S09" },
				{ "weight": 1, "name": "S11" },
				{ "weight": 1, "name": "S02" },
				{ "weight": 1, "name": "S04" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 1, "name": "S08" },
				{ "weight": 1, "name": "S10" },
				{ "weight": 1, "name": "Wild" },
				{ "weight": 1, "name": "Scatter" },
				{ "weight": 1, "name": "S07" },
				{ "weight": 1, "name": "S01" },
				{ "weight": 1, "name": "S05" },
				{ "weight": 1, "name": "S09" }
			],
			[
				{ "weight": 1, "name": "Scatter" },
				{ "weight": 1, "name": "S11" },
				{ "weight": 1, "name": "S09" },
				{ "weight": 1, "name": "S07" },
				{ "weight": 1, "name": "S05" },
				{ "weight": 1, "name": "S03" },
				{ "weight": 1, "name": "S01" },
                { "weight": 1, "name": "S00" },
				{ "weight": 1, "name": "Wild" },
				{ "weight": 11,"name": "S10" },
				{ "weight": 1, "name": "S08" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 1, "name": "S04" },
				{ "weight": 1, "name": "S02" },
				{ "weight": 1, "name": "S10" },
				{ "weight": 1, "name": "S02" },
				{ "weight": 1, "name": "S11" },
				{ "weight": 1, "name": "S01" }
			],
			[
				{ "weight": 1, "name": "S07" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 1, "name": "S05" },
				{ "weight": 1, "name": "S04" },
				{ "weight": 1, "name": "S03" },
				{ "weight": 1, "name": "S02" },
				{ "weight": 1, "name": "S01" },
				{ "weight": 1, "name": "S08" },
				{ "weight": 1, "name": "S09" },
                { "weight": 1, "name": "S00" },
				{ "weight": 1, "name": "S10" },
				{ "weight": 1, "name": "S11" },
				{ "weight": 1, "name": "Wild" },
				{ "weight": 1, "name": "Scatter" },
				{ "weight": 1, "name": "S09" },
				{ "weight": 11,"name": "S04" },
				{ "weight": 1, "name": "S02" },
				{ "weight": 1, "name": "S01" },
			],
			[
				{ "weight": 1, "name": "S05" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 1, "name": "S07" },
				{ "weight": 1, "name": "S08" },
				{ "weight": 1, "name": "S09" },
				{ "weight": 1, "name": "S10" },
				{ "weight": 1, "name": "S11" },
				{ "weight": 1, "name": "Wild" },
				{ "weight": 1, "name": "Scatter" },
				{ "weight": 1, "name": "S01" },
				{ "weight": 1, "name": "S02" },
                { "weight": 1, "name": "S00" },
				{ "weight": 1, "name": "S03" },
				{ "weight": 1, "name": "S04" },
				{ "weight": 1, "name": "S05" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 11,"name": "S07" },
				{ "weight": 1, "name": "S08" }
			],
			[
				{ "weight": 1, "name": "S11" },
				{ "weight": 1, "name": "S10" },
				{ "weight": 1, "name": "S09" },
				{ "weight": 1, "name": "S08" },
				{ "weight": 1, "name": "S07" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 1, "name": "S05" },
				{ "weight": 1, "name": "S04" },
				{ "weight": 1, "name": "S03" },
				{ "weight": 1, "name": "S02" },
                { "weight": 1, "name": "S00" },
				{ "weight": 1, "name": "S01" },
				{ "weight": 1, "name": "Scatter" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 1, "name": "Wild" },
				{ "weight": 1, "name": "S06" },
				{ "weight": 1, "name": "S02" },
				{ "weight": 11, "name": "S01" }
			]
		];

		//Where is looking combinations
		this.PayLines = [
			[//1
				[0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0]
			],
			[//2
				[1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			],
			[//3
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1]
			],
			[//4
				[1, 0, 0, 0, 1],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0]
			],
			[//5
				[0, 0, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[1, 0, 0, 0, 1]
			],
			[//6
				[1, 1, 0, 1, 1],
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0]
			],
			[//7
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0],
				[1, 1, 0, 1, 1]
			],
			[//8
				[0, 0, 1, 0, 0],
				[1, 1, 0, 1, 1],
				[0, 0, 0, 0, 0]
			],
			[//9
				[0, 0, 0, 0, 0],
				[1, 1, 0, 1, 1],
				[0, 0, 1, 0, 0]
			],
			[//10
				[1, 0, 0, 0, 1],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0]
			],
            [//11
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[1, 0, 0, 0, 1]
            ],
            [//12
				[0, 1, 1, 1, 0],
				[1, 0, 0, 0, 1],
				[0, 0, 0, 0, 0]
            ],
            [//13
				[0, 0, 0, 0, 0],
				[1, 0, 0, 0, 1],
				[0, 1, 1, 1, 0]
            ],
            [//14
				[1, 0, 0, 0, 1],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0]
            ],
            [//15
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0],
				[1, 0, 0, 0, 1]
            ],
            [//16
				[0, 1, 0, 1, 0],
				[1, 0, 1, 0, 1],
				[0, 0, 0, 0, 0]
            ],
            [//17
				[0, 0, 0, 0, 0],
				[1, 0, 1, 0, 1],
				[0, 1, 0, 1, 0]
            ],
            [//18
				[1, 0, 1, 0, 1],
				[0, 1, 0, 1, 0],
				[0, 0, 0, 0, 0]
            ],
            [//19
				[0, 0, 0, 0, 0],
				[0, 1, 0, 1, 0],
				[1, 0, 1, 0, 1]
            ],
            [//20
				[1, 0, 1, 0, 1],
				[0, 0, 0, 0, 0],
				[0, 1, 0, 1, 0]
            ],
            [//21
				[0, 1, 0, 1, 0],
				[0, 0, 0, 0, 0],
				[1, 0, 1, 0, 1]
            ],
            [//22
				[1, 0, 0, 0, 1],
				[0, 0, 1, 0, 0],
				[0, 1, 0, 1, 0]
            ],
            [//23
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[1, 0, 0, 0, 1]
            ],
            [//24
				[1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0]
            ],
            [//25
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 1],
				[1, 1, 1, 0, 0]
            ],
            [//26
				[0, 0, 0, 1, 1],
				[1, 1, 1, 0, 0],
				[0, 0, 0, 0, 0]
            ],
            [//27
				[0, 0, 0, 0, 0],
				[1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1]
            ],
            [//28
				[0, 1, 0, 0, 0],
				[1, 0, 1, 0, 1],
				[0, 0, 0, 1, 0]
            ],
            [//29
				[1, 1, 1, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 1]
            ],
            [//30
				[0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0],
				[1, 1, 1, 0, 0]
            ]
		];

		//For which combinations will paid and how many
		this.PayTable = {
		    //'Just a name': {'strategy name',  'lineBet': 'decrease bet in lines count times', 'other info'}
		    'S00':      { 'strategy': 'counts', 'counts': { '2': 2, '3': 5, '4': 25, '5': 100 }, 'lineBet': true, leftToRight: true, 'symbols': ['S01'] },
		    'S01':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 5,  '4': 25,  '5': 100 },   'lineBet': true, leftToRight: true, 'symbols': ['S01'] },
		    'S02':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 5,  '4': 25,  '5': 100 },   'lineBet': true, leftToRight: true, 'symbols': ['S02'] },
		    'S03':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 5,  '4': 25,  '5': 100 },   'lineBet': true, leftToRight: true, 'symbols': ['S03'] },
		    'S04':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 5,  '4': 50,  '5': 100 },   'lineBet': true, leftToRight: true, 'symbols': ['S04'] },
		    'S05':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 10,  '4': 50,  '5': 125 },   'lineBet': true, leftToRight: true, 'symbols': ['S05'] },
		    'S06':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 10,  '4': 50,  '5': 250 },   'lineBet': true, leftToRight: true, 'symbols': ['S06'] },
		    'S07':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 10,  '4': 75,  '5': 250 },   'lineBet': true, leftToRight: true, 'symbols': ['S07'] },
		    'S08':      { 'strategy': 'counts', 'counts': { '2': 0, '3': 15,  '4': 100,  '5': 400 },   'lineBet': true, leftToRight: true, 'symbols': ['S08'] },
		    'S09':      { 'strategy': 'counts', 'counts': { '2': 2, '3': 25,  '4': 100,  '5': 750 },   'lineBet': true, leftToRight: true, 'symbols': ['S09'] },
		    'S10':      { 'strategy': 'counts', 'counts': { '2': 2, '3': 25,  '4': 100,  '5': 750 },   'lineBet': true, leftToRight: true, 'symbols': ['S10'] },
			'Scatter':  { 'strategy': 'counts', 'counts': { '2': 1, '3': 5,   '4': 20,   '5': 100 },   'lineBet': true, leftToRight: true, 'symbols': ['S11'] },
			'Wild':     { 'strategy': 'counts', 'counts': { '2': 10,'3': 200, '4': 2000, '5': 10000 }, 'lineBet': true, leftToRight: true, 'symbols': ['Wild'] },
		};

		//Symbols which will replace any other symbols
		this.WildSymbolsParams = {
		    'Wild': { multiplier: 1, strategy: 'best' }
		};

		this.WildSymbols = Object.keys(this.WildSymbolsParams);

		this.Scatters = {
		    'Scatter': {
                3: {'multiplier':   1},
                4: {'multiplier':	1},
                5: {'multiplier':  	1}
			}
		};

		//Parameters of Jackpot
		this.Jackpot = {'strategy': 'progressive', 'percent': 0.01, 'loseOnly': true, value: 0};

		//Prepare array with symbol names repeating it's weight count
		this.ReelSymbolsRand = [];

		this.eachReels((reel_id) => {
			this.ReelSymbolsRand[reel_id] = [];
			this.each(this.ReelSymbols[reel_id], (symbol_props, symbol_position) => {
				for (let i=0; i<symbol_props.weight; i++) {
					this.ReelSymbolsRand[reel_id].push(symbol_props.name);
				}
			});
		});
	}

	math(bet, is_log) {
		const reels_symbols = this.generateCombination();
		const win_data = this.getWinData(bet, reels_symbols, is_log);
		return {
			symbols: reels_symbols,
			winData: win_data
		};
	}

    mathFromServer(bet, init_matrix, is_log) {

        const reels_symbols = this.exchangeMatrix(this.generateSymbolsFromserver(init_matrix));

        const win_data = this.getWinData(bet, reels_symbols, is_log);
        return {
            symbols: reels_symbols,
            winData: win_data,
			paylines: this.PayLines,
			uniquesymbols: this.UniqueSymbols
        };
    }

	mathForCombination(bet, reels_positions, is_log) {
		const reels_symbols = this.getCombination(reels_positions);
		const win_data = this.getWinData(bet, reels_symbols, is_log);
		return {
			symbols: reels_symbols,
			winData: win_data
		};
	}

    exchangeMatrix(matrix) {
        var return_matrix = [[],[],[]];
        for(var i = 0 ; i < 5; i++) {
            for (var j = 0 ; j < 3 ; j++){
                return_matrix[j][i] = matrix[i][j];
            }
        }
        return return_matrix;
    }

	getWinData(bet, reels_symbols, is_log) {

		if (is_log) console.log('reels_symbols');
		if (is_log) reels_symbols.forEach((symbols) => {console.log(symbols);});

		let total_multiplier = 0,
			stats_multiplier = 0, //for the stats (include % for jackpot)
			win_lines = [],
			win_scatters = [],
			win_jackpot = [];

		this.each(this.PayLines, (pay_line, pay_line_number) => {

			if (is_log) console.log('pay_line');
			if (is_log) pay_line.forEach((line) => {console.log(line);});

			const line_symbols = Escalibur.getPayLineSymbols(reels_symbols, pay_line);

			if (is_log && pay_line_number === 4) {
				reels_symbols.forEach((symbols) => {console.log(symbols);});
				console.log('pay_line');
				console.log(pay_line[0]);
				console.log(pay_line[1]);
				console.log(pay_line[2]);
				console.log('line_symbols', line_symbols.map((o) => o.name));

			}

			if (is_log) console.log('line_symbols', line_symbols.map((o) => o.name));

			let line_multiplier = 0,
				line_multiplier_rule = null;
			const pay_line_num = this.PayLines.indexOf(pay_line) + 1;

			this.each(this.PayTable, (pay_rule, pay_rule_name) => {

				const line_pay_rule_multiplier = this.getLinePayRuleMultiplier(line_symbols, pay_rule);

				if (line_multiplier < line_pay_rule_multiplier) {
					line_multiplier = line_pay_rule_multiplier;
					line_multiplier_rule = pay_rule_name;
				}

				if (is_log) console.log('pay_rule', pay_rule_name, line_pay_rule_multiplier);

			});

			// if (line_multiplier > 0) win_lines.push([pay_line, line_symbols, line_multiplier_rule, line_multiplier, pay_line_num]);

			if (is_log) console.log('line_multiplier', line_multiplier);

			total_multiplier += line_multiplier;

		}, this);

		if (is_log) console.log('total_multiplier', total_multiplier);

		if (this.Scatters) {

			this.each(this.Scatters, (scatter_params, symbol_name) => {

				let count = 0;

				this.eachReels((reel_id) => {

					for (let i=0; i<3; i++) if (reels_symbols[i][reel_id] === symbol_name) count++

				});

				if (scatter_params[count]) {

					if (scatter_params[count].multiplier) {

						total_multiplier += scatter_params[count].multiplier;

					}

					if (scatter_params[count].jackpot) {

						const jackpot = scatter_params[count].jackpot;

						if (!jackpot.bet || jackpot.bet === bet) {

							win_jackpot.push([this.Jackpot.value * (jackpot.count || 1), jackpot]);

							// this.Jackpot.value -= this.Jackpot.value * (jackpot.count || 1);

						}

					}

					win_scatters.push([symbol_name, scatter_params[count]])

				}

			});

		}

		stats_multiplier = total_multiplier;

		if (this.Jackpot) {

			if (this.Jackpot.strategy === 'progressive') {

				if (this.Jackpot.loseOnly) {

					if (total_multiplier === 0) {

						// this.Jackpot.value += bet * this.Jackpot.percent;

						stats_multiplier += this.Jackpot.percent;

					}

				}

			}

		}
		return {multiplier: total_multiplier, winLines: win_lines, winScatters: win_scatters, winJackpot: win_jackpot, statsMultiplier: stats_multiplier};
	}

	static getPayLineSymbols(reels_symbols, pay_line) {

		const line = [];

		for (let j = 0; j < pay_line[0].length; j++)
			for (let i = 0; i < pay_line.length; i++)
				if (pay_line[i][j] === 1) {
					line.push({name: reels_symbols[i][j], position: [j, i]});
				}

		return line;

	}

	getLinePayRuleMultiplier(line_symbols, pay_rule) {

		if (pay_rule.strategy === 'counts') {

			let count = 0;
			let wild_count = 0;

			for (let i = 0; line_symbols[i]; i++) {
				if (this.contains(this.WildSymbols, line_symbols[i].name)){
					wild_count++;
				}
				if (this.contains(pay_rule.symbols, line_symbols[i].name) || this.contains(this.WildSymbols, line_symbols[i].name)){
					count++;
				} else if (pay_rule.leftToRight){
					break;
				}
			}

			let result = 0;

			if ((wild_count === 5) && (count === 5) && (this.contains(pay_rule.symbols, this.WildSymbolsParams['Wild'].maxLineReplaceSymbol))) result = pay_rule.counts[count];

			if (pay_rule.counts[count] && (wild_count !== count)) result = pay_rule.counts[count];

			if (pay_rule.lineBet) result /= this.PayLines.length;

			return result;

		}

	}

	generateCombination() {
		const reels_symbols = [[], [], []];
		//Fulfill combination of symbols for all reels
		this.eachReels((reel_id) => {

			let position = this.random(0, this.ReelSymbolsRand[reel_id].length - 1);

			reels_symbols[0][reel_id] = this.ReelSymbolsRand[reel_id][position > 0 ? position - 1 : this.ReelSymbolsRand[reel_id].length - 1];
			reels_symbols[1][reel_id] = this.ReelSymbolsRand[reel_id][position];
			reels_symbols[2][reel_id] = this.ReelSymbolsRand[reel_id][position < this.ReelSymbolsRand[reel_id].length - 1 ? position + 1 : 0];

		});

		return reels_symbols;
	}

	generateSymbolsFromserver(initMatrix) {
        var reels_symbols = [[],[],[],[],[]];

        for(var i = 0 ; i < 5; i ++) {
        	for (var j = 0 ; j < 3; j++){
        		if(j === 0)
					reels_symbols[i][2] = this.UniqueSymbols[initMatrix[i][j]];
        		if(j === 1)
                    reels_symbols[i][j] = this.UniqueSymbols[initMatrix[i][j]];
        		if(j === 2)
                    reels_symbols[i][0] = this.UniqueSymbols[initMatrix[i][j]];
			}
		}

        return reels_symbols;
	}

	getCombination(reels_positions) {

		const reels_symbols = [[], [], []];

		//Fulfill combination of symbols for all reels
		this.eachReels((reel_id) => {

			let position = reels_positions[reel_id];

			reels_symbols[0][reel_id] = this.ReelSymbolsRand[reel_id][position > 0 ? position - 1 : this.ReelSymbolsRand[reel_id].length - 1];
			reels_symbols[1][reel_id] = this.ReelSymbolsRand[reel_id][position];
			reels_symbols[2][reel_id] = this.ReelSymbolsRand[reel_id][position < this.ReelSymbolsRand[reel_id].length - 1 ? position + 1 : 0];

		});

		return reels_symbols;

	}

	eachReels(fn) {

		for (let i=0; i<5; i++) fn.call(this, i);

	}

	test(bet) {

		console.log('Testing ' + this.Name + '...');

		const count = 1000000;

		let final_total = 0;
		let final_count = 0;
		let final_win_count = 0;
		let final_scatters_count = 0;
		let final_jackpot_count = 0;

		for (let i = 0; i < 10; i++) {

			let total = 0;
			let win_count = 0;
			let scatters_count = 0;
			let jackpot_count = 0;

			for (let j = 0; j < count; j++) {

				const reels_symbols = this.generateCombination();

				const win_data = this.getWinData(bet, reels_symbols, true);

				if (win_data.statsMultiplier > 0) total += win_data.statsMultiplier;
				if (win_data.multiplier > 0) win_count++;
				if (win_data.winScatters.length > 0) scatters_count++;
				if (win_data.winJackpot.length > 0) jackpot_count++;

			}

			console.log(count + ' spins: RTP: ' + total / count + ' Win percent: ' + (win_count / count) + ' Scatters percent:' + (scatters_count / count) + ' Jackpot percent:' + (jackpot_count / count));

			final_count += count;
			final_total += total;
			final_win_count += win_count;
			final_scatters_count += scatters_count;
			final_jackpot_count += jackpot_count;

		}

		console.log((count * 10) + ' spins: RTP: ' + final_total / final_count + ' Win percent: ' + (final_win_count / final_count) + ' Scatters percent:' + (final_scatters_count / final_count) + ' Jackpot percent:' + (final_jackpot_count / final_count));

		console.log('End testing ' + this.Name + '.');

		console.log('Jackpot: ', this.Jackpot.value);

	}

	testCombination(bet, reels_symbols, is_log) {

		const win_data = this.getWinData(bet, reels_symbols);

		if (is_log) console.log(win_data);

	}

	testRandomCombination(bet, is_log) {

		const reels_symbols = this.generateCombination();

		const win_data = this.getWinData(bet, reels_symbols);

		if (is_log) console.log(win_data);

	}

	each(obj, fn, context) {

		if (!obj) return;

		if (obj instanceof Array) {

			for (let i = 0; i < obj.length; i++) {

				fn.call(context || this, obj[i], i);

			}

		} else {

			for (let i in obj) if (Object.prototype.hasOwnProperty.call(obj, i)) {

				fn.call(context || this, obj[i], i);

			}

		}

	}

	contains(array, obj) {

		if (!array) return false;

		let i = array.length;

		while (i--) {

			if (array[i] === obj) {

				return true;

			}

		}

		return false;

	}

	random(min, max) {

		return Math.floor(Math.random() * (max - min + 1)) + min;

	}

}

if (typeof module === 'object') module.exports = Escalibur;
