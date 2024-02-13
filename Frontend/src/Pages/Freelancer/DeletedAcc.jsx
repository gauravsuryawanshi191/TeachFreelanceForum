import React from "react";
import { Link, useHistory } from 'react-router-dom';

const DeletedAcc = () => {
    return (
        <div>
            <h1>Your Accout has been deleted successfully</h1>
            <Link to="/login">Back to login</Link><br /><br />
        </div>
    );
}
export default DeletedAcc;