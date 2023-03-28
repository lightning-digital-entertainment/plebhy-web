import { debugLog } from '../../../utils';

const createZapRequest = async (receivingE, receivingP, amount, memo = '') => {
  try {
    if (!window.nostr) {
      throw new Error('No nostr provider is found... Get one at getalby.com');
    }
    const event = {
      kind: 9734,
      created_at: Math.floor(Date.now() / 1000),
      tags: [['e', receivingE], ['p', receivingP], ['relays', 'wss://relay.damus.io', 'wss://nos.lol', 'wss://nostr.mom', 'wss://nostr1.current.fyi', 'wss://relay.current.fyi'], ['amount', amount * 1000]],
      content: memo,
    };
    const signedEvent = window.nostr.signEvent(event);
    return signedEvent;
  } catch (e) {
    debugLog(e);
  }
  return null;
};

export default createZapRequest;
