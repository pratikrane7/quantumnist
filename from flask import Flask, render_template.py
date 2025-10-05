from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('index.html')

# Features Page
@app.route('/features')
def features():
    return render_template('features.html')

# Quiz Page (new function)
@app.route('/quiz', methods=['GET', 'POST'])
def quiz():
    if request.method == 'POST':
        answers = request.form.to_dict()
        score = sum(1 for k, v in answers.items() if v.lower() == "correct")
        return render_template('quiz.html', score=score)
    return render_template('quiz.html', score=None)

if __name__ == "__main__":
    app.run(debug=True)