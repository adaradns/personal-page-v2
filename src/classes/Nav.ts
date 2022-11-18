class Nav {
    open: boolean;
    handleClick: any;

    constructor({ open, handleClick } : { open: boolean; handleClick: any } ) {
        this.open = open;
        this.handleClick = handleClick;
    }
}

export default Nav;