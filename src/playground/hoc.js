// Higher Order Components (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarming = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>Private info please dont't share</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Log In</p> }
        </div>
    );
}

const AdminInfo = withAdminWarming(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='There are the details' />, document.getElementById('app'));