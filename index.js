const DiscordRPC = require('discord-rpc')
const clientId = '790827459641344020';

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();
const randomactivity = ['']
const randomdetails = ['']


const activity = 'Sleeping'
//Math.floor(Math.random()*randomactivity.length)
const details = 'AFK. I am sleeping. If you need anything, DM me.'
//Math.floor(Math.random()*randomdetails.length)
const largeimage = 'smirk'
const largetooltip = 'Hello, human.'
const smallimage = 'smirk'
const smalltooltip = 'What brings you to my status?'


async function setActivity() {
  rpc.setActivity({
    details: `${details}`,
    state: `${activity}`,
    startTimestamp,
    largeImageKey: `${largeimage}`,
    largeImageText: `${largetooltip}`,
    smallImageKey: `${smallimage}`,
    smallImageText: `${smalltooltip}`,
    instance: false,
    buttons: [
        { label: 'Guru the Discord Bot', url: 'https://dsc.gg/guru' }
    ],
  });
}

rpc.on('ready', () => {
  setActivity();
    console.log('Ready')
  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);