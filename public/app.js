document.getElementById("sendBtn").addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() !== "") {
    addMessage("User", userInput);
    getAIResponse(userInput);
    document.getElementById("userInput").value = "";
  }
});

document.getElementById("tipBtn").addEventListener("click", () => {
  addMessage("User", "Here's a tip for you!");
  getAITipResponse();
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
