document.getElementById("sendBtn").addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() !== "") {
    addMessage("User", userInput);
    getAIResponse(userInput);
    document.getElementById("userInput").value = "";
  }
});

document.getElementById("tipBtn").addEventListener("click", async () => {
  const tipAmount = prompt("Enter tip amount in ETH:");
  if (tipAmount && typeof window.ethereum !== "undefined") {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    const params = [
      {
        from: accounts[0],
        to: "YOUR_CONTRACT_ADDRESS",
        value: ethers.utils.parseEther(tipAmount)._hex,
      },
    ];
    try {
      await ethereum.request({ method: "eth_sendTransaction", params });
      addMessage("User", `Tipped ${tipAmount} ETH`);
      getAITipResponse();
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  } else {
    alert("Please connect your wallet first!");
  }
});

document
  .getElementById("connectWalletBtn")
  .addEventListener("click", async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await ethereum.request({ method: "eth_accounts" });
        document.getElementById(
          "walletAddress"
        ).textContent = `Connected: ${accounts[0]}`;
      } catch (error) {
        console.error("User rejected the request.");
      }
    } else {
      alert("Please install MetaMask!");
    }
  });

document.getElementById("toggleUserPanelBtn").addEventListener("click", () => {
  const userPanel = document.getElementById("rightPanel");
  const toggleBtn = document.getElementById("toggleUserPanelBtn");
  userPanel.classList.toggle("collapsed");
  toggleBtn.classList.toggle("collapsed");
});

function addMessage(sender, message) {
  const messagesDiv = document.getElementById("messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = `${sender}: ${message}`;
  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getAIResponse(userInput) {
  // Simulate AI response
  const aiResponse = `AI Bartender: You said "${userInput}". Let's talk about trading!`;
  setTimeout(() => {
    addMessage("AI Bartender", aiResponse);
  }, 1000);
}

function getAITipResponse() {
  // Simulate AI response to tip
  const aiResponse = "AI Bartender: Thank you for the tip!";
  setTimeout(() => {
    addMessage("AI Bartender", aiResponse);
  }, 1000);
}

// Simulate user list
const users = ["🤖 Vitalik", "😎 Jerry", "🎃 Ben", "😶‍🌫️ Satoshi"];
const userPanel = document.getElementById("userPanel");
users.forEach((user) => {
  const userElement = document.createElement("div");
  userElement.textContent = user;
  userPanel.appendChild(userElement);
});

// Draw AI Bartender avatar
const aiCanvas = document.getElementById("aiCanvas");
const ctx = aiCanvas.getContext("2d");
const avatar = new Image();
avatar.src = "ai-avatar.png"; // Ensure this image exists in your public folder
avatar.onload = () => {
  ctx.drawImage(avatar, 0, 0, aiCanvas.width, aiCanvas.height);
};
