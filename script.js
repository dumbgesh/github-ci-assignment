const thoughts = [
    "You don’t have to have it all figured out to move forward; even the smallest step changes your view of what's possible.",
    "Be proud of how gracefully you have handled things that were meant to break you.",
    "Sometimes you are the antidote to someone else's quiet bad day just by being kind, present, and uniquely you.",
    "Your worth is determined by your existence, not your productivity. You are allowed to just breathe and be.",
    "The version of you from five years ago would be completely amazed by how far you have come and what you can handle now.",
    "You are someone's safe space, a comforting constant in a world that often feels entirely too loud.",
    "Give yourself the same gentle patience and radical forgiveness that you so freely hand out to everyone else.",
    "The growth you cannot see right now is still happening; roots must always dig deep into the dark before the blossom shows.",
    "You are a deeply necessary thread in the tapestry of the lives you touch—your absence would leave a noticeable tear.",
    "You are doing much better than you give yourself credit for, and it is entirely okay to be a beautiful work in progress."
];

const thought = document.getElementById("thought");
const button = document.getElementById("thoughtButton");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    thought.textContent = thoughts[randomIndex];
});