import { PropTypes } from 'prop-types';
import React from 'react';

function Button({ onClick, title }) {
  return (
    <div className="flex justify-center">
      <button type="button" onClick={onClick} className="inline px-2 py-2 bg-zinc-500 self-start rounded font-bungee active:bg-zinc-700 hover:bg-zinc-600">
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
