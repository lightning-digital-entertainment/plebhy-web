import { bech32 } from 'bech32';
import { debugLog } from '../../../utils';
import createZapRequest from './zaps';

const textDecoder = new TextDecoder();

const webLnZap = async (userData, eTag, pTag, amount, memo) => {
  try {
    let dest;
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
    console.log(dest);
    const res = await fetch(dest);
    const {
      minSendable,
      maxSendable,
      allowsNostr,
      nostrPubkey,
      callback,
    } = await res.json();
    if (amount * 1000 < minSendable || amount * 1000 > maxSendable) {
      throw new Error('Amount is out of bounds');
    }
    if (!allowsNostr || !nostrPubkey) {
      throw new Error('User does not support Zaps...');
    }
    const zapEvent = await createZapRequest(eTag, pTag, amount, memo);
    console.log(zapEvent);
    const cbRes = await fetch(`${callback}?amount=${amount * 1000}&nostr=${encodeURIComponent(JSON.stringify(zapEvent))}`);
    const cbData = await cbRes.json();
    console.log(cbData);
    const { pr } = cbData;
    return pr;
  } catch (e) {
    debugLog(e);
  }
  return null;
};

export default webLnZap;
