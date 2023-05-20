import React from "react";
import PropTypes from 'prop-types';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
  return (
    // Here, React will evaluate the props.alert first, if it is false, then the latter will not be evaluated, if it is true then it will evaluate the latter, and if both are true then the content will be displayed.
    props.alert && <div>
      <div className={`my-2 mx-1 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;

Alert.propTypes = {
    alert: PropTypes.object,
}
