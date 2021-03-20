import React, {useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import Ferma from "./src/lab3.1/Ferma";
import Genetic from "./src/lab3.3/Genetic";
import {Form, Picker} from 'native-base'
import Perceptron from "./src/lab3.2/Perceptron";
import Check from "./src/lab3.2/Check";

export default function App() {
    //lab 3.1 data
    const [N, setN] = useState('')
    const [result31, setResult31] = useState('')

    //lab 3.2 data

    const [sigma, setSigma] = useState('0.001')
    const [time, setTime] = useState('do not use')
    const [iterations, setIterations] = useState('do not use')
    const [result32W, setResult32W] = useState('')
    const [result32V, setResult32V] = useState('')
    const [Ws, setWs] = useState<Array<number>>([])

    const [NX, setNX] = useState('')
    const [NY, setNY] = useState('')
    const [result32N, setResult32N] = useState('')

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
            <View style={{marginBottom: 20, alignItems: "center"}}>
                <Text style={{fontSize: 25, textAlign: "center"}}>Lab 3.2</Text>
                <Text style={{fontSize: 20}}>A(0,6) B(1,5) C(3,3) D(2,4) P=4</Text>
                <View>
                    <View style={{justifyContent: "center", flexDirection: "row"}}>
                        <Text style={{}}>Sigma = {sigma}</Text>
                        <Picker
                            style={{width : 40}}
                            mode="dropdown"
                            selectedValue={true}
                            onValueChange={(e) => {
                                setSigma(e)
                            }}
                        >
                            <Picker.Item label={'0.001'} value={'0.001'}/>
                            <Picker.Item label={'0.01'} value={'0.01'}/>
                            <Picker.Item label={'0.05'} value={'0.05'}/>
                            <Picker.Item label={'0.1'} value={'0.1'}/>
                            <Picker.Item label={'0.2'} value={'0.2'}/>
                            <Picker.Item label={'0.3'} value={'0.3'}/>
                        </Picker>

                        <Text style={{}}>time = {time}</Text>

                        <Picker
                            style={{width : 40}}
                            mode="dropdown"
                            selectedValue={true}
                            onValueChange={(e) => {
                                setTime(e)
                            }}
                        >
                            <Picker.Item label={'do not use'} value={'do not use'}/>
                            <Picker.Item label={'500ms'} value={'500'}/>
                            <Picker.Item label={'1000ms'} value={'1000'}/>
                            <Picker.Item label={'2000ms'} value={'2000'}/>
                            <Picker.Item label={'5000ms'} value={'5000'}/>
                        </Picker>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex : 4}}></View>
                    <Text style={{flex : 10}}>iterations = {iterations}</Text>
                    <Picker
                        style={{}}
                        mode="dropdown"
                        selectedValue={true}
                        onValueChange={(e) => {
                            setIterations(e)
                        }}
                    >
                        <Picker.Item label={'do not use'} value={'do not use'}/>
                        <Picker.Item label={'100'} value={'100'}/>
                        <Picker.Item label={'200'} value={'200'}/>
                        <Picker.Item label={'500'} value={'500'}/>
                        <Picker.Item label={'1000'} value={'1000'}/>
                    </Picker>
                    <View style={{flex : 4}}></View>
                </View>
                <View style={{width: 100}}>
                    <Button title={'calculate'} onPress={() => {
                        setWs(Perceptron([[0,6],[1,5],[3,3],[2,4]], 4, setResult32W, setResult32V, sigma, time, iterations))
                    }}/>
                </View>
                <Text style={{textAlign: "center"}}>{result32W}</Text>
                <Text style={{textAlign: "center"}}>{result32V}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={{textAlign: "center", fontSize: 20}}>N(</Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 30, padding: 2}}
                               keyboardType={'numeric'} value={NX} onChangeText={setNX} placeholder={'X'}/>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', width: 30, padding: 2}}
                               keyboardType={'numeric'} value={NY} onChangeText={setNY} placeholder={'Y'}/>
                    <Text style={{textAlign: "center", fontSize: 20}}>)</Text>
                </View>
                <View style={{width: 100}}>
                    <Button title={'check'} onPress={() => {
                        Check(Ws, [NX, NY], 4, setResult32N)
                    }}/>
                </View>
                <Text style={{textAlign: "center"}}>{result32N}</Text>
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
                        Genetic(a, b, c, d, y, setResult33)
                    }}/>
                </View>
                <Text style={{textAlign: "center"}}>{result33}</Text>
            </View>
        </View>
    );
}
