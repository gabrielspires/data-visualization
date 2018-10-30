import csv
import pprint

output = {
}

with open('wowbgs2.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        if row[0] == 'Battleground': continue

        # if output[row[2]][row[0]]: output[row[2]][row[0]] += 1
        output[row[2]][row[0]] = 1
        # print("BG: ", row[0], "Faction: ", row[2])
    pprint.pprint(output)
