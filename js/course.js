
 
 $(document).ready(function ()  {

        // đọc dữ liệu ngay khi tải trang xong
		
        $.get("http://demo6370041.mockable.io/getcourses", function(data, status){

			
            for (var i = 0; i < data.data.length; i++) {
               
                var id = data.data[i].id;
               
                var name = data.data[i].name;
                // them dong vao
				
				tr=$("<tr></tr>");
				tr.append("<td>" + id + "</td>");
				tr.append("<td>" + name + "</td>");
				$("tbody").append(tr);			
            }
 },"json");})
 
