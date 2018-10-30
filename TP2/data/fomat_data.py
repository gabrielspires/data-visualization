import csv
import pprint

output = {
    "name": "World of Warcraft Battleground Statistics",
    "color": "#FFFFFF",
    "children": [{
        "name": "Horde",
        "color": "#8C1616",
        "children": [{
            {"name": "Arathi Basin", "size": 0},
            {"name": "Battle for Gilneas", "size": 0},
            {"name": "Deepwind Gorge", "size": 0},
            {"name": "Eye of The Storm", "size": 0},
            {"name": "Strand of The Ancients", "size": 0},
            {"name": "Silvershard Mines", "size": 0},
            {"name": "Seething Shore", "size": 0},
            {"name": "Temple of Kotmogu", "size": 0},
            {"name": "Twin Peaks", "size": 0},
            {"name": "Warsong Gulch", "size": 0}
        }]
    },
    {
        "name": "Alliance",
        "color": "#0240AB",
        "children": [{
            {"name": "Arathi Basin", "size": 0},
            {"name": "Battle for Gilneas", "size": 0},
            {"name": "Deepwind Gorge", "size": 0},
            {"name": "Eye of The Storm", "size": 0},
            {"name": "Strand of The Ancients", "size": 0},
            {"name": "Silvershard Mines", "size": 0},
            {"name": "Seething Shore", "size": 0},
            {"name": "Temple of Kotmogu", "size": 0},
            {"name": "Twin Peaks", "size": 0},
            {"name": "Warsong Gulch", "size": 0}
        }]
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

nameMap = {
    "Horde": 0,
    "Alliance": 1,
    "AB": 0,
    "BG": 1,
    "DG": 2,
    "ES": 3,
    "SA": 4,
    "SM": 5,
    "SS": 6,
    "TK": 7,
    "TP": 8,
    "WG": 9
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
                    #print("Alliance won in", battlegrounds[row[0]])
                    output["children"][nameMap[row[2]]]["children"][0][nameMap[row[0]]] += 1
                    #print(output["children"][nameMap[row[2]]]["children"][0][nameMap[row[0]]])
                    allywon += 1
                    hordelost += 1
                else:
                    #print("Horde won in", battlegrounds[row[0]])
                    output["children"][nameMap[row[2]]]["children"][0][nameMap[row[0]]] += 1
                    allylost += 1
                    hordewon += 1
            elif row[2] == "Horde":
                if row[-4] == '1': 
                    #print("Horde won in", battlegrounds[row[0]])
                    output["children"][nameMap[row[2]]]["children"][0][nameMap[row[0]]] += 1
                    hordewon += 1
                    allylost += 1
                else: 
                    #print("Alliance won in", battlegrounds[row[0]])
                    output["children"][nameMap[row[2]]]["children"][0][nameMap[row[0]]] += 1
                    allywon += 1
                    hordelost += 1
        
    #pprint.pprint(matchesPerBG)
    print(output)
'''
    print("\n\n\nRows: ", rows)
    print("Ally won:  ", allywon)
    print("Ally lost: ", allylost)
    print("Total ally profit:", allywon-allylost)

    print("Horde won:  ", hordewon)
    print("Horde lost: ", hordelost)
    print("Total horde profit:", hordewon-hordelost)

    print(output["children"][0]["name"])
'''
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