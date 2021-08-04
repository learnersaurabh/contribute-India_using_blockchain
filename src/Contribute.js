import { useState, useEffect } from "react";
import { createContract } from "./etherium/contributeContract";
import { web3 } from "./etherium/web3";

const Contribute = () => {
  const [bal, setBal] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [collectedAmount, setCollectedAmount] = useState(0);
  const [hasFinished, setHasFinished] = useState(true);

  const contract = createContract();

  useEffect(async () => {
    try {
      setCollectedAmount(await contract.methods.getContractBalance().call());
      setTargetAmount(await contract.methods.getTargetAmount().call());
      setHasFinished(await contract.methods.getHasFinished().call());
    } catch (error) {
      alert("Error occured in fetching the data!");
    }
  }, []);

  async function sendFund(e) {
    e.preventDefault();
    if (bal > 0) {
      const accounts = await web3.eth.getAccounts();
      // console.log(accounts);
      //IF YOU ARE GETTING ACCOUNTS FROM METAMASK, JUST UN-COMMENT THE BELOW CODE FOR ONCE AND RUN AND AGAIN COMMENT IT WHEN IT STARTS WORKING.
      // window.ethereum.enable();
      // let userAccount = null;
      // web3.eth.getAccounts(async function(error, accounts) {
      //   if (error == null && accounts.length > 0) {
      //     userAccount = accounts[0];
      //     }
      // });
      // web3.eth.defaultAccount = userAccount;

      try {
        await contract.methods.pay().send({
          from: accounts[0],
          value: bal,
        });
      } catch (error) {
        alert("Error occured in sending fund!");
      }

      setBal(0);
    } else {
      alert("Enter Valid Balance In Wei");
    }
  }

  if (hasFinished) {
    return (
      <div className="appeal">
        <h2 className="appeal_heading">Congratulations! We did it.</h2>
        <p className="appeal_desc">
          We have collected the target amount. Contribution window is closed
          now!
        </p>
      </div>
    );
  } else {
    return (
      <div className="appeal">
        <div className="appeal_desc">
          <h3>Target Amount: <span className="amount_span">{targetAmount}</span> wei</h3>
        </div>
        <div className="appeal_desc">
          <h3> Total contribution till now <span className="amount_span">{collectedAmount}</span> wei.</h3>
        </div>
        <form>
          <input
            type="number"
            id="ether_bal"
            min="0"
            value={bal}
            onChange={(event) => setBal(event.target.value)}
          />
        </form>
          <button id="btn_send" onClick={sendFund}>CONTRIBUTE</button>
      </div>
    );
  }
};

export default Contribute;
