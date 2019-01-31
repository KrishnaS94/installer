import React from 'react';
import { Button } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = (<Icon name="file-image" size={40} color="#900"/>)

import { Icon } from 'react-native-elements'


// const Fetchlocation = props => {

//     return(
//        <Button title="Get Location" onPress={props.onGetLocation} />

//     );

// };

const Fetchlocation = props => {
    return (
    // <Icon.Button name="file-image" backgroundColor="#3b5998" onPress={props.onGetLocation}>
     
    // </Icon.Button>

<Icon
raised
name='crosshairs'
type='font-awesome'
color='black'
onPress={props.onGetLocation} />
  );
    }

export default Fetchlocation;