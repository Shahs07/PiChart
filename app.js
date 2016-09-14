var app = angular.module("pieChartApp",[]);

app.controller("piechartCtrl",[piechartCtrl]);

function piechartCtrl(){
	var self = this;
	// We can get this data through server request but for example purpose we are harcoding it

	self.pieChartData=[
		{label:"First Task",value:21},
		{label:"Second Task",value:54},
		{label:"Third Task",value:76}]
	
	self.pieChartConfig= {
      title: 'One Two Three Chart',
      firstColumnHeader: 'Counter',
      secondColumnHeader: 'Actual Value'
    };
    
    self.pieChartOptions = {
    	title:"Sample Chart",
    	is3D:true,
    	width:500,
    	height:500,
    	colors:['#cc0000','#339966','#ffcc00']
    }
    self.changeData=changeData;

    function changeData(){
    	self.pieChartData[1].value=27;
    };	
}