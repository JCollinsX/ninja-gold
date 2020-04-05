App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [
        {
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'background container wrapper', childs: [
                        { name: 'background', position: [0, 0], scale: [1, 1], type: 'sprite', image: 'background', event: 'screen'},
                        { name: 'reelsFrameBg', position: [4, -54], scale: [1, 1], type: 'sprite', image: 'reels' },
                        { name: '30lines', position: [-914, 232], scale: [1, 1], type: 'sprite', image: '30lines' },
                    ]
                }
            ]
        },
        {
            name: 'MainContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'main container wrapper', position: [-190, 0], scale: [1, 1],
                    childs: [
                        {
                            name: 'game board container', position: [0, -64],  scale: [1,1],
                            childs: [
                                { name: 'game board symbols container',   childs: []  },
                                { name: 'passive overlay',  alpha: 0, type: 'graphics', draw: [['beginFill', 0x000000], ['drawRect', [-250 * 2.5, -261 * 1.5, 250 * 5, 261 * 3, 10]]]}
                            ]
                        },
                        { name: 'game board symbols highlighted container', position: [0, -64], childs: [] },
                        { name: 'game board symbols borders', position: [0, -64], childs: [] },
                        { name: 'game board symbols reelanticipation', position: [0, -64], childs: [] },
                        { name: 'game board symbols glow container', position: [0, -64], childs: [] },
                        {
                            name: 'win-logo container', position: [-290, 380], alpha:0,
                            childs: [
                                { name:'win-logo bg', type:'graphics', alpha:0.5, draw:[['beginFill', 0x000000],['drawRoundedRect', [-824/2,-64/2,824,64], 32 ]]},
                                { name: 'win-logo label', position:[-170, 0],  type: 'text', text:'Symbol',
                                    styles: { align: 'Right', fontFamily: 'Arial', fontwegiht: 600, fontSize: '34px',  padding: 5, fill: 0xffffff } },
                                { name: 'win-logo symbol', position:[-65, 0], scale:[0.19,0.19], type:'sprite', image:'0'},
                                { name: 'win-logo text', position:[120, 0],  type: 'text', text:'wins 5 on Line 20',
                                    styles: { align: 'Left', fontFamily: 'Arial', fontwegiht: 600, fontSize: '34px',  padding: 5, fill: 0xffffff } },
                            ]
                        },
                        { name:'logo', position:[0, -494], scale:[1, 1], type: 'sprite', image:'logo',  /*event:'screen'*/ },
                        {
                            name: 'freespin info', position: [0, 0], scale: [1.3, 1.3],
                            type: 'sprite', image: 'reTrig.png', visible: false,
                            childs: [
                                {
                                    name: 'freespin info text 1',
                                    position: [0, -105],
                                    type: 'text',
                                    text: 'CONGRATULATIONS YOU WIN',
                                    styles:
                                        {
                                            align: 'center',
                                            fontFamily: '"Times New Roman", Times, serif',
                                            fontwegiht: 600,
                                            fontSize: '33px',
                                            padding: 15,
                                            fill: 0xFFFF00
                                        }
                                },
                                {
                                    name: 'freespin info text 2',
                                    position: [-20, 90],
                                    type: 'text',
                                    text: 'During bonus all symbols pay on \n any position.',
                                    styles:
                                        {
                                            align: 'center',
                                            fontFamily: '"Times New Roman", Times, serif',
                                            fontwegiht: 600,
                                            fontSize: '23px',
                                            padding: 15,
                                            fill: 0xFFFF00
                                        }
                                },
                                {
                                    name: 'freespin info text 3',
                                    position: [0, -10],
                                    type: 'text',
                                    text: '7 BONUSSPINS',
                                    styles:
                                        {
                                            align: 'center',
                                            fontFamily: '"Times New Roman", Times, serif',
                                            fontwegiht: 900,
                                            fontSize: '52px',
                                            padding: 15,
                                            fill: 0xFFFF00
                                        }
                                }
                            ]
                        },
                        {
                            name: 'account data', position: [470, -505], anchor: [1, 0.5], alpha: 1,
                            type: 'text', text: ' ', styles: { fontFamily: 'Arial', fontSize: '22px', padding: 20, fill: 0xffea00}
                        }
                    ]
                },
            ]
        },
        {
            name: 'ControlPanelContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'control panel container wrapper', scale: [1, 1],
                    position: [0, (1080 - 216) / 2], childs: [
                        {
                            name: 'maxbet button', position: [74, 34], scale: [1, 1],
                            button: 'button', type: 'sprite', image: 'Max_Button',
                            childs: [
                                { name: 'maxbet button glow', type: 'sprite', image: 'Max_ButtonPress', alpha: 0 },
                                { name: 'maxbet label', position: [16, 0], type: 'text', text: 'MAX', styles: { align: 'right', fontFamily: 'Arial', fontSize: '20px', padding: 5, fill: 0xffffff, fontWeight: 'bold', "lineJoin": "bevel" } },
                                { name: 'maxbet button inactive', type: 'sprite', image: 'Max_ButtonDeactivate', alpha: 0 },
                            ]
                        },
                        {
                            name: 'autospin button bar', position: [-74, 34], scale: [1, 1],
                            childs: [
                                { name: 'autospin button', button: 'button', type: 'sprite', image: 'Auto_Button' },
                                { name: 'autospin button glow', type: 'sprite', image: 'Auto_ButtonPress', alpha: 0 },
                                { name: 'autospin button disabled', type: 'sprite', image: 'Auto_ButtonOver', visible: false, button: 'disabled button' },
                                { name: 'autospin button text', position: [-16, 0], type: 'text', text: 'AUTO', styles: { align: 'left', fontFamily: 'Arial', fontSize: '20px', padding: 5, fill: 0xffffff, fontWeight: 'bold', "lineJoin": "bevel" } },
                            ]
                        },
                        {
                            name: 'spin button bar', position: [0, 0], scale: [1, 1],
                            childs: [
                                {
                                    name: 'spin button bar1', scale: [1, 1],
                                    childs: [
                                        { name: 'spin button', button: 'button', type: 'sprite', image: 'Spin_Button' },
                                        { name: 'spin button glow', type: 'sprite', image: 'Spin_ButtonPress', alpha: 0 },
                                        { name: 'spin button inactive', type: 'sprite', image: 'Spin_ButtonOut', alpha: 0 },
                                        {
                                            name: 'spin button text1', type: 'text', text: 'Press\nTo\nStart', visible: false,
                                            styles: { align: 'center', fontFamily: 'Arial', fontSize: '25px', padding: 5, fill: 0xffffff, fontWeight: 'bold' },
                                        }
                                    ]
                                },
                                {
                                    name: 'startautospin button', scale: [1, 1], visible: false,
                                    button: 'button', type: 'sprite', image: 'Spin_ButtonBlankUp', //"w":286,"h":154
                                    childs: [
                                        { name: 'startautospin button glow', type: 'sprite', image: 'Spin_ButtonBlankPress', alpha: 0 },
                                        {
                                            name: 'startautospin button text', alpha: 1, type: 'text', text: 'START',
                                            styles: { align: 'center', fontFamily: 'Arial', fontSize: '30px', padding: 5, fill: 0xffffff, fontWeight: 'bold', stroke: 'yellow', 'strokeThickness': 2, "lineJoin": "bevel", },
                                        },
                                    ]
                                },
                                {
                                    name: 'stopautospin button', scale: [1, 1], visible: false,
                                    button: 'button', type: 'sprite', image: 'Spin_ButtonBlankUp', //"w":286,"h":154
                                    childs: [
                                        { name: 'stopautospin button glow', type: 'sprite', image: 'Spin_ButtonBlankPress', alpha: 0 },
                                        {
                                            name: 'stopautospin button text', alpha: 1, type: 'text', text: 'STOP',
                                            styles: {align: 'center', fontFamily: 'Arial', fontSize: '30px', padding: 5, fill: 0xffffff, fontWeight: 'bold', stroke: 'yellow', 'strokeThickness': 2, "lineJoin": "bevel", },
                                        },
                                    ]
                                },
                                {
                                    name: 'startfreespin button', scale: [1, 1], visible: false,
                                    button: 'button', type: 'sprite', image: 'Spin_ButtonFreeUp', //"w":286,"h":154
                                    childs: [
                                        { name: 'startfreespin button glow', type: 'sprite', image: 'Spin_ButtonFreeOver', alpha: 0 },
                                        {
                                            name: 'startfreespin button label', alpha: 1, type: 'text', text: 'SPIN', position: [0, -25],
                                            styles: { align: 'center', fontFamily: 'Arial', fontSize: '25px', padding: 5, fill: 0xffffff, fontWeight: 'bold' },
                                        },
                                        {
                                            name: 'freespin count text', alpha: 1, type: 'text', text: '0', position: [0, 10],
                                            styles: { align: 'center', fontFamily: 'Arial', fontSize: '25px', padding: 5, fill: 0xffffff, fontWeight: 'bold' },
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'menu button', position: [-800, 25],
                            button: 'button', type: 'sprite', image: 'Info_Button', //"w":70,"h":70
                            childs: [
                                { name: 'menu button glow', type: 'sprite', image: 'Info_Press', alpha: 0 },
                            ]
                        },
                        {
                            name: 'credits bar', position: [-580, 25], type: 'sprite', image: 'Balance_Window',
                            childs: [
                                {
                                    name: 'credits bar label', position: [0, -22],  type: 'text', text: 'BALANCE',
                                    styles: { fontFamily: 'Arial', fontSize: '20px', padding: 5, fill: 0xffffff, fontWeight: 'bold', "lineJoin": "bevel" }
                                },
                                {
                                    name: 'credits text', position: [0, 10], type: 'text',
                                    styles: { fontFamily: 'Arial', fontSize: '40px', padding: 5, fill: 0xffffff, fontWeight: 'bold', stroke: 'black', 'strokeThickness': 5, "lineJoin": "bevel" }
                                },
                            ]
                        },
                        {
                            name: 'lines bar', position: [-270, 25], type: 'sprite', image: 'Ways_Window', //"w":176,"h":80
                            childs: [
                                {
                                    name: 'lines bar label', position: [0, -22], type: 'text', text: 'LINES',
                                    styles: {
                                        fontFamily: 'Arial', fontSize: '20px', padding: 5, fill: 0xffffff, fontWeight: 'bold', stroke: 'black', 'strokeThickness': 5, "lineJoin": "bevel",
                                    }
                                },
                                {
                                    name: 'lines bar text', position: [0, 10], type: 'text',  text: '30',
                                    styles: {
                                        fontFamily: 'Arial', fontSize: '40px', padding: 5, fill: 0xffffff, fontWeight: 'Bold', stroke: 'black', 'strokeThickness': 5, "lineJoin": "bevel"
                                    }
                                },
                            ]
                        },
                        {
                            name: 'betperline bar', position: [235, 25], type: 'sprite', image: 'BetPerDenom_Button', //"w":176,"h":80
                            childs: [
                                {
                                    name: 'betperline bar label',  position: [0, -25],  type: 'text',  text: 'BET PER LINE',
                                    styles: { fontFamily: 'Arial', fontSize: '16px', padding: 5,  fill: 0xffffff, fontWeight: 'bold', stroke: 'black','strokeThickness': 5,  "lineJoin": "bevel"}
                                },
                                {
                                    name: 'betperline bar text',  position: [0, 5],  type: 'text',
                                    styles: {fontFamily: 'Arial', fontSize: '40px', padding: 5, fill: 0xffffff,  fontWeight: 'Bold',stroke: 'black', 'strokeThickness': 5, "lineJoin": "bevel"}
                                },
                                {
                                    name: 'betperline bar down', position: [-60, 5], button: 'button', type: 'sprite', image: 'LeftArrow_Button', childs: [
                                        { name: 'betperline bar down glow', type: 'sprite', image: 'LeftArrow_ButtonPress', alpha: 0 },
                                        { name: 'betperline bar down inactive', type: 'sprite', image: 'LeftArrow_ButtonDeactivate', alpha: 0 },
                                    ]
                                },
                                {
                                    name: 'betperline bar up', position: [60, 5], button: 'button', type: 'sprite', image: 'RightArrow_Button', childs: [
                                        { name: 'betperline bar up glow', type: 'sprite', image: 'RightArrow_ButtonPress', alpha: 0 },
                                        { name: 'betperline bar up inactive', type: 'sprite', image: 'RightArrow_ButtonDeactivate', alpha: 0 },
                                    ]
                                },
                                { name: 'betperline bar progressMask', position: [-110 / 2, 30], type: 'graphics', draw: [['beginFill', 0xff0000], ['drawRect', [-110 / 2, -20 / 2, 110, 20]]], alpha: 0.5 },
                                { name: 'betperline bar progressBack', position: [0, 30], type: 'sprite', image: 'Meter_Back' },
                                {
                                    name: 'betperline bar progressFill', position: [0, 28], type: 'sprite', image: 'Meter_Fill', //"w":109,"h":12
                                    mask: 'betperline bar progressMask'
                                }
                            ]
                        },
                        {
                            name: 'denom bar', position: [415, 25], type: 'sprite', image: 'BetPerDenom_Button',
                            childs: [
                                {
                                    name: 'denom bar label', position: [0, -22], type: 'text', text: 'DENOM',
                                    styles: { fontFamily: 'Arial', fontSize: '22px', padding: 5, fill: 0xffffff, fontWeight: 'bold', stroke: 'black', 'strokeThickness': 5, "lineJoin": "bevel" }
                                },
                                {
                                    name: 'denom bar text', position: [0, 8], type: 'text',
                                    styles: { fontFamily: 'Arial', fontSize: '38px', padding: 5, fill: 0xffffff, fontWeight: 'Bold', stroke: 'black', 'strokeThickness': 5, "lineJoin": "bevel" }
                                },
                                {
                                    name: 'denom bar down', position: [-60, 5], button: 'button', type: 'sprite', image: 'LeftArrow_Button', childs: [
                                        { name: 'denom bar down glow', type: 'sprite', image: 'LeftArrow_ButtonPress', alpha: 0 },
                                        { name: 'denom bar down inactive', type: 'sprite', image: 'LeftArrow_ButtonDeactivate', alpha: 0 },
                                    ]
                                },
                                {
                                    name: 'denom bar up', position: [60, 5], button: 'button', type: 'sprite', image: 'RightArrow_Button', childs: [
                                        { name: 'denom bar up glow', type: 'sprite', image: 'RightArrow_ButtonPress', alpha: 0 },
                                        { name: 'denom bar up inactive', type: 'sprite', image: 'RightArrow_ButtonDeactivate', alpha: 0 },
                                    ]
                                },
                                { name: 'denom bar progressMask', position: [-110 / 2, 30], type: 'graphics', draw: [['beginFill', 0xff0000], ['drawRect', [-110 / 2, -20 / 2, 110, 20]]], alpha: 0.5 },
                                { name: 'denom bar progressBack', position: [0, 30], type: 'sprite', image: 'Meter_Back' },
                                {
                                    name: 'denom bar progressFill', position: [0, 28], type: 'sprite', image: 'Meter_Fill', //"w":109,"h":12
                                    mask: 'denom bar progressMask'
                                }
                            ]
                        },

                        {
                            name: 'win bar', position: [684, 8], drawed: 0,
                            type: 'sprite', image: 'Win_WindowAlt', //"w":338,"h":110
                            childs: [
                                {
                                    name: 'win bar label', position: [0, -28], type: 'text', text: 'WIN',
                                    styles: { fontFamily: 'Arial', fontSize: '30px', padding: 20, fill: 0xffe000, fontWeight: 'bold', stroke: 'yellow', 'strokeThickness': 0.2, "lineJoin": "bevel" }
                                },
                                {
                                    name: 'win bar text', position: [0, 16], type: 'text',
                                    styles: { fontFamily: 'Arial', fontSize: '50px', padding: 5, fill: 0xffe000, fontWeight: 'bold', stroke: 'white', 'strokeThickness': 1, "lineJoin": "bevel" }
                                },
                            ]
                        },

                        {
                            name: 'bottom bar', position: [0, 88], childs: [
                                { name: 'bottom bar bg', alpha: 0.7, type: 'graphics', draw: [['beginFill', 0x000000], ['drawRect', [-1920 / 2, -40 / 2, 1920, 40]]], },
                                { name: 'ballance text', position: [-416, 0], type: 'text', text: '100', styles: { fontFamily: 'Arial', fontSize: '28px', padding: 5, fill: 0xffffff, fontWeight: 'Bold' } },
                                { name: 'betamount text', position: [0, 0], type: 'text', text: '100', styles: { fontFamily: 'Arial', fontSize: '28px', padding: 5, fill: 0xffffff, fontWeight: 'Bold' } },
                                { name: 'win text', position: [416, 0], type: 'text', text: '100', styles: { fontFamily: 'Arial', fontSize: '28px', padding: 5, fill: 0xffffff, fontWeight: 'Bold' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'MenuContainer', visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'menu overlay',
                    childs: [
                        {
                            name: 'menu overlay rect', event: 'menu overlay', preventDefault:false, alpha:0,
                            type: 'graphics', draw: [['beginFill', 0xffffffff], ['drawRect', [-1920, -1920, 3840, 3840]]],
                        },
                        {
                            name: 'menu items container', position: [-750 , 300], //scale:[1.2, 1],  type: 'sprite', image:'controlpopup',
                            childs:[/*
                                {
                                    name: 'menu button lobby', position: [0, -1.5 * 60],
                                    button: 'button', type: 'sprite', image: 'InfoMenu_Button', //"w":186,"h":52
                                    childs: [
                                        { name: 'menu button lobby glow', type: 'sprite', image: 'InfoMenu_ButtonPress', alpha: 0 },
                                        { name: 'menu button lobby text', type: 'text', text: 'LOBBY',
                                            styles: { align: 'center', fontFamily: 'Arial', fontWeight: 'Bold',fontSize: '18px',padding: 20,fill: 0xffffff}
                                        }
                                    ]
                                },*/
                                {
                                    name: 'menu button sound', position:[0 , -0.5*60],
                                    button: 'button', type: 'sprite', image: 'InfoMenu_Button',
                                    childs: [
                                        { name: 'menu button sound glow', type: 'sprite', image: 'InfoMenu_ButtonPress', alpha: 0 },
                                        {
                                            name: 'menu button sound text', position: [-10, 0], type: 'text', text: 'SOUND',
                                            styles: {fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '18px', padding: 20, fill: 0xffffff, }
                                        },
                                        { name: 'menu button sound check', position: [50, 0], scale: [0.7, 0.9], type: 'sprite', image: 'TurboSoundEnabled_Button' },
                                        { name: 'menu button sound off', position: [50, 0], scale: [0.7, 0.9], type: 'sprite', image: 'TurboSoundDisabled_Button', visible: false }
                                    ]
                                },
                                {
                                    name: 'menu button turbo', position: [0, 0.5 * 60], button: 'button', type: 'sprite', image: 'InfoMenu_Button',
                                    childs: [
                                        { name: 'menu button turbo glow', type: 'sprite', image: 'InfoMenu_ButtonPress', alpha: 0 },
                                        { name: 'menu button turbo text', position: [-10, 0], type: 'text', text: 'TURBO',
                                            styles: { fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '18px', padding: 20, fill: 0xffffff, }
                                        },
                                        { name: 'menu button turbo check', position: [50, 0], scale: [0.7, 0.9], type: 'sprite', image: 'TurboSoundEnabled_Button', },
                                        { name: 'menu button turbo off', position: [50, 0], scale: [0.7, 0.9], type: 'sprite', image: 'TurboSoundDisabled_Button', visible: true }
                                    ]
                                },
                                {
                                    name: 'menu button help', position:[0 , 1.5*60],
                                    button: 'button', type: 'sprite', image: 'InfoMenu_Button',
                                    childs: [
                                        { name: 'menu button help glow', type: 'sprite', image: 'InfoMenu_ButtonPress', alpha: 0 },
                                        {
                                            name: 'menu button help text', type: 'text', text: 'HELP/PAY',
                                            styles: {
                                                align: 'center', fontFamily: 'Arial', fontWeight: 'Bold',  fontSize: '18px',  padding: 20, fill: 0xffffff, "lineJoin": "bevel",
                                            }
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'AutoMenuContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'automenu overlay rect', event: 'automenu overlay', preventDefault:false, alpha:0,
                    type: 'graphics', draw: [['beginFill', 0xffffffff], ['drawRect', [-1920, -1920, 3840, 3840]]],
                },
                {
                    name: 'automenu items container', position: [-100, 340],  //type: 'sprite', image: 'autopopup',
                    childs: [
                        { //"w":132,"h":52
                            name: 'automenu_500', position: [0, -2*62], step: 500, button: 'button',  type: 'sprite', image: 'AutoMenu_Button', childs: [
                                { name: 'automenu_500 glow', type: 'sprite', image: 'AutoMenu_ButtonPress', alpha: 0 },
                                { name: 'automenu_500 text',type: 'text', text: '500', styles: { fontFamily:'Arial', fontWeight: 'Bold', fontSize: '35px', padding: 20,fill: 0xffffff}}
                            ]
                        },
                        { //"w":132,"h":52
                            name: 'automenu_200', position: [140 / 2, -1 * 62], step: 200, button: 'button', type: 'sprite', image: 'AutoMenu_Button', childs: [
                                { name: 'automenu_200 glow', type: 'sprite', image: 'AutoMenu_ButtonPress', alpha: 0 },
                                { name: 'automenu_200 text', type: 'text', text: '200', styles: { fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '35px', padding: 20, fill: 0xffffff } }
                            ]
                        },
                        { //"w":132,"h":52
                            name: 'automenu_100', position: [-140 / 2, -1 * 62], step: 100, button: 'button', type: 'sprite', image: 'AutoMenu_Button', childs: [
                                { name: 'automenu_100 glow', type: 'sprite', image: 'AutoMenu_ButtonPress', alpha: 0 },
                                { name: 'automenu_100 text', type: 'text', text: '100', styles: { fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '35px', padding: 20, fill: 0xffffff } }
                            ]
                        },
                        { //"w":132,"h":52
                            name: 'automenu_50', position: [140 / 2, -0 * 62], step: 50, button: 'button', type: 'sprite', image: 'AutoMenu_Button', childs: [
                                { name: 'automenu_50 glow', type: 'sprite', image: 'AutoMenu_ButtonPress', alpha: 0 },
                                { name: 'automenu_50 text', type: 'text', text: '50', styles: { fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '35px', padding: 20, fill: 0xffffff } }
                            ]
                        },
                        { //"w":132,"h":52
                            name: 'automenu_100', position: [-140 / 2, -0 * 62], step: 25, button: 'button', type: 'sprite', image: 'AutoMenu_Button', childs: [
                                { name: 'automenu_25 glow', type: 'sprite', image: 'AutoMenu_ButtonPress', alpha: 0 },
                                { name: 'automenu_25 text', type: 'text', text: '25', styles: { fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '35px', padding: 20, fill: 0xffffff } }
                            ]
                        },
                        { //"w":132,"h":52
                            name: 'automenu_10', position: [140 / 2, 1 * 62], step: 10, button: 'button', type: 'sprite', image: 'AutoMenu_Button', childs: [
                                { name: 'automenu_10 glow', type: 'sprite', image: 'AutoMenu_ButtonPress', alpha: 0 },
                                { name: 'automenu_10 text', type: 'text', text: '10', styles: { fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '35px', padding: 20, fill: 0xffffff } }
                            ]
                        },
                        { //"w":132,"h":52
                            name: 'automenu_off', position: [-140 / 2, 1 * 62], step: 0, button: 'button', type: 'sprite', image: 'AutoMenu_Button', childs: [
                                { name: 'automenu_off glow', type: 'sprite', image: 'AutoMenu_ButtonPress', alpha: 0 },
                                { name: 'automenu_off text', type: 'text', text: 'OFF', styles: { fontFamily: 'Arial', fontWeight: 'Bold', fontSize: '35px', padding: 20, fill: 0xffffff } }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name: 'PickContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    type: 'sprite',
                    image: 'bonus_pick_background',
                    event: 'disabled button'
                },
                {
                    position: [300, -450],
                    childs: [
                        {
                            type: 'sprite',
                            position: [-128, 20],
                            scale: 0.51,
                            image: 'bonus_pick_textremaining'
                        },
                        {
                            type: 'sprite',
                            position: [-205, -40],
                            scale: 0.35,
                            image: 'bonus_freespin_freetext'
                        },
                        {
                            type: 'sprite',
                            position: [-45, -40],
                            scale: 0.35,
                            image: 'bonus_freespin_gametext'
                        },
                    ]
                },
                {
                    name: 'pick remaining text',
                    type: 'bitmap-text',
                    text: '0',
                    drawed: 0,
                    position: [400, -485],
                    styles: {
                        align: 'left',
                        font: {
                            name: 'blue',
                            size: 70
                        },
                        tint: 0xFFFFFF
                    }
                },
                {
                    name: 'pick item container',
                    visible: false,
                    childs: [
                        {
                            position: [0, -200],
                            childs: [
                                {
                                    name: 'pick item 1',
                                    event: 'pick item',
                                    color: 'brown',
                                    position: [-715, 0],
                                    childs: [
                                        {
                                            name: 'pick item 1 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickbrown',
                                        },
                                        {
                                            name: 'pick item 1 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 1 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 2',
                                    event: 'pick item',
                                    color: 'green',
                                    position: [-440, 0],
                                    childs: [
                                        {
                                            name: 'pick item 2 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickgreen',
                                        },
                                        {
                                            name: 'pick item 2 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 2 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 3',
                                    event: 'pick item',
                                    color: 'red',
                                    position: [-165, 0],
                                    childs: [
                                        {
                                            name: 'pick item 3 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickred',
                                        },
                                        {
                                            name: 'pick item 3 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 3 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 4',
                                    event: 'pick item',
                                    color: 'black',
                                    position: [110, 0],
                                    childs: [
                                        {
                                            name: 'pick item 4 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickblack',
                                        },
                                        {
                                            name: 'pick item 4 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 4 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 5',
                                    event: 'pick item',
                                    color: 'blue',
                                    position: [385, 0],
                                    childs: [
                                        {
                                            name: 'pick item 5 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickblue',
                                        },
                                        {
                                            name: 'pick item 5 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 5 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            position: [-100, 200],
                            childs: [
                                {
                                    name: 'pick item 6',
                                    event: 'pick item',
                                    color: 'brown',
                                    position: [-715, 0],
                                    childs: [
                                        {
                                            name: 'pick item 6 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickbrown',
                                        },
                                        {
                                            name: 'pick item 6 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 6 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 7',
                                    event: 'pick item',
                                    color: 'green',
                                    position: [-440, 0],
                                    childs: [
                                        {
                                            name: 'pick item 7 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickgreen',
                                        },
                                        {
                                            name: 'pick item 7 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 7 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 8',
                                    event: 'pick item',
                                    color: 'red',
                                    position: [-165, 0],
                                    childs: [
                                        {
                                            name: 'pick item 8 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickred',
                                        },
                                        {
                                            name: 'pick item 8 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 8 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 9',
                                    event: 'pick item',
                                    color: 'black',
                                    position: [110, 0],
                                    childs: [
                                        {
                                            name: 'pick item 9 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickblack',
                                        },
                                        {
                                            name: 'pick item 9 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 9 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                                {
                                    name: 'pick item 10',
                                    event: 'pick item',
                                    color: 'blue',
                                    position: [385, 0],
                                    childs: [
                                        {
                                            name: 'pick item 10 back',
                                            type: 'sprite',
                                            image: 'bonus_pick_pickblue',
                                        },
                                        {
                                            name: 'pick item 10 glow',
                                            type: 'movie-clip',
                                            frames: [
                                                'PIC_EF_TOUCH_00_0','PIC_EF_TOUCH_00_1','PIC_EF_TOUCH_00_2','PIC_EF_TOUCH_00_3','PIC_EF_TOUCH_00_4',
                                                'PIC_EF_TOUCH_00_5','PIC_EF_TOUCH_00_6','PIC_EF_TOUCH_00_7','PIC_EF_TOUCH_00_8','PIC_EF_TOUCH_00_9',
                                                'PIC_EF_TOUCH_00_10','PIC_EF_TOUCH_00_11','PIC_EF_TOUCH_00_12','PIC_EF_TOUCH_00_13'
                                            ],
                                            speed: 0.2,
                                            loop: false,
                                            visible: false
                                        },
                                        {
                                            name: 'pick item 10 touch',
                                            type: 'sprite',
                                            position: [0, 20],
                                            image: 'bonus_pick_texttouch',
                                            visible: false
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    name: 'pick ready labels',
                    childs: [
                        {
                            name: 'pick pickscroll text',
                            type: 'sprite',
                            image: 'bonus_pick_textpick',
                            position: [-100, -200]
                        },
                        {
                            name: 'pick until text',
                            childs: [
                                {
                                    type: 'sprite',
                                    position: [-600, 0],
                                    image: 'bonus_pick_textuntil'
                                },
                                {
                                    type: 'sprite',
                                    position: [-100, 0],
                                    image: 'bonus_freespin_freetext'
                                },
                                {
                                    type: 'sprite',
                                    position: [360, 0],
                                    image: 'bonus_freespin_gametext'
                                },
                            ]
                        },
                        {
                            name: 'pick given text',
                            type: 'sprite',
                            image: 'bonus_pick_textgiven',
                            position: [-100, 200]
                        }
                    ]
                },
                {
                    name: 'pick open container',
                    position: [-200, 0],
                    childs: [
                        {
                            name: 'pick open back',
                            type: 'sprite',
                            image: 'bonus_pick_pickgreenopen',
                            visible: false,
                        },
                        {
                            name: 'pick open baseup container',
                            visible: false,
                            position: [-40, 0],
                            childs: [
                                {
                                    name: 'pick open baseup sprite',
                                    type: 'sprite',
                                    scale: 2,
                                    image: 'jpearth'
                                },
                                {
                                    name: 'pick open baseup header',
                                    type: 'sprite',
                                    position: [0, -220],
                                    scale: 1.5,
                                    image: 'jpearthheader'
                                },
                                {
                                    type: 'sprite',
                                    position: [0, 220],
                                    image: 'bonus_pick_textbaseup'
                                }
                            ]
                        },
                        {
                            name: 'pick open remaining container',
                            visible: false,
                            position: [-40, 0],
                            childs: [
                                {
                                    type: 'sprite',
                                    position: [0, -180],
                                    image: 'bonus_pick_textremaining'
                                },
                                {
                                    name: 'pick open remaining text',
                                    type: 'bitmap-text',
                                    text: ' +5',
                                    styles: { align: 'center', font: { name: 'blue', size: 90 }, tint: 0xFFFFFF }
                                }
                            ]
                        },
                        {
                            name: 'pick open begin container',
                            position: [-40, 0],
                            visible: false,
                            childs: [
                                {
                                    type: 'sprite',
                                    position: [0, -100],
                                    image: 'bonus_pick_textbegin'
                                },
                                {
                                    name: 'pick open begin value',
                                    type: 'bitmap-text',
                                    position: [-30, 90],
                                    text: ' +10 ',
                                    styles: { align: 'center', font: { name: 'blue', size: 70 }, tint: 0xFFFFFF }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'pick item glow',
                    type: 'sprite',
                    image: 'jpearthglow',
                    visible: false
                }
            ]
        },
        {
            name: 'JackpotContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'jackpot container', position: [740, -60], childs: [
                        {
                            name: 'jackpot_4', position: [0, -(2 - 0) * 177], drawed: 0, childs: [
                                { name: 'jackpot_4 bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'jackpot_4 icon', position: [-84, 0], type: 'sprite', image: 'jpearth' },
                                { name: 'jackpot_4 label', position: [0, -45], scale: 0.9, type: 'sprite', image: 'jpearthheader' },
                                { //###### bitmap-font  used !!!!!
                                    name: 'jackpot_4 text', anchor: [1, 0.5], position: [200, 50], type: 'bitmap-text', text: '900',
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { name: 'jackpot_4 glow', position: [-84, 0], type: 'sprite', image: 'jpearthglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'jackpot_3', position: [0, -(2 - 1) * 177], drawed: 0, childs: [
                                { name: 'jackpot_3 bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'jackpot_3 icon', position: [-84, 0], type: 'sprite', image: 'jpfire' },
                                { name: 'jackpot_3 label', position: [0, -45], scale: 0.9, type: 'sprite', image: 'jpfireheader' },
                                { //###### bitmap-font  used !!!!!
                                    name: 'jackpot_3 text', anchor: [1, 0.5], position: [200, 50], type: 'bitmap-text', text: '900',
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { name: 'jackpot_3 glow', position: [-84, 0], type: 'sprite', image: 'jjpfireglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'jackpot_2', position: [0, -(2 - 2) * 177], drawed: 0, childs: [
                                { name: 'jackpot_2 bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'jackpot_2 icon', position: [-84, 0], type: 'sprite', image: 'jpwater' },
                                { name: 'jackpot_2 label', position: [0, -45], scale: 0.9, type: 'sprite', image: 'jpwaterheader' },
                                { //###### bitmap-font  used !!!!!
                                    name: 'jackpot_2 text', anchor: [1, 0.5], position: [200, 50], type: 'bitmap-text', text: '900',
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { name: 'jackpot_2 glow', position: [-84, 0], type: 'sprite', image: 'jpwaterglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'jackpot_1', position: [0, -(2 - 3) * 177], drawed: 0, childs: [
                                { name: 'jackpot_1 bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'jackpot_1 icon', position: [-84, 0], type: 'sprite', image: 'jpthunder' },
                                { name: 'jackpot_1 label', position: [0, -45], scale: 0.9, type: 'sprite', image: 'jpthunderheader' },
                                { //###### bitmap-font  used !!!!!
                                    name: 'jackpot_1 text', anchor: [1, 0.5], position: [200, 50], type: 'bitmap-text', text: '900',
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { name: 'jackpot_1 glow', position: [-84, 0], type: 'sprite', image: 'jpthunderglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'jackpot_0', position: [0, -(2 - 4) * 177], drawed: 0, childs: [
                                { name: 'jackpot_0 bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'jackpot_0 icon', position: [-84, 0], type: 'sprite', image: 'jpwind' },
                                { name: 'jackpot_0 label', position: [0, -45], scale: 0.9, type: 'sprite', image: 'jpwindheader' },
                                { //###### bitmap-font  used !!!!!
                                    name: 'jackpot_0 text', anchor: [1, 0.5], position: [200, 50], type: 'bitmap-text', text: '900',
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { name: 'jackpot_0 glow', position: [-84, 0], type: 'sprite', image: 'jpwindglow', alpha: 0 },
                            ]
                        },
                    ]
                },
                {
                    name: 'pick jackpot container', visible: false, position: [740, -60], childs: [
                        {
                            name: 'pick jackpot earth', position: [0, -(2 - 0) * 177], drawed: 0, childs: [
                                { name: 'pick jackpot earth bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'pick jackpot earth icon', position: [-84, 0], type: 'sprite', image: 'jpearth' },
                                { name: 'pick jackpot earth label', position: [-80, -65], scale: 0.5, type: 'sprite', image: 'jpearthheader' },
                                { name: 'pick jackpot earth splat', type: 'sprite', image: 'splat', position: [120, 0] },
                                { //###### bitmap-font  used !!!!!
                                    name: 'pick jackpot earth text', anchor: [1, 0.5], position: [30, 50], type: 'bitmap-text', text: '900', scale: 0.6,
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                {   position: [120, 0], childs: [
                                        { type: 'sprite', image: 'last', position: [0, -70] },
                                        {
                                            name: 'pick jackpot earth value',  type: 'bitmap-text', text: '18', position: [0, 20],
                                            styles: { align: 'right', font: { name: 'red', size: 70 }, tint: 0xFFFFFF }
                                        },
                                    ]
                                },
                                {
                                    name: 'pick jackpot earth overflow value', type: 'bitmap-text', text: 'x12', position: [120, 0], visible: false,
                                    styles: { align: 'right', font: { name: 'green', size: 70 }, tint: 0xFFFFFF }
                                },
                                { name: 'pick jackpot earth glow', position: [-84, 0], type: 'sprite', image: 'jpearthglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'pick jackpot fire', position: [0, -(2 - 1) * 177], drawed: 0, childs: [
                                { name: 'pick jackpot fire bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'pick jackpot fire icon', position: [-84, 0], type: 'sprite', image: 'jpfire' },
                                { name: 'pick jackpot fire label', position: [-80, -65], scale: 0.5, type: 'sprite', image: 'jpfireheader' },
                                { name: 'pick jackpot fire splat', type: 'sprite', image: 'splat', position: [120, 0] },
                                { //###### bitmap-font  used !!!!!
                                    name: 'pick jackpot fire text', anchor: [1, 0.5], position: [30, 50], type: 'bitmap-text', text: '900', scale: 0.6,
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { position: [120, 0], childs: [
                                        { type: 'sprite', image: 'last', position: [0, -70] },
                                        {
                                            name: 'pick jackpot fire value',  type: 'bitmap-text', text: '18', position: [0, 20],
                                            styles: { align: 'right', font: { name: 'red', size: 70 }, tint: 0xFFFFFF }
                                        },
                                    ]
                                },
                                {
                                    name: 'pick jackpot fire overflow value', type: 'bitmap-text', text: 'x12', position: [120, 0], visible: false,
                                    styles: { align: 'right', font: { name: 'green', size: 70 }, tint: 0xFFFFFF }
                                },
                                { name: 'pick jackpot fire glow', position: [-84, 0], type: 'sprite', image: 'jjpfireglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'pick jackpot water', position: [0, -(2 - 2) * 177], drawed: 0, childs: [
                                { name: 'pick jackpot water bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'pick jackpot water icon', position: [-84, 0], type: 'sprite', image: 'jpwater' },
                                { name: 'pick jackpot water label', position: [-80, -65], scale: 0.5, type: 'sprite', image: 'jpwaterheader' },
                                { name: 'pick jackpot water splat', type: 'sprite', image: 'splat', position: [120, 0] },
                                { //###### bitmap-font  used !!!!!
                                    name: 'pick jackpot water text', anchor: [1, 0.5], position: [30, 50], type: 'bitmap-text', text: '900', scale: 0.6,
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { position: [120, 0], childs: [
                                        { type: 'sprite', image: 'last', position: [0, -70] },
                                        {
                                            name: 'pick jackpot water value',  type: 'bitmap-text', text: '18', position: [0, 20],
                                            styles: { align: 'right', font: { name: 'red', size: 70 }, tint: 0xFFFFFF }
                                        },
                                    ]
                                },
                                {
                                    name: 'pick jackpot water overflow value', type: 'bitmap-text', text: 'x12', position: [120, 0], visible: false,
                                    styles: { align: 'right', font: { name: 'green', size: 70 }, tint: 0xFFFFFF }
                                },
                                { name: 'pick jackpot water glow', position: [-84, 0], type: 'sprite', image: 'jpwaterglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'pick jackpot thunder', position: [0, -(2 - 3) * 177], drawed: 0, childs: [
                                { name: 'pick jackpot thunder bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'pick jackpot thunder icon', position: [-84, 0], type: 'sprite', image: 'jpthunder' },
                                { name: 'pick jackpot thunder label', position: [-80, -65], scale: 0.5, type: 'sprite', image: 'jpthunderheader' },
                                { name: 'pick jackpot thunder splat', type: 'sprite', image: 'splat', position: [120, 0] },
                                { //###### bitmap-font  used !!!!!
                                    name: 'pick jackpot thunder text', anchor: [1, 0.5], position: [30, 50], type: 'bitmap-text', text: '900', scale: 0.6,
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { position: [120, 0], childs: [
                                        { type: 'sprite', image: 'last', position: [0, -70] },
                                        {
                                            name: 'pick jackpot thunder value',  type: 'bitmap-text', text: '18', position: [0, 20],
                                            styles: { align: 'right', font: { name: 'red', size: 70 }, tint: 0xFFFFFF }
                                        },
                                    ]
                                },
                                {
                                    name: 'pick jackpot thunder overflow value', type: 'bitmap-text', text: 'x12', position: [120, 0], visible: false,
                                    styles: { align: 'right', font: { name: 'green', size: 70 }, tint: 0xFFFFFF }
                                },
                                { name: 'pick jackpot thunder glow', position: [-84, 0], type: 'sprite', image: 'jpthunderglow', alpha: 0 },
                            ]
                        },
                        {
                            name: 'pick jackpot wind', position: [0, -(2 - 4) * 177], drawed: 0, childs: [
                                { name: 'pick jackpot wind bg', position: [0, 50], type: 'sprite', image: 'jackpotbg' },
                                { name: 'pick jackpot wind icon', position: [-84, 0], type: 'sprite', image: 'jpwind' },
                                { name: 'pick jackpot wind label', position: [-80, -65], scale: 0.5, type: 'sprite', image: 'jpwindheader' },
                                { name: 'pick jackpot wind splat', type: 'sprite', image: 'splat', position: [120, 0] },
                                { //###### bitmap-font  used !!!!!
                                    name: 'pick jackpot wind text', anchor: [1, 0.5], position: [30, 50], type: 'bitmap-text', text: '900', scale: 0.6,
                                    styles: { align: 'right', font: { name: 'font', size: 90 }, tint: 0xFFFFFF }
                                },
                                { position: [120, 0], childs: [
                                        { type: 'sprite', image: 'last', position: [0, -70] },
                                        {
                                            name: 'pick jackpot wind value',  type: 'bitmap-text', text: '18', position: [0, 20],
                                            styles: { align: 'right', font: { name: 'red', size: 70 }, tint: 0xFFFFFF }
                                        },
                                    ]
                                },
                                {
                                    name: 'pick jackpot wind overflow value', type: 'bitmap-text', text: 'x12', position: [120, 0], visible: false,
                                    styles: { align: 'right', font: { name: 'green', size: 70 }, tint: 0xFFFFFF }
                                },
                                { name: 'pick jackpot wind glow', position: [-84, 0], type: 'sprite', image: 'jpwindglow', alpha: 0 },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name: 'Woncontainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'FreespinWonContainer',
                    visible: false,
                    event: 'disabled button',
                    childs: [
                        {
                            type: 'sprite',
                            image: 'bonus_freespin_fgbackgroundeffect'
                        },
                        {
                            position: [-800, -250],
                            scale: 0.75,
                            type: 'sprite',
                            image: 'bonus_freespin_bannerflair'
                        },
                        {
                            position: [400, -250],
                            scale: [-0.75, 0.75],
                            type: 'sprite',
                            image: 'bonus_freespin_bannerflair'
                        },
                        {
                            type: 'sprite',
                            position: [-180, -300],
                            image: 'bonus_freespin_congratstext'
                        },
                        {
                            type: 'sprite',
                            position: [-180, -150],
                            scale: 0.7,
                            image: 'bonus_freespin_wontext'
                        },
                        {
                            name: 'freespinwon value',
                            type: 'bitmap-text',
                            text: '30',
                            position: [-200, 0],
                            styles: { align: 'right', font: { name: 'blue', size: 70 }, tint: 0xFFFFFF }
                        },
                        {
                            type: 'sprite',
                            image: 'bonus_freespin_freetext',
                            scale: 0.7,
                            position: [-400, 180]
                        },
                        {
                            type: 'sprite',
                            image: 'bonus_freespin_gametext',
                            scale: 0.7,
                            position: [-50, 180]
                        },
                    ]
                },
                {
                    name: 'EndFreespinWonContainer',
                    visible: false,
                    event: 'disabled button',
                    childs: [
                        {
                            type: 'sprite',
                            image: 'bonus_freespin_fgbackgroundeffect'
                        },
                        {
                            position: [-800, -250],
                            scale: 0.75,
                            type: 'sprite',
                            image: 'bonus_freespin_bannerflair'
                        },
                        {
                            position: [400, -250],
                            scale: [-0.75, 0.75],
                            type: 'sprite',
                            image: 'bonus_freespin_bannerflair'
                        },
                        {
                            type: 'sprite',
                            position: [-180, -300],
                            image: 'bonus_freespin_congratstext'
                        },
                        {
                            type: 'sprite',
                            position: [-180, -160],
                            scale: 0.6,
                            image: 'bonus_freespin_wontext'
                        },
                        {
                            name: 'endfreespinwon value',
                            type: 'bitmap-text',
                            text: '120,675',
                            position: [-200, 0],
                            styles: { align: 'center', font: { name: 'font', size: 100 }, tint: 0xFFFFFF }
                        },
                        {
                            name: 'endfreespinwon count',
                            type: 'bitmap-text',
                            text: '30',
                            position: [-255, 170],
                            styles: { align: 'right', font: { name: 'blue', size: 55 }, tint: 0xFFFFFF }
                        },
                        {
                            type: 'sprite',
                            image: 'bonus_freespin_duringtext',
                            position: [-550, 180],
                        },
                        {
                            type: 'sprite',
                            image: 'bonus_freespin_freetext',
                            scale: 0.7,
                            position: [0, 180]
                        },
                        {
                            type: 'sprite',
                            image: 'bonus_freespin_gametext',
                            scale: 0.7,
                            position: [350, 180]
                        },
                    ]
                }
            ]
        },
        {
            name: 'FreespinEndAnimationContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'jackpotWonContainer',
                    visible: false,
                    position: [0, -75],
                    childs: [
                        {
                            name: 'jackpot won iconBack',
                            type: 'sprite',
                            scale: 2.5,
                            image: '2'
                        },
                        {
                            type: 'sprite',
                            position: [-650, -110],
                            image: 'bonus_freespin_bannerflair'
                        },
                        {
                            type: 'sprite',
                            position: [650, -110],
                            scale: [-1, 1],
                            image: 'bonus_freespin_bannerflair'
                        },
                        {
                            type: 'sprite',
                            position: [0, -110],
                            image: 'bonus_freespin_wontext'
                        },
                        {
                            name: 'jackpot won iconbanner',
                            type: 'sprite',
                            image: 'jpfirebanner',
                            position: [0, 100],
                            scale: 2,
                        },
                        {
                            name: 'jackpot won value',
                            type: 'bitmap-text',
                            text: '19500',
                            position: [0, 300],
                            styles: { align: 'center', font: { name: 'font', size: 80 }, tint: 0xFFFFFF }
                        }
                    ]
                }
            ]
        },
        {
            name: 'OverlayContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080], scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'overlay', visible: false, childs: [
                        { name: 'overlay rect', event: 'overlay',  type: 'graphics', draw: [['beginFill', 0x000000], ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]] }
                    ]
                }
            ]
        },
        {
            name: 'WinContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'win container', visible: false, childs: [
                        { name: 'win window', position: [0, -40], type: 'sprite', image: 'wins_win' },
                        {
                            name: 'win window particle container', position: [0, -1080 / 2 - 0], childs: [
                                /*{
                                    name: 'emitter1', type: 'emitter', count:'20',
                                    interval:100,
                                }//*/
                            ]},
                    ]
                }
            ]
        },
        {
            name: 'InfoContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 900],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 900],
            childs: [
                {
                    name: 'info container 1',
                    scalePortrait: [0.76, 0.5],
                    scalePortraitIPad: [0.76, 0.5],
                    positionPortrait: [0, -270],
                    scaleLandscape: [1, 1],
                    positionPortraitIPad: [0, -270],
                    positionPortraitIPhoneX: [0, -860],
                    positionLandscape: [0, 0],
                    visiblePortrait: false,
                    visibleLandscape: false,
                    childs: [
                        {
                            name: 'info container 1 background',
                            type: 'sprite',
                            positionLandscape: [0, 0],
                            position: [0, 0],
                            scalePortrait: [2.4, 1.2],
                            scaleLandscape: [2.4, 1.53],
                            image: 'wthelp.jpg',
                            scaleLandscapeIPad: [2.4, 1.53],
                            scaleLandscapeIPhoneX: [2.4, 1.53]
                        },
                        {
                            name: 'info container 1 text 1',
                            type: 'text',
                            text: '100',
                            positionPortrait: [-500, -320],
                            positionLandscape: [-500, -410],
                            positionLandscapeIPad: [-500, -310],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 2',
                            type: 'text',
                            text: '25',
                            positionPortrait: [-500, -285],
                            positionLandscape: [-500, -370],
                            positionLandscapeIPad: [-500, -270],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 3',
                            type: 'text',
                            text: '7',
                            positionPortrait: [-500, -250],
                            positionLandscape: [-500, -330],
                            positionLandscapeIPad: [-500, -230],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 4',
                            type: 'text',
                            text: '20',
                            positionPortrait: [-500, -210],
                            positionLandscape: [-500, -260],
                            positionLandscapeIPad: [-500, -90],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 5',
                            type: 'text',
                            text: '10',
                            positionPortrait: [-500, -175],
                            positionLandscape: [-500, -220],
                            positionLandscapeIPad: [-500, -50],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 6',
                            type: 'text',
                            text: '5',
                            positionPortrait: [-500, -140],
                            positionLandscape: [-500, -180],
                            positionLandscapeIPad: [-500, -10],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 7',
                            type: 'text',
                            text: '10',
                            positionPortrait: [-500, -90],
                            positionLandscape: [-500, -120],
                            positionLandscapeIPad: [-500, -90],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 8',
                            type: 'text',
                            text: '5',
                            positionPortrait: [-500, -55],
                            positionLandscape: [-500, -75],
                            positionLandscapeIPad: [-500, -50],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 9',
                            type: 'text',
                            text: '3',
                            positionPortrait: [-500, -20],
                            positionLandscape: [-500, -30],
                            positionLandscapeIPad: [-500, -10],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 10',
                            type: 'text',
                            text: '10',
                            positionPortrait: [-500, 20],
                            positionLandscape: [-500, 30],
                            positionLandscapeIPad: [-500, 130],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 11',
                            type: 'text',
                            text: '5',
                            positionPortrait: [-500, 55],
                            positionLandscape: [-500, 70],
                            positionLandscapeIPad: [-500, 170],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 12',
                            type: 'text',
                            text: '3',
                            positionPortrait: [-500, 90],
                            positionLandscape: [-500, 110],
                            positionLandscapeIPad: [-500, 210],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 13',
                            type: 'text',
                            text: '500',
                            positionPortrait: [0, -210],
                            positionLandscape: [0, -270],
                            positionLandscapeIPad: [0, -170],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 14',
                            type: 'text',
                            text: '50',
                            positionPortrait: [0, -175],
                            positionLandscape: [0, -225],
                            positionLandscapeIPad: [0, -125],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 15',
                            type: 'text',
                            text: '10',
                            positionPortrait: [0, -140],
                            positionLandscape: [0, -180],
                            positionLandscapeIPad: [0, -80],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 16',
                            type: 'text',
                            text: '50',
                            positionPortrait: [0, 20],
                            positionLandscape: [0, 25],
                            positionLandscapeIPad: [0, -170],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 17',
                            type: 'text',
                            text: '25',
                            positionPortrait: [0, 55],
                            positionLandscape: [0, 70],
                            positionLandscapeIPad: [0, -125],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 18',
                            type: 'text',
                            text: '5',
                            positionPortrait: [0, 90],
                            positionLandscape: [0, 115],
                            positionLandscapeIPad: [0, -80],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 19',
                            type: 'text',
                            text: '8',
                            positionPortrait: [750, -320],
                            positionLandscape: [750, -410],
                            positionLandscapeIPad: [530, -310],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 20',
                            type: 'text',
                            text: '4',
                            positionPortrait: [750, -285],
                            positionLandscape: [750, -370],
                            positionLandscapeIPad: [530, -270],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 21',
                            type: 'text',
                            text: '2',
                            positionPortrait: [750, -250],
                            positionLandscape: [750, -330],
                            positionLandscapeIPad: [530, -230],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 22',
                            type: 'text',
                            text: '8',
                            positionPortrait: [750, -210],
                            positionLandscape: [750, -260],
                            positionLandscapeIPad: [530, -310],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 23',
                            type: 'text',
                            text: '4',
                            positionPortrait: [750, -175],
                            positionLandscape: [750, -220],
                            positionLandscapeIPad: [530, -270],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 24',
                            type: 'text',
                            text: '2',
                            positionPortrait: [750, -140],
                            positionLandscape: [750, -180],
                            positionLandscapeIPad: [530, -230],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 25',
                            type: 'text',
                            text: '8',
                            positionPortrait: [750, -90],
                            positionLandscape: [750, -120],
                            positionLandscapeIPad: [530, -310],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 26',
                            type: 'text',
                            text: '4',
                            positionPortrait: [750, -55],
                            positionLandscape: [750, -75],
                            positionLandscapeIPad: [530, -270],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 27',
                            type: 'text',
                            text: '2',
                            positionPortrait: [750, -20],
                            positionLandscape: [750, -30],
                            positionLandscapeIPad: [530, -230],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 28',
                            type: 'text',
                            text: '5',
                            positionPortrait: [750, 20],
                            positionLandscape: [750, 30],
                            positionLandscapeIPad: [530, -310],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 29',
                            type: 'text',
                            text: '2',
                            positionPortrait: [750, 55],
                            positionLandscape: [750, 70],
                            positionLandscapeIPad: [530, -270],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 30',
                            type: 'text',
                            text: '1',
                            positionPortrait: [750, 90],
                            positionLandscape: [750, 110],
                            positionLandscapeIPad: [530, -230],
                            stylesPortrait: {fontSize: '28px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '36px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 31',
                            type: 'text',
                            text: 'Multiplier symbol doubles',
                            positionPortrait: [560, 160],
                            positionLandscape: [550, 200],
                            positionLandscapeIPad: [530, 170],
                            stylesPortrait: {fontSize: '36px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '26px', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 1 text 32',
                            type: 'text',
                            text: 'winnings',
                            positionPortrait: [560, 200],
                            positionLandscape: [550, 260],
                            positionLandscapeIPad: [530, 170],
                            stylesPortrait: {fontSize: '36px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '26px', padding: 20, fill: 0xfef901}
                        },

                        {
                            name: 'info container 1 text 33',
                            type: 'text',
                            text: 'MULFUNCTION VOIDS ALL PAYS AND PLAYS.',
                            positionPortrait: [0, 320],
                            positionLandscape: [0, 400],
                            positionLandscapeIPad: [0, 400],
                            stylesPortrait: {fontSize: '36px', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '26px', padding: 20, fill: 0xffffff}
                        }
                    ]
                },
                {
                    name: 'info container 2',
                    scalePortrait: [0.76, 0.5],
                    scalePortraitIPad: [0.76, 0.5],
                    scaleLandscape: 1,
                    positionPortrait: [0, -270],
                    positionPortraitIPad: [0, -270],
                    positionPortraitIPhoneX: [0, -860],
                    positionLandscape: [0, 0],
                    visiblePortrait: false,
                    visibleLandscape: false,
                    childs: [
                        {
                            name: 'info container 2 background',
                            type: 'sprite',
                            image: 'wlhelp.jpg',
                            positionLandscape: [0, 0],
                            position: [0, 0],
                            scalePortrait: [2.4, 1.2],
                            scaleLandscape: [2.4, 1.53],
                            scaleLandscapeIPhoneX: [2.4, 1.53]
                        },
                        {
                            name: 'info container 2 text 1',
                            type: 'text',
                            text: 'Wins pay only from the left to right',
                            positionPortrait: [0, 180],
                            positionLandscape: [0, 230],
                            positionLandscapeIPad: [0, 300],
                            stylesPortrait: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '46px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                    ]
                },
                {
                    name: 'info container 3',
                    scalePortrait: [0.76, 0.5],
                    scalePortraitIPad: [0.76, 0.5],
                    scaleLandscape: 1,
                    positionPortrait: [0, -270],
                    positionPortraitIPad: [0, -270],
                    positionPortraitIPhoneX: [0, -860],
                    positionLandscape: [0, 0],
                    visiblePortrait: false,
                    visibleLandscape: false,
                    childs: [
                        {
                            name: 'info container 3 background',
                            type: 'sprite',
                            image: 'freespin_help.jpg',
                            position: [0, 0],
                            scalePortrait: [2.4, 1.2],
                            scaleLandscape: [2.4, 1.53],
                            scaleLandscapeIPad: [2.4, 1.53],
                            scaleLandscapeIPhoneX: [2.4, 1.53]
                        },
                        {
                            name: 'info container 3 text 1',
                            type: 'text',
                            text: '3 or more PARTY TIME symbols on any position win',
                            positionPortrait: [150, -210],
                            positionLandscape: [170, -260],
                            positionLandscapeIPad: [170, -300],
                            styles: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 3 text 2',
                            type: 'text',
                            text: 'BONUSSPINS.',
                            positionPortrait: [150, -150],
                            positionLandscape: [170, -190],
                            positionLandscapeIPad: [170, -250],
                            styles: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 3 text 4',
                            type: 'text',
                            text: 'During bonus all symbols pay on any position.',
                            positionPortrait: [150, -30],
                            positionLandscape: [170, -20],
                            positionLandscapeIPad: [170, -30],
                            styles: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 3 text 5',
                            type: 'text',
                            text: 'Play the Bonus until you have no BONUSSSPINS left.',
                            positionPortrait: [150, 120],
                            positionLandscape: [170, 150],
                            positionLandscapeIPad: [170, 170],
                            styles: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 3 text 5',
                            type: 'text',
                            text: 'BONUSSPINS can be re-triggered during the Bonus.',
                            positionPortrait: [150, 160],
                            positionLandscape: [170, 210],
                            positionLandscapeIPad: [170, 170],
                            styles: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                    ]
                },
                {
                    name: 'info container 4',
                    scalePortrait: [0.76, 0.5],
                    scalePortraitIPad: [0.76, 0.5],
                    scaleLandscape: 1,
                    positionPortrait: [0, -270],
                    positionPortraitIPad: [0, -270],
                    positionPortraitIPhoneX: [0, -860],
                    positionLandscape: [0, 0],
                    visiblePortrait: false,
                    visibleLandscape: false,
                    childs: [
                        {
                            name: 'info container 4 background',
                            type: 'sprite',
                            image: 'symbols_help.jpg',
                            positionLandscape: [0, 0],
                            position: [0, 0],
                            scalePortrait: [2.4, 1.2],
                            scaleLandscape: [2.4, 1.53],
                            scaleLandscapeIPhoneX: [2.4, 1.53]
                        },
                        {
                            name: 'info container 4 text 1',
                            type: 'text',
                            text: 'SCATTER symbol pays on any position.',
                            positionPortrait: [300, -140],
                            positionLandscape: [300, -190],
                            positionLandscapeIPad: [170, 170],
                            styles: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                        {
                            name: 'info container 4 text 2',
                            type: 'text',
                            text: 'Multiplier symbol doubles winnings.',
                            positionPortrait: [300, 110],
                            positionLandscape: [300, 120],
                            positionLandscapeIPad: [0, 300],
                            styles: {fontSize: '36px', fontWeight: 'Bold', padding: 20, fill: 0xfef901},
                            stylesLandscape: {fontSize: '46px', fontWeight: 'Bold', padding: 20, fill: 0xfef901}
                        },
                    ]
                },
                {
                    name: 'info container controlls',
                    visiblePortrait: false,
                    visibleLandscape: false,
                    scalePortrait: [1, 0.5],
                    positionPortrait: [0, -113],
                    positionPortraitIPad: [0, -113],
                    positionLandscape: [0, 400],
                    positionLandscapeIPad: [0, 400],
                    scale: 1,
                    childs: [
                        {
                            name: 'info container controlls current page bg',
                            type: 'sprite',
                            image: 'button-regular.png',
                            positionPortrait: [-600, 0],
                            positionLandscape: [-650, 0],
                            positionLandscapeIPad: [-750, 0],
                            scale: 1,
                            childs: [
                                {
                                    name: 'info container controlls current page text 1',
                                    type: 'text',
                                    position: [0, 0],
                                    styles: {fontSize: '46px', padding: 20, fill: 0xffffff}
                                },
                            ]
                        },
                        {
                            name: 'info container controlls left arrow',
                            type: 'sprite',
                            image: 'button-regular.png',
                            button: 'left arrow',
                            position: [-100, 0],
                            positionPortrait: [-400, 0],
                            positionLandscape: [-450, 0],
                            scale: 1,
                            childs: [
                                {
                                    name: 'info container controlls left arrow text 1',
                                    type: 'text',
                                    text: '<<',
                                    position: [0, 0],
                                    styles: {fontSize: '46px', padding: 20, fill: 0xffffff}
                                },
                            ]
                        },
                        {
                            name: 'info container controlls right arrow',
                            type: 'sprite',
                            image: 'button-regular.png',
                            button: 'right arrow',
                            position: [100, 0],
                            positionPortrait: [400, 0],
                            positionLandscape: [450, 0],
                            scale: 1,
                            childs: [
                                {
                                    name: 'info container controlls right arrow text 1',
                                    type: 'text',
                                    text: '>>',
                                    position: [0, 0],
                                    styles: {fontSize: '46px', padding: 20, fill: 0xffffff}
                                },
                            ]
                        },
                        {
                            name: 'info container controlls return',
                            type: 'sprite',
                            image: 'button-regular.png',
                            button: 'info close',
                            visiblePortrait: false,
                            visibleLandscape: true,
                            positionPortrait: [600, 0],
                            positionLandscape: [650, 0],
                            positionLandscapeIPad: [750, 0],
                            scale: 1,
                            childs: [
                                {
                                    name: 'info container controlls return text 1',
                                    type: 'text',
                                    text: 'RETURN\nTO GAME',
                                    position: [0, 0],
                                    styles: {
                                        fontWeight: 'Bold',
                                        fontSize: '26px',
                                        align: 'center',
                                        padding: 20,
                                        fill: 0xffffff
                                    }
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'BonusContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bonus container',
                    visible: false,
                    childs: [
                        {name: 'bonus rect', type: 'sprite', image: 'bonuspane.png'},
                        {name: 'bonus line', type: 'graphics'},
                        {
                            name: 'bonus text 2',
                            type: 'text',
                            text: 'Something went wrong.',
                            position: [0, 0],
                            styles: {
                                align: 'center',
                                fontFamily: 'Oswald-Bold',
                                fontWeight: 700,
                                stroke: 'white',
                                strokeThickness: 5,
                                fontSize: '60px',
                                padding: 15,
                                fill: [0xff0b00, 0xffa61f]
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'HelpContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    type: 'graphics',
                    alpha: 0.1,
                    event: 'disabled button',
                    draw: [
                        ['beginFill', 0x000000],
                        ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]
                    ]
                },
                {
                    name: 'help background',
                    event: 'disabled button',
                    position: [0, -80],
                    childs: [
                        {
                            type: 'graphics',
                            draw: [
                                ['beginFill', 0xffffff],
                                ['drawRoundedRect', [-1820 / 2, -920 / 2, 1820, 920, 20]]
                            ],
                        },
                        {
                            type: 'graphics',
                            draw: [
                                ['beginFill', 0x000000],
                                ['drawRoundedRect', [-1805 / 2, -905 / 2, 1805, 905, 20]]
                            ],
                        },
                        {
                            name: 'help close button bar',
                            position: [830, -400],
                            childs: [
                                {
                                    name: 'help close button',
                                    button: 'button',
                                    type: 'sprite',
                                    image: 'XCloseButton',
                                },
                                {
                                    name: 'help close button glow',
                                    type: 'sprite',
                                    alpha: 0,
                                    image: 'XCloseButton_PressState'
                                }
                            ]
                        },
                        {
                            name: 'help page indicator container',
                            position: [0, 380],
                            scale: 0.65,
                            childs: []
                        },
                        {
                            name: 'help page Content',
                            type: 'sprite',
                            image: 'helpPage1'
                        }
                    ]
                }
            ]
        },
        {
            name: 'FlashContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'whitescreen',
                    visible: false,
                    type: 'sprite',
                    image: 'whiteflash'
                },
                {
                    name: 'blackscreen',
                    visible: false,
                    type: 'sprite',
                    image: 'bonus_freespin_blackoutro'
                }
            ]
        },
        {
            name: 'ErrorScreenContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'ErrorScreen',
                    type: 'graphics',
                    visible: false,
                    draw: [
                        ['beginFill', 0x000000],
                        ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]
                    ]
                }
            ]
        },
        {
            name: 'SplashScreen',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'loadingScreen',
                    type: 'sprite',
                    image: 'loader'
                }
            ]
        },
        {
            name: 'OrientSwitchContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1080, 1920],
            scaleStrategyLandscape: [0,0],
            visibleLandscape: false,
            visiblePortrait: true,
            childs: [
                {
                    name: 'orient switch background',
                    type: 'graphics',
                    scale:[1, 1],
                    draw: [['beginFill', 0x212121], ['drawRect', [-1920, -1920, 3840, 3840]]],
                    childs: [
                        { name: 'orient switch icon', type: 'sprite', image: 'orient_switch.jpg' },
                        {
                            name: 'orient switch text', position: [0, -300],
                            type: 'text', text: 'PLEASE TURN YOUR DEVICE', alpha: 1,
                            styles: {
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '60px',
                                fontWeight: 'Bold',
                                fill: 0xffffff
                            }
                        }
                    ]
                }
            ]
        }
    ],

    Events: {
        'Gameplay before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Gameplay menu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this['MenuContainer'].visible = this.menu_mode = false;
        },

        'Gameplay menu items container over': function (container, e) {
            MRAID.markMeaningfulInteraction();
            if (this['MenuContainer'].tween) this['MenuContainer'].tween.stop();
            this['MenuContainer'].tween = this.tween({ to: ['alpha', 1, 150, 0, Power1.easeOut] }, 'MenuContainer');
            this['MenuContainer'].alpha = 1;
        },
        'Gameplay menu items container out': function (container, e) {
            MRAID.markMeaningfulInteraction();
            if (this['MenuContainer'].tween) this['MenuContainer'].tween.stop();
            this['MenuContainer'].tween = this.tween({ to: ['alpha', 0, 1500, 0, Power1.easeOut] }, 'MenuContainer');
        },

        'Gameplay automenu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this['AutoMenuContainer'].visible = this.automenu_mode = false;
        },

        'overlay down': function () {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay build': function () {
            this.is_local_mode = true;
            //getting init data from server
            if(!this.is_local_mode){
                var reg1 = new RegExp("(^|&)" + "game_id" + "=([^&]*)(&|$)", "i");
                var reg2 = new RegExp("(^|&)" + "s" + "=([^&]*)(&|$)", "i");
                var r1 = window.location.search.substr(1).match(reg1);
                var r2 = window.location.search.substr(1).match(reg2);
                if(r1 == null || r2 == null){
                    console.log("no");
                    this.userBlockLayer.active = true;
                    return;
                }
                this.game_id = r1[2];
                this.session_id = r2[2];
            } else {
                this['ErrorScreen'].visible = false;
            }
            // server end
            this.is_bonus = false;
            this.const = {
                RESULT_TYPE: {
                    NORMAL: 0x000000,
                    BIGMONEY: 0x000001,
                    JACKPOT: 0x000002,
                    BLUEJACKPOT: 0x000003,
                    REDJACKPOT: 0x000004
                },
            };
            this.win_anim_mode = 0x0;
            this.is_win_anim = false;

            this.menu_mode = false;
            this.automenu_mode = false;
            this.denommenu_mode = false;
            this.current_auto_amount = 0;
            this.current_denom_amount = 0;
            this.state = 'ready';

            //getting init data from server
            if(!this.is_local_mode)
            {
                var cashinfo = this.getCashInfo();
                this.gamesession_id = cashinfo.response.gamesession_id;
                this.credits = {
                    value: parseFloat(cashinfo.response.balance),
                    drawed: parseFloat(cashinfo.response.balance)
                };
                this.gamespec = cashinfo.response.gamespec;
                this.gamesession_id = cashinfo.response.gamesession_id;
            }
            else
            {
                this.credits = { value: 11250, drawed: 11250 };
            }
            //server end
            if (!this.is_local_mode) {
                var array_server = this.getInitData();
                if (array_server.error == 0) {
                    this.line_value_list = array_server.response.arrLinesValue;
                    this.betperline_value_list = array_server.response.arrBetValue;
                    this.denom_value_list = array_server.response.arrDenomValue;
                    // this.jackpot_value_list = array_server.response.arrJackpotValue;  //Special in Gold.
                    this.jackpot_value_list = [300, 450, 600, 750, 900];
                    this.pick_jackpot_value_list = [300, 450, 600, 750, 900];
                    this.pick_jackpot_count_list = [18, 18, 18, 18, 18];
                    this.bet = {
                        amount: this.denom_value_list[0] * this.line_value_list[0] * this.betperline_value_list[0],
                        drawed: this.denom_value_list[0],
                        step: 1
                    };
                    this.lines = { value: this.line_value_list[0], step: 1 };
                    this.betperlines = { value: this.betperline_value_list[0], step: 1 }; //renameed from 'levels'
                    this.denomes = { value: this.denom_value_list[0], step: 1 }; //renameed from 'coins'
                } else {
                    console.warn("Server error(GET SETTING)");
                }
            } else {
                this.line_value_list = [30];
                this.betperline_value_list = [1, 2, 3, 4, 5];
                this.denom_value_list = [1, 2, 3, 5, 7, 10];
                this.jackpot_value_list = [300, 450, 600, 750, 900];
                this.pick_jackpot_value_list = [300, 450, 600, 750, 900];
                this.pick_jackpot_count_list = [18, 18, 18, 18, 18];
                this.bet = {
                    amount: this.denom_value_list[0] * this.line_value_list[0] * this.betperline_value_list[0],
                    drawed: this.denom_value_list[0] * this.line_value_list[0] * this.betperline_value_list[0],
                    step: 1
                };
                this.lines = { value: 1, step: 1 };
                this.betperlines = { value: this.betperline_value_list[0], step: 1 }; //renameed from 'levels'
                this.denomes = { value: this.denom_value_list[0], step: 1 }; //renameed from 'coins'
            }
            //this.spinCombinations = [];

            /*-----------------help indicator build start-----------------*/
            this.helpPageVisabilityFlag = false;
            this.helpPageIndex = 1;

            let xPos = [-375, -300, -225, -150, -75, 0, 75, 150, 225, 300, 375];
            this.buildChild(this['help page indicator container'], {
                name: `help left arrow button bar`,
                visible: false,
                position: [xPos[0], 0],
            });
            this.buildChild(this['help left arrow button bar'], {
                name: 'help left arrow button',
                button: 'button',
                type: 'sprite',
                image: 'HelpscreenLeftArrowButton'
            });
            this.buildChild(this['help left arrow button bar'], {
                name: 'help left arrow button glow',
                type: 'sprite',
                alpha: 0,
                image: 'HelpscreenLeftArrowButton_PressState'
            });

            this.buildChild(this['help page indicator container'], {
                name: `help right arrow button bar`,
                position: [xPos[xPos.length - 1], 0],
            });
            this.buildChild(this['help right arrow button bar'], {
                name: 'help right arrow button',
                button: 'button',
                type: 'sprite',
                image: 'HelpscreenRightArrowButton'
            });
            this.buildChild(this['help right arrow button bar'], {
                name: 'help right arrow button glow',
                type: 'sprite',
                alpha: 0,
                image: 'HelpscreenRightArrowButton_PressState'
            });
            for (let i = 1; i < xPos.length - 1; i++) {
                this.buildChild(this['help page indicator container'], {
                    name: `help indicator ${i} bar`,
                    event: 'help indicator',
                    step: i,
                    position: [xPos[i], 0],
                });
                this.buildChild(this[`help indicator ${i} bar`], {
                    name: `help indicator ${i}`,
                    type: 'sprite',
                    image: 'HelpscreenIndexBubble'
                });
                this.buildChild(this[`help indicator ${i} bar`], {
                    name: `help indicator ${i} glow`,
                    type: 'sprite',
                    alpha: i === 1 ? 1 : 0,
                    image: 'HelpscreenIndexBubble_PressState'
                });
            }

            /*-----------------help indicator build end-----------------*/

            this.accountData = { name: ' ', cpu: 0,  net: 0,  balance: ' '};

            this.wildBackTween = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.wildBackTween.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.wildBackTween.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.wildBackTween.showTweens = [];
                    this.wildBackTween.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.wildBackTween.hideTweens = [];
                },
                hideQuick: () => {
                    this.wildBackTween.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.wildBackTween.showTweens = [];
                    this.wildBackTween.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.wildBackTween.hideTweens = [];
                    this.wildBackTween.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.wildBackTween.hideQuickTweens = [];
                }
            };

            this.currentTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.hideTweens = [];
                    this.currentTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideQuickTweens = [];
                    this['game board symbols borders'].children.forEach((border) => { border.alpha = 0;});
                }
            };

            this.auto_mode = false;
            this.sound_mode = true;
            this.speed_play_mode = false;
            this.help_mode = false;
            this.creditsNotInc = true;

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 3;
            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;

            this.COLUMNS_OFFSET = 285;
            this.ROWS_OFFSET = 260; // symbols offset in the reel
            this.BOARD_SIZE = {x:this.COLUMNS_COUNT * this.COLUMNS_OFFSET, y:this.ROWS_COUNT * this.ROWS_OFFSET};

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 300;
            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 0;
            this.DELAY_LINE_TIME = 2500;  //show time per line

            this.SYMBOLS_SCALE = [0.9, 0.9];

            this.reels = [];

            this.buildChild(this['game board symbols container'], {
                name: 'board symbol mask', type: 'graphics', alpha: 0.5,
                draw: [['beginFill', [0x0000ff]], ['drawRect', [-this.BOARD_SIZE.x / 2, -this.BOARD_SIZE.y / 2, this.BOARD_SIZE.x,this.BOARD_SIZE.y]]],
            });

            //create symbol & highlight symbol
            let anticipationFrames = [];
            for(let i = 0; i < 10; i++) {
                anticipationFrames.push(`RHL_EF_REEL_00_${i}`);
            }
            let mostLeft = -1 * (this.COLUMNS_COUNT - 1) / 2 * this.COLUMNS_OFFSET ; // the most left element on game board
            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                let reelSprite = this.buildChild(this['game board symbols container'], {
                    name: 'reel ' + i, mask: 'board symbol mask',
                    position: [mostLeft - i * 0 + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET],
                });
                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'],  {
                    name: 'reel highlighted ' + i, //mask: 'board symbol mask',
                    position: [mostLeft - i * 0 + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                });
                this.buildChild(this['game board symbols reelanticipation'], {
                    name: 'reel anticipation ' + i,
                    position: [mostLeft - i * 0 + this.COLUMNS_OFFSET * i, 0],
                    type: 'movie-clip',
                    frames: anticipationFrames,
                    speed: 0.2,
                    visible: false,
                    loop: true
                });
                this.buildChild(this['game board symbols glow container'], {
                    name: `reel glow ${i} container`,
                    position: [mostLeft + this.COLUMNS_OFFSET * i, 0],
                });
                this.reels.push({
                    sprite: reelSprite,
                    spriteHighlight: reelSpriteHighlight,
                    speed: null,
                    completeSymbol: null,
                    completed: null,
                    animationState: null
                });

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    this.buildChild(this['reel ' + i], {
                        name: 'reel ' + i + ' symbol container ' + j,  position: [0, this.ROWS_OFFSET * j], scale: this.SYMBOLS_SCALE });
                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' crisp',   type: 'sprite'
                    });
                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' blur',   type: 'sprite', visible: false
                    });
                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,  position: [0, this.ROWS_OFFSET * j],
                    });
                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlight',  scale: this.SYMBOLS_SCALE, type: 'sprite', visible: false
                    });
                    if(j < this.ROWS_COUNT) {
                        this.buildChild(this[`reel glow ${i} container`], {
                            name: 'reel ' + i + ' symbol ' + j + ' glow',
                            position: [0, this.ROWS_OFFSET * (j - 1)],
                            type: 'sprite',
                            image: 'jpearthglow',
                            visible: false
                        });
                    }
                    var card_index = _.random(0, App.escalibur.UniqueSymbols.length - 1);  // console.log(card_index,  i, j, card_index);
                    this.setSymbolTexture('reel ' + i + ' symbol container ' + j, App.SymbolsNames[App.escalibur.UniqueSymbols[card_index]], 'init');
                }
            }

            //create borders
            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                for (let j = 0; j < this.ROWS_COUNT; j++) {
                    this.buildChild(this['game board symbols borders'], {
                        name: 'border-' + i + '-' + j, position:[mostLeft + this.COLUMNS_OFFSET * i, (j-1)*this.ROWS_OFFSET],
                        type: 'sprite', image: 'wins_winBox', alpha: 0
                    });
                }
            }
            this.spinIntroShow = true;
        },

        'Gameplay resize': function () {

            // this['ErrorScreen'].visible = this.userBlockLayer === undefined && this.is_local_mode === false;
            // this.refreshHelpValue();
            this.refreshPanelValues();
            if(this.spinIntroShow === true) {
                this.spinIntroShow = false;
                let frames = [];
                for(let i = 2; i <= 158; i += 4) {
                    frames.push(`SpinLogo_V6A_${i.toString().padStart(5, '0')}.png`)
                }
                this.buildChild(this['SplashScreen'], {
                    name: 'spinIntro',
                    type: 'movie-clip',
                    frames: frames,
                    speed: 0.2,
                    scale: 2
                });
                this['spinIntro'].gotoAndPlay(0);
                setTimeout(() => {
                    this['spinIntro'].visible = false;
                    setTimeout(() => {
                        this.tween({
                            set: ['alpha', 1],
                            to: ['alpha', 0, 500]
                        }, 'loadingScreen');
                    }, 2500);
                }, 6000);
            } else {
                this['SplashScreen'].visible = false;
            }
            /*this.helpArrowsSetPosition();
            /!*
            if (App.IsPortrait) {
                this.helpPageVisabilityFlag = false;
                this['info container ' + this.helpPageIndex].visible = true;
                this['info container ' + this.helpPageIndex].alpha = 1;
                this['info container controlls'].visability = true;
                this['info container controlls'].alpha = 1;
                this['MainContainer'].visible = 1;
                this['ControlPanelContainer'].visible = 1;
            }
            *!/
            else{
            }

            if(this.automenu_mode === true)
                this['AutoMenuContainer'].visible = true;*/
            if (App.IsLandscape) {
                this.setFreespinMode(this.isfreespin);
                this.updatePickJackpotValue(false);
                this.setButtonEnable('maxbet button', !this.isfreespin);
                this.setButtonEnable('autospin button', !this.isfreespin);
                this.setButtonEnable('betperline bar', !this.isfreespin);
                this.setButtonEnable('denom bar', !this.isfreespin);
                this.refreshPanelValues();
                if (this.pickVisiblityFlag) {
                    this['PickContainer'].visible = true;
                    this['jackpot container'].visible = false;
                    this['pick jackpot container'].visible = true;
                }
            }
        },

        'Gameplay showed': function () {
            if (Settings["intro"]) {
                this.showIntro(function () {
                    this.startGame();
                });
            } else {
                this.skipIntro(function () {
                    this.startGame();
                });
            }
        },

        'Gameplay update': function() {

            let time = this.updateTimeOffset/(1000/60);
            if(time > 2) time = 2;
            if(this.state === 'spin' || this.state === 'spinStop') {
                for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                    if(this.reels[i].completed) continue;
                    if(this.state === 'spinStop' && this.reels[i].completeSymbol) {
                        if(this.reels[i].animation.state === 0) {  //signal to STOP!!!
                            let dist = (this.ROWS_COUNT+1)*this.ROWS_OFFSET + this.ROWS_OFFSET/3 - this[this.reels[i].completeSymbol].position.y;
                            this.reels[i].speed = dist*0.5;
                            if(this.reels[i].speed <= 1) {
                                this.reels[i].animation.state = 1;
                            }
                        } else if(this.reels[i].animation.state === 1) {
                            let dist = (this.ROWS_COUNT+1)*this.ROWS_OFFSET - this[this.reels[i].completeSymbol].position.y;
                            this.reels[i].speed = dist*0.3 - 1;
                        }
                    }
                    this.reels[i].sprite.children.forEach(symbol => { symbol.position.set(null, symbol.position.y + this.reels[i].speed*time); });
                    this.reels[i].spriteHighlight.children.forEach(symbol => { symbol.position.set(null, symbol.position.y + this.reels[i].speed*time);});

                    if(this.state === 'spinStop' && this.reels[i].completeSymbol && this.reels[i].animation.state === 1) {
                        if(this[this.reels[i].completeSymbol].position.y <= (this.ROWS_COUNT+1)*this.ROWS_OFFSET) {
                            for (let j = 0; j < this.reels[i].sprite.children.length; j++) {
                                let symbol = this.reels[i].sprite.children[j];
                                symbol.position.set(null, j * this.ROWS_OFFSET);
                                if(symbol.position.y > this.REEL_SYMBOLS_COUNT*this.ROWS_OFFSET) {
                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT*this.ROWS_OFFSET;
                                    symbol.parent.addChildAt(symbol, 0);
                                }
                            }

                            for (let j = 0; j < this.reels[i].spriteHighlight.children.length; j++) {
                                let symbol = this.reels[i].spriteHighlight.children[j];
                                symbol.position.set(null, j * this.ROWS_OFFSET);
                                if(symbol.position.y > this.REEL_SYMBOLS_COUNT*this.ROWS_OFFSET) {
                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT*this.ROWS_OFFSET;
                                    symbol.parent.addChildAt(symbol, 0);
                                }
                            }
                            this.reels[i].completed = true;
                            if(this.reels.every(item => item.completed)) this.completeSpin();
                        }
                    }
                }
            }
        },

        'Gameplay update tick 4': function(){
            //populate coin particle
        },

        'Gameplay update tick 5': function () {
            if (this.state === 'spin' || this.state === 'spinStop') {
                for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                    if (this.reels[i].completed) continue;
                    this.reels[i].sprite.children.forEach(symbol => {
                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                            symbol.parent.addChildAt(symbol, 0);
                        }
                    });
                    this.reels[i].spriteHighlight.children.forEach(symbol => {
                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                            symbol.parent.addChildAt(symbol, 0);
                        }
                    }); //*/
                }
            }//*/
        },

        'Gameplay disabled button': function(container, e) {

        },

        'Gameplay help indicator down': function(container, e) {
            this.helpPageIndex = this[container.name].step;
            this.refreshHelpIndicator();
        },

        'Gameplay pick item down': function(container, e) {
            if(this.pickState !== 'ready') return;
            SoundManager.playSound('pick_open');
            this.setActiveTouchItems(false);
            this[container.name + ' back'].visible = false;
            this[container.name + ' glow'].visible = true;
            this[container.name + ' glow'].gotoAndPlay(0);
            setTimeout(() => {
                this[container.name].visible = false;
                this.showPickOpenContainer(container.color, this.pickBookData[this.pickIndex][0], this.pickBookData[this.pickIndex][1]);
                this.pickIndex ++;
            }, 300);
        },

        'Gameplay button over': function (container, e) { this.handleButtonOver(container, e); },
        'Gameplay button out': function (container, e) { this.handleButtonOut(container, e); },
        'Gameplay button up': function (container, e) { this.handleButtonUp(container, e); },
        'Gameplay button down': function (container, e) { this.handleButtonDown(container,e); },

        'Gameplay menu button button up': function (container, e) { this.handleButtonUp(container, e); },
        'Gameplay menu button button down': function (container, e) { this.handleButtonDown(container,e); },

        'Gameplay info close down': function () {
            SoundManager.playSound('panel_menu');

            this['MainContainer'].visible = 1;
            this['ControlPanelContainer'].visible = 1;
            this.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn]}, 'overlay', () => { this['overlay'].visible = false; });
            this.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn]}, ['info container ' + this.helpPageIndex, 'info container controlls'], () => {
                this['info container ' + this.helpPageIndex].visible = false;
                this['info container controlls'].visible = false;
            });
            this.helpPageVisabilityFlag = false;
        },

        'Gameplay left arrow click': function () {
            SoundManager.playSound('panel_sound');
            if (this.helpPageIndex === 1) {
                this.helpPageIndex = 4;
                this.hideHelpPage(1);
                this.showHelpPage(this.helpPageIndex);
            } else {
                this.hideHelpPage(this.helpPageIndex);
                this.helpPageIndex--;
                this.showHelpPage(this.helpPageIndex);
            }
            this.helpArrowsSetPosition();
        },

        'Gameplay right arrow click': function () {
            SoundManager.playSound('panel_sound');
            if (this.helpPageIndex === 4) {
                this.helpPageIndex = 1;
                this.hideHelpPage(4);
                this.showHelpPage(this.helpPageIndex);
            } else {
                this.hideHelpPage(this.helpPageIndex);
                this.helpPageIndex++;
                this.showHelpPage(this.helpPageIndex);
            }
            this.helpArrowsSetPosition();
        },

        'Gameplay bonus close down': function () {
            this.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn] }, 'overlay', () => {this['overlay'].visible = false; });
            this.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn] }, 'bonus container', () => { this['bonus container'].visible = false; });
        },

        'Gameplay transaction confirmed': function (data) {
            console.log('####spin combination: ', data);
            // this.spinCombination = App.escalibur.mathForCombination(this.bet.amount, [data.reel1, data.reel2, data.reel3, data.reel4, data.reel5]);
        },

        'Gameplay account name set': function (accountName) {
            // const client = dfuseClient.createDfuseClient({ apiKey: "web_d15e7917b5e6759becdc4665bb87bafe", network: "kylin" });
            // client.streamTableRows({code: "eosio.token", scope: accountName, table: "accounts"}, (message) => {
            // 		if (message.type === dfuseClient.InboundMessageType.TABLE_DELTA) {
            //
            // 			if (message.data.dbop.new.json){
            // 				Broadcast.call("Gameplay balance update", [message.data.dbop]);
            // 			}
            //
            // 		}
            // 	}
            // ).catch((error) => {
            // 	console.log("An error occurred.", error)
            // });
        },

        'Gameplay balance update': function (data) {
            if (parseFloat(data.new.json.balance) < parseFloat(data.old.json.balance)) {
                // this['account data'].text = 'Cpu: ' + (this.accountData.cpu * 100).toFixed(2) + '%  ' + 'Net: ' + (this.accountData.net * 100).toFixed(2) + '%  ' + 'Balance: ' + data.new.json.balance + '  ' + this.accountData.name;
            }
        }
    },

    //Обычно этот метод нужен во всех играх.
    //Здесь нужно написать код который скроет правила игры (если они есть в игре и отображаются в самом начале).
    //Или сделать первое действие (которое предлагается сделать игроку) автоматически.
    //Этот метод запускается автоматически после Settings["autoplay-timeout"] задержки, которая запускается после вызова MRAID.track('Game Starts');
    autoplay: function () {
        // this.spin();
        //
        // if (this.spinButtonTween) this.spinButtonTween.stop();
        //
        // this.tween({
        // 	to: ['scale', 0.95, 100, 0, Power1.easeOut],
        // 	next: ['scale', 1, 100, 0, Power1.easeIn]
        // }, 'spin button');

        // this['spin button'].texture = this.spinButtonGreyTexture;
    },

    //Обычно этот метод нужен во всех играх.
    //Здесь нужно написать код, который заблокирует рекцию на действия игрока
    //и запустит анимации, которые скроют плавно экран Gameplay и покажут экран CTA.
    //Этот метод стоит вызывать когда игрок добился цели в игре, набрал нужное количество очков или победил врага.
    //Также этот метод вызывается автоматически после Settings["gameplay-timeout"], Settings["idle-timeout"] и в других случаях
    transferToCTA: function () {
        this.tween(['alpha', 0, 500], ['BackgroundContainer', 'MainContainer']);
        // if (!App.CallToAction.showed) App.CallToAction.show();
    },

    showIntro: function (next) {
        //Show intro animation if needed and call next
        if (next) next.call(this);
    },

    skipIntro: function (next) {
        //Hide intro animation elements if needed and call next
        if (next) next.call(this);
    },

    startGame: function () {
        MRAID.track('Game Starts');
        this.tutorialTimeout(0);
        this.state = 'ready';
    },

    logout: function () {
    },

    login: function () {
    },

    updateAccountData: function () {
    },

    spin: function () {
        this.is_win_anim = false;
        this.is_bonus = false;
        this.scatter_counter = 0;
        this.jackpot_counter = 0;
        this.serverWinType = 0;

        if (this.isfreespin && this.freespin_count !== this.freespin_index) {

        } else {
            if (this.freespin_count !== 0 && this.freespin_count === this.freespin_index) {
                // this.completeFreespin();
            }
            if (this.credits.value - this.bet.amount >= 0) {
                this.credits.value -= this.bet.amount;
                this.credits.drawed = this.credits.value;
                this.server_win_amount.value = 0;
                this.server_win_amount.drawed = 0;
                this['win bar'].drawed = 0;
                this.creditsNotInc = true;
            } else {
                this.auto_mode = false;
                this.current_auto_amount = 0;
                return;
            }
        }

        SoundManager.stopWinSound();
        SoundManager.stopAllSound();
        SoundManager.stopBackgroundMusic();
        if (this.winSound) { this.winSound.stop(); this.winSound = false; }
        if (this.state !== 'ready') return;
        this.state = 'spin';

        this.currentTweens.hideQuick();
        this.wildBackTween.hideQuick();
        this.hideWinLogo();

        var self = this;
        this.spinCombination = null;
        this.auto_mode = (this.current_auto_amount > 0);
        if(this.auto_mode === true) {
            this.setButtonEnable('maxbet button', false);
            this.setButtonEnable('autospin button', false);
            this.setButtonEnable('betperline bar', false);
            this.setButtonEnable('denom bar', false);
            this.current_auto_amount--;

            if(this.current_auto_amount === 0){
                this.auto_mode = false;
                this.setButtonEnable('maxbet button', true);
                this.setButtonEnable('autospin button', true);
                this.setButtonEnable('betperline bar', true);
                this.setButtonEnable('denom bar', true);
            }
        }
        if(this.isfreespin && ((this.freespin_count - 1) === this.freespin_index)) {
            this['spin button text1'].visible = false;
            this['spin button'].texture = this.getTexture("Spin_Button");
            this.freespinEnd = true;
        }
        this.refreshPanelValues();

        /*getServerCardsInfo(this.bet.step)*/
        $.when((this.is_local_mode?this.getFakeServerData():this.getServerCardsInfo(this.bet.step, this.isfreespin))).done((response) => {
            var serverData = response;
            if (serverData.error == "0") {
                /*if (this.isfreespin && this.freespin_count !== this.freespin_index) {
                    clearTimeout(this.tickerTimeout);
                    this.total_freespin_amount += serverData.response.winAmount;
                    this.freespin_index++;
                    this.setStatusText("BONNUSSPINS PLAYED: " + this.freespin_index + " OF " + this.freespin_count);
                } else {
                    this.isfreespin = false;
                    this.freespin_count = 0;
                    this.freespin_index = 0;
                    this.total_freespin_amount = 0;
                    //this['button more'].visible = true;
                    //this['button bet'].visible = true;
                } //*/
                this.server_connection = true;
                this.credits = {
                    value: serverData.response.balance,
                    drawed: serverData.response.balance
                };
                this.server_initMatrix = serverData.response.initCards;
                this.spinCombination = App.escalibur.mathFromServer(this.bet.amount, this.server_initMatrix, false);

                var arrRetval = serverData.response.arrRetVal;
                var newArrRetval = [];
                this.bellcolumnx = [];
                this.win_anim_mode = 0;
                this.server_win_amount.value = serverData.response.winAmount;
                for (let i = 0; i < arrRetval.length; i++) {
                    if (arrRetval[i].retType === 0) {
                        newArrRetval.push(arrRetval[i])
                    } else if (arrRetval[i].retType === 5) { //jackpot
                        this.win_anim_mode = this.win_anim_mode | this.const.RESULT_TYPE.JACKPOT;
                    } else if (arrRetval[i].retType === 6) { //bigmoney
                        this.win_anim_mode = this.win_anim_mode | this.const.RESULT_TYPE.BIGMONEY;
                    } else if (arrRetval[i].retType === 7) {
                        this.wildReelArray = arrRetval[i].wildReelAry;
                        this.freespin_count = 1;
                    } else if (arrRetval[i].retType === 4) { //In bonus case
                        var scatters = arrRetval[i];
                        if (scatters.arrMatchedCardsXPos.length > 0) {
                            var scatter_data1 = [];
                            var pay_scatter1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
                            for (let k = 0; k < scatters.arrMatchedCardsXPos.length; k++) {
                                pay_scatter1[scatters.arrMatchedCardsXPos[k]][scatters.arrMatchedCardsYPos[k]] = 1;
                            }
                            var scattername = this.spinCombination.symbols[2 -scatters.arrMatchedCardsYPos[0]][scatters.arrMatchedCardsXPos[0]];

                            scatter_data1.push(pay_scatter1); //0:pay_scatter
                            scatter_data1.push(scatters.win); //1:win
                            scatter_data1.push('Scatter'); //(scatters.name); //2:name
                            scatter_data1.push(scatters.arrMatchedCardsXPos.length);  //3:scatter symbol count!
                            this.spinCombination.winData.winScatters.push(scatter_data1);
                        }
                        if(scatters.arrMatchedCardsXPos.length > 2) {
                            this.freespin_count = scatters.pickDetail.freeSpinCount; //freeSpinCount
                            this.tempFreespinCount = 0;
                            this.total_freespin_amount = 0;
                            this.isfreespin = this.freespin_count > 0;
                            this.freespin_index = 0;
                            this.isfreespinStart = true;
                            this.spinCombination.winData.winScatters = [];
                            this.pickIndex = 0;
                            this.pickBookData = [];
                            scatters.pickCardData.forEach(item => {
                                switch (item.type) {
                                    case 'earthJackpot':
                                        this.pickBookData.push(['baseup', 'earth']);
                                        break;
                                    case 'fireJackpot':
                                        this.pickBookData.push(['baseup', 'fire']);
                                        break;
                                    case 'waterJackpot':
                                        this.pickBookData.push(['baseup', 'water']);
                                        break;
                                    case 'thunderJackpot':
                                        this.pickBookData.push(['baseup', 'thunder']);
                                        break;
                                    case 'windJackpot':
                                        this.pickBookData.push(['baseup', 'wind']);
                                        break;
                                    case 'begin':
                                        this.pickBookData.push(['begin', '10']);
                                        break;
                                    case 'remaining':
                                        this.pickBookData.push(['remaining', '5']);
                                        break;
                                }
                            });
                            this.jackpotInfo = scatters.pickDetail;
                            // this.pick_jackpot_value_list = [];
                        }
                    }
                }

                if(serverData.response.jackpotCardInfo) {
                    this.jackpotCardInfo = serverData.response.jackpotCardInfo;
                }
                this.server_arrRetVal = newArrRetval;
                if (arrRetval.length !== 0) {
                    if (arrRetval[0].retType === 0) { // In Case NORMAL
                        this.is_bonus = false;
                        this.spinCombination.winData.winLines = this.generateWinData();
                    } else if (arrRetval[0].retType === 1) {

                    } else if (arrRetval[0].retType === 2) { // In Case bonus

                    } else if (arrRetval[0].retType === 3) { // In Case Jackpot
                        this.is_bonus = true;
                        this.bonus_amount = parseInt(arrRetval[0].win);
                        this.server_win_amount.value = parseInt(arrRetval[0].win);
                    }
                }

                if(this.isfreespin && this.isfreespinStart === false) {
                    if(this.freespin_count !== this.freespin_index) {
                        this.total_freespin_amount += serverData.response.winAmount;
                        this.freespin_index ++;
                        this['freespin count text'].text = this.freespin_count - this.freespin_index;
                    }
                    if((this.freespin_count - 1) === this.freespin_index) {
                        this['spin button text1'].visible = false;
                        this['spin button'].texture = this.getTexture("Spin_Button");
                        this.freespinEnd = true;
                    }
                }

                this.serverWinType = serverData.response.winType;
            } else {
                this.server_connection = false;
            }
        });

        if (this.timeouts && this.timeouts.length > 0) { this.timeouts.forEach((timeout) => {   clearTimeout(timeout); }); }
        //if (this.paylinetimeouts && this.paylinetimeouts.length > 0) { this.paylinetimeouts.forEach((timeout) => {   clearTimeout(timeout); }); }
        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            this.timeout(() => {
                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    this.setSymbolTexture(this.reels[i].sprite.children[j].name, App.Symbols[_.random(0, App.Symbols.length - 1)].Image, 'spining');
                    this.setSymbolsBlur(this.reels[i].sprite.children[j].name, true);
                }
                this.reels[i].completed = false;
                this.reels[i].completeSymbol = null;
                this.reels[i].speed = 100;
                let stopReelInterval = setInterval(() => {
                    if (this.spinCombination) {
                        if (stopReelInterval) clearInterval(stopReelInterval);
                        this.timeout(() => {
                            if(i > 1 && this.scatter_counter === 2) {
                                if(this.isfreespin === true && this.freespin_index > 0) {
                                    this.stopReel(i);
                                } else {
                                    setTimeout(() => {
                                        SoundManager.playSound('anticipation');
                                        this['reel anticipation ' + i].visible = true;
                                        this['reel anticipation ' + i].gotoAndPlay(0);
                                        setTimeout(() => {
                                            this.stopReel(i);
                                            this[`reel anticipation ${i}`].visible = false;
                                            this[`reel anticipation ${i}`].gotoAndStop(0);
                                        }, 1000 );
                                    }, 1000 * (i - this.first_reel - 1));
                                }
                            } else {
                                this.stopReel(i);
                            }
                        }, this.REELS_STOP_TIMEOUT + i * this.REELS_STOP_DELAY);
                    }
                }, 100);
            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);
        }

        // SoundManager.playSound('reelstart');
        // SoundManager.playSound('reelspin');
        /*if(this.back_sound === null)
        {
            this.playSound('reelspin', {}, { volume: this.sound_mode ? 1 : 0, loop: true, complete:function(){
                    // self.finish_sound = true;
                } }, sound => {
                this.back_sound = sound;
            });
            // this.finish_sound = false;
        }*/
        if (!SoundManager.backgroundMusic || !SoundManager.backgroundMusic._media)
            SoundManager.playBackgroundMusic('reelspin', false);
        this.tween({set:['alpha', 1], to:['alpha', 0, 50, 500]}, 'spin button glow');
    },

    showBounupane: function (message) {
        this['bonus container'].visible = true;
        this['overlay'].visible = true;

        if (message) this['bonus text 2'].text = message;
        this.tween({  set: ['alpha', 0],  to: ['alpha', 1, 250, 100, Power1.easeOut] }, 'bonus container');
        this.tween({ set: ['alpha', 0], to: ['alpha', 0.6, 250, 100, Power1.easeOut] }, 'overlay');
    },

    stopReel: function (reel, errorStop) {
        this.reels[reel].completeSymbol = this.reels[reel].sprite.children[0].name;
        this.reels[reel].animation = { state: 0 };
        if (errorStop)  console.log("!!!stopReel-errorStop!!!");
        for (let i = 0; i < this.ROWS_COUNT; i++) {
            let highlightSprites = [];
            let imageName;
            if (errorStop) {
                imageName = App.Symbols[_.random(0, App.Symbols.length - 1)].Image;
                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, imageName, 'error');
            } else {
                imageName = this.spinCombination.symbols[i][reel];
                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, App.SymbolsNames[imageName], 'stopReel:'+reel);
                if (Object.keys(App.escalibur.Scatters).indexOf(imageName) != -1) { //scatter
                    this.scatter_counter++;
                    if(this.scatter_counter === 2) {
                        this.first_reel = reel;
                    }
                    SoundManager.playSound('drop_12_' + this.scatter_counter);
                }
                if (App.escalibur.WildSymbols.indexOf(imageName) != -1) {  //Wild
                    SoundManager.playSound('drop_0');
                }
                let imageNames = ['S06', 'S07', 'S08', 'S09', 'S10'];
                if(this.isfreespin && this.freespin_index > 0 && imageNames.indexOf(imageName) > -1) {
                    this.jackpot_counter++;
                    SoundManager.playSound(`drop_major_${this.jackpot_counter > 5 ? 5 : this.jackpot_counter}`);
                    let symbolImage = {
                        "S06": "wind",
                        "S07": "thunder",
                        "S08": "water",
                        "S09": "fire",
                        "S10": "earth",
                    };
                    let value = symbolImage[imageName];
                    this[`reel ${reel} symbol ${i} glow`].texture = this.getTexture(`jp${value}glow`);
                    let xTarget = this.getAbsolutePos(`reel ${reel} symbol ${i} glow`);
                    let yTarget = this.getAbsolutePos(`pick jackpot ${value} icon`);
                    let diffX = yTarget.x - xTarget.x;
                    let diffY = yTarget.y - xTarget.y;
                    this.glowMoveAnimation1(diffX, diffY, 500, `reel ${reel} symbol ${i} glow`);
                    setTimeout(() => {
                        this.startflashAnimation(`pick jackpot ${value} icon`);
                        this.pick_jackpot_count_list[this.jackpotList.indexOf(value)] --;
                        this.updatePickJackpotValue(false);
                    }, 500);
                }
            }
        }

        for (let i = 0; i < this.reels[reel].sprite.children.length; i++) {
            let symbol = this.reels[reel].sprite.children[i];
            this.setSymbolsBlur(symbol.name, false);
            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);
            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                symbol.parent.addChildAt(symbol, 0);
            }
        }
        for (let i = 0; i < this.reels[reel].spriteHighlight.children.length; i++) {
            let symbol = this.reels[reel].spriteHighlight.children[i];
            // this.setSymbolsBlur(symbol.name, false);
            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);
            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                symbol.parent.addChildAt(symbol, 0);
            }
        }

        SoundManager.playSound('reel_stop');
        this.state = 'spinStop';
    },

    completeSpin: function () {
        //replace drop movies  : ### GOLD SPECIAL PROC
        for (var col = 0; col < this.COLUMNS_COUNT; col++)
            for (var row = 0; row < this.ROWS_COUNT; row++) {
                imageName = this.spinCombination.symbols[row][col];
                if (Object.keys(App.escalibur.Scatters).indexOf(imageName) == -1) continue;
                this.setSymbolTexture(this.reels[col].sprite.children[row+this.ROWS_COUNT + 1].name, App.SymbolsNames[imageName], 'completeSpin');
            }
        //end of replace drop movies

        if (this.isfreespin && this.freespinEnd) {
            this.isfreespin = false;
            this.setButtonEnable('maxbet button', true);
            this.setButtonEnable('autospin button', true);
            this.setButtonEnable('betperline bar', true);
            this.setButtonEnable('denom bar', true);
            setTimeout(() => {
                this.endFreespinAnimation();
            }, 3000);
        }

        if(this.isfreespin && this.isfreespinStart === true) {
            this.tempAutoMode = this.auto_mode;
            this.tempCurrentAutoAmount = this.current_auto_amount;
            this.auto_mode = false;
            this.current_auto_amount = 0;
            setTimeout(() => {
                SoundManager.stopAllSound();
                this.isfreespinStart = false;
                this.pickContainerAnimation();
            }, 5000);
        }
        if (this.spinCombination) {
            if (!this.is_bonus) {
                if (this.spinCombination.winData.winLines.length > 0) {
                    //this.spinCombinations.push(this.spinCombination);
                    this.winSpinCombination = this.spinCombination;
                    this.state = 'ready';
                    this.is_win_anim = true;

                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.credits.drawed = this.credits.value;
                    this.refreshPanelValues();

                    if (this.win_anim_mode && this.const.RESULT_TYPE.BIGMONEY) {
                        // this.startBigMoneyAnimation();
                    }
                    if (this.win_anim_mode && this.const.RESULT_TYPE.JACKPOT) {
                        // this.startJackpotAnimation();
                    }
                    this.winAnimation();
                    this.showBigWin(this.serverWinType);
                } else if (this.spinCombination.winData.winScatters.length > 0) {
                    //this.updateTickerText();
                    //this.winFlag = false;
                    this.state = 'ready';
                    this.winAnimation();
                    /*this.history.data.push({
                        credit: this.credits.value,
                        win: 0,
                        bet: this.bet.amount,
                        spinCombination: this.spinCombination
                    });
                    this.history.pointer++; //*/

                } else {
                    //this.spinCombinations.push(0);
                    // this.animFieldPoints('win', 0);
                    this.is_win_anim = false;
                    this.state = 'ready';
                    this.credits.drawed = this.credits.value;
                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                    setTimeout(() =>{
                        if (this.state === 'ready' && this.auto_mode || (this.isfreespin === true && this.freespin_index > 0))
                            this.spin();
                    }, 500);
                }
            } else {
                // this.credits.value += parseInt(this.bonus_amount);
                // this.credits.drawed += parseInt(this.bonus_amount);
                this.state = 'ready';
                this.refreshPanelValues();

                this.showBounupane("+" + this.bonus_amount);
                SoundManager.playSound('freespin_intro');
                setTimeout(()=> {
                    this.bonusclose();
                    this.state = 'ready';
                    if(this.auto_mode || (this.isfreespin === true && this.freespin_index > 0))
                        this.spin();
                }, 3000);
            }
        } else {
            this.state = 'ready';
        }
        this.sendSignalToSite();
        SoundManager.stopCurrentSound();
    },

    endGame: function () {
        this.state = 'end';
        // this['congratulations image container'].alpha = 1;
        this['congratulations image 0'].texture = this.getTexture('end-text-' + Settings['language'] + '-0.png');
        this['congratulations image 1'].texture = this.getTexture('end-text-' + Settings['language'] + '-1.png');
        this['congratulations image 2'].texture = this.getTexture('end-text-' + Settings['language'] + '-2.png');

        this.tween({ set: [ ['scale', 0], ['alpha', 1] ], to: ['scale', 1, 500, 0, Back.easeOut.config(3)]}, 'congratulations image 0');
        this.tween({ set: [ ['scale', 0], ['alpha', 1] ], to: ['scale', 1, 500, 100, Back.easeOut.config(3)]}, 'congratulations image 1');
        this.tween({ set: [ ['scale', 0], ['alpha', 1]], to: ['scale', 1, 500, 200, Back.easeOut.config(3)] }, 'congratulations image 2');
    },

    setSymbolTexture: function (container, image, status) {
        var newImg = image;
        let name = container.replace('container ', '');
        // console.log("###setSymbolTexture:" + name + ":" + newImg + "++" + status);

        this[name + ' crisp'].texture = this[name + ' blur'].texture = this.getTexture(newImg);
        this[name + ' highlight'].removeChildren();

        if ((status.indexOf('stopReel') == -1) && (status.indexOf('completeSpin') == -1)) return;

        var movie = [];
        if (image == App.SymbolsNames['Wild']) {
            movie = App.MovieClips['SYM_SY_WLHIT_00_'];
            this.buildChild(this[name + ' highlight'], {
                name: name + ' highlight animation', type: 'movie-clip', frames: movie.frames, speed: movie.speed, loop: false });
        }
        else if (image == App.SymbolsNames['Scatter']) {
            if(!this.isfreespin)
                movie = (status.indexOf('completeSpin') != -1) ? this.scatter_counter === 1 ? App.MovieClips['SYM_SY_BOSTP_00_'] : App.MovieClips['SYM_SY_BOTRI_00_'] : App.MovieClips['SYM_SY_BOSTP_00_'];
            else
                movie = (status.indexOf('completeSpin') != -1) ? this.scatter_counter > 2 ? App.MovieClips['Ninja_2A_'] : App.MovieClips['SYM_SY_BOSTP_00_'] : App.MovieClips['Ninja_1_'];
            var highlightMovie = this.buildChild(this[name + ' highlight'], {
                name: name + ' highlight animation', type: 'movie-clip', frames: movie.frames, speed: movie.speed, loop: true
            });
            this[name + ' highlight'].visible = true; this[name + ' highlight'].alpha = 1;
            highlightMovie.gotoAndPlay(0);
        } else {
            var num = parseInt(newImg);
            if (num < 1 || num > 5) newImg = '';
            this.buildChild(this[name + ' highlight'], { name: name + ' highlight animation', type: 'sprite', image: newImg });
        }
    },

    setSymbolsBlur: function (container, state) {
        let name = container.replace('container ', '');
        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;
    },

    tweensBySprites: function (activeSprites, passiveSprites, borderSprites, highlightMovies, highlightSprites, callback) {
        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.is_win_anim == false) { callback = null; return; }

        //init active sprite tweens
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({  name: 'win-animation', to: ['alpha', 0.1, 300, 0 , Power1.easeOut], next:['alpha', 1, 300, 0 , Power1.easeOut], loop:true }, activeSprites));
            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({ name: 'win-animation', to: ['alpha', 1, 300, 0, Power1.easeOut] }, activeSprites));
            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();
            this.currentTweens.hideQuickTweens.push(this.tween({ name: 'win-animation', to: ['alpha', 1, 50]}, activeSprites));
            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }//*/

        //init passive sprite tweens
        /*passiveSprites = [this['passive overlay']];
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({ name: 'win-animation', to: ['alpha', 0, 300] }, passiveSprites));
            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({ name: 'win-animation', to: ['alpha', 0, 300] }, passiveSprites));
            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();
            this.currentTweens.hideQuickTweens.push(this.tween({name: 'win-animation', to: ['alpha', 0, 50, 0] }, passiveSprites));
            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }//*/

        //init highlightMovies tweens
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({ name: 'win-animation', set: [['visible', true], ['alpha', 1]] }, highlightMovies));
            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({ name: 'win-animation', to: [['alpha', 0, 300]], next: { set: [['visible', false], ['alpha', 1]] } }, highlightMovies));
            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();
            this.currentTweens.hideQuickTweens.push(this.tween({ name: 'win-animation', to: [['alpha', 0, 50, 0]], next: { set: [['visible', false], ['alpha', 1]] } }, highlightMovies));
            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({
                    name: 'win-animation', set: [['visible', true], ['alpha', 1], ['scale', 1]],
                    to: [['alpha', 0, 600, 0, Power1.easeOut], ['scale', 1.1, 600, 0, Power1.easeOut]],
                    //next: [['alpha', 1, 0, 0, Power1.easeIn], ['scale', 1, 0, 0, Power1.easeIn]],
                    loop: true
                },
                highlightSprites));
            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({ name: 'win-animation', to: [['alpha', 0, 300]], next: { set: [['visible', false], ['alpha', 1]] } }, highlightSprites));
            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();
            this.currentTweens.hideQuickTweens.push(this.tween({ name: 'win-animation', to: [['alpha', 0, 50, 0]], next: { set: [['visible', false], ['alpha', 1]] } }, highlightSprites));
            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }

        //init borderSprites sprite tweens
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({ name: 'win-animation', to: ['alpha', 0.1, 300, 0, Power1.easeOut], next: ['alpha', 1, 300, 0, Power1.easeOut], loop: true }, borderSprites));
            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({ name: 'win-animation', to: ['alpha', 1, 300, 0, Power1.easeOut], next:['alpha', 0, 50]}, borderSprites));
            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();
            this.currentTweens.hideQuickTweens.push(this.tween({ name: 'win-animation', to: ['alpha', 0, 50] }, borderSprites));
            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }//*/

        //show currentTweens
        if (this.state !== 'ready') return;
        this.currentTweens.show();

        let tempTimeout = null;
        if (this.state === 'ready') tempTimeout = setTimeout(() => {
            if (this.state !== 'ready') { if (tempTimeout) clearTimeout(tempTimeout);  return; }
            if (this.state === 'ready') {  this.currentTweens.hide(); }
            if (callback && (this.state === 'ready')) {
                let delay = 300 * 0.6;
                let tempTimeout2 = null;
                if (this.state === 'ready') tempTimeout2 = setTimeout(() => {
                    if (this.state !== 'ready') { if (tempTimeout2) clearTimeout(tempTimeout2); return; }
                    if (this.state === 'ready') {
                        //         this['game board symbols borders'].removeChildren();
                    }
                }, delay);
                if(this.state === 'ready') setTimeout(() => {
                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2); return;
                    }
                    callback.call(this);
                },delay+500);
            }
        }, 900);
    },

    animateLine: function (line, callback) {
        if (this.state !== 'ready' || this.is_win_anim == false) { callback = null; return; }

        this['win-logo symbol'].texture = this.getTexture(App.SymbolsNames[line[2]]);
        this['win-logo text'].text = 'wins ' + line[5] + ' on Line ' + line[4];
        this.showWinLogo();

        //clearTimeout(this.winCombinationTimeout);
        let activeSprites = [];
        let passiveSprites = [];
        let highlightMovies = [];
        let highlightSprites = [];
        let linesNums = [];
        let borderSprites = [];
        let wildCnt = 0;

        linesNums.push(line[4]);
        let spritesModel = [];
        let firstcolumn = true;
        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;
                spritesModel[i][j] = '';

                if ((line[0][j][i] !== 0) && (spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    //spritesModel[i][j] = 'active';
                    if (activeSprites.length < line[3]) {
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                        borderSprites.push(this['border-' + i + '-' + j]);
                    }

                    if ((line[1][i].name === line[2]) || (line[1][i].name === App.escalibur.WildSymbols[0]) && (spritesModel[i][j] !== 'highlight')) {
                        if (i === 0 || firstcolumn) {
                            spritesModel[i][j] = 'highlight';
                            firstcolumn = false;
                        } else if ((line[1][i - 1].name === line[2]) || (line[1][i - 1].name === App.escalibur.WildSymbols[0])) {
                            spritesModel[i][j] = 'highlight';
                        } else continue;

                        var highlightSp = this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name;//.replace('crisp', 'highlight');
                        if (this[highlightSp].children[0].type == 'movie-clip')
                            highlightMovies.push(highlightSp);
                        else
                            highlightSprites.push(highlightSp);
                        if (line[1][i].name === App.escalibur.WildSymbols[0]) wildCnt++;
                    }
                }
            }
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }
        if (this.state !== 'ready' || this.is_win_anim == false) return;
        this.tweensBySprites(activeSprites, passiveSprites, borderSprites, highlightMovies, highlightSprites, callback);
    },

    animateEachLine: function (winLines, callback) {
        if (this.state !== 'ready' || this.is_win_anim == false) {
            callback = null;
            return;
        }

        this.timeouts = [];
        for (let i = 0; i < winLines.length; i++) {
            let lineData = winLines[i];
            let lineNum = i;
            if (this.state !== 'ready' || this.is_win_anim == false) {
                callback = null;
                return;
            }

            let tempTimeout = null;
            if (this.state === 'ready') tempTimeout = setTimeout(() => {
                if (this.state !== 'ready' || this.is_win_anim == false) {
                    if (tempTimeout) clearTimeout(tempTimeout);
                    callback = null;
                    return;
                }

                if (this.state === 'ready' && this.spinCombination)
                    this.animateLine(lineData, () => {
                        if (this.spinCombination) {
                            if (this.spinCombination.winData.winLines.length - 1 === lineNum) {
                                if (this.state !== 'ready' || this.is_win_anim == false) {
                                    callback = null;
                                    return;
                                }
                                if ((callback) && (this.state === 'ready')) callback.call(this);
                            }
                        }
                    });
                if (this.state === 'ready'){
                    //this.playSound('symb' + lineData[4] + '.mp3', {}, { volume: this.sound_mode ? 1 : 0, loop: false });
                    //SoundManager.playWinSound('S01');
                }
            }, lineNum * this.DELAY_LINE_TIME);
            this.timeouts.push(tempTimeout);
        }
    },

    animateScatter: function (symbols, scatter_data, callback) {
        if (this.state !== 'ready') { callback = null; return; }
        let scatterName = scatter_data[2];
        var scatter_count = scatter_data[3];
        if(scatter_count > 0)
            SoundManager.playSound('reel_scatter_'+scatter_count);

        this['win-logo symbol'].texture = this.getTexture(App.SymbolsNames[scatterName]);
        this['win-logo text'].text = 'wins ' + scatter_data[1];
        this.showWinLogo();
        //this.drawScatterCombinationBorders(scatter_data, count);
        setTimeout(() => {
            //this.hideWinLogo();
            setTimeout(() => {
                if ((callback) && (this.state === 'ready')) callback.call(this);
            }, 500);
        }, 1500);
    },
    animateEachScatter: function (scatter_data, lineNum, callback) {
        if (this.state === 'ready' && this.spinCombination) this.animateScatter(this.spinCombination.symbols, scatter_data, () => {
            if (this.spinCombination.winData.winScatters.length > 0) {
                if (this.spinCombination.winData.winScatters.length - 1 === lineNum) { //Is Last?
                    if (this.state !== 'ready') { callback = null; return; }
                    if ((callback) && (this.state === 'ready')) callback.call(this);
                }
            }
        });
    },


    winAnimationScatters: function () {
        console.log(this.spinCombination.winData.winScatters.length);
        if (this.spinCombination.winData.winScatters.length > 0) {
            this.timeouts = [];
            for (let i = 0; i < this.spinCombination.winData.winScatters.length; i++) {
                let tempTimeout = null;
                var scatter_data = this.spinCombination.winData.winScatters;
                if (this.state === 'ready') tempTimeout = setTimeout(() => {
                    if (this.state !== 'ready') {
                        if (tempTimeout) clearTimeout(tempTimeout);  callback = null; return;
                    }
                    if (this.state !== 'ready') return;
                    if (this.state === 'ready') this.animateEachScatter(scatter_data[i], i, () => {
                        if (this.state !== 'ready') return;
                        // this.freespinAnimation();
                    });
                }, 1500 * (i));
                this.timeouts.push(tempTimeout);
            }
        } else {
            if (this.state !== 'ready') return;
            let tempTimeout = null;
            if (this.state === 'ready') tempTimeout = setTimeout(() => {
                if (this.state !== 'ready') { if (tempTimeout) clearTimeout(tempTimeout); return; }
                if (this.auto_mode || (this.isfreespin === true && this.freespin_index > 0)) {
                    this.state = 'ready';
                    this.spin();
                    if (this.spinButtonTween) this.spinButtonTween.stop();
                } else {
                    if (this.state !== 'ready') return;
                    if (this.state === 'ready') this.winAnimation();
                }
            }, 200);
        }
    },
    stopWinAnimation: function () {
        this.is_win_anim = false;
        this.currentTweens.hideQuick();
        SoundManager.stopWinSound();
    },
    winAnimation: function () {
        if (this.spinCombination.winData.winLines.length > 0) {
            if (this.state !== 'ready' || this.is_win_anim == false) {
                this.refreshPanelValues();
                return;
            }
            this.updateAccountData();
            if (this.state !== 'ready') return;
            this.animateEachLine(this.spinCombination.winData.winLines, () => {
                if (this.state !== 'ready') return;
                this.winAnimationScatters();
            });
        } else {
            // if (this.creditsNotInc) {
            //     this.credits.value += this.server_win_amount.value;
            //     this.credits.drawed = this.credits.value;
            // }
            this.winAnimationScatters();
        }
    },

    freespinAnimation: function () {
        if (this.freespin_count < 1) return;
        this['freespin info'].visible = true;
        // this['bonus container'].visible = true;
        this['overlay'].visible = true;
        SoundManager.playSound('reelstart');
        this['freespin info text 3'].text = this.freespin_count + " BONUSSPINS";
        this['freespin info text 2'].text = "During bonus all symbols pay on \n any position.";
        this.tween({ set: ['alpha', 0], to: ['alpha', 1, 250, 100, Power1.easeOut]}, 'freespin info');
        this.tween({ set: ['alpha', 0], to: ['alpha', 0.6, 250, 100, Power1.easeOut]}, 'overlay');
        var self = this;
        setTimeout(function () {
            self.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn]}, 'freespin info', () => { self['freespin info'].visible = false; });
            self.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn]}, 'overlay', ()=>{ self['overlay'].visible = false; });
            //self['button bet'].visible = false;
            //self['button more'].visible = false;
        }, 2000);
    },

    startFlashWhite: function (white = true) {
        this['FlashContainer'].visible = true;
        this.tween({
            set: [
                ['visible', 1],
                ['alpha', 0]
            ],
            to: [
                ['alpha', 1, 500]
            ],
            next: {
                to: [
                    'alpha', 0, 300
                ],
                next: {
                    set: ['visible', 0]
                }
            }
        }, white ? 'whitescreen' : 'blackscreen');
        setTimeout(() => {
            this['FlashContainer'].visible = true;
        }, 800);
    },

    pickContainerAnimation: function () {
        this.startFlashWhite(true);
        setTimeout(() => {
            this.pickVisiblityFlag = true;
            this.updatePickJackpotValue(true);
            this.tempFreespinCount = 0;
            this.updateRemainingText();
            this['PickContainer'].visible = true;
            this['jackpot container'].visible = false;
            this['pick jackpot container'].visible = true;
            for(let i = 1; i < 11; i++) {
                this[`pick item ${i}`].visible = true;
                this[`pick item ${i} back`].visible = true;
            }
            this.tween({
                set: [
                    ['visible', 1],
                    ['alpha', 0]
                ],
                to: [
                    'alpha', 1, 800
                ]
            }, 'pick item container');
            setTimeout(() => {
                this.hideLabelAnimation();
                setTimeout(() => {
                    this.setActiveTouchItems(true);
                }, 900);
            }, 4000);
        }, 500);
    },

    hideLabelAnimation: function() {
        this.tween({
            to: ['y', this['pick pickscroll text'].y+130, 300, 100, Power1.easeOut],
            next: {
                to: ['y', this['pick pickscroll text'].y-1000, 300, 100, Power1.easeOut],
            }
        }, 'pick pickscroll text');
        setTimeout(() => {
            this.tween({
                to: ['y', this['pick until text'].y+150, 300, 100, Power1.easeOut],
                next: {
                    to: ['y', this['pick until text'].y-1000, 300, 100, Power1.easeOut],
                }
            }, 'pick until text');
            this.tween({
                to: ['y', this['pick given text'].y+100, 300, 100, Power1.easeOut],
                next: {
                    to: ['y', this['pick given text'].y-1000, 300, 100, Power1.easeOut],
                }
            }, 'pick given text');
        }, 300);
    },

    endFreespinAnimation: function() {
        this.total_freespin_amount = 0;
        this.freespinEnd = false;
        let animId = 0;
        this.pick_jackpot_count_list.forEach((value, index) => {
            if(value < 0) {
                animId ++;
                setTimeout(() => {
                    this['jackpot won iconBack'].texture = this.getTexture(index + 1);
                    this['jackpot won iconbanner'].texture = this.getTexture(`jp${this.jackpotList[index]}banner`);
                    this['jackpot won value'].text = this.numberToString(Math.abs(value) * this.pick_jackpot_value_list[index]);
                    this.total_freespin_amount += Math.abs(value) * this.pick_jackpot_value_list[index];
                    this.tween({
                        set: [
                            ['visible', 1],
                            ['scale', 0.7],
                            ['alpha', 0]
                        ],
                        to: [
                            ['alpha', 1, 300],
                            ['scale', 1, 600]
                        ],
                        next: {
                            to: ['scale', 1, 600],
                            next: {
                                set: ['visible', 0],
                            }
                        }
                    }, 'jackpotWonContainer');
                }, 1200 * (animId - 1));
            }
        });
        setTimeout(() => {
            this.endcongratAnimation();
            $.when(this.getFreespinResult(this.total_freespin_amount))
                .done(response => {
                    this.credits = {
                        value: response.response.balance,
                        drawed: response.response.balance
                    };
                    this.refreshPanelValues();
                    this.sendSignalToSite();
                });
        }, 1200 * (animId - 1)+ 2000);
    },

    endcongratAnimation: function() {
        this['endfreespinwon value'].text = this.total_freespin_amount;
        this['EndFreespinWonContainer'].visible = true;
        this['Woncontainer'].visible = true;
        this['EndFreespinWonContainer'].alpha = 0.8;
        setTimeout(() => {
            this.tween({
                to: ['alpha', 0, 500],
                next: {
                    set: ['visible', 0]
                }
            }, ['EndFreespinWonContainer', 'Woncontainer']);
            this.startFlashWhite(false);
            this.setFreespinMode(false);
            this['jackpot container'].visible = true;
            this['pick jackpot container'].visible = false;
            setTimeout(() => {
                this.isfreespin = false;
                this.refreshPanelValues();
                this.auto_mode = this.tempAutoMode;
                this.current_auto_amount = this.tempCurrentAutoAmount;
                this.pick_jackpot_count_list = [18, 18, 18, 18, 18];
                this.showBigWin(this.serverWinType);
            }, 800);
        }, 5000);
    },

    setActiveTouchItems: function(active = true) {
        let pickItems = [];
        for(let i = 1; i < 11; i ++) {
            pickItems.push(`pick item ${i} touch`)
        }
        if(active) {
            this.pickState = 'ready';
            this.tween({
                set: [
                    ['visible', 1],
                    ['scale', 0.9]
                ],
                to: ['scale', 1.1, 500],
                next: {
                    to: ['scale', 0.9, 500]
                }
            }, pickItems);
            this.touchInterval = setInterval(() => {
                this.tween({
                    set: [
                        ['visible', 1],
                        ['scale', 0.9]
                    ],
                    to: ['scale', 1.1, 500],
                    next: {
                        to: ['scale', 0.9, 500]
                    }
                }, pickItems);
            }, 1000);
        } else {
            this.pickState = 'not';
            clearInterval(this.touchInterval);
            this.tween({
                set: ['visible', 0]
            }, pickItems);
        }
    },

    showPickOpenContainer: function(color, type, value) {
        this['pick open back'].texture = this.getTexture(`bonus_pick_pick${color}open`);
        switch (type) {
            case 'begin':
                this.tempFreespinCount += 10;
                break;
            case 'baseup':
                this['pick open baseup sprite'].texture = this.getTexture(`jp${value}`);
                this['pick open baseup header'].texture = this.getTexture(`jp${value}header`);
                break;
            case 'remaining':
                this.tempFreespinCount += 5;
                break;
        }
        this.tween({
            set: [
                ['visible', 1],
                ['scale', 0.4]
            ],
            to: [
                'scale', 1, 700, 100, Power1.easeOut
            ]
        }, 'pick open back');
        setTimeout(() => {
            this.tween({
                set: [
                    ['visible', 1],
                    ['alpha', 0]
                ],
                to: ['alpha', 1, 600]
            }, `pick open ${type} container`);
            if(type === 'begin'){
                this['pick open back'].texture = this.getTexture(`bonus_pick_pickgoldopen`);
                SoundManager.playSound('pick_outro');
            } else if(type === 'baseup') {
                SoundManager.playSound('pick_fsup');
            } else {
                SoundManager.playSound('pick_sound');
            }
            this.tween({
                to: [
                    'scale', 0.9, 200, 100, Power1.easeOut
                ],
                next: {
                    to: [
                        'scale', 1, 200, 100, Power1.easeOut
                    ],
                }
            }, 'pick open container');
            setTimeout(() => {
                switch (type) {
                    case 'begin':
                        this['pick item glow'].texture = this.getTexture(`jpwaterglow`);
                        let xTarget = this.getAbsolutePos('pick open begin value');
                        let yTarget = this.getAbsolutePos('pick remaining text');
                        this.glowMoveAnimation(xTarget, yTarget, 500, 'pick item glow');
                        setTimeout(() => {
                            this.updateRemainingText();
                        }, 500);
                        break;
                    case 'baseup':
                        this['pick item glow'].texture = this.getTexture(`jp${value}glow`);
                        let baseUpx = this.getAbsolutePos('pick open baseup sprite');
                        let baseUpy = this.getAbsolutePos(`pick jackpot ${value} icon`);
                        this.glowMoveAnimation(baseUpx, baseUpy, 500, 'pick item glow');
                        setTimeout(() => {
                            this.startflashAnimation(`pick jackpot ${value} icon`);
                            this.updatePickValue(value);
                            this.updatePickJackpotValue(false);
                        }, 500);
                        break;
                    case 'remaining':
                        this['pick item glow'].texture = this.getTexture(`jpwaterglow`);
                        let remainingx = this.getAbsolutePos('pick open remaining text');
                        let remainingy = this.getAbsolutePos(`pick remaining text`);
                        this.glowMoveAnimation(remainingx, remainingy, 500, 'pick item glow');
                        setTimeout(() => {
                            this.updateRemainingText();
                        }, 500);
                        break;
                }
            }, 600);
        }, 700);
        setTimeout(() => {
            if(type === 'begin') {
                this.exitPickcontainerAnimation();
                this[`pick open ${type} container`].visible = false;
                this['pick open back'].visible = false;
                this.isfreespin = true;
                // this.current_auto_amount = this.freespin_count;
                this.setButtonEnable('maxbet button', false);
                this.setButtonEnable('autospin button', false);
                this.setButtonEnable('betperline bar', false);
                this.setButtonEnable('denom bar', false);
                this['spin button text1'].visible = true;
                this['startfreespin button'].visible = false;
                this['spin button'].texture = this.getTexture("Spin_ButtonBlankUp");
                this.state = 'ready';
            } else {
                this.setActiveTouchItems(true);
                this[`pick open ${type} container`].visible = false;
                this['pick open back'].visible = false;
            }
        }, 4000);
    },

    updatePickValue: function(value) {
        let index = this.jackpotList.indexOf(value);
        this.pick_jackpot_value_list[index] += 150;
        this.pick_jackpot_count_list[index] --;
    },

    updatePickJackpotValue: function(initial = true) {
        if(initial) {
            for (let i = 0; i < 5; i++) {
                this.pick_jackpot_value_list[i] = this.jackpot_value_list[i] * this.betperlines.value;
                this[`pick jackpot ${this.jackpotList[i]} splat`].visible = true;
                this[`pick jackpot ${this.jackpotList[i]} value`].parent.visible = true;
                this[`pick jackpot ${this.jackpotList[i]} overflow value`].visible = false;
                this[`pick jackpot ${this.jackpotList[i]} value`].text = this.pick_jackpot_count_list[i];
                this[`pick jackpot ${this.jackpotList[i]} text`].text = this.pick_jackpot_value_list[i];
            }
            this.pick_jackpot_count_list = [18, 18, 18, 18, 18];
        } else {
            for (let i = 0; i < 5; i++) {
                this[`pick jackpot ${this.jackpotList[i]} text`].text = this.pick_jackpot_value_list[i];
                if(this.pick_jackpot_count_list[i] > 0) {
                    this[`pick jackpot ${this.jackpotList[i]} splat`].visible = true;
                    this[`pick jackpot ${this.jackpotList[i]} value`].parent.visible = true;
                    this[`pick jackpot ${this.jackpotList[i]} overflow value`].visible = false;
                    this[`pick jackpot ${this.jackpotList[i]} value`].text = this.pick_jackpot_count_list[i];
                } else {
                    if(this.pick_jackpot_count_list[i] === 0) {
                        this.pick_jackpot_count_list[i] = -1;
                    }
                    this[`pick jackpot ${this.jackpotList[i]} splat`].visible = false;
                    this[`pick jackpot ${this.jackpotList[i]} value`].parent.visible = false;
                    this[`pick jackpot ${this.jackpotList[i]} overflow value`].text = `x${Math.abs(this.pick_jackpot_count_list[i])}`;
                    this[`pick jackpot ${this.jackpotList[i]} overflow value`].visible = true;
                }
            }
        }
    },

    startflashAnimation: function(target) {
        this.tween({
            to: ['scale', 0.9, 250],
            next: {
                to: ['scale', 1, 250]
            }
        }, target)
    },

    updateRemainingText: function() {
        console.log(this.tempFreespinCount)
        this.tween({
            set: ['drawed', this['pick remaining text'].drawed],
            to: ['drawed', this.tempFreespinCount, 500, 100, Power1.easeIn],
            update: () => { this['pick remaining text'].text = this.numberToString(Math.trunc(this['pick remaining text'].drawed));}
        }, 'pick remaining text');
        this['freespinwon value'].text = this.freespin_count.toString();
        this['endfreespinwon count'].text = this.freespin_count.toString();
    },

    getAbsolutePos: function(target) {
        let x = 0, y = 0;
        let loop = this[target];
        while(1) {
            x += loop.x;
            y += loop.y;
            if(loop.parent === null) {
                break;
            } else {
                loop = loop.parent;
            }
        }
        return {x: x - 1920 / 2, y: y - 1080 / 2 + this[target].height / 2};
    },

    glowMoveAnimation: function(xTarget, yTarget, timeout, target) {
        let x1 = xTarget.x;
        let y1 = xTarget.y;
        let x2 = yTarget.x;
        let y2 = yTarget.y;
        this.tween({
            set: [
                ['visible', 1],
                ['x', x1],
                ['y', y1]
            ],
            to: [
                ['x', x2, timeout],
                ['y', y2, timeout]
            ],
            next: {
                set: ['visible', 0]
            }
        }, target);
    },

    glowMoveAnimation1: function(diffX, diffY, timeout, target) {
        this.tween({
            set: [
                ['visible', 1]
            ],
            to: [
                ['x', this[target].x + diffX, timeout],
                ['y', this[target].y + diffY, timeout]
            ],
            next: {
                set: [
                    ['visible', 0]
                ]
            }
        }, target);
        setTimeout(() => {
            this[target].x = this[target].x - diffX;
            this[target].y = this[target].y - diffY;
        }, timeout+50);
    },

    exitPickcontainerAnimation: function() {
        this.startFlashWhite(true);
        setTimeout(() => {
            this.pickVisiblityFlag = false;
            this['PickContainer'].visible = false;
            this['FreespinWonContainer'].visible = true;
            this['Woncontainer'].visible = true;
            this.setFreespinMode(true);
            this.tween({
                set: ['alpha', 1],
                to: ['alpha', 0.8, 1500]
            }, 'FreespinWonContainer');
            setTimeout(() => {
                this.tween({
                    to: ['alpha', 0, 500]
                }, 'FreespinWonContainer');
                setTimeout(() => {
                    this['Woncontainer'].visible = false;
                }, 500);
            }, 3000);
        }, 500);
    },

    setFreespinMode: function(freeMode = true) {
        if(freeMode) {
            this['30lines'].texture = this.getTexture("bonus30lines");
            this['background'].texture = this.getTexture('bonusBackground');
            this['reelsFrameBg'].texture = this.getTexture('bonusReels');
        } else {
            this['30lines'].texture = this.getTexture("30lines");
            this['background'].texture = this.getTexture('background');
            this['reelsFrameBg'].texture = this.getTexture('reels');
        }
        this['jackpot container'].visible = !freeMode;
        this['pick jackpot container'].visible = freeMode;
    },

    completeFreespin: function () {
        this['freespin info'].visible = true;
        // this['bonus container'].visible = true;
        // this['overlay'].visible = true;
        SoundManager.playSound('reel_stop');
        this['freespin info text 3'].text = this.total_freespin_amount;
        this['freespin info text 2'].text = "BONUSSPINS PLAYED: " + this.freespin_count;

        this.tween({ set: ['alpha', 0], to: ['alpha', 1, 250, 100, Power1.easeOut]}, 'freespin info');
        this.tween({ set: ['alpha', 0], to: ['alpha', 0.6, 250, 100, Power1.easeOut]}, 'overlay');

        var self = this;
        setTimeout(function () {
            self.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn]}, 'freespin info', () => {  self['freespin info'].visible = false; });
            self['button bet'].visible = true;
            self['button more'].visible = true;
        }, 2000);
    },

    animFieldPoints: function (fieldName, points, bAnim/*=false*/, speed/*=0*/) {
        if(bAnim === undefined) bAnim = false;
        if(speed === undefined) speed = 0;
        var targetStr = this.numberToString(points);
        if (this[fieldName + ' text'].text === targetStr) return;

        if(bAnim == false)
            this[fieldName + ' text'].text = targetStr;
        else {
            let duration = 1000;
            if(points > 10000 )      duration = 9000;
            else if(points > 5000)   duration = 6000;
            else if(points > 1000)   duration = 4000;
            else if(points > 500)    duration = 2000;
            this.tween({
                set: ['drawed', this[fieldName].drawed],
                to: ['drawed', points, duration, 100, Expo.easeOut],
                update: () => { this[fieldName + ' text'].text = this.numberToString(Math.trunc(this[fieldName].drawed));}
            }, fieldName);
        }
    },

    //Convert 12345678.12 -> 12,345,678.12  by today@qq.com
    numberToString: function (num) {
        var str = num.toString();
        var sPrefix = '', sPrefixOrg = '', sSuffix = '';
        var idxComma = str.indexOf('.');
        if (idxComma == -1) {
            sPrefixOrg = str;
        } else {
            sPrefixOrg = str.substr(0, idxComma);
            sSuffix = str.substr(idxComma);
        }
        var charCnt = 0;
        for (var i = sPrefixOrg.length - 1; i >= 0; i--) {
            sPrefix = sPrefixOrg[i] + sPrefix; charCnt++;
            if ((charCnt % 3==0) && (charCnt < sPrefixOrg.length)) sPrefix = ',' + sPrefix;
        }
        return sPrefix + sSuffix;
    },

    refreshHelpIndicator: function() {
        for(let i = 1; i < 10;i ++) {
            if(i === this.helpPageIndex) {
                this[`help indicator ${i} glow`].alpha = 1;
            } else {
                this[`help indicator ${i} glow`].alpha = 0;
            }
        }
        if(this.helpPageIndex === 1) {
            this['help left arrow button bar'].visible = false;
            this['help right arrow button bar'].visible = true;
        } else if(this.helpPageIndex === 9) {
            this['help left arrow button bar'].visible = true;
            this['help right arrow button bar'].visible = false;
        } else {
            this['help left arrow button bar'].visible = true;
            this['help right arrow button bar'].visible = true;
        }
        this['help page Content'].texture = this.getTexture(`helpPage${this.helpPageIndex}`);
    },

    showBigWin: function (type) {
        var bigWinBg = 'wins_win'; let bigWInSound = '';
        if (type == 5)      { bigWinBg = "wins_super"; bigWInSound = 'bigwin_3'; }
        else if (type == 4) { bigWinBg = "wins_big"; bigWInSound = 'bigwin_2'; }
        else if (type == 3) { bigWinBg = "wins_win"; bigWInSound = 'bigwin_1'; }
        else {
            SoundManager.playWinSound('win_1');
            return;
        }

        SoundManager.playWinSound(bigWInSound);
        this['win window'].texture = this.getTexture(bigWinBg);
        this['win container'].visible = true;

        this.emitter1 = this.buildChild(this['win window particle container'], {
            name: 'emitter1', position: [0, -100],
            type: 'emitter',
            count: 40,
            interval: 30,
            limit: 1200,
            images: App.MovieClips['WIN_EF_GILT_00_'].frames,
            particlePosition: ['rect', 1920, 200],
            particleSpeed: [0, 500],
            particleAcceleration: [0, 500],
            //particleTween:Power1.easeOut,
        });

        var delay = 2500;
        this.tween({ set: [ ['alpha', 0], ['visible', true]], to: ['alpha', 0.2, 700, 0, Power1.easeOut]}, 'overlay');
        this.tween({
            set: [['alpha', 0], ['scale', 0.7]],
            to: [['alpha', 1, 700, 0, Power1.easeOut], ['scale', 1, 700, 0, Power1.easeOut]]
        }, 'win window', () => {
            //------------ Create Win Particles
            //setTimeout(() => {
            this.emitter1.resume(); this.emitter1.emit();
            //}, 100);

            //hide after delay
            this.tween({ to: ['alpha', 0, 250, delay, Power1.easeIn] }, 'overlay', () => {
                this['overlay'].visible = false;
            });
            this.tween({ to: [['alpha', 0, 250, delay, Power1.easeIn]] }, 'win window', () => {
                this['win container'].visible = false;
                this['win window particle container'].removeChildren();
            });
        });
    },
    tutorialTimeout: function (timeout) {
        if (this.state !== 'intro') {
            clearTimeout(this.TutorialTimeout);
            this.TutorialTimeout = setTimeout(function () {
                if (Settings["tutorial"] && !App.Tutorial.showed && !App.CallToAction.showed) App.Tutorial.show();
            }, typeof timeout === "number" ? timeout : Settings["tutorial-timeout"]);
        }
    },

    hideTutorial: function () {
        clearTimeout(this.TutorialTimeout);
        if (App.Tutorial.showed) App.Tutorial.hide();
    },

    handleButtonOut: function(container, e){
        let nameGlow = container.name + ' glow';
        if (this[nameGlow].tween) this[nameGlow].tween.stop();
        this[nameGlow].tween = this.tween({ to: ['alpha', 0, 150, 0, Power1.easeOut] }, nameGlow); //*/
    },

    handleButtonOver: function(container, e){
        /*let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({ to: ['alpha', 1, 150, 0, Power1.easeOut]}, nameGlow1); //*/
    },

    handleButtonUp: function(container, e){
        this.cur_mouse_capture_container_name = "";
        let nameGlow = container.name + ' glow';
        if (this[nameGlow].tween) this[nameGlow].tween.stop();
        this[nameGlow].tween = this.tween({to: ['alpha', 0, 150, 0, Power1.easeOut]}, nameGlow);

        let name = container.name;
        switch (name) {
            case 'menu button': this.buttonHandlerMenu(container, name); break;
            case 'maxbet button': this.buttonHandlerMaxBet(container, name); break;
            case 'autospin button':  this.buttonHandlerAutoSpin(container, name);   break;
            case 'stopautospin button': this.buttonHandlerStopAutoSpin(container, name); break;
            case 'startautospin button':
            case 'spin button':
                if(this.auto_mode)
                    this.buttonHandlerStopAutoSpin(container, name);
                else
                    this.buttonHandleSpin();
                break;
            // case 'skip button':  this.buttonHandleSkip(container, name);  break;
            case 'menu button sound':  this.buttonHandlerSound(container, name);   break;
            case 'menu button turbo':   this.buttonHandlerTurbo(container, name);  break; //speed mode
            case 'menu button help':  this.buttonHandlerHelp();  break;
            // case 'menu button lobby':   this.buttonHandlerLobby(container, name);  break;
            case 'betperline bar down':   this.buttonHandleBetPerLineUpDown(false, container, name);  break;
            case 'betperline bar up': this.buttonHandleBetPerLineUpDown(true, container, name); break;
            case 'denom bar down': this.buttonHandleDenomUpDown(false, container, name); break;
            case 'denom bar up': this.buttonHandleDenomUpDown(true, container, name); break;
            case 'help left arrow button': this.helpPageIndex --; this.refreshHelpIndicator(); break;
            case 'help right arrow button': this.helpPageIndex ++; this.refreshHelpIndicator(); break;
            case 'help close button': this['HelpContainer'].visible = false; break;
            default:
                if(name.indexOf('automenu') == 0){
                    this.buttonHandleAutoItem(container, name);
                }
                else {
                }
                break;
        }
    },

    handleButtonDown: function(container, e){
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({ to: ['alpha', 1, 150, 0, Power1.easeOut]}, nameGlow1);
        this.cur_mouse_capture_container_name = container.name;
    },
//###### Special button handlers...
    buttonHandlerMaxBet:function(container, name){
        if (this.state !== 'ready' || this['maxbet button'].texture === this.getTexture("Max_ButtonDeactivate")) return;
        SoundManager.playSound('panel_max');
        this.stopWinAnimation();
        this.setBetAmountValues(this.lines.step, this.betperline_value_list.length, this.denomes.step);
    },
    buttonHandlerAutoSpin: function (container, name) {
        if (this.state !== 'ready' || this['autospin button'].texture === this.getTexture("Auto_ButtonDeactivate")) return;
        this.is_win_anim = false;
        SoundManager.playSound('panel_auto');
        this.automenu_mode = this.automenu_mode !== true;
        this['AutoMenuContainer'].visible = this.automenu_mode;
    },
    buttonHandleAutoItem: function (container, name) {
        if (this.state !== 'ready') return;
        this.is_win_anim = false;
        this.current_auto_amount = container.step;
        this['AutoMenuContainer'].visible = this.automenu_mode = false;
        this.refreshPanelValues();

        SoundManager.playSound('auto_' + container.step);
    },

    buttonHandlerMenu: function (container, name) {
        if (this.state !== 'ready') return;
        this.is_win_anim = false;
        SoundManager.playSound('panel_menu');
        if (this.menu_mode != true) {
            this.menu_mode = true;
        } else {
            this.menu_mode = false;
        }
        this['MenuContainer'].visible = this.menu_mode;
    },

    buttonHandlerStopAutoSpin: function (container, name) {
        if(this.isfreespin) {
            return;
        }
        SoundManager.playSound('panel_auto');
        this.auto_mode = false;
        this.current_auto_amount = 0;
        this.refreshPanelValues();
    },

    buttonHandleSpin: function () {
        if (this.credits.value < this.bet.amount)
            return;
        if (this.state !== 'ready') return;
        if(this.isfreespin) {
            this['spin button text1'].visible = false;
            this['startfreespin button'].visible = true;
        }
        this.spin();
    },

    buttonHandlerSound: function (container, name) {
        SoundManager.toggleSoundButton();
        if(SoundManager.sound_mode) {
            // this.back_sound.stop();
            // this.back_sound = null;
        } else {

        }
        this[name + ' off'].visible = !SoundManager.sound_mode;
        this[name + ' check'].visible = SoundManager.sound_mode;
    },
    //speed mode
    buttonHandlerTurbo: function (container, name) {
        if (this.state !== 'ready') return;
        if (!this.speed_play_mode) {
            this.speed_play_mode = true;
            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 0;
            this.REELS_START_TIMEOUT = 150;
            this.REELS_START_DELAY = 0;
            this[name + ' off'].visible = false;
            this[name + ' check'].visible = true;
            // this[name + ' check'].texture = this.getTexture('markcheck_hd');
            //SoundManager.playSound('turbo_on');
        } else {
            this.speed_play_mode = false;
            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 400;
            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 150;
            this[name + ' off'].visible = true;
            this[name + ' check'].visible = false;
            // this[name + ' check'].texture = this.getTexture('markX_hd');
            //SoundManager.playSound('turbo_off');
        }
    },

    buttonHandlerHelp: function () {
        if (this.state !== 'ready') return;
        SoundManager.playSound('panel_help');
        this['HelpContainer'].visible = true;
        this['MenuContainer'].visible = false;
    },

    setButtonEnable: function(target, enable = true) {
        let targetNames = ['maxbet button', 'autospin button', 'betperline bar', 'denom bar'];
        let activeImageName = ['Max_Button', 'Auto_Button', 'BetPerDenom_Button', 'BetPerDenom_Button'];
        for(let i = 0; i < targetNames.length; i++) {
            if(targetNames.indexOf(target) !== -1){
                if(enable) {
                    this[target].texture = this.getTexture(activeImageName[targetNames.indexOf(target)]);
                } else {
                    this[target].texture = this.getTexture(activeImageName[targetNames.indexOf(target)] + "Deactivate");
                }
            }
        }
    },

    showHelpPage: function (index) {
        this['info container ' + index].visible = true;
        this['info container ' + index].alpha = 1;
    },

    hideHelpPage: function (index) {
        this['info container ' + index].visible = false;
        this['info container ' + index].alpha = 0;
    },

    helpArrowsSetPosition: function () {
        if (this.helpPageIndex !== 1) {
            this['info container controlls left arrow'].position.set(-100, 0);
            this['info container controlls right arrow'].position.set(100, 0);
        } else {
            this['info container controlls left arrow'].position.set(this.leftArrowInitialPosition, 0);
            this['info container controlls right arrow'].position.set(this.rightArrowInitialPosition, 0);
        }
    },

    buttonHandlerLobby: function (container, name) {
        SoundManager.playSound('panel_lobby');
        if (this.state !== 'ready') return;
        this.closeGame();
        console.log("### Menu-Lobby Clicked!!!");
    },

    buttonHandleBetPerLineUpDown: function (bUp, container, name) {
        if (this.state !== 'ready' || this['betperline bar'].texture === this.getTexture("BetPerDenom_ButtonDeactivate")) return;
        this.is_win_anim = false;
        var cur_step = this.betperlines.step;
        if (bUp == true) {
            cur_step++; cur_step = Math.min(cur_step, this.betperline_value_list.length);
        }
        else {
            cur_step--; cur_step = Math.max(cur_step, 1);
        }
        this.setBetAmountValues(this.lines.step, cur_step, this.denomes.step);
        SoundManager.playSound('bet_' + cur_step);
    },
    buttonHandleDenomUpDown: function (bUp, container, name) {
        if (this.state !== 'ready' || this['denom bar'].texture === this.getTexture("BetPerDenom_ButtonDeactivate")) return;
        this.is_win_anim = false;
        var cur_step = this.denomes.step;
        if (bUp == true) {
            cur_step++;  cur_step = Math.min(cur_step, this.denom_value_list.length);
        }
        else {
            cur_step--; cur_step = Math.max(cur_step, 1);
        }
        this.setBetAmountValues(this.lines.step, this.betperlines.step, cur_step);
        SoundManager.playSound('denom_' + cur_step);
    },
    setBetAmountValues: function(line_step, betperline_step, denom_step){
        var line_value = this.line_value_list[0];
        var betperline_value = this.betperline_value_list[betperline_step -1 ];
        var denom_value = this.denom_value_list[denom_step -1 ];

        var betAmount = this.lines.value * betperline_value * denom_value;
        if (this.credits.value < betAmount)
            return false;
        this.lines.value = line_value;
        this.lines.step = 1;
        this.betperlines.value = betperline_value;
        this.betperlines.step = betperline_step;
        this.denomes.value = denom_value;
        this.denomes.step = denom_step;
        this.bet.amount = betAmount;

        this.refreshPanelValues();
        // this.refreshHelpValue();
    },

    refreshPanelValues: function() {
        if(this.credits === undefined)
            return;
        this.animFieldPoints('credits', this.credits.drawed.toString());
        this.animFieldPoints('lines bar', this.lines.value);
        this.animFieldPoints('win bar', this.server_win_amount.drawed, true);
        this.animFieldPoints('betperline bar', this.betperlines.value);
        this.animFieldPoints('denom bar', this.denomes.value);

        this['ballance text'].text = 'BALANCE: ' + this.numberToString(this.credits.drawed);
        this['betamount text'].text = 'BET: ' + this.numberToString(this.bet.amount);
        this['win text'].text = 'WIN: ' + this.numberToString(this.server_win_amount.drawed);
        for (var i = 0; i < 5; i++) {
            this.animFieldPoints('jackpot_' + i, this.jackpot_value_list[i]*this.betperlines.value);
        }

        this['autospin button text'].text = (this.current_auto_amount > 0 && !this.isfreespin) ? this.current_auto_amount.toString() : 'AUTO';

        // visible
        this['stopautospin button'].visible = this.auto_mode && !this.isfreespin;
        this['startfreespin button'].visible = this.isfreespin && this.isfreespinStart === false;
        this['startautospin button'].visible = (this.current_auto_amount > 0) && (!this.auto_mode);

        if(this.isfreespin && this.isfreespinStart === false) {
            if(this.freespin_count !== this.freespin_index) {
                this['freespin count text'].text = this.freespin_count - this.freespin_index;
            }
        }

        // enable / disable
        this['autospin button'].interactive = (!this.auto_mode);
        this['menu button'].interactive =  (!this.auto_mode);
        this['betperline bar down'].interactive = (!this.auto_mode )&& (this.state == 'ready');
        this['betperline bar up'].interactive = (!this.auto_mode) && (this.state == 'ready');
        this['denom bar down'].interactive = (!this.auto_mode) && (this.state == 'ready');
        this['denom bar up'].interactive = (!this.auto_mode) && (this.state == 'ready');

        this.tween({ to: ['position', [-110 + 110 * this.betperlines.step / this.betperline_value_list.length, 30],100] }, this['betperline bar progressMask']);
        this.tween({ to: ['position', [-110 + 110 * this.denomes.step / this.denom_value_list.length, 30],100]}, this['denom bar progressMask']);
    },

    tintTween: function (name) {
        if (!this[name]._destroyed) this.tween({
            to: ['scale', 0.9, 70, 0, Power1.easeOut],
            next: ['scale', 1, 70, 0, Power1.easeIn],
            update: () => {
                // scale 0.9 - tint 0x444444
                // scale 1   - tint 0xffffff
                if (!this[name]._destroyed) {
                    this[name].tint = getTintByScale(this[name].scale._x);
                    function getTintByScale(scale) {
                        let tintGroup = Math.round(scale * ((255 - 44) / (1 - 0.9)) + (255 - ((255 - 44) / (1 - 0.9))));
                        tintGroup = tintGroup.toString(16);
                        let tint = '0x' + tintGroup + tintGroup + tintGroup;
                        return tint;
                    }
                }
            }
        }, name);
    },

    //####### Draw ##### //
    showWinLogo:function() {
        //if(this.is_winlogo_visible) return;
        //this.is_winlogo_visible = true;
        if(this.hideWinLogo2) this.hideWinLogo2.stop(); this.hideWinLogo2 = false;
        this.showWinLogo2 = this.tween({to:[['alpha', 1, 100]]}, 'win-logo container');
    },
    hideWinLogo:function() {
        //if(!this.is_winlogo_visible) return;
        //this.is_winlogo_visible = false;
        if(this.showWinLogo2) this.showWinLogo2.stop(); this.showWinLogo2 = false;
        this.showWinLogo2 = this.tween({ to: [['alpha', 0, 200]]}, 'win-logo container');
    },
    //##################### Server ########
    interval: 0,

    freespin_count: 0,
    isfreespin: false,
    freespinEnd: false,
    freespin_index: 0,
    total_freespin_amount: 0,

    server_connection: false,
    server_initMatrix: [],
    server_arrRetVal: [],
    server_scatters: [],
    server_url: "http://localhost/pixi/cui/server.json",
    server_win_amount: { value:0, drawed:0},
    gamesession_id: 0,
    session_id: 0,
    game_id: 0,
    first_reel: 0,

    jackpotList: ['wind', 'thunder', 'water', 'fire', 'earth'],

    back_sound: null,
    finish_sound : false,
    // api_url: "https://369.games/hosting/game/",
    api_url: "http://localhost:80/game/",
    exchangeMatrix: function (matrix) {  //5x3 -> 3x5
        var return_matrix = [[], [], []];
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 3; j++) {
                return_matrix[j][i] = matrix[i][j];
            }
        }
        return return_matrix;
    },

    exchangeagain: function (matrix) {  //3x5 -> 3x5 flip Y
        var return_matrix = [[], [], []];
        for (var i = 0; i < 3; i++)
            for (var j = 0; j < 5; j++) {
                return_matrix[2 - i][j] = matrix[i][j];
            }
        return return_matrix;
    },

    getFakeServerData: function () {
        var rand = _.random(0, 3);
        var rand = this.isfreespin ? 8 : 7;
        // rand = 8;
        switch (rand) {
            case 1: //Win 2 - Q, K, Wild: Q or K will blank, Wild is movie-clip
                var response = {"error":"0","response":{"valid":1,"initCards":[[12,1,7],[0,12,2],[1,3,12],[8,9,5],[5,8,3]],"arrRetVal":[{"retType":0,"win":50,"lineposIdx":12,"cardCount":3},{"retType":0,"win":4,"lineposIdx":16,"cardCount":2},{"retType":4,"arrMatchedCardsXPos":[0,1,2],"arrMatchedCardsYPos":[0,1,2],"win":150,"pickCardData":[{"type":"earthJackpot"},{"type":"earthJackpot"},{"type":"windJackpot"},{"type":"begin"}],"pickDetail":{"freeSpinCount":10,"pickCount":4,"windJackpot":450,"windJackpotCount":17,"thunderJackpot":450,"thunderJackpotCount":18,"waterJackpot":600,"waterJackpotCount":18,"fireJackpot":750,"fireJackpotCount":18,"earthJackpot":1200,"earthJackpotCount":16}}],"arrJackpot":[300,450,600,750,900],"betAmount":30,"originalBetAmount":30,"winAmount":204,"winType":2,"balance":8688}};
                break;
            case 2: //BigWin - A, Fire, Wild: Fire's animation different with A's.
                var response = {"error":"0","response":{"initCards":[[5,9,12],[5,12,3],[5,9,4],[12,1,7],[2,3,6]],"arrRetVal":[
                            {"retType":0,"win":40,"lineposIdx":0,"cardCount":3},
                            {"retType":0,"win":1000,"lineposIdx":2,"cardCount":4}],"betAmount":50,"winAmount":1040,"balance":1500}};
                break;
            case 3: //game.mp4-0:00:51 Scatter2+Wild = Scatter3
                var response = {"error":"0","response":{"initCards":[[11,3,0],[2,3,7],[5,4,11],[12,2,6],[11,5,6]],"arrRetVal":[
                            { "retType": 2, "count": 10, "win": 150, arrMatchedCardsXPos: [2, 4], arrMatchedCardsYPos:[2,0]}],
                        "betAmount": 0.3, "winAmount": 150, "balance": 10003 }
                };
                break;
            case 5: //Wild
                var response = {"error":"0","response":{"initCards":[[12,9,5],[3,12,5],[4,9,5],[10,1,12],[3,3,8]],"arrRetVal":[
                            {"retType":0,"win":40,"lineposIdx":0,"cardCount":3},
                            {"retType":0,"win":10,"lineposIdx":1,"cardCount":4}],"betAmount":0.3,"winAmount":50,"balance":10003}};
                break;
            case 6:
                var response = {"error":"0","response":{"valid":1,"initCards":[[10,12,4],[4,12,9],[8,10,12],[11,5,1],[5,1,6]],"arrRetVal":[{"retType":0,"win":5,"lineposIdx":8,"cardCount":3}],"arrJackpot":[300,450,600,750,900],"betAmount":30,"originalBetAmount":30,"winAmount":5,"winType":0,"balance":13000}};
                break;
            case 7:
                var response = {"error":"0","response":{"valid":1,"initCards":[[12,1,7],[0,12,2],[1,3,12],[8,9,5],[5,8,3]],
                        "arrRetVal":[
                            {"retType":0,"win":25,"lineposIdx":12,"cardCount":3},
                            {"retType":0,"win":2,"lineposIdx":16,"cardCount":2},
                            {"retType":4,"arrMatchedCardsXPos":[0,1,2],
                                "arrMatchedCardsYPos":[0,1,2],"win":5,
                                "pickCardData":[
                                    {"type":"fireJackpot"},{"type":"waterJackpot"},{"type":"thunderJackpot"},{"type":"fireJackpot"},{"type":"thunderJackpot"},{"type":"fireJackpot"},{"type":"thunderJackpot"},{"type":"begin"}
                                ],
                                "pickDetail":{"freeSpinCount":10,"pickCount":8,"windJackpot":300,"windJackpotCount":18,"thunderJackpot":900,"thunderJackpotCount":15,"waterJackpot":750,"waterJackpotCount":17,"fireJackpot":1200,"fireJackpotCount":15,"earthJackpot":900,"earthJackpotCount":18}
                            }
                        ],
                        "arrJackpot":[300,450,600,750,900],
                        "betAmount":30,"originalBetAmount":30,"winAmount":32,"winType":0, "balance":13000}}
                break;
            case 8:
                var response = {"error":"0","response":{"valid":1,"initCards":[[2,7,3],[7,0,8],[11,10,5],[11,7,10],[11,4,7]],"arrRetVal":[{"retType":0,"win":2,"lineposIdx":4,"cardCount":2},{"retType":0,"win":2,"lineposIdx":14,"cardCount":2},{"retType":0,"win":2,"lineposIdx":18,"cardCount":2}],"arrJackpot":[300,450,600,750,900],"betAmount":30,"originalBetAmount":30,"winAmount":6,"winType":0,"balance":157122}};
                break;
            default: //normal
                var response = {"error":"0","response":{"initCards":[[6,1,1],[0,7,0],[6,3,6],[5,6,2],[2,5,2]],"arrRetVal":[],"betAmount":0.3,"winAmount":0,"balance":10000}};
                break;
        }
        // var response = {"error":"0","response":{"initCards":[[1,0,9],[8,5,1],[4,0,10],[1,6,1],[6,1,2]],"arrRetVal":[{"retType":3,"count":8,"win":40,"arrMatchedCardsXPos":[1,2,3],"arrMatchedCardsYPos":[0,1,0]}],"betAmount":30,"winAmount":0,"balance":1412}};
        return response;
    },
    generateWinData: function () {
        var serverData = this.server_arrRetVal;
        var changed_matrix = this.exchangeMatrix(this.server_initMatrix);
        changed_matrix = this.exchangeagain(changed_matrix);
        var return_var = [[]];
        for (var k = 0; k < serverData.length; k++) {
            var windata = [];
            var pay_line;
            var symbol_name = '';
            var card_count;
            var symbols = this.spinCombination.symbols;
            var pos_array = [];
            var linePosIdx = serverData[k].lineposIdx + 1;
            pay_line = this.spinCombination.paylines[serverData[k].lineposIdx];
            card_count = serverData[k].cardCount;
            for (var i = 0; i < this.COLUMNS_COUNT; i++) {
                for (var j = 0; j < this.ROWS_COUNT; j++) {
                    if (pay_line[j][i] === 1) {
                        pos_array.push({name: symbols[j][i], position: [j, i]});
                        if (symbol_name.length == 0 && symbols[j][i] != App.escalibur.WildSymbols[0])
                            symbol_name = symbols[j][i];
                    }
                }
            }
            if (symbol_name.length == 0) symbol_name = pos_array[0].name;

            windata.push(pay_line);  //
            windata.push(pos_array);    //poses in line
            windata.push(symbol_name);  //first symbol
            windata.push(card_count);   //count
            windata.push(linePosIdx);   //line num
            windata.push(serverData[k].win);  //line's win
            return_var[k] = windata;
        }
        return return_var;
    },

    bonusclose: function () {
        this.tween({ to: ['alpha', 0, 250, 0, Power1.easeIn]}, 'overlay', () => {  this['overlay'].visible = false; });
        this.tween({  to: ['alpha', 0, 250, 0, Power1.easeIn] }, 'bonus container', () => { this['bonus container'].visible = false; });
    },

    apiRequest: function (options) {
        if(this.is_local_mode)   return;  //by KCS
        var params = '';
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            type: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: params.substr(1),
            success: function (data) {
            },
            error: function (error) {
                console.log(error);
            }
        });
        return xhr;
    },

    getCashInfo: function () {
        var options = {
            endpoint: 'user_balance',
            params: [
                {
                    key: 'verify_code',
                    value: this.session_id
                },
                {
                    key: 'game_id',
                    value: this.game_id
                }
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.org/api/" + options.endpoint,
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            async: false,
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getTestServerData: function () {
        var options = {
            endpoint: 'zt_test'
        };
        return this.apiRequest(options);
    },

    getInitData: function () {
        var options = {
            endpoint: 'game_info',
            params: [
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            async: false,
            type: 'post',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },
    getServerCardsInfo: function (bet, isfreespin) {
        var options = {
            endpoint: 'play_game',
            params: [
                { key: 'lines',          value: this.lines.step-1 },
                { key: 'bet',            value: this.betperlines.step -1 },
                { key: 'denom',          value: this.denomes.step -1 },
                { key: 'gamespec',       value: this.gamespec },
                { key: 'isfreespin',     value: isfreespin },
                { key: 'gamesession_id', value: this.gamesession_id },
                { key: 'initbalance',    value: this.credits.value},
                { key: 'play_for_fun',   value: 0  }
            ]
        };
        if (isfreespin === true) {
            if(this.jackpotCardInfo){
                this.jackpotInfo.earthJackpotCount -= this.jackpotCardInfo.earthJackpotCount;
                this.jackpotInfo.fireJackpotCount -= this.jackpotCardInfo.fireJackpotCount;
                this.jackpotInfo.waterJackpotCount -= this.jackpotCardInfo.waterJackpotCount;
                this.jackpotInfo.thunderJackpotCount -= this.jackpotCardInfo.thunderJackpotCount;
                this.jackpotInfo.windJackpotCount -= this.jackpotCardInfo.windJackpotCount;
            }
            options.params.push({key: 'jackpotInfo', value: JSON.stringify(this.jackpotInfo)});
        }
        return this.apiRequest(options);
    },

    getFreespinResult: function(amount) {
        var options = {
            endpoint: 'freespin_result',
            params: [
                { key: 'lines',          value: this.lines.step-1 },
                { key: 'bet',            value: this.betperlines.step -1 },
                { key: 'denom',          value: this.denomes.step -1 },
                { key: 'gamespec',       value: this.gamespec },
                { key: 'gamesession_id', value: this.gamesession_id },
                { key: 'initbalance',    value: this.credits.value},
                { key: 'play_for_fun',   value: 0  },
                { key: 'bonus_amount',          value: amount },
            ]
        };
        return this.apiRequest(options);
    },
    sendSignalToSite: function () {
        var options = {
            endpoint: 'game_ping',
            params: [{
                key: 'session_id',
                value: this.gamesession_id
            }]
        };
        return this.apiRequest(options);
    },

    closeGame: function () {
        var options = {
            endpoint: 'zt_exit_game',
            params: []
        };
        return this.apiRequest(options);
    },
});
