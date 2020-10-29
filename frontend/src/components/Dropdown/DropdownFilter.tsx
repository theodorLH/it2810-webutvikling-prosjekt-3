import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CustomizedRadios from "./Radiobutton";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        paper: {
            marginRight: theme.spacing(2),
            maxHeight: ITEM_HEIGHT*4.5,
        },
    }),
);

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    Filter:
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {/*<CustomizedRadios/>   RADIOBUTTON */}

                                        <MenuItem onClick={handleClose}>Action</MenuItem>
                                        <MenuItem onClick={handleClose}>Romance</MenuItem>
                                        <MenuItem onClick={handleClose}>Drama</MenuItem>
                                        <MenuItem onClick={handleClose}>Horror</MenuItem>
                                        <MenuItem onClick={handleClose}>Crime</MenuItem>
                                        <MenuItem onClick={handleClose}>Comedy</MenuItem>
                                        <MenuItem onClick={handleClose}>Fantasy</MenuItem>
                                        <MenuItem onClick={handleClose}>Thriller</MenuItem>
                                        <MenuItem onClick={handleClose}>Documentary</MenuItem>
                                        <MenuItem onClick={handleClose}>Mystery</MenuItem>
                                        <MenuItem onClick={handleClose}>Music</MenuItem>
                                        <MenuItem onClick={handleClose}>Family</MenuItem>
                                        <MenuItem onClick={handleClose}>Adventure</MenuItem>
                                        <MenuItem onClick={handleClose}>War</MenuItem>
                                        <MenuItem onClick={handleClose}>Sci-Fi</MenuItem>
                                        <MenuItem onClick={handleClose}>Animation</MenuItem>
                                        <MenuItem onClick={handleClose}>Biography</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}