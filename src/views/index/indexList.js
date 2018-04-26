import React,{ Component } from 'react';

import { List,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Label from '../Label';

class IndexList extends Component {

    constructor(arg) {

        super(arg);

        this.state = {
            page: 1
        };

        this.getData(this.props.tab);

    }

    shouldComponentUpdate(nextProps) {

        if(this.props.tab !== nextProps.tab){

            this.getData(nextProps.tab)
            return false;

        }

        return true;

    }

    getData(tab) {

        this.props.dispatch( dispath => {

            dispath({
                type: 'LIST_UPDATA'
            });

            axios.get(`
                https://cnodejs.org/api/v1/topics?page=${this.state.page}&tab=${tab}&limit=20
            `).then( res => {

                dispath({
                    type: 'LIST_UPDATA_SUCCESS',
                    data: res.data
                })

            } ).catch(error => {

                dispath({
                    type: 'LIST_UPDATA_ERROR',
                    data: error
                })

            })

        } )

    }

    render() {

        let { loading,data } = this.props;

        data = data.filter(item => {

            return item.tab

        });

        return (
            <List
                loading={loading}
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[
                            '回复' + item.reply_count,
                            '访问' + item.visit_count
                        ]}
                    >
                        <List.Item.Meta
                            avatar={
                                <Link to={'/user/' + item.author.loginname}>
                                    <Avatar src={item.author.avatar_url}/>
                                </Link>
                            }
                            title={
                                <div>
                                    <Label data={item}/>
                                    <Link to={'/detail/' + item.id}>
                                        {item.title}
                                    </Link>
                                </div>
                            }
                            description={
                                <p>
                                    <Link to={'/user/' + item.author.loginname}>
                                        {item.author.loginname}
                                    </Link>
                                    发表于：{
                                        item.last_reply_at.split('T')[0]
                                    }
                                </p>
                            }
                        />
                    </List.Item>
                )}
            >
            </List>
        );

    }

}

export default connect( state => state.list )(IndexList);