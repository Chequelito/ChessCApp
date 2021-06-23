
import React from 'react';



export default class SubmitButton extends React.Component {

    render({showForm,}) {
        return (
            <div><a onClick = {() => setShowForm(!showForm)} className="nav-link" href="#">Log In</a></div>
        );
    }
}