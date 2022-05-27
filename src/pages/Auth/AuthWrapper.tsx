import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase.js";
import { Navigate } from 'react-router-dom';

export const AuthWrapper = () => {
    const [user, loading] = useAuthState(auth);

    return loading
        ? (<div></div>)
        : user
            ? (<Navigate to="/cash-flow" replace />)
            : (<Navigate to="/login" replace />)

}
