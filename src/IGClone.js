import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class IGClone extends Component {
    render(){
        return(
            <View style={{flex: 1, width: "100%", height: "100%" }}>
                <View
                style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{flexDirection:"row", alignItems: 'center'}}>
                        <Image
                        style={{width: 40, height: 40}}
                        source={{uri: 'https://lh3.googleusercontent.com/zGugq39hcKZ3kRyLRttBmZG6ssme0kxrYDYsp2u-vTTl2axUccwLEgeicistyXMboH_8ugxMlWpVeY7KokXhHpSE9Q'}}/>
                        <Text>UserName</Text>
                    </View>
                    <View>

                    </View>
                </View>


                <Image
                style={{ width: "100%", height: 100 }}
                source={{
                    uri: 'https://lh3.googleusercontent.com/dRE8jbTxbM-o9MxkrGR1rlJvQFB36yDU6EPr7zylncBqfdlDLuMgYMfw8Q7CfOWYSsY_27-2TbOSehadJUaXMw4WDqQ'}}
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
        flexDirection: "row"
    }
});

export default IGClone;