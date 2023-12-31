from flask import Flask  #pylint: disable=import-error
from flask_cors import CORS  #pylint: disable=import-error
app = Flask(__name__)

CORS(app, origins='http://localhost:3000')  # Replace with your frontend URL


@app.route('/')
def hello():
    return 'Hello from Flask Backend!'

if __name__ == '__main__':
    app.run(debug=True, port=5007)
