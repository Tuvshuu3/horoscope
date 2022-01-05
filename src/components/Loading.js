import React from 'react';
import '../styles/index.css';

const Loading = () => {
    return <div id='loading' className='loadingCon center'>
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
};

export { Loading };