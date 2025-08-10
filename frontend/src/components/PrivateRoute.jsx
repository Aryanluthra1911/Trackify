import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4444/login/gettoken",
                    { withCredentials: true }
                );
                const token = response.data?.token;
                if (token) {
                    setIsAuthenticated(true);
                } else {
                    alert("Unable to verify session. Please login again.");
                    navigate("/login");
                }
            } catch (err) {
                alert("Session expired or invalid. Please login again.");
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };
        checkToken();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : null;
}
