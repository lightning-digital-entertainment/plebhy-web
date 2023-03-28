import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import webLnZap from '../../features/library/utils/webLnZap';
import { debugLog } from '../../utils';
import Button from './Button';

const numberRegex = /^[\d]+$/;

function ZapModal({ onClose, user, gif }) {
  const [amountError, setAmountError] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  const amountRef = useRef();
  const memoRef = useRef();

  const submitHandler = async () => {
    const amount = amountRef.current.value;
    const memo = memoRef.current.value;
    if (amount < 1) {
      setAmountError(true);
      return;
    }
    if (!amount.match(numberRegex)) {
      setAmountError(true);
      return;
    }
    if (!window.nostr) {
      alert('No nostr provider found...');
      return;
    }
    const pr = await webLnZap(user.userData, gif.etag, gif.ptag, amount, memo);
    if (window.webln) {
      try {
        await window.webln.enable();
        try {
          await window.webln.sendPayment(pr);
        } catch (e) {
          debugLog(e);
        }
      } catch (e) {
        debugLog(e);
      }
    }
  };

  const changeHandler = () => {
    setAmountError(false);
  };
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black opacity-80" />
      <div className="flex fixed inset-4 justify-center items-center">
        <div className="bg-zinc-900 p-8 rounded-xl text-center font-montserrat w-full sm:w-1/2">
          <h1 className="font-bold">{`Zap ${user.userData.name || user.pubkey}'s PLEBHY!`}</h1>
          <div className="py-4">
            <p className="text-left text-xs">Choose an amount:</p>
            <label htmlFor="amount" className="font-montserrat">
              <input
                type="number"
                id="amount"
                className={`border-2 bg-zinc-700 mr-4 rounded p-2 w-full ${amountError ? 'border-rose-500' : 'border-zinc-800'}`}
                ref={amountRef}
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="py-4">
            <p className="text-left text-xs">Optional: Add a message</p>
            <label htmlFor="memo" className="font-montserrat">
              <textarea type="text" id="memo" className="mr-4 rounded p-2 w-full" ref={memoRef} />
            </label>
          </div>
          <div className="flex flex-row w-full justify-between">
            <Button onClick={submitHandler} title="Send Zap" />
            <Button onClick={onClose} title="Close" />
          </div>
        </div>
      </div>
    </>,
    document.getElementById('app-modal'),
  );
}

export default ZapModal;
