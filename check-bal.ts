import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import "dotenv/config"

// const my_pubkey : string = process.env.PUBLIC_KEY || '' 
let my_pubkey: string = ''
//! change the key to make it work a fail safe
// ? just make sure that you enter `bun esrun check-bal.ts (public key)`
my_pubkey = process.env.MY_PUB_KEYa || ''


// if(!publicKey) throw new Error("There is no pubkey in here")
if (!my_pubkey) {
    console.error("There is no pubkey in here");
    const suppliedPublicKey = process.argv[2];
    my_pubkey = suppliedPublicKey
}

const publicKey = new PublicKey(my_pubkey)

const connection = new Connection("https://api.devnet.solana.com", "confirmed")

const balLamports = await connection.getBalance(publicKey)

const balinSol = balLamports / LAMPORTS_PER_SOL

console.log(`this waller ${my_pubkey} has ${balinSol} SOL tokens currently`)