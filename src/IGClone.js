import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'


class IGClone extends Component {
     constructor(){
         super();
         this.state = {
             screenWidth: Dimensions.get("window").width
         };
     }
    // componentDidMount(){
    //     this.setState({
    //         screenWidth:
    //     })
    // }
    render(){
        const imageUri = 'https://lh3.googleusercontent.com/dRE8jbTxbM-o9MxkrGR1rlJvQFB36yDU6EPr7zylncBqfdlDLuMgYMfw8Q7CfOWYSsY_27-2TbOSehadJUaXMw4WDqQ' + '=s' + Math.floor(this.state.screenWidth * 1.1) + "-c"

        return(
            <View style={{flex: 1, width: "100%", height: "100%" }}>
                <View
                style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{flexDirection:"row", alignItems: 'center'}}>
                        <Image
                        style={styles.userImage}
                        source={{uri: 'https://lh3.googleusercontent.com/zGugq39hcKZ3kRyLRttBmZG6ssme0kxrYDYsp2u-vTTl2axUccwLEgeicistyXMboH_8ugxMlWpVeY7KokXhHpSE9Q'}}/>
                        <Text
                        style={{
                            marginLeft: 10
                            }}>
                                UserName
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 22}}>...</Text>
                    </View>
                </View>


                <Image
                style={{ width: this.state.screenWidth, height: 400}}
                source={{
                    uri: imageUri}}
                    />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tempNav: {
        width: "100%",
        height: 50,
        marginTop: 20,
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgb(233, 233, 233)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userBar: {
        width: "100%",
        height: 50,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
});

export default IGClone;