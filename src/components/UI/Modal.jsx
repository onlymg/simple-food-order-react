import { Fragment } from 'react';

import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideCart} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay children={props.children}/>, portalElement)}
    </Fragment>
};

export default Modal;
