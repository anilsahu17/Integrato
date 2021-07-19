import { Component, OnInit } from '@angular/core';

/* amchart Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
/* amchart Imports */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  private chart: am4charts.XYChart;

  constructor() { }

  ngOnInit() {

      
      // Create chart instance
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2008",
        "italy": 1,
        "germany": 5,
        "uk": 3
      }, {
        "year": "2009",
        "italy": 1,
        "germany": 2,
        "uk": 6
      }, {
        "year": "2010",
        "italy": 2,
        "germany": 3,
        "uk": 1
      }, {
        "year": "2011",
        "italy": 3,
        "germany": 4,
        "uk": 1
      }, {
        "year": "2012",
        "italy": 5,
        "germany": 1,
        "uk": 2
      }, {
        "year": "2013",
        "italy": 3,
        "germany": 2,
        "uk": 1
      }, {
        "year": "2014",
        "italy": 1,
        "germany": 2,
        "uk": 3
      }, {
        "year": "2015",
        "italy": 2,
        "germany": 1,
        "uk": 5
      }, {
        "year": "2016",
        "italy": 3,
        "germany": 5,
        "uk": 2
      }, {
        "year": "2017",
        "italy": 4,
        "germany": 3,
        "uk": 6
      }, {
        "year": "2018",
        "italy": 1,
        "germany": 2,
        "uk": 4
      }];

      // Create category axis
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.opposite = false;

        // Create value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.min = 0;
        /*valueAxis.renderer.inversed = false;
        valueAxis.title.text = "Place taken";
        valueAxis.renderer.minLabelPosition = 0.01;*/

      // Modify chart's colors
        chart.colors.list = [
          am4core.color("#30d2d6"),
          am4core.color("#0266ff"),
          am4core.color("#845EC2"),
          am4core.color("#D65DB1"),
          am4core.color("#FF6F91"),
          am4core.color("#FF9671"),
          am4core.color("#FFC75F"),
          am4core.color("#F9F871"),
        ];


        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "italy";
        series1.dataFields.categoryX = "year";
        series1.name = "Italy";
        series1.strokeWidth = 3;
        series1.bullets.push(new am4charts.CircleBullet());
        series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible  = false;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "germany";
        series2.dataFields.categoryX = "year";
        series2.name = 'Germany';
        series2.strokeWidth = 3;
        series2.bullets.push(new am4charts.CircleBullet());
        series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        series2.legendSettings.valueText = "{valueY}";

        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "uk";
        series3.dataFields.categoryX = "year";
        series3.name = 'United Kingdom';
        series3.strokeWidth = 3;
        series3.bullets.push(new am4charts.CircleBullet());
        series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        series3.legendSettings.valueText = "{valueY}";

        // Add chart cursor
        //chart.cursor = new am4charts.XYCursor();
        //chart.cursor.behavior = "zoomY";

        // Add legend
        //chart.legend = new am4charts.Legend();


        ////**************end chart1***********/////



        
       // Create chart instance
          

       var chart2 = am4core.create("chartdiv2", am4charts.PieChart);
   
       // Add and configure Series
       var pieSeries = chart2.series.push(new am4charts.PieSeries());
       pieSeries.dataFields.value = "litres";
       pieSeries.dataFields.category = "country";
       pieSeries.ticks.template.disabled = true;
       pieSeries.labels.template.disabled = true;
   
   
       // Let's cut a hole in our Pie chart the size of 60% the radius
       chart2.innerRadius = am4core.percent(60);
   
   
   
       // color set
        pieSeries.colors.list = [
             am4core.color("#7dcdf2"),
             am4core.color("#886bff"),
             am4core.color("#fbc108"),
             am4core.color("#D65DB1"),
             am4core.color("#FF6F91"),
             am4core.color("#FF9671"),
             am4core.color("#FFC75F"),
             am4core.color("#F9F871"),
       ];
   
   
       // Add a legend
       chart2.legend = new am4charts.Legend();
       chart2.legend.position = "bottom";
   
      // Chart dataa 
        chart2.data = [{
             "country": "US",
             "litres": 201.9
           }, {
             "country": "UK",
             "litres": 99
           }, {
             "country": "IND",
             "litres": 60
           }];



  }




}
