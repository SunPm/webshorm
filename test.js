$(".content").change(function () {
				$("[index]").remove();
				localStorage.removeItem('tableList');
				var attr = $(this).val().split("\n");
				var attr2 = [];
				var attr3 = [];
				for (var i = 0; i < attr.length; i++) {
					
					attr2[i] = attr[i].toString();
					attr3[i] = attr2[i].toString().split("	");
					if(attr3[i][0] == ''){
						attr3.splice(i,1)
					}else{
					   $(".btn-add").trigger("click");
					}

					
				}
				lengt = $("[index]").size();
				var $str = "";
				for (var x = 0; x < lengt; x++) {
					if(attr3[x].length > 1){
						$str += attr3[x].join("	") + "\n";
					}
				
					
				}
				if (localStorage.tableList == undefined) {
			      arr = [];
			    } else {
			      arr = JSON.parse(localStorage.tableList);
			    }
				
				localStorage.tableList = JSON.stringify(attr3);
				$("textarea").val($str)

				 $("[index]").each(function (j) {

					$(this).children().each(function (k) {
						$(this).html(attr3[j][k])
					})
					$(".info > tr").eq(j + 1).next().each(function (k) {
						console.log(k)
					})

				}) 


			})