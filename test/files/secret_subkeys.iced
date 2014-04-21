{KeyManager} = require '../../lib/keymanager'
{bufferify,ASP} = require '../../lib/util'
{make_esc} = require 'iced-error'
util = require 'util'
{box} = require '../../lib/keybase/encode'
{Encryptor} = require 'triplesec'
{base91} = require '../../lib/basex'

#---------------------------------------------

pub = """
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - http://gpgtools.org

mI0EU1RicwEEAKldegqFSs6QnotGAD3pg5rjv1ftzFINTEbf+JkdVPhWT8NkiNne
NOWUxAtS1Pez9NpL+LUpk1AkImzFCtrgLrT+445hX9kKNN17JZeUNiR9lgujB+El
BL0h2WUYiE3Q99BuHiTRoZZzRagy0/VylwHOb2cW2IUeTN5uK+MgjHk1ABEBAAG0
IExvcmQgQnlyb24gPGxvcmQuYnlyb25Ab3guYWMudWs+iL4EEwECACgFAlNUYnMC
GwMFCRLMAwAGCwkIBwMCBhUIAgkKCwQWAgMBAh4BAheAAAoJEFFfVrvfaDdkvOwD
/iyPjFVN4g4WepZ7lYpb6qnOakUmKDBbcNYa3hxgdkjOm/jEpQcrGEDpGTGbenqP
+f6qkOd+lJIfsYn2IVcxJkFZXXGwfdzlE9d3J6hvPu83oymkKAiqNyKd1SiYPr2u
lEnzFpohJvt4O/Re8eGY37dWGUBtjno/oir3/LCT/jrjuI0EU1RicwEEAJ04fU18
TSn7P8ikQf7BiQOUYbV2oFXDE3fznIwzM5qtrrAtkxPS/B+ePf5dGogMcD1dsrvz
2NYo82p6NqKJaIXR1VQgmuAET+8oIvOqYIPx7M/LqvMcc2LAAgpRdlUfF0eYOIEg
PKBaDQ1zy0jeBlB6Ra8MzYm/ZJccgXFtGcrDABEBAAGIpQQYAQIADwUCU1RicwIb
DAUJEswDAAAKCRBRX1a732g3ZC7PA/9r0AiqjZ4/GpvE0x1W7AunmyInqUJ65I3x
twHxL77b3YvJIr1NGhJ9DeZ5bGEaeOnTX4Re7dmflbWH4Vk8VDgofWQaka/OwV0U
j2Wn+ky5ADTpBl7IpYA42en+pbQmANQ6gBZHjJUEVvfXGOGx5CE3fkLkRP6Cubfd
00NXPp5/QbiNBFNUYogBBAC8fMFFbX7dRvmfKROkvsvNs+VxKFeEjumUTtSZZAEF
EHiA90yHUH3raRvi0IFQryZGyACLO1V+G6Dw2hpFTfdFRDe9cyABgi+/CJFSIDcE
OP5MatLDfgKXRRebn/yq2KumaH3mBCVvLgP8+j32JVoXv4XxazWHA5DTGxzVNYY6
IQARAQABiQFDBBgBAgAPBQJTVGKIAhsCBQkSzAMAAKgJEFFfVrvfaDdknSAEGQEC
AAYFAlNUYogACgkQI7FF74NRBFSG4wP+IQch2GhpG2+x+QKntDm8BIb7LUbW2qUM
ffa8laIyV0mYmDVsnqpKWbPHyrp+oRoxivILdqt7z/w4gRjdilHeL0IThTGyApgb
ijrsL/4D2jsrJpNSU1xwZ/5FxN68htuQ8glqRES6P7o3+Dcx5l9mJbr05RHHRjMn
1BHR3TZzLYAcZQP/e4+4H2G6qYUe7hox1G6dpabaHLVVhpWlXace3BAWjUsllF6z
qSGrD7biTyYJq2RqrjUCt0y+UyNy+rpWvGqcvkzdax5flksQ0rOldj7S4tdIjwQv
pZjpPs9s/v/mzM8zsP3L5KdlMApDGdQq8GAyCJ41MytvG7Yp3gIMIpkECkE=
=HaQc
-----END PGP PUBLIC KEY BLOCK-----
"""

#------------

priv = """
-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - http://gpgtools.org

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
QxnUKvBgMgieNTMrbxu2Kd4CDCKZBApB
=5Yn3
-----END PGP PRIVATE KEY BLOCK-----
"""

#------------

passphrase = "adonais" 
km = null
km_priv = null

#------------

exports.load_pub = (T,cb) ->
  await KeyManager.import_from_armored_pgp { raw : pub }, defer err, km, warnings
  T.no_error err
  T.assert km?, "got a key manager back"
  cb()

#------------

exports.load_priv = (T,cb) ->
  await KeyManager.import_from_armored_pgp { raw : priv }, defer err, km_priv, warnings
  T.no_error err
  throw err if err?
  T.assert km_priv, "got a private key manager back"
  cb()

#------------

