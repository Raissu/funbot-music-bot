const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, Widget } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
        .setAuthor({ name: 'Solicitado por: ' + track.requestedBy.tag, iconURL: track.requestedBy.avatarURL() })
        .setTitle(' **Reprodução iniciada!** ')
        .setDescription(`Musica atual: ** [${track.title}](${track.url}) **\n \`00:00 | ${track.duration}\``)
        .setColor('#13f857')
        .setFooter({
            iconURL: 'https://i.imgur.com/46mMxqX.jpeg',
            text: `Tocando no canal: ${queue.connection.channel.name}`
        })
        .setImage(track.thumbnail)

    const back = new ButtonBuilder()
        .setLabel('Back')
        .setCustomId(JSON.stringify({ ffb: 'back' }))
        .setStyle('Primary')

    const skip = new ButtonBuilder()
        .setLabel('Skip')
        .setCustomId(JSON.stringify({ ffb: 'skip' }))
        .setStyle('Primary')

    const resumepause = new ButtonBuilder()
        .setLabel('Resume & Pause')
        .setCustomId(JSON.stringify({ ffb: 'resume&pause' }))
        .setStyle('Danger')

    const loop = new ButtonBuilder()
        .setLabel('Loop')
        .setCustomId(JSON.stringify({ ffb: 'loop' }))
        .setStyle('Secondary')

    const queuebutton = new ButtonBuilder()
        .setLabel('Queue')
        .setCustomId(JSON.stringify({ ffb: 'queue' }))
        .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`\`Track ${track.title} added in the queue ✅\``);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send(`teste`);
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nobody is in the voice channel, leaving the voice channel... ❌');
});

player.on('queueEnd', (queue) => {
    const embed = new EmbedBuilder()
        .setTitle('<:greg_olho1:1034961047360127078> Queue complete!')
        .setDescription('I finished reading the whole queue ✅')
        .setColor('13f857')

    queue.metadata.send({ embeds: [embed] });
});

player.on('tracksAdd', (queue) => {
    queue.metadata.send(`All the songs in playlist added into the queue ✅`);
});