import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';



const UserMap = props => {

    let userLocationMarker= null;

         if (props.userLocation) {
            userLocationMarker = <MapView.Marker draggable coordinate= {props.userLocation}  />
         } 

return (
<View style={styles.mapContainer}>
    <MapView 
    initialRegion={{
        latitude:25.3463,
        longitude:55.4209,
        latitudeDelta:0.06,
        longitudeDelta:0.06
    }}
    region={props.userLocation}
    
    style={styles.map}>
   

    {userLocationMarker}
    </MapView>
</View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width:'100%',
        height:200,
        // marginTop:20
    },
    map: {
        width:'100%',
        height:'100%'
    }
})

export default UserMap;