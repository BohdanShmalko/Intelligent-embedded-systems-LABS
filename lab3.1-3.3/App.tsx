import React, {useState} from 'react';
import {ActivityIndicator, Button, Text, TextInput, View} from 'react-native';
import Ferma from "./src/lab3.1/Ferma";
import Genetic from "./src/lab3.3/Genetic";

export default function App() {
    //lab 3.1 data
    const [N, setN] = useState('')
    const [result31, setResult31] = useState('')

    //lab 3.2 data

    const [result32, setResult32] = useState('in process...')

    //lab 3.3 data
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')
    const [d, setD] = useState('')
    const [y, setY] = useState('')
    const [result33, setResult33] = useState('')

    return (
        <View style={{padding: 40}}>

            {/*lab 3.1*/}
            <View style={{marginBottom: 20, alignItems: "center"}}>
                <Text style={{fontSize: 25, textAlign: "center"}}>Lab 3.1</Text>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={{fontSize: 20}}>Enter the number n : </Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 50, padding: 2}}
                               keyboardType={'numeric'} value={N} onChangeText={(newVal) => {
                        //Ferma(newVal, setResult)
                        setN(newVal)
                    }} placeholder='n'/>
                </View>
                <View style={{width: 100}}>
                    <Button title={'calculate'} onPress={() => {
                        Ferma(N, setResult31)
                    }}/>
                </View>
                <Text style={{textAlign: "center"}}>{result31}</Text>
            </View>

            {/*lab 3.2*/}
            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 25, textAlign: "center"}}>Lab 3.2</Text>
                <Text style={{textAlign: "center"}}>{result32}</Text>
            </View>

            {/*lab 3.3*/}
            <View style={{marginBottom: 20, alignItems: "center"}}>
                <Text style={{fontSize: 25, textAlign: "center"}}>Lab 3.3</Text>
                <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 10}}>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 30, padding: 2}}
                               keyboardType={'numeric'} value={a} onChangeText={setA} placeholder={'a'}/>
                    <Text style={{fontSize: 20}}>x1 + </Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 30, padding: 2}}
                               keyboardType={'numeric'} value={b} onChangeText={setB} placeholder={'b'}/>
                    <Text style={{fontSize: 20}}>x2 + </Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 30, padding: 2}}
                               keyboardType={'numeric'} value={c} onChangeText={setC} placeholder={'c'}/>
                    <Text style={{fontSize: 20}}>x3 + </Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 30, padding: 2}}
                               keyboardType={'numeric'} value={d} onChangeText={setD} placeholder={'d'}/>
                    <Text style={{fontSize: 20}}>x4 = </Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 30, padding: 2}}
                               keyboardType={'numeric'} value={y} onChangeText={setY} placeholder={'y'}/>
                </View>
                <View style={{width: 100}}>
                    <Button title={'calculate'} onPress={() => {
                        Genetic(a,b,c,d,y, setResult33)
                    }}/>
                </View>
                <Text style={{textAlign: "center"}}>{result33}</Text>
            </View>
        </View>
    );
}
