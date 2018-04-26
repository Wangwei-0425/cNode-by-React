import React,{ Component } from 'react';

import DetailCon from './DetailCon';
import DetailCom from './DetailCom';
import data from './data';

class Detail extends Component {

    render() {

        return (
            <div className='wrap'>
                <DetailCon
                    data={data.data}
                    loading={false}
                />
                <DetailCom
                    loading={false}
                    replies={data.data.replies}
                    reply_count={data.data.reply_count}
                    create_at={data.data.create_at}
                />
            </div>
        );

    }

}

export default Detail;