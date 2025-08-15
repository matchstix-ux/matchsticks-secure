async function sendMessage(message) {
  const response = await fetch('/.netlify/functions/matchsticks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  const data = await response.json();
  document.getElementById('chat').innerHTML += '<p><b>You:</b> ' + message + '</p>';
  document.getElementById('chat').innerHTML += '<p><b>Bot:</b> ' + data.reply + '</p>';
}

sendMessage("Hello from MatchSticks!");
