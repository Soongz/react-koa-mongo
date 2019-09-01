/**
 * Created by mac_soong on 2019/9/1.
 */
import React from 'react';
import { Comment, Icon, Tooltip, Avatar, Row, Col} from 'antd';
import moment from 'moment';

class ViewContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            action: null,
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

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };


    render() {
        const {likes, dislikes, action} = this.state;

        const actions = [
            <span key="comment-basic-like">
                <Tooltip title="Like">
                  <Icon
                      type="like"
                      theme={action === 'liked' ? 'filled' : 'outlined'}
                      onClick={this.like}
                  />
                </Tooltip>
                <span style={{paddingLeft: 8, cursor: 'auto'}}>{likes}</span>
            </span>,
            <span key=' key="comment-basic-dislike"'>
                <Tooltip title="Dislike">
                  <Icon
                      type="dislike"
                      theme={action === 'disliked' ? 'filled' : 'outlined'}
                      onClick={this.dislike}
                  />
                </Tooltip>
                <span style={{paddingLeft: 8, cursor: 'auto'}}>{dislikes}</span>
            </span>,
            <span key="comment-basic-reply-to">Reply to</span>,
        ];

        return (
            <Row>
                <Col span={1}></Col>
                <Col span={23}>
                    <Comment
                        actions={actions}
                        author={<a>Han Solo</a>}
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure), to help people create their product prototypes beautifully
                                and efficiently.
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                </Col>
            </Row>
        )
    }
}


export default ViewContent;