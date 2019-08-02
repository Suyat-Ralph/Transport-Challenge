# import flask dependencies
from flask import Flask, request, make_response, jsonify
import data_clean
# initialize the flask app
app = Flask(__name__)
# default route
@app.route('/')
def index():
    return 'Hello World!'
# function for responses
def results():

    req = request.get_json(force=True)
    # fetch action from json
    action = req.get('queryResult').get('parameters')
    action = str(list(action.keys())[0])
    print(action)

    df = data_clean.initial()
    if action == "best":
        selling = str(data_clean.get_best_selling(df))
        print(selling)
        return {'fulfillmentText':"The best selling car is " + selling.split(":")[0][0].capitalize() + selling.split(":")[0][1:] + " with " + selling.split(":")[1] \
                                  + " trim."}
    elif action == "popular":
        popular = str(data_clean.get_most_popular(df))
        print(popular, type(popular))
        # build a request object
        # return a fulfillment response
        return {'fulfillmentText': popular}

# create a route for webhook
@app.route('/webhook', methods=['GET', 'POST'])
def webhook():
    # return response
    return make_response(jsonify(results()))
# run the app
if __name__ == '__main__':
   app.run()