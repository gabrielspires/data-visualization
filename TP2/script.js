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
                    {"name": "Arathi Basin Horde Wins", "size": 14},
                    {"name": "Battle for Gilneas Horde Wins", "size": 28},
                    {"name": "Deepwind Gorge Horde Wins", "size": 4},
                    {"name": "Eye of The Storm Horde Wins", "size": 12},
                    {"name": "Strand of The Ancients Horde Wins", "size": 6},
                    {"name": "Silvershard Mines Horde Wins", "size": 23},
                    {"name": "Seething Shore Horde Wins", "size": 7},
                    {"name": "Temple of Kotmogu Horde Wins", "size": 27},
                    {"name": "Twin Peaks Horde Wins", "size": 11},
                    {"name": "Warsong Gulch Horde Wins", "size": 23}]
            },
            {
                "name": "Alliance",
                "color": "#0240AB",
                "children": [
                    {"name": "Arathi Basin Alliance Wins", "size": 2},
                    {"name": "Battle for Gilneas Alliance Wins", "size": 14},
                    {"name": "Deepwind Gorge Alliance Wins", "size": 3},
                    {"name": "Eye of The Storm Alliance Wins", "size": 4},
                    {"name": "Strand of The Ancients Alliance Wins", "size": 3},
                    {"name": "Silvershard Mines Alliance Wins", "size": 14},
                    {"name": "Seething Shore Alliance Wins", "size": 7},
                    {"name": "Temple of Kotmogu Alliance Wins", "size": 13},
                    {"name": "Twin Peaks Alliance Wins", "size": 15},
                    {"name": "Warsong Gulch Alliance Wins", "size": 19}]
            }]
        }
    ];
})