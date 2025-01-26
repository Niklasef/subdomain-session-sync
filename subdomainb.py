from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS for Subdomain A
CORS(app, supports_credentials=True, origins=["http://subdomaina.rootdomain.com:5000"])

@app.route('/')
def home():
    cookie = request.cookies.get('shared_cookie')
    return jsonify({
        "message": "Hello from Subdomain B!",
        "cookie_value": cookie or "No cookie received"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
