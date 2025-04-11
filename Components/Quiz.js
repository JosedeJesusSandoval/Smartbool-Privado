import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

// Define the structure of a question
const questions = [
  {
    question: '¿Cuál es la salida de una compuerta AND si ambas entradas son 1?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 1,
  },
  {
    question: '¿Cuál es la salida de una compuerta OR si ambas entradas son 0?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 0,
  },
  {
    question: '¿Cuál es la salida de una compuerta NOT si la entrada es 1?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 0,
  },
  {
    question: '¿Cuál es la salida de una compuerta NAND si ambas entradas son 1?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 0,
  },
  {
    question: '¿Cuál es la salida de una compuerta NOR si ambas entradas son 0?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 0,
  },
  {
    question: '¿Cuál es la salida de una compuerta XOR si las entradas son 1 y 0?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 1,
  },
  {
    question: '¿Cuál es la salida de una compuerta XNOR si ambas entradas son 1?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 1,
  },
  {
    question: '¿Cuál es la salida de una compuerta AND si una entrada es 0 y la otra es 1?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 0,
  },
  {
    question: '¿Cuál es la salida de una compuerta OR si una entrada es 1 y la otra es 0?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 1,
  },
  {
    question: '¿Cuál es la salida de una compuerta NOT si la entrada es 0?',
    options: ['0', '1', 'Depende', 'Ninguna de las anteriores'],
    correctOption: 1,
  },
  // Add more questions here if needed
];

export default function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);

  const handleOptionPress = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions(new Array(questions.length).fill(-1));
    setShowResult(false);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedOptions.forEach((selectedOption, index) => {
      if (selectedOption === questions[index].correctOption) {
        correctAnswers += 1;
      }
    });
    return (correctAnswers / questions.length) * 100;
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <View>
        <Text style={styles.question}>{question.question}</Text>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOptions[currentQuestionIndex] === index && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.quizButton} onPress={handleNextQuestion}>
          <Text style={styles.quizButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderResult = () => {
    const score = calculateScore();
    let message = '';
    let imageText = '';
    if (score < 60) {
      message = 'Debes estudiar más';
      imageText = 'Imagen 1';
    } else if (score < 80) {
      message = 'Buen trabajo, necesitas reforzar tus conocimientos';
      imageText = 'Imagen 2';
    } else if (score < 90) {
      message = 'Muy buen trabajo';
      imageText = 'Imagen 3';
    } else {
      message = 'Excelente';
      imageText = 'Imagen 3';
    }
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.result}>Tu puntaje es: {score}%</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.quizButton} onPress={handleRestart}>
          <Text style={styles.quizButtonText}>Reiniciar</Text>
        </TouchableOpacity>
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>{imageText}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {showResult ? renderResult() : renderQuestion()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  question: {
    fontSize: 24,
    marginBottom: 16,
  },
  option: {
    padding: 12,
    marginVertical: 4,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  selectedOption: {
    backgroundColor: '#c0c0c0',
  },
  optionText: {
    fontSize: 18,
  },
  result: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  quizButton: {
    width: '90%',
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  quizButtonText: {
    color: 'white',
    fontSize: 18,
  },
  placeholderImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: 'black',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});