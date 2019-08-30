import React from 'react';
import { Layout, Menu, Icon} from "antd";
const { Header } = Layout;


class TopNavBar extends React.Component {
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
                        </Menu>
                    </Header>
                </Layout>
            </div>

        );
    }

}

export default TopNavBar;