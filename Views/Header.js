import React from 'react';
import { StyleSheet, Text, Image ,View } from 'react-native';
import Logo1 from '../assets/Logo1.png'
import TextLogo from '../assets/TextLogo.png'

export default function Header() {
    const styles = StyleSheet.create({
        logo: {
            width: 150,
            height: 100
          },        
          TextLogo: {
            width: 125,
            height: 75
          },
      });

  return (
<View style={{flexDirection:'row',width:'100%',height:'100px',backgroundColor:'white'}}>


<View style={{ flex: 1 }} ><Image style={styles.logo}  source={Logo1} /></View>

<View style={{ flex: 3}} ><Image style={styles.TextLogo}  source={TextLogo} /></View>

<View style={{ flex: 1, backgroundColor: "red" }} ></View>

    </View>

    
  );
}

