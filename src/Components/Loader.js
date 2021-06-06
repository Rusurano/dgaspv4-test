import React from 'react';
import { Progress } from 'reactstrap';

const Loader = props => {
  return (
    <div className="loader w-100 d-flex align-items-center min-vh-100">
      <div className="w-75 text-center mx-auto">
        <div>Loading ({props.percentage}%)</div>
        <Progress animated color="info" value={props.percentage} />
      </div>
    </div>
  )
};

export default Loader;