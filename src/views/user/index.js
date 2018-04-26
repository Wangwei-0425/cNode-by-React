import React,{ Component } from 'react';

import { Card,Avatar,Row,Col } from 'antd';

import data from './data';
import UserList from './UserList';

class User extends Component {

    render() {

        let {avatar_url,create_at,loginname,score,recent_topics,recent_replies} = data.data

        return (
            <div className='mainWrap'>
                <Card
                    title={
                        <div>
                            <Avatar
                                src={avatar_url}
                                className='userAvatar'
                            />
                            <Row className='userInfo'>
                                <Col md={8}>
                                    用户名：<a>{loginname}</a>
                                </Col>
                                <Col md={8}>
                                    创建时间：<a>{create_at.split('T')[0]}</a>
                                </Col>
                                <Col md={8}>
                                    积分：<a>{score}</a>
                                </Col>
                            </Row>
                        </div>
                    }
                >
                </Card>
                <UserList
                    loading = {false}
                    title = "最近创建的话题"
                    data = {recent_topics}
                />
                <UserList
                    loading = {false}
                    title = "最近回复的话题"
                    data = {recent_replies}
                />
            </div>
        );

    }

}

export default User;