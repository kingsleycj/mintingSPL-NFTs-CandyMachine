import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';

(async () => {
// Step 1: Connect to cluster and generate two new Keypairs
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

const walletA = new Uint8Array(
    [108,215,6,195,116,133,139,5,81,21,251,2,6,202,58,119,222,43,81,227,95,168,110,253,103,53,235,36,190,51,73,38,52,99,89,188,187,154,108,211,224,55,93,225,118,93,135,1,105,114,237,227,155,149,140,184,13,216,102,164,136,26,9,32]           
  );

  var fromWallet = Keypair.fromSecretKey(walletA);
    

// Step 2: Airdrop SOL into your from wallet
const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);
// Wait for airdrop confirmation
await connection.confirmTransaction(fromAirdropSignature, { commitment: "confirmed" });

    
// Step 3: Create new token mint and get the token account of the fromWallet address
//If the token account does not exist, create it
const mint = new PublicKey("854cgGfqzMqG1zRds7SdsKabhM2JbZjsCSCFQmPT1aUW"); // already existing token

// const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);
const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        fromWallet.publicKey
)

    
//Step 4: Mint a new token to the from account
let signature = await mintTo(
	connection,
	fromWallet,
	mint,
	fromTokenAccount.address,
	fromWallet.publicKey,
	1000000000,
	[]
);
console.log('mint tx:', signature);
    
//Step 5: Get the token account of the to-wallet address and if it does not exist, create it
const demoReciever = new PublicKey("Ay9GFRimf2zUyaEN5QBc5jZGCUzt6uGPgwA8GmcqYAGb");
const toTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
	fromWallet,
	mint,
	demoReciever
);

signature = await mintTo(
   connection,
   fromWallet,
   mint,
   toTokenAccount.address,
   fromWallet.publicKey,
   1000000000,
   []
);

console.log('transfer tx:', signature);

})();