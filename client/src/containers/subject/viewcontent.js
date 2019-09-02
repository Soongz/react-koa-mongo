import React from 'react';
import {List, Avatar, Icon, Comment} from 'antd';
import CommentApp from './comment/CommentApp';
class ViewContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            showComment: true
        };
    }

    componentWillMount() {
        fetch('http://localhost:3010/api/subject/findAllSubjectItem', {
            method: 'GET',
        }).then(res => res.json()).then(data => {
            console.log(data.data.subjects);
            this.setState({
                listItems: data.data.subjects.reverse()
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const listData = this.state.listItems;

        const IconText = ({type, text, action}) => (
            <div>
                <Icon type={type} onClick={action} style={{marginRight: 8}}/>
                {text}
            </div>
        );
        return (
            <List
                itemLayout="vertical"
                size="large"
                className="commentFrame"
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
                    <div>
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="star-o" text="156" key="list-vertical-star-o"/>,
                                <IconText action={doLike.bind(this)} type="like-o" text="156"
                                          key="list-vertical-like-o"/>,
                                <IconText action={doComment.bind(this, item)} type="message" text={item.comment.length}
                                          key="list-vertical-message"/>,
                            ]}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar}/>}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>

                        {
                            this.state[`showComment${item.title}`] ? (
                                <CommentApp topicData={item}/>
                            ) : (null)
                        }

                    </div>

                )}
            />
        )
    }
}

function star() {
    alert("do star");
}

function doLike() {
    alert("doLike");
}

// 组件内函数放在class里会好点
function doComment(item) {
    this.setState({
        [`showComment${item.title}`]: !this.state[`showComment${item.title}`]
    });
}

export default ViewContent;