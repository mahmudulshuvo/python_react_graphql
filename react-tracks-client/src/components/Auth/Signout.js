import React from "react";
import {ApolloConsumer} from 'react-apollo';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Signout=({classes}) => {
  
  const handleSingout=client => {
    localStorage.removeItem('authToken')
    client.writeData({data: {isLoggedIn: false}})
    console.log('Signed out user ', client)
  }

  return (
    <ApolloConsumer>
      {client => (
        <Button>
          <Typography
            variant="body1"
            className={classes.buttonText}
            color="secondary"
            onClick= {() => handleSingout(client)}
          >
            Signout
          </Typography>
        </Button>
      )}
    </ApolloConsumer>
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonIcon: {
    marginLeft: "5px"
  }
};

export default withStyles(styles)(Signout);
