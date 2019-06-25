from chatterbot import ChatBot
import logging
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

logging.basicConfig(level=logging.CRITICAL)

chatB = ChatBot("FCA Bot",
                preprocessors=['chatterbot.preprocessors.clean_whitespace'],
                logic_adapters=['chatterbot.logic.BestMatch',
                                'chatterbot.logic.MathematicalEvaluation'])

trainer = ChatterBotCorpusTrainer(chatB)

trainer.train("chatterbot.corpus.english")

# conversation = [
#     "Hello",
#     "Hi there!",
#     "How are you doing?",
#     "I'm doing great.",
#     "That is good to hear",
#     "Thank you.",
#     "You're Welcome."
# ]
#
# trainer = ListTrainer(chatB)
#
# trainer.train(conversation)

# response = chatB.get_response("Good Morning")
# print(response)

def converse(quit="quit"):
    user_input = ""
    while user_input != quit:
        user_input = quit
        try:
            user_input = input(">")
        except EOFError:
            print(user_input)
        if user_input:
            while user_input[-1] in "!.":
                user_input = user_input[:-1]
            print(chatB.get_response(user_input))

converse()
