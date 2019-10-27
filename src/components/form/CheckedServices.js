import React from 'react';

import CheckedServicesItem from './CheckedServicesItem';

// import styles from './CheckedServices.module.css'

function makeArray(object){
    let result = [];
    for(var key in object) {
       if (key !== 'number'){
           result.push(object[key])
       }
    };
    return result;
}

const CheckedServices = (props) => {

    
    let list;
    if (props.number === 0){
        let services = makeArray(props);
        list = services.map((name, index) => {
            return <CheckedServicesItem key = {index}
                            name = {name} src = 'inService'/>
        });
    }
    if (props.number === 1){
        let services = makeArray(props);
        list = services.map((name, index) => {
            return <CheckedServicesItem key = {index}
                            name = {name} src = 'outService'/>
        });
    }
    if (props.number === 2){
        let services = makeArray(props);
        console.log(services);
        list = services.map((name, index) => {
            return <CheckedServicesItem key = {index}
                        name = {name} src = 'notFound'/>
        });
    }

    return (
        <>
            {list}
        </>
    )
};


export default CheckedServices;