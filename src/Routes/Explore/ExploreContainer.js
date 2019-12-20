import React from 'react';
import ExplorePresenter from './ExplorePresenter';
import {withRouter} from 'react-router-dom';
import {useQuery} from 'react-apollo-hooks';
import {EXPLORE} from './ExploreQuries';

export default withRouter(({location: {search} }) =>{
    const term = search.split("=")[1];
    const {data, loading} = useQuery(EXPLORE, {
        skip:term ===undefined,
        variables:{
            term
        }
    });
    return  <ExplorePresenter  loading={loading} data={data}/>
    
})