import React from 'react';
import useBioData from '../../../../Hooks/useBioData/useBioData';

const ViewBioData = () => {
    const [data] = useBioData();
    console.log(data);
    return (
        <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, soluta laboriosam assumenda in sunt fuga debitis velit nihil labore nam. Sit harum eaque quasi eveniet inventore dolores facere similique fuga.
        </div>
    );
};

export default ViewBioData;