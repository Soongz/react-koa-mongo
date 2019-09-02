import React from 'react';
import 'antd/dist/antd.css';
import {Comment, Avatar, Form, Button, List, Input, message} from 'antd';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);

class CommentApp extends React.Component {
    state = {
        comments: this.props.topicData.comment.reverse(),
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });
        const uploadTopicData = this.props.topicData;
        uploadTopicData.comment.push(this.state.value);

        fetch('http://localhost:3010/api/subject/createComment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                subject_id: uploadTopicData._id,
                newComment: {
                    author: "temp",
                    content: this.state.value,
                }
            })
        }).then(res => res.json()).then( data => {
            if (data.succ === true) {
                this.setState({
                    submitting: false,
                    value: '',
                    comments: [
                        ...this.state.comments,
                    ],
                });
                this.props.updateMethod();
            } else {
                message.error('comment failed');
            }
        }).catch((err) => {
            console.log(err);
        });

    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <div>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </div>
        );
    }
}

export default CommentApp;