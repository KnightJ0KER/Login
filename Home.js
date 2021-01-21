import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Home() {
  return (
      <Swiper
        autoplay={true} //auto slide
        style={styles.wrapper}
        showsButtons={true} //to show Navigation Button
        buttonWrapperStyle ={styles.button}
        paginationStyle = {styles.dot}>

          {/*Image Container*/}

        <View style={styles.slide}>
          <Image
            source={require('./assets/Mobiles.jpeg')}
            style = {{width:'95%', height:250}}
              />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./assets/Electronics.jpeg')}
            style = {{width:'95%', height:250}}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./assets/fashion.jpeg')}
            style = {{width:'95%', height:250}}
                />
        </View>
      </Swiper>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    // marginTop: 20,
  },

  slide: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button:{
    top: '-25%',
    flex: 0.5,
  },

  dot:{
    marginBottom: 350,
  }

});
