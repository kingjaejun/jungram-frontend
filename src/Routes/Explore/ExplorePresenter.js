import React from 'react';
import styled from 'styled-components';
import UserCard from "../../Components/UserCard";
import Loader from '../../Components/Loader';
import PropTypes from 'prop-types';
const Wrapper = styled.div`
  height: 50vh; 
  
`;

const ExplorePresenter = ({data, loading}) => {
    if(loading ===true){
        return(
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    }else if(!loading && data && data.exploreUser) {

        return(
            <Wrapper>
                {data.exploreUser.map(user => (
            
                <UserCard 
                    key={user.id}
                    username={user.username}
                    isFollowing={user.isFollowing}
                    url={user.avatar}
                    isSelf={user.isSelf}
                    id={user.id}
                />
            ))}
            </Wrapper>
        );
    }
}

ExplorePresenter.propTypes ={
    loading:PropTypes.bool
};
export default ExplorePresenter;