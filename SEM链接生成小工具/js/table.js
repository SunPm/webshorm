$(function () {
  //获取本地存储数据，并且转换成对象
  var arr = [];

  function getData() {
    if (localStorage.tableList == undefined) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.tableList);
    }
    return arr;


  }
  add()

  //把数据存到本地存储，并且转换成字符串格式的JSON
  function saveData(data) {
    //  var data = getData();
    //  JSON.stringify(localStorage.tableList);
    localStorage.tableList = JSON.stringify(data);
  }

  //增加行方法
  function add() {
    // alert(1)
    $("tr:not(tr:first,tr:last)").remove(); //每次增加行前删除前面的行，否则会重复增加
    var data = getData();
    $.each(data, function (i, v) {
      $("<tr>").attr("index", i).html("<td contenteditable='true' data-role='planname'>" + v.planname + "</td>" + "<td contenteditable='true' data-role='itemname'>" + v.itemname + "</td>" + "<td contenteditable='true' data-role='keyword'>" + v.keyword + "</td>" + "<td contenteditable='true' data-role='reg'>" + v.reg + "</td>"+ "<td contenteditable='true' data-role='price'>" + v.price + "</td>"+ "<td contenteditable='true' data-role='pc_url'>" + v.pc_url + "</td>"+ "<td contenteditable='true' data-role='wap_url'>" + v.wap_url + "</td>" + "<td><button class='btn btn-danger btn-sm del'>删除</button></td>").insertBefore("tr:last");
    })
    saveData(data);
  }

  //点击增加按钮事件
  $('.btn-add').click(function () {
    var data = getData();
    data.push({
      "planname": "",
      "itemname": "",
      "keyword": "",
      "reg": "",
      "price": "",
      "pc_url": "",
      "wap_url": "",
    });
    saveData(data);
    add();

  })


  


  //可编辑效果 contenteditable='true'
  $('table').on('blur', '[contenteditable="true"]', function () {

    var data = getData();
    var index = $(this).parent().attr('index');
    var val = $(this).html();
    var attr = $(this).attr('data-role');
    data[index][attr] = val;
    saveData(data);

  })




})