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
// Rogue #FFF569 	Yellow*
// Shaman #0070DE 	Blue
// Warlock #8787ED 	Purple
// Warrior #C79C6E 	Tan
// Priest #FFFFFF 	White*

var app = angular.module('mainApp.controllers', ['nvd3']);

app.controller('sunburstChartCtrl', function ($scope) {

    $scope.options = {
        chart: {
            type: 'sunburstChart',
            // height: 650,
            // width: 920,
            color: d3.scale.category20c(),
            duration: 950,
            mode: 'size',
            groupColorByParent: false,
            showLabels: true,
            margin: {
                "top": 0,
                "right": 0,
                "bottom": 200,
                "left": 0
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

    $scope.data = [
        {
            "name": "Battlegrounds Played",
            "color": "#FFFFFF",
            "children": [{
                "name": "Horde",
                "color": "#8C1616",
                "children": [
                    {"name": "Arathi Basin Horde Wins", "size": 14, "color": "#FF7D0A"},
                    {"name": "Battle for Gilneas Horde Wins", "size": 28, "color": "#A330C9"},
                    {"name": "Deepwind Gorge Horde Wins", "size": 4, "color": "#ABD473"},
                    {"name": "Eye of The Storm Horde Wins", "size": 12, "color": "#00FF96"},
                    {"name": "Strand of The Ancients Horde Wins", "size": 6, "color": "#F58CBA"},
                    {"name": "Silvershard Mines Horde Wins", "size": 23, "color": "#FFF569"},
                    {"name": "Seething Shore Horde Wins", "size": 7, "color": "#8787ED"},
                    {"name": "Temple of Kotmogu Horde Wins", "size": 27, "color": "#C79C6E"},
                    {"name": "Twin Peaks Horde Wins", "size": 11, "color": "#40C7EB"},
                    {"name": "Warsong Gulch Horde Wins", "size": 23, "color": "#C41F3B"}
                ]
            },
            {
                "name": "Alliance",
                "color": "#0240AB",
                "children": [
                    {"name": "Arathi Basin Alliance Wins", "size": 2, "color": "#FF7D0A"},
                    {"name": "Battle for Gilneas Alliance Wins", "size": 14, "color": "#A330C9"},
                    {"name": "Deepwind Gorge Alliance Wins", "size": 3, "color": "#ABD473"},
                    {"name": "Eye of The Storm Alliance Wins", "size": 4, "color": "#00FF96"},
                    {"name": "Strand of The Ancients Alliance Wins", "size": 3, "color": "#F58CBA"},
                    {"name": "Silvershard Mines Alliance Wins", "size": 14, "color": "#FFF569"},
                    {"name": "Seething Shore Alliance Wins", "size": 7, "color": "#8787ED"},
                    {"name": "Temple of Kotmogu Alliance Wins", "size": 13, "color": "#C79C6E"},
                    {"name": "Twin Peaks Alliance Wins", "size": 15, "color": "#40C7EB"},
                    {"name": "Warsong Gulch Alliance Wins", "size": 19, "color": "#C41F3B"}
                ]
            }]
        }
    ];
})