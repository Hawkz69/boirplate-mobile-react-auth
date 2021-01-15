import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import EventIcon from '@material-ui/icons/Event';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import placeholderUser from 'assets/imgs/user-avatar.png';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import * as actions from 'state/auth/actions';

import './DrawerMenu.scss';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  drawer: {
    width: '70%',
    marginTop: 50
  },
  drawerPaper: {
    width: '70%',
    marginTop: 53
  },
  listItemText: {
    marginLeft: -20
  }
}));

export default function DrawerMenu({ children }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.root} >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setIsOpenMenu(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              All Fitness Presential
            </Typography>

            <Drawer 
              className={classes.drawer}
              anchor={'left'}
              open={isOpenMenu}
              onClose={() => setIsOpenMenu(false)} 
              classes={{ paper: classes.drawerPaper }}>

              <ListItem button key={'Profile'}>
                <div Style="display: flex">
                  <div className="photo-user">
                    <img src={placeholderUser} className="photo-user"/>
                  </div>
                  <div Style="margin-top: 5px">
                    <p className="user-name-menu">Harrisson Ricardo de Biaggio</p>
                    <p className="user-date-menu">Cadastro em: 20/12/2012</p>
                  </div>
                  
                </div>
              </ListItem>
              <Divider />

              <ListItem button key={'Home'}>
                <ListItemIcon>{<HomeOutlinedIcon />}</ListItemIcon>
                <ListItemText className={classes.listItemText} primary={'Inicio'} />
              </ListItem>

              <ListItem button key={'Meus agendamentos'}>
                <ListItemIcon>{<ScheduleIcon />}</ListItemIcon>
                <ListItemText className={classes.listItemText} primary={'Meus agendamentos'} />
              </ListItem>

              <ListItem button key={'Meus Creditos'}>
                <ListItemIcon>{<ConfirmationNumberIcon />}</ListItemIcon>
                <ListItemText className={classes.listItemText} primary={'Meus Creditos'} />
              </ListItem>

              <ListItem button key={'Fazer agendamento'}>
                <ListItemIcon>{<EventIcon />}</ListItemIcon>
                <ListItemText className={classes.listItemText} primary={'Fazer agendamento'} />
              </ListItem>

              <ListItem button key={'Compra creditos'}>
                <ListItemIcon>{<ShoppingCartIcon />}</ListItemIcon>
                <ListItemText className={classes.listItemText} primary={'Compra creditos'} />
              </ListItem>

              <ListItem button key={'Meu Perfil'}>
                <ListItemIcon>{<AccountCircleOutlinedIcon />}</ListItemIcon>
                <ListItemText className={classes.listItemText} primary={'Meu Perfil'} />
              </ListItem>

              <Divider />

              <ListItem button key={'Sair'}>
                <ListItemIcon>{<ExitToAppOutlinedIcon />}</ListItemIcon>
                <ListItemText className={classes.listItemText} primary={'Sair'} onClick={() => dispatch(actions.signout())}/>
              </ListItem>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </>
  );
}