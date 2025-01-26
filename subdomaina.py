from flask import Flask, render_template, make_response

app = Flask(__name__)

@app.route('/')
def home():
    # Render the HTML template and create a response
    response = make_response(render_template('index.html'))
    
    # Set the cookie in the response
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
