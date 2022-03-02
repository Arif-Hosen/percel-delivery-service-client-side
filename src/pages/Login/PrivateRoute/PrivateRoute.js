import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useContex';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading, setIsLoading } = useAuth();
    if (isLoading) {

        return (

            < div className="spinner-grow text-center" role="status" >
                <span class="visually-hidden">Loading...</span>
            </div >

        )
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (children)
                    :
                    (<Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }} />
                    )
            }
        >

        </Route>
    );
};

export default PrivateRoute;