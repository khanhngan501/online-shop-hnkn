import { IconButton, List, ListItem, Menu, MenuItem, Slide, ThemeProvider, Toolbar, createTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog"
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useEffect, useState } from "react";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },
    },
})
const Transition = forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement;
    },
        ref: React.Ref<unknown>,
    ) {
    return <Slide direction="right" ref={ref} {...props} />;
})
function Header() {
    const [open, setOpen] = useState(false);
    const [ headerColor, setHeaderColor ] = useState("bg-white")
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openAccount = Boolean(anchorEl);
    const handleCloseAccount = () => {
        setAnchorEl(null);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleScroll = () => {
        if (window.scrollY > 60) {
            setHeaderColor("bg-[#21202075]")
        } else {
            setHeaderColor("bg-white")
        }
        
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log("Remove scroll function")
        }
    }, [])
    return(

        <section className="mx-auto max-w-screen-xl mb-16 sticky top-0 z-50 h-[60px] max-sm:mb-4">
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <ThemeProvider theme={lightTheme}>
                        <AppBar color="primary">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </IconButton>
                        </Toolbar>
                        </AppBar>
                    </ThemeProvider>
                </AppBar>
                <List className="bg-red-400">
                    <ListItem>Nam</ListItem>
                    <ListItem>Nữ</ListItem>
                    <ListItem>Phụ kiện</ListItem>
                    <ListItem>Giới thiệu</ListItem>
                </List>
            </Dialog>
            <header className={`${headerColor} grid grid-cols-3 h-full items-center justify-between mb-6 max-sm:w-screen max-sm:px-2 max-sm:mb-0`}
            >
                <div onClick={()=>setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"     
                        strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6 sm:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <svg viewBox="0 0 111 21" fill="none" width="110" aria-label="Atoms">
                    <path d="M65.544 4.135a7.565 7.565 0 0 0-4.17 1.251 7.441 7.441 0 0 0-2.764 3.331 7.348 7.348 0 0 0-.427 4.29 7.399 7.399 0 0 0 2.054 3.8 7.532 7.532 0 0 0 3.843 2.032 7.583 7.583 0 0 0 4.337-.423 7.488 7.488 0 0 0 3.368-2.734 7.365 7.365 0 0 0 1.265-4.124c0-1.969-.79-3.857-2.198-5.249a7.548 7.548 0 0 0-5.308-2.174Zm0 12.344c-2.744 0-4.67-2.207-4.67-4.92 0-2.715 1.926-4.924 4.67-4.924 2.745 0 4.671 2.207 4.671 4.923s-1.927 4.921-4.67 4.921ZM47.09 16.33h-.357a1.211 1.211 0 0 1-.848-.347 1.187 1.187 0 0 1-.351-.839V8.317c0-2.474-1.557-4.178-5.675-4.178-4.308 0-5.922 1.897-6.087 4.756h2.75c.138-1.925 1.085-2.556 3.335-2.556s2.954.71 2.954 2.03c0 1.155-.75 1.622-2.147 1.786l-2.112.22c-4.004.385-5.394 2.123-5.394 4.4 0 2.72 2.03 4.204 5.114 4.204 2.085 0 3.697-.769 4.671-2.254.201 1.374 1.007 1.931 2.783 1.931h1.362l.003-2.325Zm-4.279-3.287c0 2.667-2.084 3.793-4.114 3.793-1.807 0-2.667-.853-2.667-2.145 0-1.264.695-2.062 3.002-2.337l1.994-.22c.779-.082 1.362-.247 1.78-.576l.005 1.485ZM50.362 6.718v8.77c0 2.364 1.39 3.162 3.974 3.162h2.44v-2.32h-2.435c-.318 0-.623-.124-.848-.347a1.18 1.18 0 0 1-.352-.839V6.718h3.636V4.464H53.14V.397h-2.78v4.067H47.09v2.254h3.272ZM96.184 9.138v9.518h-2.81v-9.16c0-2.034-.972-2.941-2.75-2.941-1.688 0-3.363 1.236-3.363 4.316v7.785h-2.78v-9.16c0-2.034-1.001-2.941-2.78-2.941-1.64 0-3.363 1.236-3.363 4.316v7.785h-2.78V4.464h2.668v2.124c.862-1.458 2.196-2.447 4.142-2.447 2.251 0 3.725 1.072 4.42 2.667.92-1.567 2.39-2.667 4.449-2.667 3.25-.006 4.947 2.083 4.947 4.997ZM98.493 14.142h2.779c.223 1.972 1.195 2.694 3.528 2.694 2.252 0 3.169-.715 3.169-1.972 0-1.128-.694-1.677-3.058-2.09l-1.473-.274c-3.086-.55-4.559-1.925-4.559-4.234 0-2.502 1.994-4.124 5.532-4.124 4.086 0 5.982 1.76 6.059 4.756h-2.695c-.112-2.034-1.335-2.612-3.364-2.612-1.807 0-2.78.716-2.78 1.898 0 1.214.973 1.676 2.669 2.007l1.5.247c3.502.66 4.977 1.87 4.977 4.233 0 2.778-2.252 4.343-6.004 4.343-3.826-.007-6.085-1.491-6.28-4.872Z" fill="#000"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.909 4.47a1.87 1.87 0 0 1-1.88 1.86 1.87 1.87 0 0 1-1.881-1.86 1.87 1.87 0 0 1 1.88-1.86 1.87 1.87 0 0 1 1.88 1.86Zm6.423 1.86a1.87 1.87 0 0 0 1.88-1.86 1.87 1.87 0 0 0-1.88-1.86 1.87 1.87 0 0 0-1.88 1.86 1.87 1.87 0 0 0 1.88 1.86Zm-4.161 7.704c1.375 0 2.49-1.103 2.49-2.463S11.546 9.11 10.17 9.11c-1.375 0-2.49 1.103-2.49 2.463s1.115 2.462 2.49 2.462Zm-8.29-.603a1.87 1.87 0 0 0 1.88-1.86 1.87 1.87 0 0 0-1.88-1.86A1.87 1.87 0 0 0 0 11.572a1.87 1.87 0 0 0 1.88 1.86Zm6.023 5.242a1.87 1.87 0 0 1-1.88 1.86 1.87 1.87 0 0 1-1.881-1.86 1.87 1.87 0 0 1 1.88-1.86 1.87 1.87 0 0 1 1.881 1.86Zm6.412 1.86a1.87 1.87 0 0 0 1.881-1.86 1.87 1.87 0 0 0-1.88-1.86 1.87 1.87 0 0 0-1.881 1.86 1.87 1.87 0 0 0 1.88 1.86Zm6.029-8.962a1.87 1.87 0 0 1-1.881 1.86 1.87 1.87 0 0 1-1.88-1.86 1.87 1.87 0 0 1 1.88-1.86 1.87 1.87 0 0 1 1.88 1.86Z" fill="#000"></path>
                </svg>
                <ul className="bg-red-400 flex justify-between 
                    max-sm:hidden ">
                    <li>Nam</li>
                    <li>Nữ</li>
                    <li>Phụ kiện</li>
                    <li>Giới thiệu</li>
                </ul>
                {/* Support and action user */}
                <div className="flex justify-end gap-4">
                    <span className="max-sm:hidden">Hỗ trợ</span>
                    <div onClick={(event) => setAnchorEl(event.currentTarget)}
                        aria-controls={openAccount ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAccount ? 'true' : undefined}
                        id="basic-button"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openAccount}
                        onClose={handleCloseAccount}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseAccount}>Profile</MenuItem>
                        <MenuItem onClick={handleCloseAccount}>My account</MenuItem>
                        <MenuItem onClick={handleCloseAccount}>Logout</MenuItem>
                    </Menu>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
            </header>
        </section>
    )
}
export default Header