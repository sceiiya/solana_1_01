// import { Connection, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));

// console.log(connection)
// console.log(`✅ Connected!`);



//! second

// import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));
// // ? this is from the docs
// // const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");

// // ? this is the one i created
// const address = new PublicKey("FtpPcmkfmDcjf4QNT3fFrFEfRC13UjqFL8fzsShK2uYh");
// const balance = await connection.getBalance(address);

// console.log(`The balance of the account at ${address} is ${balance} lamports`);
// console.log(`✅ Finished!`);


// ! third


import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

// ? this is from the document
  const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN"); 
  // console.log('add iz', address)
// ? this is the one i created
// const address = new PublicKey("FtpPcmkfmDcjf4QNT3fFrFEfRC13UjqFL8fzsShK2uYh");

const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
console.log(`✅ Finished!`);