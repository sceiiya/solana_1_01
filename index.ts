// console.log("Hello via Bun!");

import "dotenv/config"
// import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate();
// console.log(`✅ Generated keypair!`);

// console.log('raw public key is: ', keypair.publicKey)
// console.log('public key is: ', keypair.publicKey.toBase58())
// console.log('secret key is: ', keypair.secretKey)

// console.log('done!')


import { getKeypairFromEnvironment } from "@solana-developers/helpers"

const keypair = getKeypairFromEnvironment("SECRET_KEY")

console.log("p key is: ", keypair.publicKey.toBase58())
console.log("skey is: ", keypair.secretKey)
console.log("loaded the s key success!")