from flask import Flask, render_template, make_response

app = Flask(__name__)

@app.route('/')
def home():
    # Serve the HTML template
    return render_template('index.html')

@app.route('/set-cookie')
def set_cookie():
    # Create a response for setting the cookie
    response = make_response({"message": "Cookie has been set by Subdomain A!"})
    response.set_cookie(
        'shared_cookie',
        'value_from_a', 
        domain='.rootdomain.com',  # Adjust as needed for your setup
        secure=False,              # Use True if testing on HTTPS
        samesite='Lax',            # Allows same-site navigation and AJAX
        httponly=True              # Prevent JavaScript access
    )
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
