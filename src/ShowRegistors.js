import React from 'react'

const ShowRegistors = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return (
        <>

            <div>
                <h2>User Details</h2>

                {/* {users.map((user) => (
                    <div key={user.email}>
                        <p>Name: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                ))} */}
            </div>
        </>
    );
};

export default ShowRegistors
