import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    height: 40,
    padding: '0 30px',
    width: '100%'
  },
});

export default function FlatButtonb({
  label,
  onClick,
  color
}) {
  const classes = useStyles();

  return (
    <Button color={color} onClick={onClick} className={classes.root}>{label}</Button>
  )
}