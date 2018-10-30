import csv
import pprint

output = {
    "name": "World of Warcraft Battleground Statistics",
    "color": "#FFFFFF",
    "children": [{
        "name": "Horde",
        "color": "#8C1616",
        "children": [{}]
    },
    {
        "name": "Alliance",
        "color": "#0240AB",
        "children": [{}]
    }]
}
allywon = 0
allylost = 0
hordewon = 0
hordelost = 0
rows = 0

bgcode = ""
matchesPerBG = {
    "AB": 0,
    "BG": 0,
    "DG": 0,
    "ES": 0,
    "SA": 0,
    "SM": 0,
    "SS": 0,
    "TK": 0,
    "TP": 0,
    "WG": 0
}

with open('wowbgs2.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        rows += 1
        if row[0] == 'Battleground': continue
        
        

        if row[1] != bgcode:
            matchesPerBG[row[0]] += 1
            bgcode = row[1]
            if row[2] == "Alliance":
                if row[-4] == '1':
                    allywon += 1
                    hordelost += 1
                else:
                    allylost += 1
                    hordewon += 1
            elif row[2] == "Horde":
                if row[-4] == '1': 
                    hordewon += 1
                    allylost += 1
                else: 
                    allywon += 1
                    hordelost += 1
        
    pprint.pprint(matchesPerBG)
    pprint.pprint(output)

    print("\n\n\nRows: ", rows)
    print("Ally won:  ", allywon)
    print("Ally lost: ", allylost)
    print("Total ally profit:", allywon-allylost)

    print("Horde won:  ", hordewon)
    print("Horde lost: ", hordelost)
    print("Total horde profit:", hordewon-hordelost)

'''
{
    "name": "flare",
    "color": "#FFFFFF",
    "children": [{
        "name": "Horde",
        "color": "#8C1616",
        "size": 0,
        "children": [{
            "name": "Warsong Gulch",
            "children": [{
                    "name": "AgglomerativeCluster",
                    "size": 60
                },
                {
                    "name": "MergeEdge"
                }
            ]},
            {
                "name": "graph",
                "children": [{
                        "name": "BetweennessCentrality"
                    },
                    {
                        "name": "SpanningTree"
                    }
                ]},
            {
                "name": "optimization",
                "children": [{
                    "name": "AspectRatioBanker"
                }]
            }]
    },
    {
        "name": "Alliance",
        "color": "#0240AB",
        "size": 50,
        "children": [{
                "name": "Easing",
                "size": 10
            },
            {
                "name": "FunctionSequence",
                "size": 12
            },
            {
                "name": "interpolate",
                "children": [{
                    "name": "ArrayInterpolator",
                    "size": 13
                },
                {
                    "name": "RectangleInterpolator",
                    "size": 11
                }]
            },
            {
                "name": "ISchedulable",
                "size": 9
            },
            {
                "name": "Tween",
                "size": 10
            }]
    }]
}
'''