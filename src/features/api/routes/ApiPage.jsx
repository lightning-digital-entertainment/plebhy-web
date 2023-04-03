import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerConf from '../assets/swagger.json';

function ApiPage() {
  return (
    <div className="max-w-4xl bg-slate-100 rounded-xl sm:w-2/3">
      <SwaggerUI spec={swaggerConf} />
    </div>
  );
}

export default ApiPage;
