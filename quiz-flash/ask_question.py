import random

def askquestion(questions):
    asked_q = random.choice(questions)
    asked_q.ask()
    return asked_q
