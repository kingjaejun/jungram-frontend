import {gql} from 'apollo-boost';

export const EXPLORE = gql`
    query explore($term:String!){
        exploreUser(term:$term){
            id
            avatar
            username
            isFollowing
            isSelf
        }
    }
`;