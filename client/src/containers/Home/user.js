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
                <Button type="primary" onClick={show} >Example button</Button>
            </div>
        );
    }
}


function show(){
    fetch(`http://127.0.0.1:3010/api/user/findRepo`,{
            method: 'GET'
        }).then(res => res.json()).then(
        data => {
            console.log(data);
            this.setState({
                users: data
            });
    }  
    )
}


User.defaultProps = {
};

export default User;