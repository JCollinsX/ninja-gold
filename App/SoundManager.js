var SoundManager = ({
        sound_mode: true,
        toggleSoundButton: function() {
            if (this.sound_mode) {
                this.sound_mode = false;
                if (this.backgroundMusic && this.backgroundMusic._media) this.backgroundMusic.paused = true;
                if (this.winSound && this.winSound._media) this.winSound.paused = true;
                this.stopAllSound();
            } else {
                this.sound_mode = true;
                if (this.currentSound && this.currentSound._media) this.currentSound.volume = 0.5;
                if (this.winSound && this.winSound._media) this.winSound.paused = false;
                if (this.backgroundMusic && this.backgroundMusic._media) this.backgroundMusic.paused = false;
                this.playSound('panel_sound');
            }
        },

        //#### Background Music
        backgroundMusic: false,
        playBackgroundMusic: function (name, loop/*=true*/) {
            if (loop === undefined) loop = true;
            //this.stopBackgroundMusic();
            App.Gameplay.playSound(name, {}, { volume: this.sound_mode ? 0.5 : 0, loop: loop }, sound => {
                this.backgroundMusic = sound;
            });
        },
        stopBackgroundMusic:function() {
            if (this.backgroundMusic && this.backgroundMusic._media) this.backgroundMusic.stop(); this.backgroundMusic = false;
        },

        winSound: false,
        playWinSound: function (name, loop/*=false*/) {
            if (loop === undefined) loop = false;
            this.stopWinSound();
            App.Gameplay.playSound(name, {}, { volume: this.sound_mode ? 1 : 0, loop: loop }, sound => {
                this.winSound = sound;
            });
        },
        stopWinSound: function () {
            if (this.winSound && this.winSound._media) this.winSound.stop(); this.winSound = false;
        },

        //#### Effects
        soundMap: [],
        getSoundIndex: function (name) {
            for (var i = 0; i < this.soundMap.length; i++)
                if (this.soundMap[i].name === name)
                    return i;
            return -1;
        },
        playSound: function (name, volume = 1, ignorePrev) {
            var idx = this.getSoundIndex(name);
            if (!ignorePrev && idx !== -1 && this.soundMap[idx].sound && this.soundMap[idx].sound._media)
                this.soundMap[idx].sound.stop(); //.volume = 0;
            App.Gameplay.playSound(name, {}, { volume: this.sound_mode ? volume : 0, loop: false }, sound => {
                if (idx === -1)
                    this.soundMap.push({ name: name, sound: sound });
                else
                    this.soundMap[idx].sound = sound;
                this.currentSound = sound;
            });
        },
        stopSound: function (name) {
            this.stopSoundAt(this.getSoundIndex(name));
        },
        stopSoundAt: function(idx) {
            if (idx != -1 && this.soundMap[idx].sound && this.soundMap[idx].sound._media) {
                this.soundMap[idx].sound.stop(); this.soundMap[idx].sound = false;
            }
        },
        stopAllSound: function () {
            for (var i = 0; i < this.soundMap.length; i++)
                this.stopSoundAt(i);
            this.currentSound = false;
        },
        stopCurrentSound: function () {
            if (this.currentSound && this.currentSound._media) this.currentSound.stop(); this.currentSound = false;
        },
});

//var SM = new SoundManager();
