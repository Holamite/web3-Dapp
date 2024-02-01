import logo from "./logo.svg";
import "./App.css";
import { ethers } from "ethers";
import contractABI from "./abi.json";
function App() {
  const contractAddress = "0x934932752EDDeb6150e412E04D747bd974164A7d";

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function setMessage() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.setMessage("Just they play");
        await transaction.wait();
        console.log("Message Set");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function getMessage() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.getMessage();
        // await transaction.wait();
        console.log("Message Retrieved");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getMessage}>Get Messages</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={setMessage}>Set Message</button>

        <h1></h1>
      </header>
    </div>
  );
}

export default App;
