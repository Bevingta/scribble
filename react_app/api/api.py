import time
from flask import Flask

app = Flask(__name__)

@app.route("/")
def test_connection():
    return {'connected': True}

@app.route("/time")
def get_current_time():
    return {'time': time.time()}
