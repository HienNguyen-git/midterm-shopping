import classes from './Header.module.css'

function Header(){
    return <div className={classes.header}>
        <h1>Welcome to Shopping World</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Your Cart</li>
                <li>
                </li>
            </ul>
        </nav>
    </div>
}

export default Header