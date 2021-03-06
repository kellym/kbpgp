
{parse} = require '../src/openpgp/parser'
armor = require '../src/openpgp/armor'
fs = require 'fs'
C = require '../src/const'
{KeyBlock} = require '../src/openpgp/processor'
util = require 'util'
{ASP} = require '../src/util'
{KeyManager} = require '../src/keymanager'
{import_key_pgp} = require '../src/symmetric'
{decrypt} = require '../src/openpgp/ocfb'

msg = """-----BEGIN PGP MESSAGE-----
Version: GnuPG/MacGPG2 v2.0.20 (Darwin)
Comment: GPGTools - http://gpgtools.org

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
WYxrooYFv+qVvVMS
=euQN
-----END PGP MESSAGE-----"""

[err,msg] = armor.decode msg
throw err if err
switch msg.type
  when C.openpgp.message_types.public_key then console.log "Got a public key..."
  when C.openpgp.message_types.private_key then console.log "Got a private key..."
  when C.openpgp.message_types.generic then console.log "Got a generic"
  else throw new Error "unknown msg typ: #{msg.type}"
[err, packets] = parse msg.body
throw err if err
console.log util.inspect packets, { depth : null }

armored_key = """-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: GnuPG/MacGPG2 v2.0.20 (Darwin)
Comment: GPGTools - http://gpgtools.org

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
ObMKV7f7yqGEQNpyrXlHl4qGSzkvgxQ6IzTA1g==
=DRiu
-----END PGP PRIVATE KEY BLOCK-----"""

armored_verify_key = """-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - http://gpgtools.org

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
nMd8vYZjDx7ro+5buf2cPmeiYlJdKQ==
=UGvW
-----END PGP PUBLIC KEY BLOCK-----
"""

passphrase = "catsdogs"

asp = new ASP {}
await KeyManager.import_from_armored_pgp { raw : armored_key, asp }, defer err, km
throw err if err?
await km.unlock_pgp { passphrase }, defer err
throw err if err?
await KeyManager.import_from_armored_pgp { raw : armored_verify_key, asp }, defer err, vkm
throw err if err?
km = km.find_pgp_key packets[0].key_id
console.log km
console.log packets[0].ekey.y.toString(16)
await km.key.decrypt_and_unpad packets[0].ekey.y, defer err, key
throw err if err?
cipher = import_key_pgp key
pt = decrypt { cipher, ciphertext : packets[1].ciphertext }
console.log util.inspect pt, { depth : null }
console.log pt.length
[err, packets] = parse pt
throw err if err?
console.log packets
await packets[0].inflate defer err, res
throw err if err?
[err, packets] = parse res
throw err if err?
console.log util.inspect packets, { depth : null }
console.log packets[1].toString()
vk = vkm.find_pgp_key packets[0].key_id
throw new Error "couldn't find vkey!" unless vk?
packets[2].key = vk.key
await packets[2].verify [ packets[1] ], defer err
throw err if err?
process.exit 0
