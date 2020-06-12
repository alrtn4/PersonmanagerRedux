import React from 'react';
import { Alert, Badge } from 'react-bootstrap';
import simpleContext from './context/context';

const Header = () => {

    // let badgeStyle = '';
    // if (persons.length >= 3) badgeStyle = 'info';
    // if (persons.length <= 2) badgeStyle = 'warning';
    // if (persons.length <= 1) badgeStyle = 'danger';


    return (
        <simpleContext.Consumer>
            {context => (
                <div>
                    <Alert variant='info'>
                        <h2>{context.state.appTitle}</h2>
                    </Alert>

                    <Alert variant='light'>
                        تعداد اشخاص {' '}
                        <Badge pill >
                            {context.state.persons.length}
                        </Badge> {' '}
                        نفر می باشد
                    </Alert>
                </div>

            )}

            
        </simpleContext.Consumer>
    )
}

export default Header;