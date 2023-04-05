import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function GifContainer({ gifUrl, pTag, id }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/id/${id}`, { state: { pk: pTag }, replace: true });
      }}
      type="button"
      className="flex"
    >
      <img src={gifUrl} alt="plebhy gif" className="rounded-lg object-cover" />
    </button>
  );
}

GifContainer.propTypes = {
  gifUrl: PropTypes.string.isRequired,
  pTag: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default GifContainer;
