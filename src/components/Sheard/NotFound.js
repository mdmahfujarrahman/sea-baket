import notFound from '../../asset/not.png';

const NotFound = () => {

    return (
        <div className="flex flex-col justify-center items-center my-20">
            <img src={notFound} alt="notFound" />
            <h2 className="text-4xl text-accent my-4">Sorry, Page Not Found</h2>

        </div>
    );
};

export default NotFound;