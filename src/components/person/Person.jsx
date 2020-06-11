import React from 'react';
// import './person.css' ;

const Person = ({fullName , deleted , change}) => {
    return ( 
        <div className='card text-white bg-info w-25 mb-3 mt-3 mx-auto'>
            <div className='card-body text-center'>
                <p className='d-block'> {fullName} </p>
                <div className='input-group justify-content-center'>
                    <input 
                        className='form-control w-50' 
                        type='text' 
                        onChange={change} 
                        placeholder={fullName}
                    />
                    <div className='input-group-prepend'>
                        <button  
                            className='btn btn-sm btn-danger fa fa-trash' 
                            onClick={deleted} 
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Person;