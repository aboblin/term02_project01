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

#makeDots(getCSV())
def test(testList):
    print testList
    return testList
