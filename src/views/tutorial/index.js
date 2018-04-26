import React,{ Component } from 'react';

import data from './data';
import PublicCard from '../PublicCard';

class Tutorial extends Component {

    render() {

        return <PublicCard data={data}/>

    }

}

export default Tutorial;