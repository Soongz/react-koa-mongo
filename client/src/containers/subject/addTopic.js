import React from 'react';
import TopNavBar from './topNavBar';
import {Input, Button, message} from 'antd';
const { TextArea } = Input;

class AddTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            description : "",
            content : "",
        };
    }

    render(){
        return (
            <div>
                <TopNavBar />
                <TextArea placeholder="Title" autosize
                          value={this.state.title}
                          onChange={e => this.setState({ title: e.target.value })} />
                <div style={{ margin: '24px 0' }} />

                <TextArea
                    placeholder="Description"
                    value={this.state.description}
                    onChange={e => this.setState({ description: e.target.value })}
                    autosize={{ minRows: 2, maxRows: 6 }}/>

                <div style={{ margin: '24px 0' }} />

                <TextArea
                    placeholder="Content"
                    value={this.state.content}
                    onChange={e => this.setState({ content: e.target.value })}
                    autosize={{ minRows: 3, maxRows: 5 }}/>

                <Button type="primary" onClick={doPublish.bind(this)}>Publish</Button>
            </div>

        );
    }

}

function doPublish() {
    fetch('http://localhost:3010/api/subject/publishTopic', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: this.state.title,
            description: this.state.description,
            content: this.state.content,
            email: "temporary.ea.com"
        })
    }).then(res => res.json()).then( data => {
        if (data.succ === true) {
            message.info('publish success');
        } else {
            message.error('publish failed');
        }
        const path = `/content`;
        this.props.history.push(path);
    }).catch((err) => {
        console.log(err);
    })
}

export default AddTopic;