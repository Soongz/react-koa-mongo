import React from 'react';
import { List, Avatar, Icon } from 'antd';

class ViewContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:3010/api/subject/findAllSubjectItem', {
            method: 'GET',
        }).then(res => res.json()).then(data => {
            console.log(data.data.subjects);
            this.setState({
                listItems: data.data.subjects
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const listData = this.state.listItems;

            const IconText = ({ type, text }) => (
                <span>
                    <Icon type={type} style={{ marginRight: 8 }} />
                    {text}
                </span>
        );
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 4,
                }}
                dataSource={listData}
                footer={
                    <div>
                        <p align="center">we must at least have a bottom line.</p>
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                            <IconText type="message" text="2" key="list-vertical-message" />,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    }

}

export default ViewContent;