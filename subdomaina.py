from flask import Flask, jsonify, make_response

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Subdomain A!"})

@app.route('/set-cookie')
def set_cookie():
    response = make_response(jsonify({"message": "Cookie set by Subdomain A!"}))
    response.set_cookie(
        'shared_cookie', 
        'value_from_a', 
        domain='.rootdomain.com',  # Adjust as needed based on your testing setup
        secure=False,             # Set to True if using HTTPS
        samesite='Lax',
        httponly=True             # Prevent JavaScript access
    )
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
