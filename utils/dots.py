import csv

def getCSV():
    data = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    with open('stats.csv') as csvfile:
        readCSV = csv.reader(csvfile, delimiter=',')
        for row in readCSV:
            #print (row)
            #print (row[0])
            #print (row[1])
            #print len(data)
            for i in range(len(data)):
                #print data[i]
                #print row[i]
                data[i].append(row[i])
    #print data
    return data

	
def makeDots(nums):
    dots = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    for i in range(24):
        #print data[i]
        for x in nums[i]:
            try:
                y = int(x)
                #print (int(x)/10000)
                if (y%10000 == 0):
                    dots[i].append(y/10000)
                else:
                    dots[i].append(y/10000 + 1)
            except:
                pass
    #print dots
    return dots

def getCountries():
    print getCSV()[0]

#helper for top5Countries
def getMaxValueIndex(theArray):
	currentMaxIndex = 0
	currentMaxValue = 0
	for i in range(len(theArray)):
		if (int(theArray[i]) > currentMaxValue):
			currentMaxIndex = i
			currentMaxValue = int(theArray[i])
	return currentMaxIndex

	
#Array of arrays with 5 five countries
def top5Countries():
	countriesList = getCSV()[0]
	countriesList = countriesList[1:len(countriesList)]
	populationData = getCSV()[1:]
	retArray = []
	for i in range(1,len(populationData)):
		countryArray=[]
		for j in range(5):
			maxIndex = getMaxValueIndex(populationData[i][1:])
			countryArray.append([countriesList[maxIndex],populationData[i][maxIndex+1]])
			populationData[i][maxIndex+1] = 0
		retArray.append(countryArray)
	return retArray
	
#makeDots(getCSV())
#getCountries()
