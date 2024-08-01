import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export interface LoaderProps {
    data: string,
    display: boolean,
    setloaderdata: () => void,
    type: number,
}
interface State extends SnackbarOrigin {
    open: boolean;
}
const Loader = ({ data, display, setloaderdata, type }: LoaderProps) => {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };
    React.useEffect(()=>{
        if(type===2){
            handleClick({ vertical: 'top', horizontal: 'center' })();
        }
    },[type])
    return (
        <>
                <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {data}
                    </Alert>
                </Snackbar>
            <div className={`loader-box-main ${(display && type!=2) ? "" : "hidden"} `}>

                <div className='loader-box'
                    style={{ height: "300px", width: "500px", position: "absolute", zIndex: "99", marginTop: "12%", marginLeft: "30%" }}
                >
                    <div className={`absolute float-right right-2 top-2 loader-close-btn ${type == 3 ? "" : "hidden"}`} onClick={() => { setloaderdata() }}>
                        X
                    </div>
                    <div className='loader-box-text'>
                        <div className={`${type == 1 ? "" : "hidden"}`}>
                            <RotatingLines
                                visible={true}
                                // height="96"
                                width="96"
                                // color="red"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                            // wrapperStyle={{}}
                            // wrapperClass=""
                            />
                        </div>
                        <div className={`${type == 2 ? "" : "hidden"}`}>
                            <svg width="96px" height="96px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#4CAF50"></path><path d="M738.133333 311.466667L448 601.6l-119.466667-119.466667-59.733333 59.733334 179.2 179.2 349.866667-349.866667z" fill="#ffffff"></path></g></svg>
                        </div>
                        <div className={`${type == 3 ? "" : "hidden"}`}>
                            <svg width="96px" height="96px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z" fill="#ff0000"></path></g></svg>
                        </div>
                        <div className="">
                            {data}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader