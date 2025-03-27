// ! GENERATE KEYPAIR
// import { Keypair } from '@solana/web3.js';
// import * as fs from 'fs';
// import * as path from 'path';

// // Generate a new keypair
// const keypair = Keypair.generate();

// // Convert the keypair to a JSON object to save it in a file
// const keypairJSON = JSON.stringify({
//   publicKey: keypair.publicKey.toString(),
//   secretKey: Array.from(keypair.secretKey),
// });

// // Define the file path where the keypair will be saved
// const keypairPath = path.join(__dirname, 'solana-keypair.json');

// // Write the keypair to a file
// fs.writeFileSync(keypairPath, keypairJSON);

// console.log('Keypair saved to', keypairPath);



// ! SAVE AND LOAD PAIR
    import { Keypair } from '@solana/web3.js';
import * as fs from 'fs';
import * as path from 'path';

// Read the keypair from the file
const keypairPath = path.join(__dirname, 'solana-keypair.json');
const keypairData = JSON.parse(fs.readFileSync(keypairPath, 'utf-8'));

// Recreate the Keypair object from the secretKey array
const secretKey = Uint8Array.from(keypairData.secretKey);
const loadedKeypair = Keypair.fromSecretKey(secretKey);

console.log('Loaded Keypair public key:', loadedKeypair.publicKey.toString());
console.log('Loaded Keypair public key:', loadedKeypair.secretKey.length);
