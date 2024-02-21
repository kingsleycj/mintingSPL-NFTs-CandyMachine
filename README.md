

# Minting of SPL Tokens and then; NFTs using Metaplex Candy Machine

In this project, we bring together our learning to create a Candy Machine UI for the Candy Machine NFT Contract deployed and minted on Solana. The twist? Users will pay in a custom SPL token to mint NFTs.

## Overview

To accomplish this assignment, we'll go through the following steps:

1. **Create an SPL Token**: Utilize lessons learned or use a previously created SPL token.
2. **Update Config**: Adjust `config.json` to use the SPL token's address.
3. **Create Candy Machine UI**: Follow the tutorial in [Quick Node: Set Up a Minting Site](https://www.quicknode.com/guides/solana-development/nfts/how-to-deploy-an-nft-collection-on-solana-using-sugar-candy-machine) to set up the UI.
4. **Fix Start Script**: Change the start script in `package.json` to prevent an `ERR_OSSL_EVP_UNSUPPORTED` error.
    ```json
    "start": "export SET NODE_OPTIONS=--openssl-legacy-provider && craco start"
    ```
5. **Run the UI**: Ensure users can mint NFTs by paying with the custom SPL token.

## Worthy Notes

For the `config.json` file:
- The `splToken` = mint token address
- The `splTokenAccount` = The token address that will recieve the minted token and holds its quantity amount
- The `creator.address` = The owner's address

## Step-by-Step Guide

### 1. Create an SPL Token

Create a new SPL token or utilize an existing one.

### 2. Update Config

In `config.json`, modify the `splTokenAddress` to reflect the address of the SPL token created in Step 1.

### 3. Create Candy Machine UI

Follow the tutorial [here](https://www.quicknode.com/guides/solana-development/nfts/how-to-deploy-an-nft-collection-on-solana-using-sugar-candy-machine) to create a UI for the Candy Machine. Note the adjustment required for the start script.

### 4. Fix Start Script

Change the start script in `package.json` as mentioned above to avoid `ERR_OSSL_EVP_UNSUPPORTED` error during UI startup.

### 5. Run the UI

Ensure the Candy Machine UI is running smoothly, and users can mint NFTs by paying with the custom SPL token.

## Additional Notes

- Test thoroughly by transferring or minting the SPL token to a Phantom account and attempting to mint NFTs on the website.
- Consider adjusting the mint function in the SPL project to mint to your Phantom address or modifying the transfer function to transfer to your Phantom wallet.


Let's make this candy machine project a success! 🍬🚀