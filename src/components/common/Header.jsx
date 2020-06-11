import React from 'react';
import {Alert , Badge} from 'react-bootstrap' ;

const Header = ({persons , title}) => {

    let badgeStyle = '';
    if (persons.length >= 3) badgeStyle = 'info' ;
    if (persons.length <= 2) badgeStyle = 'warning' ;
    if (persons.length <= 1) badgeStyle = 'danger' ;


    return (
        <div>
            <Alert variant='info'>
                <h2>{title}</h2>
            </Alert>

            {console.log(title)}
            
            <Alert variant='light'>
                تعداد اشخاص {' '}
                <Badge pill variant={badgeStyle}>
                    {persons.length}
                </Badge> {' '}
                    نفر می باشد
            </Alert>
        </div>
    )
}

export default Header ;