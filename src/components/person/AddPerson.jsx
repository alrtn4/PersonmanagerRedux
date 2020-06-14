import { Button } from 'react-bootstrap';
import  React, { useContext , useEffect , useRef}  from 'react';
import simpleContext from '../common/context/context';

const AddPerson = () => {

    const context = useContext(simpleContext) ;

    const textInput = useRef(null) ;

    useEffect(() => {
        textInput.current.focus() ;
    }) ;

    return (
        // <simpleContext.Consumer>
        //     {context => (
                <div className='m-2 p-2'>
                    <form className='form-inline justify-content-center'
                        onSubmit={event => event.preventDefault()}
                    >
                        <div className='input-group w-25'>
                            <input
                                className='form-control'
                                type='text'
                                id='newName'
                                placeholder='نام بهم بده'
                                ref={textInput}
                            />
                            <div className='input-group-prepend'>
                                <Button
                                    type='submit'
                                    className='fa fa-plus-square'
                                    variant='success'
                                    size='sm'
                                    onClick={context.handleAddPersons}
                                />
                            </div>
                        </div>
                    </form>
                </div>

        //     )} 

        // </simpleContext.Consumer>

    )
}

export default AddPerson;