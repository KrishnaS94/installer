import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { Toolbar, ToolbarContent, ToolbarBackAction } from 'react-native-paper';
import Home from '../screens/Home';
import First from '../screens/First';

const CustomHeader = (props) => {
  const { getScreenDetails, scene, navigation } = props;
  const details = getScreenDetails(scene);

  return (
    <Toolbar dark statusBarHeight={Platform.OS === 'ios' ? 20 : StatusBar.currentHeight}>
      {navigation.state.routes.length > 1 && <ToolbarBackAction onPress={() => navigation.pop()} />}
      <ToolbarContent title={details.options.title} />
    </Toolbar>
  );
};

CustomHeader.propTypes = {
  getScreenDetails: PropTypes.func.isRequired,
  scene: PropTypes.shape({
    isActive: PropTypes.bool,
  }).isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};

const Stack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Home Screen',
        header: props => <CustomHeader {...props} />,
      }),
    },
    First: {
      screen: First,
      navigationOptions: () => ({
        title: 'First Screen',
        header: props => <CustomHeader {...props} />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);