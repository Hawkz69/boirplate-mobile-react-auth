import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    height: 40,
    padding: '0 20px',
    width: '90%'
  },
});

export default function OutlineButton({
  label,
  onClick,
  color
}) {
  const classes = useStyles();

  return (
    <Button variant="outlined" color={color} onClick={onClick} className={classes.root}>{label}</Button>
  )
}