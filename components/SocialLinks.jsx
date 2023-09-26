import React from 'react';
import * as styles from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const useStyles = styles.makeStyles((theme) => ({
  iconButton: {
    margin: theme.spacing(1),
  },
}));

const Social = ({ platform, link, icon }) => {
  const classes = useStyles();

  return (
    <Tooltip title={platform} arrow>
      <IconButton
        className={classes.iconButton}
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Social;

