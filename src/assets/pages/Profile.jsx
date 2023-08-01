
const UserProfile = ({ user }) => {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};