import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { render } from '@testing-library/react';

export function showAlert(){
    return(
        <div class="alert alert-primary" role="alert">
        A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
    );
};

render(<showAlert/>)
