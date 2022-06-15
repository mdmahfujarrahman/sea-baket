import { Link } from "react-router-dom";
import useBanner from "../../../hooks/useBanner";
import useLogo from "../../../hooks/useLogo";
import Loading from "../../Sheard/Loading";


const Settings = () => {
    const [logo, isLoading] = useLogo({})
    const [banner, isLoadingBanner] = useBanner({});
    if ((isLoading, isLoadingBanner)) {
        return <Loading />;
    }

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center mt-32 space-x-0 lg:space-x-20 space-y-8 lg:space-y-0">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={logo.img} alt="logo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">Update Logo</h2>

                    <div className="card-actions justify-end">
                        <Link
                            to="/dashboard/settings/update-logo"
                            className="btn btn-primary"
                        >
                            Update Logo
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className="h-24" src={banner.img} alt="banner" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">Update Banner</h2>

                    <div className="card-actions justify-end">
                        <Link
                            to="/dashboard/settings/update-banner"
                            className="btn btn-primary"
                        >
                            Update Logo
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Settings;
