import classes from './main.module.css';

const Main = ({children}) => {
    return <main className={classes.main}>
        {children}
    </main>
}

export default Main;