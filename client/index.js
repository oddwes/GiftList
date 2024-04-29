const axios = require('axios');
const prompt = require('prompt-sync')();

const serverUrl = 'http://localhost:1225';

async function main() {
  const name = prompt('What is your name? ')
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name
  });

  console.log({ gift });
}

main();