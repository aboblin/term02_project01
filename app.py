from flask import Flask, render_template, request
from utils.dots import *
from flask.json import jsonify

my_app = Flask(__name__)

@my_app.route('/', methods = ['GET', 'POST'])
def root():
    return render_template('svg.html')

@my_app.route('/getData', methods = ['GET','POST'])
def getData():
    data = getCSV()
    ans = jsonify(dotdata = makeDots(data),
                  countries = data[0])
    #print ans
    return ans
	
@my_app.route('/getTopFiveList',methods = ['GET','Post'])
def getTopFiveList():
	data = top5Countries()
	return jsonify(data)

if __name__ == '__main__':
    my_app.debug = True
    my_app.run()
