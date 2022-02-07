async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//Contract deployed to address: 0xDaAde02e2F147555C5B2dF5ABd0A87519b92e88f
// The hash of your transaction is:  0x6fdfce2b104df414d809f361757018b8598a3c25d49c855f362cb1d30cce7d71
