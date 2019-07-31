from flask import Flask, render_template, request
import os

template_dir = os.path.abspath('AutoBot')   #Put abs path on your pc
app = Flask(__name__, template_folder=template_dir,static_folder=template_dir)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/handle_data',methods=['POST'])
def handle_data():
    user_input=request.form['projectFilepath']

    print(user_input)


if __name__=='__main__':
    app.run(debug=True,port=5002)