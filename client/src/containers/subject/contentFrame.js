import React from 'react';
import ViewContent from './viewcontent';
import { Layout, Menu, Icon} from "antd";
const {Header } = Layout;

class ContentFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    selectTab = ({ key }) => {
        switch (key) {
            case 'createTopic':
                this.props.history.push(`/content/addTopic`);
                break;
            case 'createUser':
                this.props.history.push(`/content/createUser`);
                break;
        }
    };

    render(){
        return (
            <div>
                <Layout className="nav-bar">
                    <Header className="mobile">
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal" onSelect={this.selectTab} className="menu">

                            <Menu.Item key="createTopic">
                                <Icon type="plus-circle-o" />
                                <span>New Topic</span>
                            </Menu.Item>
                            <Menu.Item key="createUser">
                                <Icon type="plus-circle-o" />
                                <span>Sign up</span>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <ViewContent />
                </Layout>

            </div>

        );
    }

}

export default ContentFrame;