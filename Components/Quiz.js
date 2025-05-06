import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

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
      const question = questions[index];
      if (question && selectedOption === question.correctOption) {
        correctAnswers += 1;
      }
    });
    return (correctAnswers / questions.length) * 100;
  };  

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <View>
        <Text style={styles.questionTitle}>Pregunta {currentQuestionIndex + 1}</Text>
        <Text style={styles.questionText}>{question.question}</Text>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionCard,
              selectedOptions[currentQuestionIndex] === index && styles.selectedOptionCard,
            ]}
            onPress={() => handleOptionPress(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderResult = () => {
    const score = calculateScore();
    let message = '';
    if (score < 60) {
      message = 'Debes estudiar más 🧐';
    } else if (score < 80) {
      message = 'Buen trabajo, ¡sigue practicando! 💪';
    } else if (score < 90) {
      message = '¡Muy bien hecho! 🎉';
    } else {
      message = '¡Excelente! 🏆';
    }

    return (
      <ScrollView contentContainerStyle={styles.resultContainer}>
        <Text style={styles.resultScore}>Tu puntaje: {score}%</Text>
        <Text style={styles.resultMessage}>{message}</Text>
        <TouchableOpacity style={styles.nextButton} onPress={handleRestart}>
          <Text style={styles.nextButtonText}>Reiniciar Quiz</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return <View style={styles.container}>{showResult ? renderResult() : renderQuestion()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebe0',
    padding: 20,
    justifyContent: 'center',
  },
  questionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOptionCard: {
    backgroundColor: '#cde1f9',
    borderColor: '#3a7bd5',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#b04f09',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  resultScore: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  resultMessage: {
    fontSize: 20,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
});
