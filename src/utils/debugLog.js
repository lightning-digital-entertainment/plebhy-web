const debugLog = (message) => {
  if (import.meta.env.MODE === 'development') {
    console.log(message);
  }
};

export default debugLog;
