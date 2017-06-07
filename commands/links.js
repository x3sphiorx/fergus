const embed = require('../util/embed.js');

exports.run = (message, args) => {
  const names = [
    'Tier Lists',
    'Champions',
    'Manacar',
    'Fortress of Souls',
    'Legend of Primal Flames',
    'Monuments',
    'Miscellaneous',
    `Beginner's Guide Comics`,
  ];
  const values = [
    `[Accurina's](https://goo.gl/bBgMTg), ` +
      `[IRC's](https://goo.gl/oNQ2iF)\n` +
      `[TISTORY](https://goo.gl/nOC3NK), ` +
      `[INVEN](https://goo.gl/k5PlhB)`,
    `[Vyrlokar's](https://goo.gl/M37qRm)`,
    `[kamakiller's](https://goo.gl/PbpKdG)\n` +
      `[Comic](https://goo.gl/aJ8Yoy)`,
    `[Unlock Lionel's Skin](https://goo.gl/9BXBkD)`,
    `[Nyaa's](https://goo.gl/iqppI0), ` +
      `[Shintouyu's](https://goo.gl/4i8nCb)\n` +
      `[LoPF Map](https://goo.gl/YtlDQH)\n` +
      `[Unlock Himiko's Skin](https://goo.gl/5yDbjr)`,
    `[How To Get](https://goo.gl/e10jeA)`,
    `[Hero Illustrations](https://goo.gl/06hnsT)\n` +
      `[CQ Assets](https://goo.gl/VAXQMg)`,
    `[Berry System](https://goo.gl/jbgmLa), ` +
      `[Vol. 1](https://goo.gl/JpOluL), ` +
      `[Vol. 2](https://goo.gl/VH83O2), ` +
      `[Vol. 3](https://goo.gl/OEKdP6), ` +
      `[Vol. 4](https://goo.gl/T1d729), ` +
      `[Vol. 5](https://goo.gl/EikwMq), ` +
      `[Vol. 6](https://goo.gl/rkXgXC), ` +
      `[Vol. 7](https://goo.gl/fsTsgl), ` +
      `[Vol. 8](https://goo.gl/1dDcVR)`,
  ];
  const inlines = [true, true, true, true, true, true, true, false,];

  const e = embed.process({
    title: 'Guides',
    fields: embed.fields(names, values, inlines),
  });

  message.channel.send({ embed: e, });
}
