import React from 'react';
import { Input, Button, Icon, Row, Col, message} from "antd";

class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginname: "",
            password: "",
            email: ""
        };
    }

    render() {

        return (
            <div>
                <Row>
                    <Col span={10}></Col>
                    <Col span={8}>
                        <div className="login-div">
                            <Input  placeholder="Username"
                                    value={this.state.username}
                                    onChange={e => this.setState({ username: e.target.value })}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    className="login-form"
                            /><br/>
                            <Input  placeholder="Email"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    className="login-form"
                            /><br/>
                            <Input  placeholder="Password"
                                             value={this.state.password}
                                             onChange={e => this.setState({ password: e.target.value })}
                                             prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                             className="login-form"/>

                            <Button type="primary" className="login-form-button" onClick={doRegister.bind(this)}>Sign Up</Button>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

function doRegister(){
    fetch('http://localhost:3010/api/user/createUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            loginname: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
    }).then(res => res.json()).then( data => {
        if (data.succ === true) {
            const path = `/content`;
            message.info('create success');
            this.props.history.push(path);
        } else {
            message.error('create failed');
        }
    }).catch((err) => {
        console.log(err);
    });
}

CreateUser.defaultProps = {
};

export default CreateUser;