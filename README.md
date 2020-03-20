PACGlobal P2P
=======

[![NPM Package](https://img.shields.io/npm/v/PACGlobal-p2p.svg?style=flat-square)](https://www.npmjs.org/package/PACGlobal-p2p)
[![Build Status](https://img.shields.io/travis/com/koentjeappel/PACGlobal-p2p.svg?branch=master&style=flat-square)](https://travis-ci.com/koentjeappel/PACGlobal-p2p)

`PACGlobal-p2p` adds pacglobal protocol support for PACGlobal.

See [the main PACGlobal-lib repo](https://github.com/koentjeappel/PACGlobal-lib) for more information.

## Getting Started

```sh
npm install PACGlobal-p2p
```
In order to connect to the pacglobal network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('PACGlobal-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/koentjeappel/PACGlobal-p2p/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/koentjeappel/PACGlobal/blob/master/LICENSE).

Copyright 2013-2017 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.  
Copyright 2016-2017 The pacglobal Foundation, Inc.  
Copyright 2017-2018 pacglobal Core Group, Inc.  
