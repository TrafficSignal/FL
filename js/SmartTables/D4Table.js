
// For Jquery Tabs
			$(function(){
				$('#tabs').tabs();
	 		});


// For Jquery Table Sorter
			$(document).ready(function() {
				var oTable = $('#example').dataTable( {
					"bProcessing": true,
					"sAjaxSource": "json/D4Table.json",
					"sPaginationType": "full_numbers"
				} );
			} );