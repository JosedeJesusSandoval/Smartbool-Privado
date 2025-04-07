import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from './Estilos.js';

export default function App() {
    // State variables
    const [displayValue, setDisplayValue] = useState('ingrese expresión');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    // Function to handle number inputs
    const handleNumberInput = (num) => {
        if (displayValue === 'ingrese expresión' || displayValue === 'ingrese expresión') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    // Function to handle operator inputs
    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    // Function to handle equal button press
    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '~') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '^') {
            setDisplayValue((num1 / num2).toString());
        }

        setOperator(null);
        setFirstValue('');
    };

    // Function to handle clear button press
    const handleClear = () => {
        setDisplayValue('ingrese expresión');
        setOperator(null);
        setFirstValue('');
    };

    return (
        <View style={styles.containerCalculadora}>
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>
                    {displayValue}
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('A')}
                    >
                        <Text style={styles.buttonTextCalculadora}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('B')}
                    >
                        <Text style={styles.buttonTextCalculadora}>B</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('C')}
                    >
                        <Text style={styles.buttonTextCalculadora}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonCalculadora, styles.operatorButton]}
                        onPress={() => handleOperatorInput('^')}
                    >
                        <Text style={[styles.buttonTextCalculadora, styles.operatorButtonText]}>
                            ^
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('D')}
                    >
                        <Text style={styles.buttonTextCalculadora}>D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('E')}
                    >
                        <Text style={styles.buttonTextCalculadora}>E</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('F')}
                    >
                        <Text style={styles.buttonTextCalculadora}>F</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonCalculadora, styles.operatorButton]}
                        onPress={() => handleOperatorInput('*')}
                    >
                        <Text style={[styles.buttonTextCalculadora, styles.operatorButtonText]}>
                            ×
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('P')}
                    >
                        <Text style={styles.buttonTextCalculadora}>P</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('Q')}
                    >
                        <Text style={styles.buttonTextCalculadora}>Q</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('R')}
                    >
                        <Text style={styles.buttonTextCalculadora}>R</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonCalculadora, styles.operatorButton]}
                        onPress={() => handleOperatorInput('~')}
                    >
                        <Text style={[styles.buttonTextCalculadora, styles.operatorButtonText]}>
                            ⊕
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('X')}
                    >
                        <Text style={styles.buttonTextCalculadora}>X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('Y')}
                    >
                        <Text style={styles.buttonTextCalculadora}>Y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCalculadora}
                        onPress={() => handleNumberInput('Z')}
                    >
                        <Text style={styles.buttonTextCalculadora}>Z</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonCalculadora, styles.operatorButton]}
                        onPress={() => handleOperatorInput('+')}
                    >
                        <Text style={[styles.buttonTextCalculadora, styles.operatorButtonText]}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.clearButton} 
                    onPress={handleClear}>
                    <Text style={styles.clearbuttonTextCalculadora}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonCalculadora, styles.equalButton]}
                    onPress={handleEqual}
                >
                    <Text style={styles.equalbuttonTextCalculadora}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}