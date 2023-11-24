const Container = ({children}) => {
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-10 lg:px-12 py-2'>
            {
                children
            }
        </div>
    );
};

export default Container;