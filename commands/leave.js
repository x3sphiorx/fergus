const author = require('../util/author.js');
const embed = require('../util/embed.js');

leaveList = (message, args) => {
  const msg = message.client.guilds.array()
    .map(currentValue => {
      return `${currentValue.name}|${currentValue.id}|${currentValue.owner}`;
    })
    .join(', ');

  author.mention(message).send(msg);
  console.log(msg);
}

leaveGuild = (message, args) => {
  const guild = message.client.guilds.array()
    .filter(element => {
      return element.id === args[0];
    })[0];

  let msg;
  if (!guild) {
    msg = `A server with the id ${args[0]} could not be found ` +
      `or does not exist!`;
  } else {
    guild.leave();
    msg = `Successfully left ${guild}.`;
  }
  author.mention(message).send(msg);
  console.log(msg);
}

exports.run = (message, args) => {
  const isAuthor = message.author.id === author.id();
  let e;
  if (isAuthor) {
    if (!args.length) {
      e = embed.process({ description: 'Type something!', });
      message.channel.send({ embed: e, });
    } else if (args[0].startsWith('list')) {
      leaveList(message, args);
    } else {
      leaveGuild(message, args);
    }
  } else {
    e = embed.process({ title: 'Error', description: 'Access denied.', });
    message.channel.send({ embed: e, });
  }

  return isAuthor;
}
