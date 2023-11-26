import { Helmet } from "react-helmet-async";

const Title = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>WEDDY HUB || {title}</title>
            </Helmet>
        </div>
    );
};

export default Title;