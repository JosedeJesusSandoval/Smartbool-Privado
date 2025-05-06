import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {
    const [displayValue, setDisplayValue] = useState('Ingrese expresión');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    const handleNumberInput = (num) => {
        if (displayValue === 'Ingrese expresión') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);
        let result = '';

        switch (operator) {
            case '+': result = num1 + num2; break;
            case '~': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '´': result = num1 / num2; break;
            default: result = 'Error';
        }

        setDisplayValue(result.toString());
        setOperator(null);
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('Ingrese expresión');
        setOperator(null);
        setFirstValue('');
    };

    const renderButton = (label, onPress, isOperator = false, isEqual = false) => (
        <TouchableOpacity
            style={[
                styles.button,
                isOperator && styles.operatorButton,
                isEqual && styles.equalButton
            ]}
            onPress={onPress}
        >
            <Text style={[
                styles.buttonText,
                isOperator && styles.operatorText,
                isEqual && styles.equalText
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{displayValue}</Text>
            </View>

            <View style={styles.keypad}>
                {[
                    ['A', 'B', 'C', '^'],
                    ['D', 'E', 'F', '*'],
                    ['P', 'Q', 'R', '~'],
                    ['X', 'Y', 'Z', '+']
                ].map((row, i) => (
                    <View key={i} style={styles.row}>
                        {row.map((item, j) =>
                            renderButton(
                                item,
                                () => item.match(/[A-Z]/)
                                    ? handleNumberInput(item)
                                    : handleOperatorInput(item),
                                !item.match(/[A-Z]/),
                                false,
                                `${i}-${j}` // <- Key única
                            )
                        )}
                    </View>
                ))}

                <View style={styles.row}>
                    {renderButton('C', handleClear, true)}
                    {renderButton('=', handleEqual, false, true)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    display: {
        width: '100%',
        padding: 20,
        backgroundColor: '#2a2a3d',
        borderRadius: 16,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    displayText: {
        fontSize: 36,
        color: '#f8f8f2',
        fontWeight: 'bold',
    },
    keypad: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    button: {
        flex: 1,
        margin: 6,
        backgroundColor: '#393953',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        elevation: 4,
    },
    buttonText: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: '500',
    },
    operatorButton: {
        backgroundColor: '#4b4b71',
    },
    operatorText: {
        color: '#f39c12',
        fontWeight: 'bold',
    },
    equalButton: {
        flex: 2,
        backgroundColor: '#27ae60',
    },
    equalText: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
    },
});
