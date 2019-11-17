let arr = [
  'veronica',
  'mary',
  'alex',
  'james',
  'mary',
  'michael',
  'alex',
  'michael'
];

function countVotes(array) {
  const votes = {};
  let maxVotes = 0;
  let winner = '';
  for (let i = 0; i < array.length; i++) {
    let currentVoter = array[i];
    votes[currentVoter] = (votes[currentVoter] || 0) + 1;

    if (votes[currentVoter] > maxVotes) {
      maxVotes = votes[currentVoter];

      winner = currentVoter;
    } else if (votes[currentVoter] === maxVotes) {
      if (currentVoter > winner) {
        winner = currentVoter;
      }
    }
  }

  return winner;
}

console.log(countVotes(arr));
