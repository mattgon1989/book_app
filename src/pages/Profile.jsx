// profile page for users to check out books non users should see this page
import {useNavigate} from 'react-router-dom'

const Profile = ({ user }) => {
    const navigate = useNavigate();
/*
    if (!user) {
        navigate('/login');
        return null;
    }
*/
    const { email } = user;
    return (
        <h1>Profile {email}!</h1>

    );
}

export default Profile;