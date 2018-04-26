import React,{ Component } from 'react';

import { Card,List,Avatar } from 'antd';
import { Link } from 'react-router-dom';

class UserList extends Component {

    render() {

        let { loading,title,data } = this.props;

        console.log(data)

        return (
            <Card
                loading={loading}
                title={title}
                type='inner'
            >
                <List
                    className='userInfoList'
                    loading={loading}
                    itemLayout = "vertical"
                    dataSource={data}
                    renderItem={ item => (
                        <List.Item key={item.id}>

                            <Avatar src={item.author.avatar_url} />
                            <Link
                                to={'/user/' + item.author.loginname}
                                className='user'
                            >
                                {item.author.loginname}
                            </Link>
                            <h4>
                                <Link to={'/detail/' + item.id}>{item.title}</Link>
                            </h4>
                            {
                                item.last_reply_at?
                                    <time>
                                        {"最后回复: "+item.last_reply_at.split("T")[0]}
                                    </time>:
                                        ""
                            }

                        </List.Item>
                    ) }
                />
            </Card>
        )

    }

}

export default UserList;