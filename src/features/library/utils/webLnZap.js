import { bech32 } from 'bech32';
import { debugLog } from '../../../utils';
import createZapRequest from './zaps';

const textDecoder = new TextDecoder();

const webLnZap = async (kind0Event, eTag, pTag, amount) => {
  try {
    let dest;
    const userData = JSON.parse(kind0Event.content);
    const { lud06, lud16 } = userData;
    if (!lud06 && !lud16) {
      throw new Error('User does not have a Lightning Address or LNURL...');
    }
    if (lud06) {
      const { words: dataPart } = bech32.decode(lud06, 2000);
      const requestByteArray = bech32.fromWords(dataPart);
      dest = textDecoder(requestByteArray);
    } else if (lud16) {
      const [user, domain] = lud16.split('@');
      dest = `https://${domain}/.well-known/lnurlp/${user}`;
    }
    const res = await fetch(dest);
    const {
      minSendable,
      maxSendable,
      allowsNostr,
      nostrPubkey,
      callback,
    } = await res.json();
    if (amount < minSendable || amount > maxSendable) {
      throw new Error('Amount is out of bounds');
    }
    if (!allowsNostr || !nostrPubkey) {
      throw new Error('User does not support Zaps...');
    }
    const zapEvent = createZapRequest(eTag, pTag, amount);
    const cbRes = await fetch(`${callback}?amount=${amount * 1000}&nostr=${encodeURIComponent(JSON.stringify(zapEvent))}`);
    const cbData = await cbRes.json();
    debugLog(cbData);
  } catch (e) {
    debugLog(e);
  }
};

export default webLnZap;
