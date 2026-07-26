import { logout } from "../actions/auth";
import Button from "../components/button";

const Dashboard = () => {
    return (
        <main>
            <div>Dashboard</div>
            <form action={logout}>
                <Button type="submit">Logout</Button>
            </form>
        </main>
    );
};

export default Dashboard;
