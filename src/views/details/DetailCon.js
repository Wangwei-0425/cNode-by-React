import React,{ Component } from 'react';

import { Card,Avatar } from 'antd';
import { Link } from 'react-router-dom';

import Label from '../Label';

class DetailCon extends Component {

    render() {

        let {data,loading} = this.props;

        return (
            <Card
                loading={loading}
                title={
                    <div>
                        <h2>
                            {data.title}
                        </h2>
                        <div
                            style={{
                                display:"flex",
                                alignItems:"center"
                            }}
                        >
                            <Label data={data}/>
                            <Avatar src={data.author.avatar_url}/>
                            <Link style={{margin: '0 5px'}} to={'/user/' + data.author.loginname}>
                                {data.author.loginname}
                            </Link>
                            发表于：{data.last_reply_at.split('T')[0]}
                        </div>
                    </div>
                }
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.content
                    }}
                >
                </div>
            </Card>
        )

    }

}

export default DetailCon;