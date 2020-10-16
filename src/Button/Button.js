import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({appearance, size, disabled, loading, children, ...props}) => {
    const isLoading = loading ? 'btn-loading' : null;
    const isDisabled = disabled ? 'btn-disabled' : null;

    return (
        <button 
        className={['btn', `btn-${appearance}`, `btn-${size}`, `${isLoading}`, `${isDisabled}`].join(' ')}
        disabled={disabled}
        {...props}
        >
            {children}
        </button>
    )
}

export default Button;

Button.propTypes = {
    appearance: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Button.defaultProps = {
    appearance: 'primary',
    size: 'medium',
    loading: false,
    disabled: false,
    onClick: undefined
}