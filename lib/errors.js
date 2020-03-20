'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on PACGlobal-p2p Module {0}'
};

module.exports = require('PACGlobal-lib').errors.extend(spec);
