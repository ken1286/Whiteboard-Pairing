const trip = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'],
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG']
];

function reconstructTrip(arr) {
  const tickets = {};
  let finalTrip = [];
  for (let i = 0; i < arr.length; i++) {
    tickets[arr[i][0]] = arr[i][1];
    if (arr[i][0] === null) {
      finalTrip.push(arr[i][1]);
    }
  }

  let lastTicket = finalTrip[finalTrip.length - 1];
  while (tickets[lastTicket] !== null) {
    finalTrip.push(tickets[lastTicket]);
    lastTicket = finalTrip[finalTrip.length - 1];
  }

  console.log(tickets);
  console.log(finalTrip);
}

reconstructTrip(trip);
