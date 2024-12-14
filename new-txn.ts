import "dotenv/config"
// import { LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";

// // import "dotenv"
// const txn = new Transaction
// // const sender = process.env.PUBLIC_KEY || '';
// // const recepient = process.env.MY_PUB_KEY || '';
// const sender = "CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN" ;
// const recepient = "FtpPcmkfmDcjf4QNT3fFrFEfRC13UjqFL8fzsShK2uYh" ;
// const amount = 0.01

// const sendSolAlgo = SystemProgram.transfer({
//     fromPubkey: new PublicKey(sender),
//     toPubkey: new PublicKey(recepient),
//     lamports: LAMPORTS_PER_SOL * amount
// })

// txn.add(sendSolAlgo)





// let web3 = require('@solana/web3.js');
import { Keypair } from "@solana/web3.js";
let splToken = require('@solana/spl-token');

// load up the first 32 bytes of the 64 byte array that was in our keyfile.json
// Only need the first 32 bytes so I use slice() just to make sure it's the correct length

const mysk = process.env.SK_1 || []

console.log('my', mysk)
let firstWinPrivKey = mysk
    .slice(0,32);
// let firstWinPrivKey = [237,158,92,107,132,192,1,57,8,20,213,108,29,227,37,8,3,105,196,244,8,221,184,199,62,253,98,131,33,165,165,215,14,7,46,23,221,242,240,226,94,79,161,31,192,163,13,25,106,53,34,215,83,124,162,156,8,97,194,180,213,179,33,68]
//     .slice(0,32);


// print the length of the array so we know it is correct
  // the fromSeed() method requires 32 bytes

 console.log(firstWinPrivKey.length);

  let firstWinWallet = Keypair.fromSeed(Uint8Array.from(firstWinPrivKey));
  console.log(firstWinWallet.secretKey);
  console.log(firstWinWallet.publicKey.toString());

















// console.log(
//     `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
//   );
   
//   const transaction = new Transaction();
   
//   const LAMPORTS_TO_SEND = 5000;
   
//   const sendSolInstruction = SystemProgram.transfer({
//     fromPubkey: senderKeypair.publicKey,
//     toPubkey,
//     lamports: LAMPORTS_TO_SEND,
//   });
   
//   transaction.add(sendSolInstruction);
   
//   const signature = await sendAndConfirmTransaction(connection, transaction, [
//     senderKeypair,
//   ]);
   
//   console.log(
//     `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,
//   );
  
//   console.log(`Transaction signature is ${signature}!`);