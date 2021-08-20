const states = fetch(
  'https://893922d826c5.ngrok.io/api/v1/agencybanking/states'
)
  .then(res => res.json())
  .catch(err => console.log(err));

console.log(states);
