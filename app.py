from flask import Flask, render_template, request

my_app = Flask(__name__)

@my_app.route('/', methods = ['GET', 'POST'])
def root():
    return render_template('svg.html')

if __name__ == '__main__':
    my_app.debug = True
    my_app.run()
