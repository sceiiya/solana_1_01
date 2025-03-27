import { WalletAdapter } from '@solana/wallet-adapter';
import { Connection } from '@solana/web3.js';

const wallet = new WalletAdapter();
wallet.connect(new Connection('https://api.devnet.solana.com'));

// Now you can use the wallet to send transactions and interact with the Solana network

