import { web3 } from "./web3";
import contributeAbi from "./contributeAbi";

const contractAddress = "0x7D4959588FCD720c5fF3D5E35d0e0ceC279A9100";

export function createContract() {
    return new web3.eth.Contract(contributeAbi, contractAddress);
}