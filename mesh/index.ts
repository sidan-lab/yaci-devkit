import { MeshTxBuilder } from "@meshsdk/core";
import dotenv from "dotenv";
import { YaciProvider } from "./YaciProvider";
dotenv.config();

const ownAddress = process.env.WALLET_ADDRESS!;
const skey = process.env.SKEY!;

const buildSimpleTx = async () => {
  const yaci = new YaciProvider();

  const mesh = new MeshTxBuilder({});

  mesh
    .txIn(
      "b1b5cbcd909bc027c0a8e41d46c463bce47562f45be63c6c38b0fcfd354b6a10",
      1,
      [{ unit: "lovelace", quantity: "1997668470" }],
      ownAddress
    )
    .txOut(ownAddress, [{ unit: "lovelace", quantity: "1000000" }])
    .changeAddress(ownAddress)
    .signingKey(skey)
    .completeSync()
    .completeSigning();

  const txHex = mesh.txHex;
  console.log(txHex);

  const txHash = await yaci.submitTx(txHex);
  console.log(txHash);
};

buildSimpleTx();
