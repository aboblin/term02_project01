import csv

year = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

def getData():
    with open('stats.csv') as csvfile:
        readCSV = csv.reader(csvfile, delimiter=',')
        for row in readCSV:
            #print (row)
            #print (row[0])
            #print (row[1])
            for i in range(24):
                year[i].append(row[i])
                #print year
    print year

getData()
