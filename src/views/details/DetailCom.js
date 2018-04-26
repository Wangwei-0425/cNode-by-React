import React,{ Component } from 'react';

import { Card,List,Avatar } from 'antd';
import { Link } from 'react-router-dom';

class DetailCom extends Component {

    render() {

        let { replies,reply_count,create_at,loading } = this.props;

        return (
            <Card
                loading={loading}
                title={reply_count + '条回复'}
                type='inner'
            >
                <List
                    itemLayout='vertical'
                    className='replyList'
                    dataSource={replies}
                    renderItem={ reply => (
                        <List.Item
                            key={reply.id}
                            extra={
                                reply.ups.length ?
                                    <span>有{reply.ups.length}人觉得很赞</span>:''
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={reply.author.avatar_url} />}
                                description={
                                    <div>
                                        <Link to={'/user/' + reply.author.loginname}>
                                            {reply.author.loginname}
                                        </Link>
                                        <span>发表于：{create_at.split('T')[0]}</span>
                                    </div>
                                }
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: reply.content
                                }}
                            >

                            </div>
                        </List.Item>
                    ) }
                />
            </Card>
        )

    }

}

export default DetailCom;