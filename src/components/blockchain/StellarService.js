import {
  Server,
  Keypair,
  TransactionBuilder,
  Networks,
  Operation,
} from "stellar-sdk";

const server = new Server("https://horizon-testnet.stellar.org");

export const createAccount = async () => {
  const pair = Keypair.random();
  await server.friendbot(pair.publicKey()).call();
  return pair;
};

export const getBalance = async (publicKey) => {
  const account = await server.loadAccount(publicKey);
  return account.balances;
};

export const sendCurrency = async (sourceSecret, destinationPublic, amount) => {
  const sourceKeypair = Keypair.fromSecret(sourceSecret);
  const sourceAccount = await server.loadAccount(sourceKeypair.publicKey());
  const transaction = new TransactionBuilder(sourceAccount, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.payment({
        destination: destinationPublic,
        asset: Asset.native(),
        amount: String(amount),
      })
    )
    .setTimeout(30)
    .build();

  transaction.sign(sourceKeypair);
  await server.submitTransaction(transaction);
};
