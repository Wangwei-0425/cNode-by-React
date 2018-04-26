import React,{ Component } from 'react';

import { Card } from 'antd';
import data from "./tutorial/data";

class PublicCard extends Component {

    render() {

        let {data} = this.props;

        return (
            <div>
                {data.map( (item,index) => (

                    <Card
                        title={item.title}
                        key={item.title}
                        type='inner'
                        className={item.className}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.content
                            }}
                        >
                        </div>
                    </Card>

                ) )}
            </div>
        )

    }

}

export default PublicCard;