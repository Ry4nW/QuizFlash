import random, ask_question

# import data from the database
data = []

def correct():
    points += 1

class Question:
    def __init__(self,question,answer,tags):
        self.question = question
        self.answer = answer
        self.tags = tags

    def ask(self):
        print(f"Question: {self.question}")
        answer = input()
        if answer == self.answer:
            print("Correct")
        else:
            print(f"Wrong, the answer was {answer}")

    def tag_check(self,tag):
        if not tag in self.tags:
            return False
            correct()
        else:
            return True

questions = []
for q in data:
    questions.append(Question(q[0],q[1],q[2])) # dependant on the question
    # q[0] = Question
    # q[1] = Answer
    # q[2] = Tags (Subject, Difficulty, etc.)

askedquestion = ask_question.askquestion(questions)
questions.remove(askedquestion)