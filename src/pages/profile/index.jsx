import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {

    let { profileId } = useParams()

    return ( 
        <div>
            <h1>Profile page</h1>
            <h1>{profileId}</h1>
        </div>
     );
}
 
export default Profile;