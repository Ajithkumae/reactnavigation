import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const allpages = [

    {
        name: 'Account',
        title: 'Ajith',
        routname:'Account'

    },
    {
        name: 'Save Card',
        title: 'Ajith',
        routname:'Saved card'

    },
    {
        name: 'Teams and condition',
        title: 'Ajith',
        routname:'Tearms'

    },
    {
        name: 'Privacy and policy',
        title: 'Ajith',
        routname:'Privacy'
    },
]
export default class More extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: allpages.map(el => el.pages)
        };
    }



    render() {



        const { buttons } = this.state
        return (
            <View>
                <View style={styles.continer} >
                    <Text> More </Text>

                </View>

                    <View>
                        {
                            allpages.map((item, index) =>
                                <TouchableOpacity
                                style={styles.button}
                                    key={index}

                                    onPress={()=>{this.props.navigation.navigate(item.routname.toString())}}

                                >

                                    <Text>{item.name}</Text>

                                </TouchableOpacity>
                            )}
                    </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    continer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin:40
    },
    button:{
        margin:15,
        // borderWidth:1,
        
        // padding:20,
        paddingVertical:10,

        borderBottomWidth:0.5,
        
    }
})