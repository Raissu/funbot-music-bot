module.exports = {
    app: {
        token: 'MTAzMDc2Mzk3MDE0OTIyNDQ1OQ.GOR58G.AUbUl49zG0Lo8nw6CbICqmabDavWjKuLdMNcco',
        playing: '@raysson.js | Tocando musica!',
        global: true,
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
