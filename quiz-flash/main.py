import random, ask_question

data = []

class Question:
    def __init__(self,question,answer):
        self.question = question
        self.answer = answer

    def ask(self):
        print(f"Question: {self.question}")
        answer = input()
        if answer == self.answer:
            print("Correct")
        else:
            print(f"Wrong, the answer was {answer}")

questions = []
for q in data:
    questions.append(Question(q[0],q[1])) # dependant on the question

askedquestion = ask_question.askquestion(questions)
questions.remove(askedquestion)