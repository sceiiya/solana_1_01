import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
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
// import { Keypair } from "@solana/web3.js";
// let splToken = require('@solana/spl-token');

// load up the first 32 bytes of the 64 byte array that was in our keyfile.json
// Only need the first 32 bytes so I use slice() just to make sure it's the correct length

// const mysk = process.env.SK_1 || []

// console.log('my', mysk)
// let firstWinPrivKey = mysk
    // .slice(0,32);
// let firstWinPrivKey = [237,158,92,107,132,192,1,57,8,20,213,108,29,227,37,8,3,105,196,244,8,221,184,199,62,253,98,131,33,165,165,215,14,7,46,23,221,242,240,226,94,79,161,31,192,163,13,25,106,53,34,215,83,124,162,156,8,97,194,180,213,179,33,68]
//     .slice(0,32);


// print the length of the array so we know it is correct
  // the fromSeed() method requires 32 bytes

//  console.log(firstWinPrivKey.length);

  // let firstWinWallet = Keypair.fromSeed(Uint8Array.from(firstWinPrivKey));
  // console.log(firstWinWallet.secretKey);
  // console.log(firstWinWallet.publicKey.toString());

















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


























//! new txn!
import * as fs from 'fs';
import * as path from 'path';
// import { Keypair, Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';

// Read the keypair from the file
const keypairPath = path.join(__dirname, 'solana-keypair.json');
const keypairData = JSON.parse(fs.readFileSync(keypairPath, 'utf-8'));

// Recreate the Keypair object from the secretKey array
const secretKey = Uint8Array.from(keypairData.secretKey);
const loadedKeypair = Keypair.fromSecretKey(secretKey);

// const connection = new Connection("devnet", "confirmed");
const connection = new Connection("http://127.0.0.1:8899", "confirmed");

const sender = loadedKeypair.publicKey;
const senderKeypair = loadedKeypair;  // This is your sender's keypair

// Ensure the recipient public key is valid
const recipient = new PublicKey(process.env.NEW_PK_1 || '7KeCpzrbf77Dh4ab3K1coiv1SFsfWzieDGh5JaU3aFTC');

console.log(`Recipient: ${recipient.toBase58()}`);
console.log(`Sender: ${sender.toBase58()}`);

let amount = 0.000004;  // The amount to send in SOL

async function txn1() {
  // Create a new transaction
  const transaction = new Transaction();
  
  // Create the transfer instruction
  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: sender,
    toPubkey: recipient,
    lamports: LAMPORTS_PER_SOL * amount,  // Amount in lamports (1 SOL = 1e9 lamports)
  });
  
  // Add the instruction to the transaction
  transaction.add(sendSolInstruction);

  // Send and confirm the transaction
  try {
    const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);
    console.log("Transaction successful with signature:", signature);
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

// Run the transaction function
// txn1();




// async function txn2 () {

//   console.log(
//     `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
//   );
   
//   const transaction = new Transaction();
   
//   const LAMPORTS_TO_SEND = 5000;
   
//   const sendSolInstruction = SystemProgram.transfer({
//     fromPubkey: sender,
//     toPubkey: recipient,
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


// }



// function txn3 (){

// // Read the keypair from the file
// const keypairPath = path.join(__dirname, 'solana-keypair.json');
// const keypairData = JSON.parse(fs.readFileSync(keypairPath, 'utf-8'));

// // Recreate the Keypair object from the secretKey array
// const secretKey = Uint8Array.from(keypairData.secretKey);
// const loadedKeypair = Keypair.fromSecretKey(secretKey);

// // Create connection to Solana cluster (in this case, devnet)
// const connection = new Connection("http://127.0.0.1:8899", "confirmed");

// // Sender public key (your wallet's public key)
// const sender = loadedKeypair.publicKey;
// const senderKeypair = loadedKeypair;

// // Example JSON data to store
// const jsonData = {
//   name: "John Doe",
//   age: 30,
//   email: "johndoe@example.com"
// };

