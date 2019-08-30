import React from 'react';
import { Input, Button, Icon, Row, Col, message} from "antd";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    render() {

        return (
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
                    <Input.Password  placeholder="Password"
                                     value={this.state.password}
                                     onChange={e => this.setState({ password: e.target.value })}
                                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     className="login-form"/>

                    <Button type="primary" className="login-form-button" onClick={doLogin.bind(this)}>Log in</Button>
                    Or <a>register now!</a>
                </div>
                </Col>
            </Row>
        );
    }
}

function doLogin (){
    fetch('http://localhost:3010/api/user/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            loginname: this.state.username,
            password: this.state.password
        })
    }).then(res => res.json()).then( data => {
        if (data.succ === true) {
            const path = `/content`;
            message.info('login success');
            this.props.history.push(path);
        } else {
            message.error('login failed');
        }
    }).catch((err) => {
        console.log(err);
    })
}
Login.defaultProps = {
};

export default Login;