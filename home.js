// ===============================
// STRIV POINTS
// ===============================
const STRIV_POINTS = 6969;

// Wait for page
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Sync Points
    // ===============================
    const pointsValue = document.getElementById("pointsValue");
    const lbScore = document.getElementById("lbScore");

    if (pointsValue) pointsValue.textContent = STRIV_POINTS;
    if (lbScore) lbScore.textContent = STRIV_POINTS + " pts";

    // ===============================
    // Animated Streak Counter
    // ===============================
    const streakTarget = 7;
    let streak = 0;
    const streakDisplay = document.getElementById("streakCount");

    function animateStreak() {
        const interval = setInterval(() => {
            streak++;
            streakDisplay.textContent = streak;
            if (streak >= streakTarget) clearInterval(interval);
        }, 120);
    }
    animateStreak();

    // ===============================
    // Leaderboard Popup
    // ===============================
    const leaderboardBtn = document.getElementById("leaderboardBtn");
    const leaderboardPopup = document.getElementById("leaderboardPopup");
    const closeLeaderboardBtn = document.getElementById("closeLeaderboardBtn");

    leaderboardBtn.addEventListener("click", () => {
        leaderboardPopup.classList.remove("hidden");
    });

    closeLeaderboardBtn.addEventListener("click", () => {
        leaderboardPopup.classList.add("hidden");
    });

    // ===============================
    // Forums Popup
    // ===============================
    const forumsBtn = document.getElementById("forumsBtn");
    const forumPopup = document.getElementById("forumPopup");
    const closeForumBtn = document.getElementById("closeForumBtn");

    forumsBtn.addEventListener("click", () => {
        forumPopup.classList.remove("hidden");
    });

    closeForumBtn.addEventListener("click", () => {
        forumPopup.classList.add("hidden");
    });

    // ===============================
    // Chat System
    // ===============================
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");
    const sendBtn = document.getElementById("sendBtn");

    function addMessage(msg) {
        const div = document.createElement("div");
        div.classList.add("chat-msg");

        const name = document.createElement("span");
        name.classList.add("chat-username");
        name.textContent = "You: ";

        const text = document.createElement("span");
        text.textContent = msg;

        div.appendChild(name);
        div.appendChild(text);
        chatMessages.appendChild(div);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendBtn.addEventListener("click", () => {
        const msg = chatInput.value.trim();
        if (!msg) return;

        addMessage(msg);
        chatInput.value = "";
    });

    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendBtn.click();
        }
    });

    // ===============================
    // Resizable Forum Window
    // ===============================
    const forumContainer = document.getElementById("forumContainer");
    const resizeHandle = document.getElementById("resizeHandle");

    let isResizing = false;
    let startX, startY, startWidth, startHeight;

    resizeHandle.addEventListener("mousedown", (e) => {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = forumContainer.offsetWidth;
        startHeight = forumContainer.offsetHeight;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let newWidth = startWidth + dx;
        let newHeight = startHeight + dy;

        newWidth = Math.max(330, Math.min(700, newWidth));
        newHeight = Math.max(260, Math.min(600, newHeight));

        forumContainer.style.width = newWidth + "px";
        forumContainer.style.height = newHeight + "px";
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

});
// ================== FRIEND POPUPS ==================

const friends = {
    Batman: "I am vengence I am Mokshagna.",
    Talwiinder: "I make music",
    Diddy: "I make bodies sweat",
    Doggesh: "she broke my heart woof woof"
};

document.querySelectorAll(".friend-card").forEach(card => {
    card.addEventListener("click", () => {
        let name = card.querySelector(".friend-name").innerText;
        document.getElementById("friendName").innerText = name;
        document.getElementById("friendStatus").innerText = friends[name] || "Active";

        document.getElementById("friendPopup").classList.remove("hidden");
    });
});

document.getElementById("closeFriendBtn").onclick = () => {
    document.getElementById("friendPopup").classList.add("hidden");
};
