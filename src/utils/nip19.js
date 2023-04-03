import { bech32 } from 'bech32';
import debugLog from './debugLog';

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

export const encodePubkey = (pubkeyInHex) => {
  try {
    const words = bech32.toWords(textEncoder.encode(pubkeyInHex));
    return bech32.encode('npub', words, 2000);
  } catch (e) {
    debugLog(e);
  }
  return null;
};

export const decodePubkey = (encodedPubkey) => {
  try {
    const { words } = bech32.decode(encodedPubkey, 2000);
    const decoded = textDecoder.decode(bech32.fromWords(words));
    return decoded;
  } catch (e) {
    debugLog(e);
  }
  return null;
};
