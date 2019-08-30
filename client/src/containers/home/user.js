import React from 'react';
import { Button } from "antd";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: {}
        };
    }

    render() {

        return (
            <div>
                <Button type="primary" onClick={show.bind(this)} >Example button</Button>
            </div>
        );
    }
}


function show(){
    fetch(`http://127.0.0.1:3010/api/user/findRepo`,{
            method: 'GET'
        }).then(res => res.json()).then(
        data => {
            console.log(data.data.users);
            this.setState({
                users: data.data.users
            });
    }  
    )
}

User.defaultProps = {
};

export default User;