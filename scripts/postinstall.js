const cpy = require('cpy');

const prefix = 'default-';

cpy(['lib/*'], process.env.INIT_CWD, {
  rename: (basename) => basename.slice(prefix.length),
  overwrite: false,
});
