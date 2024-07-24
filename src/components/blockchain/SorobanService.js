import { Contract } from "soroban-client";

const server = new Server("https://horizon-testnet.stellar.org");
const contract = new Contract(server, {
  source: "path/to/smart_contract.wasm",
});

export const deployContract = async () => {
  await contract.deploy();
};

export const plantTree = async (to, amount) => {
  await contract.call("plantTree", { to, amount });
};
