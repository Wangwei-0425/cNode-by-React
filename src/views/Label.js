import React,{ Component } from 'react';

import { Tag } from 'antd';

const tag = {

    good: {
        color: 'magenta',
        title: '精华'
    },
    top: {
        color: 'volcano',
        title: '置顶'
    },
    ask: {
        color: '',
        title: '问答'
    },
    share: {
        color: '',
        title: '分享'
    },
    job: {
        color: '',
        title: '招聘'
    },
    dev: {
        color: '',
        title: '测试'
    }

};

function getTag(props) {


    let thekey = props.top ?
        'top':
        props.good ?
            'good':
            props.tab;

    return thekey;

}

class Label extends React.Component {

    render() {

        let label = tag[getTag(this.props.data)];

        if(label.color) {
            return <Tag color={label.color}>{label.title}</Tag>
        }else {
            return <Tag>{label.title}</Tag>
        }

    }

}

export default Label;