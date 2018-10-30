'use strict';

// http://krispo.github.io/angular-nvd3/#/sunburstChart
// Horde -> "color": "#8C1616",
// Alliance -> "color": "#0240AB",
// Death Knight #C41F3B 	Red †
// Demon Hunter #A330C9 	Dark Magenta
// Druid #FF7D0A 	Orange
// Hunter #ABD473 	Green
// Mage #40C7EB 	Light Blue
// Monk #00FF96 	Spring Green
// Paladin #F58CBA 	Pink
// Priest #FFFFFF 	White*
// Rogue #FFF569 	Yellow*
// Shaman #0070DE 	Blue
// Warlock #8787ED 	Purple
// Warrior #C79C6E 	Tan

var app = angular.module('mainApp.controllers', ['nvd3']);

app.controller('sunburstChartCtrl', function ($scope) {

    $scope.options = {
        chart: {
            type: 'sunburstChart',
            height: 850,
            color: d3.scale.category20c(),
            duration: 950,
            mode: 'size',
            groupColorByParent: false
        },
        title: {
            enable: true,
            text: "World of Warcraft Battleground Statistics",
            className: "h4",
            css: {
                width: "600px",
                textAlign: "right"
            }
        },
        styles: {
            classes: {
                "with-3d-shadow": true,
                "with-transitions": true,
                "gallery": false
            }
        }
    };

    $scope.data = [{
        "name": "flare",
        "color": "#FFFFFF",
        "children": [{
                'name': 'Horde',
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
                        ]
                    },
                    {
                        "name": "graph",
                        "children": [{
                                "name": "BetweennessCentrality"
                            },
                            {
                                "name": "SpanningTree"
                            }
                        ]
                    },
                    {
                        "name": "optimization",
                        "children": [{
                            "name": "AspectRatioBanker"
                        }]
                    }
                ]
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
                            }
                        ]
                    },
                    {
                        "name": "ISchedulable",
                        "size": 9
                    },
                    {
                        "name": "Tween",
                        "size": 10
                    }
                ]
            }
        ]
    }];
})