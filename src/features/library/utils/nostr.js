import { SimplePool } from 'nostr-tools';

export const pool = new SimplePool();

export const getKind0 = async (pk) => {
  const receivedEvents = [];
  let returnEvent;
  await new Promise((resolve) => {
    const sub = pool.sub(
      ['wss://relay.damus.io', 'wss://nos.lol', 'wss://nostr.mom'],
      [
        {
          authors: [pk],
          kinds: [0],
        },
      ],
      undefined,
    );
    console.log(pool);
    sub.on('event', (event) => {
      receivedEvents.push(event);
    });
    sub.on('eose', () => {
      if (receivedEvents.length > 0) {
        [returnEvent] = receivedEvents;
      }
      resolve();
    });
  });
  return returnEvent;
};
