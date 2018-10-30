'use strict';

var app = angular.module('mainApp.controllers', ['nvd3']);

    app.controller('sunburstChartCtrl', function($scope){

        $scope.options = {
            chart: {
                type: 'sunburstChart',
                height: 450,
                color: d3.scale.category20c(),
                duration: 250,
                mode: 'size',
                groupColorByParent: false
            },
            title: {
              "enable": true,
              "text": "World of Warcraft Battleground Statistics",
              "className": "h4",
              "css": {
                "width": "600px",
                "textAlign": "center"
              }
            }
        };

        $scope.data = [{
            "name": "flare",
	        "color": "#000000",
            "children": [
                {
                    "name": "analytics",
                    "size": 0,
                    "children": [
                        {
                            "name": "cluster",
                            "children": [
                                {"name": "AgglomerativeCluster", "size": 50000},
                                {"name": "MergeEdge"}
                            ]
                        },
                        {
                            "name": "graph",
                            "children": [
                                {"name": "BetweennessCentrality"},
                                {"name": "SpanningTree"}
                            ]
                        },
                        {
                            "name": "optimization",
                            "children": [
                                {"name": "AspectRatioBanker"}
                            ]
                        }
                    ]
                },
                {
                    "name": "animate",
                    "size": 50,
                    "children": [
                        {"name": "Easing", "size": 17010},
                        {"name": "FunctionSequence", "size": 5842},
                        {
                            "name": "interpolate",
                            "children": [
                                {"name": "ArrayInterpolator", "size": 1983},
                                {"name": "RectangleInterpolator", "size": 2042}
                            ]
                        },
                        {"name": "ISchedulable", "size": 1041},
                        {"name": "Tween", "size": 6006}
                    ]
                }
            ]
        }];
    })