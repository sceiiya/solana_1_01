import { LAMPORTS_PER_SOL, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";

// const txn = new Transaction

// const sendSolAlgo = SystemProgram.transfer({
//     fromPubkey: sender,
//     toPubkey: recepient,
//     lamports: LAMPORTS_PER_SOL * amount
// })

// txn.add(sendSolAlgo)




console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
  );
   
  const transaction = new Transaction();
   
  const LAMPORTS_TO_SEND = 5000;
   
  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });
   
  transaction.add(sendSolInstruction);
   
  const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
  ]);
   
  console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,
  );
  
  console.log(`Transaction signature is ${signature}!`);