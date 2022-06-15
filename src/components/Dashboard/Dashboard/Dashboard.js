import "react-dropdown/style.css";
import { Link, Outlet, useLocation } from 'react-router-dom';
import articles from '../../../asset/article.png';
import category from '../../../asset/category.png';
import faqs from '../../../asset/faqs.png';
import profile from '../../../asset/profile.png';
import setting from '../../../asset/setting.png';

const Dashboard = () => {
    const location = useLocation()
    const options = ["one", "two", "three"];
    const defaultOption = options[0];
    return (
        <div class="drawer drawer-mobile bg-sky-600">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <Outlet />
            </div>
            <div class="drawer-side container mx-auto">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-cyan-900 text-base-content">
                    <li>
                        <Link to="/dashboard" className="text-secondary">
                            <img className="w-8" src={category} alt="faqs" />{" "}
                            Category
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/faqs" className="text-secondary">
                            <img className="w-8" src={faqs} alt="faqs" /> Faqs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/articles"
                            className="text-secondary"
                        >
                            <img className="w-8" src={articles} alt="" />
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/settings"
                            className="text-secondary"
                        >
                            <img className="w-8" src={setting} alt="setting" />{" "}
                            Website Settings
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard" className="text-secondary">
                            <img className="w-8" src={profile} alt="" /> Update
                            profile
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;