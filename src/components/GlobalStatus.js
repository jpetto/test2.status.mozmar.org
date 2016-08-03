import React, { Component } from 'react';

class GlobalStatus extends Component {
    statusToColor(status) {
        var result;

        switch(status) {
        case 'healthy':
            result = 'success';
            break;
        case 'warning':
            result = 'warning';
            break;
        case 'failed':
            result = 'danger';
            break;
        case 'pending':
            result = 'info';
            break;
        default:
            result = '';
            break;
        }

        return result;
    }

    render() {
        var className = 'alert alert-' + this.statusToColor(this.props.status);

        return (
            <div className={className} role="alert">
                {this.props.message}
            </div>
        );
    }
}

export default GlobalStatus;
