import React from 'react';
import { Button, Card } from "antd";

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
                
                {this.state.users.map((user) => {
                    return (
                        <Card title="${user,loginname}">
                            <p>${user.email}</p>
                        </Card>
                    )
                })}

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

function userCarts(){
    const usersElements = [];
    console.log("..");
    for (let user of this.state.users) {
        console.log("..");
        usersElements.push(
            <Card title="${}">
                <p>${user.email}</p>
            </Card>
        )
    }
    return usersElements;
}

User.defaultProps = {
};

export default User;