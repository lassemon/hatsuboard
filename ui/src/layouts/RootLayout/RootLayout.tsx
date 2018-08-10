import withStyles, { StyleRulesCallback, WithStyles } from '@material-ui/core/styles/withStyles';
import NavBar from 'components/NavBar';
import * as React from 'react';

type ClassNames = 'root';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  }
});

class RootLayout extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;
    return (
      <div key="main" className={classes.root} role="main">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(RootLayout);