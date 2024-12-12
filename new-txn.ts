import { LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";

// import "dotenv"
const txn = new Transaction
// const sender = process.env.PUBLIC_KEY || '';
// const recepient = process.env.MY_PUB_KEY || '';
const sender = "CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN" ;
const recepient = "FtpPcmkfmDcjf4QNT3fFrFEfRC13UjqFL8fzsShK2uYh" ;
const amount = 0.01

const sendSolAlgo = SystemProgram.transfer({
    fromPubkey: new PublicKey(sender),
    toPubkey: new PublicKey(recepient),
    lamports: LAMPORTS_PER_SOL * amount
})

txn.add(sendSolAlgo)



















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