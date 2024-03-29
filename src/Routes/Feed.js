import React from 'react';
import {gql} from 'apollo-boost';
import {Helmet} from 'react-helmet';
import { useQuery } from 'react-apollo-hooks';
import Loader from '../Components/Loader';
import styled from 'styled-components';
import Post from '../Components/Post/index';
const FEED_QUERY =gql`
{
    seeFeed{
        id
        location
        caption
        user{
            id
            avatar
            username
        }
        files{
            id
            url
        }
        likeCount
        isLiked
        comments{
            id
            text
            user{
                id
                avatar
                username
            }
        }
        createdAt
    }
}    
`;

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height:80vh;
`;
export default () => {
    const {data, loading } = useQuery(FEED_QUERY);
    return (
        <Wrapper>
            <Helmet>
                <title>Feed | Jungram</title>
            </Helmet>
            {loading && <Loader />}
            {!loading &&
                data && 
                data.seeFeed &&
                data.seeFeed.map(post=> ( 
                    <Post 
                        key={post.id } 
                        id={post.id} 
                        caption={post.caption}
                        location={post.location}
                        user={post.user} 
                        files={post.files} 
                        likeCount={post.likeCount}
                        isLiked={post.isLiked}
                        comments={post.comments}
                        createdAt={post.createdAt}
                    /> 
                ))}
        </Wrapper>
    );
} 