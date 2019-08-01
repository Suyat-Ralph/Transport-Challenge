from flask import Flask, render_template, request, jsonify
import os

template_dir = os.path.abspath('AutoBot')   #Put abs path on your pc
app = Flask(__name__, template_folder=template_dir,static_folder=template_dir)


@app.route('/add', methods=['GET', 'POST'])
def add():

    # POST request
    if request.method == 'POST':
        input_value = request.get_json()
        print(input_value)
        # must return a string value and note nums is a dict of strings
        print(str(input_value["score"]))

        return "1"

    # GET request
    else:
        message = {'greeting': 'Hello from Flask!'}
        print("HELLO")
        return jsonify(message)  # serialize and use JSON headers


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/handle_data',methods=['POST'])
def handle_data():
    user_input=request.form['projectFilepath']

    print(user_input)


if __name__=='__main__':
    app.run(debug=True, port=5002)