// // Convert the JSON object to a string and then to a buffer
// const jsonString = JSON.stringify(jsonData);
// const bufferData = Buffer.from(jsonString, 'utf-8');

// // 1. Create a new account (this will be the account where data is stored)
// const createAccount = async () => {
//   // Generate a new keypair for the account where data will be stored
//   const newAccount = Keypair.generate();

//   // Calculate the minimum balance needed for the new account to be rent-exempt
//   const lamports = await connection.getMinimumBalanceForRentExemption(bufferData.length);

//   // Create the transaction to create a new account and transfer rent-exempt lamports
//   const transaction = new Transaction().add(
//     SystemProgram.createAccount({
//       fromPubkey: sender,
//       newAccountPubkey: newAccount.publicKey,
//       lamports: lamports,
//       space: bufferData.length,
//       programId: SystemProgram.programId,
//     })
//   );

//   // Sign and send the transaction
//   const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair, newAccount]);

//   console.log('Account created with signature:', signature);

//   // Store the JSON data in the account (write to account data)
//   await storeDataInAccount(newAccount.publicKey, bufferData);
// };

// // 2. Store the JSON data in the new account
// const storeDataInAccount = async (accountPubkey: PublicKey, bufferData: Buffer) => {
//   // Create the instruction to write data to the account
//   const transaction = new Transaction().add(
//     SystemProgram.write({
//       programId: SystemProgram.programId,
//       data: bufferData,
//       fromPubkey: sender,
//       toPubkey: accountPubkey,
//     })
//   );

//   // Send and confirm the transaction
//   const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);

//   console.log('Data stored in account with signature:', signature);
// };

// // Call the function to create the account and store data
// createAccount().catch(err => console.error('Error:', err));

// }

// txn3()

function tnx4() {

// Read the keypair from the file
const keypairPath = path.join(__dirname, 'solana-keypair.json');
const keypairData = JSON.parse(fs.readFileSync(keypairPath, 'utf-8'));

// Recreate the Keypair object from the secretKey array
const secretKey = Uint8Array.from(keypairData.secretKey);
const loadedKeypair = Keypair.fromSecretKey(secretKey);

// Create connection to Solana cluster (in this case, devnet)
const connection = new Connection("http://127.0.0.1:8899", "confirmed");

// Sender public key (your wallet's public key)
const sender = loadedKeypair.publicKey;
const senderKeypair = loadedKeypair;

// Example JSON data to store
const jsonData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

// Convert the JSON object to a string and then to a buffer
const jsonString = JSON.stringify(jsonData);
const bufferData = Buffer.from(jsonString, 'utf-8');

// 1. Create a new account (this will be the account where data is stored)
const createAccount = async () => {
  // Generate a new keypair for the account where data will be stored
  const newAccount = Keypair.generate();

  // Calculate the minimum balance needed for the new account to be rent-exempt
  const lamports = await connection.getMinimumBalanceForRentExemption(bufferData.length);

  // Create the transaction to create a new account and transfer rent-exempt lamports
  const transaction = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: sender,
      newAccountPubkey: newAccount.publicKey,
      lamports: lamports,
      space: bufferData.length,
      programId: SystemProgram.programId,
    })
  );

  // Sign and send the transaction
  const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair, newAccount]);

  console.log('Account created with signature:', signature);

  // Store the JSON data in the account (write to account data)
  await storeDataInAccount(newAccount.publicKey, bufferData);
};

// 2. Store the JSON data in the new account
const storeDataInAccount = async (accountPubkey: PublicKey, bufferData: Buffer) => {
  // Create the instruction to write data to the account
  const transaction = new Transaction().add(
    SystemProgram.write({
      fromPubkey: sender,
      toPubkey: accountPubkey,
      data: bufferData,
      programId: SystemProgram.programId, // using SystemProgram for data write
    })
  );

  // Send and confirm the transaction
  const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);

  console.log('Data stored in account with signature:', signature);
};

// Call the function to create the account and store data
createAccount().catch(err => console.error('Error:', err));

}

tnx4()