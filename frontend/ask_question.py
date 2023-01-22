import random

def askquestion(questions):
    while True:
        asked_q = random.choice(questions)
        if asked_q.tag_check() or asked_q.tags == []:
            break
    asked_q.ask()
    return asked_q
