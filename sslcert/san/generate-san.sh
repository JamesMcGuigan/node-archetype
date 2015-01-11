#!/bin/bash -x
# @link http://techbrahmana.blogspot.co.uk/2013/10/creating-wildcard-self-signed.html

# NOTE: Copies of node-archetype.san.key/node-archetype.san.crt have been copied to /puppet/modules/sslcerts/files

cd    "$(dirname "$0")"

# Set Params
Country=GB
State=London
City=London
Organization="Crystalline Technologies"
Section=""
FQDN=node-archetype
Email=james.mcguigan@gmail.com


## Generate Private Key
openssl genrsa -des3 -passout pass:foobar -out node-archetype.san.key.password 2048

##  Convert the private key to an unencrypted format
openssl rsa -passin pass:foobar -in node-archetype.san.key.password -out node-archetype.san.key

##  Create the certificate signing request
openssl req -new -key node-archetype.san.key -out node-archetype.san.csr <<EOF
$Country
$State
$City
$Organization
$Section
$FQDN
$Email
.
.
EOF

## Sign the certificate with extensions
openssl x509 -req -extensions v3_req -days 365 -in node-archetype.san.csr -signkey node-archetype.san.key -out node-archetype.san.crt -extfile node-archetype.san.conf
#    -CA ../rootCA/node-archetype.rootCA.crt -CAkey ../rootCA/node-archetype.rootCA.key -CAcreateserial

#
#openssl genrsa             -out node-archetype.san.key 2048
#openssl req    -new -nodes -out node-archetype.san.csr -config node-archetype.san.conf
#openssl x509   -req -CA ../rootCA/node-archetype.rootCA.pem -CAkey ../rootCA/node-archetype.rootCA.key -CAcreateserial -in node-archetype.san.csr -out node-archetype.san.crt -days 3650
##end

exit 0